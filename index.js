const btnTry = document.getElementById("btnTry");
const btnReset = document.getElementById("btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleEnter)

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.getElementById("inputNumber")
  
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts}  tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleEnter(event) {
  if(event.keyCode === 13) {
     handleResetClick()  
  }
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}





