import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default class BookList extends Component {
    static contextType = ThemeContext;
    
    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme? light : dark;
        return (
            <div style={{background: theme.bg, color:theme.syntax, }}>
                <ul>
                    <li style={{background:theme.ui}}>Losing My Virginity</li>
                    <li style={{background:theme.ui}}>Power of Subconsious Mind</li>
                    <li style={{background:theme.ui}}>Life's Amazing Secret</li>
                </ul>
            </div>
        )
    }
}
