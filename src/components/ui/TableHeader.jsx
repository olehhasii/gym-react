import React from 'react';

const TableHeader = ({ headers }) => {
	return (
		<thead className='bg-green-100'>
			<tr>
				{headers.map((header) => (
					<th className='text-left p-4' key={header}>
						<span>{header}</span>
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
