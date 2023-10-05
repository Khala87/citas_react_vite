const Error = ({ children }) => {
  return (
    <div className="bg-red-600 text-white text-center p-1 mb-3 font-bold rounded-md">
      {children}
    </div>
  );
};

export default Error;
