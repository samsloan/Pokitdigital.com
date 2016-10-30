

function clickTab(){
    
    $('.textbox_menu_right').click(function(){
    
    switch(services_page){
                
            case 'capabilities':
            
                console.log('is clicking right')
            
                $('.para_00').fadeOut('slow')
            
                $('.para_00').css('display', 'none')
            
                $('.list_select_00').css('display', 'inline-block')
            
                $('.list_select_00').hide()
            
                $('.list_select_00').fadeIn('slow')
            
                $('.services').css('color','#979797')
            
                $('.about').css('color','#efefef')
            
                tick = 2
                

            case 'design':
            
                console.log('is clicking right')
            
                $('.para_01').fadeOut('slow')
            
                $('.para_01').css('display', 'none')
            
                $('.list_select_01').css('display', 'inline-block')
            
                $('.list_select_01').hide()
            
                $('.list_select_01').fadeIn('slow')
            
                $('.services').css('color','#979797')
            
                $('.about').css('color','#efefef')
            
                tick = 2
                
            case 'development':
            
                console.log('is clicking right')
            
                $('.para_02').fadeOut('slow')
            
                $('.para_02').css('display', 'none')
            
                $('.list_select_02').css('display', 'inline-block')
        
                $('.list_select_02').hide()
            
                $('.list_select_02').fadeIn('slow')
            
                $('.services').css('color','#979797')
            
                $('.about').css('color','#efefef')
            
                tick = 2
                
    
            case 'branding':
            
                console.log('is clicking right')
            
                $('.para_03').fadeOut('slow')
            
                $('.para_03').css('display', 'none')
            
                $('.list_select_03').css('display', 'inline-block')
        
                $('.list_select_03').hide()
            
                $('.list_select_03').fadeIn('slow')
            
                $('.services').css('color','#979797')
            
                $('.about').css('color','#efefef')
            
                tick = 2
                

            case 'marketing':
            
                console.log('is clicking right')
            
                $('.para_04').fadeOut('slow')
            
                $('.para_04').css('display', 'none')
            
                $('.list_select_04').css('display', 'inline-block')
        
                $('.list_select_04').hide()
            
                $('.list_select_04').fadeIn('slow')
            
                $('.services').css('color','#979797')
            
                $('.about').css('color','#efefef')
            
                tick = 2                
                
                
            case 'production':
            
                console.log('is clicking right')
            
                $('.para_05').fadeOut('slow')
            
                $('.para_05').css('display', 'none')
            
                $('.list_select_05').css('display', 'inline-block')
        
                $('.list_select_05').hide()
            
                $('.list_select_05').fadeIn('slow')
            
                $('.services').css('color','#979797')
            
                $('.about').css('color','#efefef')
            
                tick = 2                
            
            
                
                        
               
            
            }
    
    })



    $('.textbox_menu_left').click(function(){
    
    switch(services_page){
            
        case 'capabilities':
            
            $('.list_select_00').fadeOut('slow')
            
            $('.list_select_00').css('display', 'none')
            
            $('.para_00').css('display', 'block')
            
            $('.para_00').hide()
            
            $('.para_00').fadeIn('slow')
            
            $('.about').css('color','#979797')
            
            $('.services').css('color','#efefef')
            
            tick = 1
            
            
        case 'design':
            
            $('.list_select_01').fadeOut('slow')
            
            $('.list_select_01').css('display', 'none')
            
            $('.para_01').css('display', 'block')
            
            $('.para_01').hide()
            
            $('.para_01').fadeIn('slow')
            
            $('.about').css('color','#979797')
            
            $('.services').css('color','#efefef')
            
            tick = 1    
            
        case 'development':
            
            $('.list_select_02').fadeOut('slow')
            
            $('.list_select_02').css('display', 'none')
            
            $('.para_02').css('display', 'block')
            
            $('.para_02').hide()
            
            $('.para_02').fadeIn('slow')
            
            $('.about').css('color','#979797')
            
            $('.services').css('color','#efefef')
            
            tick = 1  
            
            
        case 'branding':
            
            $('.list_select_03').fadeOut('slow')
            
            $('.list_select_03').css('display', 'none')
            
            $('.para_03').css('display', 'block')
            
            $('.para_03').hide()
            
            $('.para_03').fadeIn('slow')
            
            $('.about').css('color','#979797')
            
            $('.services').css('color','#efefef')
            
            tick = 1    
            
            
        case 'marketing':
            
            $('.list_select_04').fadeOut('slow')
            
            $('.list_select_04').css('display', 'none')
            
            $('.para_04').css('display', 'block')
            
            $('.para_04').hide()
            
            $('.para_04').fadeIn('slow')
            
            $('.about').css('color','#979797')
            
            $('.services').css('color','#efefef')
            
            tick = 1    
            
            
        case 'production':
            
            $('.list_select_05').fadeOut('slow')
            
            $('.list_select_05').css('display', 'none')
            
            $('.para_05').css('display', 'block')
            
            $('.para_05').hide()
            
            $('.para_05').fadeIn('slow')
            
            $('.about').css('color','#979797')
            
            $('.services').css('color','#efefef')
            
            tick = 1
            
            
            
            
    }
    
    })
}
    
    
    



