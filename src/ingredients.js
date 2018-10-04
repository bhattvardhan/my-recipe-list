const recipeId = location.hash.substring(1);
let ingredients = [];

const loadIngredients = () => {
  const ingredientsJSON = localStorage.getItem("ingredients");
  try {
    return ingredientsJSON ? JSON.parse(ingredientsJSON) : [];
  } catch (e) {
    return [];
  }
};

const getIngredients = () => ingredients;

const saveIngredients = () => {
  localStorage.setItem("ingredients", JSON.stringify(ingredients));
};

const createIngredient = ingredientText => {
  ingredients.push({ id: recipeId, title: ingredientText, isAvailable: false });

  saveIngredients();
};

const removeIngredient = id => {
  const ingredientIndex = ingredients.findIndex(
    ingredient => ingredient.id === id
  );
  if (ingredientIndex > -1) {
    ingredients.splice(ingredientIndex, 1);
    saveIngredients();
  }
};

const updateIngredient = (id, updates) => {
  const ingredient = ingredients.find(ingredient => ingredient.id === id);

  if (!ingredient) {
    return;
  }

  if (typeof updates.title === "string") {
    ingredient.title = updates.title;
  }

  if (typeof updates.instructions === "string") {
    ingredient.instructions = updates.instructions;
  }

  saveingredients();

  return ingredient;
};

const toggleIngredient = id => {
  const ingredient = ingredients.find(ingredient => ingredient.id === id);
  if (ingredient) {
    ingredient.isAvailable = !ingredient.isAvailable;
    saveIngredients();
  }
};

ingredients = loadIngredients();

export {
  createIngredient,
  getIngredients,
  updateIngredient,
  removeIngredient,
  toggleIngredient
};
