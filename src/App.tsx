import "./App.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { format } from "date-fns";
import Datos from "./components/Datos";

const date = format(new Date(), " dd/MM/yyyy ");
const time = format(new Date(), "HH:mm");

function App() {
  return (
    <Box sx={styles.body}>
      {/* nav */}
      <Box sx={styles.nav}>
        <Box>
          <Typography variant="body1">
            <>{date}</>
          </Typography>
        </Box>
        <h2>Armar Receta</h2>
        <Typography variant="body1">
          <>{time}</>
        </Typography>
      </Box>
      <Box>
        <Datos />
      </Box>
    </Box>
  );
}

const styles = {
  body: {
    width: "50%",
    margin: "3em auto",
    padding: "  1em",
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1em",
    border: "1px solid black",
    margin: "1em 0",
    alignItems: "center",
  },
};

export default App;

{
  /* datos */
}
//  <Box sx={styles.datos}>
//  <Box
//    sx={{
//      display: "flex",
//      justifyContent: "space-between",
//      alignItems: "center",
//      marginBottom: "2em",
//    }}
//  >
//    <p>Entidad Primaria</p>
//    <TextField
//      size="medium"
//      id="standard-basic"
//      label="Nro de Carnet"
//      variant="standard"
//      placeholder="Nro de Carnet"
//    />
//  </Box>
//  <Box
//    sx={{
//      display: "flex",
//      justifyContent: "space-between",
//      alignItems: "center",
//      marginBottom: "2em",
//    }}
//  >
//    <TextField
//      id="filled-basic"
//      label="Obra Social"
//      variant="standard"
//      sx={{ width: "40%" }}
//    />
//    <FormControl>
//      <RadioGroup
//        aria-labelledby="demo-radio-buttons-group-label"
//        defaultValue="AFILIADO"
//        name="radio-buttons-group"
//      >
//        <FormControlLabel
//          sx={{ height: "25px" }}
//          value="AFILIADO"
//          control={<Radio />}
//          label="AFILIADO"
//        />
//        <FormControlLabel
//          value="FAMILIAR"
//          control={<Radio />}
//          label="FAMILIAR"
//        />
//      </RadioGroup>
//    </FormControl>
//    <TextField
//      id="filled-basic"
//      label="Nro de Bono de Control"
//      variant="standard"
//      sx={{ width: "40%" }}
//    />
//  </Box>
//  <Box
//    sx={{
//      display: "flex",
//      justifyContent: "space-between",
//      alignItems: "center",
//      marginBottom: "2em",
//    }}
//  >
//    <TextField
//      size="medium"
//      id="standard-basic"
//      label="Apellido y Nombre"
//      variant="standard"
//      placeholder="Apellido y Nombre"
//      sx={{ width: "50%" }}
//    />
//    <DesktopDatePicker
//      label="Fecha:"
//      inputFormat="MM/dd/yyyy"
//      value={"12/12/2022"}
//      onChange={() => {}}
//      renderInput={(params) => <TextField {...params} />}
//    />
//  </Box>
// </Box>
// <Box>
//  <TextField
//    id="filled-multiline-static"
//    label="Rp/ :"
//    multiline
//    variant="filled"
//    fullWidth
//    rows={6}
//  />

//  <TextField
//    size="medium"
//    label="Motivo de Solicitud"
//    variant="standard"
//    placeholder="Motivo de Solicitud"
//    fullWidth
//    sx={{ margin: "2em  0" }}
//  />
// </Box>
// <Box
//  sx={{
//    display: "flex",
//    justifyContent: "space-between",
//    alignItems: "center",
//    margin: "3em 30%",
//  }}
// >
//  <Button
//    variant="contained"
//    color="error"
//    size="large"
//    startIcon={<RestartAltIcon />}
//  >
//    Reset
//  </Button>
//  <Button
//    variant="contained"
//    color="primary"
//    size="large"
//    startIcon={<PrintIcon />}
//  >
//    Imprimir
//  </Button>
// </Box>
