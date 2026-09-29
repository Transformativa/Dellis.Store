/*
  Dellis site content.
  To add or change something, edit the lists below and save.
  - image: a link to the picture (or a file in /images, e.g. "images/hat.jpg")
  - link:  where the Buy / Watch button goes
*/
window.DELLIS = {

  links: {
    email: "Admin@dellis.store",
    location: "Swampscott, MA 01907",
    youtube: "https://www.youtube.com/@Dellis.E",
    spotify: "https://open.spotify.com/artist/6cyNf3oVEHB52yymeu4qho",
    spotifyEmbed: "https://open.spotify.com/embed/artist/6cyNf3oVEHB52yymeu4qho?utm_source=generator&theme=0",
    appleMusic: "https://music.apple.com/us/artist/danny-ellis-dellis/1825255735",
    barnesNoble: "https://www.barnesandnoble.com/s/Danny%20Ellis",
    facebook: "https://www.facebook.com/people/Dellis/61566991354568/",
    linkedin: "https://www.linkedin.com/company/dellis",
    printful: "https://dellis.printful.me",
    printify: "https://dellis-store.printify.me"
  },

  // Danny the Mighty Diver Adventures, in series order
  series: {
    name: "Danny the Mighty Diver Adventures",
    link: "https://link.amazon/B04RiJfKz",
    books: [
      { title: "Danny the Mighty Diver", cover: "https://m.media-amazon.com/images/I/51LfMCiCLzL._SY400_.jpg" },
      { title: "The Secret of the Ocean Letter", cover: "https://m.media-amazon.com/images/I/51x0S6u-eIL._SY400_.jpg" },
      { title: "The Treasure of Turtle Bay", cover: "https://m.media-amazon.com/images/I/41wZ9otDa%2BL._SY400_.jpg" },
      { title: "Ghosts of the Deep", cover: "https://m.media-amazon.com/images/I/41TxvXVaEIL._SY400_.jpg" },
      { title: "Journey Through Winter Holidays", cover: "https://m.media-amazon.com/images/I/41ssLHV0esL._SY400_.jpg" },
      { title: "The Shipwreck of the Deep Atlantic", cover: "https://m.media-amazon.com/images/I/41zaomebXxL._SY400_.jpg" },
      { title: "Axolotl Rescue", cover: "https://m.media-amazon.com/images/I/51xpNhwGNyL._SY400_.jpg" },
      { title: "The Wonders of India", cover: "https://m.media-amazon.com/images/I/51%2Bv5Uh8CsL._SY400_.jpg", isNew: true }
    ]
  },

  // Books outside the main series
  moreBooks: [
    {
      title: "The Buzzy Body Mystery",
      collection: "Inside My Body Collection",
      blurb: "A calm ocean story that helps kids understand wiggly, buzzy feelings and find their way back to calm.",
      cover: "https://m.media-amazon.com/images/I/51BPIetcyML._SY400_.jpg",
      link: "https://link.amazon/B04jnhmFP"
    },
    {
      title: "Forever My Puppy",
      collection: "The Heart & Paws Collection",
      blurb: "Whooffie the Maltese meets baby Danny and decides he is her puppy, for always.",
      cover: "https://m.media-amazon.com/images/I/41EGv3myDYL._SY400_.jpg",
      link: "https://link.amazon/B05JnHbCS"
    }
  ],

  // Merch. store: "printful" or "printify". group: "kids", "adults" or "gear"
  products: [
    { name: "Mighty Diver Hooded Towel", price: "$42.26", group: "kids", store: "printify",
      image: "https://images-api.printify.com/mockup/6abbb5edab31108c310859aa/91884/62423/youth-hooded-towel-mighty-diver.jpg?camera_label=on-person-back-1",
      link: "https://dellis-store.printify.me/product/32526679" },
    { name: "Mighty Diver Toddler Sweatshirt", price: "$37.24", group: "kids", store: "printify",
      image: "https://images-api.printify.com/mockup/6abbb5eeab31108c310859ac/113783/110548/cozy-up-your-toddler-in-the-mighty-diver-kids-sweatshirt.jpg?camera_label=front",
      link: "https://dellis-store.printify.me/product/32526677" },
    { name: "Kids Rash Guard", price: "From $34.00", group: "kids", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-368-670a9b9c0c743__360",
      link: "https://dellis.printful.me/product/kids-rash-guard" },
    { name: "Youth Short Sleeve T-Shirt", price: "From $24.76", group: "kids", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-307-6abbb3ccedd69__360",
      link: "https://dellis.printful.me/product/youth-short-sleeve-t-shirt" },
    { name: "Youth Classic Tee", price: "From $12.00", group: "kids", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-732-6abbb38acd174__360",
      link: "https://dellis.printful.me/product/youth-classic-tee" },
    { name: "Youth Long Sleeve Tee", price: "From $26.50", group: "kids", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-511-670a9bc46bf00__360",
      link: "https://dellis.printful.me/product/youth-long-sleeve-tee-670a9bc4c16cf" },
    { name: "Youth Long Sleeve Tee", price: "From $25.99", group: "kids", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-511-670a9a77523ee__360",
      link: "https://dellis.printful.me/product/youth-long-sleeve-tee" },
    { name: "Youth Baseball Cap", price: "From $25.99", group: "kids", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-429-670a8c545690f__360",
      link: "https://dellis.printful.me/product/youth-baseball-cap" },
    { name: "Long Sleeve Midi Dress", price: "From $47.00", group: "adults", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-589-68ff9016c64c5__360",
      link: "https://dellis.printful.me/product/all-over-print-long-sleeve-midi-dress" },
    { name: "3/4 Sleeve Raglan Shirt", price: "From $26.00", group: "adults", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-233-670a9b2cf1e16__360",
      link: "https://dellis.printful.me/product/34-sleeve-raglan-shirt" },
    { name: "Leggings", price: "From $34.00", group: "adults", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-189-670a9acda3532__360",
      link: "https://dellis.printful.me/product/leggings" },
    { name: "Champion Long Sleeve Shirt", price: "From $35.50", group: "adults", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-374-670a9aa47e16b__360",
      link: "https://dellis.printful.me/product/mens-champion-long-sleeve-shirt" },
    { name: "Champion T-Shirt", price: "From $30.00", group: "adults", store: "printful",
      image: "https://cdn.printful.me/t/quick-stores/products/w168/14529763-373-670a99bab4709__360",
      link: "https://dellis.printful.me/product/mens-champion-t-shirt" },
    { name: "Mighty Diver Backpack", price: "$57.60", group: "gear", store: "printify",
      image: "https://images-api.printify.com/mockup/6abbb5edab31108c310859ab/61364/2984/dive-into-adventure-with-the-mighty-diver-backpack.jpg?camera_label=front",
      link: "https://dellis-store.printify.me/product/32526678" }
  ],

  // Albums on Spotify (id = the part after /album/)
  albums: [
    { id: "247epyWGE5PVKtSJ0aECcn", title: "Live Like You Are Dreaming" },
    { id: "7cMwkz5UFK1eHZBPhpxb4O", title: "Every Life Is Beautiful" },
    { id: "7gvuLkB9uRsh8utvn7XRTd", title: "Forever My Puppy" },
    { id: "1YpgaP9sQm6qZCowhyb37r", title: "Journey Through Winter Holidays" }
  ],

  // Music videos from YouTube (id = the part after watch?v=)
  videos: [
    { id: "ggOVSSWk4BY", title: "Live Like You Are Dreaming", length: "2:22" },
    { id: "IaqnzWeeU0Y", title: "Forever My Puppy", length: "2:13" },
    { id: "3-8WfQ4tvsI", title: "Strong Together", length: "4:09" },
    { id: "_CALnIQSduk", title: "Journey Through Winter Holidays", length: "4:11" },
    { id: "4Vde6C8ffg8", title: "Didi, You Are Special", length: "2:00" },
    { id: "mft-7xb8FX4", title: "Mimi", length: "1:41" }
  ],

  // Danny's Curated List (Amazon picks). Each list gets its own section on picks.html.
  picks: [
    { id: "books", title: "Danny's Favorite Books", image: "images/picks-books.jpg",
      blurb: "Books about neurodiversity, books by Danny, and books he simply loves.",
      items: [
        { name: "Forever My Puppy", note: "Written by Danny in honor of his dog Whooffie, who passed away in February 2025. For any family that has lost a pet.", link: "https://amzn.to/4i4RlIi" },
        { name: "Danny the Mighty Diver", note: "Danny's first book, based on the bedtime stories his mom tells him: ocean adventures, friendship and imagination.", link: "https://amzn.to/3DkeYNY" },
        { name: "Uniquely Wired", note: "Winner of the 2023 Autism Live Best Book Award. Zak, a boy with autism, explains how he experiences the sights and sounds around him.", link: "https://amzn.to/40hajFF" },
        { name: "Sensory Ninja", note: "From the Ninja Life Hacks series for ages 3 to 11: a fun look at sensory superpowers for kids with sensory processing differences.", link: "https://amzn.to/48Ha74G" }
      ] },
    { id: "sensory", title: "Something for Every Sense", image: "images/picks-sensory.jpg",
      blurb: "Sensory favorites and STEM toys, from a bean bag chair to robot kits.",
      items: [
        { name: "Plush-Storage Bean Bag", note: "A soft seat that doubles as storage for stuffed animals, pillows and blankets.", link: "https://amzn.to/4eRixbZ" },
        { name: "Elephant Sensory Swivel Chair", note: "A spinning chair for ages 3 and up that builds balance and coordination.", link: "https://amzn.to/3YiraFH" },
        { name: "Sensory Tree Swing", note: "A sturdy outdoor swing for ages 6 and up, holding up to 200 lbs.", link: "https://amzn.to/3BTIIAm" },
        { name: "Air Cloud Rocker", note: "An inflatable rocking nest for calm corners, great for movement and self-regulation.", link: "https://amzn.to/3NDZtBW" },
        { name: "JBL JR 300BT Kids Headphones", note: "Volume-limited wireless headphones. Danny uses these at home and a wired pair at school.", link: "https://amzn.to/3AiPPld" },
        { name: "MagMen Magnetic Figures", note: "Stretchy magnetic characters that make a great travel fidget.", link: "https://amzn.to/4ffq0Bk" },
        { name: "Otamatone Classic", note: "A silly music-note-shaped synthesizer you play by sliding and squeezing.", link: "https://amzn.to/3YARThK" },
        { name: "Dissect-It Lab Dissection Toy", note: "A realistic synthetic dissection kit. Danny loved it so much he wants every STEM fan to try it.", link: "https://amzn.to/4dVtlER" },
        { name: "Dissect-It Sea Creature Kit", note: "The sea-creature version, great for motor skills and ocean lovers.", link: "https://amzn.to/3BWq4I3" },
        { name: "A Little SPOT of Feelings Plush Set", note: "Eight emotion plush friends that go with the A Little SPOT books.", link: "https://amzn.to/3ZiEtaB" },
        { name: "Solar and Wind Science Kits", note: "Build a solar car, a wind car, a robot, a tank and a glider.", link: "https://amzn.to/3ZkekZ6" },
        { name: "ThinkFun Gravity Maze", note: "An award-winning marble maze that builds planning and spatial reasoning.", link: "https://amzn.to/3YZJYcV" },
        { name: "Talking World Map Poster", note: "How Danny learned every country, ocean and flag by heart.", link: "https://amzn.to/3Z5xnF0" },
        { name: "100+ Science Experiments Kit", note: "A big box of hands-on experiments for budding scientists.", link: "https://amzn.to/4fEXpX0" },
        { name: "Spirograph Deluxe Spin Art Kit", note: "Classic spiral designs plus spin art in one kit.", link: "https://amzn.to/3Z6u6pd" },
        { name: "STEM Alphabots", note: "Letters that transform into robots and combine into giant ones.", link: "https://amzn.to/4fVXrJy" },
        { name: "STEM Number Robots", note: "Numbers that transform into robots.", link: "https://amzn.to/3YZjMzj" },
        { name: "Cozy Folding Kids Chair", note: "A cushioned chair with an adjustable back that folds flat for storage.", link: "https://amzn.to/4hVqOOh" }
      ] },
    { id: "care", title: "Personal Care Picks", image: "images/picks-care.jpg",
      blurb: "Vitamins, skincare and everyday care items that keep Danny feeling his best.",
      note: "These are our family's picks, not medical advice. Check with your pediatrician before starting any supplement.",
      items: [
        { name: "Renzo's Picky Eater Multivitamin with Iron", note: "Sugar-free melt-in-your-mouth tablets for picky eaters.", link: "https://amzn.to/3UmkUeR" },
        { name: "Zarbee's Kids 1mg Melatonin Chewables", note: "Grape-flavored chewables for occasional sleeplessness.", link: "https://amzn.to/40b6lOU" },
        { name: "Equazen PRO Fish Oil Jelly Chews", note: "Omega-3 and omega-6 chews for kids and teens.", link: "https://amzn.to/3A6tCXJ" },
        { name: "Philips Sonicare for Kids", note: "A rechargeable toothbrush with an app that makes brushing fun.", link: "https://amzn.to/4ffuUye" },
        { name: "Dr. Bronner's Baby Unscented Castile Soap", note: "A gentle, unscented soap for sensitive skin.", link: "https://amzn.to/3BOV10D" },
        { name: "Aquaphor Healing Ointment", note: "Our go-to for dry skin, chapped lips and minor scrapes.", link: "https://amzn.to/4he3cE5" }
      ] }
  ],

  // Logo and images from the original Dellis site
  logo: "images/logo.jpg",
  aboutPhoto: "images/about-danny.jpg",
  icons: {
    barnesNoble: "images/icons/barnes-noble.png",
    spotify: "images/icons/spotify.png",
    appleMusic: "images/icons/apple-music.png",
    youtube: "images/icons/youtube.png",
    amazon: "images/icons/amazon.png",
    facebook: "images/icons/facebook.png",
    linkedin: "images/icons/linkedin.png"
  }
};
