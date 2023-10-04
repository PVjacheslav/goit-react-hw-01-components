import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import friends from 'data/friends.json';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// function renderApp() {
//   root.render(<App data={friends} />);
// }
// renderApp();
