/**
 * ARYNX STORE - Obsidian Vault Product Database & Core Utilities
 * Tema: Obsidian Vault
 * Mata Uang: IDR & USD
 * WhatsApp Admin: 6281932140239
 */

const products = [
    // 1. Nomor Kosong Telegram (Indonesia)
    {
        id: 'tg-indo-fresh-nosurel',
        name: { id: 'Telegram Indo - Fresh No Surel', en: 'Telegram Indo - Fresh No Email' },
        category: 'nomor-kosong',
        priceIDR: 10000,
        priceUSD: 0.65,
        stock: 35,
        status: 'ready',
        badge: 'Fresh No Surel',
        icon: 'fa-telegram',
        featured: true,
        desc: {
            id: 'Nomor kosong Telegram Indonesia fresh tanpa surel pemulihan.',
            en: 'Telegram Indonesia fresh empty number without recovery email.'
        },
        specs: { format: 'Nomor + OTP Direct', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'Telegram' }
    },
    {
        id: 'tg-indo-fresh-surel',
        name: { id: 'Telegram Indo - Fresh Surel', en: 'Telegram Indo - Fresh with Email' },
        category: 'nomor-kosong',
        priceIDR: 10000,
        priceUSD: 0.65,
        stock: 25,
        status: 'ready',
        badge: 'Fresh Surel',
        icon: 'fa-telegram',
        desc: {
            id: 'Nomor kosong Telegram Indonesia fresh dengan surel stabil.',
            en: 'Telegram Indonesia fresh empty number with stable email.'
        },
        specs: { format: 'Akun + Surel', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'Telegram' }
    },
    {
        id: 'tg-indo-non-fresh-surel',
        name: { id: 'Telegram Indo - Non Fresh Surel', en: 'Telegram Indo - Aged with Email' },
        category: 'nomor-kosong',
        priceIDR: 9000,
        priceUSD: 0.60,
        stock: 40,
        status: 'ready',
        badge: 'Non Fresh Surel',
        icon: 'fa-telegram',
        desc: {
            id: 'Nomor Telegram Indonesia non-fresh dengan surel.',
            en: 'Telegram Indonesia non-fresh number with email.'
        },
        specs: { format: 'Akun + Surel', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'Telegram' }
    },

    // Telegram Luar Negeri
    {
        id: 'tg-usa-canada',
        name: { id: 'Telegram Luar Negeri - USA / Canada', en: 'Telegram International - USA / Canada' },
        category: 'nomor-kosong',
        priceIDR: 15000,
        priceUSD: 1.00,
        stock: 20,
        status: 'ready',
        badge: 'USA / Canada',
        icon: 'fa-telegram',
        desc: {
            id: 'Nomor kosong Telegram virtual wilayah USA dan Canada.',
            en: 'Telegram virtual empty number for USA and Canada.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'Telegram' }
    },
    {
        id: 'tg-amerika',
        name: { id: 'Telegram Luar Negeri - Amerika', en: 'Telegram International - America' },
        category: 'nomor-kosong',
        priceIDR: 20000,
        priceUSD: 1.35,
        stock: 15,
        status: 'ready',
        badge: 'Amerika',
        icon: 'fa-telegram',
        desc: {
            id: 'Nomor kosong Telegram virtual wilayah Amerika.',
            en: 'Telegram virtual empty number for America.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'Telegram' }
    },
    {
        id: 'tg-jerman',
        name: { id: 'Telegram Luar Negeri - Jerman', en: 'Telegram International - Germany' },
        category: 'nomor-kosong',
        priceIDR: 25000,
        priceUSD: 1.70,
        stock: 12,
        status: 'ready',
        badge: 'Jerman',
        icon: 'fa-telegram',
        desc: {
            id: 'Nomor kosong Telegram virtual wilayah Jerman.',
            en: 'Telegram virtual empty number for Germany.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'Telegram' }
    },
    {
        id: 'tg-other',
        name: { id: 'Telegram Luar Negeri - Negara Lainnya', en: 'Telegram International - Other Countries' },
        category: 'nomor-kosong',
        priceIDR: 20000,
        priceUSD: 1.35,
        stock: 30,
        status: 'ready',
        badge: 'Start 20k',
        icon: 'fa-telegram',
        desc: {
            id: 'Pilihan nomor kosong Telegram dari berbagai negara lainnya (start from 20k).',
            en: 'Telegram empty numbers from various other countries (start from 20k).'
        },
        specs: { format: 'Virtual Number Global', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'Telegram' }
    },

    // 2. Nomor Kosong WhatsApp (Indonesia)
    {
        id: 'wa-indo-garansi',
        name: { id: 'WhatsApp Indo - Garansi', en: 'WhatsApp Indo - Warranty' },
        category: 'nomor-kosong',
        priceIDR: 19000,
        priceUSD: 1.30,
        stock: 50,
        status: 'ready',
        badge: 'Garansi',
        icon: 'fa-whatsapp',
        featured: true,
        desc: {
            id: 'Nomor WhatsApp Indonesia lengkap dengan garansi.',
            en: 'Indonesian WhatsApp number complete with warranty.'
        },
        specs: { format: 'Nomor + OTP', delivery: 'Instan via WhatsApp', warranty: 'Garansi Aktif', platform: 'WhatsApp' }
    },
    {
        id: 'wa-indo-nongaransi',
        name: { id: 'WhatsApp Indo - Non Garansi', en: 'WhatsApp Indo - No Warranty' },
        category: 'nomor-kosong',
        priceIDR: 10000,
        priceUSD: 0.65,
        stock: 80,
        status: 'ready',
        badge: 'Non Garansi',
        icon: 'fa-whatsapp',
        featured: true,
        desc: {
            id: 'Nomor WhatsApp Indonesia ekonomis tanpa garansi.',
            en: 'Economical Indonesian WhatsApp number without warranty.'
        },
        specs: { format: 'Nomor + OTP', delivery: 'Instan via WhatsApp', warranty: 'Tanpa Garansi', platform: 'WhatsApp' }
    },

    // WhatsApp Luar Negeri
    {
        id: 'wa-canada',
        name: { id: 'WhatsApp Luar Negeri - Canada', en: 'WhatsApp International - Canada' },
        category: 'nomor-kosong',
        priceIDR: 20000,
        priceUSD: 1.35,
        stock: 15,
        status: 'ready',
        badge: 'Canada',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Canada.',
            en: 'WhatsApp virtual number for Canada region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-amerika',
        name: { id: 'WhatsApp Luar Negeri - Amerika', en: 'WhatsApp International - America' },
        category: 'nomor-kosong',
        priceIDR: 20000,
        priceUSD: 1.35,
        stock: 20,
        status: 'ready',
        badge: 'Amerika',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Amerika.',
            en: 'WhatsApp virtual number for America region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-inggris',
        name: { id: 'WhatsApp Luar Negeri - Inggris', en: 'WhatsApp International - UK' },
        category: 'nomor-kosong',
        priceIDR: 25000,
        priceUSD: 1.70,
        stock: 12,
        status: 'ready',
        badge: 'Inggris',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Inggris.',
            en: 'WhatsApp virtual number for UK region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-brazil',
        name: { id: 'WhatsApp Luar Negeri - Brazil', en: 'WhatsApp International - Brazil' },
        category: 'nomor-kosong',
        priceIDR: 30000,
        priceUSD: 2.05,
        stock: 10,
        status: 'ready',
        badge: 'Brazil',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Brazil.',
            en: 'WhatsApp virtual number for Brazil region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-hongkong',
        name: { id: 'WhatsApp Luar Negeri - Hongkong', en: 'WhatsApp International - Hongkong' },
        category: 'nomor-kosong',
        priceIDR: 30000,
        priceUSD: 2.05,
        stock: 10,
        status: 'ready',
        badge: 'Hongkong',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Hongkong.',
            en: 'WhatsApp virtual number for Hongkong region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-malaysia',
        name: { id: 'WhatsApp Luar Negeri - Malaysia', en: 'WhatsApp International - Malaysia' },
        category: 'nomor-kosong',
        priceIDR: 35000,
        priceUSD: 2.40,
        stock: 15,
        status: 'ready',
        badge: 'Malaysia',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Malaysia.',
            en: 'WhatsApp virtual number for Malaysia region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-philipines',
        name: { id: 'WhatsApp Luar Negeri - Philipines', en: 'WhatsApp International - Philipines' },
        category: 'nomor-kosong',
        priceIDR: 15000,
        priceUSD: 1.00,
        stock: 25,
        status: 'ready',
        badge: 'Philipines',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Philipines.',
            en: 'WhatsApp virtual number for Philipines region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-belanda',
        name: { id: 'WhatsApp Luar Negeri - Belanda', en: 'WhatsApp International - Netherlands' },
        category: 'nomor-kosong',
        priceIDR: 25000,
        priceUSD: 1.70,
        stock: 10,
        status: 'ready',
        badge: 'Belanda',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Belanda.',
            en: 'WhatsApp virtual number for Netherlands region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-thailand',
        name: { id: 'WhatsApp Luar Negeri - Thailand', en: 'WhatsApp International - Thailand' },
        category: 'nomor-kosong',
        priceIDR: 30000,
        priceUSD: 2.05,
        stock: 12,
        status: 'ready',
        badge: 'Thailand',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Thailand.',
            en: 'WhatsApp virtual number for Thailand region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-russia',
        name: { id: 'WhatsApp Luar Negeri - Russia', en: 'WhatsApp International - Russia' },
        category: 'nomor-kosong',
        priceIDR: 30000,
        priceUSD: 2.05,
        stock: 14,
        status: 'ready',
        badge: 'Russia',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Russia.',
            en: 'WhatsApp virtual number for Russia region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-kolombia',
        name: { id: 'WhatsApp Luar Negeri - Kolombia', en: 'WhatsApp International - Colombia' },
        category: 'nomor-kosong',
        priceIDR: 15000,
        priceUSD: 1.00,
        stock: 18,
        status: 'ready',
        badge: 'Kolombia',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Kolombia.',
            en: 'WhatsApp virtual number for Colombia region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-vietnam',
        name: { id: 'WhatsApp Luar Negeri - Vietnam', en: 'WhatsApp International - Vietnam' },
        category: 'nomor-kosong',
        priceIDR: 20000,
        priceUSD: 1.35,
        stock: 20,
        status: 'ready',
        badge: 'Vietnam',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Vietnam.',
            en: 'WhatsApp virtual number for Vietnam region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-jerman',
        name: { id: 'WhatsApp Luar Negeri - Jerman', en: 'WhatsApp International - Germany' },
        category: 'nomor-kosong',
        priceIDR: 25000,
        priceUSD: 1.70,
        stock: 10,
        status: 'ready',
        badge: 'Jerman',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Jerman.',
            en: 'WhatsApp virtual number for Germany region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-jepang',
        name: { id: 'WhatsApp Luar Negeri - Jepang', en: 'WhatsApp International - Japan' },
        category: 'nomor-kosong',
        priceIDR: 50000,
        priceUSD: 3.40,
        stock: 6,
        status: 'ready',
        badge: 'Jepang',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Jepang.',
            en: 'WhatsApp virtual number for Japan region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-korea',
        name: { id: 'WhatsApp Luar Negeri - Korea', en: 'WhatsApp International - Korea' },
        category: 'nomor-kosong',
        priceIDR: 90000,
        priceUSD: 6.15,
        stock: 4,
        status: 'ready',
        badge: 'Korea',
        icon: 'fa-whatsapp',
        desc: {
            id: 'Nomor virtual WhatsApp region Korea.',
            en: 'WhatsApp virtual number for Korea region.'
        },
        specs: { format: 'Virtual Number', delivery: 'Instan via WhatsApp', warranty: 'Garansi OTP', platform: 'WhatsApp' }
    },
    {
        id: 'wa-gmail-youtube-google',
        name: { 
            id: 'Verifikasi Gmail, YouTube dan Google', 
            en: 'Gmail, YouTube and Google Verification' 
        },
        category: 'nomor-kosong',
        priceIDR: 3250,
        priceUSD: 0.22,
        stock: 20,
        status: 'ready',
        icon: 'fa-google',
        badge: 'Google',
        desc: {
            id: 'Nomor virtual yang dapat digunakan untuk verifikasi aplikasi Google, YouTube, dan Gmail',
            en: 'Virtual number used for verification of Google apps, YouTube, and Gmail.',
        },
        specs: {
            format: 'Nomor Kosong / Virtual Number',
            delivery: 'Instant via WhatsApp',
            warranty: 'Not Available',
            platform: 'WhatsApp'
        }
    },

    // 4. KEBUTUHAN SOSIAL MEDIA
    //IG
    {
        id: 'sosmed-ig-comment',
        name: { id: 'Instagram - Komen', en: 'Instagram - Comment' },
        category: 'sosmed',
        priceIDR: 5000,
        priceUSD: 0.35,
        stock: 50000,
        status: 'ready',
        badge: 'High Quality',
        icon: 'fa-instagram',
        desc: {
            id: 'Layanan komentar Instagram berkualitas. Pilihan paket: 20 Komentar (Rp 5.000) hingga 100 Komentar (Rp 25.000).',
            en: 'Quality Instagram comments. Packages available from 20 to 100 comments.'
        },
        specs: {
            format: 'Target Link Postingan IG',
            delivery: 'Proses Otomatis / Bertahap',
            warranty: 'Non Garansi',
            platform: 'Instagram'
        }
    },
    {
        id: 'sosmed-ig-followers',
        name: { id: 'Instagram - Followers HQ mix', en: 'Instagram - Followers HQ mix' },
        category: 'sosmed',
        priceIDR: 3000,
        priceUSD: 0.20,
        stock: 50000,
        status: 'ready',
        icon: 'fa-instagram',
        badge: 'Refill Warranty 30 days',
        desc: {
            id: 'Followers Instagram variasi Mix Refill Warranty 30d (HQ) atau Mix No Refill.',
            en: 'Instagram followers variation: Mix Refill Warranty 30d (HQ) or Mix No Refill.',
        },
        specs: {
            format: 'Target Link Akun Instagram',
            delivery: 'Proses Otomatis',
            warranty: '30 days',
            platform: 'Instagram'
        }
    },
    {
        id: 'sosmed-ig-likes',
        name: { id: 'Instagram - Likes', en: 'Instagram - Likes' },
        category: 'sosmed',
        priceIDR: 3500,
        priceUSD: 0.25,
        stock: 50000,
        status: 'ready',
        icon: 'fa-instagram',
        badge: 'No Refill',
        desc: {
            id: 'Likes Instagram Mix No Refill. Paket dari 500 likes (Rp 3.500) hingga 3.000 likes (Rp 21.000).',
            en: 'Instagram Likes Mix No Refill. Packages from 500 likes to 3,000 likes.',
        },
        specs: {
            format: 'Target Link Postingan',
            delivery: 'Proses Otomatis, Instan / Cepat',
            warranty: 'Mix No Refill',
            platform: 'Instagram'
        }
    },
    {
        id: 'sosmed-livestream-views',
        name: { 
            id: 'Instagram - Live Stream Views', 
            en: 'Instagram - Live Stream Views' },
        category: 'sosmed',
        priceIDR: 3600,
        priceUSD: 0.25,
        stock: 50000,
        status: 'ready',
        icon: 'fa-instagram',
        badge: 'No Refill',
        desc: {
            id: 'Penonton live stream Instagram durasi 15 menit, 30 menit, hingga 60 menit.',
            en: 'Instagram live stream viewers with duration options of 15, 30, and 60 minutes.',
        },
        specs: {
            format: 'Link Live Streaming IG',
            delivery: 'Sesuai Durasi 15 - 60 menit',
            warranty: 'No Refill',
            platform: 'Instagram Live'
        }
    },
    {
        id: 'sosmed-ig-reels-views',
        name: { 
            id: 'Instagram - Reels', 
            en: 'Instagram - Reels' },
        category: 'sosmed',
        priceIDR: 4000,
        priceUSD: 0.30,
        stock: 50000,
        status: 'ready',
        icon: 'fa-instagram',
        badge: 'No Refill',
        desc: {
            id: 'Layanan penambah views Reels Instagram berkualitas tinggi.',
            en: 'High quality Instagram Reels views booster.',
        },
        specs: {
            format: 'Link Reels',
            delivery: 'Proses Cepat',
            warranty: 'No Refill',
            package: '10k (40k) | 20k (80k) | 50k (200k) | 100k (400k)'
        }
    },
    {
        id: 'sosmed-ig-story-views',
        name: { 
            id: 'Instagram - Story Views (Promo)', 
            en: 'Instagram - Story Views (Promo)' },
        category: 'sosmed',
        priceIDR: 4000,
        priceUSD: 0.30,
        stock: 50000,
        status: 'ready',
        icon: 'fa-instagram',
        badge: 'No Refill',
        desc: {
            id: 'Penambah Story views Instagram (promo 8p/each). Paket dari 500 views (Rp 4.000) hingga 3.000 views (Rp 24.000).',
            en: 'Instagram Story views promo rate. Packages from 500 to 3,000 views.',
        },
        specs: {
            format: 'Link Story / Akun Publik',
            delivery: 'Proses Cepat',
            warranty: 'No Refill',
            package: '500 (4k) | 1k (8k) | 1,5k (12k) | 3k (24k)'
        }
    },
    {
        id: 'sosmed-ig-saves',
        name: { 
            id: 'Instagram - Saves', 
            en: 'Instagram - Saves' },
        category: 'sosmed',
        priceIDR: 3000,
        priceUSD: 0.20,
        stock: 50000,
        status: 'ready',
        icon: 'fa-instagram',
        badge: 'No Refill',
        desc: {
            id: 'Layanan penambah saves postingan Instagram. Paket dari 500 saves (Rp 3.000) hingga 5.000 saves (Rp 30.000).',
            en: 'Instagram post saves service. Packages from 500 to 5,000 saves.',
        },
        specs: {
            format: 'Link Postingan',
            delivery: 'Proses Bertahap',
            warranty: 'No Refill',
            package: '600 (3k) | 1k (9k) | 1,5k (18k) | 5k (30k)'
        }
    },
    {
        id: 'sosmed-ig-shares',
        name: { 
            id: 'Instagram - Share', 
            en: 'Instagram - Shares' },
        category: 'sosmed',
        priceIDR: 5000,
        priceUSD: 0.35,
        stock: 50000,
        status: 'ready',
        icon: 'fa-instagram',
        badge: 'No Refill',
        desc: {
            id: 'Layanan penambah shares postingan Instagram. Paket dari 2.000 shares (Rp 5.000) hingga 10.000 shares (Rp 25.000).',
            en: 'Instagram post shares service. Packages from 2,000 to 10,000 shares.',
        },
        specs: {
            format: 'Link Postingan',
            delivery: 'Proses Cepat',
            warranty: 'No Refill',
            package: '2k (5k) | 4k (10k) | 8k (20k) | 10k (25k)'
        }
    },

    // ================= TIKTOK SERVICES =================
    {
        id: 'sosmed-tiktok-comment-live',
        name: { 
            id: 'TikTok - Comment Live', 
            en: 'TikTok - Live Comments' 
        },
        category: 'sosmed',
        priceIDR: 2250,
        priceUSD: 0.15,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Instant',
        desc: {
            id: 'Layanan komentar live TikTok (45p/each). Paket dari 50 (Rp 2.250) hingga 1.000 komentar (Rp 45.000).',
            en: 'TikTok live comment service. Packages from 50 to 1,000 comments.',
        },
        specs: {
            format: 'Link Live TikTok',
            delivery: 'Proses Cepat Instan',
            warranty: 'Live Comments',
            package: '50 (2.250) | 100 (4.500) | 500 (22.500) | 1k (45k)'
        }
    },
    {
        id: 'sosmed-tiktok-comment-buyer',
        name: { 
            id: 'TikTok - Comment Custom (Buyer)', 
            en: 'TikTok - Custom Comments (Buyer)' 
        },
        category: 'sosmed',
        priceIDR: 3600,
        priceUSD: 0.25,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Custom',
        desc: {
            id: 'Komentar custom TikTok dari buyer (180p/each). Paket dari 20 (Rp 3.600) hingga 1.000 komentar (Rp 180.000).',
            en: 'Custom comments from buyer. Packages from 20 to 1,000 comments.',
        },
        specs: {
            format: 'Link Video + Teks Komen',
            delivery: 'Proses Cepat',
            warranty: 'Custom Buyer',
            package: '20 (3.600) | 50 (9k) | 100 (18k) | 500 (90k) | 1k (180k)'
        }
    },
    {
        id: 'sosmed-tiktok-comment-seller-hq',
        name: { 
            id: 'TikTok - Comment Custom Mix HQ', 
            en: 'TikTok - Custom Comments Mix HQ' 
        },
        category: 'sosmed',
        priceIDR: 4200,
        priceUSD: 0.30,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'HQ Mix',
        desc: {
            id: 'Komentar custom mix HQ random dari seller (210p/each). Paket dari 20 (Rp 4.200) hingga 1.000 komentar (Rp 210.000).',
            en: 'Custom random comments mix HQ from seller. Packages from 20 to 1,000 comments.',
        },
        specs: {
            format: 'Link Video TikTok',
            delivery: 'Proses Bertahap',
            warranty: 'Mix HQ Random',
            package: '20 (4.200) | 50 (10.5k) | 100 (21k) | 500 (105k) | 1k (210k)'
        }
    },
    {
        id: 'sosmed-tiktok-comment-indo',
        name: { 
            id: 'TikTok - Comment Indonesia', 
            en: 'TikTok - Indonesian Comments' 
        },
        category: 'sosmed',
        priceIDR: 4000,
        priceUSD: 0.28,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Indonesia',
        desc: {
            id: 'Komentar akun asli Indonesia (400p/each). Paket dari 10 (Rp 4.000) hingga 1.000 komentar (Rp 400.000).',
            en: 'Indonesian account comments. Packages from 10 to 1,000 comments.',
        },
        specs: {
            format: 'Link Video TikTok',
            delivery: 'Proses Bertahap',
            warranty: 'Indonesian Real',
            package: '10 (4k) | 50 (20k) | 100 (40k) | 500 (200k) | 1k (400k)'
        }
    },
    {
        id: 'sosmed-tiktok-followers-hq',
        name: { 
            id: 'TikTok - Followers HQ Promo', 
            en: 'TikTok - Followers HQ Promo' 
        },
        category: 'sosmed',
        priceIDR: 2750,
        priceUSD: 0.18,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Promo',
        desc: {
            id: 'Followers TikTok High Quality promo (55p/each). Paket dari 50 (Rp 2.750) hingga 1.000 followers (Rp 55.000).',
            en: 'TikTok followers High Quality promo rate. Packages from 50 to 1,000 followers.',
        },
        specs: {
            format: 'Link Akun TikTok',
            delivery: 'Proses Otomatis',
            warranty: 'HQ Promo',
            package: '50 (2.750) | 100 (5.5k) | 500 (27.5k) | 1k (55k)'
        }
    },
    {
        id: 'sosmed-tiktok-followers-normal',
        name: { 
            id: 'TikTok - Followers Normal', 
            en: 'TikTok - Followers Normal' 
        },
        category: 'sosmed',
        priceIDR: 3500,
        priceUSD: 0.24,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Standard',
        desc: {
            id: 'Followers TikTok standar stabil (70p/each). Paket dari 50 (Rp 3.500) hingga 1.000 followers (Rp 70.000).',
            en: 'Standard stable TikTok followers. Packages from 50 to 1,000 followers.',
        },
        specs: {
            format: 'Link Akun TikTok',
            delivery: 'Proses Otomatis',
            warranty: 'Normal Stable',
            package: '50 (3.500) | 100 (7k) | 500 (35k) | 1k (70k)'
        }
    },
    {
        id: 'sosmed-tiktok-followers-worldwide',
        name: { 
            id: 'TikTok - Followers Worldwide', 
            en: 'TikTok - Followers Worldwide' 
        },
        category: 'sosmed',
        priceIDR: 5000,
        priceUSD: 0.35,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Global',
        desc: {
            id: 'Followers TikTok global worldwide (100p/each). Paket dari 50 (Rp 5.000) hingga 1.000 followers (Rp 100.000).',
            en: 'Worldwide TikTok followers. Packages from 50 to 1,000 followers.',
        },
        specs: {
            format: 'Link Akun TikTok',
            delivery: 'Proses Cepat',
            warranty: 'Worldwide Global',
            package: '50 (5k) | 100 (10k) | 500 (50k) | 1k (100k)'
        }
    },
    {
        id: 'sosmed-tiktok-likes-dompet',
        name: { 
            id: 'TikTok - Likes Dompet Friendly', 
            en: 'TikTok - Wallet Friendly Likes' 
        },
        category: 'sosmed',
        priceIDR: 3400,
        priceUSD: 0.23,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Budget',
        desc: {
            id: 'Likes TikTok ekonomis ramah di kantong (17p/each). Paket dari 200 (Rp 3.400) hingga 1.500 likes (Rp 25.500).',
            en: 'Economical wallet friendly TikTok likes. Packages from 200 to 1,500 likes.',
        },
        specs: {
            format: 'Link Video TikTok',
            delivery: 'Proses Cepat',
            warranty: 'Dompet Friendly',
            package: '200 (3.400) | 500 (8.5k) | 1k (17k) | 1.5k (25.5k)'
        }
    },
    {
        id: 'sosmed-tiktok-likes-hq',
        name: { 
            id: 'TikTok - Likes HQ', 
            en: 'TikTok - HQ Likes' 
        },
        category: 'sosmed',
        priceIDR: 2400,
        priceUSD: 0.16,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'High Quality',
        desc: {
            id: 'Likes TikTok kualitas tinggi (24p/each). Paket dari 100 (Rp 2.400) hingga 1.500 likes (Rp 36.000).',
            en: 'High quality TikTok likes. Packages from 100 to 1,500 likes.',
        },
        specs: {
            format: 'Link Video TikTok',
            delivery: 'Proses Instan',
            warranty: 'HQ Likes',
            package: '100 (2.400) | 500 (12k) | 1k (24k) | 1.5k (36k)'
        }
    },
    {
        id: 'sosmed-tiktok-views-promo',
        name: { 
            id: 'TikTok - Views Promo', 
            en: 'TikTok - Promo Views' 
        },
        category: 'sosmed',
        priceIDR: 2500,
        priceUSD: 0.17,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Promo',
        desc: {
            id: 'Views TikTok harga promo hemat (2.5p/each). Paket dari 1.000 (Rp 2.500) hingga 5.000 views (Rp 12.500).',
            en: 'Promo rate TikTok views. Packages from 1,000 to 5,000 views.',
        },
        specs: {
            format: 'Link Video TikTok',
            delivery: 'Proses Cepat',
            warranty: 'Promo Rate',
            package: '1k (2.500) | 1.5k (3.750) | 3k (7.5k) | 5k (12.5k)'
        }
    },
    {
        id: 'sosmed-tiktok-views-normal',
        name: { 
            id: 'TikTok - Views Normal', 
            en: 'TikTok - Normal Views' 
        },
        category: 'sosmed',
        priceIDR: 3100,
        priceUSD: 0.21,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Standard',
        desc: {
            id: 'Views TikTok reguler stabil (3.1p/each). Paket dari 1.000 (Rp 3.100) hingga 5.000 views (Rp 15.500).',
            en: 'Regular stable TikTok views. Packages from 1,000 to 5,000 views.',
        },
        specs: {
            format: 'Link Video TikTok',
            delivery: 'Proses Bertahap',
            warranty: 'Normal Stable',
            package: '1k (3.100) | 1.5k (4.650) | 3k (9.3k) | 5k (15.5k)'
        }
    },
    {
        id: 'sosmed-tiktok-saves',
        name: { 
            id: 'TikTok - Saves', 
            en: 'TikTok - Saves' 
        },
        category: 'sosmed',
        priceIDR: 2000,
        priceUSD: 0.14,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Saves',
        desc: {
            id: 'Layanan saves video TikTok (3p/each). Paket dari 1.000 (Rp 2.000) hingga 9.000 saves (Rp 18.000).',
            en: 'TikTok video saves service. Packages from 1,000 to 9,000 saves.',
        },
        specs: {
            format: 'Link Video TikTok',
            delivery: 'Proses Cepat',
            warranty: 'Saves 3p/each',
            package: '1k (2.000) | 3k (6k) | 9k (18k)'
        }
    },
    {
        id: 'sosmed-tiktok-shares',
        name: { 
            id: 'TikTok - Shares', 
            en: 'TikTok - Shares' 
        },
        category: 'sosmed',
        priceIDR: 2500,
        priceUSD: 0.17,
        stock: 50000,
        status: 'ready',
        icon: 'fa-tiktok',
        badge: 'Shares',
        desc: {
            id: 'Layanan shares video TikTok (5p/each). Paket dari 500 (Rp 2.500) hingga 5.000 shares (Rp 25.000).',
            en: 'TikTok video shares service. Packages from 500 to 5,000 shares.',
        },
        specs: {
            format: 'Link Video TikTok',
            delivery: 'Proses Cepat',
            warranty: 'Shares 5p/each',
            package: '500 (2.500) | 1k (5k) | 3k (15k) | 5k (25k)'
        }
    },

    // ================= YOUTUBE SERVICES =================
    {
        id: 'sosmed-yt-likes-shorts',
        name: { 
            id: 'YouTube - Likes Shorts', 
            en: 'YouTube - Shorts Likes' 
        },
        category: 'sosmed',
        priceIDR: 2200,
        priceUSD: 0.15,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Shorts',
        desc: {
            id: 'Likes YouTube Shorts maks 100k, start 0-6 jam (22p/each). Paket dari 100 (Rp 2.200) hingga 1.500 likes (Rp 33.000).',
            en: 'YouTube Shorts likes max 100k, start 0-6 hours. Packages from 100 to 1,500 likes.',
        },
        specs: {
            format: 'Link Video YouTube Shorts',
            delivery: 'Start 0-6 Jam',
            warranty: 'Shorts Likes',
            package: '100 (2.200) | 200 (4.400) | 500 (11k) | 1k (22k) | 1.5k (33k)'
        }
    },
    {
        id: 'sosmed-yt-likes-hq',
        name: { 
            id: 'YouTube - Likes HQ', 
            en: 'YouTube - HQ Likes' 
        },
        category: 'sosmed',
        priceIDR: 2800,
        priceUSD: 0.19,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'High Quality',
        desc: {
            id: 'Likes YouTube High Quality (28p/each). Paket dari 100 (Rp 2.800) hingga 1.500 likes (Rp 42.000).',
            en: 'YouTube High Quality likes. Packages from 100 to 1,500 likes.',
        },
        specs: {
            format: 'Link Video YouTube',
            delivery: 'Proses Cepat',
            warranty: 'HQ Likes',
            package: '100 (2.800) | 200 (5.600) | 500 (14k) | 1k (28k) | 1.5k (42k)'
        }
    },
    {
        id: 'sosmed-yt-likes-nonhq',
        name: { 
            id: 'YouTube - Likes Non HQ', 
            en: 'YouTube - Non HQ Likes' 
        },
        category: 'sosmed',
        priceIDR: 3900,
        priceUSD: 0.27,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Budget',
        desc: {
            id: 'Likes YouTube Non HQ ekonomis (78p/each). Paket dari 50 (Rp 3.900) hingga 1.000 likes (Rp 78.000).',
            en: 'Economical YouTube Non HQ likes. Packages from 50 to 1,000 likes.',
        },
        specs: {
            format: 'Link Video YouTube',
            delivery: 'Proses Bertahap',
            warranty: 'Non HQ Likes',
            package: '50 (3.900) | 100 (7.800) | 500 (39k) | 1k (78k)'
        }
    },
    {
        id: 'sosmed-yt-subs-promo',
        name: { 
            id: 'YouTube - Subscribers Hemat Promo', 
            en: 'YouTube - Promo Hemat Subscribers' 
        },
        category: 'sosmed',
        priceIDR: 7000,
        priceUSD: 0.48,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Promo',
        desc: {
            id: 'Subscribers YouTube hemat promo (140p/each). Paket dari 50 (Rp 7.000) hingga 1.000 subs (Rp 140.000).',
            en: 'Promo rate YouTube subscribers. Packages from 50 to 1,000 subscribers.',
        },
        specs: {
            format: 'Link Channel YouTube',
            delivery: 'Proses Bertahap Aman',
            warranty: 'Hemat Promo',
            package: '50 (7k) | 100 (14k) | 500 (70k) | 1k (140k)'
        }
    },
    {
        id: 'sosmed-yt-subs-normal',
        name: { 
            id: 'YouTube - Subscribers Normal', 
            en: 'YouTube - Normal Subscribers' 
        },
        category: 'sosmed',
        priceIDR: 7750,
        priceUSD: 0.53,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Standard',
        desc: {
            id: 'Subscribers YouTube reguler stabil (155p/each). Paket dari 50 (Rp 7.750) hingga 1.000 subs (Rp 155.000).',
            en: 'Standard stable YouTube subscribers. Packages from 50 to 1,000 subscribers.',
        },
        specs: {
            format: 'Link Channel YouTube',
            delivery: 'Proses Bertahap',
            warranty: 'Normal Stable',
            package: '50 (7.750) | 100 (15.5k) | 500 (77.5k) | 1k (155k)'
        }
    },
    {
        id: 'sosmed-yt-subs-reghq',
        name: { 
            id: 'YouTube - Subscribers Reg HQ', 
            en: 'YouTube - Reg HQ Subscribers' 
        },
        category: 'sosmed',
        priceIDR: 10500,
        priceUSD: 0.72,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'HQ',
        desc: {
            id: 'Subscribers YouTube Reg HQ berkualitas (210p/each). Paket dari 50 (Rp 10.500) hingga 1.000 subs (Rp 210.000).',
            en: 'Reg HQ YouTube subscribers. Packages from 50 to 1,000 subscribers.',
        },
        specs: {
            format: 'Link Channel YouTube',
            delivery: 'Proses Aman & Stabil',
            warranty: 'Reg HQ',
            package: '50 (10.5k) | 100 (21k) | 500 (105k) | 1k (210k)'
        }
    },
    {
        id: 'sosmed-yt-subs-premium',
        name: { 
            id: 'YouTube - Subscribers Premium Real Mix', 
            en: 'YouTube - Premium Real Mix Subscribers' 
        },
        category: 'sosmed',
        priceIDR: 17500,
        priceUSD: 1.20,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Premium',
        desc: {
            id: 'Subscribers YouTube premium real mix (350p/each). Paket dari 50 (Rp 17.500) hingga 1.000 subs (Rp 350.000).',
            en: 'Premium real mix YouTube subscribers. Packages from 50 to 1,000 subscribers.',
        },
        specs: {
            format: 'Link Channel YouTube',
            delivery: 'Proses Eksklusif',
            warranty: 'Premium Real Mix',
            package: '50 (17.5k) | 100 (35k) | 500 (175k) | 1k (350k)'
        }
    },
    {
        id: 'sosmed-yt-views-shorts',
        name: { 
            id: 'YouTube - Views Shorts Hemat', 
            en: 'YouTube - Shorts Hemat Views' 
        },
        category: 'sosmed',
        priceIDR: 3500,
        priceUSD: 0.24,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Shorts',
        desc: {
            id: 'Views YouTube Shorts hemat (14p/each). Paket dari 250 (Rp 3.500) hingga 1.500 views (Rp 21.000).',
            en: 'Economical YouTube Shorts views. Packages from 250 to 1,500 views.',
        },
        specs: {
            format: 'Link Video Shorts',
            delivery: 'Proses Cepat',
            warranty: 'Shorts Hemat',
            package: '250 (3.500) | 500 (7k) | 1k (14k) | 1.5k (21k)'
        }
    },
    {
        id: 'sosmed-yt-views-hemat',
        name: { 
            id: 'YouTube - Views Hemat', 
            en: 'YouTube - Hemat Views' 
        },
        category: 'sosmed',
        priceIDR: 8500,
        priceUSD: 0.58,
        stock: 50000,
        status: 'ready',
        badge: 'Hemat',
        desc: {
            id: 'Views YouTube reguler hemat (17p/each). Paket dari 500 (Rp 8.500) hingga 3.000 views (Rp 51.000).',
            en: 'Economical regular YouTube views. Packages from 500 to 3,000 views.',
        },
        specs: {
            format: 'Link Video YouTube',
            delivery: 'Proses Stabil',
            warranty: 'Views Hemat',
            package: '500 (8.500) | 1k (17k) | 1.5k (25.5k) | 3k (51k)'
        }
    },
    {
        id: 'sosmed-yt-views-reghq',
        name: { 
            id: 'YouTube - Views Reg HQ', 
            en: 'YouTube - Reg HQ Views' 
        },
        category: 'sosmed',
        priceIDR: 2400,
        priceUSD: 0.16,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'HQ',
        desc: {
            id: 'Views YouTube reguler HQ (48p/each). Paket dari 50 (Rp 2.400) hingga 1.000 views (Rp 48.000).',
            en: 'Reg HQ YouTube views. Packages from 50 to 1,000 views.',
        },
        specs: {
            format: 'Link Video YouTube',
            delivery: 'Proses Cepat',
            warranty: 'Reg HQ Views',
            package: '50 (2.400) | 100 (4.800) | 500 (24k) | 1k (48k)'
        }
    },
    {
        id: 'sosmed-yt-livestream-15m',
        name: { 
            id: 'YouTube - Live Stream 15 Menit', 
            en: 'YouTube - Live Stream 15 Mins' 
        },
        category: 'sosmed',
        priceIDR: 2150,
        priceUSD: 0.15,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Live',
        desc: {
            id: 'Penonton live stream YouTube durasi 15 menit. Paket Promo (43p/each) dan Normal (53p/each) dari 50 hingga 1.000 views.',
            en: 'YouTube live stream viewers for 15 minutes. Promo and Normal packages available.',
        },
        specs: {
            format: 'Link Live YouTube (15 Min)',
            delivery: 'Durasi 15 Menit',
            warranty: 'Live Stream Views',
            package: 'Promo 50 (2.150) - 1k (43k) | Normal 50 (2.650) - 1k (53k)'
        }
    },
    {
        id: 'sosmed-yt-livestream-30m',
        name: { 
            id: 'YouTube - Live Stream 30 Menit', 
            en: 'YouTube - Live Stream 30 Mins' 
        },
        category: 'sosmed',
        priceIDR: 3350,
        priceUSD: 0.23,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Live',
        desc: {
            id: 'Penonton live stream YouTube durasi 30 menit promo (67p/each). Paket dari 50 (Rp 3.350) hingga 1.000 views (Rp 67.000).',
            en: 'YouTube live stream viewers for 30 minutes promo rate. Packages from 50 to 1,000 views.',
        },
        specs: {
            format: 'Link Live YouTube (30 Min)',
            delivery: 'Durasi 30 Menit',
            warranty: 'Promo Rate 67p',
            package: '50 (3.350) | 100 (6.700) | 500 (33.5k) | 1k (67k)'
        }
    },
    {
        id: 'sosmed-yt-livestream-60m',
        name: { 
            id: 'YouTube - Live Stream 60 Menit', 
            en: 'YouTube - Live Stream 60 Mins' 
        },
        category: 'sosmed',
        priceIDR: 7750,
        priceUSD: 0.53,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Live',
        desc: {
            id: 'Penonton live stream YouTube durasi 60 menit (155p/each). Paket dari 50 (Rp 7.750) hingga 1.000 views (Rp 155.000).',
            en: 'YouTube live stream viewers for 60 minutes. Packages from 50 to 1,000 views.',
        },
        specs: {
            format: 'Link Live YouTube (60 Min)',
            delivery: 'Durasi 60 Menit',
            warranty: 'Long Duration Live',
            package: '50 (7.750) | 100 (15.5k) | 500 (77.5k) | 1k (155k)'
        }
    },
    {
        id: 'sosmed-yt-watchtime',
        name: { 
            id: 'YouTube - Watch Time Reg', 
            en: 'YouTube - Reg Watch Time' 
        },
        category: 'sosmed',
        priceIDR: 13500,
        priceUSD: 0.92,
        stock: 50000,
        status: 'ready',
        icon: 'fa-youtube',
        badge: 'Monetize',
        desc: {
            id: 'Layanan penambah jam tayang / watch time YouTube Reg (275p/each). Paket dari 50 (Rp 13.500) hingga 1.000 (Rp 270.000).',
            en: 'YouTube watch time hours service. Packages from 50 to 1,000 units.',
        },
        specs: {
            format: 'Link Video Panjang YouTube',
            delivery: 'Proses Bertahap Aman',
            warranty: 'Monetization Ready',
            package: '50 (13.500) | 500 (135k) | 1k (270k)'
        }
    },

    // ================= WHATSAPP CHANNEL SERVICES =================
    {
        id: 'sosmed-wa-channel-followers',
        name: { 
            id: 'WhatsApp Channel - Followers', 
            en: 'WhatsApp Channel - Followers' 
        },
        category: 'sosmed',
        priceIDR: 2550,
        priceUSD: 0.17,
        stock: 50000,
        status: 'ready',
        icon: 'fa-whatsapp',
        badge: 'WA Channel',
        featured: true,
        desc: {
            id: 'Pengikut WhatsApp Channel (17p/each). Paket dari 150 (Rp 2.550) hingga 1.000 followers (Rp 17.000).',
            en: 'WhatsApp Channel followers. Packages from 150 to 1,000 followers.',
        },
        specs: {
            format: 'Link WhatsApp Channel',
            delivery: 'Proses Cepat',
            warranty: 'Channel Followers',
            package: '150 (2.550) | 300 (5.100) | 500 (8.5k) | 1k (17k)'
        }
    },
    {
        id: 'sosmed-wa-channel-reactions-per',
        name: { 
            id: 'WhatsApp Channel - Reaction Per Emote', 
            en: 'WhatsApp Channel - Reaction Per Emote' 
        },
        category: 'sosmed',
        priceIDR: 3000,
        priceUSD: 0.20,
        stock: 50000,
        status: 'ready',
        icon: 'fa-whatsapp',
        badge: 'Reactions',
        desc: {
            id: 'Reaksi emoji pilihan (like, love, haha, wow, sad, pray) 6p/each. Paket dari 500 (Rp 3.000) hingga 3k (Rp 18.000).',
            en: 'Specific emoji reactions (like, love, etc). Packages from 500 to 3,000 reactions.',
        },
        specs: {
            format: 'Link Postingan WA Channel + Emote',
            delivery: 'Proses Instan',
            warranty: 'Custom Emote',
            package: '500 (3.000) | 1k (6k) | 1.5k (9k) | 3k (18k)'
        }
    },
    {
        id: 'sosmed-wa-channel-reactions-mix',
        name: { 
            id: 'WhatsApp Channel - Reaction Mix', 
            en: 'WhatsApp Channel - Mix Reactions' 
        },
        category: 'sosmed',
        priceIDR: 3250,
        priceUSD: 0.22,
        stock: 50000,
        status: 'ready',
        icon: 'fa-whatsapp',
        badge: 'Mix Emote',
        desc: {
            id: 'Reaksi emoji campuran random 6,5p/each. Paket dari 500 (Rp 3.250) hingga 3k (Rp 19.500).',
            en: 'Mixed random emoji reactions. Packages from 500 to 3,000 reactions.',
        },
        specs: {
            format: 'Link Postingan WA Channel',
            delivery: 'Proses Instan',
            warranty: 'Mix Reactions',
            package: '500 (3.250) | 1k (6.5k) | 1.5k (9.750) | 3k (19.5k)'
        }
    }
];

// Utility Helper Functions
const ARYNX_VAULT_CONFIG = {
    adminPhone: "6281932140239",
    currency: "IDR",
    language: "id"
};

/**
 * Memformat harga berdasarkan mata uang yang aktif
 * @param {number} priceIDR 
 * @param {number} priceUSD 
 * @param {string} currency 'IDR' | 'USD'
 * @returns {string}
 */
function formatVaultPrice(priceIDR, priceUSD, currency = 'IDR') {
    if (currency === 'IDR') {
        return 'Rp ' + priceIDR.toLocaleString('id-ID');
    } else {
        return '$ ' + priceUSD.toFixed(2);
    }
}

/**
 * Mencari produk berdasarkan ID
 * @param {string} id 
 * @returns {Object|null}
 */
function getVaultProductById(id) {
    return ARYNX_PRODUCTS.find(p => p.id === id) || null;
}

/**
 * Menyaring produk berdasarkan kategori dan kata kunci pencarian
 * @param {string} category 
 * @param {string} keyword 
 * @param {string} lang 
 * @returns {Array}
 */
function filterVaultProducts(category = 'all', keyword = '', lang = 'id') {
    return ARYNX_PRODUCTS.filter(p => {
        const matchCat = category === 'all' || p.category === category;
        const nameStr = p.name[lang] || p.name.id;
        const descStr = p.desc[lang] || p.desc.id;
        const matchKeyword = nameStr.toLowerCase().includes(keyword.toLowerCase()) || descStr.toLowerCase().includes(keyword.toLowerCase());
        return matchCat && matchKeyword;
    });
}