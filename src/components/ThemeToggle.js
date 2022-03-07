import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default class ThemeToggle extends Component {
    static contextType = ThemeContext;
  render() {
      const {toggle} = this.context;
    return (
        <button onClick={toggle}>toggle the theme</button>
    )
  }
}
