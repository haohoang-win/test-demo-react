import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from 'lodash'
import './DetailQuiz.scss'

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizId = params.id;

    useEffect(() => {
        fetchQuestions()
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `id` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answer = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index == 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answer.push(item.answers)
                    })
                    return { questionsId: key, answer, questionDescription, image }
                })
                .value()
            console.log(data, location);
        }
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">Questions 1: How you are doing?</div>
                    <div className="answer">
                        <div className="a-child">A. djsajdja</div>
                        <div className="a-child">B. djsajdja</div>
                        <div className="a-child">C. djsajdja</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary ml-3">Next</button>
                </div>
            </div>
            <div className="right-content">
                Count down
            </div>
        </div>
    )
}

export default DetailQuiz;