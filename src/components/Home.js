import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Link } from '@material-ui/core';

import HomeCard from './HomeCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <HomeCard
              headline={'Try Udemy Course'}
              content={
                <Link
                  href="https://www.udemy.com/course/react-application-development"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Udemy
                </Link>
              }
              to={'/events'}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
