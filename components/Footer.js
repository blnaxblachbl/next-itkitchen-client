import styled from "styled-components"

const Container = styled.div`
    background-color: #FFFFFF;
    padding-bottom: 15px;
`
const Copyright = styled.div`
    width: 100%;
    padding-top: 15px; 
    border-top: 1px solid #acacac78;
    box-sizing: border-box;
    .afisha {
        display: block;
        padding-bottom: 15px; 
        color: #000;
        font-size: 14px;
        text-align: center;
    }
    .itkitchen {
        padding-top: 15px; 
        border-top: 1px solid #acacac78;
    }
    .title {
        font-size: 14px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 10px;
        color: #000;
    }
    .subtutle { 
        font-size: 12px;
        text-align: center;
        margin: 0 auto;
        color: #9DA8AC;
        a {
            font-size: 12px;
            text-decoration: none;
        }
    }
`
const Content = styled.div`
    display: flex;
    padding: 15px 80px;
    box-sizing: border-box;

    .menu {
        width: 50%;
        box-sizing: border-box;

        .item {
            cursor: pointer;
            color: #fff;
            margin-bottom: 15px;
            :last-child {
                margin-right: 0;
            }
            .logo {
                width: 50px;
                height: 50px;
            }
            .afisha-name {
                color: #FFF748;
                display: inline;
                margin-left: 15px;
            }
        }
        .current-item {
            display: flex;
            width: fit-content;
            align-items: center;
            margin-bottom: 24px;
        }
        .current {
            color: #FFF748;
        }
    }
    .contacts {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        box-sizing: border-box;
        
        .contact-item {
            color: #fff;
            margin-bottom: 15px;
            :last-child {
                margin-right: 0;
            }
            a {
                text-decoration: none;
                color: #FFF748;
            }
        }
    }
    .title {
        font-size: 17px;
        font-weight: bold;
    }
    
    @media (max-width: 1200px) {
        padding-left: 15px;
        padding-right: 15px;
    } 
    @media (max-width: 600px) {
        flex-direction: column;
        .contacts {
            align-items: flex-start;
        }
    }
`

export const Footer = () => {
    return (
        <Container>
            <Content>
                
            </Content>
            <Copyright>
                <div className='afisha'>
                    © Новый проект
                </div>
                <div className='itkitchen'>
                    <div className='title'>© Copyright 2022</div>
                    <div className='subtutle'>
                        Разработано студией{" "}
                        <a target={'_blank'} rel="noreferrer" href='https://itkitchen.su'>
                            IT Kitchen{" "}
                        </a>
                    </div>
                </div>
            </Copyright>
        </Container>
    )
}