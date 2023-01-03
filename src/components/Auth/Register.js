import { useState } from 'react';
import './Register.scss'
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import Language from '../Header/Language';
import { useTranslation, Trans } from 'react-i18next';

const Register = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleRegister = async () => {
        // validate
        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error('Invalid email!')
            return;
        }

        if (!password) {
            toast.error('Invalid password!')
            return;
        }
        // submit apis
        let data = await postRegister(email, password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className="register-container">
            <div className='header'>
                <span>{t('register.haveaccount')}</span>
                <button onClick={() => { navigate('/login') }}>{t('register.login')}</button>
                <Language />
            </div>
            <div className='title col-4 mx-auto'>
                HaoHoang
            </div>
            <div className='welcome col-4 mx-auto'>
                {t('register.start')}
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>{t('register.email')} (*)</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>{t('register.password')} (*)</label>
                    <input
                        type={'password'}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>{t('register.username')}</label>
                    <input
                        type={'text'}
                        className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >
                        {t('register.create')}
                    </button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}>
                        &#60;&#60; {t('register.homepage')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register;