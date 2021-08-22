import React, { Component } from "react";
import Header from "../common/header";
import WorkHeader from "./components/workHeader";
import WorkProjects from "./components/workProjects";

export default class Work extends Component {
  render() {
    return (
      <div>
        <Header />
        <WorkHeader />
        <WorkProjects />
      </div>
    );
  }
}
