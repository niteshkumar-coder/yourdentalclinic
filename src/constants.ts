export const CLINIC_INFO = {
  displayName: "Bihar Dental Clinic",
  fullName: "Bihar Dental Clinic",
  tagline: "A Multispeciality Dental Clinic & Trusted Expert Dental Care",
  heroSubtitle: "TRUSTED EXPERT DENTAL CARE & MULTISPECIALITY CLINIC",
  doctorName: "Dr. Neha Kumari (BDS)",
  doctorTitle: "Consultant Dental Surgeon | Expert Aesthetic & Oral Specialist",
  doctorBio: "Dr. Neha Kumari is a highly experienced and compassionate dental surgeon in Patna, specializing in advanced, painless, and modern dental treatments. With a patient-first approach, she is dedicated to helping children and adults achieve healthy, luminous, and confident smiles.",
  phone: "+91 9055584791",
  phoneSecondary: "+91 9973468666",
  address: "Anurag Abha, Rajeev Nagar Main Road, Patna, Bihar",
  status: "Open · Closes 8:00 PM",
  googleRating: "5.0",
  googleReviewsCount: "248",
  whatsapp: "919055584791", // Format for WhatsApp link
  adminEmail: "niteshkumar9128ku@gmail.com"
};

export const SERVICES = [
  {
    id: "rct",
    title: "Root Canal Treatment",
    description: "Save severely infected or decayed teeth with clinical precision and highly efficient, pain-free techniques.",
    icon: "ShieldAlert",
    image: "https://i.ibb.co/KjThTkrt/image.png",
    details: {
      what: "A root canal is a specialized dental safety treatment used to repair and save a tooth that is badly decayed or becomes seriously infected. By removing the damaged nerve and pulp, cleaning, and sealing the interior, we restore the tooth's absolute functionality.",
      who: "Patients suffering from intense, lasting toothaches, severe heat/cold sensitivity, swollen gums, or tooth damage near the root pulp.",
      benefits: "Completely eliminates painful nerve aches, prevents the spread of infection to adjacent teeth, and preserves your natural tooth structure for life.",
      journey: "Comprehensive digital X-ray -> Local anesthesia for a pain-free experience -> Infected pulp removal and precise cleaning -> Bio-compatible filling and sealing -> Fitting of custom protective crown.",
      aftercare: "Avoid biting down hard on the specific tooth until the protective crown is fully placed. Practise thorough brushing and regular flossing."
    }
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning & Scaling",
    description: "Remove hard dental plaque and deep tartar buildup to protect your gums and ensure absolute freshness.",
    icon: "Sparkles",
    image: "https://i.ibb.co/8LR0nm9S/image.png",
    details: {
      what: "An advanced professional dental scaling and polishing procedure designed to clean plaque, hard tartar (calculus), and external surface stains that daily brushing and flossing cannot reach.",
      who: "Recommended for everyone twice a year to maintain absolute oral freshness, prevent gingivitis, and treat early gum bleeding or bad breath.",
      benefits: "Leaves your mouth incredibly clean, immediately refreshes your breath, prevents future cavities, and stops advanced gum diseases early.",
      journey: "Detailed ultrasonic scaling to dislodge hard tartar -> Gentle manual scaling for fine-tuned precision -> Elite fluoride polishing to restore shiny enamel smoothness.",
      aftercare: "Avoid consuming highly staining food or dark drinks (tea, coffee) for at least 24 hours post-procedure. Keep up daily dual brushing."
    }
  },
  {
    id: "fillings",
    title: "Dental Fillings",
    description: "Restore damaged tooth structures seamlessly with durable, tooth-colored aesthetic composite materials.",
    icon: "SquareDot",
    image: "https://i.ibb.co/4rg80dW/image.png",
    details: {
      what: "A modern, highly biocompatible composite restoration technique where tooth decay is meticulously removed, and the tooth is filled with a matching aesthetic resin that hardens under a safe UV light.",
      who: "Individuals facing early tooth decay, deep brown cavities, minor chips, or small visible gaps on their biting surfaces.",
      benefits: "Quickly restores full structural strength and prevents future decay, looking entirely natural and matching the white shade of your original tooth.",
      journey: "Meticulous removal of active tooth decay -> Sanitizing the target tooth cavity -> Layering matching white composite resin -> UV-light curing and surface polishing matching your bite.",
      aftercare: "Avoid extremely sticky candies or chewing hard ice immediately. Continue standard mouth rinses after meals."
    }
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description: "Gentle and entirely pain-free removal of unsavable, damaged, or impacted wisdom teeth.",
    icon: "Skull",
    image: "https://i.ibb.co/27PLkVS4/image.png",
    details: {
      what: "The highly clinical and controlled removal of a tooth from its socket in the jawbone, usually performed when a tooth is unsolvably broken, decayed, or severely impacted (like wisdom teeth).",
      who: "Patients with extreme tooth fractures, severe untreated decay, crowded teeth, or agonizing wisdom tooth impaction.",
      benefits: "Instantly relieves persistent, painful facial swelling, protects neighbouring teeth from infections, and restores overall mouth safety.",
      journey: "Clinical diagnosis and local anesthesia -> Highly controlled, gentle tooth loosening -> Smooth removal from socket -> Gauze compression for quick, clean recovery.",
      aftercare: "Strictly avoid hot food, carbonated drinks, or spitting for 24 hours. Eat soft cold ice creams and rest well."
    }
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Professional medical-grade bleaching to safely fade deep stains and brighten your smile significantly.",
    icon: "Zap",
    image: "https://i.ibb.co/Q3Mtm9pm/image.png",
    details: {
      what: "An elite cosmetic procedure using hydrogen-peroxide gels and safe blue-wavelength accelerator lamps to break up dark pigments and surface stains inside the enamel.",
      who: "Adults dealing with teeth yellowing or stains caused by tobacco use, caffeine consumption, red wine, or normal aging.",
      benefits: "Provides extremely fast, stunning cosmetic brightness, boosts your confidence instantly, and is completely safe under professional medical guard.",
      journey: "Teeth preparation with protective gum shields -> Even application of the premium whitening gel -> Multi-cycle blue-light curing activation -> Instant mirror reveal.",
      aftercare: "Avoid tobacco, tea, coffee, wine, or deeply colored masalas for at least 48 to 72 hours for long-lasting whiteness."
    }
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent, incredibly strong, and highly natural-feeling replacements for lost teeth.",
    icon: "Activity",
    image: "https://i.ibb.co/RGnKXWwR/image.png",
    details: {
      what: "An elite bio-compatible titanium post surgically anchored to your jawbone, acting as a permanent and sturdy metal root that perfectly holds custom-crafted aesthetic ceramic crowns.",
      who: "Anyone looking to restore missing teeth permanently, wanting to avoid loose dentures, and possessing healthy bone structure.",
      benefits: "Incredibly durable, feels and bites exactly like high-quality natural teeth, prevents bone loss, and restores pristine youthful facial aesthetics.",
      journey: "Detailed 3D CBCT bone scan -> Highly precise titanium post placement -> Bone-integration healing period -> Custom-manufactured crown installation.",
      aftercare: "Treat it exactly like natural teeth with daily flossing, gentle round brushing, and standard annual cleaning visits."
    }
  },
  {
    id: "smile-design",
    title: "Smile Designing",
    description: "Custom aesthetic makeovers blending modern veneers, crowns, and contours for a symmetrical smile.",
    icon: "HeartHandshake",
    image: "https://i.ibb.co/ZzC3B40z/image.png",
    details: {
      what: "An outstanding cosmetic therapy plan combining modern composite veneers, elite porcelain laminates, customized gum shaping, and shade correction to design your dream smile.",
      who: "People with asymmetric visual lines, highly discolored teeth, chips, gaps, or small teeth that make them self-conscious.",
      benefits: "Provides an elite, movie-star transformation, perfectly tailored to your unique facial contours, eyes, lips, and personal desires.",
      journey: "Detailed dental photography and digital scan analysis -> Try-in wax mockup preview -> Customized porcelain/laminate application -> Artistic final shaping.",
      aftercare: "Use a protective soft mouthguard for high-contact sports or if you grind your teeth. Avoid biting raw pens or hard shells."
    }
  },
  {
    id: "braces",
    title: "Braces & Orthodontics",
    description: "Perfectly align crowded teeth, close gaps, and fix bite issues with modern metal, ceramic, or clear aligners.",
    icon: "Grid",
    image: "https://i.ibb.co/whvn5MZ6/image.png",
    details: {
      what: "A biological guidance treatment using advanced orthodontic braces or invisible modern clear aligners to gently and gradually move teeth into perfect cosmetic and functional positions.",
      who: "Teens or adults seeking correction for crooking, overlapping teeth, wide spacing gaps, deep overbites, or crossbites.",
      benefits: "Vastly improves chewing functionality, makes cleaning teeth simpler to prevent cavities, and ensures a perfectly straight smile line.",
      journey: "Comprehensive custom molding and photography -> Choice of modern ceramic, metal premium braces, or clear aligners -> Periodic progressive adjustments -> Protective post-treatment mouth retainers.",
      aftercare: "Meticulously brush round brackets after each meal and use dedicated soft orthodontic toothbrushes."
    }
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description: "Gentle, happy, and non-frightening dental care specially designed for infants, toddlers, and young teens.",
    icon: "Heart",
    image: "https://i.ibb.co/bRLG2qTK/image.png",
    details: {
      what: "A specialized field of dentistry focused entirely on children's safe dental care, emphasizing cavity prevention, early cavity fillings, fluoride protective coatings, and reassuring guidance.",
      who: "Infants, toddlers, school children, and teens starting from their first primary teeth to permanent dentition.",
      benefits: "Prevents lifelong dental fear with a friendly, positive approach, guards tooth strength with sealants, and optimizes early facial dev.",
      journey: "Friendly visual checking of teeth -> Reassuring dental education games -> Gentle, play-based treatment (fluoride shield/cavity sealing) -> Post-procedure reward gifts.",
      aftercare: "Supervise daily brushing twice a day. Restrict sugary sticky candies and encourage clean-water gargling after food."
    }
  },
  {
    id: "gum-treatment",
    title: "Gum Treatment",
    description: "Resolve active gum bleeding, soothe painful swelling, and treat advanced pyorrhea with specialized care.",
    icon: "PlusCircle",
    image: "https://i.ibb.co/JjJ5ygcL/image.png",
    details: {
      what: "Periodontal treatments ranging from deep medical root planing to advanced gum flap therapies to completely eradicate harmful bacteria from the bone support.",
      who: "Patients suffering from red, swollen, chronically bleeding gums, loose teeth, or bad breath (symptoms of gingivitis or pyorrhea).",
      benefits: "Stops active bleeding, eliminates pain, ensures strong support for your natural teeth, and prevents bone erosion.",
      journey: "Comprehensive gum pocket measurement -> Deep medical scaling and root planing -> Safe local antibacterial medication -> Gum tissue healing review.",
      aftercare: "Maintain strict medical mouthwash rinsing and follow-up clinical visits twice a year."
    }
  },
  {
    id: "crowns",
    title: "Crowns & Bridges",
    description: "Robustly reinforce weakened teeth and fill gaps beautifully with premium Zirconia or porcelain crowns.",
    icon: "Award",
    image: "https://i.ibb.co/PGp2s7gM/image.png",
    details: {
      what: "Crowns are highly custom protective caps fitted over structurally damaged teeth; bridges are linked structures spanning gaps to replace multiple missing teeth completely.",
      who: "Individuals with weak fractured teeth, completed root canal therapies, or missing teeth seeking non-removable replacements.",
      benefits: "Provides massive biting strength, protects vulnerable teeth from cracking further, and looks exceptionally clean and elegant.",
      journey: "Precise tooth reshaping -> Taking high-accuracy digital dental impressions -> Temporary functional crown placement -> Ultimate premium Zirconia fitting.",
      aftercare: "Avoid biting extremely sticky elements or hard packaging directly on the crown. Maintain thorough flossing."
    }
  },
  {
    id: "checkup",
    title: "Complete Dental Checkup",
    description: "Detailed teeth examination, digital X-rays, and customized preventative counseling for your family.",
    icon: "CheckSquare",
    image: "https://i.ibb.co/ktpnQNY/image.png",
    details: {
      what: "An ultra-thorough clinical inspection of the entire mouth, including gums, cheek walls, and tongue, supported by high-definition digital X-rays to spot early silent problems.",
      who: "Every family member, recommended at least once every six months to guarantee ultimate preventative safety.",
      benefits: "Detects hidden cavities and bone-loss issues early of any pain, saves thousands in extensive repairs, and guarantees lifelong peace of mind.",
      journey: "Visual inspection and camera photography -> Fast digital diagnostic X-rays -> Personalized dentist advice and hygiene coaching.",
      aftercare: "Clean your teeth twice every day, brush before sleeping, and follow your customized expert dental care plan."
    }
  }
];

