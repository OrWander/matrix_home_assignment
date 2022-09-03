import React from "react";
import "./App.css";
import Header, {
  RouteConfig,
  routingConfiguration,
} from "./components/app-components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {routingConfiguration.map((route: RouteConfig) => {
            return (
              <Route
                key={route.key}
                element={route.element}
                path={route.path}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
