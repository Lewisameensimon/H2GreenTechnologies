document.addEventListener("DOMContentLoaded",function(){

fetch("layout/navbar.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("navbar").innerHTML=data;
});

fetch("layout/footer.html")
.then(res=>res.text())
.then(data=>{
document.getElementById("footer").innerHTML=data;
});

});
