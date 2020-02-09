import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      fecha: new Date()
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    TouchList.updateDate = this.updateDate.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  updateDate() {
    this.setState({
      fecha: new Date()
    });
  }

  render() {
    return (
      <div className="ed-grid">
        <h1>Formulario</h1>
        <span>Fecha actual {Math.ceil(this.state.fecha / 1000)}</span>
        <form id="form-element" action="">
          <div className="form__item">
            <label htmlFor="">Nombre: </label>
            <input type="text" onChange={this.handleChangeName} />
          </div>
          <div className="form__item">
            <label htmlFor="">Email: </label>
            <input type="email" onChange={this.handleChangeEmail} />
          </div>
        </form>
        <div>
          <h2>Hola {this.state.name} </h2>
          <p>Tu email: {this.state.email}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Form;
