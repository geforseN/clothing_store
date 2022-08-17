import {Route, Routes} from "react-router-dom";
import './App.css';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
 return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
