$(document).ready(function(){   
    //scroll top
    $('.goTop').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        });
    });
    
    $('#mostrar-nav').on('click',function(){
	   $('.nav_mov').toggleClass('mostrar');
    });
    
    function mostrarMenuQuienes(){
		var $menuQuienes = $('.quienes_hidden');	
		$menuQuienes.slideToggle('fast');
	}
    
    function mostrarMenuServicios(){
		var $menuServicios = $('.servicios_hidden');	
		$menuServicios.slideToggle('fast');
	}
    function mostrarMenuPacientes(){
		var $menuPacientes = $('.pacientes_hidden');	
		$menuPacientes.slideToggle('fast');
	}
		$('.quienes_show').on('click', mostrarMenuQuienes);
        $('.servicios_show').on('click', mostrarMenuServicios);
        $('.pacientes_show').on('click', mostrarMenuPacientes);
    
});