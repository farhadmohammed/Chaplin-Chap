/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.3c-3.1 0-5.6 2.2-5.6 5 0 .3 0 .6.1.9-.8.3-1.4.9-1.4 1.7 0 .5.3 1 .7 1.3-.1.3-.2.6-.2.9 0 1.1.9 2 2 2 .2 0 .4 0 .6-.1.8 1.4 2.2 2.3 3.8 2.3s3-1 3.8-2.3c.2.1.4.1.6.1 1.1 0 2-.9 2-2 0-.3-.1-.6-.2-.9.4-.3.7-.8.7-1.3 0-.8-.6-1.4-1.4-1.7.1-.3.1-.6.1-.9 0-2.8-2.5-5-5.6-5zm0 16.7c-3.5 0-6.5 1.5-8.5 3.8-.2.2-.1.5.1.6 1.9 1 5.1 1.6 8.4 1.6s6.5-.6 8.4-1.6c.2-.1.3-.4.1-.6-2-2.3-5-3.8-8.5-3.8z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SocialButton = ({ icon: Icon, label, href, color }: { icon: any, label: string, href: string, color: string }) => (
  <motion.a
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:shadow-lg ${color} group`}
  >
    <Icon className="w-5 h-5 transition-colors group-hover:text-white" />
    <span className="font-medium text-sm text-neutral-300 group-hover:text-white">{label}</span>
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-12 px-4 md:px-8 bg-[#0B0E14] text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-red-600/10 rounded-full blur-[120px]" />

      {/* Header / Hero Image Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center max-w-5xl w-full z-10"
      >
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0] 
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative w-full max-w-sm mb-10 flex items-center justify-center group px-4"
        >
          <div className="absolute -inset-8 bg-orange-500/10 rounded-full blur-[80px] opacity-30"></div>
          <div className="relative w-full flex justify-center">
            <img 
              src="https://i.ibb.co/HDPbxZ5Q/image.png" 
              alt="Chaplin Chap Logo" 
              className="w-full h-auto object-contain block max-h-[300px] contrast-[1.05] brightness-[1.05]"
              style={{
                imageRendering: 'auto',
              }}
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.src = "https://picsum.photos/seed/chaplin-printing/400/600";
              }}
            />
          </div>
        </motion.div>

        {/* Business Name Branding */}
        <div className="mb-10">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-white mb-2 drop-shadow-2xl"
          >
            Chaplin Chap
          </motion.h1>
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="kurdish-text text-5xl md:text-7xl font-bold text-orange-500 drop-shadow-lg"
          >
            چاپلین چاپ
          </motion.h1>
          <div className="h-1.5 w-48 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 mx-auto mt-8 rounded-full shadow-lg shadow-orange-500/20" />
        </div>

        {/* New Kurdish Text Lines */}
        <div className="space-y-6 mb-16 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="kurdish-text text-2xl md:text-3xl text-neutral-200 font-medium leading-relaxed"
          >
            بۆ کاری چاپ و ڕیکلام لەسەر عەلاگەی نایلۆن و قوماش و کارتۆن و هتد...
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="kurdish-text text-xl md:text-2xl text-orange-400 font-medium leading-relaxed"
          >
            با کڕیارەکانت ناوی تۆ بەرنەوە ماڵەوە! چاپی لۆگۆکەت لەسەر عەلاگە، ڕیکلامێکی بێدەنگ بەڵام کاریگەر
          </motion.p>
        </div>

        {/* Original Slogan */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="kurdish-text text-lg text-neutral-400 border-t border-white/5 pt-6"
        >
          کوالیتی تەنیا دروشم نیە، لای ئێمە شێوازی کارکردنە
        </motion.p>
      </motion.div>

      {/* Social Media Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full mb-20 z-10">
        <SocialButton 
          icon={Facebook} 
          label="Facebook" 
          href="#" 
          color="hover:bg-[#1877F2] hover:border-[#1877F2]" 
        />
        <SocialButton 
          icon={Instagram} 
          label="Instagram" 
          href="#" 
          color="hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent" 
        />
        <SocialButton 
          icon={TikTokIcon} 
          label="TikTok" 
          href="#" 
          color="hover:bg-black hover:border-white/20" 
        />
        <SocialButton 
          icon={SnapchatIcon} 
          label="Snapchat" 
          href="#" 
          color="hover:bg-[#FFFC00] hover:text-black hover:border-[#FFFC00]" 
        />
        <SocialButton 
          icon={WhatsAppIcon} 
          label="WhatsApp" 
          href="#" 
          color="hover:bg-[#25D366] hover:border-[#25D366]" 
        />
        <SocialButton 
          icon={Send} 
          label="Contact Us" 
          href="#" 
          color="hover:bg-orange-600 hover:border-orange-600" 
        />
      </div>

      {/* Footer Section */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4 border-t border-white/10 pt-12 w-full max-w-2xl z-10"
      >
        <p className="kurdish-text text-2xl md:text-3xl text-white font-semibold">
          تۆ شایەنی ئەوەی کە باشترینت هەبێت
        </p>
        <p className="kurdish-text text-xl md:text-2xl text-neutral-400 font-medium">
          ناو و براندەکەت لای ئێمە دەردرەوشێنەوە
        </p>
        
        <div className="pt-8 text-neutral-600 text-xs font-mono uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Chaplin Chap Printing & Advertising
        </div>
      </motion.footer>
    </div>
  );
}
