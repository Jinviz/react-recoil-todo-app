import React from 'react';
import {currentUserNameQuery} from "../userAtoms";
import {useRecoilValue} from "recoil";

const CurrentUserInfo = () => {
    const userName = useRecoilValue(currentUserNameQuery);
    return (<div>{userName}</div>)
}

export default CurrentUserInfo;
