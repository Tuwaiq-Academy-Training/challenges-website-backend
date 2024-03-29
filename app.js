const mongoose =require('mongoose') ;

const express =require('express');
const { ObjectId } = require('bson');

const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/lab2');

const userSchema =mongoose.Schema({
  
    email: String,
    username:{type:String,
    required:true},
    password: String,
    questions:[String],
    Solutions:[String],
    totalScore: Number
})

const User=mongoose.model('User',userSchema);
app.post('/user/create',(req,res)=>{
    const new_user_info=newUser({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        questions:req.body.questions,
        Solutions:req.body.Solutions,
        totalScore:req.body.totalScore
    })
    new_user_info.save().then(()=>res.json({"msg":"user created"}))
})

app.get("/users",(req,res)=>{
    User.find({}).then(data=>{
        console.log(User);
    })    
})
app.put("/user/update/:id",(req,res)=>{
    User.updateOne({_id:req.body._id},
        {username:req.body.username},
        {password:req.body.password},
        {questions:req.body.questions},
        {Solutions:req.body.Solutions},
        {totalScore:req.body.totalScore}).then(()=>{
            res.json({"msg":"user updated"});
        })
})


app.delete("user/delete/:id",(req,res)=>{
    User.deleteOne({_id:req.body._id},
        {username:req.body.username},
        {password:req.body.password},
        {questions:req.body.questions},
        {Solutions:req.body.Solutions},
        {totalScore:req.body.totalScore}).then(()=>{
            res.json({"msg":"deleted!"})
        })})

   
   const users = {
        "_id": "ObjectID",
        "email": "string",
        "username": "string",
        "user_info":"user_info",
        "password": "string",
        "questions":[String],
        "Solutions":[String],
        "totalScore": Number
    }
    const challenges={
        _id:"ObjectID",
        name:"String",
        user_id:"ObjectID",
        challengeLanguage:[String],
        challengeLevel:[String],
        typeOfChallenge:[String],
        challengeScore:Number,
        
    }
    const leaderBoard={
        place:[Number],
        user_id:"ObjectID",
        score:[challenges.challengeScore]
    }
    const groupOfLevels={
        _id:"ObjectID",
        levels:[challenges.typeOfChallenge]
    }
   
    const main_database = [users,challenges];

//Challenges
const challengesSchema=mongoose.Schema({
  name:{
      type:String,
  required:true
},
  challengeLevel:[String],
  challengeLanguage:[String],
  typeOfChallenge:[String],
  challengeScore:[Number],
  user_id:{
      type:mongoose.ObjectId,
      ref:'User'

  }

})
const Challenge=mongoose.model('Challenge',challengesSchema);

app.post('/add/challenge/',(req,res)=>{
const addChallenge=new Challenge({
name:req.body.name,
challengeLevel:req.body.challengeLevel,
challengeLanguage:req.body.challengeLanguage,
typeOfChallenge:req.body.typeOfChallenge,
challengeScore:req.body.challengeScore,
user_id:req.body.user_id

})
addChallenge.save().then(() => res.json({"msg":"challengecreated"}))
})

app.get('/challenges',(req,res)=>{
Challenge.find({}).then((data)=>{
  res.json(data)});
});
app.delete('challenges/delete/:_id',(req,res)=>{
  Challenge.deleteOne({name:req.params.name}).then(()=>{
     res.json({"msg":"challenge deleted"})
  });
});

app.listen(3000,()=>console.log("Express Started!"));


    



// leaderBoar schema and model

const leaderBoardSchema=mongoose.Schema({
    place:[Number],
    user_id:
    {   type:"ObjectID",
      ref:"User"
},
    score:[challenges.challengeScore]

});

//model
const LeaderBoard =mongoose.model('LeaderBoard',leaderBoardSchema);




// insert- create
app.post('/LeaderBoard/create',(req,res)=>{
const LeaderBoards = new LeaderBoard({

    user_id:req.body.user_id,
    place:req.body.place,
    score: req.body.score

})
LeaderBoards.save().then(() => res.json({ msg: "LeaderBoards created" }))
});


//find
app.get('/LeaderBoards',(req,res)=>{
    LeaderBoard.find({}).then((data)=>{
    res.json(data);
});
});


////updat
app.put('LeaderBoard/create/:id',(req,res)=>{
    LeaderBoard.updateOne({_id:req.body.id},{place:req.body.place},{ score:req.body.score}).then
    res.json({ msg: "updated" })
    
});

//delet
app.delete('LeaderBoard/delete/:id',(req,res)=>{
    LeaderBoard.deleteOne({_id:req.body.id}.then(()=>{

          res.json({"msg":" Delete"})

      }
        )
    )});
    

   

  

const groupoflevel = mongoose.Schema({
    _id:"ObjectID",
        levels:[typeOfChallenge],

    userID: {
      
      type:mongoose.ObjectId,
      ref:"users"
  }
  
  })
  
  const group = mongoose.model("group", taskSchema)
  
  
  // insert
  app.post("/groupoflevel/create", (req, res) => {
    
      const groupoflevel = new groupoflevel({
      id: req.body._id,
      levels: req.body.levels
    })
  
  
      tasks.save().then(() => res.json({ msg: "groupoflevel created" }))
  })
  
  
  // find
  app.get("/groupoflevel", (req, res) => {
    groupoflevel.find({}).then(data => {
      console.log(groupoflevel);
    })
  })
  
  // update
  
  app.put("/groupoflevel/create/", (req, res) => {
    task.updateOne({ _id: req.body.id }, { levels: req.body.levels }).then(() => {
      res.json({ msg: "updated" })
    })
  })
  
  // // delete
  app.delete("/groupoflevel/delete/", (req, res) => {
    task.deleteOne({ _id: req.body.id }).then(() => {
      res.json({ msg: "groupoflevel deleted" })
    })
  })
  
  
  
  const levelsSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    levels: Number,

  })
  
  
  
  const levels = mongoose.model("levels", levelsSchema)
  
  app.post("/user/create", (req, res) => {
    const user = new users({
      id: req.body._id,
      levels: req.body.levels,
    
    })
  
    user.save().then(()=> res.json("created user"))
  })
  
  
  app.listen(3000, () => console.log("good"))
