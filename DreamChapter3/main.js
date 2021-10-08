const tracker = document.getElementById("tracker");
const lineWidth = document.getElementById("lineWidth");
const lineHeight = document.getElementById("lineHeight");
const info = document.querySelector("span");

// function track(e) {
//   console.log(e.pageX);
//   console.log(e.pageY);
// }

document.addEventListener("mousemove", (e) => {
  tracker.style.top = e.pageY - 25 + "px";
  tracker.style.left = e.pageX - 25 + "px";
  lineWidth.style.top = e.pageY + "px";
  lineHeight.style.left = e.pageX + "px";
  info.style.top = e.pageY + "px";
  info.style.left = e.pageX + "px";
  info.innerText = `${e.pageX}px,${e.pageY}px`;
});
