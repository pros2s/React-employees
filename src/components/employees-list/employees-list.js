import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employerData, onDelete}) => {
  const employers = employerData.map(employer => {
    const {id, ...employerFields} = employer;
    return (
      <EmployeesListItem
        key={id}
        {...employerFields}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return (
    <ul className="app-list list-group">
      {employers}
    </ul>
  );
}

export default EmployeesList;