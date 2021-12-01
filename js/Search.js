class Search 
{
    constructor(recipes)
    {
        this.searchValue = '';
        this.renderMessage();
    }

    //-- Message disparaît
    hideMessage()
    {
        document.getElementById('message').style.display = 'none';
        document.getElementById('recipes').style.display = 'flex';
    }

    //-- Listener sur la recherche Input
    listen()
    {
        document.getElementById('searchBar').addEventListener('input', (e) => 
        {
            list.filtered = list.all;
            this.searchValue = e.target.value.toLowerCase();

            if(this.searchValue.length >= 3) 
            {
                this.hideMessage()
                list.filtered = this.search();
            } 

            list.build(list.filtered)

            if(list.filtered.length === 0)
            {
                this.showMessage();
            }

            if(this.searchValue == '')
            {
                list.filtered = list.all;
                this.hideMessage();
            } 
        });
    }

    
    //-- validation de la recette
    recipeIsValid(recipe)
    {
        //terme recherché dans le titre
        if(recipe.name.toLowerCase().indexOf(this.searchValue) >= 0)
        {
            return true;
        }
        
        //terme recherché dans ustensils
        recipe.ustensils.forEach(ustensil => {
            if(ustensil.toLowerCase().indexOf(this.searchValue) >= 0)
            {
                return true;
            }
        })
        
        //terme recherché dans appareil
        if(recipe.appliance.toLowerCase().indexOf(this.searchValue) >= 0)
        {
            return true;
        }
        
        //terme recherché dans description
        if(recipe.description.toLowerCase().indexOf(this.searchValue) >= 0)
        {
            return true;
        }
        
        // terme recherché dans ingrédients
        for(let i=0; i < recipe.ingredients.lenght; i++)
        {
            let ingredient = recipe.ingredients[i].ingredient;
            
            if(ingredient.ingredient.toLowerCase().indexOf(this.searchValue) >= 0)
            {
                return true;
            }
        }
        
        return false
    }
    

    //-- Construction du Message Html
    renderMessage()
    {
        document.getElementById('message').innerHTML +=
        `
            <h2>Aucune recette ne correspond à votre critère...</h2>
            <p>Vous pouvez chercher d'autres mots-clés comme «<span>tarte aux pommes</span>», «<span>poisson</span>», <br />ou découvrez de nouvelles recettes à l'aide de nos
                <span>filtres de recherche</span>.
            </p>
            <img src="img/sad.jpg" alt="Enfant triste à table qui ne veut pas manger ses légumes.">
        `
    }


    //-- Paramètre de la recherche par chaîne de caractères
    search()
    {
        console.time("monTimer1"); // timer début performance
        
        let items = [];
        list.filtered.forEach(recipe => 
        {
            if(this.recipeIsValid(recipe))
            {
                items.push(recipe)
            }
        })

        console.timeEnd("monTimer1"); // timer fin performance
        return items;
    }
    

    //-- Message s'affiche
    showMessage()
    {
        document.getElementById('message').style.display = 'flex';
        document.getElementById('recipes').style.display = 'none';
    }
}