import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/home';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/"> 
                    <Home />
                </Route>
            </Switch>            
        </BrowserRouter>
    );
}

export default Routes;

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




