var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
app.get("/stages", function (req, res) {
    var stages = [
        { id: 1, title: "Applied" },
        { id: 2, title: "Interview" },
        { id: 3, title: "Trial day" },
        { id: 4, title: "Accepted" },
        { id: 5, title: "Rejected" },
    ];
    res.send(stages);
});
app.get("/applicants", function (req, res) {
    var applicants = [
        {
            current_stage_id: 1,
            description: "lorem ipsum",
            first_name: "John",
            id: 1,
            last_name: "Doe"
        },
        {
            current_stage_id: 2,
            description: "lorem ipsum",
            first_name: "Stewie",
            id: 1,
            last_name: "Griffin"
        },
        {
            current_stage_id: 3,
            description: "lorem ipsum",
            first_name: "Jane",
            id: 1,
            last_name: "Doe"
        },
        {
            current_stage_id: 4,
            description: "lorem ipsum",
            first_name: "Linus",
            id: 1,
            last_name: "Torvalds"
        },
        {
            current_stage_id: 5,
            description: "lorem ipsum",
            first_name: "Morty",
            id: 1,
            last_name: "Smith"
        },
        {
            current_stage_id: 2,
            description: "lorem ipsum",
            first_name: "Rick",
            id: 1,
            last_name: "Sanchez"
        },
    ];
    res.send(applicants);
});
app.post("/applicant", function (req, res) {
    res.send([]);
});
var port = 8080;
app.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});
