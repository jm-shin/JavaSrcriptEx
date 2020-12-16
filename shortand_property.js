//shorthand properties (프로퍼티 축약)
const convertExtension = (fullFileName) => {
    const fullFileNameArr = fullFileName.split('.');
    const filename = fullFileNameArr[0];
    console.log(fullFileNameArr[1] && fullFileNameArr[1])
    const ext = fullFileNameArr[1] && fullFileNameArr[1] === 'png'? 'jpg':'gif';
    return {
        filename, // 프로퍼티의 key와 value에 할당할 변수명이 동일한 경우 value 생략 가능.
        ext,
    }
}

// console.log(convertExtension('abc.gif'))
convertExtension('abc.png');
