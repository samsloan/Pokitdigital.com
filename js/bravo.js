var scrollTimer = 0;

var page = 0;

var p4page = 1;

var delta = 0;

var lastScrollTime = 0;

var y = 0;

var tick = 1;

var services_page = 'capabilities';

function pageScroll() {


    if (delta > 0) {


        switch (page) {

            /////HOMEPAGE CASE /PAGE1/ UPSCROLL
            case 0:


                break;

                ///// DEVELOPMENT PAGE /PAGE2/ UPSCROLL
            case 1:
                ////upscroll




                ///ANIMATE
                $('.page_02').fadeOut(400);

                $('.page_02').css("display", "none");

                $('.page_01').animate({
                    opacity: 0
                }, 0);

                $('.page_01').css("display", "flex");

                $('.page_01').animate({
                    opacity: 1
                }, 500);


                $('.page_select').animate({
                    top: '-=48.0479px'
                })

                function textToggleUp() {

                    $('#p_1').toggleClass('standard highlighted');
                    $('#p_2').toggleClass('highlighted standard');
                }

               
                
                $('.contain_01, .contain_02, .contain_03, .contain_04, .contain_05').css('display', 'none')
                
                $('.contain_00').css('display', 'block')
                
                
                
                
                
                setTimeout(textToggleUp, 500)

                lastScrollTime = performance.now()

                page = 0;
                
                services_page = 'capabilities'

                break;

            case 2:
                $('.page_03').fadeOut(400);

                $('.page_03').css("display", "none");

                $('.page_02').animate({
                    opacity: 0
                }, 0);

                $('.page_02').css("display", "flex");

                $('.page_02').animate({
                    opacity: 1
                }, 500);

                $('.page_select').animate({
                    top: '-=48.0479px'
                });
                
               
                $('.contain_01_03, .contain_02_03, .contain_03_03, .contain_04_03, .contain_05_03, .graphic_00_03, .graphic_01_03, .graphic_00_04').css('display', 'none')
                
                $('.contain_00_03').css('display', 'block')

                setTimeout(textToggleDown, 500)

                lastScrollTime = performance.now()

                page = 1
                
                p4page = 1

                break;

            case 3:

                $('.page_04').fadeOut(400);

                $('.page_04').css("display", "none");

                $('.page_03').animate({
                    opacity: 0
                }, 0);

                $('.page_03').css("display", "flex");

                $('.page_03').animate({
                    opacity: 1
                }, 500);

                $('.page_select').animate({
                    top: '-=48.0479px'
                });
                
            


                setTimeout(textToggleDown, 500)

                lastScrollTime = performance.now()

                page = 2

                break;

            case 4:

                $('.page_05').fadeOut(400);

                $('.page_05').css("display", "none");

                $('.page_04').animate({
                    opacity: 0
                }, 0);

                $('.page_04').css("display", "flex");

                $('.page_04').animate({
                    opacity: 1
                }, 500);

                $('.page_select').animate({
                    top: '-=48.0479px'
                });
                
               
                setTimeout(textToggleDown, 500)
                lastScrollTime = performance.now()

                page = 3

                break;

            default:



        }
    } else {


        switch (page) {

            /////HOMEPAGE CASE /PAGE1/ DOWNSCROLL
            case 0:

                $('.page_02').animate({
                    opacity: 0
                }, 0);

                $('.page_02').css("display", "flex");

                $('.page_01').fadeOut(400);

                $('.page_02').animate({
                    opacity: 1
                }, 500);

                $('.page_select').animate({
                    top: '+=48.0479px'
                });

               

                lastScrollTime = performance.now()

                page = 1
                break;

            case 1:
                $('.page_02').fadeOut(400);
                $('.page_02').css("display", "none");
                $('.page_03').animate({
                    opacity: 0
                }, 0);
                $('.page_03').css("display", "flex");
                $('.page_03').animate({
                    opacity: 1
                }, 500);


                $('.page_select').animate({
                    top: '+=48.0479px'
                });
                
                

                function textToggleDown() {

                    $('#p_2').toggleClass('highlighted standard');
                    $('#p_3').toggleClass('standard highlighted');
                }
                
                $('.contain_01, .contain_02, .contain_03, .contain_04, .contain_05').css('display', 'none')
                
                $('.contain_00').css('display', 'block')
                
                

                setTimeout(textToggleDown, 500)
                lastScrollTime = performance.now()

                page = 2
                
                services_page = 'capabilities'
                
                break;

            case 2:
                $('.page_03').fadeOut(400);
                $('.page_03').css("display", "none");
                $('.page_04').animate({
                    opacity: 0
                }, 0);
                $('.page_04').css("display", "flex");
                $('.page_04').animate({
                    opacity: 1
                }, 500);

                $('.page_select').animate({
                    top: '+=48.0479px'
                });

                function textToggleDown() {

                    $('#p_3').toggleClass('highlighted standard');
                    $('#p_4').toggleClass('standard highlighted');
                }

                 $('.contain_01_03, .contain_02_03, .contain_03_03, .contain_04_03, .contain_05_03, .graphic_00_03, .graphic_01_03, .graphic_00_04, .graphic_05_04').css('display', 'none')
                
                $('.contain_00_03').css('display', 'block')

                
                setTimeout(textToggleDown, 500)
                lastScrollTime = performance.now()

                page = 3
                
                p4page = 1

                break;

            case 3:
                $('.page_04').fadeOut(400);
                $('.page_04').css("display", "none");
                $('.page_05').animate({
                    opacity: 0
                }, 0);

                $('.page_05').css("display", "flex");
                $('.page_05').animate({
                    opacity: 1
                }, 500);

                $('.page_select').animate({
                    top: '+=48.0479px'
                });

                function textToggleDown() {

                    $('#p_4').toggleClass('highlighted standard');

                    $('#p_5').toggleClass('standard highlighted');
                }

                
                
                
                setTimeout(textToggleDown, 500)

                lastScrollTime = performance.now()

                page = 4
                break;

            default:


        }
    }
}

