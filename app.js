$(document).ready(function(){
  /*  $('div').mouseenter(function(){
        $(this).animate({
            height: '+=20px'
        }); 
    });
   $('div').mouseleave(function(){
        $(this).animate({
            height: '-=20px'
        }); 
    }); */

    $("#black").click(function(){
        $(this).hide('slow');
});

    $('#blue').click(function(){
        $(this).fadeOut(2000);
    });

    $('#pink').slideDown('slow');

    $('#green').mouseenter(function(){
        $(this).fadeTo('fast',1); // Must use opacity in css file for this function to work.
    })

 $('#green').mouseleave(function(){
        $(this).fadeTo('fast',0.5); // Must use opacity in css file for this function to work.
    })

    $("#btn").click(function(){
        $('#black').toggle();
    })

});
