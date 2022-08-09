import styled from "styled-components";

export default function RenderUserUrls({index,url,shortUrl,visitCount}) { 
    return( 
        <Item value={index}>
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