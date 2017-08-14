$( ".cont3Item" ).mouseover(function() {
  //$( ".cont3ItemHover" ).show();
  $(this).find('.cont3ItemHover').css("visibility", "visible");
});

$( ".cont3Item" ).mouseleave(function() {
  //$( ".cont3ItemHover" ).show();
  $(this).find('.cont3ItemHover').css("visibility", "hidden");
});

$("#logo-cabeza").addClass("abajo").show();
$(".tituloBlanco").addClass("derTOizq");

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if(scroll >= 900){
        //console.log('a');
        $("#pidelo").removeClass("pideloFijo").addClass("pideloFix float");
    } else {
        //console.log('a');
        $("#pidelo").removeClass("pideloFix").addClass("pideloFijo");
    }

    if(scroll >= 200){ $(".tit1").addClass("derTOizq").show(); $(".txt1").addClass("zoomIN14").show(); }
    if(scroll >= 400){ $(".tit2").addClass("derTOizq").show(); $(".txt2").addClass("zoomIN14").show(); }
    if(scroll >= 600){ $(".tit3").addClass("derTOizq").show(); $(".txt3").addClass("zoomIN14").show(); }
    if(scroll >= 1000){ $("#cont3Titulo").addClass("derTOizq").show(); }
    if(scroll >= 1150){ $("#cont3ItemTxt:nth-child(1)").addClass("derTOizq").show(); }
    if(scroll >= 1200){ $("#cont3ItemTxt:nth-child(2)").addClass("derTOizq").show(); }
    if(scroll >= 1250){ $("#cont3ItemTxt:nth-child(3)").addClass("derTOizq").show(); }
    if(scroll >= 1300){ $("#cont3ItemTxt:nth-child(4)").addClass("derTOizq").show(); }
    if(scroll >= 1350){ $("#cont3ItemTxt:nth-child(5)").addClass("derTOizq").show(); }
    if(scroll >= 1400){ $("#cont3ItemTxt:nth-child(6)").addClass("derTOizq").show(); }
    if(scroll >= 1450){ $("#cont3ItemTxt:nth-child(7)").addClass("derTOizq").show(); }
    if(scroll >= 1500){ $("#cont3ItemTxt:nth-child(8)").addClass("derTOizq").show(); }
    if(scroll >= 1550){ $("#cont3ItemTxt:nth-child(9)").addClass("derTOizq").show(); }
    if(scroll >= 1600){ $("#cont3ItemTxt:nth-child(10)").addClass("derTOizq").show(); }
    if(scroll >= 1650){ $("#cont3ItemTxt:nth-child(11)").addClass("derTOizq").show(); }
    if(scroll >= 2900){ $("#mazorca").addClass("up").show(); }

});


$( "#btnEnviar" ).click(function() {

    var email = $("#email").val();
    var movil = $("#movil").val();
    var comentario = $("#comentario").val();

    $.confirm({
        content: function () {
            var self = this;
            return $.ajax({ url: 'contacto.php', dataType: 'json', method: 'post', data: { email:email, movil:movil, comentario:comentario } })
            .done(function (response) {
                self.setTitle(response[2]);
                self.setContent(response[1]);
                self.setType(response[0]);
            }).fail(function(){
                self.setContent('Algo salio mal, intentelo nuevamente o por favor envienos un mensaje a clientemed@diezequis.com.');
            });
        }
    });
});
