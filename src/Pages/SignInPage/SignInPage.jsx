import React from 'react';
import SignIn from '../../components/SignIn/SignIn';

export default function SignInPage() {
  return (
    <div className="bg-background bg-signin-background md:bg-contain bg-cover bg-no-repeat h-screen w-full overflow-y-auto">
      <SignIn />
    </div>
  );
}
