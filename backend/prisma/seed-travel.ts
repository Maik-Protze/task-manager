import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed for travel agency data...');

    // Clean existing data (in correct order to avoid foreign key violations)
    await prisma.blogPost.deleteMany();
    await prisma.contactInquiry.deleteMany();
    await prisma.booking.deleteMany(); // Delete bookings first!
    await prisma.tour.deleteMany();
    await prisma.destination.deleteMany();

    // Create Destinations
    const berlin = await prisma.destination.upsert({
        where: { id: 1 },
        update: {},
        create: {
            country: 'Deutschland',
            city: 'Berlin',
            description: 'Die pulsierende Hauptstadt Deutschlands mit reicher Geschichte und moderner Kultur.',
        },
    });

    const munich = await prisma.destination.upsert({
        where: { id: 2 },
        update: {},
        create: {
            country: 'Deutschland',
            city: 'München',
            description: 'Bayerns charmante Hauptstadt, bekannt für Oktoberfest und Alpennähe.',
        },
    });

    const leipzig = await prisma.destination.upsert({
        where: { id: 14 },
        update: {},
        create: {
            country: 'Deutschland',
            city: 'Leipzig',
            description: 'Die Musikstadt mit reicher Geschichte, Völkerschlachtdenkmal und lebendiger Kulturszene.',
        },
    });

    const paris = await prisma.destination.upsert({
        where: { id: 3 },
        update: {},
        create: {
            country: 'Frankreich',
            city: 'Paris',
            description: 'Die Stadt der Liebe mit dem Eiffelturm, Louvre und erstklassiger Gastronomie.',
        },
    });

    const barcelona = await prisma.destination.upsert({
        where: { id: 4 },
        update: {},
        create: {
            country: 'Spanien',
            city: 'Barcelona',
            description: 'Mittelmeer-Metropole mit Gaudí-Architektur, Stränden und lebendiger Kultur.',
        },
    });

    const istanbul = await prisma.destination.upsert({
        where: { id: 5 },
        update: {},
        create: {
            country: 'Türkei',
            city: 'Istanbul',
            description: 'Die Stadt auf zwei Kontinenten - wo Orient auf Okzident trifft.',
        },
    });

    const santorini = await prisma.destination.upsert({
        where: { id: 6 },
        update: {},
        create: {
            country: 'Griechenland',
            city: 'Santorini',
            description: 'Traumhafte Kykladeninsel mit weißen Häusern und blauen Kuppeln.',
        },
    });

    const dubai = await prisma.destination.upsert({
        where: { id: 7 },
        update: {},
        create: {
            country: 'Vereinigte Arabische Emirate',
            city: 'Dubai',
            description: 'Futuristische Wüstenmetropole mit spektakulären Wolkenkratzern und Luxus pur.',
        },
    });

    const malediven = await prisma.destination.upsert({
        where: { id: 8 },
        update: {},
        create: {
            country: 'Malediven',
            city: 'Malé',
            description: 'Paradiesische Inselwelt mit kristallklarem Wasser und traumhaften Stränden.',
        },
    });

    const rome = await prisma.destination.upsert({
        where: { id: 9 },
        update: {},
        create: {
            country: 'Italien',
            city: 'Rom',
            description: 'Die ewige Stadt mit antiken Ruinen, Vatikan und italienischer Lebensart.',
        },
    });

    const amsterdam = await prisma.destination.upsert({
        where: { id: 10 },
        update: {},
        create: {
            country: 'Niederlande',
            city: 'Amsterdam',
            description: 'Charmante Grachtenstadt mit Museen, Fahrradkultur und liberalem Flair.',
        },
    });



    const prague = await prisma.destination.upsert({
        where: { id: 12 },
        update: {},
        create: {
            country: 'Tschechien',
            city: 'Prag',
            description: 'Goldene Stadt mit mittelalterlichem Charme, Karlsbrücke und Bierkultur.',
        },
    });

    const london = await prisma.destination.upsert({
        where: { id: 13 },
        update: {},
        create: {
            country: 'Vereinigtes Königreich',
            city: 'London',
            description: 'Weltmetropole mit königlicher Geschichte, Museen und multikulturellem Leben.',
        },
    });

    console.log('Destinations created: 13');

    // Create Tours with various categories
    const tours = await Promise.all([



        // Familienreisen
        prisma.tour.create({
            data: {
                destinationId: munich.id,
                title: 'Familienreise München & Umgebung',
                description: 'Perfekt für Familien: München entdecken, Schloss Neuschwanstein besuchen und Berge erleben.',
                price: 799,
                seatsTotal: 30,
                seatsBooked: 15,
                category: 'Familienreisen',
                imageUrl: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&h=600&fit=crop',
                featured: true,
                duration: 6,
                included: JSON.stringify(['Familienhotel 4*', 'Frühstück', 'Kinderbetreuung', 'Ausflüge']),
            },
        }),


        prisma.tour.create({
            data: {
                destinationId: istanbul.id,
                title: 'Istanbul Abenteuer - Bosporus und mehr',
                description: 'Aktive Entdeckungstour durch Istanbul mit Bosporus-Cruise und kulinarischen Touren.',
                price: 950,
                seatsTotal: 15,
                seatsBooked: 3,
                category: 'Abenteuerreisen',
                imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop',
                featured: false,
                duration: 6,
                included: JSON.stringify(['Hotel', 'Frühstück', 'Bosporus-Tour', 'Food Tour', 'Reiseleitung']),
            },
        }),

        // Flitterwochen
        prisma.tour.create({
            data: {
                destinationId: santorini.id,
                title: 'Romantische Flitterwochen Santorini',
                description: 'Die perfekte Hochzeitsreise - Luxushotel, Sunset-Dinner und private Touren.',
                price: 2499,
                seatsTotal: 10,
                seatsBooked: 2,
                category: 'Flitterwochen',
                imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
                featured: true,
                duration: 10,
                included: JSON.stringify(['Luxushotel 5*', 'Halbpension', 'Sunset-Dinner', 'Spa', 'Private Tour']),
            },
        }),

        // Auslandsreisen - Paris
        prisma.tour.create({
            data: {
                destinationId: paris.id,
                title: 'Paris - Die Stadt der Liebe',
                description: 'Erleben Sie das romantische Paris mit Eiffelturm, Louvre und Champs-Élysées.',
                price: 899,
                seatsTotal: 25,
                seatsBooked: 8,
                category: 'Auslandsreisen',
                imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
                featured: false,
                duration: 5,
                included: JSON.stringify(['Flug', 'Hotel 4*', 'Frühstück', 'Stadtführung', 'Metro-Pass']),
            },
        }),
        prisma.tour.create({
            data: {
                destinationId: barcelona.id,
                title: 'Barcelona Entdeckungsreise',
                description: 'Gaudís Meisterwerke, Strände und katalanische Küche - Barcelona hat alles!',
                price: 849,
                seatsTotal: 30,
                seatsBooked: 12,
                category: 'Auslandsreisen',
                imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop',
                featured: false,
                duration: 6,
                included: JSON.stringify(['Flug', 'Hotel 3*', 'Frühstück', 'Sagrada Familia Ticket', 'Stadtführung']),
            },
        }),
        prisma.tour.create({
            data: {
                destinationId: dubai.id,
                title: 'Dubai Luxusreise',
                description: 'Erleben Sie den Luxus Dubais - Burj Khalifa, Wüstensafari und Shopping-Paradiese.',
                price: 1599,
                seatsTotal: 20,
                seatsBooked: 5,
                category: 'Auslandsreisen',
                imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
                featured: true,
                duration: 7,
                included: JSON.stringify(['Flug', 'Hotel 5*', 'Halbpension', 'Wüstensafari', 'Burj Khalifa Ticket']),
            },
        }),
        prisma.tour.create({
            data: {
                destinationId: malediven.id,
                title: 'Malediven Traumurlaub',
                description: 'Paradiesische Inselwelt - Entspannung pur in Luxus-Resorts am traumhaften Strand.',
                price: 2999,
                seatsTotal: 15,
                seatsBooked: 3,
                category: 'Flitterwochen',
                imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
                featured: true,
                duration: 10,
                included: JSON.stringify(['Flug', 'Luxus-Resort 5*', 'All-Inclusive', 'Wasserbungalow', 'Spa']),
            },
        }),

        // Neue Europäische Destinationen
        prisma.tour.create({
            data: {
                destinationId: rome.id,
                title: 'Rom - Die ewige Stadt',
                description: 'Entdecken Sie das antike Rom: Kolosseum, Vatikan, Trevi-Brunnen und italienische Küche.',
                price: 749,
                seatsTotal: 30,
                seatsBooked: 10,
                category: 'Auslandsreisen',
                imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
                featured: true,
                duration: 5,
                included: JSON.stringify(['Flug', 'Hotel 4*', 'Frühstück', 'Kolosseum-Ticket', 'Vatikan-Tour']),
            },
        }),
        prisma.tour.create({
            data: {
                destinationId: amsterdam.id,
                title: 'Amsterdam Kulturreise',
                description: 'Grachten, Museen und holländische Lebensart - Amsterdam mit dem Fahrrad entdecken.',
                price: 679,
                seatsTotal: 25,
                seatsBooked: 7,
                category: 'Auslandsreisen',
                imageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop',
                featured: false,
                duration: 4,
                included: JSON.stringify(['Flug', 'Hotel 3*', 'Frühstück', 'Museumscard', 'Grachtenfahrt']),
            },
        }),

        prisma.tour.create({
            data: {
                destinationId: prague.id,
                title: 'Prag - Goldene Stadt',
                description: 'Mittelalterliches Märchen: Karlsbrücke, Prager Burg und tschechisches Bier.',
                price: 549,
                seatsTotal: 32,
                seatsBooked: 14,
                category: 'Auslandsreisen',
                imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=600&fit=crop',
                featured: false,
                duration: 4,
                included: JSON.stringify(['Flug', 'Hotel 3*', 'Frühstück', 'Prager Burg', 'Bierverkostung']),
            },
        }),
        prisma.tour.create({
            data: {
                destinationId: london.id,
                title: 'London Städtereise',
                description: 'Die britische Hauptstadt erleben: Big Ben, Tower Bridge, Buckingham Palace und West End.',
                price: 899,
                seatsTotal: 35,
                seatsBooked: 12,
                category: 'Auslandsreisen',
                imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
                featured: true,
                duration: 5,
                included: JSON.stringify(['Flug', 'Hotel 4*', 'Frühstück', 'London Pass', 'Thames Cruise']),
            },
        }),

        // Inlandsreisen
        prisma.tour.create({
            data: {
                destinationId: berlin.id,
                title: 'Berlin Städtetrip',
                description: 'Das Beste von Berlin in 3 Tagen - Geschichte, Kultur und Nachtleben.',
                price: 399,
                seatsTotal: 40,
                seatsBooked: 20,
                category: 'Inlandsreisen',
                imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&h=600&fit=crop',
                featured: false,
                duration: 3,
                included: JSON.stringify(['Hotel 3*', 'Frühstück', 'Welcome Card', 'Stadtführung']),
            },
        }),

        // Leipzig
        prisma.tour.create({
            data: {
                destinationId: leipzig.id,
                title: 'Leipzig Kulturerlebnis',
                description: 'Geschichte, Kultur und Wellness in Sachsens Metropole. Vom Völkerschlachtdenkmal bis zum Auerbachskeller.',
                price: 599,
                seatsTotal: 25,
                seatsBooked: 8,
                category: 'Inlandsreisen',
                imageUrl: '/germany/leipzig-hero.jpg',
                featured: true,
                duration: 5,
                included: JSON.stringify(['Bahnfahrt 1. Klasse', 'Hotel im Stadtzentrum', 'Frühstück täglich', 'Alle Eintritte', 'Leipzig Card', 'Reiseleitung']),
            },
        }),

    ]);

    console.log('Tours created:', tours.length);

    // Create Blog Posts
    const blogPosts = await Promise.all([
        prisma.blogPost.create({
            data: {
                title: '10 Reisetipps für Griechenland im Sommer',
                excerpt: 'Entdecken Sie unsere besten Tipps für einen unvergesslichen Griechenland-Urlaub.',
                content: `Griechenland ist eines der beliebtesten Reiseziele im Sommer. Hier sind unsere Top 10 Tipps:
        
1. Buchen Sie frühzeitig - besonders für die Inseln
2. Vermeiden Sie die Mittagshitze (12-16 Uhr)
3. Probieren Sie lokale Tavernen abseits der Touristenpfade
4. Mieten Sie ein Auto für Insel-Erkundungen
5. Packen Sie Sonnenschutz ein
6. Lernen Sie ein paar griechische Wörter
7. Besuchen Sie antike Stätten früh morgens
8. Genießen Sie den Sonnenuntergang in Oia (Santorini)
9. Probieren Sie authentisches griechisches Essen
10. Nehmen Sie sich Zeit zum Entspannen - das ist Urlaub!`,
                imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop',
                category: 'Reisetipps',
                author: 'Maria Schmidt',
            },
        }),
        prisma.blogPost.create({
            data: {
                title: 'Die besten Familienhotels in Deutschland',
                excerpt: 'Familienurlaub in Deutschland: Unsere Hotel-Empfehlungen für unvergessliche Ferien.',
                content: `Familienurlaub in Deutschland wird immer beliebter. Hier sind unsere Top-Empfehlungen für familienfreundliche Hotels:
        
**Bayern:**
- Kinderhotel Oberjoch - All-Inclusive mit Kinderbetreuung
- Familotel Allgäu - Perfekt für Aktivurlauber

**Ostsee:**
- Strandhotel Glücksburg - Direkt am Strand
- Familien-Resort Weissenhäuser Strand

**Schwarzwald:**
- Familienhotel Feldberger Hof - Wandern und Natur

Alle Hotels bieten Kinderbetreuung, kinderfreundliche Menüs und tolle Freizeitangebote!`,
                imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
                category: 'Reisetipps',
                author: 'Thomas Müller',
            },
        }),
        prisma.blogPost.create({
            data: {
                title: 'Istanbul - Brücke zwischen zwei Welten',
                excerpt: 'Warum Istanbul eine der faszinierendsten Städte der Welt ist.',
                content: `Istanbul ist einzigartig - keine andere Stadt verbindet Europa und Asien so perfekt.
        
**Must-See Sehenswürdigkeiten:**
- Hagia Sophia - Meisterwerk byzantinischer Architektur
- Blaue Moschee - Atemberaubend schön
- Großer Basar - Shopping-Paradies
- Topkapi-Palast - Osmanische Pracht
- Bosporus-Fahrt - Unvergessliche Ausblicke

**Kulinarische Highlights:**
- Türkisches Frühstück
- Kebab in allen Variationen
- Baklava und türkischer Tee
- Fischrestaurants am Bosporus

Istanbul ist eine Stadt, die man mindestens einmal im Leben besucht haben muss!`,
                imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=600&fit=crop',
                category: 'Destinationen',
                author: 'Sophie Dubois',
            },
        }),
        prisma.blogPost.create({
            data: {
                title: 'Packliste für den perfekten Sommerurlaub',
                excerpt: 'Was darf im Sommerurlaub auf keinen Fall fehlen? Unsere ultimative Packliste.',
                content: `Damit Sie nichts vergessen, hier unsere Sommer-Packliste:
        
**Kleidung:**
- Leichte, luftige Kleidung
- Badebekleidung (mindestens 2)
- Sonnenhut oder Kappe
- Sonnenbrille
- Leichte Jacke für abends

**Sonnenschutz:**
- Sonnencreme (LSF 30+)
- After-Sun-Lotion
- Lippenpflege mit UV-Schutz

**Reiseapotheke:**
- Schmerzmittel
- Insektenschutz
- Pflaster
- Persönliche Medikamente

**Technik:**
- Kamera
- Ladegeräte
- Adapter (je nach Land)
- Powerbank

Gute Reise!`,
                imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
                category: 'Reisetipps',
                author: 'Sarah Weber',
            },
        }),
    ]);

    console.log('Blog posts created:', blogPosts.length);

    console.log('✅ Travel agency seed data completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
