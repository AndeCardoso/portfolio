import * as S from './styled'

const Input = ({ type, onChange, placeHolder }) => {
    return (
        <S.Input type={type} onChange={onChange} placeholder={placeHolder} />
    )
}

export default Input;