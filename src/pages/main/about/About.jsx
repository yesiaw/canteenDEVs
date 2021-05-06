import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import InstagramIcon from '@material-ui/icons/Instagram';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@material-ui/core';


const About = () => {
   
    return (
      <Grid style={{marginTop:'2rem'}} align='center'>
    
        <Card>
            <Typography style={{marginTop:'1rem'}}>
                О заведении
            </Typography>
            <IconButton>
              <NavLink to='/about' style={{textDecoration: 'none', color:'inherit'}}>
                <HomeIcon />
              </NavLink>
            </IconButton>
            <IconButton>
              <a href='https://www.instagram.com/habit.studenets/' style={{textDecoration: 'none', color:'inherit'}}>
              <InstagramIcon />
              </a>
            </IconButton>

        </Card>
      </Grid>
      
    )
}

export default About;

