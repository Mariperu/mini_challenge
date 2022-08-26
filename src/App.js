import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Students } from "./pages/Students/Students";
import { Form } from "./pages/Form/Form";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/students"
            element={
              <>
                <Students />
              </>
            }
          />
          <Route
            path="/form"
            element={
              <>
                <Form />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
