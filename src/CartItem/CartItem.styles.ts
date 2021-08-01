import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Verdana, sans-serif;
    border-bottom: 1px solid black;

    div {
      flex: 1;
      margin-bottom:.3rem;
    }

    .information, .buttons {
        display:flex;
        justify-content: space-between;
    }
    img {
      max-width: 190px;
      object-fit: cover;
      margin-left:60px;
    }

`