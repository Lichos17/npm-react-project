import React from 'react';
import reactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.css';

import { AppRouter } from './routes/AppRouter';


reactDOM.render( <AppRouter />, document.querySelector('#app') )
