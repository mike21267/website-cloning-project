const myNavs = document.querySelectorAll('.mynav');

myNavs.forEach(mynav => {
    mynav.addEventListener('mouseover', ()=> {
        mynav.classList.toggle('active')

    });

    mynav.addEventListener('mouseout', ()=> {
        mynav.classList.remove('active')

    })
});





