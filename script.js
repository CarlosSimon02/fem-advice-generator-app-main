const label = document.getElementById("label");
const advice = document.getElementById("advice");
const newAdviceBtn = document.getElementById("new-advice-btn"); 

function newAdvice() {
    console.log("fuck you");
    logMovies();
}

newAdviceBtn.onclick = newAdvice();

async function logMovies() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const advice = await response.json();
  console.log(advice);
}
