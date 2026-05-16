import { Syne, DM_Mono, Lora, Inter, Playfair_Display } from 'next/font/google';

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

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});
export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
});