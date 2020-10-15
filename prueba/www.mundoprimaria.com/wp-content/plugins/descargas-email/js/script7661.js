jQuery(".descargas-btn").live("click", function(){
    if(validarDescarga()){
url    = '/wp-content/plugins/captador-email/guardar-usuario.php'; 
var request = jQuery.ajax({
  url: url,
  method: "POST",
  data: jQuery("#form-descargas").serialize(),
});
 
request.done(function( msg ) {
  window.location="/wp-content/plugins/descargas-email/descargar.php?url="+jQuery("#btn-link-descargar").attr("href");
    jQuery("#form-descargas").css("display","none");
    jQuery("#formulario-descargas").append("<h3>Descargando...</h3>");
	setTimeout(irA,4000);   
});
 
request.fail(function( jqXHR, textStatus ) {
  alert( "Accion Fallida: " + textStatus );
});
    }
});

function validarDescarga(){
	if(e1=='ptHy' /*|| localStorage.getItem("registrado")==1*/){
		return true;
	}
    if(jQuery("#first_name").val().length<3){
    //    alert("Escriba un nombre válido");
    //    return false;
    };
    if(jQuery("#last_name").val().length<2){
    //alert("Escriba un apellido válido");
    //    return false;
    }
    if(jQuery("#email").val().length<7){
    alert("Escriba un email válido");
        return false;
    }
    
    var cnt = jQuery("input[name='aceptado']:checked").length;
    if(cnt<1){
     alert("No ha aceptado los terminos de uso y condiciones");
        return false;
    }
    
   return true; 
}

function irA(){	
	window.location="http://www.mundoprimaria.com/gracias";
}

jQuery(document).ready(function(){
	if (typeof e1 !== 'undefined') {
		if(e1=='ptHy' /*|| localStorage.getItem("registrado")==1*/){
			jQuery(".descargas-btn").trigger('click');
		}
	}
})

function getURLParameterD(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|£)').exec(location.search)||[,null])[1] || ''
    );
}
