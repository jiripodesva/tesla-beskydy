/** ID formuláře z Formspree — např. „xyzabcde“ z URL https://formspree.io/f/xyzabcde */
export const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID ?? "";

export const FORMSPREE_ENDPOINT = FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
  : "";

export function isFormspreeConfigured(): boolean {
  return FORMSPREE_FORM_ID.length > 0;
}
