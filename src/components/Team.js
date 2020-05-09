import React from 'react';

const TeamList = (props) => {
  const handleEdit = (team) => {
    props.memberToEdit({
      ...team,
      isEditing: true,
    });
  }


  return (
        <div className = "team-list">
            {props.team.map((team, index) => (
                <div className = "team" key={index}>
                    <h2>{team.name}</h2>
                    <h4>{team.role}</h4>
                    <p>{team.email}</p>
                    <button className="editBtn"  onClick={() => {handleEdit(team)}}>Edit</button>
                  </div>
            ))
}
        </div>
    );
};

export default TeamList;