let list = new List();

list.hydrate(recipes); // introduit les données
list.display(list.all); // affichage de la liste

let ingredientFilter = new FilterByIngredient();
let applianceFilter = new FilterByAppliance();
let ustensilFilter = new FilterByUstensils();

list.addFilter(ingredientFilter); // ajoute le filtre ingredients
list.addFilter(applianceFilter); // ajoute le filtre appliance
list.addFilter(ustensilFilter); // ajoute le filtre ustensils

list.search = new Search();
list.search.listen();
