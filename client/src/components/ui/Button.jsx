export const Button = ({ type, children }) => {
  return (
    <button
      className=" duration-300 border rounded w-full mt-4 p-2 bg-slate-900 hover:bg-slate-800 text-white"
      type={type}
    >
      {children}
    </button>
  );
};
