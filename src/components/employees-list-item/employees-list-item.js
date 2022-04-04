import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false
    };
  }

  cookieColor = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }));
  }

  likeStar = () => {
    this.setState(({like}) => ({
      like: !like
    }));
  }

  render() {
    const {name, surname, salary} = this.props;
    const {increase, like} = this.state;

    let classList = 'list-group-item d-flex justify-content-between';
    if (increase) classList += ' increase';
    if (like) classList += ' like';

    return (
      <li className={classList}>
        <span className='list-group-item-label' onClick={this.likeStar}>{name} {surname}</span>
        <input type='text' className='list-group-item-input' defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button type='button'
            className='btn-cookie btn-sm '
            onClick={this.cookieColor}>
            <i className='fas fa-cookie'></i>
          </button>

          <button type='button'
            className='btn-trash btn-sm '>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    )
  }
}

export default EmployeesListItem;