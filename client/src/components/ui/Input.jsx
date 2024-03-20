// Custom Input component
export const Input = ({ type, placeholder }) => {
  return (
    <input
      className="cursor-default block w-full rounded-sm border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:outline-none  hover:ring-slate-600 duration-75  sm:text-sm sm:leading-6"
      type={type}
      placeholder={placeholder}
    />
  );
};
