import { TODOLIST2 } from "/adatok.js";
import  Megjelenit  from "./Megjelenit.js";

$(function(){
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2,szuloELEM);
})