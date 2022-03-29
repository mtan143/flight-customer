import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';

Contact.propTypes = {
    
};

function Contact(props) {
    const handleSubmit =(values)=> {
        console.log('Form Submit: ', values);
    }
    return (
        <div>
            <ContactForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Contact;