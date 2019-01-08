var mongoose = require("mongoose");
var beautifyUnique = require("mongoose-beautiful-unique-validation");
mongoose.connect(process.env.MONGO_URL,{ 
  useNewUrlParser: true,
  useCreateIndex: true
});

var users = require('./models/users');

users.plugin(beautifyUnique);

var database = {
  "users": mongoose.model("users", users),
}

module.exports = database;
