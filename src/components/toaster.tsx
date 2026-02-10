import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";

const MyToaster = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      toastOptions={{
        iconTheme: {
          primary: "#6468f0",
          secondary: "#e8e8e8",
        },
        style: {
          background: resolvedTheme === "dark" ? "#1a1a1a" : "#fff",
          color: resolvedTheme === "dark" ? "#fff" : "#000",
        },
      }}
    />
  );
};

export default MyToaster;
