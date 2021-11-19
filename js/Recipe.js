class Recipe
{
    constructor(recipe)
    {
        this.name= recipe.name;
        this.id= recipe.id;
        this.servings= recipe.servings;
        this.ingredients= recipe.ingredients;
        this.time= recipe.time;
        this.description= recipe.description;
        this.appliance= recipe.appliance;
        this.ustensils= recipe.ustensils;
    }

    
    //-- Contenu HTML des recettes 
    render()
    {
        return `<article class="articleRecipes" data-filter="${this.ingredients.map(element => (element.ingredient)) + this.ustensils + this.appliance}">
                    <img src="img/fondgris.svg" alt="image sur fond gris">
                    <div class="recipeTitle">
                        <h2 class="recipeName">${this.name}</h2>
                        <span class="recipeDuration">
                            <i class="far fa-clock"></i>${this.time}min
                        </span>
                    </div>
                    <div class="recipeInfo">
                        <div class="recipeIngredients">
                        ${this.renderIngredients()}
                        </div>
                        <div class="recipeInstructions">
                            <span>${this.description}</span>
                        </div>
                    </div>
                </article>`
    }

    
    //-- Contenu HTML des recettes 
    renderIngredients()
    {
        let html = '';
        this.ingredients.forEach((ingr) => 
        {
            html += `<li id="ingredient"><span class="ingr-name">${ingr.ingredient}</span>`;
            if(ingr.hasOwnProperty('quantity') || ingr.hasOwnProperty('unit')) 
            {
                html += ' : ';
            }

            if(ingr.hasOwnProperty('quantity')) 
            {
                html += ingr.quantity;
            } 

            if(ingr.hasOwnProperty('unit')) 
            {
                html += ` ${ingr.unit}`;
            }
            html += '</li>'
        });
        return html;
    }
}


