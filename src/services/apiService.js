import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data);
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/v1/participant', data);
}

const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } })
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (userEmail, userPassword) => {
    return axios.post('api/v1/login', { email: userEmail, password: userPassword, delay: 0 });
}

const postRegister = (userEmail, userPassword, username) => {
    return axios.post('api/v1/register', { email: userEmail, password: userPassword, username });
}

const getQuizByUser = () => {
    return axios.get('api/v1/quiz-by-participant')
}

const getDataQuiz = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}

const postSubmitQuiz = (data) => {
    return axios.post('api/v1/quiz-submit', { ...data })
}

const postCreateNewQuiz = (description, name, difficulty, image) => {
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);

    return axios.post('api/v1/quiz', data);
}

const getAllQuizForAdmin = () => {
    return axios.get(`/api/v1/quiz/all`)
}

const putEditQuiz = (id, name, description, type, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('name', name);
    data.append('description', description);
    data.append('difficulty', type);
    data.append('quizImage', image);

    return axios.put('api/v1/quiz', data);
}

const deleteQuiz = (userId) => {
    return axios.delete(`/api/v1/quiz/${userId}`)
}

const postCreateNewQuestionForQuiz = (quiz_id, description, image) => {
    const data = new FormData();
    data.append('quiz_id', quiz_id);
    data.append('description', description);
    data.append('questionImage', image);

    return axios.post('api/v1/question', data);
}

const postCreateNewAnswerForQuestion = (description, correct_answer, question_id) => {

    return axios.post('api/v1/answer', {
        description, correct_answer, question_id
    });
}

export {
    postCreateNewUser, getAllUsers, putUpdateUser,
    deleteUser, getUserWithPaginate, postLogin,
    postRegister, getQuizByUser, getDataQuiz,
    postSubmitQuiz, postCreateNewQuiz, getAllQuizForAdmin,
    putEditQuiz, deleteQuiz, postCreateNewQuestionForQuiz,
    postCreateNewAnswerForQuestion
}