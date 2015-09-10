$(document).ready(function(){   
    
    
    var altura = $('.cabecera_small').offset().top;    
    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura){
            $('.cabecera_small').addClass('fixed');
        }else{
            $('.cabecera_small').removeClass('fixed');
        }
    });
    
    var alturanavbig = $('.cont_nav_big').offset().top;    
    $(window).on('scroll', function(){
        if($(window).scrollTop() > alturanavbig){
            $('.cont_nav_big').addClass('fixednavbig');
        }else{
            $('.cont_nav_big').removeClass('fixednavbig');
        }
    });
    
    //scroll top
    $('.goTop').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        });
    });
    
    $('#mostrar-nav').on('click',function(){
	   $('.nav_mov').toggleClass('mostrar');
    });
    
    /*function mostrarMenuQuienes(){
		var $menuQuienes = $('.quienes_hidden');	
		$menuQuienes.slideToggle('fast');
	}*/
    
    function mostrarMenuServicios(){
		var $menuServicios = $('.servicios_hidden');	
		$menuServicios.slideToggle('fast');
	}
    function mostrarMenuPacientes(){
		var $menuPacientes = $('.pacientes_hidden');	
		$menuPacientes.slideToggle('fast');
	}
		/*$('.quienes_show').on('click', mostrarMenuQuienes);*/
        $('.servicios_show').on('click', mostrarMenuServicios);
        $('.pacientes_show').on('click', mostrarMenuPacientes);
    
});