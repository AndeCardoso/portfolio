import * as S from './styled'

const Link = ({children, to}) => {
    return (
        <a href={to}>
            <S.Link type="button" >{children}</S.Link>
        </a>
    )
}

const Button = ({children, to}) => {
    return (
        <a href={to} target="_blank" rel="noreferrer" >
            <S.Button>{children}</S.Button>
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
        case 'Image':
            return (
                <a href={to}>
                    <S.Image src={path} />
                </a>
            )
        default:
            break;
    }
}
export {Button, Image, Link};