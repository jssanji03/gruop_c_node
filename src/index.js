const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    // res.send('<h2>Hola </h2>');
    res.render('home', {name: 'Shinder'});
});



app.use(express.static(__dirname + '/../public'));

app.use((req, res)=>{
    res
        .type('text/plain')
        .status(404)
        .send('找不到網頁');
});

app.listen(3000, ()=>{
    console.log('伺服器已啟動...');
})