import { getRecipes } from "./recipes";
import {
  getIngredients,
  toggleIngredient,
  removeIngredient
} from "./ingredients";

const generateRecipeDOM = recipe => {
  const recipeEl = document.createElement("a");
  const recipeTitleEl = document.createElement("p");

  if (recipe.title.length > 0) {
    recipeTitleEl.textContent = recipe.title;
  } else {
    recipeTitleEl.textContent = "Unnamed recipe";
  }

  recipeEl.appendChild(recipeTitleEl);
  recipeEl.setAttribute("href", `edit.html#${recipe.id}`);

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

const generateIngredientDOM = ingredient => {
  const ingredientEl = document.createElement("label");
  const containerElement = document.createElement("div");
  const selectIngredientCheckbox = document.createElement("input");

  selectIngredientCheckbox.setAttribute("type", "checkbox");
  selectIngredientCheckbox.checked = ingredient.isAvailable;

  containerElement.appendChild(selectIngredientCheckbox);
  selectIngredientCheckbox.addEventListener("change", () => {
    toggleIngredient(ingredient.id);
    renderIngredients();
  });

  const ingredientTextEl = document.createElement("span");
  containerElement.appendChild(ingredientTextEl);
  ingredientTextEl.textContent = ingredient.title;

  ingredientEl.appendChild(containerElement);

  const removeIngredientButton = document.createElement("button");
  removeIngredientButton.textContent = "Remove";
  ingredientEl.appendChild(removeIngredientButton);
  removeIngredientButton.addEventListener("click", () => {
    removeIngredient(ingredient.id);
    renderIngredients();
  });

  return ingredientEl;
};

const renderIngredients = () => {
  const ingredientListEl = document.querySelector("#ingredient-list");
  ingredientListEl.innerHTML = "";

  if (getIngredients().length > 0) {
    getIngredients().forEach(ingredient => {
      ingredientListEl.appendChild(generateIngredientDOM(ingredient));
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No ingredients to show";
    ingredientListEl.appendChild(emptyMessage);
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

export { renderRecipes, initializeRecipePage, renderIngredients };
