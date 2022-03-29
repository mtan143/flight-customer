import React from 'react';
import PropTypes from 'prop-types';
// import ContactForm from '../ContactForm';
import NotificationTicketForm from '../NotificationTicketForm'

NotificationTicket.propTypes = {
    
};

function NotificationTicket(props) {
    const handleSubmit =(values)=> {
        console.log('Form Submit: ', values);
    }
    return (
        <div>
            <NotificationTicketForm onSubmit={handleSubmit} />
        </div>
    );
}

export default NotificationTicket;