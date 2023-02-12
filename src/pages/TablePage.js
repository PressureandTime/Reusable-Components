import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 10 },
    { name: 'Blue', color: 'bg-blue-500', score: 20 },
    { name: 'Green', color: 'bg-green-500', score: 30 },
    { name: 'Red', color: 'bg-red-500', score: 40 },
    { name: 'Yellow', color: 'bg-yellow-500', score: 50 },
  ];

  const config = [
    { label: 'Name', render: (fruit) => fruit.name },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    { label: 'Score', render: (fruit) => fruit.score },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
