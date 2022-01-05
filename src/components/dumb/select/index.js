import * as S from './styled';

const Select = ({ children, onChange }) => {
    return(
        <S.Select defaultValue="" onChange={onChange}>
            <option value="" disabled >Assunto...</option>
            { children }
        </S.Select>
    );
};

export default Select;