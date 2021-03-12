import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    
    const [teams, setTeams] = useState([]);

    useEffect(() => {
      
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=England`)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, []);

    return (
        <Container>
        <div>
            <div className="banner">
                   <h1 className="style-headline">NINJA SPORTS </h1>
            </div>

            <div className="container">
                <div className="league-container row"  xs={2} md={4} lg={6} >           
                    {
                        teams.map(team => <Team team={team}></Team>)
                    }
                </div>
            </div>           
        </div>
        </Container>
    );
};

export default Home;