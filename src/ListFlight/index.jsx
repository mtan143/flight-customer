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
//   import { useMatch } from "@reach/router"
import { useLocation, useMatch } from "react-router-dom";
import { useRouteMatch } from 'react-router'

ListFlight.propTypes = {
    
};

function ListFlight(props) {
    const match = useMatch();
    return (
        <div>
            Product Feature
            <Routes>
                <Route path="/products"  element={<ListPage />} />
            </Routes>
        </div>
    );
}

export default ListFlight;