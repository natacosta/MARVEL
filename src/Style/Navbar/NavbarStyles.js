import style from 'styled-components';


export const NavbarContainer = style.header`


    ul{
        background: #ec1d24;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
        margin-top: 0px;
    }

    li{
        margin:auto;

    }
    input{
        width: 717px;
        height: 37px;

    }
    a{
        color: black;

    }
    @media (max-width: 700px) {
        ul {
          
            display: grid;
        }
    }

    

`;
export const LogoDaMarvel = style.img`

    width: 162px;
    padding: 24px;

`;

export const ConatienrIconeCarrinho = style.li`
    font-size: 27px;

`;


export const ConatienrIconeCarrinhoAtivo = style.li`
    font-size: 27px;
    width: 70px;
    display: flex;
    justify-content: space-between;


`;

