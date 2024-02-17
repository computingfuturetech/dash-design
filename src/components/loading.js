import React from 'react';
import ReactLoading from 'react-loading';
import '../assets/css/loading.css';

export default function Loading() {
  return (
    <div className="loading">
        <ReactLoading delay={1} height={200} width={200} type={"cylon"} color={"#fff"} />
    </div>
  )
}
// const GiveItem = (props) => {
//     return (
//         <section>
//             Give Item
//         </section>
//     );
// };

// const domContainer = document.querySelector('#injected-react-content');
// ReactDOM.render( React.createElement(GiveItem), domContainer );