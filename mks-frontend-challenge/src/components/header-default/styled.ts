import styled from "styled-components";

export const HeaderStyled = styled.header`
width: 100%;
height: 6.3125rem;
flex-shrink: 0;
background-color: ${({theme})=>theme.colors.blue};
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 5%;
padding-right: 5%;
`

export const TitleStyled = styled.h1`
color: #FFF;

font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize["4xl"]};
font-style: normal;
font-weight: 600;
line-height: 19px; 
width: 8rem;
height: 2.75rem;
text-align: center;
`

export const ButtonCart = styled.button`
width: 90px;
height: 45px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
margin-left: auto;
margin-right: 5%;
display: flex;
border: none;
align-items: center;
justify-content: center;
gap: 9px;
>p{
color: ${({theme})=>theme.colors.black};
font-size: 18px;;
font-family: ${({theme})=>theme.fontFamily.heading};
font-size: ${({theme})=>theme.fontSize.lg};
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

export const ParagraphStyled = styled(TitleStyled)`
font-family: Montserrat;
font-size: ${({theme})=>theme.fontSize.xl};
font-weight: 300;
text-align: left ;
line-height: 60px;
`