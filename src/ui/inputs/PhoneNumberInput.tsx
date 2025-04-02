import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/ui/utils";
import React, { useEffect, useState } from "react";
import ReactOTPInput from "react-otp-input";

interface PhoneNumberInputProps {
  onComplete: (otp: string) => void;
  disabled?: boolean;
  className?: string;
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onComplete,
  disabled = false,
  className = "",
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const debouncedPhoneNumber = useDebounce(phoneNumber, 500);

  useEffect(() => {
    if (debouncedPhoneNumber.trim().length === 10) {
      onComplete(debouncedPhoneNumber);
    }
    // ? don't add onComplete here - it will cause infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPhoneNumber]);

  return (
    <ReactOTPInput
      containerStyle={cn("flex flex-row gap-x-2 md:gap-x-4", className)}
      value={phoneNumber}
      numInputs={10}
      shouldAutoFocus
      onChange={setPhoneNumber}
      renderInput={({ onChange, ...props }) => (
        <input
          disabled={disabled}
          onChange={(e) => {
            if (/^\d+$/.test(e.target.value) || e.target.value === "") {
              onChange(e);
              // Add animation class when input changes
              e.target.classList.add("input-change-animation");
              // Remove the animation class after animation completes
              setTimeout(() => {
                e.target.classList.remove("input-change-animation");
              }, 300);
            } else {
              e.preventDefault();
            }
          }}
          {...props}
          type="tel"
          inputMode="tel"
        />
      )}
      inputStyle="border-gold-400/40 text-1xl !h-full py-2 !w-[20px] sm:!w-[30px] rounded-none border-b-[1.5px] bg-transparent text-center font-semibold text-white focus:border-gold-400 focus:outline-none"
    />
  );
};