export const REVIEWS = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Bihar Dental Clinic is truly the best in Patna! Dr. Neha Kumari treated my persistent root canal with absolutely zero pain. Highly satisfied with the cleanliness and care.",
    date: "1 week ago"
  },
  {
    name: "Sunita Devi",
    rating: 5,
    text: "Dr. Neha explains everything so patiently. Visited for teeth cleaning and scaling. Excellent service and very affordable fees. The clinic is highly modern and hygienic.",
    date: "2 weeks ago"
  },
  {
    name: "Alok Ranjan",
    rating: 5,
    text: "I was looking for a trusted expert dental care clinic for my daughter's braces and cavity treatment. The experience here was wonderful. Highly recommended for kids!",
    date: "3 weeks ago"
  },
  {
    name: "Priyanka Sharma",
    rating: 5,
    text: "Got my smile designing with composite veneers done here by Dr. Neha Kumari. The transformation is remarkable! Very professional, highly sterile environment.",
    date: "1 month ago"
  },
  {
    name: "Anand Kishor",
    rating: 5,
    text: "Truly modern technology! I got multiple zirconia crowns and dental implants. The process was completely seamless and comfortable. Best dental clinic in Rajeev Nagar Patna.",
    date: "1 month ago"
  }
];

export const BEFORE_AFTER = [
  { 
    title: "Aesthetic Restoration", 
    desc: "Aesthetic filling and shade-correction.",
    before: "https://i.ibb.co/xt4sqVG9/image.png", 
    after: "https://i.ibb.co/zVM1MCwn/image.png" 
  },
  { 
    title: "Smile Design Veneers", 
    desc: "Veneers alignment correction.",
    before: "https://i.ibb.co/jk1qnvWc/image.png", 
    after: "https://i.ibb.co/svXw7Knw/image.png" 
  }
];

