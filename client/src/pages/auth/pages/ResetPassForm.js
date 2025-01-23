import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

import Button from "../components/Button";
import FormInput from "../components/FormInput";

export default function ResetPassForm() {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmNewPasswordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmNewPassword = confirmNewPasswordRef.current.value;

    if (newPassword !== confirmNewPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    const obj = {
      oldPassword,
      newPassword,
    };

    setLoading(true);

    // Simulate API request (replace with actual API call)
    setTimeout(() => {
      console.log("Password changed successfully:", obj);
      setLoading(false);
      alert("Password changed successfully!");
      navigate("/sign-in");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: "url('/path/to/your/image.webp')" }}>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Change Password</h2>
        <form onSubmit={submitFormHandler} className="space-y-4">
          <FormInput text="Old Password" type="password" ref={oldPasswordRef} />
          <FormInput text="New Password" type="password" ref={newPasswordRef} />
          <FormInput text="Confirm New Password" type="password" ref={confirmNewPasswordRef} />
          {!loading && (
            <div className="flex justify-between gap-4">
              <Button type="button" onClick={() => navigate("/forgot-password")}>Go Back</Button>
              <Button type="submit">Change Password</Button>
            </div>
          )}
          <div className="flex justify-center mt-4">
            <PulseLoader loading={loading} color="#007bff" />
          </div>
        </form>
      </div>
    </div>
  );  
}
