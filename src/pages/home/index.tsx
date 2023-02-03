import { Container, HomeArea } from "./style";
import logo from '../../assets/logo.png'
import image from '../../assets/imagehome.png'
import layer from '../../assets/layer.png'
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import {Link} from 'react-router-dom'

export function Home(){

    const {login}:any = useContext(CartContext)
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [inputemail, setInputemail] = useState<boolean>(false)
    const [inputpassword, setInputpassword] = useState<boolean>(false)

    function handleLogin(e:any){
        e.preventDefault()
        if(!email){
            setInputemail(true)
        }
        if(!password){
            setInputpassword(true)
            return
        }
        if(!email && !password){
            setInputemail(true)
            setInputpassword(true)
            return
        }
        else if(email && password){
            login(email, password)
        }
    }
    
    
    return(
        <Container>
            <HomeArea>
                <img className="layer" src={layer} alt="" />
                <div className="form">
                    <img className="logo" src={logo} alt="" />
                        <h1>Bem Vindo ao <span>painel</span></h1>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="Digite seu e-mail" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                            {inputemail && (
                                <p>digite o email!!!</p>
                            )}
                        <input 
                            type="password" 
                            placeholder="Digite sua senha" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                            {inputpassword && (
                                <p>digite a senha!!!</p>
                            )}
                        
                            <Link className="link" to={'/AddUser'}>Não tenho cadastro.</Link>
                        <button onClick={handleLogin}>Acessar</button>
                    </form>
                </div>
                <img className="computer-image" src={image} alt="" />
            </HomeArea>
        </Container>
    )
}