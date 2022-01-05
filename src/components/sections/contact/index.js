import { useState } from 'react';
import { SiMinutemailer } from "react-icons/si";
import { IoIosSend } from "react-icons/io";
import { useAlert } from 'react-alert'; 

import Input from '../../dumb/input';
import { Submit } from '../../dumb/button';
import Select from '../../dumb/select';

import api from '../../../services/api';

import * as S from './styled';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const alert = useAlert();

    const handlerContact = async () => {
        if(formValidation()) {            
            const numStr = "000000" + (Math.random() * 1000000 | 0);
            const contactNumber = numStr.substring(numStr.length - 6);
            const data = {
                service_id: 'service_4696ire',
                template_id: 'template_lrbjoki',
                user_id: 'user_22W5ceFAUyJlJMi9a9YVN',
                template_params: {
                    from_name: name,
                    from_email: email,
                    message: message,
                    subject: subject,
                    contact_number: contactNumber,
                }
            }
            
            await api.post('/v1.0/email/send', data)
            .then((response) => {
                console.log(response)
                alert.show(
                    'Muito obrigado pelo seu contato, sua mensagem terá toda a atenção possível :D',
                    {type: 'success'}
                ); 
            }).catch(() => {
                alert.show(
                    'Algo inesperado aconteceu, por favor tente novamente mais tarde!',
                    {type: 'error'}
                );
            });
        }
    };

    const formValidation = () => {
        if(name === '' || email === '' || message === '') {
            alert.show(
                'Preencha todos os campos, por favor :)',
                {type: 'error'}
            );
            return false;
        } else {
            if(name.length < 2) {
                alert.show(
                    'O nome precisa ter ao menos 2 caracteres!',
                    {type: 'error'}
                );
                return false;

            } else if(!email.includes("@") || !email.includes(".")) {
                alert.show(
                    'Informe um e-mail válido, por favor :)',
                    {type: 'error'}
                );
                return false;

            } else if(message.length < 5) {
                alert.show(
                    'Seja um pouco mais específico em sua mensagem, por favor :)',
                    {type: 'error'}
                );
                return false;
            }
            return true;
        }
    }

    return (
        <S.Section id="contact">
            <S.Container>
                <S.Title> <SiMinutemailer />Contato</S.Title>
                <S.ContactForm>
                    <S.Inputs>
                        <Input type='name' onChange={event => setName(event.target.value)} placeHolder='*Informe seu nome completo ou empresa...' />
                        <Input type='email' onChange={event => setEmail(event.target.value)} placeHolder='*Informe seu e-mail...' />
                    </S.Inputs>
                    <Select defaultValue="0" onChange={event => setSubject(event.target.value)}>
                        <option value="information">Informações</option>
                        <option value="budget">Orçamentos</option>
                        <option value="feedbacks">Feedbacks</option>
                        <option value="propose">Propostas</option>
                    </Select>
                    <S.TextArea placeholder="*Digite sua mensagem..." onChange={event => setMessage(event.target.value)}></S.TextArea>
                    <Submit onClick={handlerContact} ><IoIosSend />Enviar</Submit>
                </S.ContactForm>
            </S.Container>
        </S.Section>
    )
}

export default Contact;