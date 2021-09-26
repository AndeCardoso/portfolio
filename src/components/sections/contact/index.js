import { useState } from 'react';
import { SiMinutemailer } from "react-icons/si";

import Input from '../../dumb/input';
import { Submit } from '../../dumb/button';
import Select from '../../dumb/select';
import * as S from './styled';

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    const [contact, setContact] = useState({});
    
    const handlerContact = () => {
        setContact({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
        console.log(contact);
    };

    return (
        <S.Section id="contact">
            <S.Container>
                <S.Title> <SiMinutemailer />Contato</S.Title>
                <S.ContactForm>
                    <S.Inputs>
                        <Input type='name' onChange={event => setName(event.target.value)} placeHolder='Informe seu nome completo ou empresa...' />
                        <Input type='email' onChange={event => setEmail(event.target.value)} placeHolder='Informe seu e-mail...' />
                    </S.Inputs>
                    <Select onChange={event => setSubject(event.target.value)}>
                        <option selected disabled>Assunto...</option>
                        <option value="information">Informações</option>
                        <option value="budget">Orçamentos</option>
                        <option value="feedbacks">Feedbacks</option>
                        <option value="propose">Propostas</option>
                    </Select>
                    <S.TextArea placeholder="Digite sua mensagem..." onChange={event => setMessage(event.target.value)}></S.TextArea>
                    <Submit onClick={handlerContact} >Enviar</Submit>
                </S.ContactForm>
            </S.Container>
        </S.Section>
    )
}

export default Contact;