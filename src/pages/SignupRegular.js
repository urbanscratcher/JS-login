import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

async function post(data, navigate) {
    console.log(data);
    try {
        await axios.post(
            `http://localhost:8080/signup/regular`,
            data).then(res => {
                console.log(res);

                // 성공시 로그인 페이지로
                navigate('/login');
            })
    } catch (error) {
        console.log(error);
    };
};

function SignUpRegular() {
    const { register, formState: { errors }, handleSubmit, getValues, setValue } = useForm();
    const navigate = useNavigate();

    // Callback version of watch.  It's your responsibility to unsubscribe when done.
    // const watchAllFields = watch();
    // React.useEffect(() => {
    //     const subscription = watch((value, { name, type }) => console.log(value, name, type));
    //     return () => subscription.unsubscribe();
    // }, [watch]);

    const onSubmit = (data) => {
        //주민등록번호 -> 생년월일, 성별 
        const ssn1 = getValues("ssn1");
        const ssn2 = getValues("ssn2");

        let tempYear = "";
        if (ssn2 === '1' || ssn2 === '2') {
            tempYear = '19';
        };
        if (ssn2 === '3' || ssn2 === '4') {
            tempYear = '20';
        };

        const birthYear = tempYear.concat("", ssn1.toString().substring(0, 2));
        const birthMonth = ssn1.toString().substring(2, 4);
        const birthDay = ssn1.toString().substring(4, 6);
        const birthAt = birthYear.concat('-', birthMonth).concat('-', birthDay);

        setValue('calendar_solar_lunar', 'S');
        setValue('birth_at', birthAt);
        setValue('sex', ssn2 % 2 ? 'M' : 'F');

        post(data, navigate);
    };

    return (
        <div style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center' }}>
            <h2>SignUpPage</h2>

            <form onSubmit={handleSubmit(onSubmit)} style={{ flexDirection: 'column', width: '50%', flexWrap: 'wrap' }}>
                <div>
                    <h3>로그인 정보</h3>
                    <div style={{ flexDirection: 'row' }}>
                        <label>아이디</label>
                        <input {...register("id", { required: true })} />
                        <button>ID체크</button>
                        {errors.id?.type === 'required' && "id is required"}
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <label>비밀번호</label>
                        <input {...register("password")} />
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <label>비밀번호 확인</label>
                        <input />
                    </div>
                </div>

                <div>
                    <h3>회원 정보</h3>
                    <div style={{ flexDirection: 'row' }}>
                        <label>이름</label>
                        <input {...register("name")} />
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <label>휴대폰 번호</label>
                        <input {...register("phone")} />
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <label>주민등록번호</label>
                        <input {...register("ssn1")} />
                        -
                        <input {...register("ssn2")} />
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <label>이메일</label>
                        <input {...register("email")} />
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <label>주소</label>
                        <input {...register("address")} />
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <label>상세주소</label>
                        <input {...register("address_detail")} />
                    </div>
                    <div style={{ flexDirection: 'row' }}>
                        <label>우편번호</label>
                        <input {...register("zip_code")}></input>
                    </div>
                </div>
                <div>
                    <input type="submit" value="제출" />
                </div>
            </form>
        </div >
    );
}

export default SignUpRegular;