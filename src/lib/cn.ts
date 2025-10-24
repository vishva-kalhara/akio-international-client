import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() combines conditional class names (via clsx)
 * and merges Tailwind conflicting classes (via tailwind-merge)
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
