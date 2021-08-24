import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';


const RoutesEmployee = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/"> 
                    <Home />
                </Route>
            </Routes>            
        </BrowserRouter>
    );
}

export default RoutesEmployee;

// export default function Routes() {
    
//     return(
//         <Router>
//             <div>
//                 <nav>
//                     <Link to="/">Home</Link>
                       
//                 </nav>
             
//                     <Route exact path="/" component={Home} />
               
//             </div>
//         </Router>

//     )
// }




