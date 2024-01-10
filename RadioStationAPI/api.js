const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const radioStations = require("./data.json");

app.use(cors());

app.get("/radioStations", (req, res) => {
    res.json(radioStations);
});

app.listen(PORT, () => {
    console.log(`API server is running on http://localhost:${PORT}`);
});
