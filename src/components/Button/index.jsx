import { Button } from './styles'
import propTypes from 'prop-types'

function DefaultButton({children,theme, ...props}) {
    return (
        <Button {...props} theme={theme}>
            {children}
        </Button>
    )
}

DefaultButton.prototype = {
    children: propTypes.node.isRequired,
    theme: propTypes.string

}

export default DefaultButton