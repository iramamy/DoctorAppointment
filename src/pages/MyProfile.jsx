import { useState } from "react";
import { Formik, Form, Field } from "formik";

// Custom components
import { assets } from "../assets/assets";
import BackArrow from "../components/BackArrow";
import { ProfileFormSchema } from "./ValidationForm";

const MyProfile = () => {
  const initialValues = {
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "example@vincent.com",
    phone: "+1 123 4 56 789",
    address1: "57th Cross, Richmond",
    address2: "Circle, Church road, London",
    gender: "Male",
    birth: "2000-01-20",
  };

  const [userImage, setUserImage] = useState(null);
  const [profileUrl, setProfileUrl] = useState(initialValues.image);

  const submitForm = async (values) => {
    seetIsEdit(false);
    console.log("SUBMITTED");
    console.log(userImage);

    console.log(values);
  };

  const [isEdit, seetIsEdit] = useState(false);

  return (
    <div>
      <BackArrow />
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={ProfileFormSchema}
      >
        {({ errors }) => (
          <Form>
            <div className="max-w-lg flex flex-col gap-2 text-sm mt-5">
              <p className="text-gray-800 mt-4 text-3xl font-bold text-center mb-5">
                Your profile
              </p>

              <div className="relative">
                <img
                  className={`w-36 rounded ${isEdit ? "cursor-pointer" : ""}`}
                  src={profileUrl}
                  alt="User image"
                />
                {isEdit && (
                  <div
                    className="absolute inset-0 flex items-center rounded justify-center bg-gray-800 bg-opacity-30 text-white text-sm font-semibold opacity-0 hover:opacity-60 transition-opacity duration-300 cursor-pointer w-36 "
                    onClick={() =>
                      document.getElementById("imageUpload").click()
                    }
                  >
                    <label className="cursor-pointer">Change</label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      id="imageUpload"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          setUserImage(file);
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            if (reader.result) {
                              setProfileUrl(reader.result);
                            }
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                  </div>
                )}
              </div>

              {isEdit ? (
                <>
                  <Field
                    type="text"
                    name="name"
                    className={`bg-gray-50 text-3xl font-medium max-w-60 mt-4 outline-none p-2 ${
                      errors.name ? " border border-red-500" : ""
                    }`}
                  ></Field>
                  {errors.name && (
                    <small className="italic text-red-500">{errors.name}</small>
                  )}
                </>
              ) : (
                <p className="font-medium text-3xl text-neutral-800 mt-4">
                  {initialValues.name}
                </p>
              )}

              <hr className="bg-zinc-400 h-[1px] border-none" />

              <div>
                <p className="text-neutral-500 underline mt-4">
                  CONTACT INFORMATION
                </p>
                <div>
                  <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 relative">
                    <label className="font-medium">Email: </label>
                    {isEdit ? (
                      <>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Type your email address"
                          className={`bg-gray-100 max-w-52 outline-none p-2  ${
                            errors.email ? "border border-red-500" : ""
                          }`}
                        ></Field>
                        {errors.email && (
                          <small className="italic text-red-500 absolute top-5">
                            {errors.email}
                          </small>
                        )}
                      </>
                    ) : (
                      <p className="text-blue-500">{initialValues.email}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 relative">
                    <label className="font-medium">Phone: </label>
                    {isEdit ? (
                      <>
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Type your phone number"
                          className={`bg-gray-100 max-w-52 outline-none p-2 ${
                            errors.phone ? "border border-red-500" : ""
                          }`}
                        ></Field>
                        {errors.phone && (
                          <small className="italic text-red-500 absolute top-5">
                            {errors.phone}
                          </small>
                        )}
                      </>
                    ) : (
                      <p className="text-blue-400">{initialValues.phone}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 relative">
                    <label className="font-medium">Addresses: </label>
                    {isEdit ? (
                      <>
                        <Field
                          type="text"
                          name="address1"
                          placeholder="Type your address line 1"
                          className={`bg-gray-100 max-w-52 outline-none p-2 ${
                            errors.address1 ? "border border-red-500" : ""
                          }`}
                        ></Field>
                        {errors.address1 && (
                          <small className="italic text-red-500 absolute top-5">
                            {errors.address1}
                          </small>
                        )}
                        <br />
                        <Field
                          type="text"
                          name="address2"
                          placeholder="Type your address line 2"
                          className="bg-gray-100 max-w-52 outline-none p-2"
                        ></Field>{" "}
                        <br />
                      </>
                    ) : (
                      <>
                        <p className="text-gray-500">
                          {initialValues.address1}
                        </p>{" "}
                        <br />
                        <p className="text-gray-500">
                          {initialValues.address2}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-neutral-500 underline mt-4">
                  BASIC INFORMATION
                </p>
                <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 relative">
                  <label className="font-medium">Gender:</label>
                  {isEdit ? (
                    <>
                      <Field
                        as="select"
                        className={`cursor-pointer bg-gray-100 max-w-52 p-2 ${
                          errors.gender ? "border border-red-500" : ""
                        }`}
                        name="gender"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Field>
                      {errors.gender && (
                        <small className="italic text-red-500 absolute top-5">
                          {errors.gender}
                        </small>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-500">{initialValues.gender}</p>
                  )}
                </div>
                <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 relative">
                  <label className="font-medium">Birthday:</label>
                  {isEdit ? (
                    <>
                      <Field
                        type="date"
                        name="birth"
                        placeholder="Type your date of birth"
                        className={`bg-gray-100 max-w-52 outline-none p-2 ${
                          errors.birth ? "border border-red-500" : ""
                        }`}
                      ></Field>
                      {errors.birth && (
                        <small className="italic text-red-500 absolute top-5">
                          {errors.birth}
                        </small>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-500">{initialValues.birth}</p>
                  )}
                </div>
              </div>

              <div className="mt-10">
                {isEdit ? (
                  <button
                    className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    type="submit"
                  >
                    Save information
                  </button>
                ) : (
                  <span
                    className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                    onClick={() => seetIsEdit(true)}
                  >
                    Edit
                  </span>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyProfile;
