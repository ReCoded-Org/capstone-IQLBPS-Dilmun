import React from 'react';
import SignUp from '../../components/SignUp/SignUp';

export default function SignUpPage() {
  return (
    <div className="bg-background bg-signin-background bg-cover bg-no-repeat w-full min-h-[100vh] h-full" data-testid='sign-up-page'>
      <SignUp />
    </div>
  );
}
