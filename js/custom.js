 /*window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/
$(document).ready(function() {
    var turn = 1;
    $(".mark").click(function() {
        if(turn == 1) {
            $("#player").text("Sua vez Jogador 2:");
            $(this).addClass("far fa-circle icon").attr('disabled', true); 
            turn = 2;            
        }
        else {    
            $("#player").text("Sua vez Jogador 1:");
            $(this).addClass("fa fa-times icon").attr('disabled', true); 
            turn = 1;
        }

        // Validação horizontal de circulos //
        if ($("#circle_one").hasClass("far fa-circle") && $("#circle_two").hasClass("far fa-circle") && $("#circle_three").hasClass("far fa-circle")) {
            $("#modal-win").modal('show');
            auto_reset();
        }

        if ($("#circle_four").hasClass("far fa-circle") && $("#circle_five").hasClass("far fa-circle") && $("#circle_six").hasClass("far fa-circle")) {
            $("#modal-win").modal('show');
            auto_reset();
        }

        if ($("#circle_seven").hasClass("far fa-circle") && $("#circle_eight").hasClass("far fa-circle") && $("#circle_nine").hasClass("far fa-circle")) {
            $("#modal-win").modal('show');
            auto_reset();
        }

        // Validação vertical de circulos //
        if ($("#circle_one").hasClass("far fa-circle") && $("#circle_four").hasClass("far fa-circle") && $("#circle_seven").hasClass("far fa-circle")) {
            $("#modal-win").modal('show');
            auto_reset();
        }

        if ($("#circle_two").hasClass("far fa-circle") && $("#circle_five").hasClass("far fa-circle") && $("#circle_eight").hasClass("far fa-circle")) {
            $("#modal-win").modal('show');
            auto_reset();
        }

        if ($("#circle_three").hasClass("far fa-circle") && $("#circle_six").hasClass("far fa-circle") && $("#circle_nine").hasClass("far fa-circle")) {
            $("#modal-win").modal('show');
            auto_reset();
        }

        // Validação diagonal de circulos //
        if ($("#circle_one").hasClass("far fa-circle") && $("#circle_five").hasClass("far fa-circle") && $("#circle_nine").hasClass("far fa-circle")) {
            $("#modal-win").modal('show');
            auto_reset();
        }

        if ($("#circle_three").hasClass("far fa-circle") && $("#circle_five").hasClass("far fa-circle") && $("#circle_seven").hasClass("far fa-circle")) {
            $("#modal-win").modal('show');
            auto_reset();
        }

        // Validação horizontal de X //
        if ($("#circle_one").hasClass("fa fa-times") && $("#circle_two").hasClass("fa fa-times") && $("#circle_three").hasClass("fa fa-times")) {
            alert('Jogador 2 venceu!');
            auto_reset();
        }

        if ($("#circle_four").hasClass("fa fa-times") && $("#circle_five").hasClass("fa fa-times") && $("#circle_six").hasClass("fa fa-times")) {
            alert('Jogador 2 venceu!');
            auto_reset();
        }

        if ($("#circle_seven").hasClass("fa fa-times") && $("#circle_eight").hasClass("fa fa-times") && $("#circle_nine").hasClass("fa fa-times")) {
            alert('Jogador 2 venceu!');
            auto_reset();
        }

        // Validação vertical de X //
        if ($("#circle_one").hasClass("fa fa-times") && $("#circle_four").hasClass("fa fa-times") && $("#circle_seven").hasClass("fa fa-times")) {
            alert('Jogador 2 venceu!');
            auto_reset();
        }

        if ($("#circle_two").hasClass("fa fa-times") && $("#circle_five").hasClass("fa fa-times") && $("#circle_eight").hasClass("fa fa-times")) {
            alert('Jogador 2 venceu!');
            auto_reset();
        }

        if ($("#circle_three").hasClass("fa fa-times") && $("#circle_six").hasClass("fa fa-times") && $("#circle_nine").hasClass("fa fa-times")) {
            alert('Jogador 2 venceu!');
            auto_reset();
        }

        // Validação diagonal de X //
        if ($("#circle_one").hasClass("fa fa-times") && $("#circle_five").hasClass("fa fa-times") && $("#circle_nine").hasClass("fa fa-times")) {
            alert('Jogador 2 venceu!');
            auto_reset();
        }

        if ($("#circle_three").hasClass("fa fa-times") && $("#circle_five").hasClass("fa fa-times") && $("#circle_seven").hasClass("fa fa-times")) {
            alert('Jogador 2 venceu!');
            auto_reset();
        }
    });
 $("#draw").click(function() {
    $("#player").text("Empate! vulgo deu velha!");
    auto_reset();
});
})

 function auto_reset(){
    $(".mark").removeClass("far fa-circle fa fa-times icon").prop('disabled', false);
}