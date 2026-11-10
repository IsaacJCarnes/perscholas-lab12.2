import express from "express";

const app = express();

const port = 300;

app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random",
    );
    const json = await response.json();

    res.status(200).json({fact: json['text']});
  } catch (e) {
    res.status(500).json({ error: "That fact was not fun" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
