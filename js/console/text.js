// js / console / text.js
import {back, template} from "../../assets/template.js";
import {readTemplate} from "../parser/main.js";

const leftTitle = document.getElementById("left_title");
const name1 = document.getElementById("name1");
// const name2 = document.getElementById("name2");
const arknights1 = document.getElementById("arknights1");
const staff = document.getElementById("staff");
const xz1 = document.getElementById("xz1");
const xz2 = document.getElementById("xz2");
const xz3 = document.getElementById("xz3");
const xz4 = document.getElementById("xz4");
const xzb1 = document.getElementById("xzb1");
const xzb2 = document.getElementById("xzb2");
const xzb3 = document.getElementById("xzb3");
const xzb4 = document.getElementById("xzb4");
leftTitle.value = template.layers[0].children[1].children[0].text;
name1.value = template.layers[0].children[1].children[1].text;
// name2.value = template.layers[0].children[1].children[1].text;
arknights1.value = template.layers[0].children[1].children[2].text;
staff.value = template.layers[0].children[1].children[3].text;
xz1.value = template.layers[0].children[1].children[4].text;
xz2.value = template.layers[0].children[1].children[5].text;
xz3.value = template.layers[0].children[1].children[6].text;
xz4.value = template.layers[0].children[1].children[7].text;
xzb1.value = back.layers[0].children[2].text;
xzb2.value = back.layers[0].children[3].text;
xzb3.value = back.layers[0].children[4].text;
xzb4.value = back.layers[0].children[1].text;
leftTitle.addEventListener("input", () => {
  template.layers[0].children[1].children[0].text = leftTitle.value;
  back.layers[0].children[0].text = leftTitle.value;
  // readTemplate(template, "ctx01");
  // readTemplate(back, "ctx02");
});
name1.addEventListener("input", () => {
  template.layers[0].children[1].children[1].text = name1.value;
  // readTemplate(template, "ctx01");
});
// name2.addEventListener("input", () => {
//   template.layers[0].children[1].children[1].text = name2.value;
//   // readTemplate(template, "ctx01");
// });
arknights1.addEventListener("input", () => {
  template.layers[0].children[1].children[2].text = arknights1.value;
  // readTemplate(template, "ctx01");
});
staff.addEventListener("input", () => {
  template.layers[0].children[1].children[3].text = staff.value;
  // readTemplate(template, "ctx01");
});
xz1.addEventListener("input", () => {
  template.layers[0].children[1].children[4].text = xz1.value;
  // readTemplate(template, "ctx01");
});
xz2.addEventListener("input", () => {
  template.layers[0].children[1].children[5].text = xz2.value;
  // readTemplate(template, "ctx01");
});
xz3.addEventListener("input", () => {
  template.layers[0].children[1].children[6].text = xz3.value;
  // readTemplate(template, "ctx01");
});
xz4.addEventListener("input", () => {
  template.layers[0].children[1].children[7].text = xz4.value;
  // readTemplate(template, "ctx01");
});
xzb1.addEventListener("input", () => {
  back.layers[0].children[2].text = xzb1.value;
});
xzb2.addEventListener("input", () => {
  back.layers[0].children[3].text = xzb2.value;
});
xzb3.addEventListener("input", () => {
  back.layers[0].children[4].text = xzb3.value;
});
xzb4.addEventListener("input", () => {
  back.layers[0].children[1].text = xzb4.value;
});