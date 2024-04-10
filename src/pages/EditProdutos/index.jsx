import "./index.css";
import Form from "../../components/Form";
import LinhaQuebra from "../../components/LinhaQuebra";
import Titulo from "../../components/Titulo";
import { Button, TextField } from "@mui/material";
import InputPreco from "../../components/InputPreco";
import { useState } from "react";
import { redirect } from "react-router-dom";


const EditProdutos = () => {

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

  const editProducts = async () => {
    fetch(`http://localhost:3000/products/${formData.id}`, {
      method: "PUT",
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
        <Titulo name={"Editar Produto"} />
        <LinhaQuebra />        
        {/* <Form name={"Salvar alterações"}/>         */}
        <form>
                <TextField id="id" label="Id" variant="outlined" onChange={onHandleChange} />
                <TextField id="name" label="Produto" variant="outlined" onChange={onHandleChange} />        
                {/* <InputPreco/> */}
                <TextField id="price" label="Preço" variant="outlined" onChange={onHandleChange} />
                <Button variant="contained" color="primary" onClick={() => editProducts()}>{"Salvar Alterações"}</Button>                
        </form>
      </div>
    </>
  )
}

export default EditProdutos;