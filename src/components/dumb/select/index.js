import * as S from './styled';

const Select = ({ children, onChange }) => {
    return(
        <S.Select onChange={onChange}>
            { children }
        </S.Select>
    );
};

export default Select;