/*const userSchema=Schema({
    _id:Number,
        name:{type:String,
                     require:true,
                      },
        password:String,
        email:String,
        questionsAndSolutions:[String],
       totalScore: challengeScore
                }

            );

const tagsSchema=Schema({
    tagName:String,
 
})

//const challengeLanguage=Schema({
  //  _id:ObjectId,
    //name:[String],

//})
const challengesSchema=Schema({
_id:[ObjectId],

name:[String],
challengeLanguage:[String],
typeOfChallenge:[String],
challengeScore:[Number],
challengeLevel:[String],
searchChallengeByTag:[typeOfChallenge],
})
*/

   
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
        challengeScore:[Number],
        
    }
    const leaderBoard={
        place:[Number],
        user_id:"ObjectID",
        score:[challengeScore]
    }
    const groupOfLevels={
        _id:"ObjectID",
        levels:[typeOfChallenge]
    }
   
    const main_database = [users,challenges];


    


const mongoose = require('mongoose');
const express=require('express');
const { ObjectId } = require('bson');

const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/Lap2');



// leaderBoar schema and model

const leaderBoardSchema=mongoose.Schema({
    place:[Number],
    user_id:
    {   type:"ObjectID",
      ref:"User"
},
    score:[challengeScore]

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
    

   

  
app.listen(3000,()=>console.log(`express started !`));

      



