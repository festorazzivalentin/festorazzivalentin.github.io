/** Locale independent site data. Shared by every language. */
export const SITE = {
    name: 'Blue & Yellow Service',
    email: 'blueandyellowservices@gmail.com',
    phone: '+1 (754) 246-3167',
    phoneHref: '+17542463167',
    location: 'Florida, United States',
} as const;

/**
 * Envío del formulario de proveedores.
 *
 * Las dos claves son PÚBLICAS por diseño: viven en el HTML del sitio y así lo
 * esperan Formspree y Cloudflare. No son secretos, pero hasta completarlas el
 * formulario no envía nada.
 *
 * Alta (una sola vez):
 *   1. Creá la cuenta en https://formspree.io y un formulario nuevo.
 *   2. Copiá el ID del formulario (la parte final de https://formspree.io/f/XXXX)
 *      y pegalo en `formspreeId`.
 *   3. En Formspree → Settings → CAPTCHA, elegí Cloudflare Turnstile y pegá
 *      ahí la SECRET key de Turnstile (esa sí es privada, nunca va en este archivo).
 *   4. Creá el widget en https://dash.cloudflare.com → Turnstile con el dominio
 *      blueandyellow.net y pegá la SITE key en `turnstileSiteKey`.
 */
export const FORM = {
    formspreeId: '',
    turnstileSiteKey: '',
} as const;

export const isFormConfigured = Boolean(FORM.formspreeId && FORM.turnstileSiteKey);

/** Sections rendered in the header / mobile nav / footer, in order. */
export const SECTIONS = [
    { id: 'home', key: 'home' },
    { id: 'mission', key: 'mission' },
    { id: 'services', key: 'services' },
    { id: 'about', key: 'about' },
    { id: 'suppliers', key: 'suppliers' },
    { id: 'contact', key: 'contact' },
] as const;

export type SectionKey = (typeof SECTIONS)[number]['key'];

/** Category cards: the pastel variant is paired with its sprite icon. */
export const CATEGORIES = [
    { variant: 'pink', sprite: 'beauty.svg#cosmetics' },
    { variant: 'wallet', sprite: 'beauty.svg#perfume' },
    { variant: 'education', sprite: 'accesories.svg#sunglasses' },
    { variant: 'seasonal-green', sprite: 'seasonal.svg#tree' },
    { variant: 'personal-care', sprite: 'beauty.svg#personal-care' },
    { variant: 'home-accents', sprite: 'home.svg#lamp' },
    { variant: 'books', sprite: 'book.svg#book' },
    { variant: 'baby-kids', sprite: 'baby.svg#baby' },
] as const;

export const SERVICE_ICONS = [
    'import',
    'export',
    'distribution',
    'warehouse',
    'globe',
    'chart',
] as const;

export const FEATURE_ICONS = ['reach', 'shield', 'people', 'grid'] as const;

export const FLAGS = [
    { id: 'mexico', name: 'Mexico' },
    { id: 'venezuela', name: 'Venezuela' },
    { id: 'usa', name: 'United States' },
    { id: 'canada', name: 'Canada' },
] as const;

export const SOCIALS = [
    { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
    { id: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/${SITE.phoneHref.slice(1)}` },
] as const;
