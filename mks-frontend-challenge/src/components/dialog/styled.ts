import styled from "styled-components";

export const ModalStyled = styled.dialog`
width: 30.375rem;
height: 91vh;
flex-shrink: 0;
background: #0F52BA;
box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
position: absolute;
top: 0%;
left: 73%;
border: none;
`

export const H1 = styled.h1`
color: #FFF;
font-family: Montserrat;
font-size: 27px;
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
width: 38px;
height: 38px;
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
width: 18px;
height: 18px;
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
    width: 0px;
}
`

export const Footer = styled.footer``

export const ContainerProduct = styled.li`
width: 379px;
height: 95px;
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
font-size: 28px;
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
width: 100%;
height: 106px;
flex-shrink: 0;
background: #000;
border: none;
position: absolute;
top: 100%;
p{
  color: #FFF;
font-family: Montserrat;
font-size: 28px;
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
margin-top: 12%;
`

export const FormQuantity = styled.form`
display: flex;
justify-content: space-between;
border: 1px solid ;
width: 50px;
height: 25px;
flex-shrink: 0;
padding: 6%;
`