import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteQuiz } from '../../../../services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteQuiz = (props) => {
    const { show, setShow, data } = props;

    const handleClose = () => setShow(false);

    const handleSubmitDeleteQuiz = async () => {
        let res = await deleteQuiz(data.id)
        if (res && res.EC === 0) {
            toast.success(res.EM);
            props.actionsQuizFinish();
            handleClose();
            // await props.fetchListUsers();
            // props.setCurrentPage(1)
            // await props.fetchListUsersWithPaginate(1)
        }

        if (res && res.EC !== 0) {
            toast.error(res.EM)
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Comfirm Delete the Quiz?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this quiz? Id = <b>{data && data.id ? data.id : ''}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDeleteQuiz}>
                        Comfirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteQuiz;