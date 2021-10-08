const tracker = document.getElementById("tracker")
const trackerRec = tracker.getBoundingClientRect();
const trackerHalfWidth = trackerRec.width / 2
const trackerHalfHeight = trackerRec.height / 2
const span = document.querySelector("span")
const hori = document.querySelector(".hori")
const ver = document.querySelector(".ver")


document.addEventListener("mousemove", (e)=>{

  ver.style.transform = `translateX(${e.clientX}px)`
  hori.style.transform = `translateY(${e.clientY}px)`

  tracker.style.transform = `translate(${e.clientX - trackerHalfWidth}px, ${e.clientY - trackerHalfHeight}px)`
  
  span.innerHTML = `${e.clientX}, ${e.clientY}`
  span.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`


})