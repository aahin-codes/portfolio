import { Syne, DM_Mono, Lora } from 'next/font/google';

export const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-syne',
});

export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
});

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lora',
});