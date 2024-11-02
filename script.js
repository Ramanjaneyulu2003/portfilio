// Dynamic Greeting Based on Time of Day
const greetingElement = document.getElementById("greeting");
const hours = new Date().getHours();
let greetingMessage;

if (hours < 12) {
    greetingMessage = "Good Morning! Welcome to my portfolio!";
} else if (hours < 18) {
    greetingMessage = "Good Afternoon! Welcome to my portfolio!";
} else {
    greetingMessage = "Good Evening! Welcome to my portfolio!";
}

greetingElement.innerText = greetingMessage;

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Interactive Project Cards
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        alert("More information about this project will be available soon!");
    });
});
