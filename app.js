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
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    catch (err) {
    const email = document.getElementById("username").value + "@memocardio.com";

    console.log("❌ Login failed");
    console.log("👉 Email utilisé :", email);
    console.log("👉 Erreur Firebase :", err.code);

    document.getElementById("password").value = "";

    alert("Erreur: " + err.code);
    }

    // 🔥 show loading
    document.getElementById("loading").classList.remove("hidden");

    try {
        await signInWithEmailAndPassword(auth, email, password);

        initData();

        document.getElementById("login").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
        loadSubjects();

    } catch (err) {
        document.getElementById("password").value = "";
        alert("Identifiants incorrects");
        console.error(err);
    }

    // 🔥 hide loading
    document.getElementById("loading").classList.add("hidden");
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

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const loginVisible = !document.getElementById("login").classList.contains("hidden");

        if (loginVisible) {
            login();
        }
    }
});

initData();
window.login = login;
window.flipCard = flipCard;
window.nextCard = nextCard;
window.goBack = goBack;
window.addCard = addCard;
document.getElementById("dashboard").classList.add("hidden");
document.getElementById("cardsPage").classList.add("hidden");
document.getElementById("login").classList.remove("hidden");
