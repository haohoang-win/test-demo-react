import _ from 'lodash'

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (
            <></>
        )
    }

    const handleCheckbox = (event, aId, qId) => {
        // console.log('data: ', data, id);
        props.handleCheckbox(aId, qId)
    }

    return (
        <>
            {data.image ?
                <div className='q-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} />
                </div>
                :
                <div className='q-image'></div>
            }
            <div className="question">Questions {index + 1}: {data.questionDescription}</div>
            <div className="answer">
                {data.answer && data.answer.length &&
                    data.answer.map((a, index) => {
                        return (
                            <div className="a-child" key={`answer-${index}`}>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={a.isSelected}
                                        value=""
                                        onChange={(event) => handleCheckbox(event, a.id, data.questionsId)}
                                    />
                                    <label className="form-check-label">
                                        {a.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Question;