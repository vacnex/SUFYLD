$(document).ready(function(){
/* #region  Init */
    var titleheader,number
    $('#tabs-swipe').tabs({ swipeable: false });
    $('select').formSelect();
    $('.modal').modal({onOpenStart: function(){
        $('#iplabelmodal').val(val);
        $( "#chkrequire" ).prop( "checked", chkstatus );
        $('#titlelabelmodal').val($('#title').text());
        if ($('.formtitle').hasClass('center-align')) {
            $('#titlealign').val(2);
        } else if($('.formtitle').hasClass('left-align')){
            $('#titlealign').val(1);
        }
        else if($('.formtitle').hasClass('right-align')){
            $('#titlealign').val(3);
        }else{
            $('#titlealign').val(0);
        }
        titleheader = $( "#title")[0].tagName.toLowerCase()
        if (titleheader == 'h1') {
            $('#titlesize').val(1);
        }else if (titleheader == 'h2') {
            $('#titlesize').val(2);
        }else if (titleheader == 'h3') {
            $('#titlesize').val(3);
        }else if (titleheader == 'h4') {
            $('#titlesize').val(4);
        }else if (titleheader == 'h5') {
            $('#titlesize').val(5);
        }else{
            $('#titlesize').val(0);
        }
        $('#submitlabelmodal').val($('#btnconfig').text());
        $('#chkrdolabelmodal').val(val);
        $( "#chkdefault" ).prop( "checked", chkstatus );
    }});
    $('.select-dropdown').css('cursor', 'pointer')
    $('#slct>div>div').addClass('slctitem');
    $('input.autocomplete').autocomplete({
        data: {
            "red": null,
            "pink": null,
            "purple": null,
            "deep-purple": null,
            "indigo": null,
            "blue": null,
            "light-blue": null,
            "cyan": null,
            "teal": null,
            "green": null,
            "light-green": null,
            "lime": null,
            "yellow": null,
            "amber": null,
            "orange": null,
            "deep-orange": null,
            "brown": null,
            "grey": null,
            "blue-grey": null,
        },
        onAutocomplete: function(val) {
            if (val == 'red') {
                $('#red').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }
            if (val == 'pink') {
                $('#pink').show();
                $("#red,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'purple') {
                $('#purple').show();
                $("#pink,#red,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'deep-purple') {
                $('#deep-purple').show();
                $("#pink,#purple,#red,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'indigo') {
                $('#indigo').show();
                $("#pink,#purple,#deep-purple,#red,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'blue') {
                $('#blue').show();
                $("#pink,#purple,#deep-purple,#indigo,#red,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'light-blue') {
                $('#light-blue').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#red,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'teal') {
                $('#teal').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#red,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'cyan') {
                $('#cyan').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#red,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'green') {
                $('#green').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#red,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'light-green') {
                $('#light-green').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#red,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'lime') {
                $('#lime').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#red,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'yellow') {
                $('#yellow').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#red,#lime,#amber,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'amber') {
                $('#amber').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#red,#red,#orange,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'orange') {
                $('#orange').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#red,#deep-orange,#brown,#grey,#blue-grey").hide();
            }if (val == 'deep-orange') {
                $('#deep-orange').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#red,#brown,#grey,#blue-grey").hide();
            }
            if (val == 'brown') {
                $('#brown').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#red,#grey,#blue-grey").hide();
            }
            if (val == 'grey') {
                $('#grey').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#red,#blue-grey").hide();
            }
            if (val == 'blue-grey') {
                $('#blue-grey').show();
                $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#red").hide();
            }
        },
    
    });
/* #endregion */

/* #region  Tab component effect */
    $('.itm').click(function (e) { 
        $('.itm').removeClass('btn blue btn-flat').addClass('btn-flat');
        $(this).addClass('btn blue').removeClass('btn-flat');
    });
    $('#ipfieldtab').on('click', function () {
        $('#chkrdo').fadeOut(800).hide();
        $('#slct').fadeOut(800).hide();
        $('#inputfiled').fadeIn(800);
    });
    $('#chkrdotab').on('click', function () {
        $('#inputfiled').fadeOut(800).hide();
        $('#slct').fadeOut(800).hide();
        $('#chkrdo').fadeIn(800);
    });
    $('#selecttab').on('click', function () {
        $('#chkrdo').fadeOut(800).hide();
        $('#inputfiled').fadeOut(800).hide();
        $('#slct').fadeIn(800);
    });
/* #endregion */

/* #region  title modal */
var cls,titlesize,titlealign,titlelabelmodal
$('#autocomplete-input').on('keyup',function (e) { 
    if ($('#autocomplete-input').val()== '') {
        $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#red,#blue-grey").show();
    }
});
$('#red>div, #pink>div, #purple>div, #deep-purple>div, #indigo>div, #blue>div, #light-blue>div, #cyan>div, #teal>div, #green>div, #light-green>div, #lime>div, #yellow>div, #amber>div, #orange>div, #deep-orange>div, #brown>div, #grey>div, #blue-grey>div, .bwt>div').each(function (i, el) {
    $(el).addClass('color-select');
});
$('#red>div, #pink>div, #purple>div, #deep-purple>div, #indigo>div, #blue>div, #light-blue>div, #cyan>div, #teal>div, #green>div, #light-green>div, #lime>div, #yellow>div, #amber>div, #orange>div, #deep-orange>div, #brown>div, #grey>div, #blue-grey>div, .bwt>div').on('click', function () {
    cls = $(this).prop('class').replace('color-select','')
    $('#autocomplete-input').val(cls);
});
$('#titlesize, #titlealign').change(function(){
    titlesize= $('#titlesize').val();
    titlealign = $('#titlealign').val();       
});
$('#titlemodalupdate').on('click', function () {
    $('#title').removeClass();
    titlelabelmodal = $('#titlelabelmodal').val();
    if (cls == null) {
        var tempcls = $('#autocomplete-input').val()
        var spl = tempcls.trim().split(/(\s+)/);
        var newspl = spl.filter(function(v){return v!==' '});
        var textcolor = newspl[0]+'-text '
        var textlighten = 'text-'+newspl[1]
        var newcls = textcolor+textlighten
    }
    else{
        var spl = cls.trim().split(/(\s+)/);
        var newspl = spl.filter(function(v){return v!==' '});
        var textcolor = newspl[0]+'-text '
        var textlighten = 'text-'+newspl[1]
        var newcls = textcolor+textlighten
    }
    
    if (!newspl[0] || !newspl[1]) {
        $('#title').removeClass();
    }else{
        $('#title').addClass(newcls);
    }if(newspl.length == 1){
        $('#title').addClass(newspl[0]+'-text ');
    }
    if(newspl[0]=='black'){
        $('#title').removeClass();
    }if(newspl[0]=='white'){
        alert('test')
        $('#title').addClass('white-text');
    }
    $('#title').text(titlelabelmodal);
    if (titlealign == 1) {
        $('.formtitle').removeClass('center-align right-align').addClass('left-align');
    }else if (titlealign == 2) {
        $('.formtitle').removeClass('left-align right-align').addClass('center-align');
    }else if (titlealign == 3) {
        $('.formtitle').removeClass('center-align left-align').addClass('right-align');
    }
    var currenttitle = $('#title').text();
    
    var currentclass = $('#title').prop('class')
    console.log(currenttitle,currentclass)
    if (titlesize == 1) {
        $('#newsize').html('<h1 id="title" class="'+currentclass+'" >'+currenttitle+'</h1>');
    }else if (titlesize == 2) {
        $('#newsize').html('<h2 id="title" class="'+currentclass+'" >'+currenttitle+'</h2>');
    }else if (titlesize == 3) {
        $('#newsize').html('<h3 id="title" class="'+currentclass+'" >'+currenttitle+'</h3>');
    }else if (titlesize == 4) {
        $('#newsize').html('<h4 id="title" class="'+currentclass+'" >'+currenttitle+'</h4>');
    }else if (titlesize == 5) {
        $('#newsize').html('<h5 id="title" class="'+currentclass+'" >'+currenttitle+'</h5>');
    }

});
/* #endregion */

/* #region  submit modal */
    $('#submitmodalupdate').on('click', function () {
        $('#btnconfig').text($('#submitlabelmodal').val());
    });
/* #endregion */

/* #region input text Modal */
    var currentid = '#'
    var iptextchild = '#'
    var labeltextchild = '#'
    var val = ''
    var chkstatus
    $('.previewform').on('click','.current', function () {
        currentid = '#'
        iptextchild = '#'
        labeltextchild = '#'
        type = $(this).children("input").prop('type')
        currentid += $(this).attr('id');
        iptextchild += $(this).children("input").attr('id')
        val = $(this).children("label").text()
        chkstatus = $(this).children("input").prop('required')
        labeltextchild += $(this).children("label").attr('id')
    });
    $('#textmodalupdate').on('click', function () {
        console.log(currentid)
        var label = $('#iplabelmodal').val();
        var required = $('#chkrequire').prop('checked')

        if (label == '') {
            $(labeltextchild).text('Default label');
        } else{
            $(labeltextchild).text(label);
        }
        if (required == true) {
            $(iptextchild).prop('required',true);
        }
        else{
            $(iptextchild).removeAttr('required');
        }
    });
    $('#textmodaldelete').on('click', function () {
        $(currentid).remove();
    });
/* #endregion */

/* #region  checkbox - radio modal */
    $('.previewform').on('click','.chkrdocurrent', function () {
        currentid = '#'
        currentid += $(this).attr('id');
        val = $(this).children("label").children("span").text()
        chkstatus = $(this).children("label").children("input").prop('checked')
    });
    $('#chkrdomodalupdate').on('click', function () {
        var chkrdolabelmodal = $('#chkrdolabelmodal').val();
        var chked = $('#chkdefault').prop('checked')
        $(currentid).children("label").children("span").text(chkrdolabelmodal);
        if (chked == true) {
            $(currentid).children("label").children("input").prop('checked',true)
        }else{
            $(currentid).removeAttr('checked');
        }
    });
    $('#chkrdomodaldelete').on('click', function () {
        $(currentid).remove();
    });
/* #endregion */

/* #region  inputfiled  */
    $('#ipfieldTemp').on('click', function () {
        number = $('.previewform li').length + 1
        $('.previewform').append('<li id="ip'+number+'" class="current input-field modal-trigger" href="#textmodal"><input id="defalttext'+number+'" type="text" class="validate"><label id="defalttextlabel'+number+'" for="defalttext'+number+'">Default label</label></li>');
    });
    $('#ipemailTemp').on('click', function () {
        number = $('.previewform li').length + 1
        $('.previewform').append('<li id="ip'+number+'" class="current input-field modal-trigger" href="#textmodal"><input id="defaltemail'+number+'" type="email" class="validate"><label id="defaltemaillabel'+number+'" for="defaltemail'+number+'">Default email label</label></li>');
    });
    $('#txtareaTemp').on('click', function () {
        number = $('.previewform li').length + 1
        $('.previewform').append('<li id="ip'+number+'" class="current input-field modal-trigger" href="#textmodal"><textarea id="txtarea'+number+'" type="email" class="validate materialize-textarea"></textarea><label id="txtareadefaultlabel'+number+'" for="txtarea'+number+'">Default text area label</label></li>');
    });
/* #endregion */
/* #region  checkbox - radio */
    $('#chkstyle1').on('click', function () {
        number = $('.previewform li').length + 1
        $('.previewform').append('<li id="ip'+number+'" class="chkrdocurrent modal-trigger" href="#chkrdomodal"><label><input name="group1" id="chk'+number+'" type="checkbox" disabled /><span>Checkbox style 1</span></label></li>');
    });
    $('#chkstyle2').on('click', function () {
        number = $('.previewform li').length + 1
        $('.previewform').append('<li id="ip'+number+'" class="chkrdocurrent modal-trigger" href="#chkrdomodal"><label><input name="group1" class="filled-in" id="chk'+number+'" type="checkbox" disabled /><span>Checkbox style 2</span></label></li>');
    });
    $('#rdostyle1').on('click', function () {
        number = $('.previewform li').length + 1
        $('.previewform').append('<li id="ip'+number+'" class="chkrdocurrent modal-trigger" href="#chkrdomodal"><label><input name="group1" id="rdo'+number+'" type="radio" disabled /><span>Radio style 1</span></label></li>');
    });
    $('#rdostyle2').on('click', function () {
        number = $('.previewform li').length + 1
        $('.previewform').append('<li id="ip'+number+'" class="chkrdocurrent modal-trigger" href="#chkrdomodal"><label><input name="group1" class="with-gap" id="rdo'+number+'" type="radio" disabled /><span>Radio style 2</span></label></li>');
    });
 /* #endregion */
    $('#slct').on('click', function () {
        //alert('test')
        number = $('.previewform li').length + 1
        $('.previewform').append('<li class="input-field"><select ><option value="" disabled selected>Choose your option</option><option value="1">Option 1</option><option value="2">Option 2</option><option value="3">Option 3</option></select><label>Select label</label></li>').ready(function () {
            $('select').formSelect();
            $('.select-dropdown').css('cursor', 'pointer')

        });
    });
});
