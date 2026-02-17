import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-6xl md:text-7xl font-extralight tracking-tighter leading-none',
      h2: 'text-4xl font-light tracking-tighter tabular-nums',
      h3: 'text-lg font-medium tracking-tight',
      h4: 'text-xl font-semibold',
      subtitle: 'text-lg font-medium text-white/70',
      body: 'text-base font-normal',
      caption: 'text-[10px] font-black uppercase',
    },
    color: {
      default: 'text-white',
      primary: 'text-cyan-400',
      muted: 'text-white/50',
      danger: 'text-red-500',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
  },
});

type TypographyProps<T extends React.ElementType = 'span'> = VariantProps<
  typeof typographyVariants
> & {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Typography = <T extends React.ElementType = 'span'>({
  as,
  variant,
  color,
  className,
  ...props
}: TypographyProps<T>) => {
  const defaultTag: Record<string, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    subtitle: 'h6',
    body: 'p',
    bodyMain: 'p',
    caption: 'span',
  };

  const Tag = as || defaultTag[variant ?? 'body'];

  // Merge cva output with extra className
  return (
    <Tag
      className={twMerge(typographyVariants({ variant, color }), className)}
      {...props}
    />
  );
};

Typography.displayName = 'Typography';

export default Typography;
