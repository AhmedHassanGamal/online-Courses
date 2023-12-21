
/*(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Mobile nav toggle
   */
    on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })


  /**
   * Scrool with ofset on links with a class name .scrollto
   */
    on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Back to top button
   */

  let backtotop = select('.back-to-top')
   if (backtotop) {
     const toggleBacktotop = () => {
       if (window.scrollY > 100) {
         backtotop.classList.add('active')
       } else {
         backtotop.classList.remove('active')
       }
     }
     window.addEventListener('load', toggleBacktotop)
     onscroll(document, toggleBacktotop)
   }


//login code//


// i icon
const forms = document .querySelector(".forms");

     pwshowhide =document.querySelectorAll(".eye-icon");
     links =document.querySelectorAll(".link");

          console.log(  forms , pwshowhide  ,links )  ;

   pwshowhide.forEach(eyeIcon =>{

  eyeIcon.addEventListener("click",() => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

       console.log(pwFields);

   pwFields.forEach(password =>{
    if(password.type === "password"){
        password.type ="text";
        eyeIcon.classList.replace("bx-hide" ,"bx-show");
        return;


         }
         password.type ="password";
         eyeIcon.classList.replace("bx-show" ,"bx-hide");

      }) 
   })
})
    


//sign up login replace

links.forEach(link => {
    link.addEventListener("click" , e =>{
        e.preventDefault();
        forms.classList.toggle("show-signup");

       
         

    })
})


// show us the login form

const btn=document .querySelector(".btn-login");
const container=document.querySelector(".forms");

const closeicon=document.querySelector('.close-icon');
  console.log (btn ,container );

   btn.addEventListener('click', () =>{
   container .classList.add('active-popup');

});

closeicon.addEventListener('click', ()=> {
 container.classList.remove('active-popup');
 

});


//close the sign up 

 const container2=document.querySelector(".forms");
 const closeicon2=document.querySelector('.close-icons');
 closeicon2.addEventListener('click', ()=> {
 container2.classList.remove('active-popup');
});


// login validation
  
 document.forms[0].onsubmit = function(e) {
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = document.getElementById("email");
  var password = document.getElementById("pass");


  console.log(email, password);
  
  if (email.value === "" || !emailRegex.test(email.value) || password.value === "" || password.value.length < 8        ) {
    e.preventDefault();

    if (email.value === "") {
      alert("Please enter your email");
    } else if (!emailRegex.test(email.value)) {
      alert("Invalid email");
      email.value = "";
    }

    if (password.value === "") {
      alert("Please enter your password");
    } else if (password.value.length < 8) {
      alert("Password should be at least 8 characters long");
      password.value = "";
    
    
    }
  }
};
//sign up validatin
document.forms[1].onsubmit = function(s) {
  var emailRegex2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email2 = document.getElementById("email2");
  var password2 = document.getElementById("pass2");
  var password3 = document.getElementById("pass3");

  console.log(email2, password2);
  
  if (email2.value === "" || !emailRegex2.test(email2.value) || password2.value === "" || password2.value.length < 8    || password3.value === "" || password3.value.length < 8  ||  password3.value !==  password2.value    ) {
    s.preventDefault();

    if (email2.value === "") {
      alert("Please enter your email");
    } else if (!emailRegex2.test(email2.value)) {
      alert("Invalid email");
     
    }

    if (password2.value === "") {
      alert("Please enter your password");
    } 
    else if (password2.value.length < 8) {
      alert("Password should be at least 8 characters long");
     
     }

     if (password3.value === "") {
      alert("Please enter your confirm password");
    } 
    else if (password3.value.length < 8) {
      alert("please enter your correct password");
    
     }
   
   if(password3.value !==  password2.value ){
     alert ("not match,please enter your correct password");

   }  

  }
};

//mov to another page
var childWindow;
      
      function mov1() {
        childWindow = window.open('java.html', 'Child Window');

    
      }

  function mov2() {
        childWindow = window.open('Javascript.html', 'Child Window');
        
    
      }

      function mov3() {
        childWindow = window.open('php.html', 'Child Window');
        
    
      }

      function mov4() {
        childWindow = window.open('hml.html', 'Child Window');
        
    
      }

      function mov5() {
        childWindow = window.open('python.html', 'Child Window');
        
    
      }

      function mov6() {
        childWindow = window.open('c++.html', 'Child Window');
        
    
      }


 










  


