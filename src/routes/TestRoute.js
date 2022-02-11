import React, { useEffect } from 'react';

function TestRoute({ history }) {
    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push('/test');
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?');
        return () => {
            unblock();
        };
    }, [history]);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );
}

export default TestRoute;