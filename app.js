let cards = [];
let currentIndex = 0;
let flipped = false;

// 🔹 INIT STORAGE
function initData() {
    if (!localStorage.getItem("cards")) {
        localStorage.setItem("cards", JSON.stringify(DEFAULT_CARDS));
    }
}

// 🔹 GET DATA
function getCards() {
    return JSON.parse(localStorage.getItem("cards"));
}

// 🔹 SAVE DATA
function saveCards(data) {
    localStorage.setItem("cards", JSON.stringify(data));
}

// 🔐 LOGIN
function login() {
    const pass = document.getElementById("password").value;

    if (pass === "admin123") {
        document.getElementById("login").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
        loadSubjects();
    } else {
        alert("Mauvais mot de passe");
    }
}

// 📚 LOAD SUBJECTS
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

// 📖 OPEN SUBJECT
function openSubject(subject) {
    const data = getCards();
    cards = data.filter(c => c.subject === subject);

    currentIndex = 0;

    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("cardsPage").classList.remove("hidden");

    showCard();
}

// 🧠 SHOW CARD
function showCard() {
    flipped = false;

    const card = cards[currentIndex];

    document.querySelector(".front").innerText = card.question;
    document.querySelector(".back").innerText = card.answer;

    document.getElementById("card").classList.remove("flipped");
}

// 🔄 FLIP
function flipCard() {
    flipped = !flipped;
    document.getElementById("card").classList.toggle("flipped");
}

// ➡️ NEXT
function nextCard() {
    currentIndex++;

    if (currentIndex >= cards.length) {
        alert("Fini !");
        goBack();
        return;
    }

    showCard();
}

// ⬅ BACK
function goBack() {
    document.getElementById("cardsPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

// ➕ ADD CARD
function addCard() {
    const subject = prompt("Matière ?");
    const question = prompt("Question ?");
    const answer = prompt("Réponse ?");

    if (!subject || !question || !answer) return;

    const data = getCards();
    data.push({ subject, question, answer });
    saveCards(data);

    alert("Carte ajoutée !");
    loadSubjects();
}

// 🚀 INIT
initData();
