import "./index.css";
import Form from "../../components/Form";
import LinhaQuebra from "../../components/LinhaQuebra";
import Titulo from "../../components/Titulo";


const EditProdutos = () => {
  return (
    <>
      <div className="container">        
        <Titulo name={"Editar Produto"} />
        <LinhaQuebra />        
        <Form name={"Salvar alterações"}/>        
      </div>
    </>
  )
}

export default EditProdutos;