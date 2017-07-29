// open page 
$('.btn-secondary').on('click', function(){
  $('#stuff').css('display', 'block')
  $('#front-page').hide();
})

// hover with "+" button

$('.col-S-1daynum').mouseenter(function(){
  $(this).children('span').hide()
  $(this).children('#add').show()
  $(this).children('#plus').show()
})

$('.col-S-1daynum').mouseleave(function(){
    $(this).children('span').show()
    $(this).children('#add').hide();
    $(this).children('#plus').hide()
})

// "+" click functionality

$('.col-S-1daynum').mouseenter(function(){
  $(this).on('click', function(){
    console.log($(this).children('span').text())
    $('<p>hey</p>').featherlight($content, configuration);
  })
})




// Form post 

/*/ OPTION A: 
Doesn't make use of Backend.
http://jqueryui.com/dialog/#modal-form /

*/

