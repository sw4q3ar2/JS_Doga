import MegjelenitSor from "./MegjelenitSor.js";

class Megjelenit{
    #list = [];
    constructor(list, szuloELEM){
        this.#list = list; 
        szuloELEM.append('<table class="table table-bordered table-striped">')
        this.tablaElem = szuloELEM.children("table");
        console.log(this.tablaElem);
        this.tablazatbaIr();
    }

    tablazatbaIr(){
        this.#list.forEach((elem) => {
            new MegjelenitSor(elem,this.tablaElem);

            $(window).on("kesz", function(event){
                console.log(event.detail);
            });
        });
    }
    
}

export default Megjelenit;