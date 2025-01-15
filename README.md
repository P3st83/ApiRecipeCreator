# ApiRecipeCreator

ApiRecipeCreator is a web-based application that helps users find recipes based on their dietary restrictions, excluded ingredients, available ingredients, calorie limit, and preferred cuisine. The app uses the **Spoonacular API** to fetch recipe data.

## Features
- Filter recipes by dietary restrictions (e.g., vegan, gluten-free).
- Exclude specific ingredients (e.g., nuts, shellfish).
- Input ingredients available in your kitchen.
- Limit recipes by calorie count.
- Choose a cuisine type (e.g., Italian, Mexican).
- Displays recipes with images, titles, and calorie information.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** FastAPI (Python)
- **API Integration:** Spoonacular API
- **Styling:** Bootstrap
- **Environment Management:** Python `venv`
- **Version Control:** Git and GitHub

## Prerequisites
Before setting up the project, ensure you have the following installed:
- Python 3.10 or later
- Node.js (for frontend development, if needed)
- Git

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/P3st83/ApiRecipeCreator.git
cd ApiRecipeCreator
A simple web application that helps you generate recipes based on ingredients, dietary preferences, and calorie limits using the Spoonacular API.

Features
Input dietary restrictions, excluded ingredients, ingredients on hand, calorie limits, and cuisine preferences.
Fetches recipes from Spoonacular API.
Displays recipe titles, images, and nutritional information.
Fully responsive user interface.
Project Structure
bash
Copy code
ApiRecipeCreator/
├── backend/                 # Backend application
│   ├── main.py              # FastAPI backend implementation
│   ├── requirements.txt     # Python dependencies for backend
├── frontend/                # Frontend application
│   ├── index.html           # Main HTML file
│   ├── script.js            # Frontend JavaScript
│   ├── styles.css           # Frontend styles (if used)
├── new_env/                 # Virtual environment (optional, not tracked in Git)
├── .env                     # Environment variables (not tracked in Git)
├── README.md                # Project documentation
└── requirements.txt         # Backend dependencies
Prerequisites
Python (>=3.8)
Node.js (optional, if frontend dependencies exist)
Spoonacular API Key: Obtain a key from spoonacular.com.
Setup Instructions
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/ApiRecipeCreator.git
cd ApiRecipeCreator
2. Create .env File
In the root directory, create a .env file to store your Spoonacular API key.

Example:

makefile
Copy code
SPOONACULAR_API_KEY=your_api_key_here
3. Install Backend Dependencies
Navigate to the backend folder and install the required dependencies.

bash
Copy code
cd backend
pip install -r requirements.txt
4. Run the Backend
Start the backend server:

bash
Copy code
uvicorn main:app --reload
The server will run at http://127.0.0.1:8000.

5. Run the Frontend
Open index.html in a browser.

Usage
Open the index.html file in any browser.
Fill in the fields for:
Dietary restrictions
Excluded ingredients
Ingredients available in your fridge
Calorie limit
Cuisine preferences
Click Generate Recipe.
View the generated recipes with images and basic details.
Notes on .env
Location: The .env file must be in the root directory.
Format: Include your API key as follows:
makefile
Copy code
SPOONACULAR_API_KEY=your_api_key_here
Make sure the .env file is excluded from version control by adding it to .gitignore.

Deployment
Host the frontend/ folder using any static hosting service (e.g., GitHub Pages, Netlify).
Deploy the backend using a service like Heroku, AWS, or Azure.
Update the script.js file to point to the hosted backend URL.
Troubleshooting
CORS Issues: Ensure CORS is configured in the backend (main.py).
Environment Variables: Verify .env file location and contents.
API Key: Ensure your Spoonacular API key is valid and has sufficient quota.
License
This project is licensed under the MIT License.

