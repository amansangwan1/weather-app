import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            place:''
        }
    }
    handleChange=(event)=>{
        this.setState({place:event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.searchPlace(this.state.place)
    }
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg  "
          style={{
            height: 60,
            backgroundImage: "linear-gradient(to right top,#40739e,#8c7ae6)",
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand mb-1" style={{ fontSize: 30 }} href="/">
              <strong>Weatheria</strong>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    style={{ fontSize: 21 }}
                    aria-current="page"
                    href="/"
                  >
                    About
                  </a>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                onSubmit={this.handleSubmit}
              >
                <input
                  className="form-control me-2 "
                  type="search"
                  value={this.state.place}
                  onChange={this.handleChange}
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
