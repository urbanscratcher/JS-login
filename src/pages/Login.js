import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


async function post(data, navigate) {
    console.log(data);
    try {
        await axios.post(
            `http://localhost:8080/login`,
            data
        ).then(res => {
            console.log(res);

            // 성공시 Test Page로
            navigate('/test');
        })
    } catch (error) {
        console.log(error);
    };
};

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        post(data, navigate);
    }

    return (
        <div style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center' }}>
            <h2>
                Login
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>아이디</label>
                <div>
                    <input {...register("id")} />
                </div>
                <label>비밀번호</label>
                <div>
                    <input {...register("password")} />
                </div>
                <div>
                    <a href="http://naver.com">아이디 찾기</a> | <a href="http://kakao.com">비밀번호 찾기</a> | <a href="http://google.com">회원가입</a>
                </div>
                <div>
                    <input type="submit" value="로그인" />
                </div>
            </form>
        </div>
    );
}



export default Login;