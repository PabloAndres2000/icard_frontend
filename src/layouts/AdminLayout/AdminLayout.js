import React from 'react'
import {LoginAdmin} from "../../pages/Admin/LoginAdmin";
import { HomeAdmin } from "../../pages/Admin/HomeAdmin";

import "./AdminLayout.scss";
export function AdminLayout(props) {
    const { children } = props;
    const auth = null; /* Usuario inicializado en que no esta logeado*/
    if(!auth) return <LoginAdmin/>;/* Si el usuario no esta logeado, retornara el login admin*/
    return (
        <div>
            <p>AdminLayout</p>
            {children}
            <div>
                <HomeAdmin/>
            </div>
            

        </div>
    );
}
