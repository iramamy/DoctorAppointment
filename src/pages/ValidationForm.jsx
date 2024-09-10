import * as yup from "yup";

const FormSchema = ({ isSignUp }) => {
  return yup.object().shape(
    isSignUp
      ? {
          fullName: yup.string().required("Name is required"),
          email: yup
            .string()
            .email("Invalid email")
            .required("Please enter your email"),
          password: yup
            .string()
            .min(5)
            .required("Password should be at lest 5 character"),
          confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Password does not match")
            .required("Please confirm your password"),
        }
      : {
          email: yup
            .string()
            .email("Invalid email")
            .required("Please enter your email"),
          password: yup
            .string()
            .min(5)
            .required("Password should be at lest 5 character"),
        }
  );
};

export default FormSchema;
