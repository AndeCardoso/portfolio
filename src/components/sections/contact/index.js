import { useEffect, useState } from 'react';
import { SiMinutemailer } from "react-icons/si";
import { IoIosSend } from "react-icons/io";

import Input from '../../dumb/input';
import { Submit } from '../../dumb/button';
import Select from '../../dumb/select';
import { Alert } from '../../dumb/alert';

import api from '../../../services/api';
import { init, sendForm  } from 'emailjs-com';

import * as S from './styled';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState({});

    const [alert, setAlert] = useState({
        type: '',
        msg: ''
    });

    const [contactNumber, setContactNumber] = useState("000000");
  
    const generateContactNumber = () => {
        const numStr = "000000" + (Math.random() * 1000000 | 0);
        setContactNumber(numStr.substring(numStr.length - 6));
    }


    useEffect(() => {
        const timer = setTimeout(() => setAlert({})
        , 3000);
        return () => clearTimeout(timer);
    });
    
    const handlerContact = async () => {
        if(formValidation()) {
            setContact({
                name: name,
                email: email,
                subject: subject,
                message: message
            });
            
            generateContactNumber();

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
                setAlert({
                    type: 'sucess',
                    msg: 'Muito obrigado pelo seu contato, sua mensagem terá toda a atenção possível :D'
                })                
            }).catch(() => {
                setAlert({
                    type: 'error',
                    msg: 'Algo inesperado aconteceu, por favor tente novamente mais tarde!'
                });
            });
        }
    };

    const formValidation = () => {
        if(name === '' || email === '' || message === '') {
            setAlert({
                type: 'error',
                msg: 'Preencha todos os campos, por favor :)'
            });
            return false;
        } else {
            if(name.length < 2) {
                setAlert({
                    type: 'error',
                    msg: 'O nome precisa ter ao menos 2 caracteres!'
                })
                return false;

            } else if(!email.includes("@") || !email.includes(".")) {
                setAlert({
                    type: 'error',
                    msg: 'Informe um e-mail válido, por favor :)'
                })
                return false;

            } else if(message.length < 5) {
                setAlert({
                    type: 'error',
                    msg: 'Seja um pouco mais específico em sua mensagem, por favor :)'
                })
                return false;
            }
            return true;
        }
    }

    return (
        <S.Section id="contact">
            <S.Container>
                <Alert type={alert.type}>{alert.msg}</Alert>
                <S.Title> <SiMinutemailer />Contato</S.Title>
                <S.ContactForm>
                    <S.Inputs>
                        <Input type='name' onChange={event => setName(event.target.value)} placeHolder='*Informe seu nome completo ou empresa...' />
                        <Input type='email' onChange={event => setEmail(event.target.value)} placeHolder='*Informe seu e-mail...' />
                    </S.Inputs>
                    <Select onChange={event => setSubject(event.target.value)}>
                        <option selected disabled>Assunto...</option>
                        <option value="information">Informações</option>
                        <option value="budget">Orçamentos</option>
                        <option value="feedbacks">Feedbacks</option>
                        <option value="propose">Propostas</option>
                    </Select>
                    <S.TextArea placeholder="*Digite sua mensagem..." onChange={event => setMessage(event.target.value)}></S.TextArea>
                    <input type='hidden' name='contact_number' value={contactNumber} />
                    <Submit onClick={handlerContact} ><IoIosSend />Enviar</Submit>
                </S.ContactForm>
            </S.Container>
        </S.Section>
    )
}

export default Contact;