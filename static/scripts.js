//update copyright date on footer auto automatically

function copyRight() {
    document.getElementById('copy').innerHTML = "Copyright &copy; " + new Date().getFullYear();

}

//back to top button function
function backToTop(){  
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var topBtn = document.getElementById('topBtn');

window.onscroll = function() {
    console.log(window.innerHeight + " " + window.pageYOffset  + " " + document.body.offsetHeight)
    if(window.innerHeight + window.pageYOffset < document.body.offsetHeight - 50) {
        topBtn.style.opacity = "0";
    }
    else{
        topBtn.style.opacity = ".75";
    }
    console.log("It Scrolls!");
}

function weightConverter(valNum) {
    document.getElementById("outputGrams").innerHTML = valNum / 0.0022046;
  }

function darkModeFunction() {
    var element = document.body;
    var darkNavbar = document.getElementById("navbar");
    element.classList.toggle("dark-mode");
   darkNavbar.classList.toggle("navbar-dark");
   darkNavbar.classList.remove("bg-light");
    }
   
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
     
    function showHide(navbar) {
        if (document.getElementsById){
            var divId = document.getElementsById(id);
            var divs = document.getElementsByClassName("hideable");
            for( var i = 0; i < divs.length; i++){
                divs[i].style.display  = "none";

            } 
            divId.style.display = "block";
        }
        return false;
            
            }
    

