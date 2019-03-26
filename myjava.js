function pageload(){
  document.getElementById('doge').textContent="Woof";
}
function onhover(){
  document.getElementById("doge").addEventListener("mouseover", mouseOver);
  document.getElementById("doge").addEventListener("mouseout",mouseOut);

    function mouseOver (){
        document.getElementById("doge").innerHTML="doggie.png";
        }

    function mouseOut (){
        document.getElementById("doge").innerHTML="Woof";

}

document.getElementById('doge').addEventListener("click", onclick);
function click(){
document.getElementsById('doge').innerHTML='doge.png'



}
