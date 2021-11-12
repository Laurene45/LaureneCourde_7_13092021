class FilterByIngredient extends Filters
{
    constructor()
    {
        super('ingredients');
             
    }
    
    //-- Récupère la collecte de données ingredients
    collect(recipes)
    {
        let list = new Set();

        recipes.forEach(recipe => {
            recipe.ingredients.forEach(item => {
                list.add(item.ingredient.toLowerCase());
            })
        });

        return list;

    }

    
    //-- Filtre : ingredients dans les recettes avec l'ingredient sélectionné dropdown
    filter(recipes)
    {
        if (this.selected.size === 0) {
            return recipes;
        }

        return recipes.filter(recipe => {
            let isSelectable = false;
            let count = 0;

            this.selected.forEach(ing => {
                let existingIngredients = recipe.ingredients.map(item => item.ingredient.toLowerCase());
                if (existingIngredients.includes(ing)) {
                    count++
                }  
            })

            if (count == this.selected.size) {
                isSelectable = true;
            }

            return isSelectable;
        })
    }
    
    
    

}
