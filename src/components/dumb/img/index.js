import * as S from './styled'

const Image = ({ type, path }) => {
    switch (type) {
        case 'Perfil':
            return <S.Perfil src={path} />
        case 'Logo':
            return <S.Logo src={path} />
        default:
            return null;
    }
}

export default Image;