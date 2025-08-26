const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Example: simple hardcoded license key
const VALID_LICENSES = ["MAHAMOTSA-123-KEY"];

app.get("/", (req, res) => {
  res.send("✅ Mahamotsa License Server is running");
});

app.get("/verify", (req, res) => {
  const key = req.query.key;
  if (VALID_LICENSES.includes(key)) {
    res.json({ valid: true, message: "License is valid ✅" });
  } else {
    res.json({ valid: false, message: "❌ Invalid license" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
