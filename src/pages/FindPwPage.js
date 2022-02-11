import React from 'react';

const FindPwPage = () => {
    return (
        <>
            <div>
                FindPwPage
            </div>

            <label>아이디</label>
            <div>
                <input placeholder='아이디를 입력해주세요' />
            </div>


            <label>이름</label>
            <div>
                <input placeholder='이름을 입력해주세요' />
            </div>
            <label>휴대폰 인증</label>
            <div>
                <div>
                    <input placeholder="('-' 제외) 휴대폰 번호를 입력하세요" />
                    <button>발급</button>
                </div>
                <div>
                    <input placeholder='인증번호 6자리' />
                    <button>인증</button>
                </div>
            </div>



            <div>
                <button>비밀번호 찾기</button>
            </div>
        </>
    );
}

export default FindPwPage;