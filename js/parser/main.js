// js / parser / main.js
/**
 * 这是解析模板功能的 main 文件
 * */
import {back, template} from "../../assets/template.js"; // 把模板导进来
import {fontList} from "./fontList.js"; // 字体和对应文件的对照表
import {runtimeImageMap, runtimeLayerState} from "../console/image.js";

const canvas01 = document.getElementById("canvas01");
const canvas02 = document.getElementById("canvas02");
const ctxmap = {
  ctx01: canvas01.getContext("2d"),
  ctx02: canvas02.getContext("2d")
};
let dragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;
const loadedFonts = {}; // 存放已加载的字体
const mirrorConfig = {
  axisX: null, // 镜像轴(正面初始中心)
};
document.addEventListener("DOMContentLoaded", () => {
  readTemplate(template, "ctx01");
  setTimeout(() => {
    readTemplate(back, "ctx02");
  }, 100);
});

// readTemplate(template, "ctx01");
// readTemplate(back, "ctx02");

export function readTemplate(template, ctx) {
  const canvas = ctxmap[ctx].canvas;
  ctxmap[ctx].clearRect(0, 0, canvas.width, canvas.height);
  read(template.layers, ctx);
}

async function read(layers, ctx) {
  for (let i = layers.length - 1; i >= 0; i--) {
    const lay = layers[i];
    if (!lay.visible) continue;
    if (lay.type === "group") await read(lay.children, ctx);
    else if (lay.type === "image") {
      if (lay.id === "tu_pian") await drawEditableImage(lay, ctx);
      else await drawImage(lay, ctx);
    } else if (lay.type === "image_back") await drawImageBack(lay, ctx);
    else if (lay.type === "color") drawColor(lay, ctx);
  }
  for (let i = layers.length - 1; i >= 0; i--) {
    const lay = layers[i];
    if (!lay.visible) continue;
    if (lay.type === "text") await drawText(lay, ctx);
  }
}

async function drawText(lay, ctx, layersMap = {}) {
  /**
   * 这个函数用来渲染文字
   */
  if (!lay || typeof lay.text !== "string" || !lay.visible) return;
  const fontKey = await loadFont(lay.font.family, lay.font.style);
  const fontSize = convertFontSize(lay.font.size) || 20;
  const hScale = (lay.font.hScale || 100) / 100;
  const trackingPx = (lay.font.tracking || 0) / 1000 * fontSize;
  ctxmap[ctx].save();
  ctxmap[ctx].font = `${fontSize}px "${fontKey}"`;
  let totalWidth = 0;
  for (let i = 0; i < lay.text.length; i++) {
    const char = lay.text[i];
    totalWidth += ctxmap[ctx].measureText(char).width + trackingPx;
  }
  let x = lay.layout.left;
  let y = lay.layout.top;
  if (lay.layout.follow) {
    const target = layersMap[lay.layout.follow.target];
    if (target && target.renderInfo) {
      x = target.renderInfo.x + target.renderInfo.width + (lay.layout.follow.offsetX || 0);
      y = target.renderInfo.y + target.renderInfo.height - fontSize;
    }
  }
  ctxmap[ctx].translate(x, y);
  ctxmap[ctx].rotate(degToRad(lay.layout.rotate || 0));
  ctxmap[ctx].scale(hScale, 1);
  if (lay.layout.flip === "horizontal") {
    ctxmap[ctx].translate(0, fontSize);
    ctxmap[ctx].scale(1, -1);
  }
  ctxmap[ctx].fillStyle = lay.font.color || "#ffffff";
  ctxmap[ctx].textBaseline = "top";
  ctxmap[ctx].globalAlpha = lay.opacity / 100;
  let currentOffsetX = 0;
  for (let i = 0; i < lay.text.length; i++) {
    const char = lay.text[i];
    ctxmap[ctx].fillText(char, currentOffsetX, 0);
    currentOffsetX += ctxmap[ctx].measureText(char).width + trackingPx;
  }
  ctxmap[ctx].restore();
  lay.renderInfo = {
    x, y, width: totalWidth * hScale, height: fontSize
  };
}

