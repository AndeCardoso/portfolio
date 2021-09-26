import * as S from './styled'

const Link = ({ children, to }) => {
    return(
        <S.Link type="button" >
            <a href={to} rel="noreferrer">{children}</a>
        </S.Link>
    );
};

const Button = ({ children, to }) => {
    return(
        <S.Button>
            <a href={to} target="_blank" rel="noreferrer" >{children}</a>
        </S.Button>  
    );
};

const Submit = ({ children, onClick }) => {
    return(
        <S.Button onClick={onClick} type="button">{children}</S.Button>
    );
};

const Image = ({path, to, type}) => {
    switch(type) {
        case 'Logo':
            return (
                <a href={to}>
                    <S.Logo src={path} />
                </a>
            )
        case 'FooterLogo':
            return (
                <a href={to}>
                    <S.FooterLogo src={path} />
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
    };
};
export {Button, Image, Link, Submit};