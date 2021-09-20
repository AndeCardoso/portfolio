import * as S from './styled'
import Logo from '../../img/logo.png'
import { Image, Button } from '../dumb/button'

const Header = () => {
    return (
        <S.Header>
            <Image type="Logo" path={Logo} to='#' />
            <S.Menu>
                <Button to='#'>HOME</Button>
                <Button to='#'>SOBRE</Button>
                <Button to='#'>CONTATO</Button>
            </S.Menu>
        </S.Header>
    )
}

export default Header;