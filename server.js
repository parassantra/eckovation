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
const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


  
//////////////////////////////////RETERIVING SAVED PAGES ///////////////////////////////////
////////////////////////////RETERIVING SAVED PAGES END ////////////////////////////////


app.listen(port, () => console.log(`Listening on port ${port}`));   