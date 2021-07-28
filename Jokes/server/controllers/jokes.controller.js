const Joke=require("../models/jokes.model");

module.exports.findAllJokes=(req,res)=>{
    Joke.find()
    .then(allJokes=>res.json({jokes:allJokes}))
    .catch(err=>res.json({message:"Something went wrong",error:err}))
};

module.exports.findOneJoke=(req,res)=>{
    Joke.findOne({_id:req.params.id})
    .then(onejoke=>res.json({joke:onejoke}))
    .catch(err=>res.json({message:"Somthing went wrong",error:err}))
};

module.exports.createJoke=(req,res)=>{
    Joke.create(req.body)
    .then(newjoke=>res.json({joke:newjoke}))
    .catch(err=>res.json({message:"Somthing went wrong",error:err}))
};
// module.exports.createJoke = (request, response) => {
//     const { setup, punchline } = request.body;
//     Joke.create({
//         setup,
//         punchline
//     })
//         .then(joke => response.json(joke))
//         .catch(err => response.json(err));
// }

module.exports.updatedJokes=(req,res)=>{
    Joke.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updatedjoke=>res.json({joke:updatedjoke}))
    .catch(err=>res.json({message:"Somthing went wrong",error:err}))
};

module.exports.deletById=(req,res)=>{
Joke.deleteOne({_id:req.params.id})
.then(result=>res.json({result:result}))
.catch(err=>res.json({message:"Somthing went wrong",error:err}))
};