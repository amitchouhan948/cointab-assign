const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    
    "gender": {type:String,require:true},
    "name": {type:Object,require:true},
    "location": {type:Object,require:true},
    "email": {type:String,require:true},
    "dob": {type:Object,require:true},
    "phone": {type:String,require:true},
    "picture": {type:Object,require:true},

  }

//   "gender": "female",
//     "name": {
//     "title": "Ms",
//     "first": "Sofia",
//     "last": "Halko"
//     },
//     "location": {
//     "street": {
//     "number": 7667,
//     "name": "Visiokatu"
//     },
//     "city": "Rääkkylä",
//     "state": "Central Finland",
//     "country": "Finland",
//     "postcode": 86730,
//     "coordinates": {
//     "latitude": "-27.7938",
//     "longitude": "70.1472"
//     },
//     "timezone": {
//     "offset": "-11:00",
//     "description": "Midway Island, Samoa"
//     }
//     },
//     "email": "sofia.halko@example.com",
//     "login": {
//     "uuid": "e1b0cfc0-ddf5-485c-b6a7-496133cc3a4b",
//     "username": "heavyfish659",
//     "password": "onlyme",
//     "salt": "Z9vHwU9A",
//     "md5": "83932d42edf17dcf2ff2ca2c363e98e2",
//     "sha1": "e9f114de17493501d2c7c4b8035e8019249e0036",
//     "sha256": "18cd845fd9aa0a8d57e478d1d3b6735ea148792c076d93cfa3ba6d3dadedec38"
//     },
//     "dob": {
//     "date": "1968-11-14T20:12:03.068Z",
//     "age": 54
//     },
//     "registered": {
//     "date": "2004-03-09T02:16:08.754Z",
//     "age": 18
//     },
//     "phone": "03-882-637",
//     "cell": "047-144-57-20",
//     "id": {
//     "name": "HETU",
//     "value": "NaNNA234undefined"
//     },
//     "picture": {
//     "large": "https://randomuser.me/api/portraits/women/22.jpg",
//     "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
//     "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
//     },
//     "nat": "FI"
  
);

const User = mongoose.model("user", userSchema);

module.exports = User;