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
        this.terms = new Set();
        this.buildTerms();   
    }

    buildTerms()
    {
        // recherche par termes
        this.name.split(' ').forEach(word => 
        {
            if(this.isWordValid(word))
            {
                this.terms.add(word);
            }
        })

        // recherche par description
        this.description.split(' ').forEach(word => 
        {
            if(this.isWordValid(word))
            {
                this.terms.add(word);
            }
        })

        // recherche par appliance
        this.appliance.split(' ').forEach(word => 
        {
            if(this.isWordValid(word))
            {
                this.terms.add(word);
            }
        })

        //terme recherché dans ustensils
        this.ustensils.forEach(ustensil =>
        {
            ustensil.split(' ').forEach(word => 
            {
                if(this.isWordValid(word))
                {
                    this.terms.add(word);
                }
            })
        })
        
        //terme recherché par ingredients
        this.ingredients.forEach(item=>
        {
            item.ingredient.split(' ').forEach(word => 
            {
                if(this.isWordValid(word))
                {
                    this.terms.add(word);
                }
            })
        })
    }

    isWordValid(word)
    {
       const forbidenWords = [
        "abord","afin","ainsi","allaient","allo","allô","allons","après","assez","attendu",
        "aucun","aucune","aujourd","aujourd'hui","auquel","aura","auront","aussi","autre","autres",
        "aux","auxquelles","auxquels","avaient","avais","avait","avant","avec","avoir","ayant",
        "bah","beaucoup","bien","bigre","boum","bravo","brrr","ça","car","ceci","cela",
        "celle","celle-ci","celle-là","celles","celles-ci","celles-là","celui","celui-ci",
        "celui-là","cent","cependant","certain","certaine","certaines","certains","certes",
        "ces","cet","cette","ceux","ceux-ci","ceux-là","chacun","chaque","cher","chère",
        "chères","chers","chez","chiche","chut","cinq","cinquantaine","cinquante","cinquantième",
        "cinquième","clac","clic","combien","comme","comment","compris","concernant","contre",
        "couic","crac","dans","debout","dedans","dehors","delà","depuis","derrière","des",
        "dès","désormais","desquelles","desquels","dessous","dessus","deux","deuxième","deuxièmement",
        "devant","devers","devra","différent","différente","différentes","différents","dire","divers",
        "diverse","diverses","dix","dix-huit","dixième","dix-neuf","dix-sept","doit","doivent","donc",
        "dont","douze","douzième","dring","duquel","durant","effet","elle","elle-même","elles",
        "elles-mêmes","encore","entre","envers","environ","est","etant","étaient","étais",
        "était","étant","etc","été","etre","être","euh","eux","eux-mêmes","excepté","façon","fais",
        "faisaient","faisant","fait","feront","flac","floc","font","gens","hein","hélas","hem",
        "hep","holà","hop","hormis","hors","hou","houp","hue","hui","huit","huitième","hum",
        "hurrah","ils","importe","jusqu","jusque","laquelle","las","lequel","les","lès","lesquelles",
        "lesquels","leur","leurs","longtemps","lorsque","lui","lui-même","maint","mais","malgré","même",
        "mêmes","merci","mes","mien","mienne","miennes","miens","mille","mince","moi","moi-même","moins",
        "mon","moyennant","néanmoins","neuf","neuvième","nombreuses","nombreux","non","nos","notre","nôtre",
        "nôtres","nous","nous-mêmes","nul","ohé","olé","ollé","ont","onze","onzième","ore","ouf","ouias",
        "oust","ouste","outre","paf","pan","par","parmi","partant","particulier","particulière","particulièrement",
        "pas","passé","pendant","personne","peu","peut","peuvent","peux","pff","pfft","pfut","pif","plein","plouf",
        "plus","plusieurs","plutôt","pouah","pour","pourquoi","premier","première","premièrement","près","proche",
        "psitt","puisque","quand","quant","quanta","quant-à-soi","quarante","quatorze","quatre","quatre-vingt","quatrième",
        "quatrièmement","que","quel","quelconque","quelle","quelles","quelque","quelques","quelqu'un","quels","qui",
        "quiconque","quinze","quoi","quoique","revoici","revoilà","rien","sacrebleu","sans","sapristi","sauf","seize",
        "selon","sept","septième","sera","seront","ses","sien","sienne","siennes","siens","sinon","six","sixième","soi","soi-même","soit",
        "soixante","son","sont","sous","stop","suis", "suivant","sur","surtout","tac","tant","tel","telle","tellement","telles","tels",
        "tenant","tes","tic","tien","tienne","tiennes","tiens","toc","toi","toi-même","ton","touchant","toujours","tous","tout","toute",
        "toutes","treize","trente","très","trois","troisième","troisièmement","trop","tsoin","tsouin","une","unes","uns","vais","vas","vers",
        "via","vif","vifs","vingt","vivat","vive","vives","vlan","voici","voilà","vont","vos","votre","vôtre","vôtres","vous","vous-mêmes","zut",
        "alors","aucuns","bon","devrait","dos","droite","début","essai","faites","fois","force","haut","ici","juste","maintenant","mine",
        "mot","nommés","nouveaux","parce","parole","personnes","pièce","plupart","seulement","soyez","sujet","tandis","valeur","voie",
        "voient","état","étions", 'de', 'au', 'à', 'la','et',
       ];
        
        if(forbidenWords.includes(word))
        {
            return false
        }
        return true
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
        this.ingredients.forEach((ingr) => {
            html += `<li id="ingredient"><span class="ingr-name">${ingr.ingredient}</span>`;

            if (ingr.hasOwnProperty('quantity') || ingr.hasOwnProperty('unit')) 
            {
                html += ' : ';
            }

            if (ingr.hasOwnProperty('quantity')) 
            {
                html += ingr.quantity;
            } 

            if (ingr.hasOwnProperty('unit')) 
            {
                html += ` ${ingr.unit}`;
            }
            html += '</li>'
        });
        return html;
    }
}


