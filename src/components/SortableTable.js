import React from 'react';
import Table from './Table';

function SortableTable(props) {
  const [sortOrder, setSortOrder] = React.useState(null);
  const [sortBy, setSortBy] = React.useState(null);

  const { config, data, keyFn } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTABLE</th>,
    };
  });

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reversedOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reversedOrder;
      } else {
        return (valueA - valueB) * reversedOrder;
      }
    });
  }

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
