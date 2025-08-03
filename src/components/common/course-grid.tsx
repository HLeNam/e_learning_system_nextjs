const CourseGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-8 grid grid-cols-3 gap-8">{children}</div>;
};

export default CourseGrid;
