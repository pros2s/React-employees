import { Component } from 'react';
import nextId from "react-id-generator";

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
        {name: 'Anthony', surname: 'Burgess', salary: 15000, increase: false, like: false, id: nextId()},
        {name: 'Jorj', surname: 'Oruell', salary: 25000, increase: false, like: false, id: nextId()},
        {name: 'Fyodor', surname: 'Dostoevsky', salary: 10000, increase: false, like: false, id: nextId()},
        {name: 'Anthony', surname: 'Burgess', salary: 15000, increase: false, like: false, id: nextId()},
        {name: 'Jorj', surname: 'Oruell', salary: 25000, increase: false, like: false, id: nextId()},
        {name: 'Fyodor', surname: 'Dostoevsky', salary: 10000, increase: false, like: false, id: nextId()}
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

  addItem = (name, surname, salary) => {
    const newItem = {
      name,
      surname,
      salary,
      id: nextId()
    };

    this.setState(({employerData}) => ({
      employerData: [...employerData, newItem]
    }));
  }

  onToggleProp = (id, prop) => {
    this.setState(({employerData}) => ({
      employerData: employerData.map((item) => (
        item.id === id ? {...item, [prop]: !item[prop]} : item
      ))
    }));
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
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm
          onAdd={this.addItem}
        />
      </div>
    );
  }
}

export default App;
