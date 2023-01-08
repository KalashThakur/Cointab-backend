// import fetch from 'node-fetch'; //fetch
// let fetch = require("node-fetch");

const {Router} = require("express");
const {UserModel} = require('../Models/UserModel')
let axios = require("axios");
axios = axios.default
const userRoute = Router();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// userRoute.get("/", async (req,res) => {
//     const results = await UserModel.find()
//     res.send(results)
// })



// **********POST*********
userRoute.get("/", async (req,res) => {
    // const payload = req.body
    // const new_todo = new UserModel(payload)
    // await new_todo.save()
    
    // const results = await TodoModel.find()
    // res.send(results)

    
        // axios.get('https://randomuser.me/api/')
        // .then((res) => {
        //     console.log(res.data)
        //     res.send(res.data)
        //     // const details = new UserModel(res.data)
        //     // details.save();
        // })
        // .catch((err) => console.log(err))

        fetch('https://randomuser.me/api/', {
            method: 'GET',
            Headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        // const data = await response.json();
        // const allData = new UserModel(data)
        // await allData.save();
});


// **********DELETE*********
userRoute.delete("/delete", async(req, res) => {

   
    const deletedData = await UserModel.deleteMany({})
    await deletedData.save();
    return res.send({"message": "deleted data"})

});

module.exports = userRoute
