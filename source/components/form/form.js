import React, {Component} from "react";
import ReactDOM from "react-dom";
import LocationInfo from "./location-info";
import LocationContacts from "./location-contacts";

ReactDOM.render(<LocationInfo />, document.getElementById("sectionLocation"));

ReactDOM.render(<LocationContacts />, document.getElementById("footerLocation"));