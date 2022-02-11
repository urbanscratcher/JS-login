import React from 'react';

const MemberPwUpdatePage = () => {
    return (
        <>
            <div>
                MemberPwUpdatePage
            </div>

            <label>새비밀번호</label>
            <div>
                <input placeholder='새비밀번호를 입력하세요' />
            </div>

            <label>새비밀번호 확인</label>
            <div>
                <input placeholder='새비밀번호를 한 번 더 입력하세요' />
            </div>

            <div>
                <button>변경하기</button>
            </div>
        </>
    )
}

export default MemberPwUpdatePage;