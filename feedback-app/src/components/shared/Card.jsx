 import React from 'react';
 import PropTypes from 'prop-types';
 
 function Card({ children, reversed }) {
    //return (<div className={`card ${reversed && 'reverse'}`}>
    //  { children }
    //</div>);

    return <div className="card" style={{
      backgroundColor: reversed ? 'rgba(0,0,0,0.4)' : '#fff',
      color: reversed ? '#fff' : '#000',
    }}>{ children }</div>
 }

 Card.defaultProps = {
    
  reversed: false, 

 };

 Card.propTypes = {

  children: PropTypes.node.isRequired, 
  reversed: PropTypes.bool,

 }
 
 export default Card;