function getStarted(){
    $('.get_started').click(function(){
        
        

        
        switch(page){
            case 0:
                $('.page_01').fadeOut(400);
                $('.page_01').css("display", "none");
                
                $('.page_select').animate({
                    top: '+=192.1916px'
                })
                break;
        
        
            case 1:
                $('.page_02').fadeOut(400);
                $('.page_02').css("display", "none");
                $('.page_select').animate({
                    top: '+=144.1437px'
                })
                break;
        
            case 2:
                $('.page_03').fadeOut(400);
                $('.page_03').css("display", "none");
                $('.page_select').animate({
                    top: '+=96.0958px'
                })
        
                break;
      
            case 3:
                $('.page_04').fadeOut(400);
                $('.page_04').css("display", "none");
                $('.page_select').animate({
                    top: '+=48.0479px'
                })
                break;
        
            default:
                return(0);
                
        
        
        
        }
        
        $('.page_01').css("display", "none");
        $('.page_05').animate({
            opacity: 0
        }, 0);

        $('.page_05').css("display", "flex");
        $('.page_05').animate({
            opacity: 1
        }, 500);

        

        function textToggleDown() {

            $('#p_4').toggleClass('highlighted standard');

            $('#p_5').toggleClass('standard highlighted');
        }
        
        page = 4
        
        
        
    })
}

function fadePara() {
    switch (services_page) {

        case 'capabilities':

            ////$('.contain_00').fadeOut();
            $('.contain_00').css('display', 'block')

        case 'design':
            /////$('.contain_01').fadeOut();
            $('.contain_01').css('display', 'none')

        case 'development':
            /////$('.contain_02').fadeOut();
            $('.contain_02').css('display', 'none')

        case 'branding':
            ////$('.contain_03').fadeOut();
            $('.contain_03').css('display', 'none')


        case 'marketing':
            ////$('.contain_04').fadeOut();
            $('.contain_04').css('display', 'none')

        case 'production':
            ////$('.contain_05').fadeOut();
            $('.contain_05').css('display', 'none')



        default:
            console.log(0)

    }

}

