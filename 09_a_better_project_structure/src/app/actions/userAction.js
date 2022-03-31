

// export function setName(number) {
//     return {
//         type: 'SET_NAME',
//         payload: number
//     }
// };

// export function setAge(number ) {
//     return {
//         type: 'SET_AGE',
//         payload: number
//     }
// };


const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';

export function setName(number) {
    return {
        type: SET_NAME,
        payload: number
    }
};

export function setAge(number ) {
    return {
        type: SET_AGE,
        payload: number
    }
};
