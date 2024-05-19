import { Variants } from "framer-motion";

export const cardVariants: Variants = {
    offscreen: {
        y: -300
    },
    onscreen: {
        y: 100,
        transition: {
            type: "spring",
            duration: 0.8
        }
    }
};