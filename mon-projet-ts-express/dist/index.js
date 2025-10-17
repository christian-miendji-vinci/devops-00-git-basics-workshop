"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (_req, res) => {
    res.send('Hello TypeScript + Express!');
});
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map