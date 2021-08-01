import styled from 'styled-components'

export const Wrapper = styled.div`
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width:100%;
      border: 1px solid lightblue;
      border-radius: 2rem;
      height: 100%;

      button {
        border-radius: 0 0 20px 20px;
        background-color:lavender;
      }

      img{
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
      }

      div {
        font-family: 'Montserrat', sans-serif;
        margin: 0 1rem;
      }


`