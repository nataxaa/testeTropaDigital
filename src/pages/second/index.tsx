import { Area, Container, SideBar } from "./style";
import logo from '../../assets/logo.png'
import imagecart from '../../assets/imagecart.png'
import {AiFillSignal, AiOutlineFileText} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

export function SecondPage(){
    const {Logout}:any = useContext(CartContext)
    return(
        <Container>
            <SideBar>
                <img src={logo} alt="" />
                <button className="inicio"><AiFillSignal className="signal"/>Início</button>
                <div className="area-buttons">
                    <button><AiOutlineFileText className="icon"/> Contatos</button>
                    <button><AiOutlineFileText className="icon"/> Relatorios</button>
                    <button><AiOutlineFileText className="icon"/> Contatos</button>
                    <button><AiOutlineFileText className="icon"/> Contatos</button>
                    <button><AiOutlineFileText className="icon"/> Contatos</button>
                </div>
            </SideBar>
            
            <Area>
            <div className="title">
                <h1>Olá <span>Usuário.</span></h1>
                <button className="logout" onClick={Logout}>Sair</button>
            </div>

            <div className="carts">
                <div className="cart">
                <img src={imagecart} alt="" />
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className="cart">
                    <img src={imagecart} alt="" />
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className="cart">
                <img src={imagecart} alt="" />
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className="cart">
                <img src={imagecart} alt="" />
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className="cart">
                <img src={imagecart} alt="" />
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className="cart">
                <img src={imagecart} alt="" />
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                <div className="cart">
                <img src={imagecart} alt="" />
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesettin...</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesettin...</p>
                </div>
                
            </div>
            </Area>
        </Container>
    )
}