//mobile view menu
$(document).ready(function() {
    $('.toggle span').click(function() {
        $('ul').toggleClass('active');
    });
});

//animation of the header text on home page
const text = document.querySelector('.image-heading');
const str_text = text.textContent;
const split_text = str_text.split("");
text.textContent = "";


for (let i = 0; i < split_text.length; i++) {
    text.innerHTML += "<span>" + split_text[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fades');
    char++;

    if (char === split_text.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}



// About page side navigation bar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}