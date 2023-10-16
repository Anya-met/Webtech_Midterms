document.addEventListener('DOMContentLoaded', function () {
  const currentPathname = window.location.pathname;
  const selectedIngredients = [];

  const data = {
    "foodCategories": [
        {
            "categoryName": "Beverages",
            "items": ["Cola", "Dr. Pepper", "Low Sodium Vegetable Juice", "Tomato Juice", "Beer", "White Wine",
            "Non-alcoholic Beer", "Water", "V8 Juice", "Sake", "Bourbon"]
        },
        {
            "categoryName": "Dairy or Dairy Alternatives",
            "items": ["Coconut Milk", "Mozarella Cheese", "Cream Cheese", "Parmesan Cheese", "Cheddar Cheese", 
            "Cheese", "Green Yogurt", "Strawberry Yogurt", "Blue Cheese Salad Dressing", "Pecan Ice Cream", 
            "Mexican Cheese Blend", "Swiss Cheese", "Pepper Jack Cheese", "Smoked Gouda Cheese", "Provolone Cheese", 
            "Evaporated Milk"]
        },
        {
            "categoryName": "Eggs",
            "items": ["Chicken Egg", "Salted Egg"]
        },
        {
            "categoryName": "Fats and Oils",
            "items": ["Coconut Oil", "Sesame Oil", "Canola Oil", "Cooking Oil", "Olive Oil", "Mayonnaise", 
            "Cooking Spray", "Butter", "French-fried Onion"]
        },
        {
            "categoryName": "Fish",
            "items": ["Baby Octopus", "White Fish Fillet", "Fish Fillet", "White Fish", "Fish", "Mussel", 
            "Calamari", "Tilapia Fillet", "Milkfish", "Canned Tomato Sauce Sardines", "Shrimp", "Canned Tuna", 
            "Octopus", "Tuna", "Prawn", "Squid"]
        },
        {
            "categoryName": "Fruits",
            "items": ["Apple", "Seedless Watermelon", "Lime Juice", "Lemon", "Banana", "Avocado", "Lemon Juice", 
            "Frozen Orange Juice", "Grape Tomatoes", "Sun-dried Tomatoes", "Navel Orange", "Lemon Wedges", "Peaches", 
            "Pineapple"]
        },
        {
            "categoryName": "Grains",
            "items": ["Chicken Stuffing Mix", "Crackers", "Ramen Noodles", "Cheese Ravioli", "Shell Pasta", 
            "Rice Pilaf Mix with Toasted Almonds", "Canned Biscuits", "Flour", "Bread", "Pasta", "Egg Noodles", 
            "Grands Biscuit", "Fruity Pebbles Cereal", "Self-rising Flour", "Crescent Roll", "Tortilla", 
            "Naan Flatbread", "Rice", "Tostada Shells", "Wheat Hamburger Buns", "Pretzel Rolls", "Hoagie Rolls"]
        },
        {
            "categoryName": "Herbs and Spices",
            "items": ["Ground Ginger", "Hot Pepper Sauce", "Dijon Mustard", "Savory Pot Roast Seasoning Mix", 
            "Sea Salt", "Mint", "Parsley", "French Onion Packet", "Ranch Seasoning", "Italian Dressing Mix", 
            "Ranch Salad Dressing Mix", "Thyme", "Black Pepper", "Onion Soup Mix", "Salt", "Kosher Salt", 
            "Taco Seasoning Mix", "Tanoori Chicken Masala", "Garlic", "Southwest-style Seasoning Blend", 
            "Cornstarch", "Green Chili", "Sage", "Rosemary Sprigs", "Chili Powder", "Smoked Paprika", 
            "Onion Seasoning", "Garlic Paste"]
        },
        {
            "categoryName": "Legumes",
            "items": ["Great Northern Beans", "Black Beans", "Kidney Beans", "Miso Paste", "Canned Chili with Beans", 
            "Refried Beans", "White Beans"]
        },
        {
            "categoryName": "Meat",
            "items": ["Chicken Drumstick", "Cooked Chicken", "Pork Leg", "Pork Loin", "Bulk Pork Sausage", 
            "Round Beef Roast", "Beef Rump Roast", "Organic Beef", "Sausage Ravioli", "Beef Stir-fry Strips", 
            "Bacon", "Pork Tenderloin", "Ham Steak", "Baked Ham", "Pork Chop", "Ground Spicy Pork Sausage", 
            "Ground Pork Sausage", "Pot Roast", "Chuck Roast", "Beef Blade", "Meatball", "Ground Turkey", 
            "Beef Stew Meat", "Ground Beef", "Chicken Breast", "Whole Chicken", "Prosciutto", "Chicken Wing", 
            "Chicken Chunks", "Broiler Chicken", "Fryer Chicken", "Beef Mince", "Casserole Steak", "Beef Oxo", 
            "Beef Top Sirloin", "Top Round Steak", "Flank Steak", "Pork Fillet", "Pork", "Pork Spare Ribs", 
            "Pork Tenderloin", "Pork Shoulder Roast", "Ground Meatload Mixture"]
        },
        {
            "categoryName": "Nuts and Seeds",
            "items": ["Unsalted Dry Roasted Peanut", "Sesame Seeds", "Pine Nuts", "Sunflower Seeds", "Almonds"]
        },
        {
            "categoryName": "Sauces and Condiments",
            "items": ["Caesar Salad Dressing", "Worcestershire Sauce", "Cider Vinegar", "Taco Sauce", 
            "Sweet Chili Sauce", "Sweet Pickled Relish", "Soy Sauce", "Spaghetti Sauce", "Bread Crumbs", 
            "Vegatable Stock", "Pesto Sauce", "Italian Salad Dressing", "Asian Sesame Salad Dressing", 
            "Alfredo Sauce", "Salsa Verde", "Chicken Stock", "White Vinegar", "Basil Pesto", "Beef Stock", 
            "Yellow Mustard", "Ketchup", "Buffalo Wing Sauce", "Barbeque Sauce", "Salsa", "Chunky Salsa", 
            "Croutons", "Marinara Sauce", "Tomato Sauce", "Pesto", "Rice Vinegar", "Apple Cider Vinegar", 
            "Teriyaki Sauce", "Original Sloppy Joe Sauce", "Pasta Sauce", "Caesar Dressing", "Ginger Sauce", 
            "Hoisin Sauce", "Sriracha Chili Sauce", "Mango Chutney"]
        },
        {
            "categoryName": "Soup",
            "items": ["Cream of Condensed Broccoli Cheese Soup", "Golden Mushroom Soup", "Bone Broth", 
            "Tomato Soup", "Cream of Condensed Mushroom Soup", "Cream of Condensed Chicken Soup", "Chicken Broth", 
            "Beef Broth", "Tomato Rice Soup", "Onion Soup", "Mushroom Soup"]
        },
        {
            "categoryName": "Sweets and Sugars",
            "items": ["Red Jalapeno Pepper Jelly", "Apricot Preserve", "Grape Jelly", "Maple Syrup", 
            "Sugar", "Honey", "Brown Sugar", "Agave Nectar"]
        },
        {
            "categoryName": "Tofu and Tempeh",
            "items": ["Tofu"]
        },
        {
            "categoryName": "Vegetables",
            "items": ["Green Onion", "Green Leafy Vegetables", "Stew Vegetables", "Zucchini", "Red Capsicum", 
            "Tater Tots", "Green Beans", "Squash", "Carrot", "Portobello Mushrooms", "Peas", "Eggplant", 
            "Bell Pepper", "Butternut Pumpkin", "Potato", "Corn", "Broccoli", "Mixed Veggies", "String Beans", 
            "Onion", "Sweet Potato", "Cauliflower", "Acorn Squash", "Fajita Vegetables", "Kale", "Baby Spinach", 
            "Chickpeas", "Brussels Sprout", "Mixed Greens", "Spinach", "Tomato", "Hash Brown", "Mashed Potato",
            "Stir-fried Vegetables", "Russet Potato", "Romaine Lettuce", "Ginger", "Calamansi Juice"]
        }
    ],

    "recipeList": [

        {
            "items": ["Butter", "Salt", "Chicken Breast"],
            "recipeName": "Baked Chicken Breasts",
            "ingredients": ["1/4 Cup of Melted Butter", "1 Tsp. Salt", "4 Skinless and Boneless Breasts, Halves"],
            "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
        },
        {
            "items": ["Whole Chicken", "Lemon", "Kosher Salt"],
            "recipeName": "Ridiculously Simple Roast Chicken",
            "ingredients": ["(1) 4 Pound Rinsed Whole Chicken", "1 Lemon, Halved", "Kosher Salt"],
            "websiteLink": "https://www.allrecipes.com/recipe/228848/stupid-simple-roast-chicken/"
        },
        {
            "items": ["Chicken Breast", "Basil Pesto", "Prosciutto"],
            "recipeName": "Pesto Chicken",
            "ingredients": ["4 Skinless and Boneless Chicken Breasts, Halves", "1/2 Cup Divided Basil Pesto", "4 Thin Slices of Prosciutto (or more if needed)"],
            "websiteLink": "https://www.allrecipes.com/recipe/214188/pesto-chicken/"
        },
        {
            "items": ["Onion", "Whole Chicken", "Salt"],
            "recipeName": "Chef John's Broiled Chicken",
            "ingredients": ["1 Sliced, Small Onion", "(1) 3 Pound Whole Chicken, Cut in Half and Backbone Removed", "Salt as Needed"],
            "websiteLink": "https://www.allrecipes.com/recipe/238923/chef-johns-broiled-chicken/"
        },
        {
            "items": ["Chicken Broth", "Taco Seasoning Mix", "Chicken Breast"],
            "recipeName": "Fiesta Slow Cooker Shredded Chicken Tacos",
            "ingredients": ["1 Cup Chicken Broth", "3 Tbsp. Taco Seasoning Mix", "1 Pound Skinless and Boneless Chicken Breasts"],
            "websiteLink": "https://www.allrecipes.com/recipe/242342/fiesta-slow-cooker-shredded-chicken-tacos/"
        },
        {
            "items": ["Chicken Wing","Barbeque Sauce","Maple Syrup"],
            "recipeName": "3-Ingredient Baked BBQ Chicken Wings",
            "ingredients": ["5 pounds frozen chicken wings, thawed","10 fluid ounces barbeque sauce", "2 tablespoons maple-flavored syrup"],
            "websiteLink": "https://www.allrecipes.com/recipe/256355/3-ingredient-baked-bbq-chicken-wings/"
        },
        {
            "items": ["Onion","Whole Chicken","Salsa"],
            "recipeName": "Slow Cooker Chicken and Salsa",
            "ingredients": ["1 sweet onion, sliced and separated into rings", "1 (5 pound) whole chicken", "1 (20 ounce) jar salsa"],
            "websiteLink": "https://www.allrecipes.com/recipe/237682/slow-cooker-chicken-and-salsa/"
        },
        {
            "items": ["Onion","Chicken Egg","Chicken Breast"],
            "recipeName": "Crunchy French Onion Chicken",
            "ingredients": ["1 ⅓ cups French-fried onions, crushed","1 large egg, beaten","1 pound skinless, boneless chicken breast halves"],
            "websiteLink": "https://www.allrecipes.com/recipe/239896/crunchy-french-onion-chicken/"
        },
        {
            "items": ["Sweet Potato","Chicken Breast","Barbeque Sauce"],
            "recipeName": "3-Ingredient BBQ Stuffed Sweet Potatoes",
            "ingredients": ["2 medium sweet potatoes, halved","1 lb. boneless skinless chicken breasts, cooked and shredded","1/3 cup BBQ sauce, your favorite (or less/more, to your taste)"],
            "websiteLink": "https://www.thecomfortofcooking.com/2014/10/3-ingredient-bbq-chicken-stuffed-sweet-potatoes.html"
        },
        {
            "items": ["Chicken Chunks","Tanoori Chicken Masala","Green Yogurt"],
            "recipeName": "Grilled Chicken",
            "ingredients": ["500 gms Chicken Chunks","1 tsp Tandoori Chicken Masala","1/2 cup Green yogurt"],
            "websiteLink": "https://food.ndtv.com/recipe-3-ingredients-grilled-chicken-955919"
        },
        {
            "items": ["Strawberry Yogurt","Fruity Pebbles Cereal","Banana"],
            "recipeName": "Frozen Banana Cereal Pops",
            "ingredients": ["3/4 cup strawberry yogurt","2 cups Fruity Pebbles cereal","4 medium bananas"],
            "websiteLink": "https://www.tasteofhome.com/recipes/frozen-banana-cereal-pops/"
        },
        {
            "items": ["Cauliflower","Buffalo Wing Sauce","Blue Cheese Salad Dressing"],
            "recipeName": "Roasted Buffalo Cauliflower Bites",
            "ingredients": ["1 medium head cauliflower","1/2 cup Buffalo wing sauce","Blue cheese salad dressing"],
            "websiteLink": "https://www.tasteofhome.com/recipes/roasted-buffalo-cauliflower-bites/"
        },
        {
            "items": ["Pecan Ice Cream","Self-rising Flour","Sugar"],
            "recipeName": "Ice Cream Bread",
            "ingredients": ["1 cup butter pecan ice cream","3/4 cup self-rising flour","1 tablespoon sugar"],
            "websiteLink": "https://www.tasteofhome.com/recipes/ice-cream-bread/"
        },
        {
            "items": ["Crescent Roll", "Onion","Chicken Egg"],
            "recipeName": "Easy Onion Crescent Rolls",
            "ingredients": ["1 tube refrigerated crescent rolls","1-1/3 cups french-fried onions","1 large egg"],
            "websiteLink": "https://www.tasteofhome.com/recipes/easy-onion-crescent-rolls/"
        },
        {
            "items": ["Tortilla","Mexican Cheese Blend","Salsa"],
            "recipeName": "Cheesy Quesadillas",
            "ingredients": ["4 flour tortillas","1-1/2 cups shredded Mexican cheese blend","1/2 cup salsa"],
            "websiteLink": "https://www.tasteofhome.com/recipes/cheesy-quesadillas/"
        },
        {
            "items": ["Avocado","Lemon Juice","Chunky Salsa"],
            "recipeName": "Simple Guacamole",
            "ingredients": ["2 medium ripe avocados","1 tablespoon lemon juice","1/4 cup chunky salsa"],
            "websiteLink": "https://www.tasteofhome.com/recipes/simple-guacamole/"
        },
        {
            "items": ["Butter","Garlic","Naan Flatbread"],
            "recipeName": "Grilled Garlic Naan",
            "ingredients": ["2 tablespoons butter","3 garlic cloves, minced","2 naan flatbreads"],
            "websiteLink": "https://www.tasteofhome.com/recipes/grilled-garlic-naan/"
        },
        {
            "items": ["Unsalted Dry Roasted Peanut","Salt","Honey"],
            "recipeName": "Homemade Peanut Butter",
            "ingredients": ["2 cups unsalted dry roasted peanuts","1/2 teaspoon salt","1 tablespoon honey"],
            "websiteLink": "https://www.tasteofhome.com/recipes/homemade-peanut-butter/"
        },
        {
            "items": ["Acorn Squash","Brown Sugar","Butter"],
            "recipeName": "Candied Acorn Squash Slices",
            "ingredients": ["2 medium acorn squash","2/3 cup packed brown sugar","1/2 cup butter, softened"],
            "websiteLink": "https://www.tasteofhome.com/recipes/candied-acorn-squash-slices/"
        },
        {
            "items": ["Chunky Salsa","Rice","Cheese"],
            "recipeName": "Salsa Rice",
            "ingredients": ["1-1/2 cups chunky salsa","2 cups uncooked instant rice","1 to 1-1/2 cups shredded cheese"],
            "websiteLink": "https://www.tasteofhome.com/recipes/salsa-rice/"
        },
        {
            "items": ["Ground Beef","Onion","Tomato Rice Soup"],
            "recipeName": "Cheesy Beef Enchilada Dip",
            "ingredients": ["1 lb lean ground beef (Meat)","1 medium onion","10 ounces tomato rice soup "],
            "websiteLink": "https://www.theslowroasteditalian.com/cheesy-beef-enchilada-dip-recipe"
        },
        {
            "items": ["Beef Stew Meat","Butter","Onion Soup Mix"],
            "recipeName": "Butter Beef",
            "ingredients": ["3 pounds cubed beef stew meat","½ cup butter","1 (1 ounce) envelope dry onion soup mix"],
            "websiteLink": "https://www.allrecipes.com/recipe/73910/butter-beef/"
        },
        {
            "items": ["Ground Beef","Ground Turkey","Salsa","Taco Seasoning Mix"],
            "recipeName": "Crockpot Taco Meat ",
            "ingredients": ["Lean Ground Beef or Ground Turkey","Salsa","Taco seasoning"],
            "websiteLink": "https://www.eatingonadime.com/crockpot-taco-meat-recipe/"
        },
        {
            "items": ["Meatball","Barbeque Sauce","Grape Jelly"],
            "recipeName": "Crock Pot Grape Jelly Meatballs",
            "ingredients": ["Meatballs","BBQ Sauce","Grape Jelly"],
            "websiteLink": "https://www.somewhatsimple.com/crock-pot-meatballs/"
        },
        {
            "items": ["Beef Blade","Chuck Roast","Beef Broth","Onion Soup Mix"],
            "recipeName": "Shredded Beef",
            "ingredients": ["3-4 pounds beef blade/chuck roast","4 cups of beef broth","1 tablespoon onion soup mix"],
            "websiteLink": "https://www.thekitchenmagpie.com/fast-and-delicious-3-ingredient-shredded-beef/"
        },
        {
            "items": ["Beef Stew Meat", "Onion Soup","Mushroom Soup"],
            "recipeName": "Slow Cooker Beef",
            "ingredients": ["3 pounds stew beef","1 can cream of onion soup","1 can cream of mushroom soup"],
            "websiteLink": "https://lifewiththecrustcutoff.com/three-ingredient-crockpot-beef-tips/"
        },
        {
            "items": ["Ground Beef","Ketchup","Yellow Mustard"],
            "recipeName": "Sloppy Joes",
            "ingredients": ["Ground Beef","Ketchup","Yellow Mustard"],
            "websiteLink": "https://theshortordercook.com/3-ingredient-sloppy-joes-gluten-free/#ingredients"
        },
        {
            "items": ["Ground Beef","Cheddar Cheese","Grands Biscuit"],
            "recipeName": "Cheeseburger Pockets",
            "ingredients": ["1 lb. ground beef","1 cup shredded cheddar cheese","1 tube Grands Biscuits"],
            "websiteLink": "https://www.mynameissnickerdoodle.com/fabulous-food-friday-18/"
        },
        {
            "items": ["Beef Stock","Onion Soup Mix","Chuck Roast"],
            "recipeName": "Pulled Beef",
            "ingredients": ["3 cups beef stock","1 packet French onion soup mix","1.5kg chuck roast"],
            "websiteLink": "https://www.4ingredients.com.au/recipes/3-ingredient-pulled-beef"
        },
        {
            "items": ["Egg Noodles","Beef Broth","Pot Roast"],
            "recipeName": "Beef and Noodles",
            "ingredients": ["Frozen egg noodles ","Beef broth","Cooked pot roast"],
            "websiteLink": "https://www.lifeissweeterbydesign.com/three-ingredient-beef-and-noodles/#INGREDIENTS_FOR_BEEF_AND_NOODLES"
        },
        {
            "items": ["Ground Pork Sausage","Ground Spicy Pork Sausage","Frozen Orange Juice"],
            "recipeName": "Easy Appetizer Meatballs",
            "ingredients": ["1 pound ground pork sausage","1 pound ground spicy pork sausage","1 (6 ounces) can of frozen orange juice concentrate (thawed)"],
            "websiteLink": "https://www.allrecipes.com/recipe/244436/easy-appetizer-meatballs/"
        },
        {
            "items": ["Pork Chop","Salt","Black Pepper","Thyme"],
            "recipeName": "Perfect Simple Roasted Pork Chops",
            "ingredients": ["4 boneless center-cut pork chops","salt and ground black pepper to taste","2 tablespoons dried thyme (lightly crushed, or more to taste)"],
            "websiteLink": "https://www.allrecipes.com/recipe/266162/perfect-simple-roasted-pork-chops/"
        },
        {
            "items": ["Baked Ham","Brown Sugar","Cola"],
            "recipeName": "Cola-Glazed Ham",
            "ingredients": ["1 (8 pound) baked ham","1 cup brown sugar","2 (12 fluid ounce) cans or bottles cola-flavored carbonated beverage"],
            "websiteLink": "https://www.allrecipes.com/recipe/245486/cola-glazed-ham/"
        },
        {
            "items": ["Pork Chop","Cooking Spray","Ranch Salad Dressing Mix"],
            "recipeName": "Air Fryer Ranch Pork Chops",
            "ingredients": ["4 boneless center-cut pork chops (1-inch thick)","cooking spray","2 teaspoons dry ranch salad dressing mix (such as Hidden Valley Ranch)"],
            "websiteLink": "https://www.allrecipes.com/recipe/276831/air-fryer-ranch-pork-chops/"
        },
        {
            "items": ["Ham Steak","Butter","Brown Sugar"],
            "recipeName": "Brown Sugar Ham Steak",
            "ingredients": ["1 (8 ounce) bone-in fully cooked ham steak","5 tablespoons butter (cubed)","5 tablespoons brown sugar"],
            "websiteLink": "https://www.allrecipes.com/recipe/236432/brown-sugar-ham-steak/"
        },
        {
            "items": ["Pork Tenderloin", "Dr. Pepper", "Barbeque Sauce"],
            "recipeName": "Slow Cooker Dr. Pepper Pulled Pork",
            "ingredients": ["1 - 3 to 4 pound boneless pork tenderloin","1 ½ cups Dr Pepper","2 cups barbecue sauce"],
            "websiteLink": "https://www.gracefullittlehoneybee.com/slow-cooker-dr-pepper-pulled-pork-only-three-ingredients/"
        },
        {
            "items": ["Pork Chop","Brown Sugar","Italian Dressing Mix"],
            "recipeName": "Brown Sugar Italian Pork Chops",
            "ingredients": ["8 boneless pork chops","½ cup brown sugar","1 (0.7-oz) packet Italian Dressing Mix"],
            "websiteLink": "https://www.plainchicken.com/3-ingredient-brown-sugar-italian-pork/"
        },
        {
            "items": ["Pork Chop","Ranch Seasoning","Cream of Condensed Chicken Soup"],
            "recipeName": " Crock Pot Pork Chops",
            "ingredients": ["Thick bone-in pork chops","A packet of ranch seasoning","Can of cream of condensed chicken soup"],
            "websiteLink": "https://www.backtomysouthernroots.com/easy-3-ingredient-crock-pot-pork-chops/"
        },
        {
            "items": ["Pork Chop", "French Onion Packet","Cream of Condensed Mushroom Soup"],
            "recipeName": "French Crock Pot Pork Chops",
            "ingredients": ["Pork Chops","French Onion Packet","Cream of Mushroom Soup"],
            "websiteLink": "https://www.crockpotsandflipflops.com/crock-pot-french-onion-pork-chops/"
        },
        {
            "items": ["Shrimp","Butter","Garlic"],
            "recipeName": "Garlic Butter Shrimp",
            "ingredients": ["2 pounds shrimp","¼-1/2 cup butter","2 freshly minced garlic"],
            "websiteLink": "https://www.heavenlyhomemakers.com/simple-garlic-butter-shrimp-recipe-3-ingredients"
        },
        {
            "items": ["Canned Tuna","Pasta","Mayonnaise"],
            "recipeName": "Tuna Salad",
            "ingredients": ["Canned tuna","Pasta (e.g., elbow macaroni or penne)","Mayonnaise"],
            "websiteLink": "https://highchairchronicles.com/3-ingredient-tuna-salad/"
        },
        {
            "items": ["Canned Tomato Sauce Sardines", "Bread", "Garlic"],
            "recipeName": "Spicy Sardine Sandwhich",
            "ingredients": ["Canned sardines in tomato sauce","Bread slices","garlic cloves"],
            "websiteLink": "https://www.bbcgoodfood.com/recipes/open-sandwiches-tomato-sardine-rocket"
        },
        {
            "items": ["Milkfish","White Vinegar","Garlic"],
            "recipeName": "Fried Bangus/ milkfish",
            "ingredients": ["1 Bangus or milkfish","1/2 cup white vinegar","4 cloves garlic crushed"],
            "websiteLink": "https://panlasangpinoy.com/fried-bangus-recipe/"
        },
        {
            "items": ["Tilapia Fillet","Butter","Olive Oil"],
            "recipeName": "Pan Seared Tilapia",
            "ingredients": ["4 tilapia fillets (about 6 ounces each)","1 tablespoon butter","1 tablespoon olive oil"],
            "websiteLink": "https://30seconds.com/food/tip/55017/10-Minute-Buttery-Tilapia-Recipe-The-Easiest-3-Ingredient-Fish-Recipe-Ever"
        },
        {
            "items": ["Tilapia Fillet","Butter","String Beans"],
            "recipeName": "Tilapia with String Beans",
            "ingredients": ["1 tilapia","1 tablespoon butter","5 string beans (cut to preference)"],
            "websiteLink": "https://www.foodnetwork.com/recipes/photos/tilapia-recipes"
        },
        {
            "items": ["Flour","Butter","Calamari","Cooking Oil"],
            "recipeName": "Fried Calamari",
            "ingredients": ["1 cup flour","butter","1 pound calamari (cleaned and cut into rings)","oil for frying"],
            "websiteLink": "https://www.closetcooking.com/fried-calamari/"
        },
        {
            "items": ["Bread","Canned Tuna","Cheese"],
            "recipeName": "Tuna Melts",
            "ingredients": ["4 pieces of bread (any kind)","(6 ounce) can canned tuna","8 slices of cheese"],
            "websiteLink": "https://www.food.com/recipe/tuna-melts-134058"
        },
        {
            "items": ["Mussel","Butter","Lemon"],
            "recipeName": "Richard Corrigan's Mussels",
            "ingredients": ["mussels / tahong","butter","lemon"],
            "websiteLink": "https://www.rte.ie/lifestyle/recipes/2011/1004/746445-mussels/"
        },
        {
            "items": ["Shrimp","Bacon","Butter"],
            "recipeName": "Air Fryer Bacon Wrapped Shrimp",
            "ingredients": ["12 oz Medium Cooked Shrimp","16 oz Center-Cut Bacon","butter"],
            "websiteLink": "https://airfryerfanatics.com/air-fryer-bacon-wrapped-shrimp-ninja-foodi/"
        },
            {
        "items": ["Chicken Breasts", "Condensed Cream of Chicken Soup", "Frozen Mixed Veggies"],
        "recipeName": "Slow Cooker Chicken & Dumplings",
        "ingredients": ["4 skinless, boneless chicken breasts", "2 cans of condensed cream of chicken soup", "Bag of frozen mixed veggies (carrots and peas)"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "Chicken Stock", "Salsa Verde"],
        "recipeName": "Crock Pot White Chicken Chili",
        "ingredients": ["2 boneless, skinless chicken breasts", "6 cups chicken stock", "2 cups salsa verde", "2 cans Great Northern beans"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "Alfredo Sauce", "Frozen Broccoli Florets"],
        "recipeName": "Crock Pot Chicken Broccoli Alfredo",
        "ingredients": ["4 boneless, skinless chicken breasts", "2 jars of alfredo sauce", "Bag of frozen broccoli florets", "Sprinkle of shredded parmesan cheese"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "Salsa", "Frozen Corn", "Black Beans"],
        "recipeName": "Slow Cooker Salsa Chicken",
        "ingredients": ["4 boneless, skinless chicken breasts", "Jar of salsa", "Small bag of frozen corn", "Can of black beans"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "Apricot Preserves", "Asian Sesame Salad Dressing", "Dry Onion Soup Mix"],
        "recipeName": "Easy Italian Slow Cooker Creamy Chicken",
        "ingredients": ["4 boneless, skinless chicken breasts", "⅓ cup of apricot preserves", "1 cup of Asian sesame salad dressing", "1 packet dry onion soup mix"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "Salsa", "Ranch Dressing Seasoning Mix", "Taco Seasoning Packet"],
        "recipeName": "Asian Sesame Crockpot Chicken",
        "ingredients": ["2 boneless, skinless chicken breasts", "1 cup of salsa", "Packet of ranch dressing seasoning mix", "1 tbs. taco seasoning packet"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "Salsa", "Ranch Dressing Seasoning Mix", "Taco Seasoning Packet"],
        "recipeName": "Chicken Ranch Tacos in the Slow Cooker",
        "ingredients": ["2 boneless, skinless chicken breasts", "1 cup of salsa", "Packet of ranch dressing seasoning mix", "1 tbs. taco seasoning packet"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "Italian Dressing", "Dried Italian Dressing Seasoning Packet", "Potatoes"],
        "recipeName": "Crock Pot Italian Chicken and Potatoes",
        "ingredients": ["3-4 boneless, skinless chicken breasts", "4 potatoes, cubed", "½ cup Italian dressing", "1 tsp dried Italian dressing seasoning packet"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "BBQ Sauce", "Italian Dressing", "Brown Sugar"],
        "recipeName": "Slow Cooker BBQ Pulled Chicken",
        "ingredients": ["4 boneless, skinless chicken breasts", "Bottle of BBQ sauce", "½ cup Italian dressing", "¼ cup brown sugar"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Chicken Breasts", "Pesto Sauce", "Garlic", "Chicken Broth"],
        "recipeName": "Slow Cooker Garlic Pesto Chicken",
        "ingredients": ["4 boneless, skinless chicken breasts", "1 jar pesto sauce", "2 cloves garlic", "1 cup chicken broth"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Vegetable Stock", "Butternut Pumpkin", "Rice", "Parmesan Cheese"],
        "recipeName": "Pumpkin Risotto",
        "ingredients": ["3 cups vegetable stock", "700 grams butternut pumpkin", "3/4 cup rice", "1/2 cup parmesan cheese"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Mushrooms", "Bell Pepper", "Tofu", "Salsa"],
        "recipeName": "Four Ingredient Scrambled Tofu",
        "ingredients": ["Handful chopped mushrooms", "1/2 bell pepper", "1/2 block medium-firm tofu", "Salsa"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Eggplants", "Olive Oil", "Lime Juice", "Seasoning"],
        "recipeName": "Spicy Grilled Eggplant",
        "ingredients": ["2 small eggplants", "1/4 cup olive oil", "2 tablespoons lime juice", "3 teaspoons seasoning"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Rice Pilaf Mix", "Butter", "Peas", "Mushrooms"],
        "recipeName": "Mushrooms & Peas Rice Pilaf",
        "ingredients": ["1 package rice pilaf mix with toasted almonds", "1 tablespoon butter", "1-1/2 cups fresh or frozen peas", "1 cup sliced baby portobello mushrooms"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Carrots", "Thyme", "Canola Oil", "Honey"],
        "recipeName": "Roasted Carrots with Thyme",
        "ingredients": ["1 pound medium carrots", "2 teaspoons minced fresh thyme or 1/2 teaspoon dried thyme", "2 teaspoons canola oil", "1 teaspoon honey"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Butternut Squash", "Salt", "Butter", "Brown Sugar"],
        "recipeName": "Whipped Squash",
        "ingredients": ["1 butternut squash", "3/4 teaspoon salt", "2 tablespoons butter", "1 tablespoon brown sugar"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Bread", "Butter", "Egg", "Salt and Pepper"],
        "recipeName": "Toad in the Hole",
        "ingredients": ["1 slice of bread", "1 teaspoon butter", "1 large egg", "Salt and pepper to taste"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Green Beans", "Butter", "Minced Fresh Parsley", "Lemon Juice"],
        "recipeName": "Snappy Green Beans",
        "ingredients": ["2 pounds fresh green beans", "2 teaspoons butter", "2 tablespoons minced fresh parsley", "2 teaspoons lemon juice"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Watermelon", "Minced Fresh Mint", "Lemon Juice", "Olive Oil"],
        "recipeName": "Mint Watermelon Salad",
        "ingredients": ["6 cups cubed seedless watermelon", "2 tablespoons minced fresh mint", "1 tablespoon lemon juice", "1 tablespoon olive oil"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Mushrooms", "Minced Garlic", "Seasoned Bread Crumbs", "Butter"],
        "recipeName": "Sauteed Garlic Mushrooms",
        "ingredients": ["3/4 pound sliced fresh mushrooms", "2 to 3 teaspoons minced garlic", "1 tablespoon seasoned bread crumbs", "1/3 cup butter"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Ground Beef", "Cream of Mushroom Soup", "Tater Tots", "Cheddar Cheese"],
        "recipeName": "Tater Tot Casserole",
        "ingredients": ["1 lb ground beef", "1 (10.5 oz.) can of cream of mushroom soup", "1 (28 or 32 oz.) bag frozen tater tots", "2 cups shredded cheddar cheese, divided"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Shell Pasta", "Ground Beef", "Tomato Soup", "Cheddar Cheese"],
        "recipeName": "Hamburger Casserole",
        "ingredients": ["1 lb medium shell pasta", "1 lb ground beef", "2 (10 oz each) cans tomato soup", "1 1/2 cups cheddar cheese, grated"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Ground Beef", "Spaghetti Sauce", "Sausage or Cheese Ravioli", "Mozzarella Cheese"],
        "recipeName": "Ravioli Lasagna",
        "ingredients": ["1 pound ground beef", "1 jar (28 ounces) spaghetti sauce", "1 package (25 ounces) frozen sausage or cheese ravioli", "1-1/2 cups shredded part-skim mozzarella cheese"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Beef Stir-Fry Strips", "Sesame Oil", "BBQ Sauce", "Red Capsicum"],
        "recipeName": "Beef Stir Fry",
        "ingredients": ["500 grams beef stir-fry strips", "3 tablespoons sesame oil", "1 cup BBQ Sauce", "1 large red capsicum sliced"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Ground Meat (Beef or Turkey)", "Vegetable Juice", "Frozen Vegetable Mix", "Italian Seasoning"],
        "recipeName": "Vegetable Beef Soup",
        "ingredients": ["1/2 pound protein: 85% lean ground (beef or turkey) meat OR 1 15 ounce can no salt added kidney beans, drained and rinsed", "1 64 ounce bottle low-sodium vegetable juice", "1 32 ounce package frozen vegetable mix", "1 tablespoon Italian seasoning OR Celebrate Your Plate Italian Seasoning"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Ground Beef", "Grated Zucchini", "Salt", "Pepper"],
        "recipeName": "Beef & Vegetable Meatballs",
        "ingredients": ["1 pound Ground Beef (93% lean or leaner)", "1 cup grated zucchini", "1/2 teaspoon salt", "1/4 teaspoon pepper"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Organic Beef (or any meat type)", "Garlic", "Ground Pepper", "Lemon Juice"],
        "recipeName": "Beef Jerky",
        "ingredients": ["2 lb. organic beef (or any meat type)", "1/4 tsp. Garlic", "1/2 tsp. ground pepper", "1 tsp. Lemon juice"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Beef Rump Roast or Chuck Roast", "Sea Salt", "Coconut Oil", "Bone Broth or Beef Broth"],
        "recipeName": "Shredded Beef",
        "ingredients": ["3-4 lb of beef rump roast or chuck roast", "1 tsp sea salt", "2 tbsp coconut oil", "2 1/2 cups of bone broth or beef broth"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Ground Beef", "Red Kidney Beans", "Jarred Salsa", "Tomato Juice"],
        "recipeName": "Beef Chili",
        "ingredients": ["1 1/2 lbs ground beef", "2 (15 oz cans) red kidney beans", "1 (24 oz jar) ANY brand jarred salsa", "1 cup tomato juice"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Olive Oil", "Boneless Top Round Beef Roast", "Frozen Stew Vegetables", "Slow Cooker Savory Pot Roast Seasoning Mix"],
        "recipeName": "Slow Cooker Beef Shoulder Roast",
        "ingredients": ["2 tablespoons olive oil", "1 (3-pound) boneless top round beef roast", "1 package (16 ounces) frozen stew vegetables", "1 package (1.3 ounces) slow cooker savory pot roast seasoning mix"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Dry Onion Soup Mix", "Pork Chops", "All-Purpose Flour", "Olive Oil for Frying"],
        "recipeName": "Onion Pan-Fried Pork Chops",
        "ingredients": ["1 (1 ounce) envelope dry onion soup mix", "2 pork chops", "1/4 cup all-purpose flour", "1 cup olive oil for frying"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Cooking Spray", "Bulk Pork Sausage", "Cream Cheese", "Refrigerated Crescent Rolls"],
        "recipeName": "Simple Sausage Casserole",
        "ingredients": ["Cooking spray", "1 pound bulk pork sausage", "8 ounces cream cheese (softened)", "2 (8 ounce) cans refrigerated crescent rolls"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Italian-Style Salad Dressing", "Soy Sauce", "Pepper", "Boneless Pork Chops"],
        "recipeName": "Yummy Pork Chops",
        "ingredients": ["2 cups Italian-style salad dressing", "1/4 cup soy sauce", "1/2 teaspoon pepper", "4 boneless pork chops"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Ketchup", "Beer", "Brown Sugar", "Pork Chops"],
        "recipeName": "Pork Chops in Beer",
        "ingredients": ["2 cups ketchup", "1 (12 fluid ounce) can or bottle beer", "3/4 cup packed brown sugar", "8 pork chops"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Boneless Pork Chops", "Cream of Mushroom Soup", "Golden Mushroom Soup", "French Onion Soup"],
        "recipeName": "Oven Baked Mushroom Pork Chops",
        "ingredients": ["2 lbs boneless pork chops", "10.5 oz can cream of mushroom soup", "10.75 oz can golden mushroom soup", "10.75 oz can French onion soup"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Boneless or Bone-In Pork Loin Roast", "Garlic", "Seasoned Salt", "Black Pepper"],
        "recipeName": "Pork Roast",
        "ingredients": ["1 (3- to 5-pound) boneless pork loin roast, or 1 (4- to 5-pound) bone-in pork loin roast", "2 cloves garlic, halved", "1 teaspoon seasoned salt", "Freshly ground black pepper, to taste"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Pork Chops (boneless or bone-in)", "Ranch Seasoning", "Cream of Chicken Soup", "Cream of Mushroom Soup"],
        "recipeName": "Crock Pot Pork Chop",
        "ingredients": ["Pork Chops (boneless or bone-in)", "Ranch Seasoning", "Cream of Chicken Soup", "Cream of Mushroom Soup"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Pork Chops", "Olive Oil", "Soy Sauce", "Italian Seasoning"],
        "recipeName": "Oven Baked Pork Chops",
        "ingredients": ["Pork chops", "Olive oil", "Soy sauce", "Italian seasoning"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
        {
        "items": ["Boned and Rolled Pork Leg", "Olive Oil", "Lemon Juice", "Red Delicious or Pink Lady Apples"],
        "recipeName": "Roast Pork with Apples",
        "ingredients": ["1.5 kg boned and rolled pork leg", "1 tablespoon olive oil", "1 lemon juiced", "6 Red Delicious or Pink Lady apples"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Thick-Cut Boneless Pork Chops", "Italian Salad Dressing", "Brown Sugar", "Dijon Mustard"],
        "recipeName": "Dump-and-Go 4-Ingredient Baked Pork Chops",
        "ingredients": ["4 thick-cut boneless pork chops", "1 cup Italian salad dressing", "1/2 cup brown sugar", "1/2 cup Dijon mustard"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Fish", "Flour", "Eggs", "Breadcrumbs"],
        "recipeName": "Fish Fingers",
        "ingredients": ["Fish", "Flour", "Eggs", "Breadcrumbs"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Broccoli", "Ramen Noodles", "Water-Packed Tuna", "Slices Cheese"],
        "recipeName": "Dorm Room Cheesy Tuna and Noodles",
        "ingredients": ["5 broccoli", "1 (3 ounce) package any flavor ramen noodles", "1 (3 ounce) can water-packed tuna, drained", "2 slices cheese"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Canned Tuna in Water", "Mayonnaise", "Sweet Pickle Relish", "Crackers"],
        "recipeName": "Tuna Salad & Crackers",
        "ingredients": ["6-ounce can tuna in water, drained", "3 Tablespoons mayonnaise", "2 teaspoons sweet pickle relish", "Crackers"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Coconut Milk", "Shrimp", "Garlic", "Pepper Leaves or Green Leafy Vegetable"],
        "recipeName": "Shrimp in Coconut Milk (Ginataang Hipon)",
        "ingredients": ["2 cups coconut milk", "2 pounds shrimp", "3 garlic cloves", "1 cup pepper leaves or any green leafy vegetable in season"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Butter", "White Fish (Tilapia)", "Light Soy Sauce", "Garlic"],
        "recipeName": "White Fish (Tilapia)",
        "ingredients": ["5g butter", "1 white fish (tilapia)", "1 tablespoon light soy sauce", "1 clove garlic"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Filleted Fish", "Flour", "Eggs", "Lime Juice"],
        "recipeName": "Fish Fillet in Batter",
        "ingredients": ["Filleted fish", "Flour", "Eggs", "Lime juice"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Whitefish Fillets", "Olive Oil", "Soy Sauce", "Garlic"],
        "recipeName": "Easy Grilled Whitefish Recipe",
        "ingredients": ["20 oz whitefish fillets", "4 tbsp olive oil, plus more for brushing", "1/2 cup soy sauce", "4 tbsp garlic, minced"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Mussels (Boiled)", "Butter", "White Wine", "Garlic"],
        "recipeName": "Mussels Sauteed in Butter and White Wine",
        "ingredients": ["Mussels - 14 oz (400 g) boiled", "Butter - 2/5 cup (100 g)", "White wine - 3 - 4 tablespoons", "Garlic"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Baby Octopus (Cleaned)", "Sweet Chilli Sauce", "Lemon Juice", "Salt"],
        "recipeName": "Chilli garlic octopus",
        "ingredients": ["1 kilogram baby octopus, cleaned", "1/2 cup (125 millilitres) sweet chilli sauce", "2 tablespoons lemon juice", "4 cloves garlic, crushed"],
        "websiteLink": "https://www.allrecipes.com/recipe/239137/three-ingredient-baked-chicken-breasts/"
    },
    {
        "items": ["Red Jalapeno Pepper Jelly", "Lime Juice", "Salt", "Pepper", "Chicken Drumsticks"],
        "recipeName": "Jalapeno-Lime Chicken Drumsticks",
        "ingredients": ["1 jar (10 ounces) red jalapeno pepper jelly", "1/4 cup lime juice", "1 teaspoon salt", "1/2 teaspoon pepper", "12 chicken drumsticks (about 3 pounds)"],
        "websiteLink": "https://www.tasteofhome.com/recipes/jalapeno-lime-chicken-drumsticks/"
    },
    {
        "items": ["Chicken Wings", "Barbecue Sauce", "Soy Sauce", "Green Onions", "Sesame Seeds"],
        "recipeName": "Slow-Cooker Sticky Chicken Wings",
        "ingredients": ["4 pounds chicken wings", "1 cup barbecue sauce", "1 cup soy sauce", "6 green onions, chopped, divided", "1 tablespoon sesame seeds"],
        "websiteLink": "https://www.tasteofhome.com/recipes/slow-cooker-sticky-chicken-wings"
    },
    {
        "items": ["Chicken Breast Halves", "Salt", "Salsa", "Taco Sauce", "Mexican Cheese Blend"],
        "recipeName": "Baked Salsa Chicken",
        "ingredients": ["2 boneless skinless chicken breast halves (5 ounces each)", "1/8 teaspoon salt", "1/3 cup salsa", "2 tablespoons taco sauce", "1/3 cup shredded Mexican cheese blend"],
        "websiteLink": "https://www.tasteofhome.com/recipes/simple-salsa-chicken/"
    },
    {
        "items": ["Chicken Breast Halves", "Cider Vinegar", "Canola Oil", "Worcestershire Sauce", "Hot Pepper Sauce"],
        "recipeName": "Kentucky Grilled Chicken",
        "ingredients": ["10 bone-in chicken breast halves (10 ounces each)", "1 cup cider vinegar", "1/2 cup canola oil", "5 teaspoons Worcestershire sauce", "4 teaspoons hot pepper sauce"],
        "websiteLink": "https://www.tasteofhome.com/recipes/kentucky-grilled-chicken/"
    },
    {
        "items": ["Chicken Breast Halves", "Creamy Caesar Salad Dressing", "Olive Oil", "Dijon Mustard", "Garlic Cloves"],
        "recipeName": "Grilled Caesar Chicken Breasts",
        "ingredients": ["4 boneless skinless chicken breast halves (6 ounces each)", "1/2 cup creamy Caesar salad dressing", "3 tablespoons olive oil", "3 tablespoons Dijon mustard", "6 garlic cloves, minced"],
        "websiteLink": "https://www.tasteofhome.com/recipes/grilled-caesar-chicken-breasts/"
    },
    {
        "items": ["Chicken Breast Halves", "Sherry or Chicken Broth", "Reduced-Sodium Soy Sauce", "Garlic", "Ground Ginger"],
        "recipeName": "Grilled Teriyaki Chicken",
        "ingredients": ["2 boneless skinless chicken breast halves (6 ounces each)", "1/4 cup sherry or chicken broth", "1/4 cup reduced-sodium soy sauce", "2 garlic cloves, minced", "1/2 teaspoon ground ginger"],
        "websiteLink": "https://www.tasteofhome.com/recipes/grilled-teriyaki-chicken/"
    },
    {
        "items": ["Chicken Leg Quarters", "Tomato Sauce", "Reduced-Sodium Soy Sauce", "Brown Sugar", "Minced Garlic"],
        "recipeName": "Soy-Garlic Chicken",
        "ingredients": ["6 chicken leg quarters, skin removed", "1 can (8 ounces) tomato sauce", "1/2 cup reduced-sodium soy sauce", "1/4 cup packed brown sugar", "2 teaspoons minced garlic"],
        "websiteLink": "https://www.tasteofhome.com/recipes/soy-garlic-chicken/"
    },
    {
        "items": ["Broiler/Fryer Chicken", "Olive Oil", "All-Purpose Flour", "Onion Soup Mix", "Beer or Nonalcoholic Beer"],
        "recipeName": "Savory Onion Chicken",
        "ingredients": ["1 broiler/fryer chicken (3 to 4 pounds), cut up and skin removed", "2 tablespoons olive oil", "1/4 cup all-purpose flour, divided", "1 envelope onion soup mix", "1 bottle (12 ounces) beer or nonalcoholic beer"],
        "websiteLink": "https://www.tasteofhome.com/recipes/savory-onion-chicken/"
    },
    {
        "items": ["Chicken Breast Halves", "Condensed Cream of Chicken Soup", "White Wine or Chicken Broth", "Swiss Cheese", "Seasoned Croutons"],
        "recipeName": "Baked Swiss Chicken",
        "ingredients": ["6 boneless skinless chicken breast halves (6 ounces each)", "1 can (10-3/4 ounces) condensed cream of chicken soup, undiluted", "1/2 cup white wine or chicken broth", "6 slices Swiss cheese", "1 cup crushed seasoned croutons"],
        "websiteLink": "https://www.tasteofhome.com/recipes/baked-swiss-chicken/"
    },
    {
        "items": ["Olive Oil", "Sliced Fajita Vegetables", "No-Salt-Added Black Beans", "Salt-Free Southwest-Style Seasoning Blend", "Salt"],
        "recipeName": "Black Bean Fajita Skillet",
        "ingredients": ["1 tablespoon olive oil", "1 package sliced fajita vegetables (bell peppers and onions)", "1 can no-salt-added black beans, rinsed", "1/2 salt-free Southwest-style seasoning blend", "1/4 teaspoon salt"],
        "websiteLink": "https://www.eatingwell.com/recipe/7886570/black-bean-fajita-skillet/"
    },
    {
        "items": ["Frozen Chopped Kale", "Salt", "Ground Pepper", "Low-Sodium Marinara Sauce or Canned Tomato Sauce", "Large Eggs"],
        "recipeName": "Baked Eggs in Tomato Sauce with Kale",
        "ingredients": ["3 10-ounce packages frozen chopped kale", "1/2 teaspoon salt", "1/4 teaspoon ground pepper", "1 25-ounce jar low-sodium marinara sauce or 3 cups canned low-sodium tomato sauce", "8 large eggs"],
        "websiteLink": "https://www.eatingwell.com/recipe/264141/baked-eggs-in-tomato-sauce-with-kale/"
    },
    {
    "items": ["2 8-ounce packages frozen or refrigerated cheese ravioli", "1 tablespoon olive oil", "1 pint grape tomatoes", "1 5-ounce package baby spinach", "⅓ cup pesto"],
    "recipeName": "Pesto Ravioli with Spinach & Tomatoes",
    "ingredients": ["2 8-ounce packages frozen or refrigerated cheese ravioli", "1 tablespoon olive oil", "1 pint grape tomatoes", "1 5-ounce package baby spinach", "⅓ cup pesto"],
    "websiteLink": "https://www.eatingwell.com/recipe/274007/pesto-ravioli-with-spinach-tomatoes/"
    },
    {
        "items": ["¼ cup slivered oil-packed sun-dried tomatoes", "1 tablespoon oil from the jar", "1 can no-salt-added chickpeas", "1 package chopped kale", "⅓ cup water"],
        "recipeName": "3-Ingredient Chickpeas with Kale & Sun-Dried Tomatoes",
        "ingredients": ["¼ cup slivered oil-packed sun-dried tomatoes", "1 tablespoon oil from the jar", "1 can no-salt-added chickpeas", "1 package chopped kale", "⅓ cup water"],
        "websiteLink": "https://www.eatingwell.com/recipe/7915176/3-ingredient-chickpeas-with-kale-sun-dried-tomatoes/"
    },
    {
        "items": ["1 pound of Brussels sprouts", "2 ounces parmesan cheese", "3 tablespoons olive oil", "2 tablespoons of lemon juice", "2 tablespoons pine nuts or sunflower seeds"],
        "recipeName": "Shaved Brussels Sprouts with Parmesan & Lemon",
        "ingredients": ["1 pound of Brussels sprouts", "2 ounces parmesan cheese", "3 tablespoons olive oil", "2 tablespoons of lemon juice", "2 tablespoons pine nuts or sunflower seeds"],
        "websiteLink": "https://iheartvegetables.com/shaved-brussels-sprouts-parmesan-lemon/"
    },
    {
        "items": ["1 lb green beans, washed and trimmed", "1 tablespoon olive oil", "1/4 cup slivered almonds", "1/2 lemon", "Salt & pepper to taste"],
        "recipeName": "10 Minute Green Beans",
        "ingredients": ["1 lb green beans, washed and trimmed", "1 tablespoon olive oil", "1/4 cup slivered almonds", "1/2 lemon", "Salt & pepper to taste"],
        "websiteLink": "https://iheartvegetables.com/10-minute-green-beans-recipe/"
    },
    {
        "items": ["1 large navel orange segmented with juices reserved", "1 avocado, cut into 1” pieces", "4 cups of mixed greens or spinach", "2 tablespoons olive oil", "2 tablespoons sliced almonds"],
        "recipeName": "Avocado and Orange Salad",
        "ingredients": ["1 large navel orange segmented with juices reserved", "1 avocado, cut into 1” pieces", "4 cups of mixed greens or spinach", "2 tablespoons olive oil", "2 tablespoons sliced almonds"],
        "websiteLink": "https://iheartvegetables.com/avocado-orange-salad/"
    },
    {
        "items": ["Tofu", "Miso Paste", "Maple syrup or Agave Nectar", "Rice vinegar or apple cider vinegar", "Soy sauce"],
        "recipeName": "Miso Tofu",
        "ingredients": ["Tofu", "Miso Paste", "Maple syrup or Agave Nectar", "Rice vinegar or apple cider vinegar", "Soy sauce"],
        "websiteLink": "https://thecheaplazyvegan.com/miso-tofu/"
    },
    {
        "items": ["Tofu", "Teriyaki Sauce", "Oil", "Cornstarch", "Stir Fry Vegetables"],
        "recipeName": "Teriyaki Stir Fry",
        "ingredients": ["Tofu", "Teriyaki Sauce", "Oil", "Cornstarch", "Stir Fry Vegetables"],
        "websiteLink": "https://thecheaplazyvegan.com/teriyaki-tofu-stir-fry/"
    },
    {
        "items": ["Tortillas", "Black beans", "Taco Seasoning or seasoning of choice", "Avocado", "Tomatoes"],
        "recipeName": "Black Bean Breakfast Tacos",
        "ingredients": ["Tortillas", "Black beans", "Taco Seasoning or seasoning of choice", "Avocado", "Tomatoes"],
        "websiteLink": "https://thecheaplazyvegan.com/category/5-ingredient-recipes/page/4/"
    },
    {
        "items": ["1 1/2 pounds lean ground beef or turkey", "1 (15.5-oz.) can original sloppy joe sauce", "1 (15-oz.) can chili with beans", "1/2 (30-oz.) package frozen country-style shredded hash browns (about 4 cups)", "2 cups (8 oz.) shredded Cheddar cheese"],
        "recipeName": "Cheesy Chili Hash Brown Bake Recipe",
        "ingredients": ["1 1/2 pounds lean ground beef or turkey", "1 (15.5-oz.) can original sloppy joe sauce", "1 (15-oz.) can chili with beans", "1/2 (30-oz.) package frozen country-style shredded hash browns (about 4 cups)", "2 cups (8 oz.) shredded Cheddar cheese"],
        "websiteLink": "https://www.southernliving.com/recipes/cheesy-chili-hash-brown-bake-recipe"
    },
    {
        "items": ["1 lb medium shell pasta", "1 lb ground beef", "2 (10 oz each) cans tomato soup", "1 1/2 cups cheddar cheese, grated", "1 1/2 cups mozzarella cheese, grated"],
        "recipeName": "Hamburger Casserole",
        "ingredients": ["1 lb medium shell pasta", "1 lb ground beef", "2 (10 oz each) cans tomato soup", "1 1/2 cups cheddar cheese, grated", "1 1/2 cups mozzarella cheese, grated"],
        "websiteLink": "https://12tomatoes.com/4-ingredient-hamburger-casserole/"
    },
    {
        "items": ["1/2 pound lean ground beef (90% lean)", "1 can (10 ounces) diced tomatoes and green chiles, undrained", "1 can (15 ounces) black beans, rinsed and drained", "1 can (16 ounces) refried beans, warmed", "8 tostada shells"],
        "recipeName": "Black Bean and Beef Tostadas",
        "ingredients": ["1/2 pound lean ground beef (90% lean)", "1 can (10 ounces) diced tomatoes and green chiles, undrained", "1 can (15 ounces) black beans, rinsed and drained", "1 can (16 ounces) refried beans, warmed", "8 tostada shells"],
        "websiteLink": "https://www.tasteofhome.com/recipes/black-bean-and-beef-tostadas/"
    },
    {
        "items": ["1 can (46 ounces) V8 juice", "2 packages (16 ounces each) frozen mixed vegetables", "1 can (10-3/4 ounces) condensed cream of mushroom soup, undiluted", "1 pound ground beef, cooked and drained", "2 teaspoons dried minced onion"],
        "recipeName": "Tomato Hamburger Soup",
        "ingredients": ["1 can (46 ounces) V8 juice", "2 packages (16 ounces each) frozen mixed vegetables", "1 can (10-3/4 ounces) condensed cream of mushroom soup, undiluted", "1 pound ground beef, cooked and drained", "2 teaspoons dried minced onion"],
        "websiteLink": "https://www.tasteofhome.com/recipes/tomato-hamburger-soup/"
    },
    {
        "items": ["300g pkt Coles Kitchen Ramen Noodles", "1 tbsp olive oil", "500g Coles Extra Lean Beef Mince", "250g pkt superfood vegetables stir-fry mix", "125ml (1/2 cup) Coles Asia Teriyaki Sauce"],
        "recipeName": "Teriyaki Beef Noodle Stir-fry",
        "ingredients": ["300g pkt Coles Kitchen Ramen Noodles", "1 tbsp olive oil", "500g Coles Extra Lean Beef Mince", "250g pkt superfood vegetables stir-fry mix", "125ml (1/2 cup) Coles Asia Teriyaki Sauce"],
        "websiteLink": "https://www.taste.com.au/recipes/4-ingredient-teriyaki-beef-noodle-stir-fry-recipe/arg1scmx"
    },
    {
        "items": ["1 pound Ground Beef (93% lean or leaner)", "1/4 cup finely chopped red onion", "4 tablespoons barbecue sauce, divided", "4 slices white Cheddar, pepper Jack, smoked Gouda, or provolone cheese", "4 whole wheat hamburger buns or pretzel rolls, split, toasted"],
        "recipeName": "Zesty Barbecue Cheeseburgers",
        "ingredients": ["1 pound Ground Beef (93% lean or leaner)", "1/4 cup finely chopped red onion", "4 tablespoons barbecue sauce, divided", "4 slices white Cheddar, pepper Jack, smoked Gouda, or provolone cheese", "4 whole wheat hamburger buns or pretzel rolls, split, toasted"],
        "websiteLink": "https://www.beefitswhatsfordinner.com/recipes/recipe/5071/zesty-barbecue-cheeseburgers"
    },
    {
        "items": ["1 boneless beef chuck roast (about 3 pounds)", "1 packet (1 ounce) dry ranch dressing mix", "1 packet (.7 ounces) dry Italian salad dressing mix", "1 packet (.7 ounces) dry Italian salad dressing mix"],
        "recipeName": "Beef Pot Roast",
        "ingredients": ["1 boneless beef chuck roast (about 3 pounds)", "1 packet (1 ounce) dry ranch dressing mix", "1 packet (.7 ounces) dry Italian salad dressing mix", "1 packet (.7 ounces) dry Italian salad dressing mix"],
        "websiteLink": "https://30seconds.com/food/tip/47218/Grandmas-4-Ingredient-Beef-Pot-Roast-Recipe-Has-Stood-the-Test-of-Time"
    },
    {
    "items": ["Casserole Steak", "Cream of Mushroom Soup", "Beef Oxos", "Onion", "Mashed Potato and Veggies"],
    "recipeName": "Beef Casserole",
    "ingredients": ["500gm casserole steak, chopped into 2cm cubes", "1 tin of cream of mushroom soup", "2 beef oxos", "1 large onion, halved and roughly chopped", "Mashed potato and veggies to serve"],
    "websiteLink": "https://mumslounge.com.au/lifestyle/food/4-ingredient-beef-casserole-recipe/"
    },
    {
        "items": ["Lean Ground Beef", "Sliced Mushrooms", "Light Pasta Sauce (Heart Smart)", "Russet Potato, Baked", "Grated Parmesan Cheese"],
        "recipeName": "Meat Sauce Topped Baked Potato",
        "ingredients": ["2 ounces lean ground beef", "⅓ cup sliced mushrooms", "3 tablespoons light pasta sauce, such as Heart Smart", "1 6-ounce russet potato, baked", "1 tablespoon grated Parmesan cheese"],
        "websiteLink": "https://www.eatingwell.com/recipe/259434/marinara-meat-sauce-topped-baked-potato/"
    },
    {
        "items": ["Beef Steak", "Romaine Lettuce", "Shredded Parmesan Cheese", "Hoagie Rolls (6 inches long each), Split, Toasted", "Non-creamy Caesar Dressing"],
        "recipeName": "Caesar Steak Sandwiches",
        "ingredients": ["1 pound beef Top Sirloin Boneless or Top Round Steak, cut 3/4 inch thick or Flank Steak", "2 cups coarsely chopped romaine lettuce", "1/4 cup shredded Parmesan cheese", "4 hoagie rolls (6 inches long each), split, toasted", "1/2 cup prepared non-creamy Caesar dressing"],
        "websiteLink": "https://www.beefitswhatsfordinner.com/recipes/recipe/1406/caesar-steak-sandwiches"
    },
    {
        "items": ["Ketchup", "Honey", "Low-Sodium Soy Sauce", "Garlic", "Pork Chops"],
        "recipeName": "Honey Garlic Pork Chops",
        "ingredients": ["1/2 cup ketchup", "2 2/3 tablespoons honey", "2 tablespoons low-sodium soy sauce", "2 cloves garlic, crushed", "6 (4 ounce) (1-inch thick) pork chops"],
        "websiteLink": "https://www.allrecipes.com/recipe/235158/worlds-best-honey-garlic-pork-chops/"
    },
    {
        "items": ["Potatoes", "Pork Fillet", "Fresh Sage", "Cheddar Cheese", "Prosciutto"],
        "recipeName": "Pork & Mash Gratin",
        "ingredients": ["800 g potatoes", "400 g piece of higher-welfare pork fillet", "2 sprigs of fresh sage", "40 g Cheddar cheese", "4 slices of higher-welfare prosciutto"],
        "websiteLink": "https://www.jamieoliver.com/recipes/pork-recipes/pork-mash-gratin/"
    },
    {
        "items": ["Pork", "Flour", "Sake", "Ginger", "Ginger Sauce"],
        "recipeName": "Ginger Pork (Shogayaki)",
        "ingredients": ["Thinly sliced pork", "Flour", "Sake", "Ginger", "Ginger Sauce"],
        "websiteLink": "https://www.justonecookbook.com/ginger-pork-shogayaki/"
    },
    {
        "items": ["Hoisin Sauce", "Ketchup", "Sriracha Chilli Sauce (or Any Spicy Sauce You Prefer)", "Pork Spare Ribs", "Sea Salt"],
        "recipeName": "Sticky Ribs",
        "ingredients": ["1/2 cup hoisin", "1/2 cup ketchup", "1/2 cup sriracha chilli sauce (or any spicy sauce you prefer)", "1kg (2 lb) rack of pork spare ribs, cut into individual ribs", "Sea salt"],
        "websiteLink": "https://www.marionskitchen.com/4-ingredient-sticky-ribs/"
    },
    {
        "items": ["Kosher Salt", "Black Pepper", "Italian Seasoning", "Rosemary Sprigs (optional)", "Pork Tenderloin"],
        "recipeName": "Roasted Pork Tenderloin",
        "ingredients": ["Kosher salt", "Black pepper", "Italian seasoning", "Rosemary sprigs (optional)", "Pork Tenderloin"],
        "websiteLink": "https://www.iheartnaptime.net/pork-tenderloin/"
    },
    {
        "items": ["Boneless Pork Loin Chops", "Egg", "Bread Crumbs", "Parmesan Cheese", "Lemon Wedges"],
        "recipeName": "Parmesan Crusted Pork Chops",
        "ingredients": ["Boneless pork loin chops", "Egg", "Bread crumbs", "Parmesan cheese", "Lemon wedges"],
        "websiteLink": "https://sweetphi.com/5-ingredient-parmesan-crusted-pork-chops/"
    },
    {
        "items": ["Higher-Welfare Pork Chops", "Garlic", "Fresh Rosemary", "Peach Halves in Juice", "Bourbon"],
        "recipeName": "Peachy Pork Chops",
        "ingredients": ["2 x 250 g higher-welfare pork chops , with rind", "4 cloves of garlic", "2 sprigs of fresh rosemary", "1 x 410 g tin of peach halves in juice", "50 ml bourbon"],
        "websiteLink": "https://www.jamieoliver.com/recipes/pork-recipes/peachy-pork-chops/"
    },
    {
        "items": ["Chicken Stock", "Brown Sugar", "Chili Powder", "Smoked Paprika", "Pork Shoulder Roast"],
        "recipeName": "Pulled Pork",
        "ingredients": ["180 ml (3/4 cup) of chicken stock", "30 ml (2 tbsp) of brown sugar", "15 ml (1 tbsp) of chili powder", "15 ml (1 tbsp) of smoked paprika", "1.5 kg (3 1/3 lb.) of pork shoulder roast, bone-in"],
        "websiteLink": "https://www.5ingredients15minutes.com/en/recipes/main-course/pork/pulled-pork/"
    },
    {
        "items": ["Buttery Rounds Crackers", "Onion Onion™ Seasoning", "Ketchup", "Bayou Bourbon™ Glaze", "Ground Meatloaf Mixture (Beef, Pork)"],
        "recipeName": "National Conference Meatloaf",
        "ingredients": ["1 cup crushed buttery rounds crackers", "5 tablespoons Onion Onion™ Seasoning", "1/4 cup ketchup", "3 tablespoons Bayou Bourbon™ Glaze", "1 1/2 pounds ground meatloaf mixture (beef, pork)"],
        "websiteLink": "https://www.tastefullysimple.com/recipes/2009-national-conference-meatloaf/"
    },
    {
        "items": ["Bone-In Center-Cut Pork Loin Pork Chops", "All-Purpose Flour", "Mango Chutney", "Dijon Mustard", "Fat-Free Low-Sodium Chicken Broth"],
        "recipeName": "Pork Chops with Chutney Sauce",
        "ingredients": ["4 1 1/4 pounds bone-in center-cut pork loin pork chops", "1 tablespoon all-purpose flour", "1/3 cup mango chutney", "1 tablespoon dijon mustard", "1 cup fat-free low-sodium chicken broth"],
        "websiteLink": "https://thehealthycookingblog.com/easy-pork-chops1/"
    },
    {
        "items": ["White Fish Fillets", "Olive Oil", "Butter", "Lemon", "Garlic Paste"],
        "recipeName": "Baked Fish with Lemon Butter Sauce",
        "ingredients": ["2 4-ounce white fish fillets", "1 tablespoon olive oil", "1/3 cup butter", "1 lemon", "1 teaspoon garlic paste"],
        "websiteLink": "https://www.furtherfood.com/recipe/baked-fish-with-lemon-butter-sauce-keto-low-carb-gluten-free-quick-easy-fish-dish/"
    },
    {
        "items": ["Octopus", "White Beans", "Chopped Fresh Parsley", "Extra Virgin Olive Oil", "Lemon Wedges"],
        "recipeName": "Octopus with Beans",
        "ingredients": ["1 (3-4 Pound) Octopus", "1 (14 Ounce) Can White Beans", "Chopped Fresh Parsley", "Extra Virgin Olive Oil", "Lemon Wedges"],
        "websiteLink": "https://www.italianfoodforever.com/2017/05/octopus-with-white-beans/"
    },
    {
        "items": ["Cleaned Mussels", "Butter", "Garlic", "Lemon Juice", "Chopped Parsley"],
        "recipeName": "Mussels with Garlic Stuffing",
        "ingredients": ["4 pints (2.25 litres) cleaned mussels", "4 oz (110 g) butter, at room temperature", "3 cloves garlic, crushed", "1 tablespoon lemon juice", "1 heaped tablespoon chopped parsley"],
        "websiteLink": "https://www.deliaonline.com/recipes/international/european/french/mussels-with-garlic-stuffing"
    },
    {
        "items": ["Shrimp", "Salted Egg", "Garlic", "Onion", "Butter"],
        "recipeName": "Salted Egg Shrimp",
        "ingredients": ["Shrimp", "Salted Egg", "Garlic", "Onion", "Butter"],
        "websiteLink": "https://www.kawalingpinoy.com/salted-egg-shrimp/"
    },
    {
        "items": ["Shrimp", "Mussel", "Pasta", "Pasta Sauce", "Garlic"],
        "recipeName": "Seafood Pasta",
        "ingredients": ["Shrimp", "Mussel", "Pasta", "Pasta Sauce", "Garlic"],
        "websiteLink": "https://tastesbetterfromscratch.com/seafood-pasta/"
    },
    {
        "items": ["Fresh Tuna", "Prawns", "Onions", "Tomatoes", "Calamansi Juice"],
        "recipeName": "Seafood Kebab",
        "ingredients": ["1/2 kilo fresh tuna cut into big cubes", "1/2 kilo prawns shelled and deveined", "3 large onions quartered", "3 large tomatoes quartered", "Juice of 1 lemon or juice of 5 pcs calamansi juice"],
        "websiteLink": "https://www.panlasangpinoymeatrecipes.com/seafood-kebab.htm"
    },
    {
        "items": ["Shrimp", "Squid", "Mussel", "Spring Onions", "Soy Sauce"],
        "recipeName": "Mixed Seafood Stir",
        "ingredients": ["Shrimp", "Squid", "Mussel", "Spring Onions", "Soy Sauce"],
        "websiteLink": "https://www.etfoodvoyage.com/ginger-garlic-seafood-stir-fry/"
    },
    {
        "items": ["All-Purpose Flour", "Evaporated Milk", "Light Tuna in Water", "Green Onion", "Dry Bread Crumbs"],
        "recipeName": "Comforting Tuna Patties",
        "ingredients": ["3 tablespoons all-purpose flour", "1 cup evaporated milk", "1 pouch (6.4 ounces) light tuna in water", "1 green onion, finely chopped", "1/3 cup plus 1/2 cup dry bread crumbs, divided"],
        "websiteLink": "https://www.tasteofhome.com/recipes/comforting-tuna-patties/"
    },
    {
        "items": ["Rice", "Pineapple", "Lime", "Vegetables", "Shrimp"],
        "recipeName": "Thai Pineapple Fried Rice",
        "ingredients": ["Rice", "Pineapple", "Lime", "Vegetables", "Shrimp"],
        "websiteLink": "https://shelfcooking.com/pineapple-rice/"
    },
    {
        "items": ["Rice", "Pineapple", "Lime", "Vegetables", "Shrimp"],
        "recipeName": "Thai Pineapple Fried Rice",
        "ingredients": ["Rice", "Pineapple", "Lime", "Vegetables", "Shrimp"],
        "websiteLink": "https://shelfcooking.com/pineapple-rice/"
    },
    {
        "items": ["Tuna", "Pasta", "Pasta Sauce", "Garlic", "Tomato"],
        "recipeName": "Tuna Pasta",
        "ingredients": ["Tuna", "Pasta", "Pasta Sauce", "Garlic", "Tomato"],
        "websiteLink": "https://feelgoodfoodie.net/recipe/tuna-pasta/"
    }
       
],
};

if (currentPathname.endsWith('finder.html')) {
  function createCategoryContainers(data) {
    const contentBlock = document.querySelector('.content-block');
  
    data.foodCategories.forEach(category => {
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
  
      const categoryHeading = document.createElement('h2');
      categoryHeading.classList.add('category');
      categoryHeading.textContent = category.categoryName;
  
      categoryContainer.appendChild(categoryHeading);
  
      const line = document.createElement('hr');
      categoryContainer.appendChild(line);
  
      category.items.forEach(ingredientName => {
        const ingredientButton = document.createElement('button');
        ingredientButton.classList.add('ingredient');
        ingredientButton.textContent = ingredientName;
        ingredientButton.addEventListener('click', function () {
          toggleIngredientSelection(this);
        });
  
        categoryContainer.appendChild(ingredientButton);
  
      });
  
  
      contentBlock.appendChild(categoryContainer);
    });
  }
  
  
    createCategoryContainers(data);
  
    function toggleIngredientSelection(button) {
        const ingredient = button.textContent;
  
        if (selectedIngredients.includes(ingredient)) {
            selectedIngredients.splice(selectedIngredients.indexOf(ingredient), 1);
            button.classList.remove('selected');
            button.style.backgroundColor = '';
            button.style.color = 'black';
        } else {
            selectedIngredients.push(ingredient);
            button.classList.add('selected');
            button.style.backgroundColor = '#BFE199';
            button.style.color = 'white';
        }
    }
  
    
  
    function clearAllSelections() {
        selectedIngredients.forEach((ingredient) => {
            const buttons = document.querySelectorAll('.ingredient');
            buttons.forEach((button) => {
                if (button.textContent === ingredient) {
                    button.classList.remove('selected');
                }
            });
        });
        selectedIngredients.length = 0;
    }
  
    function findRecipes() {
      const exactMatches = [];
      const similarMatches = [];
  
      data.recipeList.forEach(recipe => {
        const recipeIngredients = recipe.items;
    
        const exactMatch = selectedIngredients.every(ingredient => recipeIngredients.includes(ingredient));
    
        if (exactMatch) {
          exactMatches.push(recipe);
        } else {
          const commonIngredients = selectedIngredients.filter(ingredient => recipeIngredients.includes(ingredient));
    
          if (commonIngredients.length > 0) {
            similarMatches.push({
              recipe,
              commonIngredients,
            });
          }
        }
      });
  
      localStorage.setItem('exactMatches', JSON.stringify(exactMatches));
      localStorage.setItem('similarMatches', JSON.stringify(similarMatches));
    }
  
    
    
  
    const clearAllButton = document.querySelector('.clear-all');
    clearAllButton.addEventListener('click', function () {
        clearAllSelections();
    });
  
    const findRecipeButton = document.getElementById('find');
    findRecipeButton.addEventListener('click', function (e) {
        if (selectedIngredients.length === 0) {
            e.preventDefault();
            alert('Please select ingredients before searching for recipes.');
        } else {
            localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));
            findRecipes();
        }
    });
}



  const exactMatches = JSON.parse(localStorage.getItem('exactMatches'));
  const similarMatches = JSON.parse(localStorage.getItem('similarMatches'));
  const selected = JSON.parse(localStorage.getItem('selectedIngredients'));
  
  function displaySelectedIngredients() {
    const chosenIngredientsContainer = document.querySelector('.chosen');
  
    selected.forEach((ingredient) => {
      const chosenIngredient = document.createElement('h1');
      chosenIngredient.classList.add('chosen-ingr');
      chosenIngredient.textContent = ingredient;
      chosenIngredientsContainer.appendChild(chosenIngredient);
    });
  }
  
  function displayRecipes() {
    displaySelectedIngredients();
  
    const recipeBlock = document.querySelector('.recipe-block');
  
    const exactMatchesContainer = document.createElement('div');
    exactMatchesContainer.classList.add('recipe');
  
    const exactMatchesHeading = document.createElement('h2');
    exactMatchesHeading.textContent = 'Exact Matches';
    exactMatchesContainer.appendChild(exactMatchesHeading);

    
  
    exactMatches.forEach((recipe) => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
  
      const recipeName = document.createElement('h1');
      recipeName.textContent = recipe.recipeName;
      recipeCard.appendChild(recipeName);
  
      const ingredientsList = document.createElement('h2');
      ingredientsList.textContent = 'Ingredients:';
      recipeCard.appendChild(ingredientsList);
  
      recipe.ingredients.forEach((ingredient, index) => {
        const ingredientItem = document.createElement('h3');
        ingredientItem.textContent = `${ingredient}`;
        recipeCard.appendChild(ingredientItem);
      });
  
      const websiteLink = document.createElement('a');
      websiteLink.textContent = 'Recipe Link';
      websiteLink.href = recipe.websiteLink;
      recipeCard.appendChild(websiteLink);
  
      exactMatchesContainer.appendChild(recipeCard);
    });
  
    recipeBlock.appendChild(exactMatchesContainer);
  
    const similarMatchesContainer = document.createElement('div');
    similarMatchesContainer.classList.add('reco');
  
    const similarMatchesHeading = document.createElement('h2');
    similarMatchesHeading.textContent = 'Similar Matches';
    similarMatchesContainer.appendChild(similarMatchesHeading);
  
    similarMatches.forEach((match) => {
      const recipe = match.recipe;
      const commonIngredients = match.commonIngredients;
  
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
  
      const recipeName = document.createElement('h1');
      recipeName.textContent = recipe.recipeName;
      recipeCard.appendChild(recipeName);
  
      const ingredientsList = document.createElement('h2');
      ingredientsList.textContent = 'Ingredients:';
      recipeCard.appendChild(ingredientsList);
  
      recipe.ingredients.forEach((ingredient, index) => {
        const ingredientItem = document.createElement('h3');
        ingredientItem.textContent = `${ingredient}`;
        recipeCard.appendChild(ingredientItem);
      });
  
      const websiteLink = document.createElement('a');
      websiteLink.textContent = 'Recipe Link';
      websiteLink.href = recipe.websiteLink;
      recipeCard.appendChild(websiteLink);
  
      similarMatchesContainer.appendChild(recipeCard);
    });
  
    recipeBlock.appendChild(similarMatchesContainer);
  }

  

  if (currentPathname.endsWith('finder1.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const findParam = urlParams.get('find');
    if (findParam === "true") {
      console.log("findParam is true in finder1.html. Running displayRecipes()");
      displayRecipes();
    } else {
      console.log("findParam is not true in finder1.html. Not running displayRecipes()");
    }
  }

  const menuIcon = document.getElementById("menu-icon");
  const navItems = document.querySelectorAll("nav ul li");

    menuIcon.addEventListener("click", function () {
      navItems.forEach((item) => {
        if (item.style.display === "none") {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });

  });
