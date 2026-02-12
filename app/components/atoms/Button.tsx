import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
    "flex items-center cursor-pointer transition-all duration-300 active:scale-95", {
    variants: {
        variant: {
            primary: "bg-white/5 hover:bg-white/10",
            glow: "bg-cyan-500/10 border border-cyan-500/20",
        },
        layout: {
            default: "gap-2 px-6 py-3 rounded-xl",
            icon: "p-2 rounded-2xl"
        },
    },
    defaultVariants: {
        variant: "primary",
        layout: "default"
    }
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>;

const Button = (props: ButtonProps) => {
    const { className, variant, layout, ...buttonProps } = props;

    return (
        <button className={buttonVariants({ variant, layout, className })} {...buttonProps} />
    )
}

export default Button