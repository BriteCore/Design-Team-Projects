$(function () {

    //Calendar Function
    $('#datetimepicker').datetimepicker({
        stepping: 10,
    });

    //Add Reminder Message to History
    dateReminderCondition = $('#datetimepicker').data("DateTimePicker").date();
    $('#addReminder').on('click', function() {

        reminder = $('#remindMe');
        if ( reminder.val() !== '') {
            dateReminderH = $('#datetimepicker').data("DateTimePicker").date().format('h:mm A');
            dateReminder = $('#datetimepicker').data("DateTimePicker").date().format('dddd, MMMM Do YYYY');
            //console.log($('#datetimepicker').data("DateTimePicker").date().format('dddd, MMMM Do YYYY, h:mm a'));
            $("#messageReminder").append('<div class="w3-container w3-card w3-margin-bottom w3-padding"><p>'+reminder.val()+" <bold>on</bold> "+dateReminder+" at "+dateReminderH+'.</p></div>');

            $("#reminder").append('<div class="w3-container w3-card w3-margin-bottom"><h5 class="w3-opacity"><b>Reminder</b></h5><p>'+reminder.val()+" on "+dateReminder+" at "+dateReminderH+'.</p></div>');
            reminder.val('');
            $('#dateReminder').val('');

        }
    });

    //Toggle Favorite Button Color
    $('#favorite').on('click', function() {
        $(this).toggleClass('w3-text-red');
    });

    /* Floating Button */
    var links = [
        /* Main button */
        {   
            "bgcolor":"#f44336",
            "icon":"+"
        },
        /* Hidden button list */
        {
            "url":"#!reminders",
            "bgcolor":"#3F51B5",
            "color":"white",
            "icon":"<i class='fa fa-file-text'></i>",
            "title": "Reminders"
        },
        {
            "url":"#!contactList",
            "bgcolor":"#3F51B5",
            "color":"white",
            "icon":"<i class='fa fa-users'></i>",
            "title": "Contact List"
        },
        {
            "url":"#!createContact",
            "bgcolor":"#3F51B5",
            "color":"white",
            "icon":"<i class='fa fa-user-plus'></i>",
            "title": "Create Contact"
        },
        {
            "url":"#!dashboard",
            "bgcolor":"#3F51B5",
            "color":"white",
            "icon":"<i class='fa fa-home'></i>",
            "title": "Dashboard"
        },
        {
            "url":"#/!",
            "bgcolor":"#3F51B5",
            "color":"white",
            "icon":"<i class='fa fa-home'></i>",
            "title": "Contact Profile"
        }
    ];
    $('.kc_fab_wrapper').kc_fab(links);
    
      
});