// lightbox

$('.add').on('click', function(){
  $('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
  $('.box').animate({'opacity':'1.00'}, 300, 'linear');  
  $('.backdrop, .box').css('display', 'block');
  $('input').val('');
})

$('.close').on('click', function(){
  $('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
    $('.backdrop, .box').css('display', 'none');
  })
})

$("ul").html("<div class='list-item-container'>" + "<div class='date-container'>" + "1 August" + "</div>" + "<a href='#!' class='delete'>" + "x" + "</a>" + "<li class='person'>" + "<img src='headshot.png' style='width: 64px; height: 64px;' />" + ' ' + "Brice Christian" + "</li>" + "<div class='sub-content' style='display:none'>" + "<li>" + "Position: " + "UI/UX Developer" + "</li>" + "<li>" + "Position: " + "Future Employer: Britecore" + "</li>" + "<li>" + "Phone: " + "713-730-8238" + "</li>" + "<li>" + "Email: " + "bricechristian93@gmail.com" + "</li>" + "<li>" + "Address: " + "Charleston, SC" + "</li>" + "<li>" + "Conversation: " +"Passionate about UI/UX" + "</li>" + "</div>" + "<a href='#!' class='show'>" + "<span class='show'>" + "Show more" + "</span>" + "<span class='show' style='display:none'>" + "Show less" + "</span>" + "</a>" + "</div>")




    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#picture').attr('src', e.target.result).width(64).height(64);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

$('.list-results').on('click', '.image-upload', function(){
 $(this).children("li").children("input").change(function(){
        readURL(this);
    });
});



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

  // $("ul").prepend("<div class='list-item-container'>" + "<div class='date-container'>" + date + ' ' + monthNames[month] + "</div>" + "<a href='#!' class='delete'>" + "x" + "</a>" + "<li class='person'>" + "<img id='picture' src='https://www.aliem.com/wp-content/uploads/Unknown-person-circle.png' style='width: 64px; height: 64px;'/>" + ' ' + name + "</li>" + "<div class='upload-container'>" + "<label class='upload-label' for='files'>" + "</label>" + "<input type='file' accept='image/*' class='upload-button'>" + "</div>" + "<div class='sub-content' style='display:none'>" + "<li>" + position + "</li>" + "<li>" + company + "</li>" + "<li>" + phone + "</li>" + "<li>" + email + "</li>" + "<li>" + address + "</li>" + "<li>" + conversations + "</li>" + "</div>" + "<a href='#!' class='show'>" + "<span class='show'>" + "Show more" + "</span>" + "<span class='show' style='display:none'>" + "Show less" + "</span>" + "</a>" + "<div class='image-upload'>" +  "<label for='file-input'>" + "<img src='https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Natural-Dog-Law-2-To-dogs%2C-energy-is-everything.jpg?itok=Z-ujUOUr'/>" + "</label>" + " <input id='file-input' type='file'/>" + "</div>" + "</div>")
  $("ul").prepend("<div class='list-item-container'>" + "<div class='date-container'>" + date + ' ' + monthNames[month] + "</div>" + "<a href='#!' class='delete'>" + "x" + "</a>" + "<div class='image-upload'>" + "<li class='person'>" +  "<label for='file-input'>" + "<img id='picture' src='https://www.aliem.com/wp-content/uploads/Unknown-person-circle.png' style='width: 64px; height: 64px; border-radius: 50%;'/>" + "</label>" + "<input id='file-input' type='file' accept='image/*'/>" + ' ' + name + "</li>" +  "</div>" + "<div class='sub-content' style='display:none'>" + "<li>" + position + "</li>" + "<li>" + company + "</li>" + "<li>" + phone + "</li>" + "<li>" + email + "</li>" + "<li>" + address + "</li>" + "<li>" + conversations + "</li>" + "</div>" + "<a href='#!' class='show'>" + "<span class='show'>" + "Show more" + "</span>" + "<span class='show' style='display:none'>" + "Show less" + "</span>" + "</a>" + "</div>")
  
  
}

// prepending corresponding name before field value is parsed

$(".btn").on("click", function(event){
  event.preventDefault();

  if($('.position').val().length > 0){
    $('.position').val('Position: ' + $('.position').val());
  } 
  if ($('.company').val().length > 0) {
    $('.company').val('Company: ' + $('.company').val());
  }
  if ($('.phone').val().length > 0) {
    $('.phone').val('Phone: ' + $('.phone').val());
  }
  if ($('.email').val().length > 0) {
    $('.email').val('Email: ' + $('.email').val());
  }
  if ($('.address').val().length > 0) {
    $('.address').val('Address: ' + $('.address').val());
  }
  if ($('.conversations').val().length > 0) {
    $('.conversations').val('Conversation: ' + $('.conversations').val());
  }        


  addItem();
  $('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
    $('.backdrop, .box').css('display', 'none');
  });    
})

$('.list-results').on('click', '.delete', function(){
  $(this).parent().remove();
});

$('.list-results').on('click', '.show', function(){
  $(this).siblings('.sub-content').toggle('slow', function(){  
      $(this).siblings('.show').children('span').toggle();
  });
});


// scroll down
$(document).scroll(function() {
    var y = $(document).scrollTop(),
        plusButton = $(".add-circle");
    if(y >= 450)  {
        plusButton.css({position: "fixed", "top" : "0", "left" : "0"});
    } else {
        plusButton.css("position", "static");
    }
});


$('.arrow').click(function(){
    $('html,body').animate({
        scrollTop: $(".list-results").offset().top - 90},
        'slow');
})

// filter content

        console.log($('.list-results-ul').children('.list-item-container').children());
        // $('#input-filter').on('input', function ($event)
        // {
        //     items.addClass('displayNone').filter(function (item)
        //     {
        //         return $(this).text().toLowerCase().includes($($event.target).val().toLowerCase());
        //     }).removeClass('displayNone');
        // });