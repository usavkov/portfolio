const iHeight = window.innerHeight;
const scrollBtn = document.querySelector('#scroll-up');


/* Skroll up*/

scrollBtn.addEventListener('click', (ev) => {
    let currentY = window.pageYOffset;
    
    function up () {
        window.scrollTo(0, currentY);
        currentY -= 150;
        console.log(currentY);
        
        if (window.pageYOffset > 0) {
            window.requestAnimationFrame(up);
        }
    }
    
     return up() 
})

window.addEventListener('scroll', (ev) => {
    if (window.pageYOffset > iHeight) {
        $('#scroll-up svg').fadeIn(500, () => {
            $('#scroll-up svg').css({'display': 'block'}) // document.querySelector('#scroll-up svg').style.display = 'block';
        });
    } else {
        $('#scroll-up svg').fadeOut(500, () => {
            $('#scroll-up svg').css({'display': 'none'}) // document.querySelector('#scroll-up svg').style.display = 'none';
        })
    }
})

/*----------*/

