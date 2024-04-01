import { NavLink } from "react-router-dom"
import "./index.css";

const Header = () => {
  return (
    <header>
      <h1>LOGOTIPO</h1>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/add-produtos"}>Inserir</NavLink>
        </li>
        <li>
          <NavLink to={"/edit-produtos"}>Editar</NavLink>
        </li>
      </ul>

    </header>
  )
}

export default Header