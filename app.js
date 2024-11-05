const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const errorhandler = require("./middlewares/errorhandler");
const {dbConnect} = require("./models/index");
const methodOverride = require("method-override")

const port = 3001;

dbConnect();

app.use(express.static(path.join(__dirname, "/react-test/build")));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));
app.use(errorhandler);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/react-test/src", "index.html"));
});

app.use('/user', require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`${port}번 포트에서 실행중`)
})