import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Main = (props: Props) => {
  const { children } = props;

  return (
    <div
      className={
        'relative z-10 max-w-5xl mx-auto min-h-screen flex flex-col p-6 md:p-12 lg:p-16'
      }
    >
      {children}
    </div>
  );
};

export default Main;
