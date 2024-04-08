
import { useState } from "react";
import Form from "../../components/Form";
import LinhaQuebra from "../../components/LinhaQuebra";
import Titulo from "../../components/Titulo";
import "./index.css";
import { Button, TextField } from "@mui/material";

const AddProdutos = () => {
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    price: ''
  });

  const onHandleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData, [id]: value
    })
  }

  const insertProduct = async () => {
    fetch(`http://localhost:3000/products/`, {
      method: "POST",
      body: JSON.stringify({
        "id": formData.id,
        "name": formData.name,
        "price": parseFloat(formData.price)
      })
    })

    window.location.href = '/';
  }

  return (
    <>
      <div className="container">
        <Titulo name={"Inserir Produto"} />
        <LinhaQuebra />
        {/* <Form name={"Inserir produto"} /> */}
        <form>
                <TextField id="id" label="Id" variant="outlined" onChange={onHandleChange} />
                <TextField id="name" label="Produto" variant="outlined" onChange={onHandleChange} />        
                {/* <InputPreco/> */}
                <TextField id="price" label="Preço" variant="outlined" onChange={onHandleChange} />
                <Button variant="contained" color="primary" onClick={() => insertProduct()}>{"Salvar Alterações"}</Button>                
        </form>
      </div>
    </>

  )
}

export default AddProdutos