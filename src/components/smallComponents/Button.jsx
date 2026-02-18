const Button = ({className, size, children}) => {
    const baseClasses = "relative overflow-hidden rounded-full  " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-coral " +
        "bg-sage py-1 px-2 hover:bg-sage-shade text-sm";

    const classes = baseClasses;
    return (
        <button className={classes}>
            <span className="relative flex items-center gap-2">{children}</span>
        </button>
    )
}

export default Button;