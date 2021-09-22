import * as S from './styled'

const Link = ({children, to}) => {
    return (
        <S.A href={to}>
            <S.Link type="button" >{children}</S.Link>
        </S.A>
    )
}

const Button = ({children, to}) => {
    return (
        <S.A href={to} target="_blank" rel="noreferrer" >
            <S.Button>{children}</S.Button>
        </S.A>
    )
}

const Image = ({path, to, type}) => {
    switch(type) {
        case 'Logo':
            return (
                <S.A href={to}>
                    <S.Logo src={path} />
                </S.A>
            )
        case 'Image':
            return (
                <S.A href={to}>
                    <S.Image src={path} />
                </S.A>
            )
        default:
            break;
    }
}
export {Button, Image, Link};