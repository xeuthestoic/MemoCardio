import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

let currentFolder = null;
let cards = [];
let currentIndex = 0;

/* =========================
   DATA
========================= */
function initData() {
    const existing = localStorage.getItem("cards");

    if (!existing) {
        const data = window.DEFAULT_CARDS;

        if (!data) {
            console.error("DEFAULT_CARDS manquant !");
            return;
        }

        localStorage.setItem("cards", JSON.stringify(data));
    }
}

function getCards() {
    return JSON.parse(localStorage.getItem("cards")) || [];
}

/* =========================
   NAVIGATION
========================= */
function showPage(page) {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("cardsPage").style.display = "none";

    document.getElementById(page).style.display = "flex";
}

/* =========================
   LOGIN
========================= */
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Remplis tous les champs");
        return;
    }

    const email = username + "@memocardio.com";
    document.getElementById("loading").style.display = "block";

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          initData();
          showPage("dashboard");
          loadFolders();
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
         })
        .catch((error) => {
            alert(error.message);
        })
        .finally(() => {
            document.getElementById("loading").style.display = "none";
        });
}

/* =========================
   DASHBOARD
========================= */
function loadFolders() {
    currentFolder = null;

    const data = getCards();
    const folders = [...new Set(data.map(c => c.folder))];

    const container = document.getElementById("subjects");
    const backBtn = document.getElementById("backBtn");

    container.innerHTML = "";
    backBtn.style.display = "none";

    folders.forEach(folder => {
        const div = document.createElement("div");
        div.innerText = folder;
        div.onclick = () => openFolder(folder);
        container.appendChild(div);
    });
}

function openFolder(folder) {
    currentFolder = folder;

    const data = getCards().filter(c => c.folder === folder);
    const subjects = [...new Set(data.map(c => c.subject))];

    const container = document.getElementById("subjects");
    const backBtn = document.getElementById("backBtn");

    container.innerHTML = "";
    backBtn.style.display = "block";

    subjects.forEach(sub => {
        const div = document.createElement("div");
        div.innerText = sub;
        div.onclick = () => openSubject(folder, sub);
        container.appendChild(div);
    });
}

/* =========================
   CARDS
========================= */
function openSubject(folder, subject) {
    cards = getCards().filter(
        c => c.folder === folder && c.subject === subject
    );

    currentIndex = 0;

    // shuffle
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    showPage("cardsPage");
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
        showPage("dashboard");
        return;
    }
    showCard();
}

function goBack() {
    showPage("dashboard");
}

/* =========================
   INIT
========================= */
window.addEventListener("DOMContentLoaded", () => {
    initData();
    showPage("login");

    document.getElementById("loginBtn").addEventListener("click", login);

    document.getElementById("backBtn").onclick = () => {
        loadFolders();
    };

    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && document.getElementById("login").style.display !== "none") {
            login();
        }
    });
});

/* =========================
   GLOBAL
========================= */
window.flipCard = flipCard;
window.nextCard = nextCard;
window.goBack = goBack;
