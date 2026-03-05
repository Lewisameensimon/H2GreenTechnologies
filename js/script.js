window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(nav){
if(window.scrollY>50){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}
}

});

function toggleMenu(){
const menu=document.getElementById("menu");
if(menu){
menu.classList.toggle("active");
}
}

function toggleDropdown(e){

if(window.innerWidth < 900){

e.preventDefault();

const parent=e.target.parentElement;

parent.classList.toggle("open");

}

}
