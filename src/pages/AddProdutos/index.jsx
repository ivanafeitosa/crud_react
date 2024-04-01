
import Form from "../../components/Form";
import LinhaQuebra from "../../components/LinhaQuebra";
import Titulo from "../../components/Titulo";
import "./index.css";

const AddProdutos = () => {
  return (
    <>
      <div className="container">
        <Titulo name={"Inserir Produto"} />
        <LinhaQuebra />
        <Form name={"Inserir produto"} />
      </div>
    </>

  )
}

export default AddProdutos