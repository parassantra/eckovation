const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/////////////////////////////////////MONGOOSE START///////////////////////////////////
const mongoose = require('mongoose');
mongoose.connect('mongodb://drawit:drawit001@ds247101.mlab.com:47101/drawit');
var db = mongoose.connection;
db.on('error', console.error.bind(console, '//////////////////////connection error//////////////////////'));
db.once('open', function() {         
    console.log("////////////////////Connected To MongoLab Cloud Database////////////////////");
});
/////SCHEMA////
var productSchema = mongoose.Schema(
{
    id : String,
    courseName : String,
    info : String,
    author : String,
    learn: [],
    videos : [],
    includes : [],
});
var product = mongoose.model('product',productSchema);
/////////////////////////////////////MONGOOSE END///////////////////////////////////
app.get('/save', function (req, res) {
    var newData = new product(
        {
            id : '2',   
            courseName : "Introduction to Machine Learning",
            info : " Learn Introduction to Machine Learning and take your web development skills to build native iOS and Android App.",
            author : "Utsav Chawla",
            learn : [
                'Introduction to Machine Learning',
                'Basic Concepts of Machine Learning',
                'Linear Regression, Polymer Regression, Logistic Regression',
                'Neural Network and Deep Learning'
            ],
            videos : [
                'https://www.youtube.com/embed/D0GU-A8XNIA',
                'https://www.youtube.com/embed/neTl7g7dGqI',
                'https://www.youtube.com/embed/haI01OWwFPk',
                'https://www.youtube.com/embed/1KUQrCjbIZA',
                'https://www.youtube.com/embed/D0GU-A8XNIA',
                'https://www.youtube.com/embed/neTl7g7dGqI',
                'https://www.youtube.com/embed/haI01OWwFPk',
                'https://www.youtube.com/embed/1KUQrCjbIZA'
            ],
            includes : [
                'Concept Videos',
                'Practice Quizzes',
                'Mentotship',
                'Live Discussion',
            ],
        }
    );
    newData.save(function (err, testEvent)
    {
        if (err) return console.error("err");
            console.log("Saved");
        console.log(testEvent);
    });


    res.send('hello world');
  });


  
//////////////////////////////////RETERIVING SAVED PAGES ///////////////////////////////////
////////////////////////////RETERIVING SAVED PAGES END ////////////////////////////////


app.listen(port, () => console.log(`Listening on port ${port}`));   