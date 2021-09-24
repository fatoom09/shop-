// dark mode section

const sec = document.querySelector('.sec');
const toggle = document.querySelector(".toggle");

toggle.onclick = function () {
    sec.classList.toggle('dark')
}

// Inc and Dic button section

let data = 1;
document.querySelector('#num').innerText = data;
function increment() {
    data = data + 1;
    document.querySelector('#num').innerText = data;
}

function decrement() {
    data = data - 1;
    document.querySelector("#num").innerText = data;
}

// accordion section 

const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}
