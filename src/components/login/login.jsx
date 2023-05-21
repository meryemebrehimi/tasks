import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone number is not valid"),
    email: Yup.string()
      .email("email number is not valid")
      .required("email number is not valid"),
    date: Yup.string().required("date is not valid"),
  });

  return (
    <div className="w-full flex justify-center items-center  h-[60vh]">
      <Formik
        validationSchema={schema}
        initialValues={{
          phone: "",
          email: "",
          date: "",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="w-[100%] m-auto">
            <div className="w-full mt-3">
              <div className="flex flex-col text-left relative">
                <label htmlFor="phone">phone </label>
                <input
                  name="phone"
                  value={values.phone}
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 rounded-lg text-xl text-center text-black"
                  type="text"
                />
              </div>
              <p
                className={` text-sm text-left text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
              >
                {errors.phone && touched.phone && errors.phone + " *"}
              </p>
            </div>
            <div className="w-full mt-3">
              <div className="flex flex-col text-left relative">
                <label htmlFor="phone">email </label>
                <input
                  name="email"
                  value={values.email}
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 rounded-lg text-xl text-center text-black"
                  type="text"
                />
              </div>
              <p
                className={` text-sm text-left text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
              >
                {errors.email && touched.email && errors.email + " *"}
              </p>
            </div>
            <div className="w-full mt-3">
              <div className="flex flex-col text-left relative">
                <label htmlFor="phone">date </label>
                <input
                  name="date"
                  value={values.date}
                  id="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 rounded-lg text-xl text-center text-black"
                  type="date"
                />
              </div>
              <p
                className={` text-sm text-left text-DarkPurple dark:text-red-600 font-IranLight mb-2`}
              >
                {errors.date && touched.date && errors.date + " *"}
              </p>
            </div>
            <div className="w-full mt-6">
              <input
                type="submit"
                className="w-full bg-green-600 rounded-xl p-3 text-center font-bold text-xl"
                value={"submit"}
                name=""
                id=""
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
