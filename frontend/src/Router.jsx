import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./login";


export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login /> } exact />
            <Route path="homw" element={ <Home />} />
            <Route path="edit/:accountId" element={ <AccountEditor />} />
        </Routes>
    </BrowserRouter>
};