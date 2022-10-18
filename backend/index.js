var express = require("express");
var app = express();
// endpoint for jobs (the missing feature to switch jobs that architecture doesnt allow)
app.get("/stages", function (req, res) {
    var stages = [];
    res.send("Return application stages");
});
app.get("/applicants", function (req, res) {
    var applicants = [];
    res.send("Return application stages");
});
app.post("/applicant", function (req, res) {
    res.send("Return application stages");
});
var port = 8080;
app.listen(port, function () {
    console.log("Server is running in http://localhost:" + port);
});
