import { Button, TextField } from "@mui/material";
import InputPreco from "../InputPreco";
import "./index.css";


const Form = ({name}) => {
    return (
        <>
            <form>
                <TextField id="input-id" label="Id" variant="outlined" />
                <TextField id="input-produto" label="Produto" variant="outlined" />        
                <InputPreco/>
                <Button variant="contained" color="primary">{name}</Button>                
            </form>
        </>
    )
};

export default Form;