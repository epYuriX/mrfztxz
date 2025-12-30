// js / console / color.js
/**
 * 这个用来修改颜色
 */
import {back, template} from "../../assets/template.js";
import {readTemplate} from "../parser/main.js";
// 是否显示渐变色
const jianBianVisible = document.querySelectorAll("input[name='jianBianVisible']");
jianBianVisible.forEach(radio => {
  radio.addEventListener("change", () => {
    template.layers[0].children[3].children[2].visible = radio.value === "t";
    readTemplate(template, "ctx01");
  });
});
// 渐变色颜色
const jianBian = document.getElementById("jian_bian");
jianBian.addEventListener("input", (e) => {
  template.layers[0].children[3].children[2].color = e.target.value;
  // readTemplate(template, "ctx01");
});
// 是否显示挡板
const dangBanVisible = document.querySelectorAll("input[name='dangBanVisible']");
dangBanVisible.forEach(radio => {
  radio.addEventListener("change", () => {
    template.layers[1].children[1].visible = radio.value === "t";
    back.layers[2].visible = radio.value === "t";
    readTemplate(template, "ctx01");
    readTemplate(back, "ctx02");
  });
});
// 挡板颜色
const dangBan = document.getElementById("dang_ban");
dangBan.addEventListener("input", (e) => {
  template.layers[1].children[1].color = e.target.value;
  back.layers[2].color = e.target.value;
  // readTemplate(template, "ctx01");
  // readTemplate(back, "ctx02");
});
// 背影颜色
const beiYing = document.getElementById("bei_ying");
beiYing.addEventListener("input", (e) => {
  back.layers[3].color = e.target.value;
  // readTemplate(back, "ctx02");
});