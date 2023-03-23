import style from 'styled-components';

export const CardsContainer = style.section`

    background: red;
    width: 90%;
    margin: auto;
    display: grid;
    justify-content: center;
    gap: 30px;
    align-items: center;
    grid-template: 0fr 1fr 1fr /1fr 1fr 1fr; 
    justify-items: center;
    align-content: center;
    overflow: auto;
    height: 1256px;


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
   
`;

export const HQS = style.article`

    background: blue;
    width: 343px;
    height: 584px;
    overflow: hidden;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
    
    p{
        text-align: center;
 
    }
      
`;

export const ContainerPaginacao = style.div`


    margin: auto;
    background: pink;
    width: 90%;
    display: flex;
    justify-content: end;    
    
    
`