function clickTab() {

    $('.textbox_menu_right').click(function() {
        console.log('click right')

        switch (services_page) {

            case 'capabilities':

                console.log('is clicking right')

                $('.para_00').fadeOut('slow')

                $('.para_00').css('display', 'none')

                $('.list_select_00').css('display', 'inline-block')

                $('.list_select_00').hide()

                $('.list_select_00').fadeIn('slow')

                $('.services').css('color', '#979797')

                $('.about').css('color', '#efefef')

                tick = 2


            case 'design':

                console.log('is clicking right')

                $('.para_01').fadeOut('slow')

                $('.para_01').css('display', 'none')

                $('.list_select_01').css('display', 'inline-block')

                $('.list_select_01').hide()

                $('.list_select_01').fadeIn('slow')

                $('.services').css('color', '#979797')

                $('.about').css('color', '#efefef')

                tick = 2

            case 'development':

                console.log('is clicking right')

                $('.para_02').fadeOut('slow')

                $('.para_02').css('display', 'none')

                $('.list_select_02').css('display', 'inline-block')

                $('.list_select_02').hide()

                $('.list_select_02').fadeIn('slow')

                $('.services').css('color', '#979797')

                $('.about').css('color', '#efefef')

                tick = 2


            case 'branding':

                console.log('is clicking right')

                $('.para_03').fadeOut('slow')

                $('.para_03').css('display', 'none')

                $('.list_select_03').css('display', 'inline-block')

                $('.list_select_03').hide()

                $('.list_select_03').fadeIn('slow')

                $('.services').css('color', '#979797')

                $('.about').css('color', '#efefef')

                tick = 2


            case 'marketing':

                console.log('is clicking right')

                $('.para_04').fadeOut('slow')

                $('.para_04').css('display', 'none')

                $('.list_select_04').css('display', 'inline-block')

                $('.list_select_04').hide()

                $('.list_select_04').fadeIn('slow')

                $('.services').css('color', '#979797')

                $('.about').css('color', '#efefef')

                tick = 2


            case 'production':

                console.log('is clicking right')

                $('.para_05').fadeOut('slow')

                $('.para_05').css('display', 'none')

                $('.list_select_05').css('display', 'inline-block')

                $('.list_select_05').hide()

                $('.list_select_05').fadeIn('slow')

                $('.services').css('color', '#979797')

                $('.about').css('color', '#efefef')

                tick = 2




        }

    })



    $('.textbox_menu_left').click(function() {

        

        switch (services_page) {

            case 'capabilities':

                $('.list_select_00').fadeOut('slow')

                $('.list_select_00').css('display', 'none')

                $('.para_00').css('display', 'block')

                $('.para_00').hide()

                $('.para_00').fadeIn('slow')

                $('.about').css('color', '#979797')

                $('.services').css('color', '#efefef')

                tick = 1


            case 'design':

                $('.list_select_01').fadeOut('slow')

                $('.list_select_01').css('display', 'none')

                $('.para_01').css('display', 'block')

                $('.para_01').hide()

                $('.para_01').fadeIn('slow')

                $('.about').css('color', '#979797')

                $('.services').css('color', '#efefef')

                tick = 1

            case 'development':

                $('.list_select_02').fadeOut('slow')

                $('.list_select_02').css('display', 'none')

                $('.para_02').css('display', 'block')

                $('.para_02').hide()

                $('.para_02').fadeIn('slow')

                $('.about').css('color', '#979797')

                $('.services').css('color', '#efefef')

                tick = 1


            case 'branding':

                $('.list_select_03').fadeOut('slow')

                $('.list_select_03').css('display', 'none')

                $('.para_03').css('display', 'block')

                $('.para_03').hide()

                $('.para_03').fadeIn('slow')

                $('.about').css('color', '#979797')

                $('.services').css('color', '#efefef')

                tick = 1


            case 'marketing':

                $('.list_select_04').fadeOut('slow')

                $('.list_select_04').css('display', 'none')

                $('.para_04').css('display', 'block')

                $('.para_04').hide()

                $('.para_04').fadeIn('slow')

                $('.about').css('color', '#979797')

                $('.services').css('color', '#efefef')

                tick = 1


            case 'production':

                $('.list_select_05').fadeOut('slow')

                $('.list_select_05').css('display', 'none')

                $('.para_05').css('display', 'block')

                $('.para_05').hide()

                $('.para_05').fadeIn('slow')

                $('.about').css('color', '#979797')

                $('.services').css('color', '#efefef')

                tick = 1


        }

    })
}

