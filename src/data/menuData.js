export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes', hindi: 'सम्पूर्ण मेनू', count: null },
  { id: 'specialties', name: 'Mulaqaat Specials', hindi: 'मुलाक़ात ख़ास', count: null },
  { id: 'koyle-tandoor', name: 'Koyle Ki Dhimi Aanch', hindi: 'तंदूर कबाब', count: null },
  { id: 'murgh', name: 'Murgh (Chicken)', hindi: 'मुर्ग ग्रेवी', count: null },
  { id: 'gosht', name: 'Gosht (Mutton)', hindi: 'गोश्त नवाबी', count: null },
  { id: 'machli-seafood', name: 'Fish & Prawns', hindi: 'मछली व झींगा', count: null },
  { id: 'hari-bhari-sabziyan', name: 'Hari Bhari Sabziyan', hindi: 'शाकाहारी करी', count: null },
  { id: 'dal', name: 'Dal Specialties', hindi: 'दाल तड़का', count: null },
  { id: 'chawal', name: 'Chawal & Biryani', hindi: 'चावल व बिरयानी', count: null },
  { id: 'roti', name: 'Tandoori Roti & Naan', hindi: 'रोटी व नान', count: null },
  { id: 'chinese', name: 'Chinese Delicacies', hindi: 'चाइनीज डिशेस', count: null },
  { id: 'nashta-beverages', name: 'Nashta & Mashrubaat', hindi: 'नाश्ता व पेय', count: null },
  { id: 'mithas', name: 'Mithas (Desserts)', hindi: 'मीठा', count: null },
];

