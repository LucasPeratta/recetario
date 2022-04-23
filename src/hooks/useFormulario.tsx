import { useState } from "react"

const useFormulario = (inicial: any) => {
  const [formulario, setFormulario] = useState(inicial)
  const handleChange = (e: any) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    })
  }
  const reset = () => {
    setFormulario(inicial)
  }

  return [formulario, handleChange, reset]
}

export default useFormulario
