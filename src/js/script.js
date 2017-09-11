$(document).ready(function(){

    $('#selectAll').click(function() {
        if($(this).is(':checked')) {
            $('tbody input').attr('checked', true);
        } else {
            $('tbody input').attr('checked', false);
        }
    });

    $('#selectAllPolicies').click(function(){
        if ($(this).is(':checked')) {
            $('.policy-types input').attr('checked', true);
        } else {
            $('.policy-types input').attr('checked', false);
        }
    })

});