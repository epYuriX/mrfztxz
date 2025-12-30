// js / update.js
import {readTemplate} from "./parser/main.js";
import {back, template} from "../assets/template.js";
document.getElementById("shuaXin").onclick = () => {
  readTemplate(template, "ctx01");
  readTemplate(back, "ctx02");
}
document.getElementById("chongZhi").onclick = () => {
  location.reload();
}