//oct06 원하는 결과물을 얻긴 얻었는데 너무 어렵게 만들었나보다


'use strict'


const content = document.getElementById("content");
const userScreen = content.querySelector("div:first-child");
const userScreenWidth = userScreen.querySelector("span:first-child");
const userScreenHeight = userScreen.querySelector("span:last-child");
const outerScreen = content.querySelector("div:nth-child(2)");
const outerScreenWidth = outerScreen.querySelector("span:first-child");
const outerScreenHeight = outerScreen.querySelector("span:last-child");
const innerScreen = content.querySelector("div:nth-child(3)");
const innerScreenWidth = innerScreen.querySelector("span:first-child");
const innerScreenHeight = innerScreen.querySelector("span:last-child");
const client = content.querySelector("div:last-child");
const clientWidth = client.querySelector("span:first-child");
const clientHeight = client.querySelector("span:last-child");


window.addEventListener("resize", width)

function width(){

    userScreenWidth.innerText = `${window.screen.width}`;
    userScreenHeight.innerText = `${window.screen.height}`;
    outerScreenWidth.innerText = `${window.outerWidth} `;
    outerScreenHeight.innerText = `${window.outerHeight}`;
    innerScreenWidth.innerText = `${window.innerWidth} `;
    innerScreenHeight.innerText = `${window.innerHeight}`;
    clientWidth.innerText = `${document.documentElement.clientWidth} `;
    clientHeight.innerText = `${document.documentElement.clientHeight}`;

}

width()

