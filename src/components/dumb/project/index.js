import { Button } from '../button';
import { AiFillIeCircle } from "react-icons/ai";
import * as S from './styled'

const Project = ({ title, description, type, tecnologies }) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <Button>{type}</Button>
            <S.Tecnologies>
                {tecnologies}
            </S.Tecnologies>
        </S.Container>
    )
}

export default Project;