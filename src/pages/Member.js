import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import useAsync from '../hooks/useAsync';
import { useParams } from 'react-router-dom';

async function getMember(id) {
    const response = await axios.get(
        `http://localhost:8080/member/${id}`
    );
    return response.data;
}

function MemberInfo() {
    const id = useParams().memberId;
    const [state] = useAsync(() => getMember(id), [id], false);
    const { loading, data: member, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!member) return null;


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>회원 정보</h2>
            <div>{member.id}</div>
            <div> {member.grade_name}</div >
            <div>{member.status_name}</div>
            <div>
                <label>가입일: </label>
                {dayjs(member.reg_at).format("YYYY-MM-DD HH:mm")}
            </div>
        </div >
    )
}

export default MemberInfo;