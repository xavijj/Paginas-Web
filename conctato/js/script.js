$(function(){
  $('.carousel').carousel({
    duration:2000
  });
})
function miFuncion(){
 /*Recoge el valor de cada elemento INPUT del fichero HTML */
 var input1 = document.getElementById("texto1").value.toLowerCase();
 var input2 = document.getElementById("texto2").value.toLowerCase();
 var input3 = document.getElementById("texto3").value.toLowerCase();
 var input4 = document.getElementById("texto4").value.toLowerCase();
 /*Recogida de cada uno de los parrafos para mostrar el resultado */
 var resultado1 = document.getElementById("resultado1");
 var resultado2 = document.getElementById("resultado2");
 var resultado3 = document.getElementById("resultado3");
 var resultado4 = document.getElementById("resultado4");

  /*Compara la primera adivinanza*/
 if (input1 === "sombra") {
   resultado1.innerHTML = "¡Acertaste!";
 }else{
   resultado1.innerHTML = "Vuelvelo a intentar!";
 }

  /*Compara la segunda adivinanza*/
 if (input2 === "mojado") {
   resultado2.innerHTML = "¡Acertaste!";
 }else{
   resultado2.innerHTML = "Vuelvelo a intentar!";
 }

  /*Compara la tercera adivinanza*/
 if (input3 === "estrella de mar") {
   resultado3.innerHTML = "¡Acertaste!";
 }else{
   resultado3.innerHTML = "Vuelvelo a intentar!";
 }
  /*Compara la cuarta adivinanza*/
 if (input4 === "radio") {
   resultado4.innerHTML = "¡Acertaste!";
 }else{
   resultado4.innerHTML = "Vuelvelo a intentar!";
 }

}

$(document).ready(function() {
  console.log("document ready");
  $(document).on('click', '.boton-movil', function() {
    if ($("li").hasClass("menu-listitem")) {
      console.log("true");
      $(".menu-listitem").slideDown("slow").addClass("menu-listMovil").removeClass("menu-listitem");
    } else {
      console.log("false");
      $(".menu-listMovil").slideUp("slow").addClass("menu-listitem");
      //$(".menu-listitem").removeClass("menu-listMovil");
    };

    console.log("click");
    $(window).on("resize", function() {
      if ($(window).width() > 500) {
        console.log("pantalla chica");
        $("li").css('display', '').removeClass("menu-listMovil");
      }
    }).resize();
  });

});
