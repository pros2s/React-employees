import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employerData: [
        {name: 'Anthony', surname: 'Burgess', salary: 15000, increase: false, id: 1},
        {name: 'Jorj', surname: 'Oruell', salary: 25000, increase: true, id: 2},
        {name: 'Fyodor', surname: 'Dostoevsky', salary: 10000, increase: false, id: 3},
        {name: 'Anthony', surname: 'Burgess', salary: 15000, increase: false, id: 4},
        {name: 'Jorj', surname: 'Oruell', salary: 25000, increase: true, id: 5},
        {name: 'Fyodor', surname: 'Dostoevsky', salary: 10000, increase: false, id: 6}
      ]
    };
  }

  deleteItem = (id) => {
    this.setState(({employerData}) => ({
        employerData: employerData.filter(item => item.id !== id)
      }
    )
    // {
    //   const index = employerData.findIndex(item => item.id === id);
    //   const beforeIndex = employerData.slice(0, index);
    //   const afterIndex = employerData.slice(index + 1);

    //   return {
    //     employerData: [...beforeIndex, ...afterIndex]
    //   };
    // }
    );
  }

  render() {
    const { employerData } = this.state;

    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList
          employerData={employerData}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
