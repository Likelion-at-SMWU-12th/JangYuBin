const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function sayHello(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    // console.log(userName);
    greeting.innerText = `Hello, baby lion ${userName} !`;
    // greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", sayHello);