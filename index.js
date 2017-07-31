// lightbox

$('.add').on('click', function(){
  $('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
  $('.box').animate({'opacity':'1.00'}, 300, 'linear');  
  $('.backdrop, .box').css('display', 'block');
})

$('.close').on('click', function(){
  $('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
    $('.backdrop, .box').css('display', 'none');
  })
})

function addItem (){
  var name = $('.name').val();
  var position = $('.position').val();
  var company =$('.company').val();
  var phone = $('.phone').val();
  var email = $('.email').val();
  var address = $('.address').val();
  var conversations = $('.conversations').val();

  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth();
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  var year = d.getFullYear();

  $("ul").append("<div class='list-item-container'>" + "<div class='date-container'>" + date + ' ' + monthNames[month] + "</div>" + "<a href='#!' class='delete'>" + "x" + "</a>" + "<li class='person'>" + name + "</li>" + "<div class='sub-content' style='display:none'>" + "<li>" + position + "</li>" + "<li>" + company + "</li>" + "<li>" + phone + "</li>" + "<li>" + email + "</li>" + "<li>" + address + "</li>" + "<li>" + conversations + "</li>" + "</div>" + "<div class='show-container'>"+ "<a href='#!'>" + "<p class='show'>" + "Show more" + "</p>" + "<p class='show' style='display:none'>" + "Show less" + "</p>" + "</a>" + "</div>" + "</div>")
}

$(".btn").on("click", function(event){
  event.preventDefault();
  addItem();
  $('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
    $('.backdrop, .box').css('display', 'none');
  });    
})

$('.list-results').on('click', '.delete', function(){
  $(this).parent().remove();
});

$('.list-results').on('click', '.list-item-container', function(){
  $(this).children('.sub-content').toggle('slow', function(){  
      $(this).closest('ul').children('.show').toggle();
  });
});







