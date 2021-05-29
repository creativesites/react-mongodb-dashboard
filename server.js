var express = require("express");  
var path = require("path");  
var mongo = require("mongoose");   
var bodyParser = require('body-parser');   
var morgan = require("morgan");  
//var db = require("./db");  
  
var app = express();  
var port = process.env.port || 7777;  
var srcpath  =path.join(__dirname,'/public') ;  
app.use(express.static('public'));  
app.use(bodyParser.json({limit:'5mb'}));    
app.use(bodyParser.urlencoded({extended:false}));  
 const cors = require('cors')
 app.use(cors());
 // CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain) 
var mongoose = require('mongoose');  
const url = 'mongodb://localhost:27017/users1'
// mongo mongodb://localhost:27017/users
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connected:', url)
}); 
const peopleSchema = new mongoose.Schema({
    _id: String,
    chatID: String,
    name: String,
    location: String,
    updated: {
        type: Date,
        default: Date.now
    },
    state: Number,
    friends: [],
    friendsCode: [],
    code: String,
    isCodeActive: {
        type: Boolean,
        default: false
    },
    codeActivated: Date,
    friendsJoined: {
        type: Boolean,
        default: false
    },
    reminderSent: {
        type: Boolean,
        default: false
    },
    reminderSent2: {
        type: Boolean,
        default: false
    },
    friendsNotified: {
        type: Boolean,
        default: false
    },
    friendOf: [],
    tempNum1: Number,
    tempNum2: Number,
    tempNum3: Number,
    tempArr1: [],
    tempArr2: [],
    tempArr3: [],
    lastMsg: String
});

const People = mongoose.model('People', peopleSchema);
const opts = {
    new: true,
    upsert: false
};
let latestTime = Date.now()
 
const messageSchema = new mongoose.Schema({
    m1: String,
    m1Img: String,
    m1T: [],
    m2: String,
    updated: {
        type: Date,
        default: Date.now
    },
    m2T: [],
    m3: String,
    m3T: [],
    m4: String,
    m4T: [],
    m5: String,
    m5T: [],
    m6: String,
    m6T: [],
    m7: String,
    m7T: [],
    m8: String,
    m8T: [],
    m9: String,
    m9T: []
    
    
});
const saveMessageSchema = new mongoose.Schema({
    msg: String,
    from: String,
    updated: {
        type: Date,
        default: Date.now
    }
    
    
});
const SaveMessage = mongoose.model('SaveMessage', saveMessageSchema); 
const Message = mongoose.model('Message', messageSchema);  
var model = mongoose.model('People', peopleSchema);
  
//api for get data from database  
app.get("/api/getdata",function(req,res){ 
    model.find({}, { _id:0 }, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            let data = result
            console.log(data)
            res.send(data);
        }
      });  
 
})  
app.get("/api/getMsgsSent",function(req,res){ 
    SaveMessage.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            let data = result
            console.log(data)
            res.send(data);
        }
      });  
 
})  

app.get("/api/getMsgs",function(req,res){ 
    Message.find({}, { _id:0 }, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            let data = result
            //console.log(data)
            let a = []
            data.map((e)=>{
                let b = {}
                b.m1 = e.m1
                //b.m1Img = e.m1Img
                b.m2 = e.m2
                b.m3 = e.m3
                b.m4 = e.m4
                b.m5 = e.m5
                b.m6 = e.m6
                b.m7 = e.m7
                b.m8 = e.m8
                b.m9 = e.m9
                b.m1T = e.m1T.join()
                b.m3T = e.m3T.join()
                b.m5T = e.m5T.join()
                b.m8T = e.m8T.join()
                a.push(b)

            })
            console.log(a)
            res.send(a);
        }
      });  
 
})  
  
  
//api for Delete data from database  
app.post("/api/editMsg",function(req,res){   
    Message.remove({ _id: req.body.id }, function(err) {  
            if(err){  
                res.send(err);  
            }  
            else{    
                   res.send({data:"Record has been Deleted..!!"});             
               }  
        });  
})  
  
  let docid = '60acaa1ae9405b0e24d137e8'
//api for Update data from database  
app.post("/api/editMsgs",function(req,res){  
    console.log('save data is here')
    console.log(req.body) 
    let a = req.body.m1T
    let b = req.body.m3T
    let c = req.body.m5T
    let d = req.body.m8T
    let e = a.split(",")
    let f = b.split(",")
    let g = c.split(",")
    let h = d.split(",")
    Message.findByIdAndUpdate(docid, { m1:  req.body.m1, 
    m2:  req.body.m2, 
    m3:  req.body.m3, 
    m4:  req.body.m4, 
    m5:  req.body.m5,
    m6:  req.body.m6,
    m7:  req.body.m7,
    m8:  req.body.m8,
    m9:  req.body.m9,
    m1T: e,
    m3T: f,
    m5T: g,
    m8T: h

},   
function(err) {  
 if (err) {  
 res.send(err);  
 return;  
 }  
 else{
    console.log("Record has been Updated..!!")
    res.send({data:"Record has been Updated..!!"});  
 }
 });  
})    
  
  
//api for Insert data from database  
app.post("/api/savedata",function(req,res){   
       
    var mod = new model(req.body);  
        mod.save(function(err,data){  
            if(err){  
                res.send(err);                
            }  
            else{        
                 res.send({data:"Record has been Inserted..!!"});  
            }  
        });  
})  
      

  
//server stat on given port  
app.listen(port,function(){   
    console.log("server start on port"+ port);  
})  