import React from 'react';
import Voca from './component/Voca'

function App() {
  return (
    <div>
      <h1>영단어 시험</h1>
      <br/>
      <Voca eng = 'area' kor = '분야'/>
      <Voca eng = 'be due to' kor = '~할 예정이다'/>
      <Voca eng = 'career' kor = '직업'/>
      <Voca eng = 'promote' kor = '승진시키다'/>
      <Voca eng = 'manual' kor = '안내서'/>
      <Voca eng = 'resign' kor = '사임하다'/>
      <Voca eng = 'status' kor = '상황'/>
      <Voca eng = 'temporary' kor = '임시의'/>

    </div>

  );
}

export default App;
