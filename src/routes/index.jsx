import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import AddProdutos from "../pages/AddProdutos";
import EditProdutos from "../pages/EditProdutos";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path={"/add-produtos"} element={<AddProdutos />} />
                        <Route path={"/edit-produtos"} element={<EditProdutos />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Paths;