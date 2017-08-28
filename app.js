$(function() {
   $(".module").click(function(){
       $(".overlay").show();
       return false;
   });
    $(".saveBtn2").click(function(){
        $(".overlay").hide();
    });
      $(".cancelBtn").click(function(){
        $(".overlay").hide();
    });
      $(".closeBtn").click(function(){
        $(".overlay").hide();
    });
});
 