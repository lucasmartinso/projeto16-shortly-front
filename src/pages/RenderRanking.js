import styled from "styled-components"; 

export default function RenderRanking() { 
    return(
        <User>
             <a>1. Fulaninha - 32 links - 1.703.584 visualizações</a>
        </User>
    )
} 

const User = styled.li`
    width: 100%; 
    height: 100%; 

    a { 
        font-weight: bold;
        font-size: 22px;
    }
`