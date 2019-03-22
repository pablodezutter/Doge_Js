function pageload(){
  document.getElementById('doge').textContent="Woof";
}
function onhover(){
  document.getElementById('doge').addEventListener("mouseover", mouseOver);
  document.getElementById('doge').addEventListener("mouseout",mouseOut);

    function mouseOver (){
        document.getElementById('doge').innerHtml="doggie.png";
        }

    function mouseOn (){
        document.getElementById('doge').innerHtml="Woof";

}
