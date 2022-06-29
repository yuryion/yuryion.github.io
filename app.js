const sections = document.querySelectorAll('.section');
const navBar = document.querySelectorAll('.nav-bar'); //buttons parent
const navBtn = document.querySelectorAll('.nav-btn'); //the actual buttons
const allSections = document.querySelector('.main-content'); //selects the body

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < navBtn.length; i++){
        navBtn[i].addEventListener('click', function(){ //add event listener to every button
            let currentBtn = document.querySelector('.active-btn');  //get the current button
            currentBtn.className = currentBtn.className.replace(' active-btn','');  //remove it as the active button
            this.className += ' active-btn'; //activate the button that was clicked
        })
    }
    /*
    //Sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id){ //if id exists
            //remove active from the other button
            sectBtn.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            
            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
    */
}

PageTransitions();