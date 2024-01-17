import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

function Footer() {
    const classes = useStyles();
    
    return (
        <>
                  <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          O começo de aprendizado, logo logo vou ser o melhor.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                Do Guilherme do passado para o Guilherme do futuro
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
      </footer>


        </>
    )
    
}

export default Footer;