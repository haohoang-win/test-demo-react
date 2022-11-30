import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiService";
import ModalDeleteQuiz from "./ManageDeleteQuiz";
import ModalEditQuiz from './ModalEditQuiz';

const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([])

    const [showModalEditUser, setShowModalEditUser] = useState(false);
    const [data, setData] = useState({})
    const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);

    useEffect(() => {
        fetchQuiz()
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT)
        }
    }

    const handleClickButtonEdit = (id) => {
        setShowModalEditUser(true);
        setData(listQuiz[id])
    }

    const actionsQuizFinish = () => {
        fetchQuiz()
    }

    const handleClickButtonDelete = (id) => {
        setShowModalDeleteQuiz(true);
        setData(listQuiz[id])
    }

    return (
        <>
            <div>List Quizzes:</div>
            <table className="table table-hover table-bordered my-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz && listQuiz.map((item, index) => {
                        return (
                            <tr key={`table-quiz-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.difficulty}</td>
                                <td style={{ display: 'flex', gap: '15px' }}>
                                    <button className="btn btn-warning" onClick={() => handleClickButtonEdit(index)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleClickButtonDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <ModalEditQuiz
                show={showModalEditUser}
                setShow={setShowModalEditUser}
                data={data}
                actionsQuizFinish={actionsQuizFinish}
            />
            <ModalDeleteQuiz
                show={showModalDeleteQuiz}
                setShow={setShowModalDeleteQuiz}
                data={data}
                actionsQuizFinish={actionsQuizFinish}
            />
        </>
    )
}

export default TableQuiz;