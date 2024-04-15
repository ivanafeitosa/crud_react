import { Button, TextField } from "@mui/material";
import InputPreco from "../InputPreco";
import "./index.css";


const Form = ({onHandleChange, editProducts, formData}) => {
    return (
        <>
            <form>
                <TextField 
                id="id" 
                label="Id" 
                variant="outlined" 
                onChange={onHandleChange} 
                value={formData.id} />
                <TextField 
                id="name" 
                label="Produto" 
                variant="outlined" 
                onChange={onHandleChange} 
                value={formData.name} />        
                <InputPreco
                    price={formData.price}
                    onHandleChange={onHandleChange}
                />                
                <Button variant="contained" color="primary" onClick={() => editProducts()}>{"Salvar Alterações"}</Button>               
            </form>
        </>
    )
};

export default Form;