$(function () {
    $("#modal_form").keydown(function(e){
    if (e.which == 9 ) { //keycode for TAB
        e.preventDefault(); //stops the default behavior of moving focus to the back page
        $("#confirm").focus(); //moves focus to your first input button
    }
});
});
