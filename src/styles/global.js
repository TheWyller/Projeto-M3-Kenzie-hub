import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --Color-primary: #FF577F;
        --Color-primary-Focus:#FF427F;
        --Color-primary-Negative:#59323F;

        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2:#343B41;
        --Grey-1:#868E96;
        --Grey-0:#F8F9FA;
        
        --textBtn:#FFFFFF; 
        
        

        --Sucess:#3FE864;
        --Negative:#E83F5B;

        --toastify-color-dark: var(--Grey-2);
        --toastify-color-success: var(--Sucess);
        --toastify-color-error: var(--Negative);

    }
    body{
        background: var(--Grey-4);       
        font-family: 'Inter', sans-serif;
        overflow-x:${(props) => (props.modals ? "hidden" : "unset")};
        overflow-y:${(props) => (props.modals ? "hidden" : "unset")};

    }

    h1 ,h2 ,h3, h4{
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration:none
    }
    

`;
