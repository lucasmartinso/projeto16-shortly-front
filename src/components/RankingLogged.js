import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/Logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserInfosContext from "../contexts/UserInfosContext";
import RenderRanking from "../pages/RenderRanking";

export default function RankingLogged() { 
    const [usersRanking,setUsersRanking] = useState([]);
    const [name, setName] = useState("");
    const { token } = useContext(UserInfosContext);
    const navigate = useNavigate();

    useEffect(() => { 
        const promise = axios.get("https://projeto16-shortly-lucas.herokuapp.com/ranking");

        promise.then(response => { 
            console.log(response.data);
            setUsersRanking(response.data);
        });
    },[]); 

    useEffect(() => {
        const config = {
        headers: { Authorization: `Bearer ${token}` },
        };
        const promise = axios.get("https://projeto16-shortly-lucas.herokuapp.com/users/me",config);

        promise.then(response => {
            setName(response.data[0].name); 
        }); 

        promise.catch(error => { 
            console.log(error);
        })
    },[]);

    return(
        <Container>
            <Header>
                <a>Seja Bem-Vindo, {name}!</a>
            <Options>
                <span onClick={() => navigate("/")}>Home</span> 
                <span onClick={() => navigate("/ranking")}>Ranking</span>
                <span  onClick={() => navigate("/signin")}>Sair</span>
            </Options>
            </Header>

            <Body>
                <img src={logo} alt="logo"/> 
            </Body>

            <Title>
                <ion-icon name="trophy-sharp"></ion-icon>
                <a>Ranking</a>
            </Title>

            <Container2>
            <UsersRanking>
                <ul>
                    {usersRanking.map((rank,index) => ( 
                        <RenderRanking 
                            index= {index+1}
                            name= {rank.name}
                            linksCount={rank.linksCount}
                            visitCount={rank.visitCount}
                        /> 
                    ))}
                </ul>
            </UsersRanking>
            </Container2>

        </Container>
        
    );
}

const Container = styled.div`
    width: 100%; 
    height: 100%; 
    margin-top: 40px;  
`
const Header = styled.div`
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
const Title = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center;
    align-items: center;

    ion-icon { 
        width: 56px;
        height: 56px;
        color: rgba(255, 210, 51, 1);
        margin-right: 20px;
    } 

    a { 
        font-size: 36px;
        font-weight: bold; 
    }
`
const Container2 = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center;
    margin-top: 60px;
`
const UsersRanking = styled.div`
    width: 65%; 
    height: 241px; 
    display: flex; 
    flex-direction: column;
    padding: 19px 5px 0px 40px; 
    border-radius: 8px; 
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12); 

    ul { 
        display: flex; 
        flex-direction: column;
        align-items: center;
    }
`
