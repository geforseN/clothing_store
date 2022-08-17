import './App.css';

import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./routes/home/home.component";


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <Outlet />
    </nav>
  )
}



const App = () => {
 return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
