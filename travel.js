let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-continer');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = (() =>{
    searchBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
})

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});



formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnTnteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnTnteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        786: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

// --------------------
// ⭐ BOOKING FORM VALIDATION ⭐
// --------------------

const bookingForm = document.querySelector("form"); 
const inputs = bookingForm.querySelectorAll(".inputBox input");

bookingForm.addEventListener("submit", function(e) {

    e.preventDefault();  // form ko rokna

    let whereTo = inputs[0].value.trim();
    let howMany = inputs[1].value.trim();
    let arrival = inputs[2].value;
    let leaving = inputs[3].value;

    // Empty check
    if (whereTo === "" || howMany === "" || arrival === "" || leaving === "") {
        alert("⚠️ Please fill all fields before booking.");
        return;
    }

    // Guest number check
    if (howMany <= 0) {
        alert("⚠️ Number of guests must be at least 1.");
        return;
    }

    // Date check
    if (new Date(arrival) > new Date(leaving)) {
        alert("⚠️ Leaving date must be after arrival date.");
        return;
    }

    alert("✅ Booking Successful!");
    this.submit();   // now allow form to submit
});


// -------- BOOKING FORM VALIDATION -------- //

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.querySelector("#book form");

    if (!bookingForm) return; // safety check

    const inputs = bookingForm.querySelectorAll("input[type='text'], input[type='number'], input[type='date']");

    bookingForm.addEventListener("submit", function (event) {

        let isValid = true;
        let message = "";

        const place = inputs[0].value.trim();
        const guests = inputs[1].value.trim();
        const arrival = inputs[2].value;
        const leaving = inputs[3].value;

        if (place === "") {
            message += "➡ Please enter destination (Where to)\n";
            isValid = false;
        }
        if (guests === "" || guests <= 0) {
            message += "➡ Please enter valid number of guests\n";
            isValid = false;
        }
        if (arrival === "") {
            message += "➡ Please select arrival date\n";
            isValid = false;
        }
        if (leaving === "") {
            message += "➡ Please select leaving date\n";
            isValid = false;
        }

        if (arrival !== "" && leaving !== "" && arrival > leaving) {
            message += "➡ Leaving date must be AFTER arrival date\n";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();

            // Popup + retry option
            if (confirm(message + "\n⚠ Do you want to TRY AGAIN?")) {
                return;
            }
        }
    });
});


// -------- CONTACT FORM VALIDATION -------- //

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector("#contact form");

    if (!contactForm) return; // form na mile to skip

    contactForm.addEventListener("submit", function (event) {

        const inputs = contactForm.querySelectorAll("input[type='text'], input[type='email']");
        const textarea = contactForm.querySelector("textarea");

        let name = inputs[0].value.trim();
        let email = inputs[1].value.trim();
        let phone = inputs[2].value.trim();
        let subject = inputs[3].value.trim();
        let message = textarea.value.trim();

        let error = "";
        let valid = true;

        // ------ NAME ------
        if (name === "") {
            error += "➡ Please enter your Full Name\n";
            valid = false;
        }

        // ------ EMAIL ------
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            error += "➡ Please enter your Email\n";
            valid = false;
        } else if (!emailPattern.test(email)) {
            error += "➡ Please enter a valid Email address\n";
            valid = false;
        }

        // ------ PHONE ------
        if (phone === "") {
            error += "➡ Please enter your Phone Number\n";
            valid = false;
        } else if (phone.length < 10) {
            error += "➡ Phone Number must be at least 10 digits\n";
            valid = false;
        }

        // ------ SUBJECT ------
        if (subject === "") {
            error += "➡ Please enter a Subject\n";
            valid = false;
        }

        // ------ MESSAGE ------
        if (message === "") {
            error += "➡ Please enter your Message\n";
            valid = false;
        } else if (message.length < 10) {
            error += "➡ Message must be at least 10 characters\n";
            valid = false;
        }

        if (!valid) {
            event.preventDefault();

            if (confirm(error + "\n⚠ Do you want to TRY AGAIN?")) {
                return;
            }
        }
    });
});
