import React, {useState} from "react";
import Sidebar from "../Sidebar/Sidebar"
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {
    const [open, setOpen] = useState()

    const changeOpen = (handleChange) => {
        setOpen(handleChange)
    }

    return (
        <SLayout>
            <Sidebar changeOpen={changeOpen}/>
            <SMain isOpen={open}>{children}</SMain>
        </SLayout>
    );
};

export default Layout;
