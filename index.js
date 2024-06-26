require('dotenv').config();

const express = require('express')
const app = express()
// const port= 3000

const jsonData = { 
    "id"                    : "2281",
    "email"                 : "rob.eberhardt@gmail.com",
    "fname"                 : "Rob",
    "lname"                 : "Eberhardt",
    "username"              : "robeberhardt",
    "password"              : "thx1138",
    "signedup"              : "true",
    "appDL"                 : "false",

    "lbItem"                : 
    {   "id"                : "1",
        "shareCount"        : "3",
        "title"             : "Needlepoint Boba Fett",
        "value"             : "$5,000",
        "emotion"           : "3",
        "dateCreated"       : "2011-12-02T19:44:16.866Z",
        "dateUpdated"       : "2011-12-02T19:45:00.858Z",
        "dateDeleted"       : "2011-12-03T19:45:14.086Z",
        "image"             : "/images/robeberhardt-1023810.jpg",
        "lockVotes"         : "0",
        "loseVotes"         : "2"
    },

    "animation"             :
    {
        "id"                : "1",
        "title"             : "Boba Fett Speaks",
        "sharecount"        : "0",
        "dateCreated"       : "2011-12-02T19:44:16.866Z",
        "dateUpdated"       : "2011-12-02T19:45:00.858Z",
        "dateDeleted"       : "2011-12-03T19:45:14.086Z",
        "image"             : "/images/robeberhardt-0137102.jpg",
        "audio"             : "/audio/robeberhardt-1013823.wav",
        "mouth"             : 
        {
            "asset"         : "2",
            "posX"          : "252",
            "posY"          : "102",
            "scale"         : "0.7",
            "rotation"      : "-34.2"
        }
    }
}

app.get('/json', (req, res) => {
    res.json(jsonData)
})


app.get("/", (req,res) => {
    res.send("Sending response")
})

app.get('/login', (req, res) => {
    res.send("<h1>This is login page</h1>")
})

app.get('/youtube', (req,res) => {
    res.send(`<h2>Welcome to my Youtube</h2>`)
})

app.listen(process.env.PORT, () => {
    console.log(`using the port: ${process.env.PORT}`)
})