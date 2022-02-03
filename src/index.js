import React from 'react';
import ReactDOM from 'react-dom';

// import App from './React-Calendar-Concept/App';

import App from './SideBar-Concept/Components/App';

// import YouTubeForm from './Form-Validation-Concept/YouTubeForm';

const rootElement = document.getElementById('root');

// ReactDOM.render(
//   <React.StrictMode>
//     <YouTubeForm />
//   </React.StrictMode>,
//   rootElement
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);