export const MENU_ITEMS = [
  // ==================== MULAQAAT SPECIALS ====================
  {
    id: 'murg-mulaqaat',
    name: 'Murgh Mulaqaat (House Special)',
    hindi: 'मुर्ग मुलाक़ात',
    category: 'murgh',
    isSpecial: true,
    isPopular: true,
    isVeg: false,
    description: "Chef's crown jewel. Tender succulent chicken slow-cooked in our signature velvety royal spice gravy with roasted dry fruits and aromatic saffron essence.",
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 490 },
      { label: 'Full', price: 950 }
    ],
    price: 490
  },
  {
    id: 'gosht-mulaqaat',
    name: 'Gosht Mulaqaat (Signature)',
    hindi: 'गोश्त मुलाक़ात',
    category: 'gosht',
    isSpecial: true,
    isPopular: true,
    isVeg: false,
    description: 'Melt-in-mouth mutton simmered overnight on slow charcoal fire with whole spices, bone marrow essence, and rich caramelized onion gravy.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 510 },
      { label: 'Full', price: 980 }
    ],
    price: 510
  },
  {
    id: 'veg-mulaqaat',
    name: 'Vegetable Mulaqaat Special',
    hindi: 'वेजिटेबल मुलाक़ात',
    category: 'hari-bhari-sabziyan',
    isSpecial: true,
    isPopular: true,
    isVeg: true,
    description: 'A lavish medley of garden fresh vegetables, paneer kofta, and baby corn in a creamy dual-layered tomato-cashew reduction.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 450
  },
  {
    id: 'murgh-musallam',
    name: 'Murgh Musallam',
    hindi: 'मुर्ग मुसल्लम',
    category: 'murgh',
    isSpecial: true,
    isPopular: true,
    isVeg: false,
    description: 'Traditional Mughal celebratory dish. Whole roasted chicken steeped in a rich almond and saffron gravy stuffed with seasoned minced spices.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 490 },
      { label: 'Full', price: 950 }
    ],
    price: 490
  },

  // ==================== KOYLE KI DHIMI AANCH SE (TANDOOR) ====================
  // Veg Tandoor
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    hindi: 'पनीर टिक्का',
    category: 'koyle-tandoor',
    sub: 'Tandoor Veg',
    isVeg: true,
    isPopular: true,
    description: 'Fresh cottage cheese cubes marinated in hung curd, Kashmiri red chili, and carom seeds, skewered with bell peppers and roasted in clay oven.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
    price: 320
  },
  {
    id: 'kesari-paneer-tikka',
    name: 'Kesari Paneer Tikka',
    hindi: 'केसरी पनीर टिक्का',
    category: 'koyle-tandoor',
    sub: 'Tandoor Veg',
    isVeg: true,
    description: 'Soft paneer marinated with crushed saffron strands, yellow chili, cream, and aromatic garam masala.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    price: 320
  },
  {
    id: 'firangi-paneer-tikka',
    name: 'Firangi Paneer Tikka',
    hindi: 'फिरंगी पनीर टिक्का',
    category: 'koyle-tandoor',
    sub: 'Tandoor Veg',
    isVeg: true,
    description: 'Fusion roasted cottage cheese with subtle herbs, crushed peppercorns, and melted cheese glaze.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
    price: 320
  },
  {
    id: 'tandoori-aloo',
    name: 'Tandoori Aloo',
    hindi: 'तंदूरी आलू',
    category: 'koyle-tandoor',
    sub: 'Tandoor Veg',
    isVeg: true,
    description: 'Scooped baby potatoes stuffed with cottage cheese and spices, crisp-roasted in the clay tandoor.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'chutney-wala-tandoori-aloo',
    name: 'Chutney Wala Tandoori Aloo',
    hindi: 'चटनी वाला तंदूरी आलू',
    category: 'koyle-tandoor',
    sub: 'Tandoor Veg',
    isVeg: true,
    description: 'Baby potatoes roasted in spiced mint-coriander paste with tangy chaat masala.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'tandoori-mushroom',
    name: 'Tandoori Mushroom',
    hindi: 'तंदूरी मशरूम',
    category: 'koyle-tandoor',
    sub: 'Tandoor Veg',
    isVeg: true,
    description: 'Plump button mushrooms marinated in tandoori yogurt spice blend and charred to juicy perfection.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80',
    price: 260
  },

  // Non-Veg Tandoor
  {
    id: 'chicken-tandoori',
    name: 'Chicken Tandoori',
    hindi: 'चिकन तंदूरी',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    isPopular: true,
    description: 'The undisputed classic. Tender bone-in chicken steeped in authentic spiced yogurt marinade and roasted over live charcoal embers.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 250 },
      { label: 'Full', price: 480 }
    ],
    price: 250
  },
  {
    id: 'chicken-afgani',
    name: 'Chicken Afgani',
    hindi: 'चिकन अफ़ग़ानी',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Mild, luxurious chicken marinated with cashew paste, rich fresh cream, cheese, and crushed cardamom.',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 270 },
      { label: 'Full', price: 510 }
    ],
    price: 270
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    hindi: 'चिकन टिक्का',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    isPopular: true,
    description: 'Smoky, fiery boneless chicken cubes skewered and charred with signature Punjabi tandoori spices.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'chicken-kandhari-tikka',
    name: 'Chicken Kandhari Tikka',
    hindi: 'चिकन कंदहारी टिक्का',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Royal boneless tikkas infused with tangy pomegranate molasses and mild royal spices.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'chicken-malai-tikka',
    name: 'Chicken Malai Tikka',
    hindi: 'चिकन मलाई टिक्का',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    isPopular: true,
    description: 'Melt-in-mouth chicken pieces bathed in clotted cream, white pepper, and melted mozzarella.',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'chicken-angara',
    name: 'Chicken Angara',
    hindi: 'चिकन अंगारा',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Fiery and bold kebab bursting with crushed black pepper, red deghi mirch, and hot charcoal smoke.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'chicken-banjara-kebab',
    name: 'Chicken Banjara Kebab',
    hindi: 'चिकन बंजारा कबाब',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Rustic kebabs coated with fresh garden mint, coriander, and freshly roasted cumin seeds.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'chicken-kaliniri-kebab',
    name: 'Chicken Kaliniri Kebab',
    hindi: 'चिकन कालीमिरी कबाब',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Spicy black pepper crushed tandoori kebabs with garlic and creamy yogurt coating.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'chicken-pahadi-kebab',
    name: 'Chicken Pahadi Kebab',
    hindi: 'चिकन पहाड़ी कबाब',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Himalayan inspired herb marinade with mint, spinach, green chilies, and ginger.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'chicken-reshmi-kebab',
    name: 'Chicken Reshmi Kebab',
    hindi: 'चिकन रेशमी कबाब',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Silky smooth chicken breast skewers coated with egg whites, cashew paste, and light herbs.',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'ch-cheese-reshmi-kebab',
    name: 'Ch. Cheese Reshmi Kebab',
    hindi: 'चिकन चीज़ रेशमी कबाब',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    isPopular: true,
    description: 'Silken reshmi kebabs stuffed with molten processed cheese and roasted over glowing coals.',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    price: 390
  },
  {
    id: 'chicken-sheek-kebab',
    name: 'Chicken Sheek Kebab',
    hindi: 'चिकन सीक कबाब',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Finely minced spiced chicken molded around long iron skewers and grilled over charcoal.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'chicken-tangdi-kebab',
    name: 'Chicken Tangdi Kebab',
    hindi: 'चिकन टांगड़ी कबाब',
    category: 'koyle-tandoor',
    sub: 'Tandoor Non-Veg',
    isVeg: false,
    description: 'Juicy chicken drumsticks stuffed with savory spices, marinated in yogurt and charred.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    price: 390
  },

  // ==================== MURGH (CHICKEN CURRIES) ====================
  {
    id: 'murgh-handi',
    name: 'Murgh Handi',
    hindi: 'मुर्ग हांडी',
    category: 'murgh',
    isVeg: false,
    isPopular: true,
    description: 'Clay-pot cooked chicken infused with brown onion paste, freshly crushed coriander seeds, and creamy gravy.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 450 },
      { label: 'Full', price: 850 }
    ],
    price: 450
  },
  {
    id: 'murgh-changezi',
    name: 'Murgh Changezi',
    hindi: 'मुर्ग चंगेज़ी',
    category: 'murgh',
    isVeg: false,
    isSpecial: true,
    description: 'Famous Old Delhi preparation. Roasted chicken morsels cooked in a velvety tomato, milk, and cashew gravy.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 490 },
      { label: 'Full', price: 950 }
    ],
    price: 490
  },
  {
    id: 'murgh-malwani',
    name: 'Murgh Malwani',
    hindi: 'मुर्ग मालवणी',
    category: 'murgh',
    isVeg: false,
    description: 'Coastal Konkani style spicy curry prepared with roasted coconut, red chilies, and authentic Malwani masala.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 490 },
      { label: 'Full', price: 950 }
    ],
    price: 490
  },
  {
    id: 'murgh-tikka-masala',
    name: 'Murgh Tikka Masala',
    hindi: 'मुर्ग टिक्का मसाला',
    category: 'murgh',
    isVeg: false,
    isPopular: true,
    description: 'Smoky tandoori chicken tikka chunks simmered in a rich, buttery tomato-onion gravy with capsicum.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    price: 410
  },
  {
    id: 'murgh-kadai',
    name: 'Murgh Kadai',
    hindi: 'मुर्ग कड़ाही',
    category: 'murgh',
    isVeg: false,
    description: 'Tender chicken tossed in a cast-iron wok with chunky bell peppers, onions, and freshly ground kadai spices.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 450
  },
  {
    id: 'murgh-kolhapuri',
    name: 'Murgh Kolhapuri',
    hindi: 'मुर्ग कोल्हापुरी',
    category: 'murgh',
    isVeg: false,
    description: 'Bold and fiery Kolhapuri red gravy with roasted sesame, dry coconut, and hot Lavangi chilies.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'murgh-makhanwala',
    name: 'Murgh Makhanwala (Butter Chicken)',
    hindi: 'मुर्ग मक्खनवाला',
    category: 'murgh',
    isVeg: false,
    isPopular: true,
    description: 'Silky smooth tomato sauce enriched with dollops of white butter, kasuri methi, and mild cream.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'murgh-kajuwala',
    name: 'Murgh Kajuwala',
    hindi: 'मुर्ग काजूवाला',
    category: 'murgh',
    isVeg: false,
    description: 'Rich royal curry cooked in pure cashew nut paste with sweet spices and fragrant cream.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'murgh-kashmiri',
    name: 'Murgh Kashmiri',
    hindi: 'मुर्ग कश्मीरी',
    category: 'murgh',
    isVeg: false,
    description: 'Mild sweet and savory chicken curry cooked with dry fruits, saffron, and subtle cardamom.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'murgh-kurma',
    name: 'Murgh Kurma',
    hindi: 'मुर्ग क़ोरमा',
    category: 'murgh',
    isVeg: false,
    description: 'Mughlai style slow-cooked chicken in caramelized onion, yogurt, and aromatic whole spice blend.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'murgh-hydrabadi',
    name: 'Murgh Hydrabadi',
    hindi: 'मुर्ग हैदराबादी',
    category: 'murgh',
    isVeg: false,
    description: 'Deccani spiced curry rich with fresh mint, coriander paste, yogurt, and browned onions.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'murgh-rara-masala',
    name: 'Murgh Rara Masala',
    hindi: 'मुर्ग रारा मसाला',
    category: 'murgh',
    isVeg: false,
    description: 'Unique combination of succulent chicken pieces cooked along with rich spiced chicken mince.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'murgh-sagwala',
    name: 'Murgh Sagwala',
    hindi: 'मुर्ग सागवाला',
    category: 'murgh',
    isVeg: false,
    description: 'Chicken simmered in farm-fresh pureed spinach, garlic, ginger, and aromatic garam masala.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'murgh-do-pyaja',
    name: 'Murgh Do Pyaja',
    hindi: 'मुर्ग दो प्याज़ा',
    category: 'murgh',
    isVeg: false,
    description: 'Chicken cooked with onions added in two stages - caramelized for the base and sautéed crunchy petals.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 320
  },
  {
    id: 'murgh-masala',
    name: 'Murgh Masala',
    hindi: 'मुर्ग मसाला',
    category: 'murgh',
    isVeg: false,
    description: 'Home-style Indian chicken curry with fragrant spices, tomatoes, and fresh coriander.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 320
  },
  {
    id: 'egg-masala',
    name: 'Egg Masala',
    hindi: 'एग मसाला',
    category: 'murgh',
    isVeg: false,
    description: 'Hard-boiled eggs simmered in a spiced onion-tomato gravy with curry leaves and ginger.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    price: 180
  },
  {
    id: 'egg-curry',
    name: 'Egg Curry',
    hindi: 'एग करी',
    category: 'murgh',
    isVeg: false,
    description: 'Traditional light comfort curry with boiled eggs and aromatic spices.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    price: 180
  },

  // ==================== GOSHT (MUTTON SPECIALTIES) ====================
  {
    id: 'gosht-handi',
    name: 'Gosht Handi',
    hindi: 'गोश्त हांडी',
    category: 'gosht',
    isVeg: false,
    isPopular: true,
    description: 'Tender mutton pieces dum-cooked in a sealed clay pot with whole spices, bone broth, and brown gravy.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 480 },
      { label: 'Full', price: 900 }
    ],
    price: 480
  },
  {
    id: 'gosht-changeji',
    name: 'Gosht Changeji',
    hindi: 'गोश्त चंगेज़ी',
    category: 'gosht',
    isVeg: false,
    isSpecial: true,
    description: 'Slow-cooked royal mutton curry in a creamy, mildly spiced tomato, milk, and curd reduction.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 510 },
      { label: 'Full', price: 980 }
    ],
    price: 510
  },
  {
    id: 'gosht-malwani',
    name: 'Gosht Malwani',
    hindi: 'गोश्त मालवणी',
    category: 'gosht',
    isVeg: false,
    description: 'Spicy Konkan coast mutton preparation featuring roasted grated coconut and authentic Malwani masala.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    variants: [
      { label: 'Half', price: 490 },
      { label: 'Full', price: 980 }
    ],
    price: 490
  },
  {
    id: 'gosht-kadai',
    name: 'Gosht Kadai',
    hindi: 'गोश्त कड़ाही',
    category: 'gosht',
    isVeg: false,
    description: 'Wok-tossed mutton chunks with crushed coriander seeds, capsicum, and dry red chilies.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 490
  },
  {
    id: 'gosht-makhani',
    name: 'Gosht Makhani',
    hindi: 'गोश्त मक्खनी',
    category: 'gosht',
    isVeg: false,
    description: 'Boneless tender mutton in a buttery, rich tomato-cashew satin gravy.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'gosht-kolhapuri',
    name: 'Gosht Kolhapuri',
    hindi: 'गोश्त कोल्हापुरी',
    category: 'gosht',
    isVeg: false,
    description: 'Extra spicy mutton curry made with authentic homemade Kolhapuri masala and sesame paste.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'gosht-do-pyaja',
    name: 'Gosht Do Pyaja',
    hindi: 'गोश्त दो प्याज़ा',
    category: 'gosht',
    isVeg: false,
    description: 'Mutton prepared with lots of caramelized onions and whole whole spices.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'gosht-mughlai',
    name: 'Gosht Mughlai',
    hindi: 'गोश्त मुग़लई',
    category: 'gosht',
    isVeg: false,
    description: 'Rich creamy mutton curry enriched with egg ribbon, ground nuts, and royal spices.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'gosht-sagwala',
    name: 'Gosht Sagwala',
    hindi: 'गोश्त सागवाला',
    category: 'gosht',
    isVeg: false,
    description: 'Succulent mutton cuts cooked in smooth, seasoned spinach gravy tempered with garlic.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'gosht-rogan-josh',
    name: 'Gosht Rogan Josh',
    hindi: 'गोश्त रोगन जोश',
    category: 'gosht',
    isVeg: false,
    isPopular: true,
    description: 'Kashmiri delicacy. Mutton pieces infused with Ratanjot root, fennel powder, and dried ginger.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 390
  },
  {
    id: 'gosht-bhuna',
    name: 'Gosht Bhuna',
    hindi: 'गोश्त भुना',
    category: 'gosht',
    isVeg: false,
    description: 'Mutton pan-roasted vigorously in its own juices with browned onions until spices coat every morsel.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 370
  },
  {
    id: 'gosht-masala',
    name: 'Gosht Masala',
    hindi: 'गोश्त मसाला',
    category: 'gosht',
    isVeg: false,
    description: 'Flavorful classic mutton curry with onions, tomatoes, and home-ground garam masala.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 340
  },
  {
    id: 'gosht-kheema',
    name: 'Gosht Kheema',
    hindi: 'गोश्त कीमा',
    category: 'gosht',
    isVeg: false,
    isPopular: true,
    description: 'Spicy minced mutton sautéed with onions, garlic, green peas, and fresh mint leaves.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=600&q=80',
    price: 330
  },

  // ==================== MACHLI & SEAFOOD ====================
  // Starters
  {
    id: 'fish-tikka',
    name: 'Fish Tikka',
    hindi: 'फिश टिक्का',
    category: 'machli-seafood',
    sub: 'Fish Starter',
    isVeg: false,
    description: 'Firm fish fillets marinated in mustard oil, ajwain, and tandoori spices, charcoal-grilled.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 450
  },
  {
    id: 'fish-ajwaini-tikka',
    name: 'Fish Ajwaini Tikka',
    hindi: 'फिश अजवाईनी टिक्का',
    category: 'machli-seafood',
    sub: 'Fish Starter',
    isVeg: false,
    description: 'Tender fish pieces fragrant with freshly roasted carom seeds (ajwain) and lemon juice.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 450
  },
  {
    id: 'fish-amritsari-tikka',
    name: 'Fish Amritsari Tikka',
    hindi: 'फिश अमृतसरी टिक्का',
    category: 'machli-seafood',
    sub: 'Fish Starter',
    isVeg: false,
    description: 'Crisp gram-flour battered fish steaks seasoned with crushed spices and chaat masala.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 450
  },
  {
    id: 'fish-tawa-fry',
    name: 'Fish Tawa Fry',
    hindi: 'फिश तवा फ्राई',
    category: 'machli-seafood',
    sub: 'Fish Starter',
    isVeg: false,
    isPopular: true,
    description: 'Pan-fried fish steaks coated with semolina and coastal red chili-garlic paste.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 480
  },
  {
    id: 'fish-koliwada',
    name: 'Fish Koliwada',
    hindi: 'फिश कोलीवाड़ा',
    category: 'machli-seafood',
    sub: 'Fish Starter',
    isVeg: false,
    description: 'Mumbai fisherman-style deep fried crisp fish cubes with spiced batter and lemon.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 460
  },
  {
    id: 'tandoori-pomfret',
    name: 'Tandoori Pomfret',
    hindi: 'तंदूरी पॉम्फ्रेट',
    category: 'machli-seafood',
    sub: 'Fish Starter',
    isVeg: false,
    isPopular: true,
    description: 'Whole silver pomfret fish marinated in tandoori masala and roasted golden in clay oven.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 550,
    note: 'As per size'
  },
  {
    id: 'prawns-koliwada',
    name: 'Prawns Koliwada',
    hindi: 'प्रॉन्स कोलीवाड़ा',
    category: 'machli-seafood',
    sub: 'Fish Starter',
    isVeg: false,
    description: 'Crispy deep-fried prawns coated in red Koliwada batter, served with spicy green chutney.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    price: 480
  },
  {
    id: 'tandoori-prawns',
    name: 'Tandoori Prawns',
    hindi: 'तंदूरी प्रॉन्स',
    category: 'machli-seafood',
    sub: 'Fish Starter',
    isVeg: false,
    description: 'Jumbo prawns marinated in ajwaini yogurt paste, skewered and charred over coals.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    price: 490
  },
  // Machli Gravies
  {
    id: 'fish-curry',
    name: 'Fish Curry',
    hindi: 'फिश करी',
    category: 'machli-seafood',
    sub: 'Machli Gravy',
    isVeg: false,
    description: 'Traditional home-style fish curry cooked with mustard seeds, curry leaves, and tomatoes.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 490
  },
  {
    id: 'fish-masala',
    name: 'Fish Masala',
    hindi: 'फिश मसाला',
    category: 'machli-seafood',
    sub: 'Machli Gravy',
    isVeg: false,
    description: 'Thick spicy onion-tomato gravy with succulent fish fillets and fresh coriander.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 490
  },
  {
    id: 'pomfret-curry',
    name: 'Pomfret Curry',
    hindi: 'पॉम्फ्रेट करी',
    category: 'machli-seafood',
    sub: 'Machli Gravy',
    isVeg: false,
    description: 'Fresh pomfret simmered in coastal coconut gravy with kokum and spices.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 580,
    note: 'As per size'
  },
  {
    id: 'pomfret-masala',
    name: 'Pomfret Masala',
    hindi: 'पॉम्फ्रेट मसाला',
    category: 'machli-seafood',
    sub: 'Machli Gravy',
    isVeg: false,
    description: 'Whole pomfret smothered in spicy roast onion-tomato masala.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    price: 580,
    note: 'As per size'
  },
  {
    id: 'prawns-khada-masala',
    name: 'Prawns Khada Masala',
    hindi: 'प्रॉन्स खड़ा मसाला',
    category: 'machli-seafood',
    sub: 'Machli Gravy',
    isVeg: false,
    isPopular: true,
    description: 'Juicy prawns tossed with coarse pounded whole spices, onions, and green chilies.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    price: 490
  },
  {
    id: 'prawns-curry',
    name: 'Prawns Curry',
    hindi: 'प्रॉन्स करी',
    category: 'machli-seafood',
    sub: 'Machli Gravy',
    isVeg: false,
    description: 'Delicate prawns cooked in velvety spiced coconut milk gravy.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    price: 500
  },
  {
    id: 'prawns-masala',
    name: 'Prawns Masala',
    hindi: 'प्रॉन्स मसाला',
    category: 'machli-seafood',
    sub: 'Machli Gravy',
    isVeg: false,
    description: 'Prawns simmered in rich spicy tomato-onion reduction with fresh herbs.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    price: 500
  },

  // ==================== HARI BHARI SABZIYAN (VEGETARIAN) ====================
  {
    id: 'paneer-tikka-masala',
    name: 'Paneer Tikka Masala',
    hindi: 'पनीर टिक्का मसाला',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    isPopular: true,
    description: 'Charcoal-grilled paneer tikkas cooked in a luscious spiced tomato and capsicum gravy.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'paneer-kadai',
    name: 'Paneer Kadai',
    hindi: 'पनीर कड़ाही',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Cottage cheese cubes wok-tossed with crunchy bell peppers, onions, and freshly crushed coriander seeds.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'paneer-mutter',
    name: 'Paneer Mutter',
    hindi: 'मटर पनीर',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Classic combination of soft paneer and sweet green peas in a rich spiced onion-tomato gravy.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 330
  },
  {
    id: 'paneer-palak',
    name: 'Paneer Palak',
    hindi: 'पालक पनीर',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Nutritious farm-fresh spinach puree simmered with cottage cheese cubes and fragrant garlic tadka.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    price: 330
  },
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    hindi: 'पनीर बटर मसाला',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    isPopular: true,
    description: 'Velvety, mild buttery gravy with cottage cheese, honey notes, and crushed fenugreek leaves.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'paneer-shahi-kurma',
    name: 'Paneer Shahi Kurma',
    hindi: 'पनीर शाही क़ोरमा',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Royal Mughlai white curry crafted with cashew nuts, cream, saffron, and tender paneer.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'paneer-handi',
    name: 'Paneer Handi',
    hindi: 'पनीर हांडी',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Rich cottage cheese curry cooked inside clay pot with special handi spice blend.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'paneer-bhurji',
    name: 'Paneer Bhurji',
    hindi: 'पनीर भुर्जी',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Crumbled cottage cheese sautéed with finely chopped onions, tomatoes, and green chilies.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 300
  },
  {
    id: 'paneer-kofta',
    name: 'Paneer Kofta',
    hindi: 'पनीर कोफ़्ता',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Golden fried paneer and potato dumplings served in a mildly spiced cashew-tomato curry.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 300
  },
  {
    id: 'vegetable-tawa',
    name: 'Vegetable Tawa',
    hindi: 'वेजिटेबल तवा',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Assorted seasonal vegetables dry-roasted on iron griddle with pungent spices.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'vegetable-handi',
    name: 'Vegetable Handi',
    hindi: 'वेजिटेबल हांडी',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Mixed garden vegetables cooked slowly in an earthen pot with thick aromatic gravy.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'vegetable-kadai',
    name: 'Vegetable Kadai',
    hindi: 'वेजिटेबल कड़ाही',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Crunchy vegetables tossed with capsicum and fresh coriander in a wok.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'vegetable-makhanwala',
    name: 'Vegetable Makhanwala',
    hindi: 'वेजिटेबल मक्खनवाला',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Farm veggies simmered in rich creamy butter-tomato gravy with kasuri methi.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 380
  },
  {
    id: 'vegetable-jal-frezi',
    name: 'Vegetable Jal Frezi',
    hindi: 'वेजिटेबल जालफ्रेज़ी',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Julienned vegetables stir-fried with onion and tomato masala with a tangy kick.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'vegetable-kolhapuri',
    name: 'Vegetable Kolhapuri',
    hindi: 'वेजिटेबल कोल्हापुरी',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Spicy mixed vegetables cooked in famous Kolhapuri red chili and dry coconut masala.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'vegetable-kofta',
    name: 'Vegetable Kofta',
    hindi: 'वेजिटेबल कोफ़्ता',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Crispy minced vegetable dumplings immersed in a spiced onion-tomato curry.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'mix-vegetable',
    name: 'Mix Vegetable',
    hindi: 'मिक्स वेजिटेबल',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Wholesome medley of carrot, peas, beans, cauliflower in mild curry gravy.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'malai-kofta',
    name: 'Malai Kofta',
    hindi: 'मलाई कोफ़्ता',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    isPopular: true,
    description: 'Soft cottage cheese and dry fruit croquettes in a velvety rich cashew nut gravy.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'navratan-kurma',
    name: 'Navratan Kurma',
    hindi: 'नवरत्न क़ोरमा',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Nine jewels of veggies, fruits, and nuts gently cooked in royal Mughlai white sauce.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'mushroom-masala',
    name: 'Mushroom Masala',
    hindi: 'मशरूम मसाला',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Tender button mushrooms simmered in thick onion, tomato, and garlic reduction.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'mushroom-kadai',
    name: 'Mushroom Kadai',
    hindi: 'मशरूम कड़ाही',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Fresh mushrooms stir-fried with capsicum, onions, and coarsely ground spices.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'aloo-mutter',
    name: 'Aloo Mutter',
    hindi: 'आलू मटर',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Diced potatoes and tender green peas cooked in a spiced cumin-infused gravy.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 190
  },
  {
    id: 'aloo-gobi',
    name: 'Aloo Gobi',
    hindi: 'आलू गोभी',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Homestyle dry preparation of potatoes and cauliflower florets with turmeric and ginger.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 190
  },
  {
    id: 'aloo-palak',
    name: 'Aloo Palak',
    hindi: 'आलू पालक',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Baby potatoes cooked in fresh pureed spinach leaves with garlic.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    price: 190
  },
  {
    id: 'chana-masala',
    name: 'Chana Masala',
    hindi: 'चना मसाला',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    isPopular: true,
    description: 'Plump chickpeas simmered with roasted cumin, pomegranate seeds, and aromatic spices.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    price: 190
  },
  {
    id: 'green-peas-masala',
    name: 'Green Peas Masala',
    hindi: 'ग्रीन पीस मसाला',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Sweet green peas simmered in a spiced onion-tomato curry base.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 190
  },
  {
    id: 'bhindi-fry',
    name: 'Bhindi Fry',
    hindi: 'भिंडी फ्राई',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Crisp stir-fried okra seasoned with dry mango powder (amchur) and roasted spices.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 190
  },
  {
    id: 'bhindi-masala',
    name: 'Bhindi Masala',
    hindi: 'भिंडी मसाला',
    category: 'hari-bhari-sabziyan',
    isVeg: true,
    description: 'Tender okra tossed with sautéed onion slices, tomatoes, and garam masala.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    price: 190
  },

  // ==================== DAL ====================
  {
    id: 'dal-palak',
    name: 'Dal Palak',
    hindi: 'दाल पालक',
    category: 'dal',
    isVeg: true,
    description: 'Yellow toor lentils slow-cooked with fresh shredded spinach leaves and garlic.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 180
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    hindi: 'दाल तड़का',
    category: 'dal',
    isVeg: true,
    isPopular: true,
    description: 'Yellow lentils tempered with ghee, cumin seeds, garlic cloves, and whole red chilies.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 180
  },
  {
    id: 'dal-fry',
    name: 'Dal Fry',
    hindi: 'दाल फ्राई',
    category: 'dal',
    isVeg: true,
    description: 'Smooth yellow lentils sautéed with onions, ripe tomatoes, and fresh coriander.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 160
  },
  {
    id: 'dal-butter-fry',
    name: 'Dal Butter Fry',
    hindi: 'दाल बटर फ्राई',
    category: 'dal',
    isVeg: true,
    isPopular: true,
    description: 'Slow-simmered lentils finished with a generous dollop of pure dairy butter.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 190
  },
  {
    id: 'dal-kolhapuri',
    name: 'Dal Kolhapuri',
    hindi: 'दाल कोल्हापुरी',
    category: 'dal',
    isVeg: true,
    description: 'Zesty lentil preparation tempered with Kolhapuri chili tadka.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    price: 180
  },

  // ==================== CHAWAL & BIRYANI ====================
  {
    id: 'dal-khichadi',
    name: 'Dal Khichadi',
    hindi: 'दाल खिचड़ी',
    category: 'chawal',
    isVeg: true,
    isPopular: true,
    description: 'Wholesome comfort dish of fragrant rice and yellow lentils tempered with cumin and ghee.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'palak-khichadi',
    name: 'Palak Khichadi',
    hindi: 'पालक खिचड़ी',
    category: 'chawal',
    isVeg: true,
    description: 'Nutritious comforting rice and lentils infused with garlic spinach puree and clarified butter.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'veg-biryani',
    name: 'Vegetable Biryani',
    hindi: 'वेजिटेबल बिरयानी',
    category: 'chawal',
    isVeg: true,
    isPopular: true,
    description: 'Fragrant basmati rice layered with garden vegetables, saffron, mint, and sealed in traditional dum.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 250
  },
  {
    id: 'paneer-tikka-biryani',
    name: 'Paneer Tikka Biryani',
    hindi: 'पनीर टिक्का बिरयानी',
    category: 'chawal',
    isVeg: true,
    isPopular: true,
    description: 'Smoky tandoori paneer tikkas layered between aromatic saffron basmati rice with fried onions.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 310
  },
  {
    id: 'veg-pulao',
    name: 'Vegetable Pulao',
    hindi: 'वेजिटेबल पुलाव',
    category: 'chawal',
    isVeg: true,
    description: 'Basmati rice cooked with fresh seasonal vegetables and whole aromatic spices.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 210
  },
  {
    id: 'kashmiri-pulao',
    name: 'Kashmiri Pulao',
    hindi: 'कश्मीरी पुलाव',
    category: 'chawal',
    isVeg: true,
    description: 'Sweet and rich aromatic basmati rice garnished with dry fruits, saffron, and fresh pomegranate.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 210
  },
  {
    id: 'steam-rice',
    name: 'Steam Rice',
    hindi: 'स्टीम राइस',
    category: 'chawal',
    isVeg: true,
    description: 'Fluffy, long-grain steamed basmati rice.',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=600&q=80',
    price: 110
  },
  {
    id: 'jeera-rice',
    name: 'Jeera Rice',
    hindi: 'ज़ीरा राइस',
    category: 'chawal',
    isVeg: true,
    description: 'Basmati rice tempered with golden cumin seeds and fragrant desi ghee.',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=600&q=80',
    price: 130
  },
  {
    id: 'biryani-rice',
    name: 'Biryani Rice',
    hindi: 'बिरयानी राइस',
    category: 'chawal',
    isVeg: true,
    description: 'Aromatic saffron-infused basmati rice steeped in rich biryani spices and mint.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 130
  },
  {
    id: 'chicken-pulao',
    name: 'Chicken Pulao',
    hindi: 'चिकन पुलाव',
    category: 'chawal',
    isVeg: false,
    description: 'Long grain rice cooked in seasoned chicken broth with tender meat pieces and mild spices.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 310
  },
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    hindi: 'चिकन बिरयानी',
    category: 'chawal',
    isVeg: false,
    isPopular: true,
    description: 'The royal dum biryani. Succulent chicken pieces marinated in yogurt and spices, layered with saffron basmati.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 330
  },
  {
    id: 'chicken-tikka-biryani',
    name: 'Chicken Tikka Biryani',
    hindi: 'चिकन टिक्का बिरयानी',
    category: 'chawal',
    isVeg: false,
    isPopular: true,
    description: 'Tandoor-charred spicy chicken tikka cubes layered with fragrant dum basmati rice and brown onions.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 360
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    hindi: 'मटन बिरयानी',
    category: 'chawal',
    isVeg: false,
    isPopular: true,
    description: 'Traditional slow-cooked dum biryani featuring tender baby mutton morsels and long basmati grains.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 350
  },
  {
    id: 'mutton-pulao',
    name: 'Mutton Pulao',
    hindi: 'मटन पुलाव',
    category: 'chawal',
    isVeg: false,
    description: 'Mughlai style aromatic rice cooked directly in rich mutton yakhni (bone broth).',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    price: 330
  },

  // ==================== ROTI (INDIAN BREADS) ====================
  { id: 'tandoori-roti', name: 'Tandoori Roti', hindi: 'तंदूरी रोटी', category: 'roti', isVeg: true, price: 25, description: 'Crisp whole wheat bread baked in traditional clay oven.' },
  { id: 'butter-roti', name: 'Butter Roti', hindi: 'बटर रोटी', category: 'roti', isVeg: true, price: 30, description: 'Clay-oven tandoori roti brushed with rich dairy butter.' },
  { id: 'whole-wheat-tandoori-roti', name: 'Whole Wheat Tandoori Roti', hindi: 'गेंहू तंदूरी रोटी', category: 'roti', isVeg: true, price: 35, description: 'Pure 100% whole wheat bread baked in the tandoor.' },
  { id: 'butter-wheat-tandoori-roti', name: 'Butter Wheat Tandoori Roti', hindi: 'बटर गेंहू तंदूरी रोटी', category: 'roti', isVeg: true, price: 45, description: 'Whole wheat tandoori roti with generous butter layer.' },
  { id: 'naan', name: 'Plain Naan', hindi: 'नान', category: 'roti', isVeg: true, price: 35, description: 'Soft and pillowy leavened flatbread baked in the tandoor.' },
  { id: 'butter-naan', name: 'Butter Naan', hindi: 'बटर नान', category: 'roti', isVeg: true, isPopular: true, price: 45, description: 'Soft leavened bread slathered with melted butter.' },
  { id: 'garlic-naan', name: 'Garlic Naan', hindi: 'गार्लिक नान', category: 'roti', isVeg: true, isPopular: true, price: 60, description: 'Fresh naan topped with minced roasted garlic and fresh coriander.' },
  { id: 'cheese-naan', name: 'Cheese Naan', hindi: 'चीज़ नान', category: 'roti', isVeg: true, price: 75, description: 'Tandoori naan stuffed with melted cheddar and mozzarella cheese.' },
  { id: 'cheese-garlic-naan', name: 'Cheese Garlic Naan', hindi: 'चीज़ गार्लिक नान', category: 'roti', isVeg: true, isPopular: true, price: 85, description: 'The crowd favorite. Stuffed with gooey cheese and topped with crunchy garlic.' },
  { id: 'laccha-paratha', name: 'Laccha Paratha', hindi: 'लच्छा पराठा', category: 'roti', isVeg: true, price: 45, description: 'Crisp, multi-layered tandoori paratha with butter.' },
  { id: 'kulcha', name: 'Kulcha', hindi: 'कुलचा', category: 'roti', isVeg: true, price: 35, description: 'Delicate Punjabi flatbread flavored with nigella and carom seeds.' },
  { id: 'butter-kulcha', name: 'Butter Kulcha', hindi: 'बटर कुलचा', category: 'roti', isVeg: true, price: 45, description: 'Soft kulcha finished with rich butter glaze.' },
  { id: 'chapati', name: 'Chapati', hindi: 'चपाती', category: 'roti', isVeg: true, price: 20, description: 'Homestyle thin wheat phulka.' },
  { id: 'butter-chapati', name: 'Butter Chapati', hindi: 'बटर चपाती', category: 'roti', isVeg: true, price: 25, description: 'Hot homestyle wheat chapati brushed with butter.' },

  // ==================== CHINESE DELICACIES ====================
  // Soups
  { id: 'veg-manchow-soup', name: 'Vegetable Manchow Soup', hindi: 'वेज मानचाउ सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: true, isPopular: true, price: 140, description: 'Spicy soy-garlic soup topped with crispy fried noodles.' },
  { id: 'veg-sweetcorn-soup', name: 'Vegetable Sweetcorn Soup', hindi: 'वेज स्वीटकॉर्न सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: true, price: 140, description: 'Creamy golden sweet corn kernels in a soothing broth.' },
  { id: 'veg-hot-sour-soup', name: 'Veg Hot And Sour Soup', hindi: 'वेज हॉट एंड सॉर सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: true, price: 140, description: 'Tangy and spicy broth filled with shredded mushrooms and tofu.' },
  { id: 'veg-clear-soup', name: 'Vegetable Clear Soup', hindi: 'वेज क्लियर सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: true, price: 140, description: 'Light clear vegetable broth with steamed seasonal greens.' },
  { id: 'chicken-sweet-corn-soup', name: 'Chicken Sweet Corn Soup', hindi: 'चिकन स्वीटकॉर्न सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: false, price: 160, description: 'Shredded chicken and sweet corn in a mild velvety soup.' },
  { id: 'chicken-manchow-soup', name: 'Chicken Manchow Soup', hindi: 'चिकन मानचाउ सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: false, isPopular: true, price: 160, description: 'Spicy chicken soup infused with garlic, chilies, and crunchy noodles.' },
  { id: 'chicken-hot-sour-soup', name: 'Chicken Hot And Sour Soup', hindi: 'चिकन हॉट एंड सॉर सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: false, price: 160, description: 'Spicy vinegar broth packed with tender chicken strips.' },
  { id: 'chicken-lung-fong-soup', name: 'Chicken Lung Fong Soup', hindi: 'चिकन लुंग फोंग सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: false, price: 160, description: 'Authentic Cantonese soup with shredded chicken, egg white drops, and ginger.' },
  { id: 'chicken-clear-soup', name: 'Chicken Clear Soup', hindi: 'चिकन क्लियर सूप', category: 'chinese', sub: 'Chinese Soup', isVeg: false, price: 160, description: 'Light nutritious chicken broth flavored with celery and spring onions.' },

  // Chinese Veg Starters
  { id: 'veg-crispy', name: 'Vegetable Crispy', hindi: 'वेज क्रिस्पी', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, isPopular: true, price: 280, description: 'Batter-fried mixed vegetables tossed in tangy sweet-and-spicy schezwan sauce.' },
  { id: 'veg-manchurian', name: 'Vegetable Manchurian', hindi: 'वेज मंचूरियन', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 280, description: 'Crispy cabbage and carrot balls tossed in dark soy-garlic gravy.' },
  { id: 'veg-schezwan', name: 'Vegetable Schezwan', hindi: 'वेज शेजवान', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 280, description: 'Garden vegetables stir-fried in hot fiery Schezwan chili paste.' },
  { id: 'veg-sweet-sour', name: 'Vegetable Sweet And Sour', hindi: 'वेज स्वीट एंड सॉर', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 280, description: 'Crisp vegetables and pineapple chunks in Cantonese sweet-sour glaze.' },
  { id: 'schezwan-potato', name: 'Schezwan Potato', hindi: 'शेजवान पोटैटो', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 250, description: 'Crispy potato fingers wok-tossed with chili oil and spring onions.' },
  { id: 'honey-chilli-potato', name: 'Honey Chilli Potato', hindi: 'हनी चिली पोटैटो', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, isPopular: true, price: 250, description: 'Golden fried potato fries coated with sweet honey, chili flakes, and toasted sesame.' },
  { id: 'paneer-chilli', name: 'Paneer Chilli', hindi: 'पनीर चिली', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, isPopular: true, price: 330, description: 'Crispy paneer cubes stir-fried with green chilies, onions, capsicum, and soy sauce.' },
  { id: 'paneer-schezwan', name: 'Paneer Schezwan', hindi: 'पनीर शेजवान', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 330, description: 'Paneer tossed in bold, spicy Schezwan sauce with scallions.' },
  { id: 'paneer-black-pepper', name: 'Paneer Black Pepper', hindi: 'पनीर ब्लैक पेपर', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 330, description: 'Paneer wok-tossed with freshly crushed black peppercorns and garlic.' },
  { id: 'paneer-crispy', name: 'Paneer Crispy', hindi: 'पनीर क्रिस्पी', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 330, description: 'Golden crusted cottage cheese tossed in tangy sweet-and-spicy seasoning.' },
  { id: 'mushroom-manchurian', name: 'Mushroom Manchurian', hindi: 'मशरूम मंचूरियन', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 270, description: 'Crisp button mushrooms tossed in aromatic ginger-garlic Manchurian sauce.' },
  { id: 'mushroom-chilli', name: 'Mushroom Chilli', hindi: 'मशरूम चिली', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 270, description: 'Fresh button mushrooms stir-fried with bell peppers and green chilies.' },
  { id: 'paneer-saute', name: 'Paneer Saute', hindi: 'पनीर सॉते', category: 'chinese', sub: 'Chinese Veg Starter', isVeg: true, price: 330, description: 'Lightly sautéed paneer with garlic butter, oriental herbs, and spring onions.' },

  // Chinese Non-Veg Starters
  { id: 'chicken-lollypop', name: 'Chicken Lollypop', hindi: 'चिकन लॉलीपॉप', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, isPopular: true, price: 290, description: 'Crispy chicken wings frenched and fried to golden perfection, served with schezwan dip.' },
  { id: 'chicken-schezwan-lollypop', name: 'Chicken Schezwan Lollypop', hindi: 'चिकन शेजवान लॉलीपॉप', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, isPopular: true, price: 330, description: 'Crisp chicken lollypops tossed in sizzling fiery red Schezwan sauce.' },
  { id: 'chicken-manchurian', name: 'Chicken Manchurian', hindi: 'चिकन मंचूरियन', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 340, description: 'Tender chicken bites wok-tossed in pungent dark soy and garlic reduction.' },
  { id: 'chicken-chilly', name: 'Chicken Chilly', hindi: 'चिकन चिली', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, isPopular: true, price: 340, description: 'Crisp chicken morsels stir-fried with green chilies, bell peppers, and scallions.' },
  { id: 'chicken-schezwan', name: 'Chicken Schezwan', hindi: 'चिकन शेजवान', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 340, description: 'Chicken tossed in hot spicy Schezwan chili paste and spring greens.' },
  { id: 'chicken-chilly-garlic', name: 'Chicken Chilly Garlic', hindi: 'चिकन चिली गार्लिक', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 340, description: 'Crisp chicken spiked with extra roasted golden garlic and green chilies.' },
  { id: 'chicken-ginger-garlic', name: 'Chicken Ginger Garlic', hindi: 'चिकन जिंजर गार्लिक', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 340, description: 'Fragrant chicken stir-fry with julienned ginger and minced garlic.' },
  { id: 'chicken-hong-kong', name: 'Chicken Hong Kong', hindi: 'चिकन हांगकांग', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 340, description: 'Hong Kong style spicy sweet chicken tossed with cashew nuts and whole dry red chilies.' },
  { id: 'chicken-65', name: 'Chicken 65', hindi: 'चिकन 65', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, isPopular: true, price: 340, description: 'Fiery South-Indian style spiced deep-fried chicken tempered with curry leaves and mustard seeds.' },
  { id: 'chicken-sweet-sour', name: 'Chicken Sweet And Sour', hindi: 'चिकन स्वीट एंड सॉर', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 340, description: 'Chicken pieces in tangy sweet-and-sour glaze with bell pepper and pineapple.' },
  { id: 'chicken-crispy', name: 'Chicken Crispy', hindi: 'चिकन क्रिस्पी', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, isPopular: true, price: 340, description: 'Shredded crispy chicken tossed with honey, sesame, and red chili sauce.' },
  { id: 'chicken-black-pepper', name: 'Chicken Black Pepper', hindi: 'चिकन ब्लैक पेपर', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 390, description: 'Chicken tossed with freshly crushed black peppercorns and oyster-soy seasoning.' },
  { id: 'chicken-saute', name: 'Chicken Saute', hindi: 'चिकन सॉते', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 370, description: 'Pan-sautéed boneless chicken with oriental spices and butter.' },
  { id: 'ch-kheema-manchurian', name: 'Ch. Kheema Manchurian', hindi: 'चिकन कीमा मंचूरियन', category: 'chinese', sub: 'Chinese Non-Veg Starter', isVeg: false, price: 390, description: 'Spiced chicken mince meatballs wok-tossed in dark soy Manchurian glaze.' },

  // Chinese Seafood
  { id: 'fish-black-pepper', name: 'Fish Black Pepper (Chinese)', hindi: 'फिश ब्लैक पेपर', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 450, description: 'Crisp fish fillets tossed in peppery dark soy sauce.' },
  { id: 'fish-manchurian', name: 'Fish Manchurian', hindi: 'फिश मंचूरियन', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 450, description: 'Fish pieces tossed in classic Manchurian gravy.' },
  { id: 'fish-chilly', name: 'Fish Chilly', hindi: 'फिश चिली', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 450, description: 'Fish cubes stir-fried with bell peppers, green chilies, and scallions.' },
  { id: 'fish-ginger-garlic', name: 'Fish Ginger Garlic', hindi: 'फिश जिंजर गार्लिक', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 450, description: 'Fish fillets in fragrant ginger-garlic oriental glaze.' },
  { id: 'fish-schezwan', name: 'Fish Schezwan', hindi: 'फिश शेजवान', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 450, description: 'Fish wok-tossed in hot Schezwan chili paste.' },
  { id: 'prawns-chilly', name: 'Prawns Chilly', hindi: 'प्रॉन्स चिली', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 470, description: 'Succulent prawns tossed with fresh green chilies and onions.' },
  { id: 'prawns-manchurian', name: 'Prawns Manchurian', hindi: 'प्रॉन्स मंचूरियन', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 470, description: 'Prawns tossed in savory soy-garlic Manchurian gravy.' },
  { id: 'prawns-butter-garlic', name: 'Prawns Butter Garlic', hindi: 'प्रॉन्स बटर गार्लिक', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, isPopular: true, price: 470, description: 'Jumbo prawns sautéed in fragrant butter and lots of golden garlic.' },
  { id: 'prawns-schezwan', name: 'Prawns Schezwan', hindi: 'प्रॉन्स शेजवान', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 470, description: 'Juicy prawns tossed in spicy Schezwan sauce.' },
  { id: 'prawns-black-pepper', name: 'Prawns Black Pepper', hindi: 'प्रॉन्स ब्लैक पेपर', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 470, description: 'Prawns coated in aromatic crushed black peppercorn seasoning.' },
  { id: 'prawns-chow-chow', name: 'Prawns Chow Chow', hindi: 'प्रॉन्स चाउ चाउ', category: 'chinese', sub: 'Chinese Seafood', isVeg: false, price: 470, description: 'Crispy fried prawns tossed with crunchy veggies in oriental sauce.' },

  // Noodles
  { id: 'veg-hakka-noodle', name: 'Vegetable Hakka Noodle', hindi: 'वेज हक्का नूडल', category: 'chinese', sub: 'Noodles', isVeg: true, isPopular: true, price: 270, description: 'Wok-tossed noodles with shredded cabbage, bell peppers, carrots, and light soy.' },
  { id: 'veg-schezwan-noodle', name: 'Vegetable Schezwan Noodle', hindi: 'वेज शेजवान नूडल', category: 'chinese', sub: 'Noodles', isVeg: true, price: 280, description: 'Spicy wok-tossed noodles in homemade fiery Schezwan chili oil.' },
  { id: 'veg-american-chop-suey', name: 'Veg. American Chop Suey', hindi: 'वेज अमेरिकन चॉप सुई', category: 'chinese', sub: 'Noodles', isVeg: true, price: 290, description: 'Crisp fried noodles topped with sweet and tangy vegetable sauce.' },
  { id: 'ch-american-chop-suey', name: 'Ch. American Chop Suey', hindi: 'चिकन अमेरिकन चॉप सुई', category: 'chinese', sub: 'Noodles', isVeg: false, price: 350, description: 'Crispy noodles topped with tangy chicken and egg reduction.' },
  { id: 'chicken-hakka-noodle', name: 'Chicken Hakka Noodle', hindi: 'चिकन हक्का नूडल', category: 'chinese', sub: 'Noodles', isVeg: false, isPopular: true, price: 300, description: 'Stir-fried noodles with seasoned chicken strips, egg, and vegetables.' },
  { id: 'chicken-schezwan-noodles', name: 'Chicken Schezwan Noodles', hindi: 'चिकन शेजवान नूडल्स', category: 'chinese', sub: 'Noodles', isVeg: false, price: 320, description: 'Noodles tossed with chicken in fiery red Schezwan sauce.' },
  { id: 'mix-hakka-noodle', name: 'Mix Hakka Noodle', hindi: 'मिक्स हक्का नूडल', category: 'chinese', sub: 'Noodles', isVeg: false, price: 480, description: 'Noodles with chicken, mutton, prawns, and egg.' },
  { id: 'mix-schezwan-noodle', name: 'Mix Schezwan Noodle', hindi: 'मिक्स शेजवान नूडल', category: 'chinese', sub: 'Noodles', isVeg: false, price: 490, description: 'Spicy noodles loaded with chicken, prawns, and mixed meats in Schezwan sauce.' },
  { id: 'prawns-hakka-noodle', name: 'Prawns Hakka Noodle', hindi: 'प्रॉन्स हक्का नूडल', category: 'chinese', sub: 'Noodles', isVeg: false, price: 490, description: 'Noodles tossed with juicy prawns, scallions, and soy.' },

  // Chinese Rice
  { id: 'veg-fried-rice', name: 'Vegetable Fried Rice', hindi: 'वेज फ्राइड राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: true, isPopular: true, price: 270, description: 'Wok-tossed basmati rice with finely diced vegetables and spring onions.' },
  { id: 'veg-schezwan-fried-rice', name: 'Veg. Schezwan Fried Rice', hindi: 'वेज शेजवान फ्राइड राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: true, price: 280, description: 'Fragrant fried rice spiked with spicy Schezwan chili paste.' },
  { id: 'veg-singapore-rice', name: 'Vegetable Singapore Rice', hindi: 'वेज सिंगापुर राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: true, price: 280, description: 'Curry powder and chili infused wok-fried rice with cashew nuts.' },
  { id: 'veg-triple-rice', name: 'Vegetable Triple Rice', hindi: 'वेज ट्रिपल राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: true, isPopular: true, price: 320, description: 'A hearty combo of fried rice, noodles, and rich vegetable manchurian gravy.' },
  { id: 'chicken-fried-rice', name: 'Chicken Fried Rice', hindi: 'चिकन फ्राइड राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: false, isPopular: true, price: 300, description: 'Classic wok-fried rice with seasoned chicken bits, scrambled egg, and scallions.' },
  { id: 'chicken-schezwan-rice', name: 'Chicken Schezwan Rice', hindi: 'चिकन शेजवान राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: false, price: 310, description: 'Spicy stir-fried chicken rice tossed with homemade Schezwan sauce.' },
  { id: 'chicken-singapore-rice', name: 'Chicken Singapore Rice', hindi: 'चिकन सिंगापुर राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: false, price: 300, description: 'Singapore style spiced chicken rice with mild turmeric and chili.' },
  { id: 'chicken-triple-rice', name: 'Chicken Triple Rice', hindi: 'चिकन ट्रिपल राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: false, isPopular: true, price: 380, description: 'Combination of chicken fried rice and noodles served with rich chicken gravy and sunny side egg.' },
  { id: 'prawns-fried-rice', name: 'Prawns Fried Rice', hindi: 'प्रॉन्स फ्राइड राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: false, price: 460, description: 'Wok-tossed rice with tender sea prawns and spring onions.' },
  { id: 'prawns-schezwan-rice', name: 'Prawns Schezwan Rice', hindi: 'प्रॉन्स शेजवान राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: false, price: 470, description: 'Spicy Schezwan rice loaded with succulent fresh prawns.' },
  { id: 'mix-fried-rice', name: 'Mix Fried Rice', hindi: 'मिक्स फ्राइड राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: false, price: 490, description: 'Chef’s special fried rice with chicken, mutton, prawns, and egg.' },
  { id: 'mix-schezwan-rice', name: 'Mix Schezwan Rice', hindi: 'मिक्स शेजवान राइस', category: 'chinese', sub: 'Chinese Rice', isVeg: false, price: 500, description: 'Spicy Schezwan fried rice with prawns, chicken, and egg.' },

  // ==================== NASHTA & MASHRUBAAT ====================
  // Nashta
  { id: 'veg-sandwich', name: 'Veg Sandwich', hindi: 'वेज सैंडविच', category: 'nashta-beverages', sub: 'Nashta', isVeg: true, price: 70, description: 'Fresh cucumber, tomato, and mint chutney in soft bread.' },
  { id: 'veg-cheese-sandwich', name: 'Veg Cheese Sandwich', hindi: 'वेज चीज़ सैंडविच', category: 'nashta-beverages', sub: 'Nashta', isVeg: true, price: 90, description: 'Vegetable sandwich loaded with processed cheddar cheese.' },
  { id: 'cheese-sandwich', name: 'Cheese Sandwich', hindi: 'चीज़ सैंडविच', category: 'nashta-beverages', sub: 'Nashta', isVeg: true, price: 70, description: 'Classic grilled cheese sandwich with butter.' },
  { id: 'egg-omlette-sandwich', name: 'Egg Omlette Sandwich', hindi: 'एग आमलेट सैंडविच', category: 'nashta-beverages', sub: 'Nashta', isVeg: false, price: 90, description: 'Fluffy spiced egg omelette stuffed between toasted bread slices.' },
  { id: 'bread-butter', name: 'Bread Butter', hindi: 'ब्रेड बटर', category: 'nashta-beverages', sub: 'Nashta', isVeg: true, price: 40, description: 'Fresh toasted bread served with dairy butter.' },
  { id: 'bread-slice', name: 'Bread Slice', hindi: 'ब्रेड स्लाइस', category: 'nashta-beverages', sub: 'Nashta', isVeg: true, price: 5, description: 'Single bread slice.' },
  { id: 'egg-omlette', name: 'Egg Omlette', hindi: 'एग आमलेट', category: 'nashta-beverages', sub: 'Nashta', isVeg: false, price: 90, description: 'Two eggs beaten with onions, tomatoes, and green chilies.' },
  { id: 'cheese-omlette', name: 'Cheese Omlette', hindi: 'चीज़ आमलेट', category: 'nashta-beverages', sub: 'Nashta', isVeg: false, price: 105, description: 'Golden omelette folded with molten cheese center.' },
  { id: 'chicken-omlette', name: 'Chicken Omlette', hindi: 'चिकन आमलेट', category: 'nashta-beverages', sub: 'Nashta', isVeg: false, price: 150, description: 'Fluffy omelette stuffed with shredded seasoned chicken.' },
  { id: 'chicken-cheese-omlette', name: 'Chicken Cheese Omlette', hindi: 'चिकन चीज़ आमलेट', category: 'nashta-beverages', sub: 'Nashta', isVeg: false, price: 160, description: 'Loaded omelette with minced chicken and melted cheese.' },
  { id: 'half-fry-egg', name: 'Half Fry Egg', hindi: 'हाफ फ्राई एग', category: 'nashta-beverages', sub: 'Nashta', isVeg: false, price: 70, description: 'Sunny side up eggs sprinkled with black pepper and salt.' },
  { id: 'boiled-egg', name: 'Boiled Egg', hindi: 'उबला अंडा', category: 'nashta-beverages', sub: 'Nashta', isVeg: false, price: 50, description: 'Freshly boiled eggs with chaat masala.' },
  { id: 'egg-bhurjee', name: 'Egg Bhurjee', hindi: 'एग भुर्जी', category: 'nashta-beverages', sub: 'Nashta', isVeg: false, price: 90, description: 'Scrambled eggs tossed with onions, tomatoes, green chilies, and coriander.' },
  { id: 'pav-single', name: 'Pav Single', hindi: 'पाव', category: 'nashta-beverages', sub: 'Nashta', isVeg: true, price: 10, description: 'Single soft butter-toasted Mumbai pav.' },

  // Khane Ke Saat (Accompaniments)
  { id: 'masala-papad', name: 'Masala Papad', hindi: 'मसाला पापड़', category: 'nashta-beverages', sub: 'Khane Ke Saat', isVeg: true, price: 40, description: 'Crisp roasted papad topped with diced onion, tomato, chilies, and lemon juice.' },
  { id: 'roasted-papad', name: 'Roasted Papad', hindi: 'रोस्टेड पापड़', category: 'nashta-beverages', sub: 'Khane Ke Saat', isVeg: true, price: 20, description: 'Flame-roasted crispy lentil papad.' },
  { id: 'fry-papad', name: 'Fry Papad', hindi: 'फ्राई पापड़', category: 'nashta-beverages', sub: 'Khane Ke Saat', isVeg: true, price: 25, description: 'Deep-fried crispy crunchy papad.' },
  { id: 'green-salad', name: 'Green Salad', hindi: 'ग्रीन सलाद', category: 'nashta-beverages', sub: 'Khane Ke Saat', isVeg: true, price: 70, description: 'Freshly sliced cucumber, tomato, onion rings, carrot, and lemon wedges.' },
  { id: 'mix-raita', name: 'Mix Raita', hindi: 'मिक्स रायता', category: 'nashta-beverages', sub: 'Khane Ke Saat', isVeg: true, price: 80, description: 'Chilled beaten curd with diced cucumber, onions, and roasted cumin.' },
  { id: 'boondi-raita', name: 'Boondi Raita', hindi: 'बूंदी रायता', category: 'nashta-beverages', sub: 'Khane Ke Saat', isVeg: true, price: 80, description: 'Crispy gram-flour pearls in seasoned sweet-savory curd.' },
  { id: 'plain-curd', name: 'Plain Curd', hindi: 'दही', category: 'nashta-beverages', sub: 'Khane Ke Saat', isVeg: true, price: 50, description: 'Thick, creamy set fresh yogurt.' },

  // Mashrubaat (Beverages)
  { id: 'tea', name: 'Special Masala Tea', hindi: 'स्पेशल चाय', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, price: 30, description: 'Freshly brewed aromatic tea with ginger and cardamom.' },
  { id: 'nescafe', name: 'Nescafe Coffee', hindi: 'नेस्कैफे कॉफ़ी', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, price: 40, description: 'Hot frothy Nescafe coffee.' },
  { id: 'milk', name: 'Hot Milk', hindi: 'दूध', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, price: 50, description: 'Fresh hot boiled whole milk.' },
  { id: 'sweet-lassi', name: 'Sweet Lassi', hindi: 'मीठी लस्सी', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, isPopular: true, price: 70, description: 'Traditional Punjabi thick sweetened yogurt drink with malai top.' },
  { id: 'butter-milk', name: 'Butter Milk (Chaas)', hindi: 'छाछ', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, price: 60, description: 'Refreshing spiced buttermilk with cumin, mint, and black salt.' },
  { id: 'fresh-lime-soda', name: 'Fresh Lime Soda', hindi: 'फ्रेश लाइम सोडा', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, isPopular: true, price: 70, description: 'Freshly squeezed lemon juice with fizzy soda (Sweet, Salted, or Mix).' },
  { id: 'fresh-lime-water', name: 'Fresh Lime Water', hindi: 'फ्रेश लाइम वॉटर', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, price: 50, description: 'Chilled mineral water with freshly squeezed lemon juice.' },
  { id: 'mineral-water', name: 'Mineral Water (Packaged)', hindi: 'मिनरल वॉटर', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, price: 25, description: '1 Litre chilled packaged drinking water.' },
  { id: 'soda-500ml', name: 'Soda (500ml)', hindi: 'सोडा (500ml)', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, price: 30, description: 'Chilled club soda bottle.' },
  { id: 'cold-drink-500ml', name: 'Cold Drink (500ml)', hindi: 'कोल्ड ड्रिंक (500ml)', category: 'nashta-beverages', sub: 'Mashrubaat', isVeg: true, price: 50, description: 'Assorted soft drinks bottle (Thums Up, Sprite, Coke).' },

  // ==================== MITHAS (DESSERTS) ====================
  { id: 'caramel-custard', name: 'Caramel Custard', hindi: 'कैरेमल कस्टर्ड', category: 'mithas', isVeg: false, isPopular: true, price: 90, description: 'Silky smooth baked egg custard with dark amber caramel sauce.' },
  { id: 'gajar-halwa', name: 'Gajar Halwa (Seasonal)', hindi: 'गाजर हलवा', category: 'mithas', isVeg: true, isPopular: true, price: 130, description: 'Slow-cooked grated red carrots in pure desi ghee, khoya, and sliced almonds.' },
  { id: 'firni', name: 'Shahi Firni', hindi: 'शाही फिरनी', category: 'mithas', isVeg: true, isPopular: true, price: 90, description: 'Traditional creamy rice pudding set in clay pots, scented with kewra and saffron.' },
  { id: 'gulab-jamun', name: 'Gulab Jamun (2 Pcs)', hindi: 'गुलाब जामुन', category: 'mithas', isVeg: true, isPopular: true, price: 90, description: 'Warm golden milk-solid dumplings soaked in rose and green cardamom sugar syrup.' },
  { id: 'fruit-custard', name: 'Fruit Custard', hindi: 'फ्रूट कस्टर्ड', category: 'mithas', isVeg: true, price: 130, description: 'Chilled creamy vanilla custard loaded with freshly diced seasonal fruits.' },
  { id: 'pineapple-halwa', name: 'Pineapple Halwa', hindi: 'पाइनएप्पल हलवा', category: 'mithas', isVeg: true, price: 130, description: 'Rich semolina halwa cooked in desi ghee with candied pineapple chunks.' },
  { id: 'chocolate-jar', name: 'Chocolate Jar', hindi: 'चॉकलेट जार', category: 'mithas', isVeg: true, isPopular: true, price: 160, description: 'Indulgent layered jar of chocolate sponge, molten ganache, and choco chips.' }
];
