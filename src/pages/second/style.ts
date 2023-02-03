import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    flex-direction:row ;
`

export const Area = styled.div`
    height:100% ;
    background-color:var(--background-second-page) ;
    padding: 30px 47px 80px ;
    div.title{
        display:flex ;
        align-items:center ;
        justify-content:space-between ;
        border-bottom: 1px solid #0000001A ;
        margin-bottom:2rem ;
        padding-bottom:20px ;
        button.logout{
            padding: 7px 15px ;
            color:var(--white-color) ;
            background-color:var(--orange-color) ;
            border:none ;
            border-radius:5px ;
            cursor: pointer;
            transition:0.2s ;
            :hover{
                opacity:0.8 ;
            }
        }
        h1{
        color:#00000070 ;
        font-weight:400 ;
        span{
            font-weight:bold ;
        }
    }
    }
    div.carts{
        display:grid ;
        grid-template-columns:1fr 1fr 1fr ;
        gap:24px;
        div.cart{
            padding:10px 20px;
            background-color:var(--white-color) ;
            display:flex ;
            flex-direction:column ;
            border-radius:5px ;
            h3{
                margin-bottom:5px ;
            }
            img{
                width:20rem ;
                height:8rem ;
            }
        }
    }
    

`
export const SideBar = styled.div`

    
    width:fit-content ;
    background-color:var(--white-color) ;
    display:flex ;
    flex-direction:column ;
    padding:50px 35px ;
    

    img{
        width:11.875rem ;
        margin-bottom:2rem ;
    }

    button.inicio{
        background-color:var(--background-second-page) ;
        right:-2.2rem ;
        border-radius: 5px 0 0 5px ;
        position:relative ;  
        border:none ;
        margin-bottom:10px ;
        text-align: left;
        display:flex ;
        gap:5px;
        padding:15px 20px ;
        .signal{
            color:var(--orange-color) ;
        }
        
        
    }

    div.area-buttons{
        display:flex ;
        flex-direction:column ;
        height:fit-content ;
        gap:5px;
        button{
            background-color:var(--button-color) ;
            padding: 14px 20px ;
            color: var(--white-color);
            border:none ;
            border-radius:5px ;
            text-align:left ;
            font-size:16px ;
            .icon{
                font-size:20px ;
            }
        }
    }

`