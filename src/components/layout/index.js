import * as S from './styled'
import Header from '../header'
import Footer from '../footer';
import Main from '../main';

const Layout = () => {
    return (
        <S.Container>
            <Header />
            <Main />
            <Footer />
        </S.Container>
    )
}

export default Layout;