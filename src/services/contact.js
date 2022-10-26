import emailjs from '@emailjs/browser';

const mailSender = (e, templateParams) => {
    e.preventDefault();

    emailjs.sendForm('service_iwqsu3f', 'template_d0s4lc6', templateParams, 'SMrzCAgEF5PcNX7Jo')

    e.target.reset()
};

export { mailSender }