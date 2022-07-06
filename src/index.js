import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ORIGINAL 
// Practicing refactoring...

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
 
//     <App />
  
// );


// Doesn't fail tests but DOM is not rendered properly using this convention. I am going to change things around so it works... 

ReactDOM.render(<App />, document.querySelector(".container"));

// changed the .getElementById() to querySelector() gave a div a class of .container in index.html and targeted it to render.

// While the 2nd method throws no errors it is not properly rendering the button I Will attempt a 3rd method combining the two.


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
 
//     <App />
  
// );

// Conclusion is that method 1 is the current convention, method 2 was the recent way I was taught. 3rd Method failed.