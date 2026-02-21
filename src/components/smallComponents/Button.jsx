const Button = ({className ="", size = "default", children}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-bold" +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent " +
        "bg-sage hover:bg-sage/60 transition-all shadow-lg shadow-forest-mid/25 cursor-pointer";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-4 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

    return (
        <button className={classes}>{children}
        </button>
    )
}

export default Button;