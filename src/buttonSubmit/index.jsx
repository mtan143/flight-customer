import React from 'react';
import PropTypes from 'prop-types';

buttonSubmit.propTypes = {
    
};

function buttonSubmit(props) {
    return (
        <div>
            
              <button
                variant="contained"
                class="btn btn-primary"
                type="button"
                style={{ width: "60%", marginLeft: "52%" , boxShadow:"2px 2px 2px 2px #808080" }}
              
              >
                Tìm chuyến bay
              </button>
        </div>
    );
}

export default buttonSubmit;
