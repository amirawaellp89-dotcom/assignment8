let tabs = document.querySelectorAll(".tab-btn");
let panels = document.querySelectorAll(".tab-panel");

for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener("click", function () {

        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }

        for (let j = 0; j < panels.length; j++) {
            panels[j].classList.remove("active");
        }

        tabs[i].classList.add("active");

        let tabName = tabs[i].getAttribute("data-tab");

        document.getElementById(tabName).classList.add("active");

    });

}
let meals = [

    {
        name: "Shrimp Scampi",
        image: "Image/images food.jpeg",
        rating: "4.8",
        reviews: "(356 reviews)",
        difficulty: "Easy",
        category: "Seafood",
        description: "Garlicky shrimp in white wine butter sauce",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",

        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "6 cloves garlic, minced",
            "1/2 cup white wine",
            "4 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh parsley, chopped",
            "Lemon juice and zest",
            "Red pepper flakes"
        ],

        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes.",
            "Add shrimp and cook until pink on both sides.",
            "Add white wine to the pan and simmer for 2 minutes.",
            "Return shrimp to pan, add cooked pasta and toss.",
            "Garnish with parsley, lemon zest, and serve immediately."
        ],

        nutrition: {
            calories: "520 kcal",
            protein: "36g",
            carbs: "54g",
            fat: "18g",
            fiber: "3g",
            sodium: "620mg"
        },

        tips: [
            "Don't overcook shrimp - they cook very quickly",
            "Use good quality white wine for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste"
        ]
    },

    {
        name: "Sushi",
        image: "Image/Sushi.webp",
        rating: "4.7",
        reviews: "(289 reviews)",
        difficulty: "Medium",
        category: "Japanese",
        description: "Fresh sushi rolls with rice, vegetables and seafood",
        prepTime: "25 min",
        cookTime: "20 min",
        servings: "3 people",

        ingredients: [
            "2 cups sushi rice",
            "4 sheets nori",
            "200g fresh salmon",
            "1 cucumber",
            "1 avocado",
            "2 tablespoons rice vinegar",
            "1 tablespoon sugar",
            "Soy sauce",
            "Wasabi"
        ],

        instructions: [
            "Wash the sushi rice and cook it according to the package directions.",
            "Mix rice vinegar and sugar, then add the mixture to the warm rice.",
            "Cut the salmon, cucumber and avocado into thin strips.",
            "Place a sheet of nori on the sushi mat and spread rice evenly.",
            "Add the salmon, cucumber and avocado in the center.",
            "Roll the sushi tightly and cut it into small pieces."
        ],

        nutrition: {
            calories: "430 kcal",
            protein: "24g",
            carbs: "58g",
            fat: "12g",
            fiber: "5g",
            sodium: "540mg"
        },

        tips: [
            "Use fresh ingredients for the best flavor",
            "Do not use too much rice when making the rolls",
            "Keep your knife slightly wet when cutting sushi",
            "Serve sushi immediately after preparing it"
        ]
    },

    {
        name: "Roasted Duck",
        image: "Image/images duck.jpeg",
        rating: "4.9",
        reviews: "(241 reviews)",
        difficulty: "Medium",
        category: "Poultry",
        description: "Crispy roasted duck with tender and juicy meat",
        prepTime: "20 min",
        cookTime: "90 min",
        servings: "4 people",

        ingredients: [
            "1 whole duck",
            "4 cloves garlic",
            "1 tablespoon olive oil",
            "1 teaspoon salt",
            "1/2 teaspoon black pepper",
            "1 tablespoon honey",
            "1 orange",
            "Fresh rosemary",
            "Fresh thyme"
        ],

        instructions: [
            "Clean the duck and pat it dry with paper towels.",
            "Season the duck with salt, pepper, garlic and olive oil.",
            "Place orange slices and fresh herbs inside the duck.",
            "Roast the duck in a preheated oven until the skin becomes crispy.",
            "Brush the duck with honey during the last few minutes.",
            "Let the duck rest before slicing and serving."
        ],

        nutrition: {
            calories: "680 kcal",
            protein: "42g",
            carbs: "12g",
            fat: "48g",
            fiber: "2g",
            sodium: "720mg"
        },

        tips: [
            "Dry the duck well before roasting for crispy skin",
            "Do not skip the resting time after cooking",
            "Remove excess fat during roasting",
            "Serve with fresh herbs for extra flavor"
        ]
    },

    {
        name: "Roasted Turkey",
        image: "Image/fd947699-3031-42bb-a778-dd5dab11705f.png",
        rating: "4.8",
        reviews: "(315 reviews)",
        difficulty: "Medium",
        category: "Poultry",
        description: "Juicy roasted turkey with herbs and garlic",
        prepTime: "30 min",
        cookTime: "120 min",
        servings: "6 people",

        ingredients: [
            "1 whole turkey",
            "5 cloves garlic",
            "4 tablespoons butter",
            "1 teaspoon salt",
            "1 teaspoon black pepper",
            "Fresh rosemary",
            "Fresh thyme",
            "1 onion",
            "1 lemon"
        ],

        instructions: [
            "Clean the turkey and dry it completely.",
            "Rub butter, garlic, salt and pepper all over the turkey.",
            "Place onion, lemon and fresh herbs inside the turkey.",
            "Roast in a preheated oven until fully cooked.",
            "Baste the turkey with its juices during cooking.",
            "Let the turkey rest before slicing and serving."
        ],

        nutrition: {
            calories: "590 kcal",
            protein: "52g",
            carbs: "8g",
            fat: "35g",
            fiber: "2g",
            sodium: "680mg"
        },

        tips: [
            "Let the turkey reach room temperature before roasting",
            "Baste the turkey during cooking to keep it juicy",
            "Use a meat thermometer to check doneness",
            "Let the turkey rest before cutting"
        ]
    },

    {
        name: "Stuffed Grape Leaves",
        image: "Image/imagesss.jpeg",
        rating: "4.9",
        reviews: "(428 reviews)",
        difficulty: "Medium",
        category: "Middle Eastern",
        description: "Tender grape leaves stuffed with seasoned rice and herbs",
        prepTime: "40 min",
        cookTime: "60 min",
        servings: "5 people",

        ingredients: [
            "500g grape leaves",
            "2 cups rice",
            "300g minced meat",
            "2 tomatoes, chopped",
            "1 onion, finely chopped",
            "Fresh parsley",
            "Fresh mint",
            "2 tablespoons olive oil",
            "Lemon juice"
        ],

        instructions: [
            "Wash the grape leaves and blanch them in hot water.",
            "Mix rice, minced meat, tomatoes, onion and fresh herbs.",
            "Place a small amount of filling on each grape leaf.",
            "Fold the sides and roll each leaf tightly.",
            "Arrange the stuffed grape leaves in a cooking pot.",
            "Add water and lemon juice, then cook until tender."
        ],

        nutrition: {
            calories: "410 kcal",
            protein: "21g",
            carbs: "48g",
            fat: "16g",
            fiber: "6g",
            sodium: "590mg"
        },

        tips: [
            "Do not overfill the grape leaves",
            "Roll the leaves tightly so the filling stays inside",
            "Use fresh lemon juice for a better flavor",
            "Cook on low heat for tender grape leaves"
        ]
    }

];
let randomBtn = document.getElementById("randomBtn");

randomBtn.addEventListener("click", function () {

    let randomNumber = Math.floor(Math.random() * meals.length);

    let meal = meals[randomNumber];

    document.getElementById("mealImage").src = meal.image;
    document.getElementById("mealImage").alt = meal.name;

    document.getElementById("mealName").textContent = meal.name;
    document.getElementById("mealRating").textContent = meal.rating;
    document.getElementById("mealReviews").textContent = meal.reviews;

    document.getElementById("mealDifficulty").textContent = meal.difficulty;
    document.getElementById("mealCategory").textContent = meal.category;

    document.getElementById("mealDescription").textContent =
        meal.description;

    document.getElementById("prepTime").textContent = meal.prepTime;
    document.getElementById("cookTime").textContent = meal.cookTime;
    document.getElementById("servings").textContent = meal.servings;

});