import styled from 'styled-components'

const Container = styled.div`
    height: 75px;
    background-color: #FFFFFF;
    min-height: auto;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px 0 15px;
        box-sizing: border-box;
        position: relative;
    }
`

export const Header = () => {

    return (
        <Container>
            <div className='container'>
            </div>
        </Container >
    )
}