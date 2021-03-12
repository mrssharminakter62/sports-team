import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamDetail.css';
import  femaleImage from '../../Images/Photo/male.png';
import  maleImage from '../../Images/Photo/female.png';
import  facebook from '../../Images/Icon/Facebook.png';
import  twitter from '../../Images/Icon/Twitter.png';
import  youtube from '../../Images/Icon/YouTube.png';

const TeamDetail = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [idTeam]) ;

    let gender;
    if(team.strGender === "male"){
        gender= <img className="imge-highlight" src={maleImage} alt=""/>
    }
    else{
        gender = <img className="imge-highlight" src={femaleImage} alt=""/>
    }

    return (
        <Container> 
            <div className="detail">
                <div className="image">
                        <div>
                            <img className="image_style" src={team.strTeamBadge}  alt=""/>             
                        </div> 
                </div>
                   <Row className="card-box">
                       <Col>
                            <div className="card-style">
                                <h3 className="title">{team.strAlternate}</h3>
                                <p ><small>Founded: {team.intFormedYear}</small></p>
                                <p><small>Country: {team.strCountry}</small></p>
                                <p><small>Sport: {team.strSport}</small></p>
                                <p><small>Gender: {team.strGender}</small></p>
                            </div>
                       </Col>
                       <Col className="card-style">
                                <div>{gender}</div>
                       </Col>
                   </Row>

                    <div className="description">
                        <p>{team.strDescriptionEN}</p>
                        <br/>
                        <p>{team.strDescriptionDE}</p>
                    </div>             
                    <div className="footer">
                            <a href={team.strFacebook} ><img style={{maxWidth:"60px"}} src={facebook} alt=""/>  </a> 
                            <a href={team.strTwitter} > <img style={{maxWidth:"60px"}}  src= {twitter} alt=""/>  </a> 
                            <a href={team.strYoutube} > <img style={{maxWidth:"60px"}}  src= {youtube} alt=""/>  </a> 
                    </div>   
           </div>

        </Container>
    );
};

export default TeamDetail;