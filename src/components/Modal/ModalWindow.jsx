import React from 'react'
import Modal from "components/Modal/Modal";
import { useState } from "react";
import { Button, P } from './Modal.styled';
function ModalWindow() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <P>
            <b>You may lose your memory but this secure contact book will stay forever! </b>
            <Button type="button" onClick={() => { setOpenModal(true) }}>Let`s go...</Button>
            {openModal && <Modal setOpenModal={setOpenModal} />}
        </P>
    )
}

export default ModalWindow;
