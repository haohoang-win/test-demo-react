import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import './ListQuiz.scss';
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const ListQuiz = (props) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [arrQuiz, setArrQuiz] = useState([])
    useEffect(() => {
        getQuizData()
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser();
        if (res && res.EC === 0) {
            setArrQuiz(res.DT)
        }
        // console.log(arrQuiz);
    }

    return (
        <div className="list-quiz-container container">
            {arrQuiz && arrQuiz.length > 0 &&
                arrQuiz.map((quiz, index) => {
                    return (
                        <div key={`${index}-quiz`} className="card" style={{ width: " 18rem" }}>
                            <img src={`data:image/jpeg;base64,${quiz.image}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1}</h5>
                                <p className="card-text">{quiz.description}</p>
                                <button
                                    onClick={() => navigate(`/quiz/${quiz.id}`, { state: { quizTitle: quiz.description } })}
                                    className="btn btn-primary"
                                >
                                    {t('listquiz.start')}
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            {arrQuiz && arrQuiz.length === 0 &&
                <div>
                    {t('listquiz.noquiz')}
                </div>
            }
        </div>
    )
}

export default ListQuiz;