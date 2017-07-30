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

// $('.col-S-1daynum').mouseenter(function(){
//   $(this).on('click', function(){
//     console.log($(this).children('span').text())
//     $(this).featherlight(
//       "<div class='col-L-12 form-container'><form><div class='form-group'><label for='Name'>Name</label><input type='text' class='form-control' placeholder='Name'></div><div class='form-group'><label for='Position'>Position</label><input type='text' class='form-control' placeholder='Position'></div><div class='form-group'><label for='Company'>Company</label><input type='text' class='form-control' placeholder='Company'></div><div class='form-group'><label for='Phone Number'>Phone Number</label><input type='text' class='form-control' placeholder='Phone Number'></div><div class='form-group'><label for='Email'>Email Address</label><input type='email' class='form-control' placeholder='Email'></div><div class='form-group'><label for='Address'>Address</label><input type='text' class='form-control' placeholder='Address'></div><div class='form-group'><label for='History of Conversations'>History of Conversations</label><textarea type='text' class='form-control' placeholder='History of Conversations'></textarea></div><div class='form-group'><label for='Picture Upload'>Picture Upload</label><input type='file' id='inputFile'></div><button type='submit' class='btn btn-default'>Submit</button></form></div>",{type:{html: true}});
//   })
// })

$('.col-S-1daynum').on('click', function(){
   $(this).featherlight(
      "<div class='col-L-12 form-container'><form><div class='form-group'><label for='Name'>Name</label><input type='text' class='form-control' placeholder='Name'></div><div class='form-group'><label for='Position'>Position</label><input type='text' class='form-control' placeholder='Position'></div><div class='form-group'><label for='Company'>Company</label><input type='text' class='form-control' placeholder='Company'></div><div class='form-group'><label for='Phone Number'>Phone Number</label><input type='text' class='form-control' placeholder='Phone Number'></div><div class='form-group'><label for='Email'>Email Address</label><input type='email' class='form-control' placeholder='Email'></div><div class='form-group'><label for='Address'>Address</label><input type='text' class='form-control' placeholder='Address'></div><div class='form-group'><label for='Conversation'>Conversation</label><textarea type='text' class='form-control' placeholder='Conversations'></textarea></div><div class='form-group'><label for='Picture Upload'>Picture Upload</label><input type='file' id='inputFile'></div><button type='submit' class='btn btn-default'>Submit</button></form></div>",{type:{html: true}});
})




// Form post 

/*/ OPTION A: 
Doesn't make use of Backend.
http://jqueryui.com/dialog/#modal-form /

*/

