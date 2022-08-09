import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/Logo.png";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() { 
    const [clicked, setClicked] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    async function sendInfo(event) { 
        event.preventDefault();
        setClicked(true);
        
        try {
            const userSignIn = {name,email,password,confirmPassword};
            const promise = await axios.post("https://projeto16-shortly-lucas.herokuapp.com/signup",userSignIn);
            console.log(promise.data);
            navigate("/");
        } catch (err) {
            setError(true);
            setClicked(false);
            console.log(err);
        }
    }

    return(
        <Container>
            <Options>
                <span onClick={()=> navigate("/signin")}>Entrar</span> 
                <a onClick={sendInfo}>Cadastre-se</a>
            </Options>

            <Body>
                <img src={logo} alt="logo"/> 
            </Body>
                <form onSubmit={sendInfo}>
                    <Data error={error}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                     <input
                        type="password"
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required
                    />
                    <button>
                        {clicked ? (
                        <ThreeDots color="white" height={80} width={80} />
                        ) : (
                        "Criar Conta"
                        )}
                    </button>
                    </Data>
                </form>
            
            <Center>
            {error ? (
                <ErrorMessage>
                    <h3>Informações Incorretas</h3>
                    <h4 onClick={() => setError(false)}>X</h4>
                </ErrorMessage>
                ) : (
                    ""
                )}
            </Center>
        </Container>
        
    );
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    margin-top: 40px; 
`
const Options = styled.div`
    width: 88%; 
    height: 100%;
    display: flex; 
    justify-content: flex-end;
    font-size: 14px; 

    span { 
        color: rgba(156, 156, 156, 1); 
        margin-right: 22px;

        &:hover{ 
            cursor: pointer;
        }
    }

    a { 
        color: rgba(93, 144, 64, 1);

        &:hover{ 
            cursor: pointer;
        }
    }
`
const Body = styled.div`
    width: 100%; 
    height: 100%; 
    margin-top: 28px;
    margin-bottom: 139px;
    display: flex; 
    justify-content: center; 
`
const Data = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${(props) => (props.error ? "70px" : "32px")};

  input {
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    font-color: rgba(0, 0, 0, 1);
    padding-left: 15px;
    font-size: 20px;
    margin-bottom: 25px;
    border-radius: 12px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
  }

  button {
    width: 182px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    background-color: rgba(93, 144, 64, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    border-radius: 12px;
    border: none;
    font-weight: bold;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);

    &:hover {
      cursor: pointer;
    }
  }
`
const Center = styled.div`
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: center;
`
const ErrorMessage = styled.div`
  width: 50%;
  height: 60px;
  background-color: #ff7474;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  border-radius: 12px;
  margin-bottom: 20px;

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 700;
  }
`
