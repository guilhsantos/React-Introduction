import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavHeader from '../../components/NavHeader';
import MyCards from '../../components/MyCards';
import Footer from '../../components/Footer';



const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const cards = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010_1280.jpg',
    title: 'Cubos',
    description:'Cubos 3D animados'
  },
  {
    id: 2,
    image: 'https://duet-cdn.vox-cdn.com/thumbor/0x0:6969x4648/640x427/filters:focal(3485x2324:3486x2325):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24373580/1245214816.jpg',
    title: 'Ciborgue',
    description:'Ciborg de olhos verdes futurista'
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/1167900280/pt/vetorial/isometric-cube-two-options.jpg?s=1024x1024&w=is&k=20&c=o6kR9UiMrJV46C91O_j57dbPT93dbB_ORWun7Xiv1Y0=',
    title: 'Outro cubo',
    description:'Cubo vermelhor 3D'
  },
  {
    id: 4,
    image: 'https://media.istockphoto.com/id/1498640548/pt/foto/new-2024-year-progress-bar-on-digital-lcd-display-with-reflection.jpg?s=1024x1024&w=is&k=20&c=8WYWX5vdqqPuzQFYMdl2FItrUpbbk_ZzQ3rqJBAN1R4=',
    title: 'Varios numeros ',
    description:'desenho foda'
  },
  {
    id: 5,
    image: 'https://s4.static.brasilescola.uol.com.br/be/2023/04/vista-do-monte-everest.jpg',
    title: ' Montanha',
    description:'Monte Everest'
  },
];

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavHeader/>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Lista de Técnologias
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Esse é o meu primeiro projeto de react, Nele aprendi a criar arrays de objetos, componentes, sobre props e muito mais.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    O azul é o sucesso
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    O branco também
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <MyCards data={cards}/>
        </Container>
      </main>
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}


export default App;
