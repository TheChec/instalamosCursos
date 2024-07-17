window.sr = ScrollReveal();

//Efecto de los divs contenedor de la información basica

sr.reveal('.description1', {
    duration: 2000,
    origin: 'left',
    distance: '100px',
});
sr.reveal('.description2', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.description3', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.title', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.bussines-services', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.slider', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.title2', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.comments',{
    duration: 2000,
    origin: 'left',
    distance: '200px',
})
sr.reveal('.videoBox',{
    duration: 2000,
    origin: 'top',
    distance: '200px',
})
sr.reveal('.job-description', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});
sr.reveal('.companys', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});


//Slider
document.addEventListener('DOMContentLoaded', function () {
    var carousels = document.querySelectorAll('.boxSlider');

    carousels.forEach(function (carousel, index) {
        var counter = 1;
        setInterval(function () {
            var currentIndex = index + 1; // index for carousel starting from 1
            var radioId = 'radio' + counter + '-' + currentIndex;
            var radioButton = carousel.querySelector('#' + radioId);
            if (radioButton) {
                radioButton.checked = true;
            }
            counter++;
            if (counter > 5) {
                counter = 1;
            }
        }, 5000);
    });
});


//Scroll-behavior, por problemas de compatibilidad

$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});


// NavCel

var contadorNav = 0;

function openNav() {
    let nav = document.getElementById('navCel');
    let allContent = document.getElementById('divNavCel')
    if (contadorNav == 0) {
        nav.style.display = 'flex'
        nav.style.animation = 'translateNavOpen .6s ease'
        allContent.style.display = 'block'
        contadorNav = 1;
    } else {
        nav.style.animation = 'translateNavClose .6s ease'

        setTimeout(() => {
            nav.style.display = 'none'
            allContent.style.display = 'none'
            contadorNav = 0;
        }, 500)
    }
}

//navCourse

function initializeNavIndicators() {
    const navContainers = document.querySelectorAll(".navContainer");
    const containerCourse = document.querySelectorAll(".containerCourse");
    navContainers.forEach(container => {
        const navItems = container.querySelectorAll(".nav-item");
        const navIndicator = container.querySelector(".nav-indicator");

        function updateIndicator(element, indicator) {
            indicator.style.width = `${element.offsetWidth}px`;
            indicator.style.left = `${element.offsetLeft}px`;
        }
        if (navItems.length > 0) {
            navItems[0].classList.add("active");
            containerCourse[0].style.display = "grid";
            updateIndicator(navItems[0], navIndicator);
        }

        navItems.forEach(item => {
            item.addEventListener("click", function() {
                navItems.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
                updateIndicator(this, navIndicator);
            });

            if (item.classList.contains("active")) {
                updateIndicator(item, navIndicator);
            }

            
        });

        
    });

    const courseContainers = document.querySelectorAll(".navCourses");
    courseContainers.forEach(container => {
        const courseItems = container.querySelectorAll(".course-item");
        const courseIndicator = container.querySelector(".course-indicator");
        function updateCourseIndicator(element) {
            courseIndicator.style.width = `${element.offsetWidth}px`;
            courseIndicator.style.left = `${element.offsetLeft}px`;
        }
        if (courseItems.length > 0){
            courseItems[0].classList.add("active");
            updateCourseIndicator(courseItems[0]);
        }
            courseItems.forEach(item => {
                item.addEventListener("click", function() {
                    courseItems.forEach(course => course.classList.remove("active"));
                    this.classList.add("active");
                    updateCourseIndicator(this);
                });
                if (item.classList.contains("active")) {
                    updateCourseIndicator(item);  
                }
            });
    });
}

function apearCourseNav(showId, hideId1, hideId2) {
    document.getElementById(showId).style.display = 'flex';
    document.getElementById(hideId1).style.display = 'none';
    document.getElementById(hideId2).style.display = 'none';

    const courseContainer = document.getElementById(showId);
    const courseItems = courseContainer.querySelectorAll(".course-item");
    const courseIndicator = courseContainer.querySelector(".course-indicator");

    function updateCourseIndicator(element) {
        courseIndicator.style.width = `${element.offsetWidth}px`;
        courseIndicator.style.left = `${element.offsetLeft}px`;
    }

    courseItems.forEach(item => item.classList.remove("active"));
    if (courseItems.length > 0) {
        courseItems[0].classList.add("active");
        updateCourseIndicator(courseItems[0]);
    }
}
initializeNavIndicators();

//mostrar la info del curso

function showCourseinfoBox(id){
    showBox = document.getElementById(`${id}`)
    showBox.style.display = 'grid'
    courses = document.querySelectorAll('.containerCourse')
    courses.forEach(item => {
        if(item == showBox){
            return
        }
        item.style.display = 'none'

    })
}
//balls slider

balls = document.querySelectorAll('.ball')
balls.forEach(ball => {
    slideBox = document.querySelector('.containerVideo')
    ball.addEventListener('click', function(){
        balls.forEach(ball => ball.style.background = "var(--g)")
        this.style.background = "var(--c1)";
        if(balls[0] == this){
            slideBox.style.transform = "translateX(0)"
        }else if(balls[1] == this){
            slideBox.style.transform = "translateX(-100%)"
        }
    })
})

//walink

function walinkMessage(course){
    var message = `Hola ¿Cómo estás? ¡Quiero saber más sobre el curso de ${course}!`;

    message = encodeURIComponent(message)
    
    var walink = 'https://wa.me/573127674443'+'?text='+message;
    window.location.href = walink;
}