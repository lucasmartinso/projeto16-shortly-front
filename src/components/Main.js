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
        
        try {
            const userSignIn = {name,email,password,confirmPassword};
            const promise = await axios.post("http://localhost:4600/signup",userSignIn);
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
            <Title>
                <a>Seja Bem-Vindo, Fulano</a>
            <Options>
                <span>Home</span> 
                <span>Ranking</span>
                <span>Sair</span>
            </Options>
            </Title>

            <Body>
                <img src={logo} alt="logo"/> 
            </Body>
                <form onSubmit={sendInfo}>
                    <Data error={error}>
                    <input
                        type="url"
                        placeholder="Links que cabem no bolso"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    <button onClick={() => setClicked(true)}>
                        {clicked ? (
                        <ThreeDots color="white" height={80} width={80} />
                        ) : (
                        "Entrar"
                        )}
                    </button>
                    </Data>
                </form>
            
            <Main>
                <Item>
                    <p>https://</p>
                    <a>abhxj</a>
                    <span>Quantidade de visitantes: 271</span>
                </Item>
            </Main>

            <Center>
            {error ? (
                <ErrorMessage>
                    <h3>Url inválida ou já existente</h3>
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
const Title = styled.div`
    width: 88%; 
    height: 100%; 
    display: flex; 
    justify-content: space-between;
    padding-left: 250px;

    a { 
        color: rgba(93, 144, 64, 1);
    }
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
  justify-content: center;
  flex-direction: row;
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
    margin-left: 69px;
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
const Main = styled.ul`
  width: 100%; 
  height: 100%; 
  margin-top: 60px;
  display: flex; 
  align-items: center;
  flex-direction: column; 
`
const Item = styled.li`
  width: 61%; 
  height: 60px;
  background-color: rgba(128, 204, 116, 1);
  color: rgba(255, 255, 255, 1); 
  display: flex; 
  align-items: center;
  justify-content: space-around;
  border-radius: 12px;
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