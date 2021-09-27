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
            $("#screen").text("Jogador 2 joga");
            $(this).addClass("far fa-circle icon").attr('disabled', true); 
            turn = 2;            
        }
        else {    
            $("#screen").text("Jogador 1 joga");
            $(this).addClass("fa fa-times icon").attr('disabled', true); 
            turn = 1;
        }

        if ($("#circle_one").hasClass("far fa-circle") && $("#circle_two").hasClass("far fa-circle") && $("#circle_three").hasClass("far fa-circle")) {
            alert('aaa');
        }

        if ($("#circle_four").hasClass("far fa-circle") && $("#circle_five").hasClass("far fa-circle") && $("#circle_six").hasClass("far fa-circle")) {
            alert('bbb');
        }

        if ($("#circle_seven").hasClass("far fa-circle") && $("#circle_eight").hasClass("far fa-circle") && $("#circle_nine").hasClass("far fa-circle")) {
            alert('ccc');
        }
    });
    $("#reset").click(function() {
        $(".mark").removeClass("far fa-circle fa fa-times icon").prop('disabled', false);
    });
})