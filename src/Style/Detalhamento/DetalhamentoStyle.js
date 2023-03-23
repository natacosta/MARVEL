import style from 'styled-components';


export const ContainerDetalhes = style.div`


    margin: auto;
    background: red;
    width: 90%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media (max-width: 1040px) {
        & {
            background: blue;
            display: block;

        }

    
    }
    
    @media (max-width: 700px) {
        
        table{
            overflow: auto;
            background: green;

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


export const ContainerBotaoVoltar = style.div`


    
    margin: auto;
    background: red;
    width: 90%;
    display: flex;
    justify-content: start;    
    
`;



export const ImagemDetlahes = style.img`

    margin: 10px 10px 10px 10px;

    @media (max-width: 1040px) {
        & {
            margin: 10px auto 10px auto;
            display: block;

        }

    }
    
`;

