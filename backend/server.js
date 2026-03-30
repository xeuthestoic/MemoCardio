const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DB_PATH = "./db/database.json";

// 🔹 Lire DB
function readDB() {
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

// 🔹 Écrire DB
function writeDB(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// 📚 GET toutes les cartes
app.get("/cards", (req, res) => {
    const data = readDB();
    res.json(data);
});

// 📚 GET cartes par matière
app.get("/cards/:subject", (req, res) => {
    const data = readDB();
    const filtered = data.filter(c => c.subject === req.params.subject);
    res.json(filtered);
});

// ➕ Ajouter carte
app.post("/cards", (req, res) => {
    const data = readDB();
    data.push(req.body);
    writeDB(data);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
