import style from 'styled-components'

export const Title = style.h2`
color: #fff;
text-align: center; 
font-size: 38px;
font-style: normal;
font-weight: 600; 
margin-top: 25px;
`;

export const Container = style.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`;

export const ContainerUsers = style.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
margin: 30px 0px; 

@media (max-width: 750px) { 
    grid-template-columns: 1fr;
}
`;

export const TrashIcon = style.img`
cursor: pointer;
padding-left: 30px;

&:hover {
    opacity: .8;
}
&:active{
    opacity: .4;
}
`;

export const CardUsers = style.div`
background-color: #252d48;
padding: 17px;
border-radius: 32px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
max-width: 380px;

h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 200;
    margin-button: 3px;
    text-transform: capitalize;
}

p {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
}
`;

export const Avatar = style.img`
height: 80px;
`;