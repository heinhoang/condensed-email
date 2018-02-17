import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    faGlobe,
    faEdit,
    faToggleOff,
    faSearch
} from '@fortawesome/fontawesome-free-solid'
import fontawesome from '@fortawesome/fontawesome'
import './scss/style.css';

// Build a Library to Reference Icons Throughout Your App
// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently
fontawesome.library.add(
    faGlobe,
    faEdit,
    faToggleOff,
    faSearch
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
