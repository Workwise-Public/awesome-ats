const express = require("express");
const app = express();

app.get("/stages", (req: any, res: any) => {
  const stages: { id: number; title: string }[] = [];

  res.send("Return application stages");
});

app.get("/applicants", (req: any, res: any) => {
  const applicants: {
    id: number;
    current_stage_id: number;
    first_name: string;
    last_name: string;
    description: string;
  }[] = [];

  res.send("Return application stages");
});

app.post("/applicant", (req: any, res: any) => {
  res.send("Return application stages");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
