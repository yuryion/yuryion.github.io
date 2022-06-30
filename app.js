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
        const id = event.target.dataset.id;
        // if 'id' exists
        if (id){       
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active-section');
            })
            // display active section
            const element = document.getElementById(id);
            element.classList.add('active-section');
        }
    })
    /*
    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
    */
}

PageTransitions();