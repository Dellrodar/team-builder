import React, { useState } from "react";
import ReactDOM from 'react-dom';
import TeamForm from './components/Form';
import TeamList from './components/Team';
import './App.css';

function App() {

  const [team, setAddTeamMember] = useState([
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

  return (
    <div className = "appContainer">
      <h1>Add a Team member:</h1>
      <TeamForm setTeam={setAddTeamMember}
      team={team}
      />
      <h1>My Team:</h1>
      <TeamList team={team} />
    </div>
  );
}

export default App;
