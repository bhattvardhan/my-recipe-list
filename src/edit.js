import { initializeRecipePage, renderIngredients } from "./views";
import { updateRecipe, removeRecipe } from "./recipes";
import {
  updateIngredient,
  removeIngredient,
  createIngredient
} from "./ingredients";

const recipeTitleEl = document.querySelector("#recipe-title");
const recipeInstructionsEl = document.querySelector("#recipe-instructions");
const ingredientForm = document.querySelector("#ingredient-form");
const removeRecipeEl = document.querySelector("#delete-recipe");
const recipeId = location.hash.substring(1);

initializeRecipePage(recipeId);

recipeTitleEl.addEventListener("input", e => {
  updateRecipe(recipeId, { title: e.target.value });
});

recipeInstructionsEl.addEventListener("input", e => {
  updateRecipe(recipeId, { instructions: e.target.value });
});

ingredientForm.addEventListener("submit", e => {
  e.preventDefault();
  const newIngredient = e.target.elements.newIngredient.value.trim();
  if (newIngredient.length > 0) {
    createIngredient(newIngredient);
    renderIngredients();
    e.target.elements.newIngredient.value = "";
  }
});

removeRecipeEl.addEventListener("click", () => {
  removeRecipe(recipeId);
  location.assign("/index.html");
});

window.addEventListener("storage", e => {
  if (e.key === "recipes") {
    initializeEditPage(recipeId);
  }
});