function p3Menu() {

    $('.textbox_menu_right_03').click(function() {
        switch (p4page) {
            case 1:
                
                $('.contain_00_03').fadeOut(200).css('display, none');
                
                setTimeout(function() {
                $('.contain_01_03').fadeIn(200);
                $('.graphic_01_03').fadeIn(200);
                },200
                        );
                ///$('.contain_00_03').css('display', 'none')
                
                console.log('page 2/4')
                p4page = 2

                break;

            case 2:
                $('.contain_00_03').fadeOut(200).css('display, none');
                $('.contain_01_03').fadeOut(200);
                $('.graphic_01_03').fadeOut(200);
                
                setTimeout(function() {
                $('.contain_02_03').fadeIn(200);
                $('.graphic_02_03').fadeIn(200);
                },200
                        );
                p4page = 3
                console.log('page 3/4')
                break;

            case 3:
                $('.contain_00_03').fadeOut(200).css('display, none');
                $('.contain_02_03').fadeOut(200);
                $('.graphic_02_03').fadeOut(200);
                
                setTimeout(function() {
                $('.contain_03_03').fadeIn(200);
                $('.graphic_03_03').fadeIn(200);
                },200
                        );
                p4page = 4
                console.log('page 4/4')
                break;

            default:
                return (0)




        }
    })

    $('.textbox_menu_left_03').click(function() {
        switch (p4page) {

            case 2:
                
                $('.contain_01_03').fadeOut(200);
                $('.graphic_01_03').fadeOut(200);
                
                setTimeout(function() {
                $('.contain_00_03').fadeIn(200);
                $('.graphic_00_03').fadeIn(200);
                },200
                        );
                p4page = 1

                break;

            case 3:
                $('.contain_02_03').fadeOut(200);
                $('.graphic_02_03').fadeOut(200);
                
                setTimeout(function() {
                $('.contain_01_03').fadeIn(200);
                $('.graphic_01_03').fadeIn(200);
                },200
                        );

                p4page = 2

                break;

            case 4:
                
                
                $('.contain_03_03').fadeOut(200);
                $('.graphic_03_03').fadeOut(200);
                
                setTimeout(function() {
                $('.contain_02_03').fadeIn(200);
                $('.graphic_02_03').fadeIn(200);
                },200
                        );

                p4page = 3

            default:
                return (0)




        }
    })
};




$(document).ready(function() {


    $(window).bind('mousewheel', function(event) {




        var st = $(window).scrollTop();




        var x = performance.now();

        delta = (event.originalEvent.wheelDelta)
        var x = performance.now()
        if (x - lastScrollTime > 1000) {

            pageScroll();

        } else if (lastScrollTime == 0) {

            pageScroll();

        } else {


            return (0)
            setTimeout(function() {
                return (0);
            }, 500);

        }

    });


    getStarted()
    
    p3Menu()

    clickTab()
    
    ////click anydiv

    ///// click Design
    $('.plexus_div_02').click(function() {

        if (services_page === 'design') {
            console.log(services_page)
            console.log('ifd lad')
        } else {
            console.log('elsed lad')
            fadePara()
            $('.contain_01').css('display', 'block')
            $('.contain_00').css('display', 'none')
            services_page = 'design'

        }


    })


    ///// click Development
    $('.plexus_div_03').click(function() {

        if (services_page === 'development') {
            console.log(services_page)
            console.log('ifd lad')
        } else {
            console.log('elsed lad')
            fadePara()
            $('.contain_02').css('display', 'block')
            $('.contain_00').css('display', 'none')
            services_page = 'development'

        }


    })

    ///// click Branding
    $('.plexus_div_04').click(function() {

        if (services_page === 'branding') {
            return (0)
        } else {
            fadePara()
            $('.contain_03').css('display', 'block')
            $('.contain_00').css('display', 'none')
            services_page = 'branding'

        }


    })

    ///// click Marketing
    $('.plexus_div_05').click(function() {

        if (services_page === 'marketing') {
            return (0)
        } else {
            fadePara()
            $('.contain_04').css('display', 'block')
            $('.contain_00').css('display', 'none')
            services_page = 'marketing'

        }


    })

    ///// click Production
    $('.plexus_div_06').click(function() {

        if (services_page === 'production') {
            return (0)
        } else {
            fadePara()
            $('.contain_05').css('display', 'block')
            $('.contain_00').css('display', 'none')
            services_page = 'production'
        

        }


    })

});


$('.plexus_div').click(function() {

                $('.list_select_00, .list_select_01, .list_select_02, .list_select_03, .list_select_04').fadeOut('slow')

                $('.list_select_00, .list_select_01, .list_select_02, .list_select_03, .list_select_04').css('display', 'none')

                $('.para_00, .para_01, .para_02, .para_03, .para_04').css('display', 'block')

                $('.para_00, .para_01, .para_02, .para_03, .para_04').hide()

                $('.para_00, .para_01, .para_02, .para_03, .para_04').fadeIn('slow')

                $('.about').css('color', '#979797')

                $('.services').css('color', '#efefef')


    });


$('.graphic_container_01').hover(function() {

        $('#sam').css('visibility', 'visible')},
        function(){
        $('#sam').css('visibility', 'hidden')
        
        })
    
    
$('.graphic_container_02').hover(function() {

        $('#teh').css('visibility', 'visible')},
        function(){
        $('#teh').css('visibility', 'hidden')
        
        })
    
    

 
        








