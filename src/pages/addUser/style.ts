import styled from "styled-components";

export const Container = styled.div`

    height:100vh;
    background-color:var(--orange-color) ;
    display:flex ;
    flex-direction:row ;
    justify-content:center ;
    align-items:center ;
    

`
export const HomeArea = styled.div`
    padding:3rem 6rem ;
    background-color:var(--white-color);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius:5px ;
    display:flex ;
    flex-direction:row ;
    align-items:center ;
    justify-content:space-evenly ;
    form{
        display:flex ;
        flex-direction:column ;
        gap:13px;
        margin-top:1.4rem ;
        input{
            padding:12px 7px ;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius:5px ;
            outline-color:var(--orange-color) ;
            ::placeholder{
                color:#00000059;
            }   
        }
        button{
            padding:10px 35px ;
            background-color:var(--button-color) ;
            color:var(--white-color) ;
            border-radius:5px ;
            border:none ;
            width:fit-content ;
            cursor: pointer;
            transition:0.2s ;
            :hover{
                opacity:0.8 ;
            }
        }
    }
    h1{
        color:#00000070 ;
        font-size:29px ;
    }
    span{
        color:var(--orange-color) ;
        opacity:1 ;
    }
    img.logo{
        margin-bottom:2rem ;
    }
    img.computer-image{
        position:relative ;
        right:-4rem ;
        top:3.2rem ;
        z-index:1 ;
    }
    img.layer{
        position:absolute ;
        right:20rem ;
        z-index:0 ;
        width:fit-content ;
        border-radius: 0 5px 5px 0 ;
    }
    p{
        color:var(--red-color) ;
    }

`