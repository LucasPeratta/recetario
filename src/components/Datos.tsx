import { useState } from "react"
import Box from "@mui/material/Box"
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers"
import RestartAltIcon from "@mui/icons-material/RestartAlt"
import PrintIcon from "@mui/icons-material/Print"
import Pdf from "./Pdf"
import useFormulario from "../hooks/useFormulario"

const Datos = () => {
  const [formulario, handleChange, reset] = useFormulario({
    nroCarnet: "",
    obraSocial: "",
    nroBonoControl: "",
    nombre: "",
    rp: "",
    motivo: ""
  })

  const [mostrar, setMostrar] = useState(false)
  const [fecha, setFecha] = useState(new Date())

  const handleSubmit = (e: any) => {
    setMostrar(true)
  }

  const resetear = () => {
    reset()
    setFecha(new Date())
  }

  return (
    <>
      <div style={{ display: mostrar ? "none" : "block" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {/* datos */}
          <Box sx={styles.datos}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2em"
              }}
            >
              <p>Entidad Primaria</p>
              <TextField
                name="nroCarnet"
                value={formulario.nroCarnet}
                onChange={handleChange}
                size="medium"
                id="standard-basic"
                label="Nro de Carnet"
                variant="standard"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2em"
              }}
            >
              <TextField
                name="obraSocial"
                value={formulario.obraSocial}
                onChange={handleChange}
                id="filled-basic"
                label="Obra Social"
                variant="standard"
                sx={{ width: "40%" }}
              />
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="AFILIADO"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{ height: "25px" }}
                    value="AFILIADO"
                    control={<Radio />}
                    label="AFILIADO"
                  />
                  <FormControlLabel
                    value="FAMILIAR"
                    control={<Radio />}
                    label="FAMILIAR"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                name="nroBonoControl"
                value={formulario.nroBonoControl}
                onChange={handleChange}
                id="filled-basic"
                label="Nro de Bono de Control"
                variant="standard"
                sx={{ width: "40%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2em"
              }}
            >
              <TextField
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                size="medium"
                id="standard-basic"
                label="Apellido y Nombre"
                variant="standard"
                sx={{ width: "50%" }}
              />
              <DesktopDatePicker
                label="Fecha:"
                inputFormat="dd/MM/yyyy"
                value={fecha}
                onChange={(date) => {
                  date && setFecha(date)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </Box>
          <Box>
            <TextField
              name="rp"
              value={formulario.rp}
              onChange={handleChange}
              id="filled-multiline-static"
              label="Rp/ :"
              multiline
              variant="filled"
              fullWidth
              rows={6}
            />

            <TextField
              name="motivo"
              value={formulario.motivo}
              onChange={handleChange}
              size="medium"
              label="Motivo de Solicitud"
              variant="standard"
              fullWidth
              sx={{ margin: "2em  0" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "3em 30%"
            }}
          >
            <Button
              variant="contained"
              color="error"
              size="large"
              startIcon={<RestartAltIcon />}
              onClick={resetear}
            >
              Reset
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PrintIcon />}
              onClick={handleSubmit}
            >
              Imprimir
            </Button>
          </Box>
        </LocalizationProvider>
      </div>

      <div>
        {mostrar ? <Pdf formulario={{ ...formulario, fecha }} /> : null}
      </div>
    </>
  )
}
export default Datos

const styles = {
  datos: {
    padding: "0 1em",
    border: "1px solid black",
    marginBottom: "2em "
  }
}
