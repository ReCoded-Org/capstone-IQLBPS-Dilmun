// Emailjs imports
import emailjs from '@emailjs/browser';

// function for sending emails that takes form event and form input values as arguments
//check the template to know what the inputs name must be because they matter
const mailSender = (e, templateParams) => {
    //to stop the form from reloading the page onSubmit
    e.preventDefault();

    //emailjs method to send the form that takes the form inputs as a third argument
    emailjs.sendForm('service_iwqsu3f', 'template_d0s4lc6', templateParams, 'SMrzCAgEF5PcNX7Jo')

    //reset the form after the submit
    e.target.reset()
};

export { mailSender }