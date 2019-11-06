import React, {useState} from 'react';

const Voca = (props) => {
    const {eng,kor} = props;
    const [answer, setAnswer] = useState('');

    const onChange = e => {
        setAnswer(e.target.value);
    };

    const onClick = () => {
        if(answer === kor){
            alert("정답입니다.");
            console.log(`${eng} 정답입니다.`);
        }
        else{
            alert("틀렸습니다.");
            console.log(`${eng} 틀렸습니다.`);
        }
        setAnswer('');
    };

    const onKeyPress = e => {
        if(e.value === "Enter"){
            onClick();
        }
    };

    return(
        <div>
            <p>{eng}</p>
            <input
                type="text"
                name="answer"
                placeholder = "뜻을 입력하세요."
                value={answer}
                onChange = {onChange}
                onKeyPress = {onKeyPress}
            />
            <button onClick = {onClick}>정답 확인</button>
        </div>
    )
}

export default Voca;