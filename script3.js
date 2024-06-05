document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-container');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const feedbackMessage = document.createElement('div');
        feedbackMessage.textContent = "Your feedback has been successfully sent!";
        feedbackMessage.classList.add('feedback-message');
        form.appendChild(feedbackMessage);

        form.reset();

        setTimeout(function () {
            feedbackMessage.style.display = 'none';
        }, 4000);
    });
});