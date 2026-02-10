import { Icons } from "./icons";

const LogoWithText = () => {
  return (
    <>
      <Icons.Logo className="h-6 w-6" />{" "}
      <span className="font-nunito mb-1 text-2xl font-bold tracking-tight">
        pointr
      </span>
    </>
  );
};

export default LogoWithText;
