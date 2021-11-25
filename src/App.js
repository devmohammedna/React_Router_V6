import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import NonAuth from "./components/NonAuth";
import {Admin1, Admin2, Admin3} from "./screens/admin";
import {Employer1,Employer2,Employer3,Employer4} from "./screens/employee";
import {Talent1,Talent2,Talent3} from "./screens/talent";
import Layout from "./components/Layout";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
    const [permation, setPermation] = useState("");
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Home setPermation={setPermation} permation={permation} />} />
        <Route path="/:page/401" element={<NonAuth permation={permation} />} />
        <Route path="/:page/:subPage/401" element={<NonAuth permation={permation} />} />
         <Route
          path="admin"
          element={
            <PrivateRoute permation={permation} permationShouldBe="admin">
              <Layout
                links={["page1", "page2", "page3"]}
                title="Admin"
                permation={permation}
              />
            </PrivateRoute>
          }
        >
          <Route path="page1" element={<Admin1 />} />
          <Route path="page2" element={<Admin2 />} />
          <Route path="page3" element={<Admin3 />} />
        </Route>
        <Route
          path="employer"
          element={
            <Layout
              links={["page1", "page2", "page3", "page4"]}
              title="Employer"
              permation={permation}
            />
          }
        >
          <Route
            path="page1"
            element={
              <PrivateRoute permation={permation} permationShouldBe={"employer"}>
                <Employer1 />
              </PrivateRoute>
            }
          />
          <Route
            path="page2"
            element={
              <PrivateRoute permation={permation} permationShouldBe={"employer"}>
                <Employer2 />
              </PrivateRoute>
            }
          />
          <Route
            path="page3"
            element={
              <PrivateRoute permation={permation} permationShouldBe={"employer"}>
                <Employer3 />
              </PrivateRoute>
            }
          />
          <Route
            path="page4"
            element={
              <PrivateRoute permation={permation} permationShouldBe={["employer", "admin"]}>
                <Employer4 />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="talent"
          element={
            <PrivateRoute permation={permation} permationShouldBe="talent">
              <Layout links={["page1", "page2", "page3"]} title="Telent" />
            </PrivateRoute>
          }
          permation={permation}
        >
          <Route path="page1" element={<Talent1 />} />
          <Route path="page2" element={<Talent2 />} />
          <Route path="page3" element={<Talent3 />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
