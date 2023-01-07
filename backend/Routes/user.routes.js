// import fetch from 'node-fetch'; //fetch
// let fetch = require("node-fetch");

const {Router} = require("express");
const {UserModel} = require('../Models/UserModel')
const userRoute = Router();


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// userRoute.get("/", async (req,res) => {
//     const results = await UserModel.find()
//     res.send(results)
// })



// **********POST*********
userRoute.post("/", async (req,res) => {
    // const payload = req.body
    // const new_todo = new UserModel(payload)
    // await new_todo.save()
    
    // const results = await TodoModel.find()
    // res.send(results)

    try{
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const allData = new UserModel(data)
        await allData.save();

        res.send(data)
        console.log(data);
    }catch(err){
        console.log('err:', err)
        res.send(err)

    }

    
});


// **********DELETE*********
userRoute.delete("/:id", async(req, res) => {
    const {id} = req.params;
    const {userId} = req.body;

   const note = await NotesModel.findOne({_id: note_id})
   
   if(note.userId === userId){
    const deletedNote = await NotesModel.findOneAndDelete({_id: note_id})
    return res.send({"message": "deletedNote data"})
   }
   else{
    return res.send("Not authorized")
   }

});

module.exports = userRoute
