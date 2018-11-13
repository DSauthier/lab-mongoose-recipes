const mongoose = require("mongoose");
const data = require("./data.js");
const Recipe = require("./recipes");


mongoose
  .connect("mongodb://localhost/recipeApp")
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
Recipe.updateOne({
  title: 'Rigatoni alla Genovese'},{duration: 100})
  .then(theRecipeObject => {
    console.log(theRecipeObject);
    console.log("Success!!")
  })
  .catch(err => {
    console.log("-----------------------------------------", err);
  });

// Recipe.insertMany(data)
//   .then(theRecipeObject => {
//     console.log(theRecipeObject);
//     console.log("Success!!")
//   })
//   .catch(err => {
//     console.log("-----------------------------------------", err);
//   });

// Recipe.create(
//   {
//     title: "Pickled Cabbage",
//     level: "easy peasy",
//     ingredients: [
//       "white vinegar",
//       "sugar",
//       "water",
//       "cabbage",
//       "red pepper flakes"
//     ],
//     cuisine: "International",
//     dishType: "Other",
//     image: "https://images.media-allrecipes.com/images/75131.jpg.",
//     duration: 10,
//     creator: "Daniel",
//     created: new Date()

//   })
//   .then(theRecipeObject => {
//     // console.log(theRecipeObject);
//     console.log("Success!!")
//   })
//   .catch(err => {
//     console.log("-----------------------------------------", err);
//   });