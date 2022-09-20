/**
 *  Detta är javascript filen scriptBtn.js som sköter den anonyma funktionen changeText
 *  som hittar id:et changeTo och för att ändra texten.
 * 
 */



const changeText = () =>{

  document.getElementById('changeTo').innerHTML = "Goodbye World";

}



/**
 *  Här hittar funktionen getElementById id:et för knappen som sedan sparas i en konstant variabel 
 *  därefter koppplat vi en lyssnare till knappen som argumenten click och lägger in funktionen,
 *  changeText som vi ser ovanför.
 */


const btn = document.getElementById("btnText");
btn.addEventListener("click", changeText);