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
    email: String,
})

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
})

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// const addData = async () => {
//     // let user1 = new User({
//     //     username: "mukeshpathak",
//     //     email: "mukeshpathak@gmail.com",
//     // });

//     let user = await User.findOne({ username:"mukeshpathak"});
//     let post2 = new Post({
//         content: "Hello This is my Second Post",
//         likes: 5000,
//     });
//     post2.user = user;
//     await post2.save();
// }

// addData();

const getData = async () => {
    let resData = await Post.findOne({}).populate("user");
    console.log(resData);
};

getData();