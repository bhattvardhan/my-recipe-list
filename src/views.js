import { getRecipes } from "./recipes";

const generateRecipeDOM = recipe => {
  const recipeEl = document.createElement("a");
  const recipeTitleEl = document.createElement("p");

  if (recipe.title.length > 0) {
    recipeTitleEl.textContent = recipe.title;
  } else {
    recipeTitleEl.textContent = "Unnamed recipe";
  }

  recipeEl.appendChild(recipeTitleEl);
  recipeEl.setAttribute("href", `/recipe-details#${recipe.id}`);

  return recipeEl;
};

const renderRecipes = () => {
  const recipesEl = document.querySelector("#recipes");
  recipesEl.innerHTML = "";

  if (getRecipes().length > 0) {
    getRecipes().forEach(recipe => {
      const recipeEl = generateRecipeDOM(recipe);
      recipesEl.appendChild(recipeEl);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No recipes to show";
    recipesEl.appendChild(emptyMessage);
  }
};

const initializeRecipePage = id => {
  const recipeTitleEl = document.querySelector("#recipe-title");
  const recipeInstructionsEl = document.querySelector("#recipe-instructions");

  const recipes = getRecipes();
  const recipe = recipes.find(recipe => recipe.id === id);

  if (!recipe) {
    location.assign("/index.html");
  }

  recipeTitleEl.value = recipe.title;
  recipeInstructionsEl.value = recipe.instructions;
};

export { renderRecipes, initializeRecipePage };
