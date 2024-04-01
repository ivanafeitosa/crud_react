
import "./index.css";
import Titulo from '../../components/Titulo';
import LinhaQuebra from '../../components/LinhaQuebra';
import TableProdutos from '../../components/TableProdutos';

const Home = ({children}) => {
  return (
    <>
      <div className="container">
        <Titulo name={"Tabela de Produtos"}/>
        <LinhaQuebra />        
        <TableProdutos />        
      </div>

    </>
  )
}

export default Home;