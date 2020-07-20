jQuery(document).ready(function(){

    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:
        {
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }

    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 60){
            $("header").addClass('secondary');
        }
        else if($("header").hasClass('secondary')){
            $("header").removeClass('secondary');
        }
    })




        const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
        const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');



        hamburger.addEventListener('click',() => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });

        menu_item.forEach(item=> {
            item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
        });
});