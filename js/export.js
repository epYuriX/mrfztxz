// js / export.js
const canvas01 = document.getElementById("canvas01");
const canvas02 = document.getElementById("canvas02");
document.getElementById("exportPNG1").onclick = () => {
  const link = document.createElement("a");
  link.download = "template.png";
  link.href = canvas01.toDataURL("image/png");
  link.click();
};
document.getElementById("exportPNG2").onclick = () => {
  const link = document.createElement("a");
  link.download = "back.png";
  link.href = canvas02.toDataURL("image/png");
  link.click();
}