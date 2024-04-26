$(document).ready(function() {
    // Show the contact form when the contact icon is clicked
    $('#contact-icon').click(function() {
        $('#contact-form').toggleClass('hidden');
        $('.container').toggleClass('expanded'); // Toggle the 'expanded' class on the container
    });
    

    // Submit form using AJAX
    $('#contact-form').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        // Send AJAX request to server-side script
        $.ajax({
            type: 'POST',
            url: '/personalPages/contact.php', // Server-side script URL
            data: formData,
            success: function(response) {
                // Handle success response (e.g., show success message)
                alert('Message sent successfully!');
                $('#contact-form')[0].reset(); // Reset form
                $('#contact-form').addClass('hidden'); // Hide form
            },
            error: function(xhr, status, error) {
                // Handle error (e.g., show error message)
                alert('Error sending message: ' + error);
            }
        });
    });
});
