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
      "- 作者 QQ 3412735994 -\n" +
      "- 交流群 1056969651 -\n" +
      "我说怎么两天没人加我, 原来我把qq号写错了, 现在是对的了, 技术交流打游戏啥的都可以加\n"
  );
}
document.getElementById("github").onclick = () => {
  window.open("https://github.com/epYuriX/mrfztxz", "_blank");
}
console.log("- main.js OK -");

