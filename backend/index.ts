const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/stages", (req: any, res: any) => {
  const stages: { id: number; title: string }[] = [
    { id: 1, title: "Applied" },
    { id: 2, title: "Interview" },
    { id: 3, title: "Trial day" },
    { id: 4, title: "Accepted" },
    { id: 5, title: "Rejected" },
  ];

  res.send(stages);
});

app.get("/applicants", (req: any, res: any) => {
  const applicants: {
    id: number;
    current_stage_id: number;
    first_name: string;
    last_name: string;
    description: string;
  }[] = [
    {
      current_stage_id: 1,
      description: "lorem ipsum",
      first_name: "John",
      id: 1,
      last_name: "Doe",
    },
    {
      current_stage_id: 2,
      description: "lorem ipsum",
      first_name: "Stewie",
      id: 1,
      last_name: "Griffin",
    },
    {
      current_stage_id: 3,
      description: "lorem ipsum",
      first_name: "Jane",
      id: 1,
      last_name: "Doe",
    },
    {
      current_stage_id: 4,
      description: "lorem ipsum",
      first_name: "Linus",
      id: 1,
      last_name: "Torvalds",
    },
    {
      current_stage_id: 5,
      description: "lorem ipsum",
      first_name: "Morty",
      id: 1,
      last_name: "Smith",
    },
    {
      current_stage_id: 2,
      description: "lorem ipsum",
      first_name: "Rick",
      id: 1,
      last_name: "Sanchez",
    },
  ];

  res.send(applicants);
});

app.post("/applicant", (req: any, res: any) => {
  res.send([]);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
