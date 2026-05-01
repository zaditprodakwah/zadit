export const CONTACT_INFO = {
  whatsapp: "6282316363177",
  email: "muhzadit@pradiktif.id",
  instagram: "https://instagram.com/pradiktif",
  linkedin: "https://linkedin.com/company/pradiktif",
  figma: "https://figma.com/@pradiktif",
  address: "SCBD District 8, Lt. 12, Jakarta Selatan, 12190, Indonesia"
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}`;

export function getWhatsAppLink(message?: string) {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
