// DOM elements declarations
const dice = document.querySelector(".dice");
const citation = document.querySelector(".citation");

// get slip advice api
function getAdvice() {
  w3.getHttpObject("https://api.adviceslip.com/advice", function (data) {
    let advice = "";
    advice = data.slip.advice;
    citation.innerHTML = advice;
  });
}

// get advice on window loading
window.onload = () => {
  getAdvice();
};

// get advice on dice clicked
dice.onclick = () => {
  getAdvice();
};
