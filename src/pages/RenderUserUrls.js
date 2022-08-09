import axios from "axios";
import styled from "styled-components";
import UserInfosContext from "../contexts/UserInfosContext";
import { useContext, useEffect, useState } from "react";

export default function RenderUserUrls({index,url,shortUrl,visitCount,setUserUrlsInfo,id}) { 
    const { token } = useContext(UserInfosContext);

    async function visits(shortUrl) { 
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            }; 

            const promise = await axios.get(`https://projeto16-shortly-lucas.herokuapp.com/urls/open/${shortUrl}`);
            console.log(promise.data); 
            const promises = axios.get("https://projeto16-shortly-lucas.herokuapp.com/users/me",config);
    
            promises.then(response => {
                setUserUrlsInfo(response.data[0].shortenedUrls);
            }); 
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteUrl(id) { 
        console.log(id);
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            }; 

            const promise = await axios.delete(`https://projeto16-shortly-lucas.herokuapp.com/urls/${id}`,config);
            console.log(promise.data); 
            const promises = axios.get("https://projeto16-shortly-lucas.herokuapp.com/users/me",config);
    
            promises.then(response => {
                setUserUrlsInfo(response.data[0].shortenedUrls);
            }); 
        } catch (err) {
            console.log(err);
        }
    }

    return( 
        <Container>
            <Item value={index} onClick={() => visits(shortUrl)}>
                <p>{url}</p>
                <a>{shortUrl}</a>
                <span>Quantidade de visitantes: {visitCount}</span>
            </Item>
            <Trash onClick={() => deleteUrl(id)}>
                <ion-icon name="trash-sharp"></ion-icon>
            </Trash>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
`
const Item = styled.li`
  width: 100%; 
  height: 60px;
  margin-bottom: 42px;
  background-color: rgba(128, 204, 116, 1);
  color: rgba(255, 255, 255, 1); 
  display: flex; 
  align-items: center;
  justify-content: space-around;
  border-radius: 12px;

  &:hover { 
    cursor: pointer;
  }
`
const Trash = styled.div`
    width: 10%;
    height: 60px;
    background-color: white;
    display: flex; 
    justify-content: center; 
    align-items: center;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    border: 1px solid rgba(120, 177, 89, 0.12);
    border-radius: 5px;

    ion-icon { 
        width: 24px;
        height: 24px; 
        color: rgba(234, 79, 79, 1);

        &:hover { 
            cursor: pointer;
        }
    }
`