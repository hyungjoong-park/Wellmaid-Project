
import React, {Component } from 'react';
import logo from './logo.svg';
import Customer from './components/BsnCustomer'
import './App.css';

const customer = {
  'name': '홍길동',
  'birthday': '710426',
  'gender': '남자',
  'job': '대학생'
}

class App extends Component {
  render () {
    return (
          <Customer
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
          />
    );
  }
}

export default App;
