import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employerData}) => {
  const employers = employerData.map(employer => {
    return (
      <EmployeesListItem {...employer}/>
    );
  });

  return (
    <ul className="app-list list-group">
      {employers}
    </ul>
  );
}

export default EmployeesList;