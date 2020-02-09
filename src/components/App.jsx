import React from "react";
import "../styles/styles.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainMenu from "./Organisms/MainMenu";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Users from "./Pages/Users";
import Courses from "./Pages/Courses";
import Course from "./Pages/Course";
import History from "./Pages/History";

export default function App() {
  return (
    <Router>
      <MainMenu />
      <Route exact path="/" component={Home} />
      <Route path="/formulario" component={Form} />
      <Route exact path="/cursos" component={Courses} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/usuarios" component={Users} />
      <Route path="/historial/:valor" component={History} />
    </Router>
  );
}
