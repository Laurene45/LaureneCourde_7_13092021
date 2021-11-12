class Search 
{
    constructor(recipes)
    {
        this.searchValue = '';
        this.renderMessage();

    }

    listen()
    {
        document.getElementById('searchBar').addEventListener('input', (e) => {
            this.searchValue = e.target.value.toLowerCase();
            if(this.searchValue.length <= 2)
            {
                this.showMessage();
            }
            else if (this.searchValue.length >= 3) 
            {
                this.hideMessage()
                this.search();

            } else {
                list.build(list.filtered); 
            }
            
                 
        })
    }

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

    search()
    {
        let items = [];
        list.filtered.forEach(recipe => {

            //terme recherché dans le titre
            if(recipe.name.toLowerCase().indexOf(this.searchValue) >= 0)
            {
                items.push(recipe);
                return; 
            }

            //terme recherché dans ustensils
            recipe.ustensils.forEach(ustensil => {
               if(ustensil.indexOf(this.searchValue) >= 0)
                {
                    items.push(recipe);
                    return;
                }
            })

            //terme recherché dans appliance
            if(recipe.appliance.toLowerCase().indexOf(this.searchValue) >= 0)
            {
                items.push(recipe);
                return; 
            }
            
            //terme recherché dans description
            if(recipe.description.indexOf(this.searchValue) >= 0)
            {
                items.push(recipe);
                return; 
            }
         
            // terme recherché dans ingrédients
            recipe.ingredients.forEach(ingredient => {
                
                if(ingredient.ingredient.indexOf(this.searchValue) >= 0)
                 {
                     items.push(recipe);
                     return;
                 }
             })
        })
        list.build(items);
    }


    // affichage du message
    hideMessage()
    {
        
        document.getElementById('message').style.display = 'none';
        document.getElementById('recipes').style.display = 'flex';

    }

    showMessage()
    {
        document.getElementById('message').style.display = 'flex';
        document.getElementById('recipes').style.display = 'none';


    }


}