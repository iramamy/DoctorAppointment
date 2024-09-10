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

const phoneRegEx =
  /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)(\d{1,4}[-.\s]?){1,2}\d{1,4}$/;

const ProfileFormSchema = () => {
  return yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Please enter your email"),
    phone: yup
      .string()
      .matches(phoneRegEx, "Phone number is not valid")
      .required("Phone number required"),
    address1: yup.string().required("Enter your address"),
    gender: yup.string().required("Gender is required"),
    birth: yup
      .date()
      .required("Please enter your birth date")
      .max(new Date(), "Birth date invalid"),
  });
};

export { FormSchema, ProfileFormSchema };
