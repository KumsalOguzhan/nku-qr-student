import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signIn";

import Lecture from "./pages/lecture"

import Qr from "./pages/qr/qr";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" index element={<SignIn />} />

          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/qr" element={<Qr />} />

            <Route path="/lecture" element={<Outlet />}>
              <Route index element={<Lecture />} />
            </Route>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
