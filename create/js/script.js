$(document).ready(function(){
    $('#tabs-swipe').tabs({ swipeable: false });
    $('select').formSelect();
    $('.itm').click(function (e) { 
        $('.itm').removeClass('btn waves-effect waves-light').addClass('sa');
        $(this).addClass('btn waves-effect waves-light').removeClass('sa');
    });
    $( ".input-field" ).draggable({ 
        revert: true, 
        helper: "clone" 
    });
    $( ".cbrd" ).draggable({ 
        revert: true, 
        helper: "clone" 
    });
    $( ".ttl" ).draggable({ 
        revert: true, 
        helper: "clone" 
    });
});