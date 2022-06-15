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
      



