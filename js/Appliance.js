class FilterByAppliance extends Filters
{
    constructor()
    {
        super('appliance');
    }

    //-- Récupère la collecte de données appareil
    collect(recipes)
    {
        let list = new Set();
        recipes.forEach(recipe => {
            list.add(recipe.appliance.toLowerCase());
        });
        return list;
    }
    

    //-- Filtre : appareils dans les recettes avec l'appareil sélectionné dropdown
    filter(recipes)
    {
        if(this.selected.size === 0) {
            return recipes;
        }
        return recipes.filter(recipe => {
            return !!this.selected.has(recipe.appliance.toLowerCase());
        })
    
    }
    
    
    

}
