var sidenav = document.querySelector(".side_navbar")


function show_navbar() {
    sidenav.style.left = "0"
}
function close_navbar() {
    sidenav.style.left = "-60%"
}

var productContainer=document.getElementById("product")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("h5").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
      
})