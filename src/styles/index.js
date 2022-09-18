import styled from 'styled-components'

export const Menu = styled.div`
    >ul{
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        top: 35px;
        left: 30%;

        > li{
            > a {
                text-decoration: none;
                margin-right: 50px;
                color: black;
                font-family: 'Inter';
                font-size: 16px;
                font-weight: 500;
                line-height: 20px;
                letter-spacing: 0em;
            }

            > a:hover{
                color:#119598
            }
        }

    @media (min-width: 950px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        left: 0px;
    }

    @media (max-width:600px) {
       > li{
        display: none;
       }
    }
    
}

`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    

    > li{
        > a{
            text-decoration: none;
            color: black;
            font-family: 'Inter';
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0em;
         }

         > a:hover{
                color:#119598
            }
    }

    Button{
        width: 150px;
        margin-right:25px ;
    }

    Button:hover{
        background-color: #119598;
    }

    @media (min-width: 950px) {
        position: relative;
        left: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media (max-width:600px) {
        position: relative;
        left: 95px;
       
    }

    @media (min-width: 360px) {
        top: 10px;
        left: 15px;
    }


`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: -5px;
    top: 35px;
    width: 130px;
    height: 30px;

    > p{            
        height: 19px;
        width: 86px;
        position: absolute;
        left: 25px;
        top: 35px;

        font-family: 'Inter';
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
    }

    @media (min-width: 800px) {
        position: absolute;
        left: 5%;
        top: 41px;
        width: 130px;
        height: 30px;
        display: flex;
        flex-direction: row;

        > p{
            position: absolute;
            font-family: 'Inter';
            height: 19px;
            width: 86px;
            left: 44px;
            top: 6.5px;
        }
    }

 

`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: row-reverse; 
    
    @media (max-width: 950px) {
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        
    }
`;

export const ImageInvestments = styled.div`
    position: relative;
    height: 35vh;
    width: 45%;
    max-width: 600px;
    min-width: 300px;
    
    top: 80px;
    border-radius: 20px;
    padding: 163px 0px 163px 0px;
    margin: 10px;

    background-color: #47ADAF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 950px) {
        height: 15vh;
        width: 70vw;

        margin-bottom: 200px;
    }

`;

export const ContentStart = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items:start;
    position: relative;
    
    bottom: 55px;

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

    @media (max-width: 950px) {
        width: 90vw;
        position: relative;
        left: 35px;

        >a{
            position: relative;
            top: 70px;
        }
        
    }

    @media (min-width: 360px) {
        
        >h1 ,p{
            position:relative;
            left: -35px;
        }
    }

`;
