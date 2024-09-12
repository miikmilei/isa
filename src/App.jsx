import React, { useState } from 'react';
import { Button, Modal, Box, Typography, AppBar, Container, Grid, Toolbar } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const con_amor_button = () => {
    alert("Te amo isaa")
  }
  
  const amor_amarillo = () => {
  window.location.href = "https://open.spotify.com/album/75onhE4ne52iMHlVcpHUKR?si=wctujT20QeGX0H5u11Cd1Q";
  }

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography color="secondary" textAlign={'center'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Para Isaaaa:3
            </Typography>
            <Typography>
              <Button variant="outlined" color="secondary" onClick={con_amor_button}>Con amor</Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography textAlign={'center'} variant="h3">Tienes una Nueva carta</Typography>
        <Typography></Typography>
      </Box>

      <Typography textAlign={'center'} id="modal-title" variant="h6" component="h2">
            Para mi amiga de confianza isa:3
          </Typography>
          <Box m={4}>
          <Typography textAlign={'justify'} id="modal-description" sx={{ mt: 2 }}>
            Hola isaa, hice esta carta para recordarte el
            muchisimo cariño y aprecio que te tengoo ^^
          </Typography>
          <p></p>
          <Typography textAlign={'justify'}>
            Aprecio mucho hablar contigo, y pasar momentos
            juntos, esa noche del 11 de septiembre en donde
            te mostre esas fotos mias de pequeño me motivaron
            a escribirte esta carta para recordarte lo muy especial
            que eres para mi, a pesar de que tomamos distancia hace
            meses, me hace muy feliiz tu retorno, me haces brillar
            en un momento donde no estaba brillando
          </Typography>
          <p></p>

          <Typography>
            Sabes, amo hacerte feliz, independientemente de la forma
            que sea, y la verdad el mejor regalo de cumpleaños fue
            volver a hablarnos, eres tan linda como el atardecer en
            verano, linda como las intenciones de cerati al componer:
          </Typography>
          <p></p>
          <center>
          <Button variant='outlined' onClick={amor_amarillo}>Amor amarillo</Button>
          </center>
          <Typography>
          <p></p>

          Se que llevamos poco tiempo que volvimos
          hablar, pero yo se que todo
          fluira bien y podremos pasar lindos momentos
          juntos
        </Typography>
        <p></p>

        <Typography>
          Se que esta carta esta algo
          feita porque la programe
          a las 3 am KJASJASKJA (las proximas seran mejores)
        </Typography>
        <p></p>

        <Typography>
          Estoy pensando en hacer una carta para el 21 de
          septiembre, pero pronto lo voy a hacer y sera tan linda
          como tu
        </Typography>
        <p></p>
        <Typography textAlign={'center'}>Te Amooo</Typography>
        <Typography variant='h5' textAlign={'center'}>Atentamente Mikel:3</Typography>
        <Typography textAlign={'center'}>(te tengo tanto cariño como para programarte una carta)</Typography>
        </Box>
    </div>

  );
}

export default App;
