import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const employerData = [
    {name: 'Anthony', surname: 'Burgess', salary: 15000, increase: false, id: 1},
    {name: 'Jorj', surname: 'Oruell', salary: 25000, increase: true, id: 2},
    {name: 'Fyodor', surname: 'Dostoevsky', salary: 10000, increase: false, id: 3}
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList employerData={employerData}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
