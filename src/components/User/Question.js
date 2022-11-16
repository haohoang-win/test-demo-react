import _ from 'lodash'

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (
            <></>
        )
    }

    return (
        <>
            {data.image &&
                <div className='q-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} />
                </div>
            }
            <div className="question">Questions {index + 1}: {data.questionDescription}</div>
            <div className="answer">
                {data.answer && data.answer.length &&
                    data.answer.map((a, index) => {
                        return (
                            <div className="a-child" key={`answer-${index}`}>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                    />
                                    <label class="form-check-label">
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