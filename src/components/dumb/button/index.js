import * as S from './styled'

const Button = ({children, to}) => {
    return (
        <a href={to}>
            <S.Button type="button" >{children}</S.Button>
        </a>
    )
}

const Image = ({path, to, type}) => {
    switch(type) {
        case 'Logo':
            return (
                <a href={to}>
                    <S.Logo src={path} />
                </a>
            )
            break;
        case 'Image':
            return (
                <a href={to}>
                    <S.Image src={path} />
                </a>
            )
            break;
        default:
            break;
    }
}
export {Button, Image};