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
        { name: 'Anthony', surname: 'Burgess', salary: 250, increase: false, like: false, id: nextId() },
        { name: 'Jorj', surname: 'Oruell', salary: 2500, increase: false, like: false, id: nextId() },
        { name: 'Fyodor', surname: 'Dostoevsky', salary: 1000, increase: false, like: false, id: nextId() },
        { name: 'Ernest ', surname: 'Hemingway', salary: 750, increase: false, like: false, id: nextId() }
      ],
      term: '',
      filterFlag: 'all'
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

  onUpdateSearch = (term) => this.setState({ term });


  setFilter = (items, flag) => {
    switch (flag) {
      case 'like': return items.filter((item) => ( item.like ));
      case 'increase': return items.filter((item) => ( item.increase ));
      case 'betterThousand': return items.filter((item) => ( item.salary > 1000 ));
      default: return items;
    }
  }

  onClickFilter = (filterFlag) => this.setState({ filterFlag });


  render() {
    const { employerData, term, filterFlag } = this.state;
    const filteredData = this.setFilter(employerData, filterFlag);
    const searchedData = this.searchItems(filteredData, term);

    const employeesCounter = employerData.length;
    const increasedCounter = employerData.filter((item) => item.increase).length;

    return (
      <div className="app">
        <AppInfo employeesCounter={ employeesCounter }
          increasedCounter={ increasedCounter }/>

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filterFlag={filterFlag} onClickFilter={this.onClickFilter}/>
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
