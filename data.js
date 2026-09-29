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

  // Danny's Curated List (Amazon picks)
  picks: [
    { title: "Danny's Favorite Books", blurb: "Books about neurodiversity, books by Danny, and books he simply loves.",
      image: "https://static.wixstatic.com/media/98636b_a91546b180d14a8fad428dd81bdc2a48~mv2.png/v1/fill/w_600,h_450,al_c,q_85/98636b_a91546b180d14a8fad428dd81bdc2a48~mv2.png",
      link: "https://www.dellis.store/post/danny-s-curated-list-of-awesome-books" },
    { title: "Something for Every Sense", blurb: "Sensory favorites, from a bean bag chair to fidgets that actually get used.",
      image: "https://static.wixstatic.com/media/98636b_635507a287d74c42895eb043b27ebbc6~mv2.png/v1/fill/w_600,h_450,al_c,q_85/98636b_635507a287d74c42895eb043b27ebbc6~mv2.png",
      link: "https://www.dellis.store/post/sensory-wonders-danny-s-inspired-list-for-every-sense" },
    { title: "Personal Care Picks", blurb: "Vitamins, skincare and everyday care items chosen with kids in mind.",
      image: "https://static.wixstatic.com/media/98636b_a8f8ad9107b14d3e80078d48a2d86a33~mv2.png/v1/fill/w_600,h_450,al_c,q_85/98636b_a8f8ad9107b14d3e80078d48a2d86a33~mv2.png",
      link: "https://www.dellis.store/post/danny-s-favorite-personal-care-items" }
  ],

  // Logo and images from the original Dellis site
  logo: "https://static.wixstatic.com/media/98636b_63be5c69c62d4fc187a5c16f472cf32b~mv2.jpg/v1/fill/w_436,h_180,al_c,q_90/98636b_63be5c69c62d4fc187a5c16f472cf32b~mv2.jpg",
  aboutPhoto: "https://static.wixstatic.com/media/98636b_869625f72f164700bccba3a4376941b2~mv2.png/v1/fill/w_1040,h_1000,al_c,q_85/98636b_869625f72f164700bccba3a4376941b2~mv2.png",
  icons: {
    barnesNoble: "https://static.wixstatic.com/media/98636b_e2d9452b117b4d56b0f75014e4a06501~mv2.png/v1/fill/w_78,h_78,al_c,q_85/98636b_e2d9452b117b4d56b0f75014e4a06501~mv2.png",
    spotify: "https://static.wixstatic.com/media/11062b_967bb70c2d6a4f19bd32b49d8bbeaf7f~mv2.png/v1/fill/w_78,h_78,al_c,q_85/11062b_967bb70c2d6a4f19bd32b49d8bbeaf7f~mv2.png",
    appleMusic: "https://static.wixstatic.com/media/11062b_4cf85f8d931c417280d993ecf42cadaf~mv2.png/v1/fill/w_78,h_78,al_c,q_85/11062b_4cf85f8d931c417280d993ecf42cadaf~mv2.png",
    youtube: "https://static.wixstatic.com/media/11062b_6fc54c8957474101ba6e80b01907ae50~mv2.png/v1/fill/w_78,h_78,al_c,q_85/11062b_6fc54c8957474101ba6e80b01907ae50~mv2.png",
    amazon: "https://static.wixstatic.com/media/11062b_91eb20e06c7f46beacce9982d5b62643~mv2.png/v1/fill/w_78,h_78,al_c,q_85/11062b_91eb20e06c7f46beacce9982d5b62643~mv2.png",
    facebook: "https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_78,h_78,al_c,q_85/4057345bcf57474b96976284050c00df.png",
    linkedin: "https://static.wixstatic.com/media/aa0402eb9ba2430d9d0620b59556efca.png/v1/fill/w_78,h_78,al_c,q_85/aa0402eb9ba2430d9d0620b59556efca.png"
  }
};
