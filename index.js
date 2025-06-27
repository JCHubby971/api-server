const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const documents = [
  {
    id: 1,
    nom: "Devis #123",
    type: "devis",
    statut: "signé",
    lien: "http://localhost:5000/docs/devis123.pdf"
  },
  {
    id: 2,
    nom: "Facture #456",
    type: "facture",
    statut: "à signer",
    lien: "http://localhost:5000/docs/facture456.pdf"
  },
  {
    id: 3,
    nom: "Rapport mensuel",
    type: "rapport",
    statut: "signé",
    lien: "http://localhost:5000/docs/rapport.pdf"
  }
];

app.get("/api/documents", (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1]; // Récupère le token

  if (token !== "fake-jwt-token-123") {
    return res.status(401).json({ error: "Token invalide ou manquant" });
  }

  res.json(documents);
});

app.use("/docs", express.static("docs")); // pour simuler les PDF

app.listen(5000, () => {
  console.log("API démarrée sur http://localhost:5000");
});
