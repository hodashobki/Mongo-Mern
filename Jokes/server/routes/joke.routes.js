const JokesController=require("../controllers/jokes.controller");

module.exports=app=>{
  app.get("/api/jokes/", JokesController.findAllJokes);
  app.get("/api/jokes/:id", JokesController.findOneJoke);
  app.put("/api/jokes/update/:id", JokesController.updatedJokes);
  app.post("/api/jokes/new", JokesController.createJoke);
  app.delete("/api/jokes/delete/:id",JokesController.deletById);
};