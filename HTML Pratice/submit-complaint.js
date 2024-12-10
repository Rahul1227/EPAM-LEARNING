// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the form using its ID or directly by tag
    const form = document.querySelector('form');

    // Add an event listener to intercept the form submission
    form.addEventListener('submit', function (event) {
        // Prevent the default behavior of form submission (reloading or redirecting)
        event.preventDefault();

        // Collect data from the form fields
        const formData = {
            student_name: document.getElementById('name').value,
            roll_no: document.getElementById('rollno').value,
            student_stream: document.getElementById('stream').value,
            hostel_name: document.getElementById('hostel').value,
            complaint_details: document.getElementById('complaint').value
        };

        // Log the collected data to the console (this is where you would handle it)
        console.log('Form data received:', formData);

        // Optionally, you could display the data dynamically on the same page
        displayFormData(formData);
    });

    // Function to display the form data on the page
    function displayFormData(data) {
        // Create a container to display the form data
        const outputContainer = document.createElement('div');
        outputContainer.innerHTML = `
            <h2>Complaint Received</h2>
            <p><strong>Full Name:</strong> ${data.student_name}</p>
            <p><strong>Roll Number:</strong> ${data.roll_no}</p>
            <p><strong>Stream:</strong> ${data.student_stream}</p>
            <p><strong>Hostel Name:</strong> ${data.hostel_name}</p>
            <p><strong>Complaint:</strong> ${data.complaint_details}</p>
        `;

        // Append the output container to the body
        document.body.appendChild(outputContainer);
    }
});
