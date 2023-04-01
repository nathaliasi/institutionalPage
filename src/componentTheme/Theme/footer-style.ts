import styled from "styled-components";

export const Containerfooter = styled.div`



`

export const Footer1 =  styled.div` 
  display: flex;
  flex-direction: column;
  .footer1-mobile{
    display: none;
  }
 .footer1{
  .plus{
    display: none
  }
  display: flex;
  justify-content: space-between;
  h4{
    font-size: 14px;
  }
 
  a{
    text-decoration: none;
    color: #000;
    font-size: 12px;
    text-transform: lowercase;
  }
  .footer1-redes{
    display: flex;
    gap: 10px;
    .redes-img{
      width: 35px;
      height: 35px;
    }
  }
 .redes-lorem{
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  padding-top: 30px;
 }
 }
 @media(min-width: 2000px) and (max-width: 2500px){
  .footer1{
    .plus{
      display: none
    }
    h4{
      font-size: 28px;
      font-weight: 500;
    }
   
    a{
      font-size: 24px;
    }
    .footer1-redes{
      .redes-img{
        width: 70px;
        height: 70px;
      }
    }
 }
 }
 @media(min-width: 492px) and (max-width: 1024px){
  .footer1{
    display: flex;
    flex-direction: column;
    h4{
      display: flex;
      gap: 10px;
    }
    li{
      display: none;
    }
   
      .footer1-redes{
        padding-left: 30px;
      }

      .a-lorem{
        padding-left: 30px;
        padding-top: 20px;
      }
  }
 }

 @media(min-width: 280px) and (max-width: 491px){
  .footer1{
    display: flex;
    flex-direction: column;
    h4{
      display: flex;
      gap: 10px;
    }
    li{
      display: none;
    }
   
      .footer1-redes{
        padding-left: 30px;
      }

      .a-lorem{
        padding-left: 30px;
        padding-top: 20px;
      }
  }
 }


`

export const Footer2 =  styled.div`
background: #000;
display: flex;
.footer2{
  display: flex;
  justify-content: center;
  p{
    color: #fff;
    width: 360px;
    margin-left: 20px;
  }

  .pagamentos{
    display: flex;
    gap: 5px;
    margin-left: 150px;
    padding-top: 15px;
    .vtex-barra{
      height: 25px;
      border-left: 1px solid #c4c4c4;
      
      .img-barra{
        margin-left: 5px;
      }
    }
  }

  .powered{
    margin-left: 150px;
    padding-top: 15px;
  }
}

.topoWpp{
  position: fixed;
  bottom: 40px;
  left: 95%;
  .bola{
    display: flex;
    background: #c4c4c4;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    .topo{
      align-item: center;
      margin-left: 10px;
      margin-top: 13px;
    }
  }
}
@media(min-width: 2000px) and (max-width: 2500px){
  p{
    font-size: 24px;
  }

  .pagamentos{
    margin-left: 550px;
    img{
      width: 36px;
      height: 36px;
    }

    .powered{
      width: 36px;
      height: 36px;
      margin-left: 350px;
    }
  }

}
@media(min-width: 492px) and (max-width: 1024px){
  .footer2{
  display: flex;
  flex-direction: column;
  .pagamentos{
    margin-left: 20px;
  }
  .powered{
    margin-left: 20px;
  }
  }
  }
  @media(min-width: 280px) and (max-width: 491px){
    .footer2{
      display: flex;
      flex-direction: column;
      .pagamentos{
        margin-left: 10px;
      }
      .powered{
        margin-left: 10px;
      }
      }
      .topowpp{
        position: fixed;
        left: 85%;
      }
  }


`