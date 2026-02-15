// app/components/Typography.tsx
import { cva, type VariantProps } from "class-variance-authority";
import React, { JSX } from "react";

const typographyVariants = cva("", {
    variants: {
        variant: {
            h1: "text-4xl font-extrabold",
            h2: "text-3xl font-bold",
            h3: "text-2xl font-semibold",
            h4: "text-xl font-semibold",
            subtitle: "text-lg font-medium text-white/70",
            body: "text-base font-normal",
            caption: "text-sm font-light text-white/50",
        },
        color: {
            default: "text-white",
            primary: "text-cyan-400",
            muted: "text-white/50",
            danger: "text-red-500",
        },
    },
    defaultVariants: {
        variant: "body",
        color: "default",
    },
});


type TypographyProps<T extends React.ElementType = "span"> = VariantProps<
    typeof typographyVariants
> & {
    as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Typography = <T extends React.ElementType = "span">({
    as,
    variant,
    color,
    className,
    ...props
}: TypographyProps<T>) => {
    const defaultTag: Record<string, React.ElementType> = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        subtitle: "h6",
        body: "p",
        caption: "span",
    };

    const Tag = as || defaultTag[variant ?? "body"];

    return (
        <Tag className={typographyVariants({ variant, color, className })} {...props} />
    );
};

Typography.displayName = "Typography";

export default Typography;
