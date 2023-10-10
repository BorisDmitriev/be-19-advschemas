const mongoose = require('mongoose')

const User = require('./User')

mongoose.connect('mongodb://localhost:27017/userDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
        console.log('Connected...')

        const user = {
            "firstName": "Tony",
            "lastName": "Iommi",
            "bands": [
               "Black Sabbath",
               "Heaven and Hell"
            ],
            "instrument": "guitar",
            "albums": [
               {
                  "title": "Vol 4",
                  "year": 1972
               },
               {
                  "title": "Masters of Reality",
                  "year": 1971
               }
            ],
            "birthday": "1950-12-09",
            "createdOn": 1649428492873
         }

        return User.create(user).then( () => console.log('User successfully saved..') )
      
})
  .catch(() => {
    console.error('Fehler bei Datenbankverbindung')
  })
  .finally( ()=>{
    mongoose.disconnect()
  })