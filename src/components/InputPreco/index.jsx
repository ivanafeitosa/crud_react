import React, { useState } from 'react';
import { TextField } from "@mui/material";

function InputPreco({price, onHandleChange}) { 

  return (
    <TextField
      id='price'
      label="Preço"
      variant="outlined"
      type="number"
      value={price}
      onChange={onHandleChange}
      InputProps={{
        inputProps: {
          step: 0.01 // Configura para aceitar até duas casas decimais
        },
      }}
    />
  );
}

export default InputPreco;