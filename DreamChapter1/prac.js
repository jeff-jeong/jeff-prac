const content = document.getElementById("content")



window.addEventListener("resize", (e) => {
    content.innerHTML = `Window.screen:${window.screenX},${window.screenY} <br />
    Window.outer:${window.outerWidth},${window.outerHeight} <br />
    Window.inner:${window.innerWidth},${window.innerHeight} <br />
    DocumnetElement.client:${document.documentElement.clientWidth},${document.documentElement.clientHeight}
    `
})