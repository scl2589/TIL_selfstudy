export default function createAsyncDispatcher(type, promiseFn) {
    // 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    // 새로운 함수를 만듭니다.
    // ...rest 를 사용하여 나머지 파라미터를 rest 배열에 담습니다.
    async function actionHandler(dispatch, ...rest) {
        dispatch({ type }); // 요청 시작됨 
        try {
            const data = await promiseFn(...rest);// rest 배열을 spread 로 넣어줍니다.
            dispatch({ 
                type: SUCCESS,
                data
            }) // 성공
        } catch (e) {
            dispatch({
                type : ERROR,
                error: e
            }) //실패
        }
    }

    return actionHandler; // 만든 함수를 반환합니다.
}

export const initialAsyncState = {
    loading: false,
    data: null,
    error: null
};

// 로딩중일 떄 바뀔 상태 객체
const loadingState = {
    loading: true,
    data: null,
    error: null
};

// 성공했을 때의 상태 만들어주는 함수
const success = (data) => ({
    loading: false,
    data,
    error: null,
});

// 실패했을 때의 상태 만들어주는 함수
const error = e => ({
    loading: false,
    data: null,
    error: e
})

// 3가지 액션을 처리하는 리듀서를 만들어줍니다
// type = actiontype을 의미
// key는 user나 users와 같이 상태 안에 들어 있는 특정 key를 말한다.
export function createAsyncHandler(type, key) {
   
    // 성공, 실패에 대한 액션 타입 문자열을 준비합니다.
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    function handler(state, action) {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: loadingState
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: success(action.data)
                };
            case ERROR:
                return {
                    ...state,
                    [key]: error(action.error)
                }
            default:
                return state;
        }
    
    }
    return handler;
}