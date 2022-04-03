import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employerData}) => {
  const employers = employerData.map(employer => {
    const {id, ...employerFields} = employer;
    return (
      <EmployeesListItem key={id} {...employerFields}/>
    );
  });

  return (
    <ul className="app-list list-group">
      {employers}
    </ul>
  );
}

export default EmployeesList;