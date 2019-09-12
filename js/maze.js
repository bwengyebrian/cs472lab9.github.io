$(function () {
    var start = false;
    var passed;
    $('#start').click(function () {
        start = true;
        passed = true;
    });

    $('.boundary').mouseover(function (e) {
        if (start){
            passed = false;
            $(this).addClass('youlose');
        }

    })
    $('#end').click(function () {
      if(passed){
          alert('You passed')
      }else{
          alert("You failed")
      }
      start = false;
      passed = undefined;
    });
});