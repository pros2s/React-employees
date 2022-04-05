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
        { name: 'Anthony', surname: 'Burgess', salary: 25000, increase: false, like: false, id: nextId() },
        { name: 'Jorj', surname: 'Oruell', salary: 25001, increase: false, like: false, id: nextId() },
        { name: 'Fyodor', surname: 'Dostoevsky', salary: 2503, increase: false, like: false, id: nextId() },
        { name: 'Ernest ', surname: 'Hemingway', salary: 25034, increase: false, like: false, id: nextId() }
      ],
      term: ''
    };
  }


  deleteItem = (id) => {
    this.setState(({ employerData }) => ({
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

    this.setState(({ employerData }) => ({
      employerData: [...employerData, newItem]
    }));
  }


  onToggleProp = (id, prop) => {
    this.setState(({ employerData }) => ({
      employerData: employerData.map((item) => (
        item.id === id ? {...item, [prop]: !item[prop]} : item
      ))
    }));
  }


  searchItems = (items, term) => {
    return (term.length === 0) ?
     items :
     items.filter((item) => (
        `${item.name} ${item.surname}`.toLowerCase().includes(term) ||
        String(item.salary).includes(term)
      ));
  }

  onUpdateSearch = (term) => this.setState({term});


  render() {
    const { employerData, term } = this.state;
    const searchedData = this.searchItems(employerData, term);

    const employeesCounter = employerData.length;
    const increasedCounter = employerData.filter((item) => item.increase).length;

    return (
      <div className="app">
        <AppInfo employeesCounter={ employeesCounter }
          increasedCounter={ increasedCounter }/>

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter/>
        </div>

        <EmployeesList
          employerData={ searchedData }
          onDelete={ this.deleteItem }
          onToggleProp={ this.onToggleProp }
        />
        <EmployeesAddForm
          onAdd={ this.addItem }
        />
      </div>
    );
  }
}

export default App;
