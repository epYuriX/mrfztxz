// main.js
/**
 * 写着玩的
 */
import "./assets/template.js";
import "./js/export.js";
import "./js/update.js";
import "./js/parser/main.js";
import "./js/console/main.js";

document.getElementById("lianXi").onclick = () => {
  alert(
      "- 作者 QQ 3412725994  -\n" +
      "- 交流群 懒得建群  -\n"
  );
}
document.getElementById("github").onclick = () => {
  window.open("https://github.com/epYuriX/mrfztxz", "_blank");
}
console.log("- main.js OK -");

