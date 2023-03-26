import style from 'styled-components';

export const CardsContainer = style.section`

    background: rgb(236, 29, 36);
    width: 90%;
    margin: 14px auto;
    display: grid;
    -webkit-box-pack: center;
    place-content: center;
    gap: 30px;
    -webkit-box-align: center;
    place-items: center;
    grid-template: 0fr 1fr / 1fr 1fr 1fr;
    overflow: auto;
    padding-top: 18px;
    padding-bottom: 18px;
    box-shadow: 1px 1px 10px 1px #606060;

    @media (max-width: 1221px) {
        & {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        }
    }
    @media (max-width: 805px) {
        & {
          grid-template-columns: 1fr ;
          grid-template-rows: 1fr ;
        }
    }
    button{
        width: 108px;
        height: 35px;
        border: none;
        border-radius: 9px;
        cursor: pointer;

    }
   
   
`;

export const HQS = style.article`

    background: black;
    width: 299px;
    height: 584px;
    overflow: hidden;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
    color: white;

    p{
        text-align: center;
 
    }
      
`;

export const ContainerPaginacao = style.div`


    margin: auto;
    background: white;
    width: 90%;
    display: flex;
    justify-content: end;  

    button{
        width: 60px;
        height: 25px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin: 10px;
    }
    
    
    
`;
export const ContainerDeBotoesCards = style.div`


    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-around;    
    
    
`;








