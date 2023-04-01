import styled from "styled-components";



export const Container = styled.div`
.header-mobile{
  display: none;
}
background: black;
height: auto;
width: 100%;
.header-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  .logo{
    width: 266px;
    height: 51px;
    margin: 3px 0 0 100px;
  }
  .search{
    display: flex;
    align-items: center;
    input{
    width: 264px;
    height: 32px;
    border:2px solid #f0f0f0;
    border-radius: 5px;
    margin: 3px 0 0 0;
    
    }
    .buttonLupa{
      border: none;
      background: white;
      position: relative;
      right: 40px;
      top: 3px;
    .lupa{
      width: 18px;
      height: 18px
      }
     
    }
  }

  .entrarCarrinho{
    display: flex;
    align-items: end;
    gap: 55px;
    margin-right: 100px;
    .entrar{
      font-size: 14px;
      color: white;
      text-decoration: none;
    }
    .carrinho{
      margin-bottom: 25px;
      width: 28px;
      height: 20px;
    }
  }  
}
.container3{
  background: black;
  border-top: 1px solid #c4c4c4;
}
.menu{
  display: flex;
  gap: 40px;
  margin-right: 100px;
  gap: 60px;
  margin-left: 100px;
.cursos,
.saibamais,
.institucionais{
  color: white;
  text-decoration: none;
  text-transform: uppercase; 
  font-size: 14px;
  }
}
@media(min-width: 2000px) and (max-width: 2500px){
  .container{
    .menu-mobile{
    display: none;
    }
  .search{
    input{
    width: 516px;
    height: 58px;
    margin-bottom: 20px;
    margin-top: 30px;
  ::-webkit-input-placeholder { 
    font-size: 28px
  }
  }
  .buttonLupa{
    right: 55px;
  .lupa{
    width: 36px;
    height: 36px;
    }
    }
  }


.entrarCarrinho{
  .entrar{
    font-size: 28px;
    text-transform: uppercase;
  }
  .carrinho{
    width: 55px;
    height: 39px;
    margin-bottom: 40px;
  }
}  
}

.menu{
.cursos,
.saibamais,
.institucionais{
 font-size: 28px ;
  }
}
}
}

@media(min-width: 492px) and (max-width: 1024px){
  .header-mobile{
    display: block;
  }
  .header-desktop{
    display: none;
  }
}
 
@media(min-width: 280px) and (max-width: 491px){
  .header-mobile{
    display: block;
  }
  .header-desktop{
    display: none;
  }
}
`;
