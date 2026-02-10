import ErrorContent from "@/components/blocks/error";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ErrorContent
        title="Whoops!"
        subtitle="Something went wrong"
        description="The page you're looking for isn't found, we suggest you go back to home."
      />
    </div>
  );
};

export default ErrorPage;
