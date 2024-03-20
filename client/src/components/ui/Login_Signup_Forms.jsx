export const Form = ({ children }) => {
  return (
    <form className="w-full sm:w-11/12 max-w-md border rounded-md p-8 bg-white drop-shadow-sm">
      {children}
    </form>
  );
};