function drawImage(lay, ctx) {
  /**
   * 这个函数用来渲染图片
   */
  if (!lay || !lay.visible) return Promise.resolve();
  if (!lay.src) return Promise.resolve();
  return new Promise((resolve) => {
    const img = new Image();
    img.src = runtimeImageMap[lay.src] || lay.src;
    img.onload = () => {
      ctxmap[ctx].drawImage(img, lay.layout.left ?? 0, lay.layout.top ?? 0);
      resolve();
    };
    img.onerror = () => {
      console.warn(`图片加载失败，已跳过：${lay.src}`);
      resolve();
    };
  });
}


function drawImageBack(lay, ctx) {
  /**
   * 背影渲染
   */
  if (!lay || !lay.visible || !lay.src) return Promise.resolve();
  return new Promise((resolve) => {
    const img = new Image();
    img.src = runtimeImageMap[lay.src] || lay.src;
    img.onload = () => {
      const mainCtx = ctxmap[ctx];
      // 找正面图层
      const front = findLayerById(template.layers, "tu_pian");
      if (!front || !front.renderInfo) {
        resolve();
        return;
      }
      const frontInfo = front.renderInfo;
      const state = runtimeLayerState[front.id] || {};
      const scale = state.scale ?? 1;
      if (mirrorConfig.axisX === null) mirrorConfig.axisX = frontInfo.x + frontInfo.width / 2;
      const frontCenterX = frontInfo.x + frontInfo.width / 2;
      const backW = img.width * scale;
      const backH = img.height * scale;
      const backCenterX = mirrorConfig.axisX * 2 - frontCenterX;
      const x = backCenterX - backW / 2;
      const y = frontInfo.y;
      const offCanvas = document.createElement("canvas");
      offCanvas.width = backW;
      offCanvas.height = backH;
      const offCtx = offCanvas.getContext("2d");
      // 水平翻转
      offCtx.save();
      offCtx.translate(backW, 0);
      offCtx.scale(-1, 1);
      offCtx.drawImage(img, 0, 0, backW, backH);
      offCtx.restore();
      // 着色
      const imageData = offCtx.getImageData(0, 0, backW, backH);
      const data = imageData.data;
      const {r, g, b} = hexToRgb(lay.color ?? "#000");
      for (let i = 0; i < data.length; i += 4)
        if (data[i + 3] > 0) {
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
        }
      offCtx.putImageData(imageData, 0, 0);
      mainCtx.save();
      mainCtx.globalAlpha = (lay.opacity ?? 100) / 100;
      mainCtx.drawImage(offCanvas, x, y);
      mainCtx.restore();
      resolve();
    };
    img.onerror = () => resolve();
  });
}

async function drawEditableImage(lay, ctx) {
  if (!lay.visible || !lay.src) return Promise.resolve();
  return new Promise(resolve => {
    const state = runtimeLayerState[lay.id] || {};
    const realSrc = runtimeImageMap[lay.src] || lay.src;
    const img = new Image();
    img.src = realSrc;
    img.onload = () => {
      const scale = state.scale ?? 1;
      const x = state.x ?? lay.layout.left ?? 0;
      const y = state.y ?? lay.layout.top ?? 0;
      const w = img.width * scale;
      const h = img.height * scale;
      ctxmap[ctx].drawImage(img, x, y, w, h);
      lay.renderInfo = {
        x,
        y,
        width: w,
        height: h
      };
      resolve();
    };
    img.onerror = () => {
      console.warn("可编辑图片加载失败: ", realSrc);
      resolve();
    };
  });
}

function drawColor(lay, ctx) {
  /**
   * 这个函数用来渲染纯色
   */
  if (!lay || lay.type !== "color") return;
  if (!lay.visible) return;
  const context = ctxmap[ctx];
  const {left, top} = lay.layout;
  context.save();
  context.globalAlpha = (lay.opacity ?? 100) / 100;
  if (lay.gradient && lay.gradient.direction === "rb-to-lt") {
    const fromAlpha = lay.gradient.fromAlpha ?? 0.8;
    const midPos = lay.gradient.toAlphaAt ?? 0.5;
    const gradient = context.createLinearGradient(left + lay.width, top + lay.height, left, top);
    gradient.addColorStop(0, hexToRgba(lay.color, fromAlpha));
    gradient.addColorStop(midPos, hexToRgba(lay.color, 0));
    gradient.addColorStop(1, hexToRgba(lay.color, 0));
    context.fillStyle = gradient;
  } else context.fillStyle = lay.color || "#000";
  context.fillRect(left, top, lay.width, lay.height);
  context.restore();
}

