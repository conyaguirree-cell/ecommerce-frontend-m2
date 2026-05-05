// esta funcion esta asociada a un boton en especifico y deberia agregar boton por boton, se necesita un id para el boton 

 /*$("#boton1").click(function(){ 
    var numeroproducto = parseInt($("#numeroproducto").html()) +1; 
$("#numeroproducto").html(numeroproducto);
});*/ 


// no esta asociada a nigun elemento de la pagina, se puede llamar desde cualquier elemento de la pagina 
function addproducto() {
    var numeroproducto = parseInt($("#numeroproducto").html()) + 1;
    $("#numeroproducto").html(numeroproducto);
}