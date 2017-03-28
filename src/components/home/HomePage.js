/**
 * Created by PY028031 on 3/27/2017.
 */

import React from "react";
import {Link} from "react-router";

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Learners Administration</h1>
        <p>React, Reduct and react router in es6 for ultra-responsive websites</p>
        <Link to="about" className="btn btn-primary btn-lg"> Learn more </Link>
      </div>
    );
  }
}

export default HomePage;
