import React from 'react';
import { ModalBackground, ModalContainer, ModalLink, ModalBorder, Title, TitleCloseBtn, Body, Button, CloseBtn } from './Modal.styled';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/route';

function Modal({ setOpenModal }) {
    return (
        <ModalBackground>
            <ModalContainer>
                <ModalBorder>
                    <TitleCloseBtn>
                        <CloseBtn
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            X
                        </CloseBtn>
                    </TitleCloseBtn>
                    <Title>
                        <b>Welcome to your personal phone book </b>
                    </Title>
                    <Body>
                        <ModalLink>
                            <p>If you don't registered - Please take Registration</p>
                            <Link to={REGISTER_ROUTE}>
                                <Button type='button'>Register</Button>
                            </Link>
                        </ModalLink>
                        <ModalLink>
                            <p>If you registered - Please SignIn</p>
                            <Link to={LOGIN_ROUTE}>
                                <Button type='button'>SignIn</Button>
                            </Link>
                        </ModalLink>
                    </Body>
                </ModalBorder>
            </ModalContainer>
        </ModalBackground >

    )
}

export default Modal
