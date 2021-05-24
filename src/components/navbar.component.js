import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            ExerciseTracker
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Exercise
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/create">
                  Create Exercise Log
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/user">
                  Create User
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
