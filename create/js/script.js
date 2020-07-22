$(document).ready(function(){
/* #region  Init */
    var titleheader
    $('#tabs-swipe').tabs({ swipeable: false });
    $('select').formSelect();
    $('.modal').modal({onOpenStart: function(){
        $('#iplabelmodal').val(val);
        $( "#chkrequire" ).prop( "checked", chkstatus );
        $('#titlelabelmodal').val($('.formtitle>a>h5').text());
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
    }});
    $('.select-dropdown').css('cursor', 'pointer');
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
$('#autocomplete-input').on('keyup',function (e) { 
    if ($('#autocomplete-input').val()== '') {
        $("#pink,#purple,#deep-purple,#indigo,#blue,#light-blue,#cyan,#teal,#green,#light-green,#lime,#yellow,#amber,#orange,#deep-orange,#brown,#grey,#red,#blue-grey").show();
    }
});
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

/* #region input text Modal */
    var currentid = '#'
    var iptextchild = '#'
    var labeltextchild = '#'
    var type = ''
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

/* #region  inputfiled  */
    var number
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
        $('.previewform').append('<div id="ip'+number+'" class="current input-field modal-trigger" href="#textmodal"><textarea id="txtarea'+number+'" type="email" class="validate materialize-textarea"></textarea><label id="txtareadefaultlabel'+number+'" for="txtarea'+number+'">Default text area label</label></div>');
    });
/* #endregion */
/* #region  checkbox - radio */
    $('#chkstyle1').on('click', function () {
        
    });
    $('#chkstyle2').on('click', function () {
        
    });
    $('#rdostyle1').on('click', function () {
        
    });
    $('#rdostyle2').on('click', function () {
        
    });
 /* #endregion */
    var cls,titlesie,titlealign,titlelabelmodal
    $('#red>div, #pink>div, #purple>div, #deep-purple>div, #indigo>div, #blue>div, #light-blue>div, #cyan>div, #teal>div, #green>div, #light-green>div, #lime>div, #yellow>div, #amber>div, #orange>div, #deep-orange>div, #brown>div, #grey>div, #blue-grey>div, #bwt>div').each(function (i, el) {
        $(el).addClass('color-select');
    });
    $('#red>div, #pink>div, #purple>div, #deep-purple>div, #indigo>div, #blue>div, #light-blue>div, #cyan>div, #teal>div, #green>div, #light-green>div, #lime>div, #yellow>div, #amber>div, #orange>div, #deep-orange>div, #brown>div, #grey>div, #blue-grey>div, #bwt>div').on('click', function () {
        cls = $(this).prop('class').replace('color-select','')
        $('#autocomplete-input').val(cls);
    });
    $('#titlesize, #titlealign').change(function(){
        titlesie= $('#titlesize').val();
        titlealign = $('#titlealign').val();       
    });
    $('#titlemodalupdate').on('click', function () {
        titlelabelmodal = $('#titlelabelmodal').val();
        $('.formtitle').html('');
        console.log(cls,titlesie,titlealign,titlelabelmodal)

    });
});
