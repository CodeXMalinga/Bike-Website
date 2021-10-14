const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');


    function setActive(i){
        slides.forEach(
            function(slide){
                slide.classList.remove('active');
                slides[i].classList.add('active');
            }
        )

        dots.forEach(
            function(dot){
                dot.classList.remove('active');
                dots[i].classList.add('active');
            }
        )

    }

for (let j = 0; j < dots.length; j++)
    dots[j].addEventListener('click', function() {
        setActive(j);
    })


   