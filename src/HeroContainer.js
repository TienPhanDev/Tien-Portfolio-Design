import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

export default class HeroContainer extends Component {
  render() {
    return (
        <div>
          <div>
            <h1>
              Hello, My Name is Tien<span></span>
            </h1>
            <h1>
              <span>Full Stack</span> <span>Software Developer</span>
            </h1>
          </div>
        </div>
    );
  }
}
