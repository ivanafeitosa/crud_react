import React, { useState } from 'react';
import { TextField } from "@mui/material";

function InputPreco() {
  const [preco, setPreco] = useState('');

  const handleChange = (event) => {
    // Validar se o valor inserido é um número válido (você pode adicionar suas próprias validações aqui)
    const input = event.target.value;
    if (/^\d*\.?\d{0,2}$/.test(input)) { // Aceita até 2 casas decimais
      setPreco(input);
    }
  };

  return (
    <TextField
      label="Preço"
      variant="outlined"
      type="number"
      value={preco}
      onChange={handleChange}
      InputProps={{
        inputProps: {
          step: 0.01 // Configura para aceitar até duas casas decimais
        },
      }}
    />
  );
}

export default InputPreco;