import styled from "styled-components";

export const Container = styled.div`


`

export const Area = styled.div`
margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  

`

export const Steps = styled.div`
flex: 1;
display: flex;
background: #FFFFFF;
@media(min-width: 492px) and (max-width: 1024px){
  flex-direction: column;
  width: 100%;
}
@media(min-width: 280px) and (max-width: 491px){
  flex-direction: column;
  width: 100%;
}
`

export const Inst = styled.div` 
.institucional{
  display: flex;
 
}
.h2-inst{
  font-weight: 100;
  text-transsform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 0px;
}
 .home{
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 50px;
 }

 .txt-inst{
  margin-top: 6px;
  font-weight: 20;
  font-size: 0.7em;
  color: #C4C4C4;
  font-family: roboto;
 }

 .casinha{
  margin-top: 4px;
 }
}

@media(min-width: 2000px) and (max-width: 2500px){
  .casinha{
    width: 32px;
    height: 32px;
  }
  .seta{
    width: 9px;
    height: 15px;
    padding-top: 12px;
  }
  .txt-inst{
    font-size: 24px;
  }

  .h2-inst{
    font-size: 48px;
  }
}



`

export const Sidebar = styled.div`
width: 250px;
  margin-left: 40px;
  @media(min-width: 492px) and (max-width: 1024px){
    width: 100%;
    margin-left: 0px;
   
  }

  @media(min-width: 280px) and (max-width: 491px){
    width: 100%;
    margin-left: 0px;
  }

  

`

export const Page = styled.div`
flex: 1;
padding-left: 20px;
  width: 70%;
 @media(min-width: 492px) and (max-width: 1024px){
  padding-left: 0px;
  width: 100%;
 }
 @media(min-width: 280px) and (max-width: 491px){
  padding: 5px;
  width: 100%;
 }

`

export const Section =  styled.div`
display: flex;
margin-top: 40px;
width:100%;
height: 142px;
border-top: 1px solid #C4C4C4;
border-bottom: 1px solid #C4C4C4;
justify-content: center;
 .inputlabel{
  width: 100%;
  display: flex;
 .input{
  padding: 8px;
  width: 300px;
 }

 button{
  padding: 10px;
  width: 100px;
  background: #000;
  border: none;
  border-radius: 3px;
  color: #FFF;
  cursor: pointer;
 }

 .input,
 button{
  margin-bottom: 30px;
 } 
}
}
@media(min-width: 492px) and (max-width: 1024px){
  height: 182px;
  .inputlabel{
    flex-direction: column;
    width: 100%;
   .input{
   display: flex;
    margin-bottom: 5px;
   }
   button{
    width: 100%
   }
 }
 }
 @media(min-width: 280px) and (max-width: 491px){
  height: 182px;
  .inputlabel{
    flex-direction: column;
    width: 100%;
   .input{
   display: flex;
    margin-bottom: 5px;
   }
   button{
    width: 100%
   }
 }
 }
`