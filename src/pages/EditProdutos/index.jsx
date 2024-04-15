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
    
    if(id == 'price') {
      const input = e.target.value;
      if (/^\d*\.?\d{0,2}$/.test(input)) { // Aceita até 2 casas decimais
        setFormData({
          ...formData, [id]: value
        })
       
      }

    } else {
      setFormData({
        ...formData, [id]: value
      })
    }
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
        <Form 
          onHandleChange={onHandleChange}
          editProducts={editProducts}
          formData={formData}
        />        
      </div>
    </>
  )
}

export default EditProdutos;