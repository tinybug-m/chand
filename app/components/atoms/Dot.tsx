type DotProps = {
  variant: 'green' | 'red';
};

const Dot = ({ variant }: DotProps) => {
  const variants = {
    green: 'bg-brand-green',
    red: 'bg-brand-red',
  };

  return (
    <span
      className={`w-1.5 h-1.5 rounded-full animate-pulse ${variants[variant]}`}
    />
  );
};

export default Dot;
