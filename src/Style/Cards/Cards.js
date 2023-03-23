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
    overflow: hidden;

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






// export const Produto = style.article`

//     background: blue;
//     width: 90%;
//     margin: auto;
//     display: grid;
//     justify-content: center;
//     gap: 30px;
//     align-items: center;
//     grid-template: 0fr 1fr 1fr /1fr 1fr 1fr; 
//     justify-items: center;
//     align-content: center;
//     overflow: hidden;
    
//     @media (max-width: 1000px) {
//         & {
//           grid-template-columns: 1fr 1fr;
//           grid-template-rows: 1fr 1fr;
//         }
//     }
//     @media (max-width: 700px) {
//         & {
//           grid-template-columns: 1fr ;
//           grid-template-rows: 1fr ;
//         }
//     }
      

    
//     // img:hover {
//     //     transform: scale(1.1); 

//     // }
//     img {
//         transform: scale(1.1); 
//         margin: auto;

//     }



// `;
// export const ImgContaier = style.div`


//     background: pink;
//     width: 411px;
//     height: 752px;
//     display: flex;

//     &:hover{
//         background: red;
//         width: 311px;
//         height: 352px;
//     }
    
// `

    
    




