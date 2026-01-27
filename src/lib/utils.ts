import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Platform = 'chrome' | 'android' | 'ios' | 'firefox' | 'other';

export function getPlatform(): Platform {
  if (typeof window === "undefined") return "other";
  const ua = window.navigator.userAgent.toLowerCase();
  
  if (/android/.test(ua)) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/firefox/.test(ua)) return "firefox";
  if (/chrome|crios|crmo/.test(ua)) return "chrome";
  
  return "other";
}
