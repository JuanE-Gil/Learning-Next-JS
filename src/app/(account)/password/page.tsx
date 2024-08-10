export const metadata = {
  title: 'Register',
  description: 'Register page',
};

export default function ForgotPassword() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-indigo-100">
      <form className="w-full md:w-1/3 rounded-lg">
        <h2 className="text-2xl text-center text-gray-600 mb-8">Forgot Password</h2>
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                className="
                  w-full
                  border
                  rounded
                  px-3
                  py-2
                  text-gray-700
                  focus:outline-none
                "
              />
            </div>
          </div>
          <button
            type="submit"
            className="
              w-full
              py-2
              mt-8
              rounded-full
              bg-blue-400
              text-gray-100
              focus:outline-none
            "
          >
            Recover Password
          </button>
        </div>
      </form>
    </div>
  );
}
