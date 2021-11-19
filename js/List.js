class List
{
    constructor()
    {
        this.all = [];
        this.filtered = [];
        this.filters = [];
        this.searchValue = '';
        this.selected = [];
    }
    
    //-- Ajoute recettes
    add(recipe)
    {
        this.all.push(recipe)
    }
    
    //-- Ajoute filtres // pour une seule action
    addFilter(filter)
    {
        this.filters.push(filter);
        filter.listenToDropdown();
        filter.listenForInputSearch();
        filter.all = filter.collect(this.all);  // passe une première fois 
        filter.filtered = filter.all;
        filter.build();
        
    }

    build(recipes) // repasse les actions multiples
    //quand la liste se reconstruit 
    { 
        list.display(recipes);

        //ici que la boucle est utile
        this.filters.forEach(filter => 
        {
            filter.filtered = filter.collect(recipes);
            filter.build(recipes);
        })
    }
    

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
        recipes.forEach((item) => 
        {
            let recipe = new Recipe(item);
            this.all.push(recipe);
        })
        this.filtered = this.all;
    }

    


    
    
    
    

    

    



    

    
    
}

    
    
    
    
   

    


    


