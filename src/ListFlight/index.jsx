import React from 'react';
import PropTypes from 'prop-types';

import ListPage from './pages/ListPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter,
  } from "react-router-dom";

ListFlight.propTypes = {
    
};

function ListFlight(props) {
    return (
        <div>
            Product Feature
            <Switch>
                <Route path="/products" exact element={ListPage} />
            </Switch>
        </div>
    );
}

export default ListFlight;