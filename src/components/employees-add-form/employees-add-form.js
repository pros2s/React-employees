import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      salary: ''
    };
  }

  onChangeValue = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, surname, salary } = this.state;
    if (name && surname && salary) this.props.onAdd(this.state.name, this.state.surname, this.state.salary);

    this.setState({
      name: '',
      surname: '',
      salary: ''
    });
  }

  render() {
    const { name, surname, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name='name'
            onChange={this.onChangeValue}
            value={name}/>
          <input type="text"
            className="form-control new-post-label"
            placeholder="Какая у него фамилия?"
            name='surname'
            onChange={this.onChangeValue}
            value={surname}/>
          <input type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name='salary'
            onChange={this.onChangeValue}
            value={salary} />

          <button type="submit"
            className="btn btn-outline-light">
              Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;