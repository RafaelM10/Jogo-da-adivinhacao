const btnTry = document.getElementById("btnTry");
const btnReset = document.getElementById("btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1


function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.getElementById("inputNumber")
  
  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    screen2.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts}  tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}

btnTry.addEventListener("click", handleTryClick)


btnReset.addEventListener("click", function(){
  screen1.classList.remove("hide");
  screen2.classList.add("hide");

  xAttempts = 1
})




