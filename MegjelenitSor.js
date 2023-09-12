class MegjelenitSor{
    #obj = {};

    constructor(obj, szuloelem){
        this.#obj = obj;
        this.szuloELEM = szuloelem;
        this.#sor();

        this.sorElem = this.szuloELEM.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.megseElem = this.sorElem.children("td").children(".megse");

        this.keszElem.on("click",()=> {
            console.log(this);
            this.sorElem.css("background-color", "green");
            this.#esemenyTrigger(".kesz");
        });

        this.megseElem.on("click",()=> {
            console.log(this);
            this.sorElem.css("background-color", "red");
        });
    }

    #sor(){
        let txt = "";
        txt += "<tr>";
        for (const key in this.#obj) {
                txt += `<td> ${this.#obj[key]}</td>`;
        }
        txt += `<td><span class="kesz">✅</span> <span class="megse">✖</span> <span class="kuka">🗑</span>`
        txt += "</tr>";
        this.szuloELEM.append(txt);
    }

    #esemenyTrigger(esemenyNeve){
        const esemenyem = new CustomEvent(esemenyNeve,
            {detail:this});
        window.dispatchEvent(esemenyem);
    }
}

export default MegjelenitSor;