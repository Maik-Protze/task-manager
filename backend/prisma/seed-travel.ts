import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed for travel agency data...');

    // Clean existing data (in correct order to avoid foreign key violations)
    await prisma.blogPost.deleteMany();
    await prisma.contactInquiry.deleteMany();
    await prisma.booking.deleteMany();
    await prisma.tour.deleteMany();
    await prisma.destination.deleteMany();
    // Clean new tables
    await prisma.carBooking.deleteMany();
    await prisma.carRental.deleteMany();
    await prisma.travelAlert.deleteMany();
    await prisma.adventure.deleteMany();
    await prisma.tripPlan.deleteMany();
    await prisma.destinationData.deleteMany();

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

    const newYork = await prisma.destination.upsert({
        where: { id: 11 },
        update: {},
        create: {
            country: 'USA',
            city: 'New York',
            description: 'Die Stadt, die niemals schläft - Wolkenkratzer, Broadway und unendliche Möglichkeiten.',
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

    console.log('Destinations created: 14');

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
        prisma.tour.create({
            data: {
                destinationId: newYork.id,
                title: 'New York Sommer-Abenteuer',
                description: 'Erleben Sie den heißen Sommer in der Stadt, die niemals schläft. Central Park, Times Square und Brooklyn Bridge im Sonnenschein.',
                price: 1299,
                seatsTotal: 20,
                seatsBooked: 12,
                category: 'Sommerreisen',
                imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
                featured: true,
                duration: 8,
                included: JSON.stringify(['Flug Economy', 'Hotel 4* Manhattan', 'Frühstück', 'Metro Pass', 'Stadtführung', 'Statue of Liberty Tour']),
            },
        }),
        prisma.tour.create({
            data: {
                destinationId: santorini.id,
                title: 'Santorini Sommertraum',
                description: 'Verbringen Sie den perfekten Sommer auf der schönsten griechischen Insel. Traumhafte Sonnenuntergänge und türkisblaues Meer.',
                price: 899,
                seatsTotal: 16,
                seatsBooked: 9,
                category: 'Sommerreisen',
                imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
                featured: true,
                duration: 7,
                included: JSON.stringify(['Flug ab Deutschland', 'Hotel mit Meerblick', 'Halbpension', 'Mietwagen 3 Tage', 'Weinverkostung', 'Bootstour']),
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
                content: `Griechenland ist eines der beliebtesten Reiseziele im Sommer. Hier sind unsere Top 10 Tipps:\n1. Buchen Sie frühzeitig - besonders für die Inseln\n2. Vermeiden Sie die Mittagshitze (12-16 Uhr)\n3. Probieren Sie lokale Tavernen abseits der Touristenpfade\n4. Mieten Sie ein Auto für Insel-Erkundungen\n5. Packen Sie Sonnenschutz ein`,
                imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop',
                category: 'Reisetipps',
                author: 'Maria Schmidt',
            },
        }),
        prisma.blogPost.create({
            data: {
                title: 'Die besten Familienhotels in Deutschland',
                excerpt: 'Familienurlaub in Deutschland: Unsere Hotel-Empfehlungen für unvergessliche Ferien.',
                content: `Familienurlaub in Deutschland wird immer beliebter. Bayern: Kinderhotel Oberjoch. Ostsee: Strandhotel Glücksburg. Schwarzwald: Familienhotel Feldberger Hof.`,
                imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
                category: 'Reisetipps',
                author: 'Thomas Müller',
            },
        }),
        prisma.blogPost.create({
            data: {
                title: 'Istanbul - Brücke zwischen zwei Welten',
                excerpt: 'Warum Istanbul eine der faszinierendsten Städte der Welt ist.',
                content: `Istanbul ist einzigartig - keine andere Stadt verbindet Europa und Asien so perfekt. Must-See: Hagia Sophia, Blaue Moschee, Großer Basar.`,
                imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=600&fit=crop',
                category: 'Destinationen',
                author: 'Sophie Dubois',
            },
        }),
        prisma.blogPost.create({
            data: {
                title: 'Völkerschlachtdenkmal Leipzig',
                excerpt: 'Das imposante Monument ist eines der größten Denkmäler Europas.',
                content: `Das Völkerschlachtdenkmal wurde zur Erinnerung an die Völkerschlacht von 1813 errichtet. Mit 91 Metern Höhe bietet es einen atemberaubenden Rundumblick.`,
                imageUrl: '/germany/leipzig.jpg',
                category: 'Destinationen',
                author: 'Dr. Michael Wagner',
            },
        }),
    ]);

    console.log('Blog posts created:', blogPosts.length);

    // ============================================
    // NEW SEED DATA FOR TRAVELDREAMS EXTENSION
    // ============================================

    // Create Car Rentals
    const carRentals = await Promise.all([
        prisma.carRental.create({
            data: {
                id: 1,
                name: 'Ford Focus ST',
                type: 'Compact',
                transmission: 'Manual',
                fuel: 'Petrol',
                pricePerDay: 45,
                seats: 5,
                imageUrl: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&h=600&fit=crop',
                features: JSON.stringify(['Klimaanlage', 'Bluetooth', 'USB-Anschluss', 'Einparkhilfe', 'Start-Stopp-Automatik']),
                available: true,
            },
        }),
        prisma.carRental.create({
            data: {
                id: 2,
                name: 'BMW 5er Touring',
                type: 'Sedan',
                transmission: 'Automatic',
                fuel: 'Diesel',
                pricePerDay: 89,
                seats: 5,
                imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
                features: JSON.stringify(['Lederausstattung', 'Navigationssystem', 'Klimaautomatik', 'Tempomat', 'Rückfahrkamera', 'Sitzheizung']),
                available: true,
            },
        }),
        prisma.carRental.create({
            data: {
                id: 3,
                name: 'Audi Q7 Premium',
                type: 'SUV',
                transmission: 'Automatic',
                fuel: 'Hybrid',
                pricePerDay: 129,
                seats: 7,
                imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
                features: JSON.stringify(['Allradantrieb', '7 Sitze', 'Panoramadach', 'Premium-Sound', 'Anhängerkupplung', 'Luftfederung', 'Head-up Display']),
                available: true,
            },
        }),
        prisma.carRental.create({
            data: {
                id: 4,
                name: 'Porsche 911 Carrera',
                type: 'Luxury',
                transmission: 'Automatic',
                fuel: 'Petrol',
                pricePerDay: 299,
                seats: 2,
                imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
                features: JSON.stringify(['Sport Chrono Paket', 'Ledersitze', 'BOSE Soundsystem', 'Sport-Auspuff', 'Cabrio-Verdeck', 'Launch Control']),
                available: true,
            },
        }),
    ]);

    console.log('Car rentals created:', carRentals.length);

    console.log('Car rentals created:', carRentals.length);

    // Create Travel Alerts
    const travelAlerts = await Promise.all([
        prisma.travelAlert.create({
            data: {
                country: 'Deutschland',
                safetyLevel: 'safe',
                riskScore: 1,
                description: 'Deutschland ist ein sehr sicheres Reiseziel mit exzellenter Infrastruktur.',
                warnings: JSON.stringify(['Keine besonderen Warnungen']),
                imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Frankreich',
                safetyLevel: 'safe',
                riskScore: 2,
                description: 'Frankreich ist generell sicher. In Großstädten auf Taschendiebe achten.',
                warnings: JSON.stringify(['Taschendiebstahl in Touristengebieten', 'Streiks möglich']),
                imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Italien',
                safetyLevel: 'safe',
                riskScore: 2,
                description: 'Italien ist sicher für Touristen. Übliche Vorsichtsmaßnahmen beachten.',
                warnings: JSON.stringify(['Taschendiebe in Rom und Neapel', 'Verkehr kann chaotisch sein']),
                imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Spanien',
                safetyLevel: 'safe',
                riskScore: 2,
                description: 'Spanien ist ein sicheres und beliebtes Reiseziel.',
                warnings: JSON.stringify(['Pickpocket-Hotspots in Barcelona', 'Sonnenbrände häufig']),
                imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Türkei',
                safetyLevel: 'moderate',
                riskScore: 5,
                description: 'Die meisten Touristenregionen sind sicher. Grenzregionen meiden.',
                warnings: JSON.stringify(['Politische Spannungen möglich', 'Ostregionen meiden', 'Aktuelle Nachrichten verfolgen']),
                imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Ägypten',
                safetyLevel: 'moderate',
                riskScore: 6,
                description: 'Touristengebiete sind bewacht, aber allgemeine Vorsicht ist geboten.',
                warnings: JSON.stringify(['Sinai-Halbinsel meiden', 'Nur organisierte Touren', 'Auf Reiseveranstalter achten']),
                imageUrl: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Thailand',
                safetyLevel: 'safe',
                riskScore: 3,
                description: 'Thailand ist ein sicheres Reiseziel für Touristen.',
                warnings: JSON.stringify(['Betrugsmaschen in Touristengebieten', 'Straßenverkehr gefährlich']),
                imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Syrien',
                safetyLevel: 'dangerous',
                riskScore: 10,
                description: 'Reisen nach Syrien werden dringend abgeraten. Aktiver Konflikt.',
                warnings: JSON.stringify(['Aktiver Kriegszustand', 'Keine konsularische Hilfe', 'Extreme Gefahr für Leib und Leben']),
                imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Afghanistan',
                safetyLevel: 'dangerous',
                riskScore: 10,
                description: 'Reisen nach Afghanistan werden dringend abgeraten.',
                warnings: JSON.stringify(['Terroranschläge', 'Entführungsgefahr', 'Keine Botschaft']),
                imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Mexiko',
                safetyLevel: 'moderate',
                riskScore: 5,
                description: 'Touristenregionen sind größtenteils sicher, bestimmte Regionen meiden.',
                warnings: JSON.stringify(['Drogenkrieg in bestimmten Regionen', 'Nachts nicht allein unterwegs', 'Nur registrierte Taxis nutzen']),
                imageUrl: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Japan',
                safetyLevel: 'safe',
                riskScore: 1,
                description: 'Japan ist eines der sichersten Reiseländer der Welt.',
                warnings: JSON.stringify(['Erdbebengefahr', 'Taifunsaison beachten']),
                imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
            },
        }),
        prisma.travelAlert.create({
            data: {
                country: 'Brasilien',
                safetyLevel: 'moderate',
                riskScore: 6,
                description: 'Touristengebiete sind relativ sicher, aber Vorsicht ist geboten.',
                warnings: JSON.stringify(['Hohe Kriminalität in Favelas', 'Raubüberfälle möglich', 'Wertsachen nicht zeigen']),
                imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&h=600&fit=crop',
            },
        }),
    ]);

    console.log('Travel alerts created:', travelAlerts.length);

    // Create Adventures
    const adventures = await Promise.all([
        prisma.adventure.create({
            data: {
                name: 'Mont Blanc Besteigung',
                location: 'Chamonix',
                country: 'Frankreich',
                difficulty: 'Expert',
                elevation: 4808,
                duration: '4-5 Tage',
                bestSeason: 'Juni - September',
                equipment: JSON.stringify(['Steigeisen', 'Eispickel', 'Seil', 'Helm', 'Hochgebirgsausrüstung']),
                tips: 'Akklimatisierung ist essentiell. Bergführer empfohlen.',
                description: 'Der höchste Berg der Alpen bietet eine anspruchsvolle Hochtour mit atemberaubenden Ausblicken.',
                imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
            },
        }),
        prisma.adventure.create({
            data: {
                name: 'Zugspitze Wanderung',
                location: 'Garmisch-Partenkirchen',
                country: 'Deutschland',
                difficulty: 'Challenging',
                elevation: 2962,
                duration: '1-2 Tage',
                bestSeason: 'Juni - Oktober',
                equipment: JSON.stringify(['Wanderschuhe', 'Stöcke', 'Wetterfeste Kleidung', 'Proviant']),
                tips: 'Früh starten! Seilbahn als Abstieg möglich.',
                description: 'Deutschlands höchster Gipfel über das Höllental oder die Partnachklamm.',
                imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
            },
        }),
        prisma.adventure.create({
            data: {
                name: 'Matterhorn',
                location: 'Zermatt',
                country: 'Schweiz',
                difficulty: 'Expert',
                elevation: 4478,
                duration: '2-3 Tage',
                bestSeason: 'Juli - September',
                equipment: JSON.stringify(['Komplette Hochgebirgsausrüstung', 'Kletterausrüstung', 'Seil']),
                tips: 'Nur mit Bergführer! Lange Wartezeiten in der Hochsaison.',
                description: 'Der ikonische Pyramidenberg der Schweiz - eine der anspruchsvollsten Touren der Alpen.',
                imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
            },
        }),
        prisma.adventure.create({
            data: {
                name: 'Kilimanjaro Trek',
                location: 'Tansania',
                country: 'Tansania',
                difficulty: 'Challenging',
                elevation: 5895,
                duration: '6-8 Tage',
                bestSeason: 'Januar - März, Juni - Oktober',
                equipment: JSON.stringify(['Trekking-Ausrüstung', 'Warme Kleidung', 'Schlafsack', 'Höhenmedikamente']),
                tips: 'Pole Pole (langsam langsam) - Akklimatisierung ist der Schlüssel.',
                description: 'Der höchste Berg Afrikas kann ohne technische Kletterkenntnisse bestiegen werden.',
                imageUrl: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800&h=600&fit=crop',
            },
        }),
        prisma.adventure.create({
            data: {
                name: 'Everest Base Camp Trek',
                location: 'Nepal',
                country: 'Nepal',
                difficulty: 'Challenging',
                elevation: 5364,
                duration: '12-14 Tage',
                bestSeason: 'März - Mai, September - November',
                equipment: JSON.stringify(['Trekking-Outfit', 'Daunenjacke', 'Gute Wanderschuhe', 'Wasseraufbereitung']),
                tips: 'Permit erforderlich. Lokalen Guide buchen.',
                description: 'Wandern Sie zum Basislager des höchsten Berges der Welt.',
                imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
            },
        }),
        prisma.adventure.create({
            data: {
                name: 'Dolomiten Klettersteig',
                location: 'Südtirol',
                country: 'Italien',
                difficulty: 'Moderate',
                elevation: 3343,
                duration: '1 Tag',
                bestSeason: 'Juni - September',
                equipment: JSON.stringify(['Klettersteigset', 'Helm', 'Handschuhe', 'Bergschuhe']),
                tips: 'Viele verschiedene Schwierigkeitsgrade verfügbar.',
                description: 'Die Dolomiten bieten spektakuläre Klettersteige für alle Levels.',
                imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
            },
        }),
        prisma.adventure.create({
            data: {
                name: 'Wandern Cinque Terre',
                location: 'Ligurien',
                country: 'Italien',
                difficulty: 'Easy',
                elevation: 450,
                duration: '1-2 Tage',
                bestSeason: 'April - Juni, September - Oktober',
                equipment: JSON.stringify(['Wanderschuhe', 'Sonnenschutz', 'Wasser', 'Badesachen']),
                tips: 'Cinque Terre Card für Zugfahrten kaufen.',
                description: 'Wandern Sie zwischen den fünf malerischen Küstendörfern.',
                imageUrl: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&h=600&fit=crop',
            },
        }),
        prisma.adventure.create({
            data: {
                name: 'Königssee Wanderung',
                location: 'Berchtesgaden',
                country: 'Deutschland',
                difficulty: 'Easy',
                elevation: 1800,
                duration: '1 Tag',
                bestSeason: 'Mai - Oktober',
                equipment: JSON.stringify(['Wanderschuhe', 'Regenjacke', 'Proviant']),
                tips: 'Boot zum Obersee nehmen für weniger Wanderung.',
                description: 'Einer der schönsten Seen Deutschlands mit spektakulärer Bergkulisse.',
                imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            },
        }),
    ]);

    console.log('Adventures created:', adventures.length);

    // Create Destination Data for Comparison
    const destinationData = await Promise.all([
        prisma.destinationData.create({
            data: {
                country: 'Deutschland',
                avgDailyCost: 100,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['Mai', 'Juni', 'Juli', 'August', 'September']),
                activities: JSON.stringify(['Städtetouren', 'Wandern', 'Kultur', 'Biergärten', 'Schlösser']),
                transport: JSON.stringify(['Exzellentes Bahnnetz', 'Autobahn', 'Inlandsflüge']),
                hotelPriceRange: '60-200€',
                touristLevel: 'High',
                pros: JSON.stringify(['Sehr sicher', 'Gute Infrastruktur', 'Vielfältige Regionen', 'Pünktlich']),
                cons: JSON.stringify(['Kann teuer sein', 'Kühleres Wetter', 'Geschäfte sonntags geschlossen']),
                imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'Italien',
                avgDailyCost: 90,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['April', 'Mai', 'Juni', 'September', 'Oktober']),
                activities: JSON.stringify(['Kunst', 'Geschichte', 'Essen', 'Strand', 'Wein']),
                transport: JSON.stringify(['Züge', 'Mietwagen', 'Fähren', 'Inlandsflüge']),
                hotelPriceRange: '50-180€',
                touristLevel: 'High',
                pros: JSON.stringify(['Weltklasse-Küche', 'Reiche Geschichte', 'Schöne Strände', 'Mode']),
                cons: JSON.stringify(['Überfüllt im Sommer', 'Taschendiebe', 'Hitze im August']),
                imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'Spanien',
                avgDailyCost: 80,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['März', 'April', 'Mai', 'Juni', 'September', 'Oktober']),
                activities: JSON.stringify(['Strand', 'Nightlife', 'Tapas', 'Flamenco', 'Architektur']),
                transport: JSON.stringify(['AVE-Schnellzug', 'Busse', 'Mietwagen']),
                hotelPriceRange: '40-150€',
                touristLevel: 'High',
                pros: JSON.stringify(['Günstig', 'Tolles Nachtleben', 'Strände', 'Kultur']),
                cons: JSON.stringify(['Sprachbarriere außerhalb Touristengebiete', 'Hitze im Sommer']),
                imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'Frankreich',
                avgDailyCost: 110,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['April', 'Mai', 'Juni', 'September', 'Oktober']),
                activities: JSON.stringify(['Museen', 'Wein', 'Cuisine', 'Schlösser', 'Côte d\'Azur']),
                transport: JSON.stringify(['TGV', 'Metro Paris', 'Mietwagen']),
                hotelPriceRange: '70-250€',
                touristLevel: 'High',
                pros: JSON.stringify(['Weltklasse-Gastronomie', 'Kultur', 'Vielfältige Regionen']),
                cons: JSON.stringify(['Teuer', 'Streiks', 'Sprachbarriere']),
                imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'Griechenland',
                avgDailyCost: 70,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['Mai', 'Juni', 'September', 'Oktober']),
                activities: JSON.stringify(['Inseln', 'Antike Ruinen', 'Strand', 'Griechische Küche']),
                transport: JSON.stringify(['Fähren', 'Inlandsflüge', 'Busse']),
                hotelPriceRange: '40-150€',
                touristLevel: 'High',
                pros: JSON.stringify(['Günstig', 'Wunderschöne Inseln', 'Geschichte', 'Gastfreundschaft']),
                cons: JSON.stringify(['Überfüllt im Sommer', 'Begrenzte Infrastruktur auf kleinen Inseln']),
                imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'Thailand',
                avgDailyCost: 50,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['November', 'Dezember', 'Januar', 'Februar', 'März']),
                activities: JSON.stringify(['Tempel', 'Strand', 'Tauchen', 'Street Food', 'Massage']),
                transport: JSON.stringify(['Inlandsflüge', 'Busse', 'Tuk-Tuks', 'Fähren']),
                hotelPriceRange: '20-100€',
                touristLevel: 'High',
                pros: JSON.stringify(['Sehr günstig', 'Freundliche Menschen', 'Tolles Essen', 'Strände']),
                cons: JSON.stringify(['Hitze', 'Touristenfallen', 'Langer Flug']),
                imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'Japan',
                avgDailyCost: 130,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['März', 'April', 'Oktober', 'November']),
                activities: JSON.stringify(['Tempel', 'Anime', 'Onsen', 'Sushi', 'Technologie']),
                transport: JSON.stringify(['Shinkansen', 'U-Bahn', 'JR Pass']),
                hotelPriceRange: '60-200€',
                touristLevel: 'High',
                pros: JSON.stringify(['Extrem sicher', 'Einzigartige Kultur', 'Effiziente Infrastruktur']),
                cons: JSON.stringify(['Teuer', 'Sprachbarriere', 'Überfüllt in Städten']),
                imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'Türkei',
                avgDailyCost: 60,
                safetyLevel: 'moderate',
                bestMonths: JSON.stringify(['April', 'Mai', 'Juni', 'September', 'Oktober']),
                activities: JSON.stringify(['Istanbul', 'Strand', 'Geschichte', 'Basar', 'Küche']),
                transport: JSON.stringify(['Inlandsflüge', 'Busse', 'Dolmuş']),
                hotelPriceRange: '30-120€',
                touristLevel: 'Medium',
                pros: JSON.stringify(['Günstig', 'Vielfältig', 'Gastfreundschaft', 'Essen']),
                cons: JSON.stringify(['Politische Lage', 'Hitze im Sommer', 'Grenzregionen meiden']),
                imageUrl: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'USA',
                avgDailyCost: 150,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['April', 'Mai', 'Juni', 'September', 'Oktober']),
                activities: JSON.stringify(['Nationalparks', 'Städte', 'Road Trips', 'Shopping', 'Entertainment']),
                transport: JSON.stringify(['Inlandsflüge', 'Mietwagen', 'Amtrak']),
                hotelPriceRange: '80-300€',
                touristLevel: 'High',
                pros: JSON.stringify(['Vielfalt', 'Große Nationalparks', 'Entertainment']),
                cons: JSON.stringify(['Teuer', 'Große Distanzen', 'Visa erforderlich']),
                imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
            },
        }),
        prisma.destinationData.create({
            data: {
                country: 'Marokko',
                avgDailyCost: 45,
                safetyLevel: 'safe',
                bestMonths: JSON.stringify(['März', 'April', 'Mai', 'Oktober', 'November']),
                activities: JSON.stringify(['Marrakesch', 'Wüste', 'Souks', 'Küche', 'Riads']),
                transport: JSON.stringify(['Busse', 'Züge', 'Taxis']),
                hotelPriceRange: '25-100€',
                touristLevel: 'Medium',
                pros: JSON.stringify(['Günstig', 'Exotisch', 'Nahe Europa', 'Gastfreundschaft']),
                cons: JSON.stringify(['Aufdringliche Händler', 'Hitze im Sommer', 'Feilschen nötig']),
                imageUrl: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&h=600&fit=crop',
            },
        }),
    ]);

    console.log('Destination data created:', destinationData.length);

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
