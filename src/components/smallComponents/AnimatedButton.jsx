import {motion} from "framer-motion";

const AnimatedButton = ({
                            className = "",
                            size = "default",
                            children,
                            type = "spring",
                            stiffness = 150,
                            damping = 20,
                            ...props
                        }) => {

    const baseClasses = "relative overflow-hidden rounded-full font-bold" +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-forest " +
        "bg-sage hover:bg-sage/60 shadow-custom-lg cursor-pointer";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-4 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

    return (
        <motion.button
            {...props}
            whileHover={{scale: 1.05, y: -2}}
            whileTap={{scale: 0.95, y: 1}}
            transition={{type: type, stiffness: stiffness, damping: damping}}
            className={classes}>{children}
        </motion.button>
    )
}

export default AnimatedButton;