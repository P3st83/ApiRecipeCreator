
import os
import requests
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("SPOONACULAR_API_KEY")
BASE_URL = "https://api.spoonacular.com"

app = FastAPI()

class RecipeRequest(BaseModel):
    ingredients: str
    diet: str = None
    excludeIngredients: str = None
    cuisine: str = None
    maxCalories: int = None

@app.post("/generate_recipe/")
async def generate_recipe(request: RecipeRequest):
    params = {
        "apiKey": API_KEY,
        "includeIngredients": request.ingredients,
        "diet": request.diet,
        "excludeIngredients": request.excludeIngredients,
        "cuisine": request.cuisine,
        "maxCalories": request.maxCalories,
        "number": 5  # Number of recipes to fetch
    }

    response = requests.get(f"{BASE_URL}/recipes/complexSearch", params=params)
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.json().get("message", "Error fetching recipes"))

    return response.json()
