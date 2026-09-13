"use client";

import { useSearchParams } from "next/navigation";

const VerifyAccountForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div>
      <h1>user Email : {email}</h1>
    </div>
  );
};

export default VerifyAccountForm;
