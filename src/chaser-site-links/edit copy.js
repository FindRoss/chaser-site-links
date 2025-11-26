import './editor.scss';
import { SearchControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

import { useSelect } from '@wordpress/data';
import ReviewElement from './ReviewElement';

function Edit() {
	const [searchTerm, setSearchTerm] = useState('');

	const reviews = useSelect(
		select => {
			return select('core').getEntityRecords('postType', 'review', { per_page: 5, search: searchTerm });
		},
		[searchTerm]
	);



	const handleClick = () => {
		console.log('handling the click', reviews);
	}

	return (
		<div>
			<SearchControl
				label="Search review"
				value={searchTerm}
				onChange={(value) => setSearchTerm(value)}
				placeholder="Type to search reviews..."
			/>
			<button onClick={handleClick}>ClickME!</button>
			<ReviewElement />
		</div>
	);
}

export default Edit;
