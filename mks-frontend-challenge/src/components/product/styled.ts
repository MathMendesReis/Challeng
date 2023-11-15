import Image from "next/image";
import styled from "styled-components";


export const ProductStyled = styled.article`
width: 217.562px;
height: 285px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
padding-top: 18px;
`
export const NameProductStyled = styled.p`
width: 124px;
height: 38px;
flex-shrink: 0;
color: #2C2C2C;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px; /* 118.75% */
`
export const PriceProductStyled = styled.p`
width: 4.0625rem;
height: 1.125rem;
flex-shrink: 0;
color: #FFF;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 700;
text-align: center;
line-height: 15px; /* 100% */
`
export const PriceDescriptionStyled = styled.p`
width: 192px;
height: 25px;
flex-shrink: 0;
color: #2C2C2C;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 12px; /* 120% */
`
export const PriceContainerProductStyled = styled.div`
width: 64px;
height: 26px;
flex-shrink: 0;
border-radius: 5px;
background: #373737;
display: flex;
align-items: center;
justify-content: center;
`
export const PhotoProd = styled(Image)`
margin-bottom: 6px;

`
export const ButtonAddProdInCart = styled.button`
width: 218px;
height: 31.907px;
flex-shrink: 0;
border-radius: 0px 0px 8px 8px;
background: #0F52BA;
border: none;
margin-top: auto;
transition: transform 0.2s ease;

&:active{
  transform: scale(0.9);
  transition: transform 0.2s ease;
}
p{
  color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 128.571% */
}
`
export const DivWithNameAndPrice = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`