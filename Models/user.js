const mongoose = require('mongoose');

const {Schema} = mongoose;

main()
.then(() => {
    console.log("Connected to Mongoose");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}


const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
})

const User = mongoose.model('User', userSchema);


const addUser = async (user) => {
    let user1 = new User({
        username: "mukeshpathak",
        addresses: [{
            location: "221B Baker Street",
            city: "London"
        }]
    })

    user1.addresses.push({
        location: "P32 Wall Street",
        city: "London"
    })
    let result = await user1.save();

    console.log(result);
};
addUser();