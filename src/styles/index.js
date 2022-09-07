import styled from 'styled-components'

export const Menu =  styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
    left: 30%;
    top: 20px;

    > a{
        text-decoration: none;
        margin-right: 50px;
        color: black;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
    }
`;

export const Links =  styled.div`
    position: relative;
    left: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    padding: 15px;

    > a{
        text-decoration: none;
        color: black;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
    }

    Button{
        width: 150px;
        margin-right:25px ;
    }

    Button:hover{
        background-color: #119598;
    }

`;

export const Logo =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 70px;

    @media (min-width: 867px) {
        position: absolute;
        left: 5%;
        top: 40px;
        width: 130px;
        height: 30px;
        display: flex;
        flex-direction: row;

        >p{
            position: absolute;
            height: 19px;
            width: 86px;
            left: 44px;
            top: 6.5px;
        }
    }

    > p{            
        height: 19px;
        width: 86px;

        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
    }
`;

export const Content =  styled.div``;

export const ImageInvestments =  styled.div`
    position: absolute;
    height: 35vh;
    width: 45%;
    max-width: 600px;
    min-width: 450px;
    left: 50%;
    top: 170px;
    border-radius: 20px;
    padding: 163px 0px 163px 0px;

    background-color: #47ADAF;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const ContentStart =  styled.div`

    width: 40%;
    display: flex;
    flex-direction: column;
    align-items:start;
    position: absolute;
    left: 45px;
    top: 250px;

    > h1{
        font-family: 'Inter';
        font-size: 40px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0em;
        text-align: left;
    }

    >p{
        position: relative;
        top: 30px;

        font-family: "inter";
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;

        color: rgba(0, 0, 0, 0.44);

    }

    > a{
        position: relative;
        top: 100px;
        text-decoration: none;

        > Button{
            width: 205px;
        }
    }

`;
