const clock = document.querySelector("#clock");
const dayOfTheWeekList = ["일", "월", "화", "수", "목", "금", "토"];

function setClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfTheWeek = dayOfTheWeekList[date.getDay()];
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  const clockText = `현재 시각은 ${year}년 ${month}월 ${day}일 ${dayOfTheWeek}요일 ${hour}시 ${minute}분 ${second}초입니다.`;
  clock.innerText = clockText;
}

setClock();
setInterval(setClock, 1000);
