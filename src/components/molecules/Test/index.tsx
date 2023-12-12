import React, { useEffect } from 'react';
import { FacebookLoginClient } from '@greatsumini/react-facebook-login';
import queryString from 'query-string';

// import { auth, facebookProvider } from '@/libs/firebase';
// import { signInWithPopup } from 'firebase/auth';

const Text = () => {
  const handleClick = async () => {
    const a = queryString.stringifyUrl({
      url: 'https://www.facebook.com/v18.0/dialog/oauth',
      query: { client_id: '288361790845551', redirect_uri: 'http://localhost:3000/callback' },
    });
    window.location.href = a;
  };

  return <button onClick={handleClick}>login with facebook</button>;
};

export default Text;
