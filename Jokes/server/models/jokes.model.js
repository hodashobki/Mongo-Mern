const mongoose=require("mongoose");

const JokeSchema=new mongoose.Schema({
    setup:{type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 6 characters long"]},
    punchline:String}
,{timestamps:true}
);
const Joke=mongoose.model("Joke",JokeSchema);
module.exports=Joke;