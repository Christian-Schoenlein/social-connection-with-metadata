'use client';

import { SignUp } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

type Role = 'role 1' | 'role 2';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(0);
  const [role, setRole] = useState<Role>();

  useEffect(() => {
    // Show the clerk component, if the user was redirected here by clerk
    // For example, after signing up with google, the user might need to fill in
    // a phone number
    if (location.hash.startsWith('#/')) setCurrentStep(1);
  }, []);

  const handleRoleSelection = (selectedRole: Role) => {
    setRole(selectedRole);
    setCurrentStep(1);
  };

  if (currentStep === 1) {
    return <SignUp unsafeMetadata={{ role }} />;
  }

  return (
    <div className="grid place-items-center min-h-screen">
      <button onClick={() => handleRoleSelection('role 1')}>role 1</button>
      <button onClick={() => handleRoleSelection('role 2')}>role 2</button>
    </div>
  );
}
