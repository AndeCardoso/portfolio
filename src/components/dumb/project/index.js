import { Button } from '../button';
import * as S from './styled'

const Project = ({ title, description, type, tecnologies, icon }) => {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <Button>{icon}{type}</Button>
            <S.Tecnologies>
                {[tecnologies]}
            </S.Tecnologies>
        </S.Container>
    )
}

export default Project;