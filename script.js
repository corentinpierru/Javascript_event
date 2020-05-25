var footer1 = document.querySelector('footer');
clicknumber = 1
//exo 1
footer1.addEventListener("click", addClickToConsole);

function addClickToConsole() {
  console.log("clique " + clicknumber);
  clicknumber++
};


//exo2

navbarMenu = document.getElementsByClassName("navbar-toggler")
navbarMenu[0].addEventListener("click", showHamburger);

function showHamburger() {
  document.getElementById("navbarHeader").classList.toggle("collapse")
}

//exo3
editButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
editButton[0].addEventListener("click", putTextInRed);

function putTextInRed() {
  document.getElementsByClassName("card-text")[0].style ="color:red";
};

//exo4
editButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
editButton[1].addEventListener("click", putTextInRedOrNormal);

function putTextInRedOrNormal() {
  var text = document.getElementsByClassName("card-text")
    if (text[1].style.color ==='green') {
      text[1].style.color = ""
    }else {
      text[1].style.color = "green"
    }
}

//exo5 Fonction cette fois-ci directement dans le addEventListener (pour changer)
navbar = document.getElementsByClassName("navbar")[0];
  navbar.addEventListener("dblclick", function(){
    if (document.getElementsByTagName("link")[0].attributes.href.nodeValue === ""){
      document.getElementsByTagName("link")[0].setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    } else {
      document.getElementsByTagName("link")[0].setAttribute ("href", "");
    }
  })

  //exo6
  let boutonView = document.querySelectorAll('.btn-success')
  let text2 = document.querySelectorAll('.card-text')
  let img = document.querySelectorAll('.card-img-top')
  
  for (let i = 0; i < boutonView.length; i++) {
    boutonView[i].addEventListener('mouseover', function () {
      if (text2[i].style.display !== 'none') {
        img[i].style.width = '20%'
        text2[i].style.display = 'none'
      } else {
        img[i].style.width = '100%'
        text2[i].style.display = ''
      }
    })
  }

  //exo7
  let boutonChange = document.getElementsByClassName('btn btn-secondary my-2')
  var parentCard = document.getElementsByClassName('row')
  var referenceNode = document.getElementsByClassName('col-md-4')
  boutonChange[0].addEventListener("click", changeOrder)
  
  function changeOrder() {
    parentCard[1].insertBefore(parentCard[1].lastChild, parentCard[1].firstChild)
  }
  