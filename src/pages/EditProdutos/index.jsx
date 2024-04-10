import "./index.css";
import Form from "../../components/Form";
import LinhaQuebra from "../../components/LinhaQuebra";
import Titulo from "../../components/Titulo";
import { Button, TextField } from "@mui/material";
import InputPreco from "../../components/InputPreco";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const EditProdutos = () => {

  const location = useLocation();
  const tableData = location.state;

  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    price: ''
  });

  useEffect(() => {
    if(tableData){
      setFormData(tableData)
    }
  }, [tableData])

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
                <TextField id="id" label="Id" variant="outlined" onChange={onHandleChange} value={formData.id} />
                <TextField id="name" label="Produto" variant="outlined" onChange={onHandleChange} value={formData.name} />        
                {/* <InputPreco/> */}
                <TextField id="price" label="Preço" variant="outlined" onChange={onHandleChange} value={formData.price}/>
                <Button variant="contained" color="primary" onClick={() => editProducts()}>{"Salvar Alterações"}</Button>                
        </form>
      </div>
    </>
  )
}

export default EditProdutos;