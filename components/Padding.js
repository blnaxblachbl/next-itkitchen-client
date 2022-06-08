import styled from 'styled-components'
import {
    Menu
} from '.'

const View = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 24px 15px;
    overflow: visible;
    min-height: calc(100vh - 70px);
    max-width: 1200px;
    box-sizing: border-box;
`

export const Padding = ({
    children = null,
    className = "",
    ...props
}) => {
    return (
        <View className={className} {...props}>
            {children}
        </View>
    )
}