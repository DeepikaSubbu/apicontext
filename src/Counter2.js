import React from 'react';
import { Context1 } from './Context';
import Counter3 from './Counter3';

// class Counter2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   render() {
    // Convert this into Functional Component and check whether Context1.Consumer is working in Functional Component
//     return (
//       <Context1.Consumer>
//         {(getValuesFromProvider) => {
//           return (
//             <>
//               <h3> Counter 2 Component </h3>
//               Initial Value : {getValuesFromProvider.initialValue} <br /> <br />
//               <button onClick={getValuesFromProvider.handleIncrement}>
//                 {' '}
//                 Increment{' '}
//               </button>{' '}
//               &nbsp;
//               <button onClick={getValuesFromProvider.handleDecrement}>
//                 {' '}
//                 Decrement{' '}
//               </button>{' '}
//               &nbsp;
//               <button onClick={getValuesFromProvider.handleReset}>
//                 {' '}
//                 Reset{' '}
//               </button>{' '}
//               &nbsp;
//               <Counter3 />
//             </>
//           );
//         }}
//       </Context1.Consumer>
//     );
//   }
// }

// export default Counter2;


function Counter2() {
    const getValuesFromProvider = React.useContext(Context1);
    return (
      <>
        <h3> Counter 2 Component </h3>
        Initial Value :{getValuesFromProvider.initialValue} <br /> <br />
        <button onClick={getValuesFromProvider.handleIncrement}>
          {' '}
          Increment{' '}
        </button>{' '}
        &nbsp;
        <button onClick={getValuesFromProvider.handleDecrement}>
          {' '}
          Decrement{' '}
        </button>{' '}
        &nbsp;
        <button onClick={getValuesFromProvider.handleReset}>
          {' '}
          Reset{' '}
        </button>{' '}
        &nbsp;
        <Counter3/>
      </>
    );
  }
  
  export default Counter2;
  
