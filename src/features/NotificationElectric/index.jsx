import React from 'react';
import PropTypes from 'prop-types';
// import ContactForm from '../ContactForm';
import NotificationElectricForm from '../NotificationElectricForm'

NotificationElectric.propTypes = {
    
};

function NotificationElectric(props) {
    const handleSubmit =(values)=> {
        console.log('Form Submit: ', values);
    }
    return (
        <div>
            <NotificationElectricForm onSubmit={handleSubmit} />
        </div>
    );
}

export default NotificationElectric;