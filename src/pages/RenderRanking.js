import styled from "styled-components"; 

export default function RenderRanking({index,name,linksCount,visitCount}) { 
    return(
        <User>
             <a>{index}. {name}  -  {linksCount} links -  {visitCount} visualizações</a>
        </User>
    )
} 

const User = styled.li`
    width: 100%; 
    height: 100%;
    margin-bottom: 25px; 

    a { 
        font-weight: bold;
        font-size: 22px;
    }
`