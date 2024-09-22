import Grid from '@mui/material/Grid2';
import DefaultLayout from '../config/layout/DefaultLayout';
import { Paper, Accordion, Button, Typography } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ConfirmationModalContext } from '../contexts/ConfirmationModalContext';
import { useContext } from 'react';
import { TitleContext } from '../contexts/TitleContext';

function Test() {
  const config = {
    navigation: true,
    footer: true,
  };

  const modalContext = useContext(ConfirmationModalContext);
  const titleContext = useContext(TitleContext);

  function openModalTest() {
    if (modalContext) {
      modalContext.setData({
        title: 'Agora sim bombou!',
        content: 'Nosso modal saiu depois das 22:00...',
        actionCancel: () => console.log('cancel'),
        actionConfirm: () => console.log('confirm'),
        labelCancel: 'Cancelar',
        labelConfirm: 'Confirmar',
      });

      modalContext.setOpen(true);
    }
  }

  function setContext() {
    titleContext?.setTitle('Agora podemos alterar quando quiser.');
  }

  return (
    <DefaultLayout config={config}>
      <h1>Página Teste</h1>
      <Button variant="outlined" onClick={openModalTest}>
        Abrir modal
      </Button>
      <Button variant="outlined" onClick={setContext}>
        Colocar valor no context title
      </Button>
      <Grid container spacing={2} sx={{ marginBottom: '2em' }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ padding: '1em' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloribus placeat tempore ducimus, assumenda
            iste, sint recusandae aperiam atque dolorum aspernatur veniam debitis iure animi ullam amet facilis
            repudiandae veritatis?
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ padding: '1em' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo totam tempore ducimus quas
            exercitationem, eaque maiores! Fuga, minima ducimus. Debitis fugit modi deleniti illo quod eum. Provident,
            consequuntur eum?
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ padding: '1em' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente quos velit, hic iusto molestiae quo
            dolore ad consequuntur? Exercitationem unde dolor architecto autem voluptatibus facere, blanditiis placeat
            magnam vel.
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ padding: '1em' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem, atque, rem excepturi aspernatur
            expedita error aliquid voluptas sapiente eos voluptate. Sed quas dolores, nostrum asperiores illo natus.
            Doloribus, expedita?
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ padding: '1em' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam harum eligendi commodi suscipit
            porro animi officia quas omnis culpa laudantium ipsa enim adipisci sed eveniet similique, quia sapiente
            blanditiis.
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginBottom: '2em' }}>
        <Grid size={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
              Accordion Actions
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginBottom: '2em' }}>
        <Grid size={12}>
          <Typography align="justify" variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, dolorem. Rerum soluta quidem aperiam,
            debitis doloribus eos necessitatibus tempore ipsum vero blanditiis quaerat optio ipsa neque maiores.
            Voluptatibus, minima dolore.
          </Typography>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default Test;
