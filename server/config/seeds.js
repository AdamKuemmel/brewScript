const db = require("./connection");
const { User, Product, Order } = require("../models");

db.once("open", async () => {
  // await Category.deleteMany();

  // const categories = await Category.insertMany([
  //   { name: "Coffee" },
  //   { name: "Apparatus" },
  //   { name: "Swag" },
  // ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      product_name: "Typica",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Typica originated from Yemeni stock, taken first to Malabar, India, and later to Indonesia by the Dutch, and the Philippines by the Spanish. It later made its way to the West Indies to the French colony at Martinique.",
      region: "Worldwide",
      image: "Typica.jpg",
    },
    {
      product_name: "Arusha",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description: "Either a Typica variety or a French Mission.",
      region: "Mount Meru in Tanzania, and Papua New Guinea",
      image: "Arusha.jpg",
    },
    {
      product_name: "Benguet",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Typica variety grown in Benguet in the Cordillera highlands of the northern Philippines since 1875.",
      region: "Philippines",
      image: "Benguet.jpg",
    },
    {
      product_name: "Bergendal/Sidikalang",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Both are Typica varieties which survived the leaf rust outbreak of the 1880s; most of the other Typica in Indonesia was destroyed.",
      region: "Indonesia",
      image: "Bergendal-Sidikalang.jpg",
    },
    {
      product_name: "Bernardina",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "A variety discovered in Finca Los Bellotos, El Salvador by Sofia and Fernando Alberto Pacas. It was first thought to be Geisha because of its aromatic profile. However, after studying its phenotype characteristics and DNA testing, it was determined to be a new, unclassified variety genetically similar to varieties found in the Agaro region of Ethiopia.either a Typica variety or a French Mission.",
      region: "El Salvador",
      image: "BERNANDINA.jpg",
    },
    {
      product_name: "Bourbon",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Around 1708, the French planted coffee on the island of Bourbon (now called Réunion) in the middle of the Indian Ocean, all probably from the same parent stock—the plant the Dutch gave them. Unsurprisingly, it mutated slightly and was planted throughout Brazil in the late 1800s and eventually spread through Latin America, however, it was not possible to achieve the same level of flavour as when in Réunion, due to the volcanic earth and the soil properties. Bourbon produces 20–30% more fruit than Typica strains.",
      region: "Réunion, Rwanda, Latin America.",
      image: "Bourbon.jpg",
    },
    {
      product_name: "Catuai",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "This is a hybrid of Mundo Novo and Caturra bred in Brazil in the late 1940s.",
      region: "Latin America",
      image: "Catuai.jpg",
    },
    {
      product_name: "Catimor",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "This is cross between Timor coffee and Caturra coffee. It was created in Portugal in 1959. In India, this cultivar goes by the name Cauvery.",
      region: "Latin and Central America",
      image: "Catimor.jpg",
    },
    {
      product_name: "Caturra",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Caturra is a natural mutation of the Bourbon variety. It was discovered on a plantation in the state of Minas Gerais in Brazil sometime between 1915 and 1918. Caturra has a single-gene mutation that causes the plant to grow smaller (called dwarfism).",
      region: "Brazil",
      image: "Caturra.jpg",
    },
    {
      product_name: "Charrier",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "This is a newly found species from Cameroon. It has gained some press recently due to its caffeine-free nature. Not yet grown commercially.",
      region: "Cameroon",
      image: "Charrier.jpg",
    },
    {
      product_name: "Harar",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "From the region of Harar, Ethiopia. Known for its complex, fruity flavor that resembles a dry red wine. All three Ethiopian varieties are trademarked names with the rights owned by Ethiopia.",
      region: "Ethiopia",
      image: "Harar.jpg",
    },
    {
      product_name: "Sidamo",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "From the Sidamo (now Oromia) region of Ethiopia as well. All three Ethiopian varieties are trademarked names with the rights owned by Ethiopia.",
      region: "Ethiopia",
      image: "Sidamo.jpg",
    },
    {
      product_name: "Yirgacheffe",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "	From the Yirgachefe district in the Gedeo Zone of the Southern Nations, Nationalities, and People's Region of Ethiopia. All three Ethiopian varieties are trademarked names with the rights owned by Ethiopia",
      region: "Ethiopia",
      image: "Yirgacheffe.jpg",
    },
    {
      product_name: "French Mission",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "French Mission is actually Bourbon that was planted in East Africa by French Missionaries around 1897.",
      region: "Africa",
      image: "FrenchMission.jpg",
    },
    {
      product_name: "Geisha",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Geisha or Gesha variety, grown in the highlands of Boquete in Chiriquí Province, Panama, highly sought after at auction, achieving high prices. ",
      region: "Ethiopia, Tanzania, Costa Rica, Panama, Colombia, Peru",
      image: "Geisha.jpg",
    },
    {
      product_name: "Bonifieur",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "It was used to help improve the quality of other types of coffees and some experts consider it to be one of the best types of coffee in the world.",
      region: "Guadeloupe",
      image: "Bonifieur.jpg",
    },
    {
      product_name: "Kona",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Grown on the slopes of Hualalai and Mauna Loa in the Kona District on the Big Island of Hawaii. Coffee was first introduced to the Islands by Chief Boki, the Governor of Oahu, in 1825.",
      region: "Hawaii",
      image: "Kona.jpg",
    },
    {
      product_name: "Java",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "From the island of Java, in Indonesia. This coffee was once so widely traded that java became a slang term for coffee. Java encompasses a regional style, not a cultivar of coffee.",
      region: "Indonesia",
      image: "Java.jpg",
    },
    {
      product_name: "K7",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "A Kenyan selection of French Mission Bourbon selected at Legelet Estate in Muhoroni, Kenya. Selected based on cupping trials.",
      region: "Africa",
      image: "K7.jpg",
    },
    {
      product_name: "Maragogipe",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Maragogipe ('y') is considered to be a natural mutation from Typica. It was first discovered near Maragogipe, in Brazil's state Bahia. Maragogype is well known for producing big beans.",
      region: "Latin America",
      image: "Maragogipe.jpg",
    },
    {
      product_name: "Maracaturra",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Maracaturra is a man-made hybrid plant between Caturra and Maragogype.|It was first bred in order to capture the flavor profile of Maragogype with the higher yield and efficiency of the Caturra Varietal.",
      region: "Latin America",
      image: "Maracaturra.jpg",
    },
    {
      product_name: "Mayagüez",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description: "A Bourbon cultivar grown in Rwanda.",
      region: "Africa",
      image: "Mayagüez.jpg",
    },
    {
      product_name: "Mocha",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Yemeni coffee traded through the once major port of Mocha. Not to be confused with the preparation style (coffee with cocoa).",
      region: "Yemen",
      image: "Mocha.jpg",
    },
    {
      product_name: "Mundo Novo",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Mundo Novo is a hybrid between Bourbon and Typica, crossed in the 1940s.",
      region: "Latin America",
      image: "Mundo-Novo.jpg",
    },
    {
      product_name: "Orange, Yellow Bourbon",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Red Bourbon and Orange Bourbon are types of Bourbon that have been selected from spontaneous mutation.",
      region: "Latin America, Vietnam",
      image: "Orange-Yellow-Bourbon.jpg",
    },
    {
      product_name: "Pacamara",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Pacamara is a hybrid between the Bourbon mutation Pacas and Maragogype. It was bred in El Salvador in 1958 probably to achieve a Typica variety that produces larger beans.",
      region: "Latin America",
      image: "Pacamara.jpg",
    },
    {
      product_name: "Pacas",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "A natural mutation of the Bourbon variety found in El Salvador in 1949.",
      region: "Latin America",
      image: "Pacas.jpg",
    },
    {
      product_name: "Pache Comum",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Is a mutation of Typica first found in Santa Rosa, Guatemala.",
      region: "Latin America",
      image: "Pache-Comum.jpg",
    },
    {
      product_name: "Ruiru 11",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Ruiru 11 was released in 1985 by the Kenyan Coffee Research Station. While the variety is generally disease resistant, it produces a lower cup quality than K7, SL28 and 34.",
      region: "Kenya",
      image: "Ruiru-11.jpg",
    },
    {
      product_name: "S795",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Probably the most commonly planted Arabica in India and Southeast Asia,[44] known for its balanced cup and subtle flavour notes of mocca. Released during the 1940s, it is a cross between the Kents and S.288 varieties.",
      region: "India, Indonesia",
      image: "S795.jpg",
    },
    {
      product_name: "Sagada",
      item_cost: 10.99,
      category: "Coffee",
      themes: "Spooky",
      description:
        "Typica variety grown in Sagada and Besao, Mountain Province in the Cordillera highlands of the northern Philippines since the 1890s and early 1900s.",
      region: "Philippines",
      image: "Sagada.jpg",
    },
    {
      product_name: "T-Shirt",
      item_cost: 22.99,
      category: "Swag",
      themes: "Spooky",
      description: "Our best material t-shirt with the brewScript logo",
      region: "United States",
      image: "Sagada.jpg",
    },
    {
      product_name: "Mug",
      item_cost: 8.99,
      category: "Swag",
      themes: "Spooky",
      description: "A cold/hot resistant mug with our brewScript logo",
      region: "United States",
      image: "Sagada.jpg",
    },
    {
      product_name: "Thermos",
      item_cost: 17.99,
      category: "Swag",
      themes: "Spooky",
      description:
        "Superior cold and hot protection in a large size 48 ounce stainless steel thermos",
      region: "United States",
      image: "Sagada.jpg",
    },
    {
      product_name: "French Press P3",
      item_cost: 21.99,
      category: "Apparatus",
      themes: "Spooky",
      description:
        "This elegant-looking press is easy to use and relatively simple to clean. And thanks to its unique double filter, the P3 makes richer, more flavorful coffee with less residue than its competitors.",
      region: "United States",
      image: "French-Press.jpg",
    },
    {
      product_name: "Chemex Brewer ",
      item_cost: 47.99,
      category: "Apparatus",
      themes: "Spooky",
      description:
        "Made from borosilicate glass and fastened with a wood collar and tie, the Chemex Coffeemaker brews without imparting any flavors of its own.",
      region: "United States",
      image: "ChemexBrewer.jpg",
    },
    {
      product_name: "Kyoto Style Cold Brew Tower",
      item_cost: 249.99,
      category: "Apparatus",
      themes: "Spooky",
      description:
        "The Yama glass coffee tower is a classic cold drip brewing system that has been around for decades and has become the foundation for some of the best Japanese coffee makers to follow in its footsteps. The innovative system utilizes ice in the top glass chamber that produces a rich, full-bodied, flavorful iced coffee that has very low acidity.",
      region: "United States",
      image: "Kyoto-Cold-Brew.jpg",
    },
  ]);

  console.log("products seeded");

  // await User.deleteMany();

  // await User.create({
  //   first_name: "Rolph",
  //   last_name: "Borman",
  //   email: "rborman0@wp.com",
  //   shipping_address: [
  //     {
  //       street: "707 Meadow Ridge Way",
  //       city: "Mobile",
  //       state: "AL",
  //       postal: 36670,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "707 Meadow Ridge Way",
  //       city: "Mobile",
  //       state: "AL",
  //       postal: 36670,
  //     },
  //   ],
  //   phone_number: "251-757-9769",
  //   password: "Cqg7vP",
  //   credit_card_number: 4913584668961221,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });

  // await User.create({
  //   first_name: "Cletis",
  //   last_name: "Arthan",
  //   email: "carthan1@a8.net",
  //   shipping_address: [
  //     {
  //       street: "71625 Monica Trail",
  //       city: "San Francisco",
  //       state: "CA",
  //       postal: 94147,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "71625 Monica Trail",
  //       city: "San Francisco",
  //       state: "CA",
  //       postal: 94147,
  //     },
  //   ],
  //   phone_number: "415-776-7053",
  //   password: "3YQ0Px",
  //   credit_card_number: 5294787665009003,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Foster",
  //   last_name: "Hryskiewicz",
  //   email: "fhryskiewicz2@infoseek.co.jp",
  //   shipping_address: [
  //     {
  //       street: "56 Burning Wood Drive",
  //       city: "San Jose",
  //       state: "CA",
  //       postal: 95118,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "56 Burning Wood Drive",
  //       city: "San Jose",
  //       state: "CA",
  //       postal: 95118,
  //     },
  //   ],
  //   phone_number: "408-414-2457",
  //   password: "XwemB2lDyu",
  //   credit_card_number: 6759744419926460393,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Silvana",
  //   last_name: "Stilgoe",
  //   email: "sstilgoe3@zimbio.com",
  //   shipping_address: [
  //     {
  //       street: "27829 Sundown Court",
  //       city: "Augusta",
  //       state: "CA",
  //       postal: 30919,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "27829 Sundown Court",
  //       city: "Augusta",
  //       state: "CA",
  //       postal: 30919,
  //     },
  //   ],
  //   phone_number: "706-302-9989",
  //   password: "SqoOCQ0YRSIz",
  //   credit_card_number: 67092885778531675,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Michaella",
  //   last_name: "Jiles",
  //   email: "mjiles4@berkeley.edu",
  //   shipping_address: [
  //     {
  //       street: "22 Sheridan Point",
  //       city: "Orange",
  //       state: "CA",
  //       postal: 92862,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "22 Sheridan Point",
  //       city: "Orange",
  //       state: "CA",
  //       postal: 92862,
  //     },
  //   ],
  //   phone_number: "714-585-3999",
  //   password: "iLXV7ev0Abz",
  //   credit_card_number: 3553921123135008,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Cletis",
  //   last_name: "Arthan",
  //   email: "carthan1@a8.net",
  //   shipping_address: [
  //     {
  //       street: "71625 Monica Trail",
  //       city: "San Francisco",
  //       state: "CA",
  //       postal: 94147,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "71625 Monica Trail",
  //       city: "San Francisco",
  //       state: "CA",
  //       postal: 94147,
  //     },
  //   ],
  //   phone_number: "415-776-7053",
  //   password: "3YQ0Px",
  //   credit_card_number: 5294787665009003,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Darline",
  //   last_name: "Kasman",
  //   email: "dkasman5@amazon.de",
  //   shipping_address: [
  //     {
  //       street: "440 Dorton Terrace",
  //       city: "Jersey",
  //       state: "NJ",
  //       postal: 07305,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "440 Dorton Terrace",
  //       city: "Jersey",
  //       state: "NJ",
  //       postal: 07305,
  //     },
  //   ],
  //   phone_number: "201-947-9593",
  //   password: "BES2X2",
  //   credit_card_number: 4026527752462915,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Kellie",
  //   last_name: "Bercevelo",
  //   email: "kbercevelo6@msn.com",
  //   shipping_address: [
  //     {
  //       street: "97 Trailsway Alley",
  //       city: "Buffalo",
  //       state: "NY",
  //       postal: 14276,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "97 Trailsway Alley",
  //       city: "Buffalo",
  //       state: "NY",
  //       postal: 14276,
  //     },
  //   ],
  //   phone_number: "716-733-4068",
  //   password: "c2827aFQeB6",
  //   credit_card_number: 4026527752462915,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Lenora",
  //   last_name: "Lilford",
  //   email: "llilford7@canalblog.com",
  //   shipping_address: [
  //     {
  //       street: "3334 Victoria Place",
  //       city: "Bridgeport",
  //       state: "CT",
  //       postal: 06673,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "3334 Victoria Place",
  //       city: "Bridgeport",
  //       state: "CT",
  //       postal: 06673,
  //     },
  //   ],
  //   phone_number: "203-317-4487",
  //   password: "SrCNgWE",
  //   credit_card_number: 6331109066873544,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Lion",
  //   last_name: "Dilliway",
  //   email: "ldilliway8@vkontakte.ru",
  //   shipping_address: [
  //     {
  //       street: "33943 Melrose Road",
  //       city: "Phoenix",
  //       state: "AZ",
  //       postal: 85067,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "33943 Melrose Road",
  //       city: "Phoenix",
  //       state: "AZ",
  //       postal: 85067,
  //     },
  //   ],
  //   phone_number: "602-574-9202",
  //   password: "Brk4JahobBY",
  //   credit_card_number: 5602246224570200,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });
  // await User.create({
  //   first_name: "Jimmie",
  //   last_name: "Blakiston",
  //   email: "jblakiston9@com.com",
  //   shipping_address: [
  //     {
  //       street: "17 Montana Center",
  //       city: "El Paso",
  //       state: "TX",
  //       postal: 79945,
  //     },
  //   ],
  //   billing_address: [
  //     {
  //       street: "17 Montana Center",
  //       city: "El Paso",
  //       state: "TX",
  //       postal: 79945,
  //     },
  //   ],
  //   phone_number: "915-303-1581",
  //   password: "uByvy5w",
  //   credit_card_number: 633445751648926201,
  //   orders: [
  //     {
  //       products: [products[0]._id, products[1]._id, products[2]._id],
  //     },
  //   ],
  // });

  // console.log("users seeded");

  process.exit();
});
