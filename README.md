## 📁 `api-server/README.md` (API Express – backend)


# AGWANET API – Documents sécurisés (Express.js)

Ce projet est une **API REST en Node.js/Express** simulant un service de gestion documentaire pour l’espace client AGWANET.

## 📁 Route principale
```
http
GET /api/documents
```

### Exemple de réponse :

```json
[
  {
    "id": 1,
    "nom": "Devis #123",
    "type": "devis",
    "statut": "signé",
    "lien": "#"
  }
]
```

## 🔐 Sécurité API

* La route `/api/documents` nécessite un **token JWT simulé**
* Le token est attendu dans l’en-tête `Authorization` :

  ```
  Authorization: Bearer fake-jwt-token-123
  ```
* Si le token est absent ou invalide → retour `401 Unauthorized`

## 🚀 Lancer le serveur

```bash
npm install
node index.js
```

Accès : [http://localhost:5000/api/documents](http://localhost:5000/api/documents)

## 📦 Intégré avec

Ce backend est utilisé par un front Remix :
👉 [Voir le projet Remix ici](https://github.com/JCHubby971/agwanet-remix-test)

---

## 💡 À venir

* Connexion à une vraie base MySQL
* Génération de documents dynamiques
* Vérification JWT réelle avec `jsonwebtoken`
