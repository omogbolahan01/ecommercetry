import { createServer, Model } from "miragejs";

createServer({
  models: {
    catalogues: Model,
  },

  seeds(server) {
    server.create("catalogue", {
      id: "1",
      name: "Apple iphone 15 Pro 128GB Dual Sim",
      price: "1,450,000.00",
      description:
        "get ready to meet your new tech obsession – the iPhone 15 Pro!The iphone 15 Pro has arrived at the forefront of innovation, promising to take your smartphone experience to new heights. This cutting-edge masterpiece from Apple is not just a phone; it's a lifestyle upgrade. Let's dive into what makes the iphone 15 Pro the ultimate must-have in the world of tech. It has dual-sim ,with  stunning 6.1-inch display, boasting an impressive 88.2% screen-to-body ratio. With a resolution of 1179 x 2556 pixels and an aspect ratio of 19.5:9, every image comes to life with incredible detail. The pixel density of approximately 461 ppi ensures vibrant colors and sharp visuals, whether you're watching videos, browsing the web, or admiring your photo gallery.CHIPSET Apple A17 Pro (3 nm)Network: 5G,Camera: 48MP,Battery: 3274 mAh,Display: 6.1 inches, Operating System: iOS 17",

      imageUrl: "/images/apple256.webp",
      type: "phone",
    });
    server.create("catalogue", {
      id: "2",
      name: "Apple iphone 15 Pro Max 256GB Dual Sim",
      price: "1,960,000.00",
      description:
        "Say hello to your future tech obsession: the iphone 15 Pro Max!.The iphone 15 Pro Max is here, pushing the boundaries of innovation and promising to elevate your smartphone journey to unprecedented heights. It's not just a phone; it's a lifestyle enhancement. Let's delve into what sets the iphone 15 Pro Max apart as the ultimate must-have in the world of technology.Experience the future of visual technology with the iphone 15 Pro Max and its impressive 6.7-inch display, providing a generous 110.2 square centimeters of screen real estate. Featuring an exceptional screen-to-body ratio of approximately 89.8%, this device offers an immersive, edge-to-edge viewing experience. Whether you're indulging in multimedia, gaming, or productivity, the iphone 15 Pro Max's expansive and nearly bezel-less screen ensures your content shines with stunning clarity and vividness.Sim: Dual Sim ,Network: 5G,Camera: 48MP,Battery: 3274 mAh, Display: 6.7 inches,Operating System: iOS 17",
      imageUrl: "/images/apple15.webp",
      type: "phone",
    });
    server.create("catalogue", {
      id: "3",
      name: "Apple iPhone 13 Pro Max 256gb Single Sim",
      price: "980,000.00",
      description:
        "6.7-inch Super Retina XDR display with Pro Motion for a faster, more responsive feelThe cinematic mode adds shallow depth of field and shifts focus automatically in your videosPro camera system with new 12MP Telephoto, Wide, and Ultra-Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photographyDisplay: 6.7 inches ,Processor: iOS 15, upgradable to iOS 15.2,Storage: 256GB,Main Camera: 12 MP,Selfie Camera: 12 MP, f/2.2, 23mm (wide), 1/3.6,Operating System: Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard)SIM: Single SIM (Nano-SIM and/or eSIM),Battery: Li-Ion 4352 mAh, non-removable (16.75 Wh),Network:  GSM / CDMA / HSPA / EVDO / LTE / ,Other Features: Face ID, accelerometer, gyro, proximity, compass, barometer, Siri natural language commands and dictation Ultra-Wideband (UWB) support, USB 2.0, stereo speakers, Fast charging (27W, unofficial rating), 50% in 30 min (advertised)",
      imageUrl: "/images/apple13.jpg",
      type: "phone",
    });
    server.create("catalogue", {
      id: "4",
      name: "Apple iPhone 14 128GB Single Sim",
      price: "747,000.00",
      description:
        "Unlock your photography potential with the Apple iPhone 14's impressive camera system. The 12 MP wide lens, featuring an f/1.5 aperture and large 1.9µm pixels, ensures stunning low-light performance and exceptional image quality. With dual-pixel PDAF and sensor-shift optical image stabilization (OIS), every shot is sharp, clear, and free from motion blur. Expand your horizons with the 12 MP ultrawide lens, offering a 13mm focal length and a 120˚ field of view, perfect for capturing expansive landscapes and immersive group shots. From detailed close-ups to breathtaking wide-angle shots, the iPhone 14's camera system empowers you to capture moments with remarkable clarity, precision, and creativity.Display:  6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio), 1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density),Processor: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard),Camera: 12 MP, f/1.5, 26mm (wide), 1/1.7,Operating System: iOS 16,upgradable to iOS 16.2,SIM: Single SIM,Battery:  Li-Ion 3279 mAh, non-removable (12.68 Wh),Network:Other Features: Face ID, accelerometer, gyro, proximity, compass, barometer, Ultra-Wideband (UWB) support, Emergency SOS via satellite (SMS sending/receiving), Wired, PD2.0, 50% in 30 min (advertised), 15W wireless (Mag Safe), 7.5W wireless (Qi), HDR, Cinematic mode (4K@30fps), IP68 dust/water resistant (up to 6m for 30 mins)",

      imageUrl: "/images/apple14.jpg",
      type: "phone",
    });
    server.create("catalogue", {
      id: "5",
      name: "Apple iPhone 13 512GB Single Sim",
      price: "875,000.00",
      description:
        "The iPhone 13’s brighter display, longer battery life, and powerful cameras make it the best iPhone for the money. The new iPhone’s display is brighter than its predecessors. The battery life is longer. And Apple has improved an already great camera with new sensors and computational photography features that make you feel like a pro.Apple iPhone 13 Full Specifications,Display: 6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio),Processor: Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard), Apple A15 Bionic (5 nm),Storage: 512GB,Main Camera: 12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS 12 MP, f/2.4, 120˚, 13mm (ultrawide),Selfie Camera: 12 MP, f/2.2, 23mm (wide), 1/3.6,SIM: SINGLE SIM Rdt,Battery: Li-Ion 3240 mAh, non-removable (12.41 Wh),Network: GSM / CDMA / HSPA / EVDO / LTE / 5G ,Other Features: Fast charging 20W, 50% in 30 min (advertised)USB. Power Delivery 2.0MagSafe wireless charging 15W, magnetic fast wireless charging 7.5W, Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      imageUrl: "/images/apple13.jpg",
      type: "phone",
    });
    server.create("catalogue", {
      id: "6",
      name: "Apple iPhone 14 Pro Max 256GB Single Sim",
      price: "1,207,900.00",
      description:
        "Display: 6.7 inches, 110.2 cm2 (~88.3% screen-to-body ratio),Processor: Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth),Storage: 256GB, Main Camera: 48 MP, f/1.8, 24mm (wide), 1/1.28, 1.22µm, dual pixel 12 MP, f/2.8, 77mm (telephoto), 1/3.5,PDAF, OIS, 3x optical zoom 12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55, 1.4µm, dual ,pixel PDAF,TOF 3D LiDAR scanner (depth),Selfie Camera: 12 MP, f/1.9, 23mm (wide), 1/3.6, PDAF,Operating System: iOS 16, upgradable to iOS 16.0.2, SIM: SINGLE SIM,Battery: Li-Ion 4323 mAh, non-removable (16.68 Wh),Network: GSM / CDMA / HSPA / EVDO / LTE / 5G,Other Features: Face ID, accelerometer, gyro, proximity, compass, barometer, Ultra-Wideband (UWB) support, Fast charging, 50% in 30 min (advertised), IP68 dust/water resistant (up to 6m for 30 mins), Dual-LED dual-tone flash, HDR (photo/panorama) ",
      imageUrl: "/images/apple14pro.jpg",
      type: "phone",
    });
    server.create("catalogue", {
      id: "7",
      name: "Apple iPhone13 Pro 128GB Single Sim",
      price: "894,300.00",
      description:
        "Discover the remarkable OLED display of the iPhone 13 Pro. Featuring the Super Retina XDR technology, it offers 28% increased brightness compared to its predecessor, the iPhone 12, and boasts an impressive 800-nit rating. Although lacking the adaptive 120Hz refresh rate of the iPhone 13 Pro, this fantastic OLED panel delivers captivating visuals, ensuring a visually stunning experience that surpasses expectations. Immerse yourself in the brilliance of the iPhone 13's vibrant and vibrant display.Display: 6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio),Processor: Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard),Storage:  128GB,Main Camera: 12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS,12 MP, f/2.4, 120˚, 13mm (ultrawide),Selfie Camera: 12 MP, f/2.2, 23mm (wide), 1/3.6, SL 3D, (depth/biometrics senso),Operating System: iOS 15, upgradable to iOS 15.3,SIM: Single sim (rdt),Battery: Li-Ion 3240 mAh, non-removable (12.41 Wh),Network: GSM / CDMA / HSPA / EVDO / LTE / 5G,Other Features: Face ID, accelerometer, gyro, proximity, compass, barometer, Siri natural language commands and dictation, Ultra-Wideband (UWB) support",
      imageUrl: "/images/apple13p.jpg",
      type: "phone",
    });
    server.create("catalogue", {
      id: "8",
      name: "Samsung Galaxy Z Fold 5 256GB",
      price: "1,466,000.00",
      description:
        "Buy the Samsung Galaxy Z Fold 5: Your very own mobile movie theatre with a big screen. Experience an exciting game console and a multitasking workhorse, all while enjoying the power of a pro-grade camera. Unfold the future of innovation right in your hands!.Experience a world of breathtaking visuals and unparalleled immersion with the Galaxy Z Fold 5's 7.6 Main Display. Whether you're gaming, watching movies, or working, this expansive screen brings content to life like never before, all in the convenience of a compact tablet-sized device.Network: 5G ,Display: 7.6 inches,Camera: 50 MP ,Battery: 4400mAh,Chipset: Qualcomm Snapdragon 888",
      imageUrl: "/images/samsungfold5.jpg",
      type: "phone",
    });
    server.create("catalogue", {
      id: "9",
      name: "Samsung Galaxy Z Flip 4 8GB+256GB",
      price: "570,000.00",
      description:
        "Samsung's new smartphone is the Samsung Galaxy Z Flip 4. The Samsung smartphone has a 6.7-inch (17.02-cm) display with a resolution of 2640 x 1080 pixels. It has 8 GB of RAM and 256 GB of internal storage, so you can store various files such as songs, videos, games, and more without worrying about space limitations,SIM:Nano-SIM and eSIM,NETWORK: GSM / CDMA / HSPA / EVDO / LTE / 5G,OPERATING SYSTEM:Android 12, upgradable to Android 13, One UI 5.1,CHIPSET:Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm),CPU: Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510),MEMORY:256GB 8GB RAM, DISPLAY:6.7 inches, 101.5 cm2 (~85.4% screen-to-body ratio), 1080 x 2640 pixels (~426 ppi density), CAMERA (Rear) 12 MP, f/1.8, 24mm (wide), 1/1.76, 1.8µm, Dual Pixel PDAF, OIS, 12 MP, f/2.2, 123˚ (ultrawide), 1.12µ, CAMERA (Front):10 MP, f/2.4, 26mm (wide), 1.22µm , SOUND , Loud speaker: Yes, 3.5mm jack: Yes,Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, barometer, Samsung Pay (Visa, MasterCard certified). BATTERY, Type: Li-Po 3700 mAh, non-removable	Charging: 15W wireless",

      imageUrl: "/images/samsungflipz.jpg",
      type: "rugged",
    });
    server.create("catalogue", {
      id: "10",
      name: "Samsung Galaxy S22 5G 8GB+128GB",
      price: "670,000.00",
      description:
        "Display:  6.1 inches, 90.1 cm2 (~87.4% screen-to-body ratio), Processor: Octa-core (1x3.00 GHz Cortex-X2 & 3x2.40 GHz Cortex-A710 & 4x1.70 GHz Cortex-A510) - ROW ,Storage: 8GB+128GB,Camera: 50 MP, f/1.8, 24mm (wide), 1/1.56, 1.0µm, Dual Pixel PDAF, OIS.10 MP, f/2.4, 70mm (telephoto), 1/3. 94, 1.0µm, PDAF, OIS, 3x optical zoom 12 MP, f/2.2, 13mm, 120˚ (ultrawide), 1/2.55 1.4µm, Super Steady video  , Operating System: Android 12, One UI 4.1,SIM: Single SIM (Nano-SIM) or Dual SIM (2 Nano-SIMs + eSIM, dual stand-by),Battery: Li-Ion 3700 mAh, non-removable,Network: GSM / CDMA / HSPA / EVDO / LTE / 5G,Other Features: USB Type-C 3.2, USB On-The-Go, Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer, LED flash, auto-HDR, panorama, Fast charging 45W, Reverse wireless charging 4.5W, Fast Qi/PMA wireless charging 15W ",
      imageUrl: "/images/samsung-galaxy.jpg",
      type: "phone",
    });
    server.create("catalogue", {
      id: "11",
      name: " Apple MacBook Pro 16 16GB RAM, 512GB SSD, M1 Pro Chip (2021) SPG-GBR 2021",
      price: "1,846,000.00",
      description:
        "The MacBook Pro 16 sets a new standard for performance, equipped with the cutting-edge Apple M1 Pro or M1 Max chip. Experience a massive leap in CPU, GPU, and machine learning capabilities, propelling your productivity to new heights.Featuring an extraordinary up to 10-core CPU, the MacBook Pro 16 delivers up to 2x faster performance, enabling you to breeze through pro workflows with unparalleled speed. It's remarkable up-to-32-core GPU offers up to 4x faster performance, empowering you to handle graphics-intensive apps and games with ease. With the inclusion of a groundbreaking 16-core Neural Engine, the MacBook Pro 16 achieves up to 5x faster machine learning performance, revolutionizing the way you approach AI tasks and data analysis.Not only does the MacBook Pro 16 excel in performance, but it also boasts exceptional longevity. Experience up to 21 hours of battery life, ensuring that you can stay productive and inspired throughout the day, wherever you go.Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever  Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games 16-core Neural Engine for up to 5x faster machine learning performance, Longer battery life, up to 21 hours, Up to 16GB of unified memory so everything you do is fast and fluid, Up to 512GB of superfast SSD storage launches apps and opens files in an instant,Stunning 16-inch Liquid Retina XDR display with extreme dynamic range and contrast ratio,1080p FaceTime HD camera with advanced image signal processor for sharper video calls,Six-speaker sound system with force-canceling woofers",
      imageUrl: "/images/applepro.jpg",
      type: "laptop",
    });
    server.create("catalogue", {
      id: "12",
      name: "Apple MacBook Pro 14 M1 Pro Chip, 16GB unified memory, 512GB SSD, 14.2 Space Grey",
      price: "1,576,000",
      description:
        "  M1 Pro Chip,16GB unified memory, 512GB SSD ,14.2, 67W USB-C Power Adapter, 14-inch Liquid Retina ,XDR display,Three Thunderbolt 4 ports, HDMI port,  SDXC card slot, Mag Safe 3 port,Backlit Magic Keyboard with Touch ID - British",
      imageUrl: "/images/applem1.jpg",
      type: "laptop",
    });
    server.create("catalogue", {
      id: "13",
      name: "Apple MacBook Pro 14 M1 Pro Chip, 16GB unified memory, 512GB SSD, 14.2 Space Grey",
      price: "1,576,000",
      description:
        "  M1 Pro Chip,16GB unified memory, 512GB SSD ,14.2, 67W USB-C Power Adapter, 14-inch Liquid Retina ,XDR display,Three Thunderbolt 4 ports, HDMI port,  SDXC card slot, Mag Safe 3 port,Backlit Magic Keyboard with Touch ID - British",
      imageUrl: "/images/applem1.jpg",
      type: "laptop",
    });
    server.create("catalogue", {
      id: "14",
      name: "HP ENVY X360 15 LAPTOP (CI5-1240P/16GB/512GB /15.6 FHD TOUCH/WIN10H",
      price: "695,000.00",
      description:
        " Experience the power and versatility of the ENVY x360 HP -15t-ed000 laptop. Equipped with an Intel® Core™ i5-10210U processor, 16GB DDR4 RAM, and NVIDIA® GeForce® MX330 graphics card, it delivers impressive performance for both work and play. The 512GB PCIe® NVMe™ M.2 SSD ensures fast storage and quick boot times. Enjoy an immersive visual experience with the 15.6 FHD multitouch-enabled display. With its sleek design and cutting-edge features, this laptop is the perfect companion for your everyday computing needs.Intel® Core™ i5-1240P,16 GB DDR4,512 GB keyboard,1 HDMI 2.1,Win 10",
      imageUrl: "/images/envy.jpg",
      type: "laptop",
    });
    server.create("catalogue", {
      id: "15",
      name: "ASUS FX516PC-HN004W 15.6 FHD, Intel core i7 -11370H 8GB, 512GB SSD, NVIDIA GRAPHICS, WIN 10",
      price: "945,000.00",
      description:
        "Be daring. Do more while on the move. The all-new ASUS TUF Dash F15 combines powerful Windows 10 Home gaming with a super slim design. The latest Intel® Core-TM 11370H CPU and GeForce RTXTM 3070 GPU enable smooth gaming on up to a blazing fast 144Hz display. Despite being 19.9mm thin, this TUF chassis meets MIL-STD durability standards, withstanding everyday knocks and bumps. Up to 16.6 hours of battery life allows you to multitask more in a laptop light enough to take anywhere.",
      imageUrl: "/images/asus.jpg",
      type: "laptop",
    });
    server.create("catalogue", {
      id: "16",
      name: "Dell Vostro 3510 Laptop: Intel Core i7-1165G7, 8GB RAM, 512GB SSD, 15.6",
      price: "510,400.00",
      description:
        "The Dell Vostro 3510 Laptop is a reliable and efficient computing device designed to meet your productivity needs. Equipped with a powerful Intel Core™ i7-1165G7 processor, ample storage capacity, and a vibrant 15.6 HD display, this laptop offers a seamless computing experience. With the added benefit of the Ubuntu operating system, it provides a secure and customizable environment to suit your preferences.DELL Vostro 3510, Product type: Notebook,Form factor: Clamshell,  Processor family: Intel® Core™ i7, Processor model: i7-1165G7,Display diagonal: 39.6 cm (15.6),HD type: Full HD,Display resolution: 1920 x 1080 pixels, Internal memory: 8 GB, Internal ,memory type: DDR4-SDRA, Total storage capacity: 512 GB,Storage media: SSD, On-board graphics card model: Intel Iris Xe Graphics",
      imageUrl: "/images/dell.jpg",
      type: "laptop",
    });
    server.create("catalogue", {
      id: "17",
      name: "HP SPECTRE X360 14-EA0133NA LAPTOP (CI7-1165G7/16GB/512GB/13.5/WIN10P/3YR WARRANTY) - NATURAL SILVER",
      price: "1,310,400.00",
      description:
        "HP Spectra x360 Convertible 14-ea0133na, Intel® Core™ i7-1165G7 (up to 4.7 GHz with Intel® Turbo Boost Technology, 12 MB L3 cache, 4 cores, 8 threads), 16 GB LPDDR4x-3733 MHz RAM (onboard),512 GB PCIe® NV Me™ TLC M.2 SSD, 34.3 cm (13.5) diagonal,WUXGA+ (1920 x 1280),multitouch-enabled,IPS, edge-to-edge glass,micro-edge,anti-reflection Corning® Gorilla® Glass NBT™ , 400 nits,100% sRGB, Wi-Fi CERTIFIED 6™ AX201 (2x2) and Bluetooth® 5 combo (Supporting Gigabit data rate), 2 Thunderbolt™ 4 with USB4™ Type-C® 40Gbps signaling rate (USB Power Delivery, DisplayPort™ 1.4, HP Sleep and Charge),1 SuperSpeed USB Type-A 10Gbps signaling rate (HP Sleep and Charge),1 headphone/microphone combo,4-cell,66 Wh Li-ion polymers,HP True Vision 720p HD IR camera with camera shutter and integrated dual array digital microphones,Windows 10 Pro 64",
      imageUrl: "/images/hp.jpg",
      type: "laptop",
    });
    server.create("catalogue", {
      id: "18",
      name: "HISENSE LED TV 43A4G SMART TV FHD",
      price: "170,800.00",
      description:
        "With enough features to satisfy even the most tech-hungry consumers, THE HISENCE 43 iches LED FULL HD TV Smart TV is the complete package at a price point that won’t break the bank. Featuring Natural Colour Enhancer technology, it brings images to life, reflecting the true colors of all that you’re watching on screen. Hisense’s Clean View technology automatically analyses input signals and optimizes images to make them the best they can possibly be. Individual pixels are enhanced in real-time, delivering sharper, cleaner picture quality, no matter what you’re watching.Model: TV 43, 43 Inches TV, Smart TV, LED FULL HD TV,2 HDMI, 2 USB DIVX,1 AV , Color: Black, WI FI: Netflix, Free Bracket",
      imageUrl: "/images/hisense.png",
      type: "electronics",
    });
    server.create("catalogue", {
      id: "19",
      name: "HISENSE LED TV 43 INCHES SMART TV FHD",
      price: "181,800.00",
      description:
        "The A4H comes loaded with more technology than some would expect in such a compact TV. The voice remote gives quick access to the built-in Google Assistant, opens the door to a vast library of content, as well as, gives the user voice control over TV functions. Motion Rate 120 ensures that content motion is smooth and distinct with less blurring. This feature is important for the TV’s game and sports modes which adjust the TV settings for the optimal viewing experience when playing the latest fast-paced games or watching fast-action sports content. The A4H also comes with DTS Virtual: X for a more robust audio experience. For the consumer in the market for a smaller size television that still packs a punch, look no further than the A4H.Type of TV,Smart TV: Yes, Android,Works with Alexa: Yes, Google Assistant built-in: Yes,App Store: Yes (Google Play App Store),Picture Quality,Screen resolution: 2K FHD, 1920 x 1080p,Local dimming: No, 4K upscaling: No,Motion Rate: 120,Display aspect ratio: 16:9,Backlight type: Full Array LED,Resolution type: 2K ,Wireless built-in: Yes, Bluetooth: Yes,HDMI: 2,Ethernet (LAN): Yes,USB: 2 (2.0),RF antenna: 1,Earphone/audio output: 1,HDMI ARC: Yes ",
      imageUrl: "/images/his2.jpg",
      type: "electronics",
    });
    server.create("catalogue", {
      id: "20",
      name: "Nexus 120 Litres Double Door Fridge (NX-140) - Silver",
      price: "171,650.00",
      description:
        "Keep your food fresh with our stylish range of Nexus FreezersRanging from the Chest Freezer, Double door Refrigerator, Single door Refrigerator, Bottom Freezer Refrigerator and a host of others, Nexus freezers have long been a favourite in the homes of families across the world.Nexus, the leading provider of quality home appliances in Nigeria, is dedicated to ensuring you enjoy access to a premium range of chest freezers. Our products are designed for superior storage space, style and aesthetics, and most importantly to keep your food freshKey Features:  Interior Light:The refrigerator is equipped with an interior light that illuminates the inside of the fridge when the door is opened. This feature allows for better visibility and easy identification of items, even in low-light conditions.  Mechanical Temperature Control:The refrigerator utilizes a mechanical temperature control system, allowing you to manually adjust and set the desired temperature inside the fridge. This control mechanism enables you to customize the cooling conditions based on the type of food or beverages being stored.  Fast Freezing Function:The refrigerator features a fast freezing function that enables rapid freezing of food items. This function is especially useful when you need to quickly freeze perishable items or when you want to preserve the freshness and quality of the food. Easy to Clean Interior:The interior of the refrigerator is designed to be easy to clean. It may feature removable shelves, drawers, or compartments that can be easily taken out for cleaning. This design consideration allows for convenient maintenance and ensures a hygienic environment inside the fridge. Nexus is dedicated to filling homes across Nigeria with lifestyle enhancing household appliances. The difference between a house and a home is the experience and comfort you feel inside – we’re here to bridge the gap. We’ve spent years developing a host of world-class household appliances that cater to a wide range of individual preferences. From the kitchen to the laundry, every model is manufactured for functionality, style, convenience and most importantly, maintaining a comfortable home lifestyle.Part and parcel of our growing success has been our ability to assemble a team of highly qualified and like-minded individuals. They are focused on providing first-rate solutions for your home and surroundings. We take pride in putting your needs first, including your sense of style and budget. It has been a critical component, and is key to making us the leading choice for household appliances. ",
      imageUrl: "/images/fridge.jpg",
      type: "electronics",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/catalogues", (schema, request) => {
      return schema.catalogues.all();
    });

    this.get("/catalogues/:id", (schema, request) => {
      const id = request.params.id;
      return schema.catalogues.find(id);
    });
  },
});
