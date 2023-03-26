import style from 'styled-components';


export const ContainerCarrinho = style.div`


    margin: 14px auto;
    background: rgb(236, 29, 36);    
    width: 90%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media (max-width: 1040px) {
        & {
            display: block;

        }
    }

    @media (max-width: 700px) {
        
        table{
            overflow: auto;
            background: green;
            display:none;
        }
    }
 
    table{
        margin: auto;
        padding: 20px
    }
    
    td {
      border: 1px solid black;
      padding: 10px;
    }

    th {
      border: 1px solid black;
      padding: 10px;
      font-weight: bold;
    }
   
`;



export const ContainerCarrinhoVazio = style.div`

 
    margin: 14px auto;
    background: rgb(236, 29, 36);    
    width: 90%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin: auto;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;


export const ContainerBotaoVoltar = style.div`

    margin: auto;
    background: white;
    width: 90%;
    display: flex;
    justify-content: space-between;    
    button{
        width: 167px;
        height: 25px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin: 10px;
    }  
`;


export const ImagemCarrinho = style.img`

    margin: 10px 10px 10px 10px;

    @media (max-width: 1040px) {
        & {
            margin: 10px auto 10px auto;
            display: block;

        }
    }
`;

export const ConatinerDetalhesParaMobileCarrinho = style.section`


    display: none;
    text-align: inherit;
    @media (max-width: 700px) {
        & {
            display: block;
            margin-left: 28px;
        }
        

    }
    
`;
export const tituloCarrinho = style.h1`

    display: none;
    text-align: center;

    @media (max-width: 700px) {
        & {
            display: block;

        }

    }
    
`;







