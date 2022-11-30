import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'
import { toast } from 'react-toastify';
import { putEditQuiz } from '../../../../services/apiService';
import _ from 'lodash';

const ModalEditQuiz = (props) => {
    const { show, setShow, data } = props;

    const handleClose = () => {
        setShow(false);
        setName('');
        setDescription('');
        setType('');
        setImage('');
        setPreviewImage('');
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('')
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        if (!_.isEmpty(data)) {
            // update state
            setName(data.name);
            setDescription(data.description);
            setType(data.difficulty);
            if (data.image) {
                setPreviewImage(`data:image/jpeg;base64,${data.image}`);
            }
        }
    }, [data]);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0])
        } else {
            // setPreviewImage('')
        }
    }

    const handleSubmitEditUser = async () => {
        // call apis
        let res = await putEditQuiz(data.id, name, description, type, image)
        if (res && res.EC === 0) {
            toast.success(res.EM);
            // await props.fetchListUsers();
            // props.setCurrentPage(1)
            // await props.fetchListUsersWithPaginate(props.currentPage)
            props.actionsQuizFinish();
            handleClose();
        }

        if (res && res.EC !== 0) {
            toast.error(res.EM)
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>  */}

            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit a quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" value={description} onChange={(event) => setDescription(event.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Type</label>
                            <select className="form-select" onChange={(event) => setType(event.target.value)} value={type}>
                                <option value="EASY">EASY</option>
                                <option value='MEDIUM'>MEDIUM</option>
                                <option value='HARD'>HARD</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus /> Update file Image
                            </label>
                            <input type='file' hidden id='labelUpload' onChange={(event) => handleUploadImage(event)} />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitEditUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEditQuiz;