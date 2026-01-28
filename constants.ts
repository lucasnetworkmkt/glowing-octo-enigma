// CONFIGURAÇÃO DO WHATSAPP
// Coloque seu número aqui (Formato: 55 + DDD + Número, apenas números, sem traços ou parênteses)
export const WHATSAPP_NUMBER = "5551981794338"; 

// Mensagem que aparecerá automaticamente quando o cliente clicar no botão
export const WHATSAPP_MESSAGE = "Olá! Vi o site da Nexora Web e gostaria de solicitar um orçamento para um site.";

export const getWhatsAppLink = (message: string = WHATSAPP_MESSAGE) => {
  // Remove caracteres não numéricos apenas por segurança
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

export const NAVIGATION_LINKS = [
  { name: 'Início', href: '#hero' },
  { name: 'Para Quem', href: '#audience' },
  { name: 'Serviços', href: '#services' },
  { name: 'Processo', href: '#process' },
  { name: 'Vantagens', href: '#why-us' },
];

export const COLORS = {
  primary: '#0F1C2E',
  secondary: '#6C63FF',
  success: '#2ECC71',
  background: '#F4F6F8',
  text: '#5F6C7B',
  white: '#FFFFFF',
};