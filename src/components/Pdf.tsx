import { display } from "@mui/system"
import { PDFViewer, Page, Text, View, Document } from "@react-pdf/renderer"
import { format } from "date-fns"

const date = format(new Date(), " dd/MM/yyyy ")
const time = format(new Date(), "HH:mm")

const Pdf = ({ formulario }: { formulario: any }) => {
  const MyDocument: any = Document
  const MyPage: any = Page

  return (
    <div style={{ height: "80vh" }}>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <MyDocument>
          <MyPage size="A4">
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                margin: "1cm"
              }}
            >
              <Text>{date} </Text>
              <Text> {time}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "0 1cm"
              }}
            >
              <Text>EntidadPrimaria</Text>
              <Text>NroCarnet: {formulario.nroCarnet}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "1cm"
              }}
            >
              <Text>ObraSocial: {formulario.obraSocial}</Text>
              <Text>Familiar</Text>
              <Text>NroBonoControl: {formulario.nroBonoControl}</Text>
            </View>
            <View
              style={{
                margin: " 0 1cm 1cm 1cm",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row"
              }}
            >
              <Text>Nombre: {formulario.nombre}</Text>
              <Text>Fecha: {format(formulario.fecha, " dd/MM/yyyy ")}</Text>
            </View>
            <View style={{ margin: "0 1cm" }}>
              <Text>Rp/: {formulario.rp}</Text>
              <Text>Motivo: {formulario.motivo}</Text>
            </View>
          </MyPage>
        </MyDocument>
      </PDFViewer>
    </div>
  )
}

export default Pdf
