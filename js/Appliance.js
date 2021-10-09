class FilterByAppliance
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
        let html = '<ul class="listUlApp">';
        this.all.forEach((appliance)=>
        {
            html += `<li class="list-appareil" data-filter="${appliance}">${appliance}</li>`
        })

        html += '</ul>'
        
        document.getElementById('appareilExample').innerHTML = html; 
    }


    //-- Récupère la collecte de données appareils
    collect()
    {
        recipes.forEach(recipe => {
            this.all.add(recipe.appliance);
        });

    }

    //-- Dropdown Input: Recherche
    filterByInput()
    {
        let tags = document.querySelectorAll(".list-appareil");

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
        document.getElementById("inputAppareil").addEventListener("input", (e) => {
            filter.searchValue = e.target.value;
            filter.filterByInput();
            
        })
    }

    //-- Dropdown: ouverture/fermeture
    listenToDropdown()
    {
        document.getElementById('closeAppareilFilter').addEventListener('click', ()  => {
            document.getElementById('current_filter_app').style.width = "11rem";             
            document.getElementById('hiddenAppareilFilter').style.display = "none";  
        })
    
        document.getElementById('openAppareilFilter').addEventListener('click', ()  => {
            document.getElementById('current_filter_app').style.width = "25rem";             
            document.getElementById('hiddenAppareilFilter').style.display = "block";
            
        })
    }



    
    

}