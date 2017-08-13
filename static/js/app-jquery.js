$(function () {
    $('#datetimepicker').datetimepicker({
        stepping: 10,
    });
    moment().format("ddd, hA");

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

    $('#favorite').on('click', function() {
        $(this).toggleClass('w3-text-red');
    });
});