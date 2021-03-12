import React from 'react';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';


const Team = (props) => {
const {strTeam, strSport, strTeamBadge, idTeam} =props.team;

const history = useHistory();

const handleClick = (team ) => {
    const url = `team/${team}`;
    history.push(url);
}
    return (
        <div>
            <div className="league-box">
                <img className="img_style" src={strTeamBadge} alt=""/>
                <h3>Name: {strTeam}</h3>
                <h4>Sports type:{strSport}</h4>
                <Link to={`/team/${idTeam}`}><button onClick ={() => handleClick(idTeam)} className="btn-style">Explore<FontAwesomeIcon icon = {faLongArrowAltRight}/></button></Link>
            </div>
        </div>
    );
};

export default Team;