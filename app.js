$(document).ready(function() {
  // Opening overlay
  $("#open").click(function() {
    $("#overlay").css("left", "0px");
  });
  // Closing overlay
  $("#close").click(function() {
    $("#overlay").css("left", "-400px");
  });

  // Submitting text input value to the h1 container
  $("#form").submit(function(e) {
    e.preventDefault();
    let inputValue = $("#wordup").val();

    //closes the overlay bar with enter submit
    $("#overlay").css("left", "-400px");

    // appends text and makes text responsive in h1 container
    $("span").text(inputValue);
    $("h1").textfill({
      maxFontPixels: 1000
    });
  });

  // var fontSize = 160;
  // setInterval( function() {
  //   // Height of the window and scroll area.
  //   var windowHeight = window.innerHeight;
  //   var scrollHeight = $('#wordup').prop('scrollHeight');
  //   console.log(windowHeight);
  //   console.log(scrollHeight);
  //   // Boolean vars to see if the text is too big or too small.
  //   var textTooBig = scrollHeight >= windowHeight - 30;
  //   var textTooSmall = scrollHeight <= windowHeight - 50;
  //   // If the text is too big, shrink it.
  //   if (textTooBig) {
  //     console.log('too big');
  //     fontSize -= 5;
  //     $('#wordup').css('font-size', fontSize);
  //     var newScrollHeight = $('#wordup').prop('scrollHeight');
  //     $('#wordup').height(0).height(newScrollHeight);
  //   }
  //   // If the text is too small, increase it.
  //   if (textTooSmall) {
  //     console.log('too small');
  //     fontSize += 5;
  //     $('#wordup').css('font-size', fontSize);
  //     var newScrollHeight = $('#wordup').prop('scrollHeight');
  //     $('#wordup').height(0).height(newScrollHeight);
  //   }
  // }, 100);
});
