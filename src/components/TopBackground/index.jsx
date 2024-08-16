import { Background } from './styles'

function Banner({children, ...props}) {
    return (
        <Background {...props}>{children}</Background>
    )
}

export default Banner