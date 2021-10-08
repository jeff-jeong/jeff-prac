const btn = document.getElementById("btn");
const rabbit = document.querySelector(".rabbit");

btn.addEventListener("click", () => {
  //토끼 탑으로 이동
  //   window.scrollTo(0, rabbit.offsetTop);
  // 디폴트는 start 제일 위 center end 등등이 있다 기억해두자
  // rabbit.scrollIntoView();
  rabbit.scrollIntoView({ block: "center", behavior: "smooth" });
});
