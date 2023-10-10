const express = require('express');
const app = express();
const PORT = 3000;
const userRouter = express.Router();
const Users = require('./models/User')
const mongoose = require('mongoose')

app.use(express.json());

userRouter.route("/").get((req, res) => {
     res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <form method="POST" action="/users">
                    <input type="text" name="firstname" id="firstname" placeholder="firstname">
                    <input type="text" name="lastname" id="lastname" placeholder="lastname">
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
     `)
    //  console.log( Users.find())
})

userRouter.route("/").post((req, res) => {
    console.log(`${req.body}`);
    
    // console.log(req.body.firstname)
    // console.log(req.body.lastname)
})

app.use('/users', userRouter)


app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});