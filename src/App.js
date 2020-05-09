import React, { useState } from "react";
import TeamForm from './Form';
import './App.css';


const teamFormInput = (props) => {
[addTeamMember, setAddTeamMember] = useState([
  {
    name: "Emilio Crocco",
    email: "emilio-crocco@lambdastudents.com",
    role: "React Developer",
  },
  {
    name: "Ryan Schueck",
    email: "ryan-schueck@lambdastudents.com",
    role: "Web Developer",
  },
  {
    name: "Valerie Vazquez",
    email: "valerie-vazquez@lambdastudents.com",
    role: "Software Developer",
  }
]);
}

function App() {
  return (
    <TeamForm />
  )};

export default App;
