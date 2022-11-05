import React from 'react';
import SignIn from '../../components/SignIn/SignIn';

export default function SignInPage() {
  return (
    <div className="bg-background bg-signin-background bg-cover bg-no-repeat w-full h-screen" data-testid='sign-in-page'>
      <SignIn />
    </div>
  );
}
