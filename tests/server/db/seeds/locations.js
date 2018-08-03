
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      console.log('locations seed')
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, title: 'Westhaven', label: '', lat: -36.839914, lng: 174.747697, info_title: 'Great views towards the Harbour Bridge', info: 'Westhaven Marina is located on the western edge of Auckland Central Business District. It\'s immediately recognisable as one of Auckland\'s famous icons and it\'s the heart of boating in Auckland. It’s one of the most idyllic places in Auckland to ride a bike, walk a dog, or picnic and home to several excellent cafes and restaurants.'},
        {id: 2, title: 'Okahu Bay Wharf', label: '', lat: -36.845246, lng: 174.816951, info_title: 'Great for city shots and fireworks in the city', info: 'Okahu Bay Wharf is situated on Tamaki Drive in Auckland, home to the Outrigger Canoe Club. Okahu Bay is safe for swimming with nice grassy banks to sit and look at the views, while the kids make sandcastles. Great for fishing or just walk out to the end of the wharf for some fresh air and beautiful views.'},
        {id: 3, title: 'Little Shoal Bay', label: '', lat: -36.816693, lng: 174.739157, info_title: 'Great views towards Harbour Bridge and city', info: 'Regardless if it high or low tide this park is very nice, ideal for kids, families, couples or someone who just want to relax and read a book while laying on the grass.'},
        {id: 4, title: 'Mount Eden', label: '', lat: -36.877477, lng: 174.764972, info_title: 'Great views over the city', info: 'Affluent, residential Mount Eden is dominated by a volcanic peak also known as Maungawhau, with hiking and jogging trails leading to views over the Hauraki Gulf.'},
        {id: 5, title: 'Viaduct Events Centre', label: '', lat: -36.841185, lng: 174.759520, info_title: 'Great for city shots and street scenes', info: 'The ANZ Viaduct Events Centre is a stand-alone, multi-purpose events centre built on the Halsey Street extension wharf, Wynyard Quarter of Auckland. From here you have some beautiful views over the city at sunrise or sunset.'},
        {id: 6, title: 'Cornwallis Wharf', label: '', lat: -37.011840, lng: 174.605286, info_title: 'Great for landscapes', info: 'Beautiful wharf, nicely placed for some beautiful sunset shots. The wharf is popular among the locals for some fishing and other beach activities.'},
        {id: 7, title: 'Bucklands Beach', label: '', lat: -36.862400, lng: 174.899559, info_title: 'Nice east coast beach', info: 'Bucklands Beach is a suburb 13 kilometres (8.1 mi) east of Auckland\'s CBD in New Zealand. It has a beautiful beach with great views over Rangitoto.'},
        {id: 8, title: 'Magazine Bay', label: '', lat: -36.883566, lng: 175.056192, info_title: 'Nice pier, good for astro and landscapes', info: 'Little pier just outside Maraetai. Watch the fishermen in the early hours of the morning or in the evenings. This spot is perfect for some sunrise shots or milkyway photography early in the year.'},
        {id: 9, title: 'Piha', label: '', lat: -36.954760, lng: 174.468187, info_title: 'Beautiful west coast beach', info: 'Piha is a seaside village, west of Auckland, on New Zealand’s North Island. Black-sand Piha Beach is known for its strong surf and rugged scenery. Lion Rock is a volcanic monolith with war memorials and Maori carvings. Nearby, Waitakere Ranges Regional Park has subtropical native rainforest and trails to waterfalls such as Kitekite and Fairy falls.'},
        {id: 10, title: 'Hunua Falls', label: '', lat: -37.068781, lng: 175.089827, info_title: 'Great for water shots', info: 'Hunua Falls is located in the western part of Hunua Ranges Regional Park in Auckland area. The spectacular 30-metre waterfall is part of the Wairoa River which carves through an ancient volcano as it winds its way north through the township of Clevedon, before meeting the Hauraki Gulf.'},
        {id: 11, title: 'Mt Vic', label: '', lat: -41.295962, lng: 174.794103, info_title: 'Beautiful views over Wellington', info: 'The Mount Victoria Lookout is easily accessible from Wellington\'s city center and offers 360-degree scenic views. '},
        {id: 12, title: 'Jack\'s Lighthouse', label: '', lat: -44.443428, lng: 171.260873, info_title: 'Nice sea views', info: 'The Tuhawaiki Point Lighthouse or Jack’s Point Lighthouse stands near to Timaru at the east coast of the South Island of New Zealand.'},
        {id: 13, title: 'Tangermuende Gate', label: '', lat: 52.599832, lng: 11.864420, info_title: 'Old city gate, great for architecture shots', info: 'The Tangermünd Gate is the counterpart to the Uengling Gate. The base of the gate is formed by a Romanesque pedestal built from fieldstones dating to the first quarter of the 13th century. The tower\'s crown is built from brick, and was added around 1440.'},
        {id: 14, title: 'Uenglingen Gate', label: '', lat: 52.608111, lng: 11.851788, info_title: 'Old city gate, great for architecture shots', info: 'Uenglingen Gate is a city gate that was built from 1450 until 1460. It is located along the old city walls which makes for some beautiful walks.'},
        {id: 15, title: 'Powder Tower', label: '', lat: 52.611668, lng: 11.830325, info_title: 'Nice for landscapes', info: 'A powder tower (German: Pulverturm), occasionally also powder house (Pulverhaus), was a building used by the military or by mining companies, frequently a tower, to store gunpowder or, later, explosives. They were common until the 20th century, but were increasingly succeeded by gunpowder magazines and ammunition depots. The tower is situated along the old city wall which makes for a great walk.'},
        {id: 16, title: 'City Wall', label: '', lat: 52.539563, lng: 11.972524, info_title: 'Nice landscape opportunity', info: 'Tangermünde (German pronunciation: [taŋɐˈmʏndə]) is a historic town on the Elbe River in the district of Stendal, in the northeastern part of Saxony-Anhalt. Explore the old city centre and take a walk along the river Elbe with views over the old city wall.'},
        {id: 17, title: 'Three Sisters', label: '', lat: -38.819231, lng: 174.580932, info_title: 'Fantastic seascapes', info: 'There’s a wild side to the Taranaki coastline – one that involves three sisters. If that doesn’t intrigue you enough, then there is an elephant too. So let’s take a road trip up north from New Plymouth to see these unusual rock formations with our own eyes.'},
        {id: 18, title: 'Bethells', label: '', lat: -36.894985, lng: 174.445323, info_title: 'Beautiful beach', info: 'Te Henga (Bethells Beach) is a coastal community in the Auckland Region in the north of the North Island, New Zealand. The Māori name Te Henga, meaning sand, originally applied to a wide area of the lower Waitakere River valley, but in 1976 the New Zealand Geographic Board changed the name of the beach from Bethells Beach to Te Henga (Bethells Beach). The beach is approximately 30 kilometres west of Auckland City, at the mouth of the Waitakere River where it flows into the Tasman Sea. '},
        {id: 19, title: 'Mount Ngauruhoe', label: '', lat: -39.156830, lng: 175.632320, info_title: 'Stunning mountain', info: 'Mount Ngauruhoe is an active stratovolcano or composite cone in New Zealand, made from layers of lava and tephra. It is the youngest vent in the Tongariro volcanic complex on the Central Plateau of the North Island, and first erupted about 2,500 years ago. Although seen by most as a volcano in its own right, it is technically a secondary cone of Mount Tongariro.'},
        {id: 20, title: 'Hooker Valley Track', label: '', lat: -43.715701, lng: 170.094381, info_title: 'Awesome mountain views', info: 'The track leads through the sacred Tōpuni area of the Hooker Valley, which has special significance and values to Ngāi Tahu iwi, towards Aoraki/Mount Cook. From the first of three swing bridges along the way, enjoy the views over the Mueller Lake and listen for the rumbling of avalanches from the distant Mount Sefton. Try to spot them before they crash into the Mueller Glacier below. After crossing the Hooker River, the track goes between old moraine ridges and humps. From the second swing bridge, the vegetation changes to more open tussock and a wider valley floor.'},
        {id: 21, title: 'Tekapo', label: '', lat: -44.001419, lng: 170.475204, info_title: 'Stunning lake, great for landscapes', info: 'Picturesque by day and dazzling by night, Lake Tekapo is part of a UNESCO Dark Sky Reserve, making it the perfect spot for stargazing. Lake Tekapo is about three hours drive south-west of Christchurch in the Mackenzie Basin. The township faces north across the remarkable turquoise coloured lake to the mountainous drama of the Southern Alps. Lake Tekapo gets its intense milky-turquoise colour from the fine rock-flour (ground by glaciers) which is suspended in the water.'},
        {id: 22, title: 'Peter\'s Lookout', label: '', lat: -44.088736, lng: 170.132834, info_title: 'Great view over Lake Pukaki', info: 'Due to it’s naturally perfect composition and effortless accessibility, Peter’s Lookout is potentially one of the most photographed locations in New Zealand. As you wind around each corner of SH8 a new glimpse of the famous Aoraki / Mount Cook is revealed. But once you have reached this particular bend, most people cannot help but to pull over. It’s such a tranquil location that never fails to remind you how small we really are in the realm of the world.'},
        {id: 23, title: 'Manukau Heads Lighthouse', label: '', lat: -37.054956, lng: 174.549914, info_title: 'Beautiful views', info: 'One of few visitor-accessible lighthouses in New Zealand. From the car park 120 easy stairs bring you to the Lighthouse and the Signal Station lookout. Stroll around the Lightkeeper’s balcony just as he would have done nearly 140 years ago. Few other New Zealand lighthouses reward visitors with such an authentic experience.'},
        {id: 24, title: 'White Island', label: '', lat: -37.522541, lng: 177.179466, info_title: 'Stunning scenery', info: 'White Island is arguably the world’s most accessible active marine volcano. It attracts volcanologists and sightseers from around the world, offering a breathtaking view of the awesome powers that continue to shape New Zealand in all their spectacular and dramatic glory. Marvel at the beauty of nature in its most untamed state. Walk across the island’s wild, lunar landscape with active geothermal steam vents, bubbling mud pools and the sombre remains of an ill-fated sulphur mining factory destroyed by a lahar in 1914 and took the lives of 10 miners.'},
        {id: 25, title: 'McLaren Falls', label: '', lat: -37.805953, lng: 176.044890, info_title: 'Great for water shots', info: 'McLaren Falls, actually multiple cascades, is located on Mangakarengorengo River, a 20 minutes easy drive from Tauranga. Usually, it\'s a waterfall almost without water because of the Power Generation Station located upstream, but in a rainy season it looks absolutely unbelievable. In warm days lots of people swim in cool water at the base of these waterfalls.'},
        {id: 26, title: 'Karekare Beach', label: '', lat: -36.999046, lng: 174.475589, info_title: 'Great west coast beach', info: 'Karekare beach is located on Auckland\'s west coast between Piha in the north and Whatipu in the south. It is a 50 minute drive from downtown Auckland and a 20 minute drive from the Arataki Visitor Centre. One of Auckland\'s most spectacular beaches and wilderness areas, Karekare offers excellent surf, walking and picnicking.'},
        {id: 27, title: 'Whatipu Beach', label: '', lat: -37.048075, lng: 174.491498, info_title: 'Beautiful beach', info: 'Whatipu is a remote beach on the west coast of the Auckland Region in the North Island of New Zealand. The Whatipu area, now a scientific reserve owned by DoC and managed on behalf on the Auckland Regional Council, is untouched wilderness and there are many walks in the area.'},
        {id: 28, title: 'Emerald Lakes', label: '', lat: -39.134657, lng: 175.654851, info_title: 'Stunning piece of nature', info: 'The Emerald Lakes fill explosion craters near the summit of Mt Tongariro. Their brilliant colours are partly caused by dissolved minerals, washed down from the thermal area of nearby Red Crater.'},
        {id: 29, title: 'Tiritiri Matangi', label: '', lat: -36.602700, lng: 174.889106, info_title: 'Natural Paradise', info: 'Tiritiri Matangi is rich in Māori and European history with one of the most successful community-lead conservation projects in the world. Unwanted predators have been eradicated and rare native birds such as the kōkako and the takahē (once thought to be extinct) survive and thrive in restored habitats within regenerating native forest. The island is the perfect day trip destination for nature lovers.'},
        {id: 30, title: 'Musick Point', label: '', lat: -36.846405, lng: 174.900669, info_title: 'Nice views of Rangitoto', info: 'Musick Point (Te Naupata), located in the eastern Auckland suburb of Bucklands Beach, is a long peninsula jutting north into the Hauraki Gulf. The Point includes the Howick Golf Club and, at its end, the Musick Memorial Radio Station which is the former home of maritime coast station Auckland Radio ZLD. '},
        {id: 31, title: 'Mangawhai Heads', label: '', lat: -36.080575, lng: 174.596958, info_title: 'Beautiful sea views', info: 'Mangawhai is a place of soul and whether your passions are the beach, the sea, art, great food including chocolate, olive oils and wine or walking through Northland\'s most varied and breath taking scenery.'}
      ])
    })
}
