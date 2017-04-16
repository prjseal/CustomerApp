var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

var users = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id: 1,
        first_name: 'Bob',
        last_name: 'Smith',
        email: 'bobsmith@gmail.com'
    },
    {
        id: 1,
        first_name: 'Jill',
        last_name: 'Jackson',
        email: 'jill@gmail.com'
    }
]

app.get('/', function(req, res){
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
})