class List
{
    constructor()
    {
        this.all = [];
        this.filters = [];
        this.filterSelected = [];
        this.searchValue = '';
        this.selected = [];
        
    }
    
    //-- Ajoute recettes
    add(recipe)
    {
        this.all.push(recipe)
    }
    

    //-- Ajoute filtres
    addFilter(filter)
    {
        this.filters.push(filter);
        filter.collect();
        //this.filterSelected = filter.collect(list.all);  // passe une première fois 
        filter.buildDropdown();
        filter.listenToDropdown();
        filter.listenForInputSearch();
        filter.listenForFilterTags();
        
    }

    /*build() // reprend les actions multiples
    {
        list.display();

        this.filters.forEach(filter => {

            filter.filterSelected = filter.collect(this.filterSelected)
            filter.display(filter.filterSelected)
            filter.listenToDropdown();
            filter.listenForInputSearch();
            filter.listenForFilterTags();

        })
    }*/

    //-- Affiche recettes
    display(recipes)
    {
        document.getElementById('recipes').innerHTML = "";
        recipes.forEach(recipe =>
        {
            document.getElementById('recipes').innerHTML += recipe.render();
        })        
    }

    //-- Introduit les données
    hydrate(recipes)
    {
        recipes.forEach((item) => {
            let recipe = new Recipe(item);
            this.all.push(recipe);
        })
    }



    
    
    
    

    

    



    

    
    
}

    
    
    
    
   

    


    


