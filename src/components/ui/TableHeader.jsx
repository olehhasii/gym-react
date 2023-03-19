import React from 'react';

const TableHeader = ({ headers }) => {
	return (
		<thead className='bg-green-100'>
			<tr>
				{headers.map((header) => (
					<th
						className='text-center lg:text-left text-sm lg:text-base p-2 lg:p-4'
						key={header}>
						<span>{header}</span>
					</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
