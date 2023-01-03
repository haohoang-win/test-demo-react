import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation, Trans } from 'react-i18next';

const ModalResult = (props) => {
    const { t } = useTranslation();
    const { show, setShow, dataModalResult } = props;

    const handleClose = () => setShow(false);
    console.log('check data: ', dataModalResult);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t("modalresult.result")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>{t("modalresult.question")}<b>{dataModalResult.countTotal}</b></div>
                    <div>{t("modalresult.correct-answer")}<b>{dataModalResult.countCorrect}</b></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t("modalresult.show")}
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {t("modalresult.close")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;