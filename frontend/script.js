document.getElementById("generate-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const dietaryRestrictions = document.getElementById("dietary-restrictions").value.trim();
    const excludedIngredients = document.getElementById("excluded-ingredients").value.trim();
    const includedIngredients = document.getElementById("included-ingredients").value.trim();
    const calorieLimit = document.getElementById("calorie-limit").value.trim();
    const cuisine = document.getElementById("cuisine").value.trim();

    try {
        const response = await fetch("http://127.0.0.1:8000/generate_recipe/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ingredients: includedIngredients,
                excluded: excludedIngredients,
                cuisine: cuisine,
                maxCalories: calorieLimit,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch recipe.");
        }

        const data = await response.json();
        displayRecipes(data.results); // Adjust this function as needed
    } catch (error) {
        console.error(error);
        document.getElementById("recipe-output").innerHTML = `<p class="text-danger">An error occurred. Please try again.</p>`;
    }
});

// Function to display recipes
function displayRecipes(recipes) {
    const recipeContainer = document.getElementById("recipe-output");
    recipeContainer.innerHTML = "";

    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" />
            <h3>${recipe.title}</h3>
            <p>Calories: ${recipe.nutrition.nutrients[0]?.amount || "Not specified"}</p>
        `;
        recipeContainer.appendChild(recipeCard);
    });
}
