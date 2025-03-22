// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // ใช้ react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
          "home": "Home",
          "contact": "Contact"
        }
      },
      th: {
        translation: {
          "welcome": "ยินดีต้อนรับ",
          "Home": "บ้าน",
          "contact": "ติดต่อ"
        }
      }
    },
    lng: "en", // ภาษาเริ่มต้น
    fallbackLng: "en", // หากไม่มีการแปลในภาษาที่เลือกจะใช้ภาษาเริ่มต้น
    interpolation: {
      escapeValue: false, // ไม่มีการ escape ค่าจากแปล
    }
  });

export default i18n;
