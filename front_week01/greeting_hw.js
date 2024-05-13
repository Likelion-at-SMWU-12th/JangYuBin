const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const background = document.querySelector("#background");

function sayHello(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    // console.log(userName);
    greeting.innerText = `Hello, baby lion ${userName} !`;
    // greeting.classList.remove("hidden");
}

function changeBackgroundColor(event) {
    document.body.classList.toggle("orange");
}

loginForm.addEventListener("submit", sayHello);
background.addEventListener("click", changeBackgroundColor);