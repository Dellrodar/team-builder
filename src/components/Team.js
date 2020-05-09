import React from 'react';

const TeamList = props => {
    return (
        <div className = "team-list">
            {props.team.map(team => (
                <div className = "team" key={team.name}>
                    <h2>{team.name}</h2>
                    <h4>{team.role}</h4>
                    <p>{team.email}</p>
                  </div>
            ))
}
        </div>
    );
};

export default TeamList;