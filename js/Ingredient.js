class FilterByIngredient
{
    constructor()
    {
        this.all = new Set();
        this.filtered = new Set();
        this.selected = new Set();
        this.searchValue = '';

    }

    //-- Affiche HTML : Dropdown ingredients
    buildDropdown() 
    {
        let html = '<ul class="listUlIng">';
        this.all.forEach((ingredient)=>
        {
            html += `<li class="list-ingredients" data-filter="${ingredient}">${ingredient}</li>`
        })

        html += '</ul>'
        
        document.getElementById('ingredientsExample').innerHTML = html; 
       
    }

    


    //-- Récupère la collecte de données ingredients
    collect()
    {
        /*let list = new Set();

        recipes.forEach(recipe => {
            recipe.ingredients.forEach(item => {
                list.add(item.ingredient);
            })
        });

        return list;*/
        
        recipes.forEach(recipe => {
            recipe.ingredients.forEach(item => {
                this.all.add(item.ingredient);
            })
        });
    }
    
    //-- Dropdown Input: Recherche
    filterByInput()
    {
        let tags = document.querySelectorAll(".list-ingredients");

        tags.forEach((tag) => {
            let name = tag.getAttribute("data-filter");
      
            if (!name.toLowerCase().includes(this.searchValue.toLowerCase())) {
                tag.style.display = "none";
            } else {
                tag.style.display = "block";
            }
        })
        
    }
    
    //-- Dropdown Input: Recherche
    listenForInputSearch() 
    {
        document.getElementById("inputIngredients").addEventListener("input", (e) => {
            this.searchValue = e.target.value;
            this.filterByInput();
        })
    }
    
    

    //-- Dropdown: ouverture/fermeture
    listenToDropdown()
    {
        document.getElementById('closeIngredientsFilter').addEventListener('click', () => {
            document.getElementById('current_filter').style.width = "11rem";             
            document.getElementById('hiddenIngredientsFilter').style.display = "none"; 
        });
        
        document.getElementById('openIngredientsFilter').addEventListener('click', () => {
            document.getElementById('current_filter').style.width = "25rem";           
            document.getElementById('hiddenIngredientsFilter').style.display = "block"; 
               
        })
    }

    //-- listener Tags    /// arreter ici et voir pour le this.type
    listenForFilterTags()
    {
        document.querySelectorAll('.list-ingredients').forEach(tag =>
            {
                tag.addEventListener('click', (e) =>
                {
                    let tag = e.target.getAttribute('data-filter');
                    this.selected.add(tag);
                    this.displayTags();
                    
                    let listFiltered = this.filter(list.all);
                    list.display(listFiltered);

                })
            })

    }
    

    //--TAGS
    // affiche les tags sélectionnés
    displayTags()
    {
        let html = '';

        this.selected.forEach(ingredient => {

            html += `<span class="selected-tag tag" data-filter="${ingredient}">${ingredient}
                        <i class="far fa-times-circle" id='close' role="button"></i>
                    </span>
                    `;

        })
        document.getElementById(`tag`).innerHTML = html;

    }
       
    
    //-- Filtre ingredients dans les recettes avec l'ingredient sélectionné dropdown
    filter(recipes)
    {
        if (this.selected.size === 0) {
            return recipes;
        }

        return recipes.filter(recipe => {
            let isSelectable = false;
            let count = 0;

            this.selected.forEach(ing => {
                let existingIngredients = recipe.ingredients.map(item => item.ingredient);
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
