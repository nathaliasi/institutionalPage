import styled from "styled-components";

export const Container = styled.div`
@media(min-width: 2000px) and (max-width: 2500px){
  padding-left: 100px;
  h1{
    font-size: 48px;
  }
  p{
    font-size: 26px;
  }
}
@media(min-width: 492px) and (max-width: 1024px){
  padding: 8px;
  h1{
    text-align: center;
  }
}

@media(min-width: 280px) and (max-width: 491px){
  h1{
    text-align: center;
  }
}

`;