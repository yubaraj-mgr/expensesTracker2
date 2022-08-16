import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { checkEmailVerification } from "../helper/axiosHelper";

const EmailVerify = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    (async () => {
      const email = searchParams.get("e");
      const emailCode = searchParams.get("c");
      await checkEmailVerification({ email, emailCode });
    })();
  }, []);
  return <div>Your Email is Verified</div>;
};

export default EmailVerify;
