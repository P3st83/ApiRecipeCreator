// Validate inputs
const validateInputs = (payload) => {
    // Ensure at least one included ingredient is provided
    if (!payload.included_ingredients) {
        alert("Please enter at least one ingredient.");
        return false;
    }

    // Ensure calorie limit is a valid number if provided
    if (payload.calorie_limit && isNaN(Number(payload.calorie_limit))) {
        alert("Calorie limit must be a number.");
        return false;
    }

    return true;
};

// Add event listener to the form
document.getElementById("generate-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Target the results container
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "<p>Loading recipes...</p>"; // Display loading message

    // Create the payload from form inputs
    const payload = {
        dietary_restrictions: document.getElementById("dietary-restrictions").value.trim() || null,
        excluded_ingredients: document.getElementById("excluded-ingredients").value.trim() || null,
        included_ingredients: document.getElementById("included-ingredients").value.trim() || null,
        calorie_limit: document.getElementById("calorie-limit").value.trim() || null,
        cuisine: document.getElementById("cuisine").value.trim() || null,
    };

    // Validate inputs
    if (!validateInputs(payload)) {
        resultsContainer.innerHTML = ""; // Clear loading message
        return; // Stop further execution if validation fails
    }

    try {
        // Send POST request to the backend (Replace with Render URL)
        const response = await fetch("https://apirecipecreator.onrender.com/generate_recipes/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        // Handle errors if the response is not OK
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error response from server:", errorText);
            throw new Error(`Failed to fetch recipes: ${response.statusText}`);
        }

        // Parse JSON response
        const data = await response.json();
        resultsContainer.innerHTML = ""; // Clear the loading message

        // Display message if no recipes are found
        if (data.message) {
            resultsContainer.innerHTML = `<p>${data.message}</p>`;
            return;
        }

        // Render recipes dynamically
        data.recipes.forEach((recipe) => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("col-md-4", "recipe-card");
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" class="img-fluid">
                <h3>${recipe.title}</h3>
                <a href="${recipe.sourceUrl}" class="btn btn-primary mt-2" target="_blank">View Recipe</a>
            `;
            resultsContainer.appendChild(recipeCard);
        });
    } catch (error) {
        // Handle errors gracefully
        console.error("Error fetching recipes:", error);
        resultsContainer.innerHTML = `<p class="text-danger">Error fetching recipes. Please try again.</p>`;
    }
});
