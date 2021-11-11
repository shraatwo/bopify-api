const express= require('express');

const mongoose= require('mongoose');

const app= express();

mongoose.connect('mongodb://localhost:27017/kidzbopDB')

const bopSchema= {
    song: String,
    artist: String,
    olyric: String,
    klyric: String,
    index: Number
}

const Bop= mongoose.model('bopify',bopSchema);

app.route('/bopify')

.get(function(req,res){
    var i= Math.floor(Math.random()*3)+1;
    console.log(i);
    Bop.findOne({index:i},function(e, result){
        if(!e){
            res.send(JSON.stringify(result));
        }
        else{
            console.log(e);
        }

    })

});



app.listen(3000, function(){
    console.log('Server is up and running on port 3000');
})