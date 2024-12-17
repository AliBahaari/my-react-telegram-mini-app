import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function thousandCommaSeparator(input: number) {
  const numberStr = input.toString();
  if (numberStr.length < 4) return numberStr;

  let result = [];
  let pack_count = 0;

  for (let index = numberStr.length - 1; index--; index >= 0) {
    if (pack_count == 3) {
      pack_count = 0;
      result.unshift(",");
    }

    result.unshift(numberStr[index]);
    pack_count++;
  }

  return result.join("");
}
