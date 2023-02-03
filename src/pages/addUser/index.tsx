import { Container, HomeArea } from "./style";
import logo from '../../assets/logo.png'
import image from '../../assets/imagehome.png'
import layer from '../../assets/layer.png'
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart";

export function AddUser(){

    const {AddUser}:any = useContext(CartContext)
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [password2, setPassword2] = useState<string>()
    const [inputemail, setInputemail] = useState<boolean>(false)
    const [inputpassword, setInputpassword] = useState<boolean>(false)
    

    function handleAddUser(e:any){
        e.preventDefault()
        if(!email){
            setInputemail(true)
            
        }
        if(!password){
            setInputpassword(true)
           
        }
        if(!email && !password){
            setInputemail(true)
            setInputpassword(true)
            
        }
        if(password !== password2){
            alert("Senhas Diferente.")
            return
        }
        else if(email && password){
            AddUser(email, password)
        }

    }

    return(
        <Container>
        <HomeArea>
            <img className="layer" src={layer} alt="" />
            <div className="form">
                <img className="logo" src={logo} alt="" />
                    <h1><span>Cadastro.</span></h1>
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
                    <input 
                        type="password"
                        placeholder="Digite sua senha novamente" 
                        value={password2}
                        onChange={(e)=>setPassword2(e.target.value)}
                        />
                        {inputpassword && (
                            <p>digite a senha!!!</p>
                        )}
                    <button onClick={handleAddUser}>Adicionar</button>
                </form>
            </div>
            <img className="computer-image" src={image} alt="" />
        </HomeArea>
    </Container>
    )
}