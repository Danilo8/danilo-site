$(document).ready(function () {
    
    var name_contact;
    var email_contact;
    var subject_contact;
    var massage_contatct;

    $("#name_contact").blur(function () {
        if ($("#name_contact").val() == "") {
            $("#name_contact").css({'border-color':'#FF8888'});
            $("#name_contact").css({ 'background-color':'#d2a3a3'});
            $("#error_name_contact").html("Campo Obrigatório!");
            name_contact = false;
        } else {
            $("#name_contact").css({ 'border': '1px solid #ced4da' });
            $("#name_contact").css({ 'background-color': '#fff' });
            $("#error_name_contact").html("");
            name_contact = true;
        }
    });

    $("#email_contact").blur(function () {
        if ($("#email_contact").val() == "") {
            $("#email_contact").css({'border-color':'#FF8888'});
            $("#email_contact").css({ 'background-color':'#d2a3a3'});
            $("#error_email_contact").html("Campo Obrigatório!");
            email_contact = false;
        } else {
            $("#email_contact").css({ 'border': '1px solid #ced4da' });
            $("#email_contact").css({ 'background-color': '#fff' });
            $("#error_email_contact").html("");
            email_contact = true;
        }
    });

    $("#subject_contact").blur(function () {
        if ($("#subject_contact").val() == "") {
            $("#subject_contact").css({'border-color':'#FF8888'});
            $("#subject_contact").css({ 'background-color':'#d2a3a3'});
            $("#error_subject_contact").html("Campo Obrigatório!");
            subject_contact = false;
        } else {
            $("#subject_contact").css({ 'border': '1px solid #ced4da' });
            $("#subject_contact").css({ 'background-color': '#fff' });
            $("#error_subject_contact").html("");
            subject_contact = true;
        }
    });

    $("#message_contact").blur(function () {
        if ($("#message_contact").val() == "") {
            $("#message_contact").css({'border-color':'#FF8888'});
            $("#message_contact").css({ 'background-color':'#d2a3a3'});
            $("#error_message_contact").html("Campo Obrigatório!");
            message_contact = false;
        } else {
            $("#message_contact").css({ 'border': '1px solid #ced4da' });
            $("#message_contact").css({ 'background-color': '#fff' });
            $("#error_message_contact").html("");
            message_contact = true;
        }
    });
});