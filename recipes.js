const mongoose = require('mongoose');
const Schema   = mongoose.Schema;



const recipeSchema = new Schema({
  title: { type: String, minlength: 1, unique: true, required: true },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  ingredients: [String],
  cuisine: { type: String, required: true },
  dishType: {
    type: String,
    enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg."
  },
  duration:{ type: Number, minlength: 0 },
  creator: String,
  created: Date
});


const Recipe = mongoose.model("Recipe", recipeSchema);



module.exports = Recipe;


  // -==--=-==--=-==--==--=-=-==--==--=-=-=-=-=-=-=-==--=



//3 then you make the rules about what a cat is

// you only need to do {type: string} if you are adding more rules like a default or minlength
// const catSchema = new Schema({
//   name: { type: String, minlength: 4, unique: true, required: true },
//   color: { type: String, default: "Brown" },
//   age: Number
// });

// //3.1 you create the cat class using those rules
// const Cat = mongoose.model('Cat', catSchema);


// module.exports = Cat;