// js / console / image.js
/**
 * 这个 js 用来修改图片
 */
import {back, template} from "../../assets/template.js";
import {readTemplate} from "../parser/main.js";
// 修改人物图片
const imageUpload = document.getElementById("imageUpload");
imageUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  replaceImage("assets/layers/tuPian.png", url);
});
export const runtimeImageMap = {}; // 运行时图片映射表
function replaceImage(originalSrc, newSrc) {
  runtimeImageMap[originalSrc] = newSrc;
  readTemplate(template, "ctx01");
  readTemplate(back, "ctx02");
}
// 人物移动
export const runtimeLayerState = {
  tu_pian: {
    x: null,
    y: null,
    scale: 1
  }
}
// 选择职业
const seProfession = document.getElementById("seProfession");
const dataProfession = template.layers[0].children[2].children;
dataProfession.forEach(item => {
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.name;
  seProfession.appendChild(option);
});
seProfession.addEventListener("change", function () {
  const seValue = this.value;
  template.layers[0].children[2].visible = seValue !== "null";
  for (let i = 0; i < template.layers[0].children[2].children.length; i++)
    template.layers[0].children[2].children[i].visible = seValue === template.layers[0].children[2].children[i].id;
  readTemplate(template, "ctx01");
});
// 选择阵营
const seFaction = document.getElementById("seFaction");
const dataFaction = template.layers[1].children[0].children;
dataFaction.forEach(item => {
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.name;
  seFaction.appendChild(option);
});
seFaction.addEventListener("change", function () {
  const seValue = this.value;
  template.layers[1].children[0].visible = seValue !== "null";
  for (let i = 0; i < template.layers[1].children[0].children.length; i++)
    template.layers[1].children[0].children[i].visible = seValue === template.layers[1].children[0].children[i].id;
  readTemplate(template, "ctx01");
});
// 是否显示明日方舟 Logo
const logo = document.querySelectorAll("input[name='logoVisible']");
logo.forEach(radio => {
  radio.addEventListener("change", () => {
    template.layers[0].children[3].children[1].visible = radio.value === "t";
    readTemplate(template, "ctx01");
  });
});
// 是否显示切割线
const cut = document.querySelectorAll("input[name='cutVisible']");
cut.forEach(radio => {
  radio.addEventListener("change", () => {
    template.layers[0].children[0].visible = radio.value === "t";
    readTemplate(template, "ctx01");
  });
});
