import styled from "styled-components";



export const ModalStyled = styled.dialog`
  width: 90%;
  max-width: 30.375rem; 
  min-height: 100vh;
  flex-shrink: 0;
  background: #0F52BA;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0%;
  left: 86.8%; 
  transform: translateX(-50%);
  border: none;
@media (max-width: 600px) {
    width: 100%; 
    max-width: none; 
    box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.13); 
    left: 0; 
    transform: none; 
}
`;

export const H1 = styled.h1`
color: #FFF;
font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize["2xl"]};
font-style: normal;
font-weight: 700;
line-height: normal;

`

export const ContainerH1WithButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 56px;
flex-shrink: 0;
padding: 36px 45px;

`
const ButtonBase = styled.button`
width: 2.375rem;
height: 2.375rem;
flex-shrink: 0;
background-color: #000;
border-radius: 999px;
border: none;
display: flex;
align-items: center;
justify-content: center;

`

export const ButtonClosedModal = styled(ButtonBase)``
export const ButtonRmvItemCart= styled(ButtonBase)`
width: 1.125rem;
height: 1.125rem;
flex-shrink: 0;
padding: 5px;
position: relative;
top: -190%;
left: 19%;
`

export const ListProductsCart = styled.ul`
width: 100%;
height: 43.75rem;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
overflow: auto;

&::-webkit-scrollbar {
    display: none;
}
`

export const Footer = styled.footer``

export const ContainerProduct = styled.li`
width: 23.6875rem;
max-height: 5.9375rem;
background-color: red;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
display: flex;
align-items: center;
justify-content: space-between;

`

const TextStyled = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize["2xl"]};
font-style: normal;
font-weight: 700;
line-height: 15px; /* 53.571% */
`

export const TotalStyled = styled(TextStyled)``
export const TotalPriceStyled = styled(TextStyled)``
export const ContainerTotalPrice = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 50px;
padding: 0 36px;

`

export const ButtonFinish = styled.button`
background-color: #000;
border: none;
padding: 20px 36px;
width: 100%;
min-height: 90px;
p{
  color: #FFF;
font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize["2xl"]};
font-style: normal;
font-weight: 700;
line-height: 15px; /* 53.571% */
}
`

export const ContainerInputQuantity= styled.div`
width: 50px;
height: 70px;
flex-shrink: 0;
display: flex;
flex-direction: column;
margin-right: 12px;
margin-top: 8%;
`

export const FormQuantity = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid ;
width: 3.125rem;
height: 1.5625rem;
flex-shrink: 0;
padding: 6%;
border-radius: 4px;
border: 0.3px solid #BFBFBF;
background: #FFF;
`

export const ParagraphName = styled.p`
width: 5rem;
height: 2.0625rem;
flex-shrink: 0;
color: #2C2C2C;

font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize.md};
font-style: normal;
font-weight: 400;
line-height: 17px; /* 130.769% */
`
export const ParagraphQtd = styled.p`
color: #000;
font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize.sm};
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const ParagraphPrice = styled.p`
width: 3.875rem;
height: 1.0625rem;
flex-shrink: 0;
color: #000;
font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize.md};
font-style: normal;
font-weight: 700;
line-height: 17px; /* 121.429% */
`

const BaseButton = styled.button`
width: 0.9375rem;
color: #000;
font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize.base};
font-style: normal;
font-weight: 400;
line-height: normal;
background: none;
border: none;
`

export const ButtonPlus = styled(BaseButton)`
border-right: 1px solid #BFBFBF;

`
export const ButtonMinus = styled(BaseButton)`
border-left: 0.2px solid #BFBFBF;


`