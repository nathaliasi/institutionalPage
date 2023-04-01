import styled from "styled-components";

export const Container = styled.div `
flex: 1;
border-right: 1px solid #C4C4C4;
padding: 10px;
  a{
    text-decoration: none;
    color: #000;
    display: flex;
    
  }

  .link{
    
  }

  .link-active{
    color: #FFF ;
    background: black;
    padding: 8px;

  }

  @media(min-width: 2000px) and (max-width: 2500px){

    a{
      font-size: 28px;
      width: 97%;
    }
  }

  @media(min-width: 492px) and (max-width: 1024px){
    border: none;
    .link-active{
      width: 98%;
    }
  }

  @media(min-width: 280px) and (max-width: 491px){
    border: none;
    .link-active{
      width: 99%;
    }
  }
  
  
`;


