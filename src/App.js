import React, { useState } from "react";
import ReactDOM from 'react-dom';
import TeamForm from './components/Form';
import TeamList from './components/Team';
import './App.css';

function App() {

  const [team, setAddTeamMember] = useState([
    {
      id: 0,
      name: "Emilio Crocco",
      email: "emilio-crocco@lambdastudents.com",
      role: "React Developer",
    },
    {
      id: 1,
      name: "Ryan Schueck",
      email: "ryan-schueck@lambdastudents.com",
      role: "Web Developer",
    },
    {
      id: 2,
      name: "Valerie Vazquez",
      email: "valerie-vazquez@lambdastudents.com",
      role: "Software Developer",
    }
  ]);

  const [memberToEdit, setMemberToEdit ] = useState({
    id: null,
    name: '',
    role: '',
    email: '',
    isEditing: false,
  });

const editMember = (member) => {
  const updatedMember = {
    ...member,
    isEditing:false,
  }
  const updatedTeam = team.map(member => member.id === updatedMember.id ? updatedMember: member );
  setAddTeamMember(updatedTeam);
}

  return (
    <div className = "appContainer">
      <h1>Add a Team member:</h1>
      <TeamForm
        setTeam={setAddTeamMember}
        team={team}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
      <h1>My Team:</h1>
      <TeamList
        team={team}
        memberToEdit={setMemberToEdit}
      />
    </div>
  );
}

export default App;
