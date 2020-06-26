$(document).ready(function() {
    $("#contactUsForm").submit(function(e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
               type: "POST",
               url: url,
               data: form.serialize(),
               success: function(data)
               {
                   //alert(data);
               }
        });
    });
});