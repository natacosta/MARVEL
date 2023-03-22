import style from 'styled-components';

export const CardsContainer = style.section`

    background: red;
    // width: 95%;
    // display: flex;
    // margin: auto;
    // padding: 18px;
    // overflow: hidde
   

`;
export const Produto = style.article`

    background: blue;
    width: 90%;
    margin: auto;
    display: grid;
    justify-content: center;
    gap: 11px;
    align-items: center;
    grid-template: 0fr 1fr 1fr /1fr 1fr 1fr; 
    justify-items: center;
    align-content: center;
    overflow: hidden;
    
    @media (max-width: 1000px) {
        & {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        }
    }
    @media (max-width: 700px) {
        & {
          grid-template-columns: 1fr ;
          grid-template-rows: 1fr ;
        }
    }
      
  

`;

