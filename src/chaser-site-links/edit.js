import './editor.scss';
import { SearchControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

import { useSelect } from '@wordpress/data';
import ReviewElement from './ReviewElement';

function Edit() {
	const [searchTerm, setSearchTerm] = useState('');

	const args = {
		per_page: 1,
		orderby: 'date',
		order: 'desc',
		search: 'bitstarz'
	}

	const { singleReview, isResolving } = useSelect((select) => {
		const records = select('core').getEntityRecords(
			'postType',
			'review',
			args
		);

		const isResolving = !records && select('core/data').isResolving(
			'core',
			'getEntityRecords',
			['postType', 'review', args]
		);

		return {
			singleReview: records ? records[0] : null,
			isResolving: isResolving
		}
	})

	const handleClick = () => {
		console.log('handleing')

		const { excerpt, id, link, title } = singleReview;
		console.log(excerpt, id, link, title);
		console.log('isResolving: ', isResolving)
	}


	return (
		<div>
			<SearchControl
				label="Search review"
				value={searchTerm}
				onChange={(value) => setSearchTerm(value)}
				placeholder="Type to search reviews..."
			/>
			<button onClick={handleClick}>CLICK</button>
			<ReviewElement />
		</div>
	);
}

export default Edit;