async function loadFont(family, style) {
  /**
   * 这个函数用来给文本找对应的字体
   */
  const fontInfo = fontList[family];
  if (!fontInfo) throw new Error(`- 字体 ${family} 不存在 -`);
  const fontPath = fontInfo[style];
  if (!fontPath) throw new Error(`- 字体 ${family} 样式 ${style} 丢失 -`);
  const fontKey = `${family}-${style}`;
  if (loadedFonts[fontKey]) return loadedFonts[fontKey];
  const font = new FontFace(fontKey, `url(${fontPath})`);
  await font.load();
  document.fonts.add(font);
  loadedFonts[fontKey] = fontKey;
  return fontKey;
}

function convertFontSize(pt, ppi = 300) {
  /**
   * 这个函数用来转换字体大小
   */
  return pt * ppi / 72;
}

function degToRad(deg) {
  return deg * Math.PI / 180;
}

function hexToRgba(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return {r, g, b};
}

function hitTest(x, y, renderInfo) {
  if (!renderInfo) return false;
  return (
      x >= renderInfo.x &&
      x <= renderInfo.x + renderInfo.width &&
      y >= renderInfo.y &&
      y <= renderInfo.y + renderInfo.height
  )
}

function findLayerById(layers, id) {
  for (const lay of layers) {
    if (lay.id === id) return lay;
    if (lay.type === "group" && lay.children) {
      const found = findLayerById(lay.children, id);
      if (found) return found;
    }
  }
  return null;
}

canvas01.addEventListener("mousedown", e => {
  const rect = canvas01.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const lay = findLayerById(template.layers, "tu_pian");
  if (!lay || !lay.renderInfo) return;
  // 判断鼠标是否指向人物
  // if (hitTest(x, y, lay.renderInfo)) {
  //   dragging = true;
  //   dragOffsetX = x - lay.renderInfo.x;
  //   dragOffsetY = y - lay.renderInfo.y;
  // }
  dragging = true;
  dragOffsetX = x - lay.renderInfo.x;
  dragOffsetY = y - lay.renderInfo.y;
});
canvas01.addEventListener("mousemove", e => {
  if (!dragging) return;
  const rect = canvas01.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  runtimeLayerState.tu_pian.x = x - dragOffsetX;
  runtimeLayerState.tu_pian.y = y - dragOffsetY;
  readTemplate(template, "ctx01");
  readTemplate(back, "ctx02");
});
canvas01.addEventListener("wheel", (e) => {
  e.preventDefault();
  const rect = canvas01.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const lay = findLayerById(template.layers, "tu_pian");
  if (!lay || !lay.renderInfo) return;
  // 只在鼠标指向人物时缩放
  // if (!hitTest(mouseX, mouseY, lay.renderInfo)) return;
  runtimeLayerState.tu_pian ||= {};
  const state = runtimeLayerState.tu_pian;
  const oldScale = state.scale ?? 1;
  const delta = e.deltaY > 0 ? -0.05 : 0.05;
  let newScale = oldScale + delta;
  // 限制缩放范围
  newScale = Math.min(Math.max(newScale, 0.2), 5);
  // 以鼠标为中心缩放
  const rx = (mouseX - lay.renderInfo.x) / lay.renderInfo.width;
  const ry = (mouseY - lay.renderInfo.y) / lay.renderInfo.height;
  const newWidth = lay.renderInfo.width * (newScale / oldScale);
  const newHeight = lay.renderInfo.height * (newScale / oldScale);
  state.x = mouseX - rx * newWidth;
  state.y = mouseY - ry * newHeight;
  state.scale = newScale;
  readTemplate(template, "ctx01");
  readTemplate(back, "ctx02");
}, {
  passive: false,
});
window.addEventListener("mouseup", () => {
  dragging = false;
});





































