import FormItems from "@/components/login/FormItems";
import OauthGroup from "@/components/login/OauthGroup";

const Login = async () => {
  return (
    <div className="flex justify-center py-3 min-h-screen h-fit">
      <div className="bg-primary my-auto w-[40rem] max-h-[50rem] py-4 h-screen min-h-fit flex justify-center rounded-xl text-secundary shadow-md">
        <div className="w-[90%] flex flex-col h-fit md:p-0 py-2">
          <h1 className="text-4xl text-center font-bold p-8">Login</h1>
          <FormItems />

          <div className="flex flex-col gap-2 font-semibold h-full mt-10 ">
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-full h-px my-8 bg-gray-200 border-0" />
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
