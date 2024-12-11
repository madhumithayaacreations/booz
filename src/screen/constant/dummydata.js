import StyledFormInput from "./FormInput";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// Rename dummydata to DummyData
const DummyData = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  return (
    <div>
      <StyledFormInput
        placeholder={`${t("ENTER_YOUR_EMAIL_/_MOBILE_NUMBER")}...`}
        className="username-input"
        name="email"
        control={control}
        rules={{
          required: t("PLEASE_ENTER_YOUR_MOBILE_NUMBER_EMAIL"),
          pattern: {
            value: /^([^\s@]+@[^\s@]+\.[^\s@]+)|(\d{10})$/,
            message: t("INVALID_EMAIL_ADDRESS"),
          },
        }}
        inputProps={{
          className: "text-center",
          // You can also spread additional props here if needed
        }}
        errors={errors}
      />
    </div>
  );
};

export default DummyData; // Export the renamed component
