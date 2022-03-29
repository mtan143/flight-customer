import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from '../TodoForm';

ListPage.propTypes = {
    
};

const handleTodoFormSubmit = (values) => {
    console.log('Form submit: ',values);
};

function ListPage(props) {
    return (
        <div>
            <h3>What to do form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
        </div>
    );
}

export default ListPage;