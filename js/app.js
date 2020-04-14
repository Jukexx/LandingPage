/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let startingTime = performance.now();
const sections = document.querySelectorAll('section');
const menuList = document.querySelector('#navbar__list');
const header = document.querySelector('header');
let isScrolling;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(sectionToCheck){
    var margins = sectionToCheck.getBoundingClientRect();

    return (margins.top > -(innerHeight * 0.4) && margins.top < innerHeight * 0.2 );
  }

  function showHeader(value){
      console.log(value);
      if(value === true){
          header.setAttribute('style','display:');
      }
      else
      {
        header.setAttribute('style','display:none');
      }
  }
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function createAnchors(sections){
    menuList.innerHTML = "";

    for(const s of sections)
    {
        let sectionId = s.getAttribute('id');
        let linkAnchor = `${s.getAttribute('data-nav')}`;

        var li = document.createElement("LI");
        var t = document.createTextNode(linkAnchor);

        li.addEventListener('click', function(){
            s.scrollIntoView();
        });

        li.appendChild(t);
        menuList.appendChild(li);
    }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Add class 'active' to section when near top of viewport

document.addEventListener( 'scroll', event => {
    
    
    window.clearTimeout(isScrolling);
    showHeader(true);
    isScrolling = setTimeout(() => {
        showHeader(false);
    }, 500);

    for(var section of sections){
        if(isInViewport(section)){
            //Set class to active
            section.classList.add('your-active-class');
        }
        else{
            // set class to inactive
            section.classList.remove('your-active-class');
        }
        // console.log(`section ${section.getAttribute('id')} = ${isInViewport(section)}`);
    }  
  })


  // build the nav
createAnchors(sections);
setTimeout(function(){showHeader(false)},2000);

// end build the nav
console.log(`Total time in ms ${performance.now()-startingTime}`);