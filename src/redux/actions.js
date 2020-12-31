export const changeFormation = newFormationIndex => ({
    type: 'CHANGE_FORMATION',
    payload: {
        newFormationIndex
    }
});

export const setUserLoginStatus = value => ({
    type: 'CHANGE_USER_LOGIN_STATUS',
    payload: value 
});

export const setUserConsole = value => ({
    type: 'CHANGE_USER_CONSOLE_STATUS',
    payload: value 
});
