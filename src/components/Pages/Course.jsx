import React from "react";

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      comment: ""
    };
    this.handleWriteComment = this.handleWriteComment.bind(this);
  }

  handleWriteComment(e) {
    this.setState({
      comment: e.target.value
    });
  }

  render() {
    const { course, comment } = this.state;
    return (
      <div className="ed-grid m-grid-3">
        {course ? (
          <div className="ed-grid">
            <div className="ed-grid l-block">
              <h1 className="m-cols-3"> {course.titulo} </h1>
              <img
                className="m-cols-1"
                src={course.image}
                alt={course.titulo}
              />
              <p className="m-cols-2">Profesor: {course.profesor} </p>
            </div>
            <div className="ed-grid">
              <h2>Escribe tu comentario</h2>
              <input
                type="text"
                placeholder="Escribe ..."
                onChange={this.handleWriteComment}
              />
              <p>{comment}</p>
            </div>
          </div>
        ) : (
          <h1>El curso no existe</h1>
        )}
      </div>
    );
  }

  componentDidMount() {
    const { params } = this.props.match;
    fetch(
      `https://my-json-server.typicode.com/betoquiroga/json-db/cursos/${
        params.id
      }`
    )
      .then(resp => resp.json())
      .then(course => this.setState({ course }));
  }
}

export default Course;
