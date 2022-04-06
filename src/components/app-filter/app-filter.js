import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { dataFlag: 'all', value: 'Все сотрудники' },
    { dataFlag: 'increase', value: 'Премию получат' },
    { dataFlag: 'like', value: 'На повышение' },
    { dataFlag: 'betterThousand', value: 'З/П больше 1000$' }
  ];

  const buttons = buttonsData.map(({ dataFlag, value }) => {
    const btnCurrentClass = props.filterFlag === dataFlag ? 'btn-light' : 'btn-outline-light';

    return (
        <button type="button"
          className={`btn  ${btnCurrentClass}`}
          key={ dataFlag }
          onClick={() => props.onClickFilter(dataFlag)}>
          { value }
        </button>
      )
  });

  return (
    <div className="btn-group">
      { buttons }
    </div>
  )
}

export default AppFilter;