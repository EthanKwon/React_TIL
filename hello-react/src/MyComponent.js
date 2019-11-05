import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name,children,favoriteNumber}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br/>
            children의 이름은 {children}
            입니다.
            <br/>
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>        
    );
};

MyComponent.defaultProps = {
    name : '기본 이름'
};

//해당 Props 파라미터에 Type을 정해준다. 
MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
}

export default MyComponent;