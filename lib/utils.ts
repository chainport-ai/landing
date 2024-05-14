import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import reactStringReplace from "react-string-replace";

export { reactStringReplace as stringReplace };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
