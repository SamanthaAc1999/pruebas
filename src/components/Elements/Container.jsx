const Container = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen p-4 box-border">
      {children}
    </div>
  );
};

export default Container;
