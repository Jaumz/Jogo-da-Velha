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
            $(this).addClass("far fa-circle icon").attr('disabled', 'true'); 
            turn = 2;            
        }
        else {    
            $("#screen").text("Jogador 1 joga");
            $(this).addClass("fa fa-times icon"); 
            turn = 1;
        }
    });
    $("#reset").click(function() {
        $(".mark").removeClass("far fa-circle fa fa-times icon").prop('disabled', false);
    });
})