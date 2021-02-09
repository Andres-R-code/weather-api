import React from 'react';
import ReactDOM from 'react-dom';
import { Weather } from './api';
import './index.css';

const divRoot = document.querySelector("#root");

ReactDOM.render(<Weather />, divRoot);