// const header = document.querySelector('header');
const div = document.querySelector('.navigation');
const nav = document.querySelector('.head')

const options ={
    rootMargin: '-50px 0px 0px 0px',
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
           
            nav.classList.add('transparent');
        } else {
            
            nav.classList.remove('transparent');
        }
    });
}, options);

headerObserver.observe(div)
