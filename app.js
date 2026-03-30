import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

let cards = [];
let currentIndex = 0;

function initData() {
    if (!localStorage.getItem("cards")) {
        localStorage.setItem("cards", JSON.stringify(DEFAULT_CARDS));
    }
}

function getCards() {
    return JSON.parse(localStorage.getItem("cards"));
}

function saveCards(data) {
    localStorage.setItem("cards", JSON.stringify(data));
}

function login() {
    console.log("LOGIN CLICK");

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Remplis tous les champs");
        return;
    }

    const email = username + "@memocardio.com";

    document.getElementById("loading").classList.remove("hidden");

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            initData();

        document.getElementById("login").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("cardsPage").style.display = "none";

            loadSubjects();
        })
        .finally(() => {
            document.getElementById("loading").classList.add("hidden");
        });
}

function loadSubjects() {
    const data = getCards();
    const subjects = [...new Set(data.map(c => c.subject))];

    const container = document.getElementById("subjects");
    container.innerHTML = "";

    subjects.forEach(sub => {
        const div = document.createElement("div");
        div.innerText = sub;
        div.onclick = () => openSubject(sub);
        container.appendChild(div);
    });
}

function openSubject(subject) {
    cards = getCards().filter(c => c.subject === subject);

    // 🔥 Shuffle (Fisher-Yates)
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    currentIndex = 0;

    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("cardsPage").classList.remove("hidden");

    showCard();
}

function showCard() {
    const card = cards[currentIndex];
    if (!card) return;

    document.querySelector(".front").innerText = card.question;
    document.querySelector(".card-back").innerText = card.answer;

    document.getElementById("card").classList.remove("flipped");
}

function flipCard() {
    document.getElementById("card").classList.toggle("flipped");
}

function nextCard() {
    currentIndex++;

    if (currentIndex >= cards.length) {
        alert("Terminé !");
        goBack();
        return;
    }

    showCard();
}

function goBack() {
    document.getElementById("cardsPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (!document.getElementById("login").classList.contains("hidden")) {
            login();
        }
    }
});

initData();
document.getElementById("loginBtn").addEventListener("click", login);
window.login = login;
window.flipCard = flipCard;
window.nextCard = nextCard;
window.goBack = goBack;
window.openSubject = openSubject;
document.getElementById("dashboard").classList.add("hidden");
document.getElementById("cardsPage").classList.add("hidden");
document.getElementById("login").classList.remove("hidden");
