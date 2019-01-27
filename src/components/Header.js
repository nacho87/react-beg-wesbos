// Stateless Functional Components Example

import React from 'react';

//function Header(props) {
//const Header = (props) => {
// const Header = props => () // in this case is not necessary the return
// const Header = ({tagline}) => ()

const Header = ({tagline}) => (
    <header className="top">
        <h1>
            Catch  
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">the</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{tagline}</span>
        </h3>
    </header>

)


// class Header extends React.Component {
//     render() {
//         return (

//             <header className="top">
//                 <h1>
//                     Catch  
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">the</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// };


export default Header;