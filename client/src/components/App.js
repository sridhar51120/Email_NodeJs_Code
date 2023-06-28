import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; // Collection of Helpher
// import Header from "./Header";
// import Dashboard from "./Dashboard";
// import SurveyNew from "./SurveyNew";
// import Landing from "./Landing";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing Page</h2>;

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
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