export const GALLERY = [
  { title: "Advanced Dental Operatory", image: "https://i.ibb.co/qF3F0xpj/image.png" },
  { title: "Sterile Clinical Workspace", image: "https://i.ibb.co/J1yrKQS/image.png" },
  { title: "Precision Dental Tools", image: "https://i.ibb.co/KjThTkrt/image.png" },
  { title: "Patient Examination Setup", image: "https://i.ibb.co/8LR0nm9S/image.png" },
  { title: "Advanced Treatment System", image: "https://i.ibb.co/4rg80dW/image.png" },
  { title: "Modern Medical Chair", image: "https://i.ibb.co/27PLkVS4/image.png" },
  { title: "X-Ray Consultation Area", image: "https://i.ibb.co/Q3Mtm9pm/image.png" },
  { title: "Pediatric Friendly Setup", image: "https://i.ibb.co/RGnKXWwR/image.png" },
  { title: "Advanced Bleaching Lasers", image: "https://i.ibb.co/ZzC3B40z/image.png" },
  { title: "Sterilized Operatory Room", image: "https://i.ibb.co/whvn5MZ6/image.png" },
  { title: "Dental Health Records Desk", image: "https://i.ibb.co/bRLG2qTK/image.png" },
  { title: "Premium Diagnosis Equipment", image: "https://i.ibb.co/JjJ5ygcL/image.png" },
  { title: "Cosmetic Design Studio", image: "https://i.ibb.co/PGp2s7gM/image.png" },
  { title: "Modern Clinical Lighting", image: "https://i.ibb.co/ktpnQNY/image.png" },
  { title: "Hygiene Protocol Chamber", image: "https://i.ibb.co/gMC37jt1/image.png" },
  { title: "Surgical Planning Suite", image: "https://i.ibb.co/JRMjVp6J/image.png" },
  { title: "Advanced Dental Camera", image: "https://i.ibb.co/JWbhXtL2/image.png" },
  { title: "Comfortable Patient Lounge", image: "https://i.ibb.co/h1dBkCVK/image.png" },
  { title: "Precision Implants Cart", image: "https://i.ibb.co/Y4n1ZgX1/image.png" },
  { title: "Clinical Autoclave System", image: "https://i.ibb.co/Q3WqxJMm/image.png" },
  { title: "Digital Orthodontics Scan", image: "https://i.ibb.co/d08tK2t0/image.png" },
  { title: "Professional Treatment unit", image: "https://i.ibb.co/jvRzxJWW/image.png" },
  { title: "Hygienic Dental Materials", image: "https://i.ibb.co/ynQ8TmyW/image.png" },
  { title: "Clinic Exterior View", image: "https://i.ibb.co/B5gK81yp/image.png" },
  { title: "Patient Welcoming Lobby", image: "https://i.ibb.co/ccrdd9DN/image.png" },
  { title: "Aesthetic Dental Station", image: "https://i.ibb.co/tT1PpsKk/image.png" },
  { title: "Sterilized Surgical Tray", image: "https://i.ibb.co/0pJ3L2YQ/image.png" },
  { title: "Modern Laser Whitening", image: "https://i.ibb.co/GvFrLS3G/image.png" }
];
