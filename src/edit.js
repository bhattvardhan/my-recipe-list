import { initializeRecipePage } from "./views";
import { updateRecipe, removeRecipe } from "./recipes";

const recipeTitleEl = document.querySelector("#recipe-title");
const recipeInstructionsEl = document.querySelector("#recipe-instructions");
const recipeId = location.hash.substring(1);

initializeRecipePage(recipeId);

recipeTitleEl.addEventListener("input", e => {
    updateRecipe(recipeId, {title: e.target.value});
})

recipeInstructionsEl.addEventListener("input", e => {
    updateRecipe(recipeId, {instructions: e.target.value});
})

window.addEventListener("storage", e => {
    if (e.key === "recipes") {
        initializeEditPage(recipeId);
    }
});