import { es, type Dictionary } from './es';
import { en } from './en';

export type { Dictionary };

export const DEFAULT_LOCALE = 'es';
export const LOCALES = ['es', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export const dictionaries: Record<Locale, Dictionary> = { es, en };

/** Endonym shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
    es: 'Español',
    en: 'English',
};

/** URL of a locale home page, respecting the configured `base`. */
export const localePath = (locale: Locale): string => {
    const base = withBase('');
    return locale === DEFAULT_LOCALE ? base : `${base}${locale}/`;
};

/** Prefix a root relative public asset with the configured `base`. */
export function withBase(path: string): string {
    const base = import.meta.env.BASE_URL;
    return `${base}${path.replace(/^\/+/, '')}`;
}
