/* =========================================================
   Tailwind Configuration
   (dipindah dari <script> tailwind.config = {...})
   PENTING: file ini harus dimuat SEBELUM <body>, langsung
   setelah script CDN Tailwind, supaya konfigurasinya kepakai.
   ========================================================= */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FFF9F2',
          softBeige: '#F8F1E7',
          terracotta: '#D95338',
          gridCoral: '#F56E68',
          olive: '#4A5320',
          deepGreen: '#4B633E',
          periwinkle: '#BDCCE6',
          softBlueSky: '#CDE5F7'
        }
      },
      fontFamily: {
        hand: ['Caveat', 'cursive'],
        display: ['Shrikhand', 'cursive'],
        cute: ['Fredoka', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    }
  }
};

/* =========================================================
   Script Execution
   (dipindah dari <script data-purpose="lucide-icon-initializer">)
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});