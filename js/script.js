$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Portfolio | Vatsal Kansagara";
        $("#favicon").attr("href","images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        
    }
});

// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["Web Developer"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });
// <!-- tilt js effect ends -->

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false,
    mobile: true
});


/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 200}); 
srtop.reveal('.home .github',{interval: 200}); 
srtop.reveal('.home .twitter',{interval: 200});
srtop.reveal('.home .telegram',{interval: 200}); 
srtop.reveal('.home .instagram',{interval: 200}); 

function gotowhatsapp(){
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phone = document.querySelector('input[name="phone"]').value;
    var msg = document.querySelector('textarea[name="message"]').value;

    var url = "https://wa.me/+919510345505?text="+ "Name : "+ name + "%0a" + "Email : "+ email + "%0a" + "Phone : " + phone + "%0a" + "Message : " + msg;
    window.open(url).focus();
}


/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 200});
srtop.reveal('.about .content .tag',{delay: 200}); 
srtop.reveal('.about .content p',{delay: 200}); 
srtop.reveal('.about .content .box-container',{delay: 200}); 
srtop.reveal('.about .content .resumebtn',{delay: 200}); 

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    var headerHeight = $('header').outerHeight(); 

    $('html, body').animate({
      scrollTop: $target.offset().top - headerHeight
    }, 600, 'swing');
  });
});



/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 150}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 150}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 200});
srtop.reveal('.experience .timeline .container',{interval: 200}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 200});
srtop.reveal('.contact .container .form-group',{delay: 200});