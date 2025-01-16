import Form from "@/components/login/Form";
import OauthGroup from "@/components/login/OauthGroup";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Login =  async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-primary w-[40rem] h-[50rem] flex justify-center rounded-xl text-secundary shadow-md">
        <div className="w-[90%] flex flex-col ">
          <h1 className="text-4xl text-center font-bold p-8">Login</h1>
          <Form />

          <div className="flex flex-col gap-2 font-semibold h-full mt-10 ">
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium -translate-x-1/2 bg-primary left-1/2 text-sm text-secundary">
                Ou entre com
              </span>
            </div>

            <div className="flex justify-between w-full gap-5">
              <OauthGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

