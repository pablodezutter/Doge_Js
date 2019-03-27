var buttonDoge=document.getElementById("doge");
//waarde van document



    //When the page is finished loading, change the text to "Woof!"
window.addEventListener("load", function(){
  document.getElementById("doge").innerHTML = "Woof!";
});



    //When you hover over the button "Woof!" should disappear and a little doggo icon should appear instead

var doge =  document.getElementById("doge");
//haal mij doge uit de kast
var image= document.createElement("img");
console.log(image);
//maak een element img aan
var dogimage= document.createElement("img");
console.log(dogimage);

doge.addEventListener ("mouseover", mouseOver);
//kijk of er een muis over gaat

doge.addEventListener ("mouseout", mouseOut);
document.body.addEventListener("click", addDogeImage);


function mouseOver(){
  if (document.getElementById("dogIcon")) {
        return;
  }
  doge.innerHTML = "";
  image.src = "doge.png";
  image.id = "dogIcon";
  doge.appendChild(image);
//inhoud van de funtie: als element image doge er is 'return'
}


function mouseOut() {
  doge.removeChild(image);
  doge.innerHTML = 'Woof';
}
//...verwijder image en toon tekst terug
//kijk of er een muis naast gaat



    //When you click the button a picture of a doge should show up somewhere on the page

    function addDogeImage() {
      if (document.getElementById("dogImg")) {
          var element = document.getElementById("dogImg");
          element.parentNode.removeChild(element);
          return;
      }
      dogimage.src = "doggie.png";
      dogimage.id = "dogImg";
      document.body.appendChild(dogimage);
    }

    //When you click the button again, the picture should disappear
