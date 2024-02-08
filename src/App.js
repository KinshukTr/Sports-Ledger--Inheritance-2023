import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import Signup from './Signup.js';
import Feature1 from './Feature1.js';
import Feature2 from './Feature2.js';
const App = () =>
 {
return (
    <>
<BrowserRouter>
<Routes>
<Route  exact path="/" element ={<HomePage/>}></Route>
<Route exact path="/login" element ={<LoginPage/>}></Route>
<Route exact path="/signup" element ={<Signup/>}></Route>
<Route exact path="/stats" element ={<Feature1/>}></Route>
<Route exact path="/docverify" element ={<Feature2/>}></Route>

</Routes>
</BrowserRouter>

</>
); 
}
export default App;