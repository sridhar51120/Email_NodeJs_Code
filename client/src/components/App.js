import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; // Collection of Helpher
import Header from "./Header";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import Landing from "./Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
// rfce
