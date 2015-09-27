jQuery(document).ready(function ($) {
    'use strict';
    $("#lb_discussion_url").after($("#lb_time_required"));
    $("#lb_time_required").after($('#lb_custom_input1'));       
    $('#lb_custom_input1').after($('#lb_custom_input2'));
});
