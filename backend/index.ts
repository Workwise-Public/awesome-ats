const express = require("express");
const app = express();

// endpoint for jobs (the missing feature to switch jobs that architecture doesnt allow)

app.get("/stages", (req, res) => {
  const stages: { id: number; title: string }[] = [];

  res.send("Return application stages");
});

app.get("/applicants", (req, res) => {
  const applicants: {
    id: number;
    current_stage_id: number;
    first_name: string;
    last_name: string;
  }[] = [];

  res.send("Return application stages");
});

app.post("/applicant", (req, res) => {
  res.send("Return application stages");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
