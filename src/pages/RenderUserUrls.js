import axios from "axios";
import styled from "styled-components";
import UserInfosContext from "../contexts/UserInfosContext";
import { useContext, useEffect, useState } from "react";

export default function RenderUserUrls({index,url,shortUrl,visitCount,setUserUrlsInfo}) { 
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

    return( 
        <Item value={index} onClick={() => visits(shortUrl)}>
            <p>{url}</p>
            <a>{shortUrl}</a>
            <span>Quantidade de visitantes: {visitCount}</span>
        </Item>
    );
}

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