const express = require("express");
const { google } = require("googleapis");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/contact/submit", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1HCdTf2kucn7sjLWPkMgClFdc_O1YWC7xC9A9VZwYZu0";

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  res.send(metaData);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
