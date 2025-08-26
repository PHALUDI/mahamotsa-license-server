const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Simple license check endpoint
const VALID_KEY = "212B9B9FEAD923B28EB6ED1C571F124115E581F1FC8EEC182361207C616AAAB2";

app.get("/", (req, res) => {
  res.send("Mahamotsa Bot License Server is running 🚀");
});

app.get("/check", (req, res) => {
  const key = req.query.key;
  if (key === VALID_KEY) {
    res.json({ valid: true, user: "Phaludi" });
  } else {
    res.json({ valid: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
