$(document).ready(function() {
    // Show the contact form when the contact icon is clicked
    $('#contact-icon').click(function() {
      $('#contact-form').toggleClass('hidden');
    });
  
    // Submit form using AJAX
    $('#contact-form').submit(function(e) {
      e.preventDefault(); // Prevent the default form submission behavior
  
      //AJAX contact logic for submissionSubmit
      // ...
    });
  });
  