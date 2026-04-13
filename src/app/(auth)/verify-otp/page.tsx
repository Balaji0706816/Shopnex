import AuthLayout from "../../../components/auth/auth-layout";
import VerifyOtpForm from "../../../components/auth/verify-otp-form";

export default function VerifyOtpPage() {
  return (
    <AuthLayout
      title="Verify your email"
      subtitle="Enter the OTP sent to your email to activate your account."
    >
      <VerifyOtpForm />
    </AuthLayout>
  );
}