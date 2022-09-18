import styled from 'styled-components';

export const SearchBox = styled.div`
    position:absolute;
    height: 25px;
    width: 25%;
    top:20px;
    left: 60%;
    padding: 10px;
    border-radius: 10px;
    border: 0.1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .8s;

    @media (max-width: 820px) {
        left: 50%;
    }
    > Link{
        width: 20px;
        height: 40px;
        border-radius: 50%;
        color:black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const Input = styled.input`
    width: 87%;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    color:black;

    @media (max-width: 820px) {
        width: 80%;
        margin-left: 1px;
    }

    margin-left: 10px;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-align: left;



`
