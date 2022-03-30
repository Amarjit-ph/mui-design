/*
    Learn Material UI in One Hour - React Material UI Project Tutorial [2022]
*/
import { Typography,AppBar,Card,CardActions,CardContent,CardMedia, CssBaseline,Grid,Toolbar,Container,Button} from '@material-ui/core';
import PhotoAlbumRounded from '@mui/icons-material/PhotoAlbumRounded';
import React from 'react';
import useStyles from './styles';


function App() {
  const classes = useStyles();
  const cards = [1,2,3,4,5,6,7,8,9];
  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <PhotoAlbumRounded />
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" className={classes.container} align="center">
            <Typography variant='h2'align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
            </Typography>
              <Button variant="contained" color='primary' style={{marginRight:"15px"}}>Get Started</Button>
              <Button variant="outlined" color='primary'>Outlined Action </Button>
          </Container>
        </div>
        <div>
          <Grid container spacing={4} justify="center" className={classes.cardGrid}>
            {cards.map((card)=>(
                <Grid item key={card}>
              <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image='https://source.unsplash.com/random'
                title='Image' />
                <CardContent>
                  <Typography variant='h5' gutterBottom>Heading</Typography>
                  <Typography>orem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </CardContent>

                <CardActions>
                  <Button color='primary'>View Full Resolution</Button>
                 </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
