import React from "react";
import CoursesGrid from "../Organisms/CoursesGrid";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  render() {
    return <CoursesGrid courses={this.state.courses} />;
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/betoquiroga/json-db/cursos")
      .then(resp => resp.json())
      .then(courses => this.setState({ courses }));
  }
}

export default Courses;
