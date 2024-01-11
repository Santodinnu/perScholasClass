let colors = ['red', 'blue', 'green', 'yellow']


const express = require('express')
const app = express()
app.get('/',function(req, res) {
    res.send('<h1>Hello Express Practice!</h1>')
})
app.get('/home',(req, res) => {
    res.send('<h1>Home Page!</h1>')
})
app.get('/colors/:indexOfColor', (req,res) =>{
    res.send(colors[req.params.indexOfColor])
})
app.get('/hello/:firstname/:lastname', function(req, res){
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});
app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });
app.listen(5000,function() {
    console.log('Listening on port 5000');
})

app.get('/favicon.ico', (req, res) => res.status(204));
