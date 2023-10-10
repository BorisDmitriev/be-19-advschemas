const mongoose = require('mongoose')

const User = require('./Article')


mongoose.connect('mongodb://localhost:27017/userDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
        console.log('Connected...')

        const article = {
            "title": "When was the last time you ate lasagna",
            "author": "604f3895f7c6568b0902115e",
            "keywords":[
               "food",
               "lasagna",
               "pasta"
            ],
            "category": "Fooood",
            "comments": [
               {
                  "text": "Bla bla bla i like pasta",
                  "user":"604f3895f7c6568b0902115e"
               },
               {
                  "text": "Bapa di bupi",
                  "user": "604f3895f7c6568b0902115e"
               }
            ]
         }

        return User.create(article).then( () => console.log('User successfully saved..') )
      
})
  .catch(() => {
    console.error('Fehler bei Datenbankverbindung')
})
  .finally( ()=>{
    mongoose.disconnect()
} )