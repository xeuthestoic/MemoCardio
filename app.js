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

async function login() {
    const username = document.getElementById("password").value;

    // 🔥 convert pseudo → email
    const email = username + "@memoglow.app";
    const password = "123456"; // mets le vrai mdp que t'as choisi

    try {
        await signInWithEmailAndPassword(auth, email, password);

        document.getElementById("login").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
        loadSubjects();

    } catch (err) {
        alert("Erreur login");
        console.error(err);
    }
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

function addCard() {
    const subject = prompt("Matière ?");
    const question = prompt("Question ?");
    const answer = prompt("Réponse ?");

    if (!subject || !question || !answer) return;

    const data = getCards();
    data.push({ subject, question, answer });

    saveCards(data);
    loadSubjects();
}

initData();
window.login = login;
window.flipCard = flipCard;
window.nextCard = nextCard;
window.goBack = goBack;
window.addCard = addCard;
