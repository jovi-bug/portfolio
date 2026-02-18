const Button = ({className ="", size = "default", children}) => {
    const baseClasses = "relative overflow-hidden rounded-full  " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-coral " +
        "bg-sage hover:bg-sage/80 transition-all shadow-lg shadow-sage/25";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-4 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

    return (
        <button className={classes}>
            <span className="relative flex items-center gap-2">{children}</span>
        </button>
    )
}

export default Button;