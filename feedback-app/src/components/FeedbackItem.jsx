import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({ item, handleDelete }) {
 
	const [rating, setRating] = useState( item.rating );
	const [text, setText] = useState( item.text );

  return (
		<Card>
				<div className="num-display">{ rating }</div>
				<button className="close" 
					onClick={() => handleDelete( item.id )}>
					<FaTimes color='purple' />
				</button>
				<div className="text-display">{ text }</div>
		</Card>
  )
} 

FeedbackItem.propTypes = {

	item: PropTypes.object.isRequired,

};

export default FeedbackItem;