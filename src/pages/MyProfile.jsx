import { useState } from "react";

// Custom components
import { assets } from "../assets/assets";
import BackArrow from "../components/BackArrow";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "example@vincent.com",
    phone: "+1 123 4 56 789",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church road, London",
    },
    gender: "Male",
    birth: "2000-01-20",
  });

  const [isEdit, seetIsEdit] = useState(true);

  return (
    <div>
      <BackArrow />
      <form>
        <div className="max-w-lg flex flex-col gap-2 text-sm mt-5">
          <img className="w-36 rounded" src={userData.image} alt="User image" />

          {isEdit ? (
            <input
              className="bg-gray-50 text-3xl font-medium max-w-60 mt-4 outline-none p-2"
              type="text"
              name="name"
              value={userData.name}
              onChange={() => {}}
            />
          ) : (
            <p className="font-medium text-3xl text-neutral-800 mt-4">
              {userData.name}
            </p>
          )}

          <hr className="bg-zinc-400 h-[1px] border-none" />

          <div>
            <p className="text-neutral-500 underline mt-4">
              CONTACT INFORMATION
            </p>
            <div>
              <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                <label className="font-medium">Email: </label>
                {isEdit ? (
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={() => {}}
                    className="bg-gray-100 max-w-52 outline-none p-2"
                  />
                ) : (
                  <p className="text-blue-500">{userData.email}</p>
                )}
              </div>

              <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                <label className="font-medium">Phone: </label>
                {isEdit ? (
                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={() => {}}
                    className="bg-gray-100 max-w-52 outline-none p-2"
                  />
                ) : (
                  <p className="text-blue-400">{userData.phone}</p>
                )}
              </div>

              <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                <label className="font-medium">Addresses: </label>
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      name="address1"
                      value={userData.address.line1}
                      onChange={() => {}}
                      className="bg-gray-100 max-w-52 outline-none p-2"
                    />{" "}
                    <br />
                    <input
                      type="text"
                      name="address2"
                      value={userData.address.line2}
                      onChange={() => {}}
                      className="bg-gray-100 max-w-52 outline-none p-2"
                    />{" "}
                    <br />
                  </>
                ) : (
                  <>
                    <p className="text-gray-500">{userData.address.line1}</p>{" "}
                    <br />
                    <p className="text-gray-500">{userData.address.line2}</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-neutral-500 underline mt-4">BASIC INFORMATION</p>
            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
              <p className="font-medium">Gender:</p>
              {isEdit ? (
                <select
                  className="cursor-pointer bg-gray-100 max-w-52 p-2"
                  name="gender"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-gray-500">{userData.gender}</p>
              )}

              <p className="font-medium">Birthday:</p>
              {isEdit ? (
                <input
                  type="date"
                  name="birth"
                  value={userData.birth}
                  onChange={() => {}}
                  className="bg-gray-100 max-w-52 outline-none p-2"
                />
              ) : (
                <p className="text-gray-500">{userData.birth}</p>
              )}
            </div>
          </div>

          <div className="mt-10">
            {isEdit ? (
              <button
                className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                type="button"
                onClick={() => seetIsEdit(false)}
              >
                Save information
              </button>
            ) : (
              <button
                className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                type="button"
                onClick={() => seetIsEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
