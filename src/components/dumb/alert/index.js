import * as S from './styled'

export const Alert = ({ type, children }) => {
    switch (type) {
        case 'error':
            return (<S.ErrorAlert>{children}</S.ErrorAlert>);
        case 'sucess':
            return (<S.SucessAlert>{children}</S.SucessAlert>);
        default:
            return ('');
    }
};