var p4page = 1

function clickRightP4(){
    $('.textbox_menu_right').click(function(){
    
    })
}
                        

if (p4page === 1){
    page1.css(block)
    
}


    

 
if (page = 2){
    
    p3Menu()
}


$('.textbox_menu_right').click(function(){
    switch(p4page){
        case 1: 
            $('.contain_00_03').css('display', 'none')
            $('.contain_01_03').css('display', 'block')
            p4page = 2
            
            break;
        
        case 2:
            $('.contain_01_03').css('display', 'none')
            $('.contain_02_03').css('display', 'block')
            p4page = 3
            
            break;
            
        case 3:
            $('.contain_02_03').css('display', 'none')
            $('.contain_03_03').css('display', 'block')
            p4page = 4
            
            break;
            
        default:
            return(0)
            
                
            
            
    }
}

                               
$('.textbox_menu_left').click(function(){
    switch(p4page){
        
        case 2:
            $('.contain_01_03').css('display', 'none')
            $('.contain_00_03').css('display', 'block')
            
            p4page = 3
            
            break;
            
        case 3:
            $('.contain_02_03').css('display', 'none')
            $('.contain_01_03').css('display', 'block')
            
            p4page = 4
            
            break;
            
        case 4:
            $('.contain_03_03').css('display', 'none')
            $('.contain_02_03').css('display', 'block')
            
        default:
            return(0)
            
                
            
            
    }
}
                              

                              
function p3Menu(){
    
    $('.textbox_menu_right').click(function(){
    switch(p4page){
        case 1: 
            $('.contain_00_03').css('display', 'none')
            $('.contain_01_03').css('display', 'block')
            p4page = 2
            
            break;
        
        case 2:
            $('.contain_01_03').css('display', 'none')
            $('.contain_02_03').css('display', 'block')
            p4page = 3
            
            break;
            
        case 3:
            $('.contain_02_03').css('display', 'none')
            $('.contain_03_03').css('display', 'block')
            p4page = 4
            
            break;
            
        default:
            return(0)
            
            
                
            
            
        }
    })
    
    $('.textbox_menu_left').click(function(){
    switch(p4page){
        
        case 2:
            $('.contain_01_03').css('display', 'none')
            $('.contain_00_03').css('display', 'block')
            
            p4page = 3
            
            break;
            
        case 3:
            $('.contain_02_03').css('display', 'none')
            $('.contain_01_03').css('display', 'block')
            
            p4page = 4
            
            break;
            
        case 4:
            $('.contain_03_03').css('display', 'none')
            $('.contain_02_03').css('display', 'block')
            
        default:
            return(0)
            
                
            
            
        }
    })  
};


if (page === 2){
    p3Menu()
}



















    
