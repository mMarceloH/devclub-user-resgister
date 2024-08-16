import { styled } from "styled-components";

export const Button = styled.button`
color: #fff;
border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fff'};


background: ${props => props.theme === 'primary' ? 'linear-gradient(to right, #fe7e5d, #7f3841)' : 'transparent'} ;

border-radius: 30px;
font-size: 16px;
padding: 12px 32px;
width: fit-content;
cursor: pointer;

&:hover {
    opacity: ${props => props.theme === 'primary' ? '.8' : '.5'};
}

&:active {
    opacity: ${ props => props.theme === 'primary' ? '.5' : '1.0'};
}
`;

export default Button