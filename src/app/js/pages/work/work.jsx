import React, { Component } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import WorkHeader from "./components/workHeader";
import WorkProjects from "./components/workProjects";
import WorkAbout from "./components/workAbout";

export default class Work extends Component {
  render() {
    return (
      <div>
        <Header />
        <WorkHeader />
        <WorkProjects />
        <WorkAbout />
        <Footer />
      </div>
    );
  }
}
