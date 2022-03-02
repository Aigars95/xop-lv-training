import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

type responseType = {
  name: string;
  accessToken: string;
}
const LoginFacebook = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState<responseType>({ name: '', accessToken: '' });

  const responseFacebook = (response: responseType) => {
    setData(response);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="App">
      <div className="facebook__button-wrapper">
        {!login && (
        <FacebookLogin
          appId="1203379503810358"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          // @ts-ignore
          callback={responseFacebook}
          icon="fa-facebook"
        />
        )}
        {login && <h1>{data.name}</h1>}
      </div>
    </div>
  );
};

export default LoginFacebook;
