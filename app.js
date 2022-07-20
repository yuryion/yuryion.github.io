const sections = document.querySelectorAll('.section'); //select all section
const navBar = document.querySelectorAll('.nav-bar'); //buttons parent
const navBtn = document.querySelectorAll('.nav-btn'); //the actual buttons
const body = document.querySelector('.body'); //select the body

function PageTransitions(){
    //Selected button stays selected
    for(let i = 0; i < navBtn.length; i++){
        navBtn[i].addEventListener('click', function(){ //add event listener to every button
            let currentBtn = document.querySelector('.active-btn');  //get the current button
            currentBtn.className = currentBtn.className.replace(' active-btn','');  //remove it as the active button
            this.className += ' active-btn'; //activate the button that was clicked
        })
    }
    
    // to transition between sections
    body.addEventListener('click', (event) => {
        // we specified the target with 'cursor: pointer;' 
        // and made sure it doesn't go to the anchor tag 
        // with 'pointer-events: none;'
        const id = event.target.dataset.id;
        // if 'id' exists
        console.log(id);
        if (id){       
            //hide other sections
            console.log(event.target);
            console.log(sections);
            sections.forEach((section) => {
                
                section.classList.remove('active-section');
            })
            // display active section
            const element = document.getElementById(id);
            element.classList.add('active-section');
        }
    })
    //Toggle Theme
    const themeBtn = document.querySelector('.nav-btn-theme');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })

    body.onload = function(){
        document.body.style.opacity='1';
    }
}

PageTransitions();