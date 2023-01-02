import * as IconFont from "react-feather";

const Icon = ({ name, className }) => {
  const Component = IconFont[name];

  return <Component className={className} />;
};

export default Icon;
