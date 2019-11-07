import React, {useState} from 'react';

const IterationSample = () => {

    const[names, setNames] = useState([
        {id:1, text: '눈사람'},
        {id:2, text: '얼음'},
        {id:3, text: '눈'},
        {id:4, text: '바람'}
    ]);

    const[inputText, setInputText] = useState('');
    const[nextId, setNextId] = useState(5); // 새로운 항목을 추가 할 때 사용할 아이디

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        //기존의 항목에서 새로운 항목을 포함한 리스트를 만듦
        const nextName = names.concat({
            id : nextId,
            text : inputText
        });
        setNextId(nextId + 1);
        setNames(nextName); //하나의 항목만 추가한게 아니라, 새로운 항목을 추가한 새로운 리스트로 전체를 갈아 엎음
        setInputText('');
    };

    const onKeyPress = e => {
        if(e.key === 'Enter')
            onClick();
    };

    const onRemove = id =>{
        //기존의 항목중 선택된 아이디만 제외하고 새로운 리스트를 만듦
        const nextNames = names.filter(name=> name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => (
        <li key = {name.id} onDoubleClick={()=>onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return(
        <>
            <input 
            value={inputText}
            placeholder = "새로운 단어 입력"
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    ); 
}

export default IterationSample;