'use strict'
const tag = document.getElementById("tag")

function updateTag(){
  tag.innerHTML = `
  Window.screen: ${window.screen.width} ${window.screen.height} <br/>
  Window.outer: ${window.outerWidth} ${window.outerHeight} <br/>
  Window.inner: ${window.innerWidth} ${window.innerHeight} <br/>
  documentElement.clientWidth: ${document.documentElement.clientWidth} ${document.documentElement.clientHeight}
  `

}

updateTag()
window.addEventListener("resize", updateTag)