import React from 'react';

type DotProps = {
  color: String;
};

const Dot = (props: DotProps) => {
  const { color } = props;
  return (
    <span className={`w-1.5 h-1.5 rounded-full bg-[${color}] animate-pulse`} />
  );
};

export default Dot;
