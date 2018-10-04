import { createRecipe } from "./recipes";
import { renderRecipes } from "./views";

renderRecipes();

document.querySelector("#add-recipe").addEventListener("click", () => {
  const recipeId = createRecipe();
  location.assign(`recipe-details.html#${recipeId}`);
});
