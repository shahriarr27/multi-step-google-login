// label style script
  $('.form-group .form-control').focusout(function() {
    var text_val = $(this).val();
    if (text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
});

$(document).ready(function() {
  var currentFieldset = 0;
  var fieldsets = $('form#multistepsform fieldset');

  // Display the initial fieldset
  $(fieldsets[currentFieldset]).show();

  $('.next').click(function() {
    if (currentFieldset < fieldsets.length - 1) {
      // Hide the current fieldset
      $(fieldsets[currentFieldset]).hide();

      // Show the next fieldset
      currentFieldset++;
      $(fieldsets[currentFieldset]).show();

      // Update the email in the next fieldset
      if (currentFieldset === 1) {
        var email = $('#email').val();
        $('#input-email').text(email);
      }
    } else {
      // Last step, submit the form
      $('form#multistepsform').submit();
    }
  });

  // Enable Enter key press event
  $('form#multistepsform').on('keyup keypress', function(event) {
    // If Enter key is pressed
    if (event.which === 13) {
      event.preventDefault();

      if (currentFieldset < fieldsets.length - 1) {
        // Hide the current fieldset
        $(fieldsets[currentFieldset]).hide();

        // Show the next fieldset
        currentFieldset++;
        $(fieldsets[currentFieldset]).show();

        // Update the email in the next fieldset
        if (currentFieldset === 1) {
          var email = $('#email').val();
          $('#input-email').text(email);
        }
      } else {
        // Last step, submit the form
        $('form#multistepsform').submit();
      }
    }
  });
});