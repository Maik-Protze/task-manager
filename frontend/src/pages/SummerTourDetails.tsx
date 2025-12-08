import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from '../components/Button'
import VolkerschlachtdenkmalModal from '../components/VolkerschlachtdenkmalModal'
import CityHochhausModal from '../components/CityHochhausModal'
import SachsenthermeModal from '../components/SachsenthermeModal'
import AuerbachskellerModal from '../components/AuerbachskellerModal'
import ThomaskirchModal from '../components/ThomaskirchModal'
import NikolaikircheModal from '../components/NikolaikircheModal'

type TourDetail = {
    id: string
    title: string
    subtitle: string
    description: string
    price: number
    duration: string
    imageUrl: string
    heroImage: string
    tags: string[]
    highlights: string[]
    itinerary: { day: number; title: string; activities: string[] }[]
    included: string[]
    notIncluded: string[]
    attractions: { name: string; description: string; icon: string }[]
}

const summerToursData: { [key: string]: TourDetail } = {
    'summer-1': {
        id: 'summer-1',
        title: 'Ibiza Summer Vibes VIP',
        subtitle: 'Das ultimative Party-Erlebnis auf der weißen Insel',
        description: 'Erleben Sie Ibiza wie nie zuvor! VIP-Zugang zu den angesagtesten Clubs, luxuriöse Villa mit Pool und ein unvergesslicher Tag auf einer privaten Yacht. Perfekt für alle, die das Nachtleben lieben und Luxus schätzen.',
        price: 1499,
        duration: '7 Tage',
        imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&h=900&fit=crop',
        tags: ['VIP', 'Party', 'Villa', 'Yacht'],
        highlights: [
            'VIP-Zugang zu Pacha, Ushuaïa und Amnesia',
            'Luxusvilla mit privatem Pool für 6 Personen',
            'Ganztägiger Yacht-Charter mit Crew',
            'Sunset-Dinner am Café del Mar',
            'Beach Club Hopping mit Champagner'
        ],
        itinerary: [
            {
                day: 1,
                title: 'Ankunft & Welcome Party',
                activities: [
                    'Transfer zur Luxusvilla',
                    'Villa-Tour und Check-in',
                    'Welcome Dinner am Pool',
                    'Erste Nacht im Pacha Club (VIP-Tisch)'
                ]
            },
            {
                day: 2,
                title: 'Beach & Relax',
                activities: [
                    'Frühstück auf der Terrasse',
                    'Beach Club Nikki Beach',
                    'Mittagessen am Strand',
                    'Sunset at Café del Mar',
                    'Abend zur freien Verfügung'
                ]
            },
            {
                day: 3,
                title: 'Yacht Day',
                activities: [
                    'Ganztägiger Yacht-Charter',
                    'Schnorcheln in versteckten Buchten',
                    'BBQ an Bord',
                    'Champagner-Sunset',
                    'Rückkehr zur Villa'
                ]
            },
            {
                day: 4,
                title: 'Island Exploration',
                activities: [
                    'Jeep-Tour durch Ibiza',
                    'Besuch von Dalt Vila (Altstadt)',
                    'Mittagessen in Santa Gertrudis',
                    'Hippie-Markt Las Dalias',
                    'Ushuaïa Closing Party'
                ]
            },
            {
                day: 5,
                title: 'Wellness & Party',
                activities: [
                    'Spa-Behandlung in der Villa',
                    'Pool-Relax',
                    'Shopping in Ibiza-Stadt',
                    'Pre-Party Dinner',
                    'VIP-Nacht im Amnesia'
                ]
            },
            {
                day: 6,
                title: 'Beach & Chill',
                activities: [
                    'Entspannter Strandtag',
                    'Lunch at Blue Marlin',
                    'Wassersport (optional)',
                    'Sunset Cruise',
                    'Farewell Dinner'
                ]
            },
            {
                day: 7,
                title: 'Abreise',
                activities: [
                    'Frühstück in der Villa',
                    'Check-out',
                    'Transfer zum Flughafen'
                ]
            }
        ],
        included: [
            'Flug ab/bis Deutschland',
            'Luxusvilla für 6 Personen (7 Nächte)',
            'Alle Transfers',
            'VIP-Zugang zu 3 Top-Clubs',
            'Yacht-Charter (1 Tag)',
            '3x Abendessen',
            'Reiseleitung vor Ort'
        ],
        notIncluded: [
            'Getränke in Clubs',
            'Persönliche Ausgaben',
            'Optionale Ausflüge',
            'Reiseversicherung'
        ],
        attractions: [
            { name: 'Pacha Club', description: 'Legendärer Club mit Weltklasse-DJs', icon: '🎵' },
            { name: 'Ushuaïa', description: 'Open-Air Club direkt am Strand', icon: '🏖️' },
            { name: 'Café del Mar', description: 'Berühmt für spektakuläre Sonnenuntergänge', icon: '🌅' },
            { name: 'Private Yacht', description: 'Luxuriöser Tag auf dem Mittelmeer', icon: '⛵' },
            { name: 'Dalt Vila', description: 'UNESCO-Weltkulturerbe Altstadt', icon: '🏰' }
        ]
    },
    'summer-2': {
        id: 'summer-2',
        title: 'Portugal Surf & Soul',
        subtitle: 'Surfen, Yoga und pure Lebensfreude an der Algarve',
        description: 'Kombinieren Sie Surfen mit Wellness! Professionelles Surf-Coaching, tägliche Yoga-Sessions am Strand und gesunde, lokale Küche. Perfekt für alle, die Aktivität und Entspannung lieben.',
        price: 899,
        duration: '10 Tage',
        imageUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop',
        tags: ['Sport', 'Wellness', 'Strand', 'Yoga'],
        highlights: [
            'Professionelles Surf-Coaching (Anfänger & Fortgeschrittene)',
            'Tägliche Yoga-Sessions bei Sonnenaufgang',
            'Gesunde, lokale Bio-Küche',
            'Surf-Equipment inklusive',
            'Meditation & Achtsamkeitstraining'
        ],
        itinerary: [
            {
                day: 1,
                title: 'Ankunft & Welcome',
                activities: [
                    'Transfer zum Surfcamp',
                    'Zimmer-Check-in',
                    'Kennenlern-Dinner',
                    'Strand-Spaziergang bei Sonnenuntergang'
                ]
            },
            {
                day: 2,
                title: 'Surf Basics',
                activities: [
                    'Yoga am Strand (7:00)',
                    'Gesundes Frühstück',
                    'Surf-Theorie & Sicherheit',
                    'Erste Surf-Session',
                    'Mittagessen im Camp',
                    'Freie Zeit am Strand',
                    'Abend-Yoga & Meditation'
                ]
            },
            {
                day: 3,
                title: 'Wave Riding',
                activities: [
                    'Sunrise Yoga',
                    'Surf-Session (3 Stunden)',
                    'Lunch',
                    'Video-Analyse',
                    'Zweite Surf-Session',
                    'BBQ am Strand'
                ]
            },
            {
                day: 4,
                title: 'Explore Algarve',
                activities: [
                    'Yoga',
                    'Ausflug zu den Benagil-Höhlen',
                    'Kayak-Tour',
                    'Picknick am Strand',
                    'Besuch von Lagos',
                    'Sunset-Yoga'
                ]
            },
            {
                day: 5,
                title: 'Advanced Surfing',
                activities: [
                    'Früh-Yoga',
                    'Fortgeschrittenen-Surf-Session',
                    'Technik-Training',
                    'Mittagessen',
                    'Freie Zeit / Optional: SUP',
                    'Achtsamkeits-Workshop'
                ]
            },
            {
                day: 6,
                title: 'Wellness Day',
                activities: [
                    'Yoga & Meditation',
                    'Spa-Behandlung (Massage)',
                    'Gesundes Brunch',
                    'Freie Zeit am Pool',
                    'Kochkurs: Portugiesische Küche',
                    'Gemeinsames Dinner'
                ]
            },
            {
                day: 7,
                title: 'Big Wave Challenge',
                activities: [
                    'Sunrise Surf',
                    'Ganztägige Surf-Session',
                    'Beach-Picknick',
                    'Surf-Wettbewerb (Fun)',
                    'Siegerehrung & Party'
                ]
            },
            {
                day: 8,
                title: 'Culture & Surf',
                activities: [
                    'Yoga',
                    'Besuch von Sagres',
                    'Leuchtturm & Festung',
                    'Surf-Session am Tonel Beach',
                    'Seafood-Dinner'
                ]
            },
            {
                day: 9,
                title: 'Last Waves',
                activities: [
                    'Final Surf-Session',
                    'Gruppen-Foto',
                    'Mittagessen',
                    'Freie Zeit',
                    'Abschied-Yoga',
                    'Farewell Dinner & Lagerfeuer'
                ]
            },
            {
                day: 10,
                title: 'Abreise',
                activities: [
                    'Frühstück',
                    'Check-out',
                    'Transfer zum Flughafen'
                ]
            }
        ],
        included: [
            'Flug ab/bis Deutschland',
            'Unterkunft im Surfcamp (9 Nächte)',
            'Vollpension (gesunde Bio-Küche)',
            'Surf-Coaching (täglich)',
            'Yoga-Sessions (täglich)',
            'Komplettes Surf-Equipment',
            'Alle Ausflüge',
            'Transfers'
        ],
        notIncluded: [
            'Spa-Behandlungen',
            'Persönliche Ausgaben',
            'Reiseversicherung'
        ],
        attractions: [
            { name: 'Praia da Bordeira', description: 'Perfekte Wellen für alle Levels', icon: '🏄' },
            { name: 'Benagil-Höhlen', description: 'Spektakuläre Meereshöhlen', icon: '🏞️' },
            { name: 'Lagos Altstadt', description: 'Charmante historische Stadt', icon: '🏛️' },
            { name: 'Sagres', description: 'Ende der Welt - dramatische Klippen', icon: '🌊' },
            { name: 'Yoga am Strand', description: 'Meditation mit Meeresrauschen', icon: '🧘' }
        ]
    },
    'summer-3': {
        id: 'summer-3',
        title: 'Norwegen Mitternachtssonne',
        subtitle: 'Erleben Sie die Magie des Nordens',
        description: 'Wandern Sie unter der Mitternachtssonne durch spektakuläre Fjordlandschaften. Erleben Sie die unberührte Natur Norwegens, malerische Dörfer und die Sonne, die niemals untergeht.',
        price: 1299,
        duration: '8 Tage',
        imageUrl: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&h=900&fit=crop',
        tags: ['Natur', 'Wandern', 'Abenteuer', 'Fotografie'],
        highlights: [
            'Wanderungen zu den schönsten Aussichtspunkten',
            'Mitternachtssonne erleben',
            'Fjord-Kreuzfahrt',
            'Besuch der Lofoten-Inseln',
            'Nordische Küche & lokale Spezialitäten'
        ],
        itinerary: [
            {
                day: 1,
                title: 'Ankunft in Tromsø',
                activities: [
                    'Flug nach Tromsø',
                    'Hotel-Check-in',
                    'Stadtführung',
                    'Abendessen mit Blick auf den Fjord',
                    'Erste Mitternachtssonne'
                ]
            },
            {
                day: 2,
                title: 'Fjellheisen & Stadtleben',
                activities: [
                    'Seilbahn zum Storsteinen (421m)',
                    'Panorama-Wanderung',
                    'Besuch der Eismeerkathedrale',
                    'Polaria Aquarium',
                    'Mitternachtssonne-Fotografie'
                ]
            },
            {
                day: 3,
                title: 'Lofoten-Inseln',
                activities: [
                    'Flug zu den Lofoten',
                    'Wanderung zum Reinebringen',
                    'Besuch von Reine (schönstes Dorf)',
                    'Stockfisch-Museum',
                    'Übernachtung in Rorbu (Fischerhütte)'
                ]
            },
            {
                day: 4,
                title: 'Lofoten Abenteuer',
                activities: [
                    'Kayak-Tour im Fjord',
                    'Besuch von Henningsvær',
                    'Wanderung am Strand',
                    'Wikinger-Museum',
                    'Seafood-Dinner'
                ]
            },
            {
                day: 5,
                title: 'Geirangerfjord',
                activities: [
                    'Fahrt zum Geirangerfjord',
                    'Fjord-Kreuzfahrt',
                    'Sieben Schwestern Wasserfälle',
                    'Wanderung zum Flydalsjuvet',
                    'Übernachtung in Geiranger'
                ]
            },
            {
                day: 6,
                title: 'Trollstigen & Ålesund',
                activities: [
                    'Fahrt über die Trollstigen',
                    'Fotostopps an Aussichtspunkten',
                    'Ankunft in Ålesund',
                    'Stadtführung (Jugendstil)',
                    'Aufstieg zum Aksla (418 Stufen)'
                ]
            },
            {
                day: 7,
                title: 'Atlantikstraße',
                activities: [
                    'Fahrt auf der Atlantikstraße',
                    'Insel-Hopping',
                    'Besuch von Kristiansund',
                    'Klippfisch-Verkostung',
                    'Rückfahrt nach Ålesund'
                ]
            },
            {
                day: 8,
                title: 'Abreise',
                activities: [
                    'Frühstück',
                    'Freie Zeit',
                    'Transfer zum Flughafen',
                    'Rückflug'
                ]
            }
        ],
        included: [
            'Flüge ab/bis Deutschland',
            'Inlandsflug Tromsø-Lofoten',
            'Hotels & Rorbu-Übernachtung',
            'Halbpension',
            'Alle Transfers & Mietwagen',
            'Fjord-Kreuzfahrt',
            'Eintritte zu Museen',
            'Deutschsprachige Reiseleitung'
        ],
        notIncluded: [
            'Mittagessen',
            'Persönliche Ausgaben',
            'Optionale Aktivitäten',
            'Reiseversicherung'
        ],
        attractions: [
            { name: 'Mitternachtssonne', description: '24 Stunden Tageslicht erleben', icon: '☀️' },
            { name: 'Lofoten', description: 'Dramatische Berglandschaft am Meer', icon: '⛰️' },
            { name: 'Geirangerfjord', description: 'UNESCO-Weltnaturerbe', icon: '🏔️' },
            { name: 'Trollstigen', description: 'Spektakuläre Serpentinenstraße', icon: '🛣️' },
            { name: 'Atlantikstraße', description: 'Eine der schönsten Straßen der Welt', icon: '🌊' }
        ]
    },
    'summer-4': {
        id: 'summer-4',
        title: 'Yacht Week Croatia',
        subtitle: 'Segeln Sie durch die Inselwelt Kroatiens',
        description: 'Luxus und Freiheit pur! Segeln Sie mit einer privaten Crew durch die traumhafte Inselwelt Kroatiens. Kristallklares Wasser, versteckte Buchten und malerische Küstenstädte warten auf Sie.',
        price: 1899,
        duration: '7 Tage',
        imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&h=600&fit=crop',
        heroImage: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1600&h=900&fit=crop',
        tags: ['Segeln', 'Luxus', 'Inseln', 'Meer'],
        highlights: [
            'Luxus-Yacht mit Skipper & Hostess',
            'Insel-Hopping: Hvar, Brač, Vis, Korčula',
            'Schwimmen in versteckten Buchten',
            'Gourmet-Küche an Bord',
            'Wassersport-Equipment inklusive'
        ],
        itinerary: [
            {
                day: 1,
                title: 'Split - Einschiffung',
                activities: [
                    'Ankunft in Split',
                    'Yacht-Boarding & Einweisung',
                    'Willkommens-Champagner',
                    'Erste Nacht im Hafen',
                    'Dinner in der Altstadt'
                ]
            },
            {
                day: 2,
                title: 'Split → Hvar (25 NM)',
                activities: [
                    'Frühstück an Bord',
                    'Segeln nach Hvar',
                    'Schwimmen in der Bucht',
                    'Mittagessen an Bord',
                    'Ankunft in Hvar-Stadt',
                    'Besuch der Festung',
                    'Dinner im Hafen'
                ]
            },
            {
                day: 3,
                title: 'Hvar → Vis (20 NM)',
                activities: [
                    'Frühstück',
                    'Segeln nach Vis',
                    'Besuch der Blauen Grotte',
                    'Lunch in Komiža',
                    'Schnorcheln',
                    'BBQ an Bord',
                    'Übernachtung in der Bucht'
                ]
            },
            {
                day: 4,
                title: 'Vis → Korčula (30 NM)',
                activities: [
                    'Sunrise Swim',
                    'Segeln nach Korčula',
                    'Mittagessen an Bord',
                    'Ankunft in Korčula',
                    'Stadtführung (Geburtsort Marco Polos)',
                    'Weinverkostung',
                    'Dinner in der Altstadt'
                ]
            },
            {
                day: 5,
                title: 'Korčula → Mljet (20 NM)',
                activities: [
                    'Frühstück',
                    'Segeln nach Mljet',
                    'Nationalpark Mljet',
                    'Kayak zu den Salzseen',
                    'Besuch des Klosters',
                    'Schwimmen',
                    'Dinner an Bord'
                ]
            },
            {
                day: 6,
                title: 'Mljet → Brač (35 NM)',
                activities: [
                    'Frühstück',
                    'Segeln nach Brač',
                    'Zlatni Rat Beach',
                    'Wassersport (SUP, Kayak)',
                    'Mittagessen',
                    'Besuch von Bol',
                    'Captain\'s Dinner'
                ]
            },
            {
                day: 7,
                title: 'Brač → Split (15 NM)',
                activities: [
                    'Letztes Frühstück an Bord',
                    'Gemütliches Segeln nach Split',
                    'Schwimmen unterwegs',
                    'Ankunft in Split',
                    'Check-out',
                    'Transfer zum Flughafen'
                ]
            }
        ],
        included: [
            'Flug ab/bis Deutschland',
            'Luxus-Yacht (bis 8 Personen)',
            'Skipper & Hostess',
            'Vollpension an Bord',
            'Getränke (Wasser, Softdrinks, Wein)',
            'Wassersport-Equipment',
            'Treibstoff',
            'Hafengebühren',
            'Endreinigung'
        ],
        notIncluded: [
            'Alkoholische Getränke (außer Wein)',
            'Restaurants an Land',
            'Nationalpark-Eintritte',
            'Persönliche Ausgaben',
            'Reiseversicherung'
        ],
        attractions: [
            { name: 'Hvar', description: 'Die Sonneninsel - Party & Kultur', icon: '🏝️' },
            { name: 'Blaue Grotte', description: 'Magisches Lichtspiel in der Höhle', icon: '💎' },
            { name: 'Korčula', description: 'Mittelalterliche Stadt am Meer', icon: '🏰' },
            { name: 'Mljet Nationalpark', description: 'Unberührte Natur & Salzseen', icon: '🌲' },
            { name: 'Zlatni Rat', description: 'Einer der schönsten Strände Kroatiens', icon: '🏖️' }
        ]
    },
    'summer-5': {
        id: 'summer-5',
        title: 'Leipzig Kulturerlebnis',
        subtitle: 'Geschichte, Kultur und Wellness in Sachsens Metropole',
        description: 'Entdecken Sie Leipzig - eine Stadt voller Geschichte, Kultur und Lebensfreude. Vom monumentalen Völkerschlachtdenkmal bis zum historischen Auerbachskeller, von moderner Architektur bis zu entspannenden Thermalbädern.',
        price: 599,
        duration: '5 Tage',
        imageUrl: '/germany/leipzig-hero.jpg',
        heroImage: '/germany/leipzig-hero.jpg',
        tags: ['Kultur', 'Geschichte', 'Wellness', 'Städtereise'],
        highlights: [
            'Völkerschlachtdenkmal mit Museum',
            'Uni-Riese (City-Hochhaus) Panorama',
            'Sachsentherme Wellness-Erlebnis',
            'Historischer Auerbachskeller',
            'Nikolaikirche - Friedliche Revolution',
            'Geführte Stadtrundgänge'
        ],
        itinerary: [
            {
                day: 1,
                title: 'Ankunft & Stadtzentrum',
                activities: [
                    'Anreise nach Leipzig',
                    'Hotel-Check-in',
                    'Geführter Rundgang durch die Altstadt',
                    'Besuch der Thomaskirche (Bach)',
                    'Altes Rathaus & Marktplatz',
                    'Willkommens-Dinner im Auerbachskeller'
                ]
            },
            {
                day: 2,
                title: 'Geschichte & Panorama',
                activities: [
                    'Frühstück im Hotel',
                    'Besuch des Völkerschlachtdenkmals',
                    'Museum zur Völkerschlacht',
                    'Aufstieg zur Aussichtsplattform (91m)',
                    'Mittagessen',
                    'City-Hochhaus (Uni-Riese) - 142m Panorama',
                    'Kaffee in der Mädler-Passage',
                    'Abend zur freien Verfügung'
                ]
            },
            {
                day: 3,
                title: 'Kultur & Musik',
                activities: [
                    'Frühstück',
                    'Bach-Museum',
                    'Mendelssohn-Haus',
                    'Mittagessen im Barfußgässchen',
                    'Gewandhaus-Führung',
                    'Besuch der Nikolaikirche (Friedliche Revolution)',
                    'Optional: Konzert im Gewandhaus'
                ]
            },
            {
                day: 4,
                title: 'Wellness & Entspannung',
                activities: [
                    'Ausschlafen',
                    'Ganztägiger Besuch der Sachsentherme',
                    'Thermalbäder & Saunalandschaft',
                    'Wellness-Behandlung (optional)',
                    'Mittagessen in der Therme',
                    'Entspannung',
                    'Abendessen im Hotel'
                ]
            },
            {
                day: 5,
                title: 'Moderne & Abreise',
                activities: [
                    'Frühstück',
                    'Besuch der Baumwollspinnerei (Kunstquartier)',
                    'Plagwitz & Karl-Heine-Kanal',
                    'Mittagessen am Wasser',
                    'Letzte Shopping-Tour',
                    'Check-out & Abreise'
                ]
            }
        ],
        included: [
            'Bahnfahrt ab/bis Deutschland (1. Klasse)',
            'Hotel im Stadtzentrum (4 Nächte)',
            'Frühstück täglich',
            '2x Abendessen',
            'Alle Eintritte & Führungen',
            'Tageskarte Sachsentherme',
            'Leipzig Card (ÖPNV & Ermäßigungen)',
            'Reiseleitung'
        ],
        notIncluded: [
            'Mittagessen',
            'Konzert-Tickets',
            'Wellness-Behandlungen',
            'Persönliche Ausgaben',
            'Reiseversicherung'
        ],
        attractions: [
            { name: 'Völkerschlachtdenkmal', description: 'Monumentales Denkmal mit 91m Höhe', icon: '🏛️' },
            { name: 'Uni-Riese', description: 'Panoramablick aus 142m Höhe', icon: '🏢' },
            { name: 'Sachsentherme', description: 'Wellness-Oase mit Thermalbädern', icon: '♨️' },
            { name: 'Auerbachskeller', description: 'Historisches Restaurant (Goethes Faust)', icon: '🍷' },
            { name: 'Thomaskirche', description: 'Wirkungsstätte von Johann Sebastian Bach', icon: '🎵' },
            { name: 'Nikolaikirche', description: 'Ausgangspunkt der Friedlichen Revolution', icon: '🕊️' }
        ]
    }
}

export default function SummerTourDetails() {
    const { tourId } = useParams()
    const tour = tourId ? summerToursData[tourId] : null
    const [isVolkerschlachtModalOpen, setIsVolkerschlachtModalOpen] = useState(false)
    const [isCityHochhausModalOpen, setIsCityHochhausModalOpen] = useState(false)
    const [isSachsenthermeModalOpen, setIsSachsenthermeModalOpen] = useState(false)
    const [isAuerbachskellerModalOpen, setIsAuerbachskellerModalOpen] = useState(false)
    const [isThomaskirchModalOpen, setIsThomaskirchModalOpen] = useState(false)
    const [isNikolaikircheModalOpen, setIsNikolaikircheModalOpen] = useState(false)

    // Scroll to top when component mounts or tourId changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [tourId])

    if (!tour) {
        return (
            <div className="container" style={{ padding: 'var(--spacing-4xl) 0', textAlign: 'center' }}>
                <h1>Tour nicht gefunden</h1>
                <Link to="/summer-programs">
                    <Button variant="primary">Zurück zu Sommer-Programmen</Button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${tour.heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    padding: 'var(--spacing-4xl) 0',
                    minHeight: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                        {tour.tags.map(tag => (
                            <span key={tag} style={{
                                background: 'rgba(255,255,255,0.2)',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                backdropFilter: 'blur(10px)'
                            }}>
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <h1 style={{ color: 'white', fontSize: '4rem', marginBottom: '1rem', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                        {tour.title}
                    </h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '2rem', textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                        {tour.subtitle}
                    </p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>{tour.price} €</div>
                            <div style={{ fontSize: '1rem', opacity: 0.9 }}>pro Person</div>
                        </div>
                        <div style={{ fontSize: '2rem', opacity: 0.5 }}>|</div>
                        <div>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{tour.duration}</div>
                            <div style={{ fontSize: '1rem', opacity: 0.9 }}>Reisedauer</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div style={{ background: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-lg) 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <Link to="/contact">
                        <Button variant="accent" size="lg">Jetzt Anfragen</Button>
                    </Link>
                    <Link to="/summer-programs">
                        <button className="btn btn-secondary btn-lg" style={{ background: 'white', color: 'var(--color-primary)' }}>
                            Zurück zur Übersicht
                        </button>
                    </Link>
                </div>
            </div>

            {/* Overview */}
            <section>
                <div className="container">
                    <h2 className="text-center mb-xl">Über diese Reise</h2>
                    <p style={{ fontSize: '1.25rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-medium)' }}>
                        {tour.description}
                    </p>
                </div>
            </section>

            {/* Highlights */}
            <section style={{ background: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <h2 className="text-center mb-xl">Highlights</h2>
                    <div className="grid grid-3">
                        {tour.highlights.map((highlight, index) => (
                            <div 
                                key={index} 
                                className="card" 
                                onClick={
                                    highlight.includes('Völkerschlachtdenkmal') ? () => setIsVolkerschlachtModalOpen(true) :
                                    highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus') ? () => setIsCityHochhausModalOpen(true) :
                                    highlight.includes('Auerbachskeller') ? () => setIsAuerbachskellerModalOpen(true) :
                                    highlight.includes('Sachsentherme') ? () => setIsSachsenthermeModalOpen(true) :
                                    highlight.includes('Thomaskirche') ? () => setIsThomaskirchModalOpen(true) :
                                    highlight.includes('Nikolaikirche') ? () => setIsNikolaikircheModalOpen(true) :
                                    undefined
                                }
                                style={{ 
                                    textAlign: 'center', 
                                    border: 'none',
                                    cursor: (highlight.includes('Völkerschlachtdenkmal') || highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus') || highlight.includes('Auerbachskeller') || highlight.includes('Sachsentherme') || highlight.includes('Thomaskirche') || highlight.includes('Nikolaikirche')) ? 'pointer' : 'default',
                                    transition: 'all 0.3s ease',
                                    background: highlight.includes('Völkerschlachtdenkmal') ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                                               (highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus')) ? 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' :
                                               highlight.includes('Auerbachskeller') ? 'linear-gradient(135deg, #8b5a2b 0%, #d2691e 100%)' :
                                               highlight.includes('Sachsentherme') ? 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' :
                                               highlight.includes('Thomaskirche') ? 'linear-gradient(135deg, #8b5a2b 0%, #d2691e 100%)' :
                                               highlight.includes('Nikolaikirche') ? 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)' : 'white',
                                    color: (highlight.includes('Völkerschlachtdenkmal') || highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus') || highlight.includes('Auerbachskeller') || highlight.includes('Sachsentherme') || highlight.includes('Thomaskirche') || highlight.includes('Nikolaikirche')) ? 'white' : 'inherit'
                                }}
                                onMouseEnter={(e) => {
                                    if (highlight.includes('Völkerschlachtdenkmal') || highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus') || highlight.includes('Auerbachskeller') || highlight.includes('Sachsentherme') || highlight.includes('Thomaskirche') || highlight.includes('Nikolaikirche')) {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = highlight.includes('Völkerschlachtdenkmal') ? '0 8px 25px rgba(102, 126, 234, 0.3)' : 
                                                                            highlight.includes('Auerbachskeller') ? '0 8px 25px rgba(139, 90, 43, 0.3)' :
                                                                            highlight.includes('Sachsentherme') ? '0 8px 25px rgba(14, 165, 233, 0.3)' :
                                                                            highlight.includes('Thomaskirche') ? '0 8px 25px rgba(139, 90, 43, 0.3)' :
                                                                            highlight.includes('Nikolaikirche') ? '0 8px 25px rgba(220, 38, 38, 0.3)' :
                                                                            '0 8px 25px rgba(59, 130, 246, 0.3)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (highlight.includes('Völkerschlachtdenkmal') || highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus') || highlight.includes('Auerbachskeller') || highlight.includes('Sachsentherme') || highlight.includes('Thomaskirche') || highlight.includes('Nikolaikirche')) {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = 'inherit';
                                    }
                                }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                    {highlight.includes('Völkerschlachtdenkmal') ? '🏛️' : 
                                     highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus') ? '🏢' :
                                     highlight.includes('Auerbachskeller') ? '🍷' :
                                     highlight.includes('Sachsentherme') ? '♨️' :
                                     highlight.includes('Thomaskirche') ? '🎵' :
                                     highlight.includes('Nikolaikirche') ? '🕊️' : '✨'}
                                </div>
                                <p style={{ fontWeight: 'bold', color: (highlight.includes('Völkerschlachtdenkmal') || highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus') || highlight.includes('Auerbachskeller') || highlight.includes('Sachsentherme') || highlight.includes('Thomaskirche') || highlight.includes('Nikolaikirche')) ? 'white' : 'var(--color-text-dark)' }}>
                                    {highlight}
                                </p>
                                {(highlight.includes('Völkerschlachtdenkmal') || highlight.includes('Uni-Riese') || highlight.includes('City-Hochhaus') || highlight.includes('Auerbachskeller') || highlight.includes('Sachsentherme') || highlight.includes('Thomaskirche') || highlight.includes('Nikolaikirche')) && (
                                    <div style={{ 
                                        marginTop: '0.5rem', 
                                        fontSize: '0.8rem', 
                                        opacity: 0.9,
                                        color: 'white'
                                    }}>
                                        📸 Klicken für Details & {highlight.includes('Völkerschlachtdenkmal') ? 'Preise' : 
                                                                   highlight.includes('Auerbachskeller') ? 'Speisekarte' :
                                                                   highlight.includes('Sachsentherme') ? 'Wellness-Info' :
                                                                   highlight.includes('Thomaskirche') ? 'Bach-Info' :
                                                                   highlight.includes('Nikolaikirche') ? 'Revolution-Info' : 'Panorama'}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Attractions */}
            <section>
                <div className="container">
                    <h2 className="text-center mb-xl">Sehenswürdigkeiten & Aktivitäten</h2>
                    <div className="grid grid-2">
                        {tour.attractions.map((attraction, index) => (
                            <div 
                                key={index} 
                                className="card"
                                onClick={
                                    attraction.name === 'Völkerschlachtdenkmal' ? () => setIsVolkerschlachtModalOpen(true) :
                                    attraction.name === 'Uni-Riese' ? () => setIsCityHochhausModalOpen(true) :
                                    attraction.name === 'Sachsentherme' ? () => setIsSachsenthermeModalOpen(true) :
                                    attraction.name === 'Auerbachskeller' ? () => setIsAuerbachskellerModalOpen(true) :
                                    attraction.name === 'Thomaskirche' ? () => setIsThomaskirchModalOpen(true) :
                                    undefined
                                }
                                style={{ 
                                    cursor: (attraction.name === 'Völkerschlachtdenkmal' || attraction.name === 'Uni-Riese' || attraction.name === 'Sachsentherme' || attraction.name === 'Auerbachskeller' || attraction.name === 'Thomaskirche') ? 'pointer' : 'default',
                                    transition: 'all 0.3s ease',
                                    transform: (attraction.name === 'Völkerschlachtdenkmal' || attraction.name === 'Uni-Riese' || attraction.name === 'Sachsentherme' || attraction.name === 'Auerbachskeller' || attraction.name === 'Thomaskirche') ? 'scale(1.02)' : 'scale(1)',
                                    boxShadow: (attraction.name === 'Völkerschlachtdenkmal' || attraction.name === 'Uni-Riese' || attraction.name === 'Sachsentherme' || attraction.name === 'Auerbachskeller' || attraction.name === 'Thomaskirche') ? '0 8px 25px rgba(0,0,0,0.15)' : 'inherit'
                                }}
                                onMouseEnter={(e) => {
                                    if (attraction.name === 'Völkerschlachtdenkmal' || attraction.name === 'Uni-Riese' || attraction.name === 'Sachsentherme' || attraction.name === 'Auerbachskeller' || attraction.name === 'Thomaskirche') {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (attraction.name === 'Völkerschlachtdenkmal' || attraction.name === 'Uni-Riese' || attraction.name === 'Sachsentherme' || attraction.name === 'Auerbachskeller' || attraction.name === 'Thomaskirche') {
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                    }
                                }}
                            >
                                <div className="card-content">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '3rem' }}>{attraction.icon}</div>
                                        <div>
                                            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                {attraction.name}
                                                {attraction.name === 'Völkerschlachtdenkmal' && (
                                                    <span style={{ fontSize: '0.8rem', color: '#0ea5e9' }}>📸 Klicken für Details</span>
                                                )}
                                                {attraction.name === 'Uni-Riese' && (
                                                    <span style={{ fontSize: '0.8rem', color: '#3b82f6' }}>📸 Klicken für Details & Panorama</span>
                                                )}
                                                {attraction.name === 'Sachsentherme' && (
                                                    <span style={{ fontSize: '0.8rem', color: '#0ea5e9' }}>♨️ Klicken für Wellness-Info</span>
                                                )}
                                                {attraction.name === 'Auerbachskeller' && (
                                                    <span style={{ fontSize: '0.8rem', color: '#8b5a2b' }}>🍷 Klicken für Restaurant-Details</span>
                                                )}
                                                {attraction.name === 'Thomaskirche' && (
                                                    <span style={{ fontSize: '0.8rem', color: '#8b5a2b' }}>🎵 Klicken für Bach & Musik-Info</span>
                                                )}
                                            </h3>
                                        </div>
                                    </div>
                                    <p style={{ color: 'var(--color-text-medium)' }}>{attraction.description}</p>
                                    {attraction.name === 'Völkerschlachtdenkmal' && (
                                        <div style={{ 
                                            marginTop: '1rem', 
                                            padding: '0.5rem 1rem', 
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                                            color: 'white', 
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            textAlign: 'center'
                                        }}>
                                            💫 Interaktive Präsentation mit Bildern & Preisen
                                        </div>
                                    )}
                                    {attraction.name === 'Uni-Riese' && (
                                        <div style={{ 
                                            marginTop: '1rem', 
                                            padding: '0.5rem 1rem', 
                                            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)', 
                                            color: 'white', 
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            textAlign: 'center'
                                        }}>
                                            🌆 360° Panorama-Rundblick & Infos
                                        </div>
                                    )}
                                    {attraction.name === 'Sachsentherme' && (
                                        <div style={{ 
                                            marginTop: '1rem', 
                                            padding: '0.5rem 1rem', 
                                            background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', 
                                            color: 'white', 
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            textAlign: 'center'
                                        }}>
                                            ♨️ Wellness-Erlebnis mit Thermalbädern & Sauna
                                        </div>
                                    )}
                                    {attraction.name === 'Auerbachskeller' && (
                                        <div style={{ 
                                            marginTop: '1rem', 
                                            padding: '0.5rem 1rem', 
                                            background: 'linear-gradient(135deg, #8b5a2b 0%, #d2691e 100%)', 
                                            color: 'white', 
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            textAlign: 'center'
                                        }}>
                                            🍷 Goethes Faust & sächsische Küche seit 1525
                                        </div>
                                    )}
                                    {attraction.name === 'Thomaskirche' && (
                                        <div style={{ 
                                            marginTop: '1rem', 
                                            padding: '0.5rem 1rem', 
                                            background: 'linear-gradient(135deg, #8b5a2b 0%, #d2691e 100%)', 
                                            color: 'white', 
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            textAlign: 'center'
                                        }}>
                                            🎵 Johann Sebastian Bach & Thomanerchor seit 1212
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Itinerary */}
            <section style={{ background: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <h2 className="text-center mb-xl">Tagesablauf</h2>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {tour.itinerary.map((day) => (
                            <div key={day.day} className="card" style={{ marginBottom: '1.5rem' }}>
                                <div className="card-content">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{
                                            background: 'var(--color-primary)',
                                            color: 'white',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold'
                                        }}>
                                            {day.day}
                                        </div>
                                        <h3 style={{ margin: 0 }}>{day.title}</h3>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {day.activities.map((activity, index) => (
                                            <li key={index} style={{
                                                padding: '0.5rem 0',
                                                borderBottom: index < day.activities.length - 1 ? '1px solid var(--color-border)' : 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                cursor: (activity.includes('Völkerschlachtdenkmal') || activity.includes('City-Hochhaus') || activity.includes('Uni-Riese')) ? 'pointer' : 'default'
                                            }}
                                            onClick={
                                                activity.includes('Völkerschlachtdenkmal') ? () => setIsVolkerschlachtModalOpen(true) :
                                                activity.includes('City-Hochhaus') || activity.includes('Uni-Riese') ? () => setIsCityHochhausModalOpen(true) :
                                                undefined
                                            }
                                            onMouseEnter={(e) => {
                                                if (activity.includes('Völkerschlachtdenkmal') || activity.includes('City-Hochhaus') || activity.includes('Uni-Riese')) {
                                                    e.currentTarget.style.background = activity.includes('Völkerschlachtdenkmal') ? 'rgba(102, 126, 234, 0.1)' : 'rgba(59, 130, 246, 0.1)';
                                                    e.currentTarget.style.borderRadius = '4px';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (activity.includes('Völkerschlachtdenkmal') || activity.includes('City-Hochhaus') || activity.includes('Uni-Riese')) {
                                                    e.currentTarget.style.background = 'transparent';
                                                }
                                            }}
                                            >
                                                <span style={{ color: 'var(--color-primary)' }}>✓</span>
                                                <span style={{ 
                                                    color: activity.includes('Völkerschlachtdenkmal') ? '#0ea5e9' : 
                                                           activity.includes('City-Hochhaus') || activity.includes('Uni-Riese') ? '#3b82f6' : 'inherit',
                                                    fontWeight: (activity.includes('Völkerschlachtdenkmal') || activity.includes('City-Hochhaus') || activity.includes('Uni-Riese')) ? 'bold' : 'normal'
                                                }}>
                                                    {activity}
                                                    {activity.includes('Völkerschlachtdenkmal') && (
                                                        <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>📸</span>
                                                    )}
                                                    {(activity.includes('City-Hochhaus') || activity.includes('Uni-Riese')) && (
                                                        <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>🏢</span>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Included / Not Included */}
            <section>
                <div className="container">
                    <h2 className="text-center mb-xl">Leistungen</h2>
                    <div className="grid grid-2">
                        <div className="card" style={{ background: 'var(--color-success-light)' }}>
                            <div className="card-content">
                                <h3 style={{ color: 'var(--color-success)', marginBottom: '1.5rem' }}>✓ Im Preis enthalten</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {tour.included.map((item, index) => (
                                        <li key={index} style={{
                                            padding: '0.75rem 0',
                                            borderBottom: index < tour.included.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ color: 'var(--color-success)', fontSize: '1.25rem' }}>✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="card" style={{ background: 'var(--color-error-light)' }}>
                            <div className="card-content">
                                <h3 style={{ color: 'var(--color-error)', marginBottom: '1.5rem' }}>✗ Nicht enthalten</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {tour.notIncluded.map((item, index) => (
                                        <li key={index} style={{
                                            padding: '0.75rem 0',
                                            borderBottom: index < tour.notIncluded.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            <span style={{ color: 'var(--color-error)', fontSize: '1.25rem' }}>✗</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                color: 'white',
                textAlign: 'center',
                padding: 'var(--spacing-4xl) 0'
            }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.5rem' }}>
                        Bereit für das Abenteuer?
                    </h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
                        Sichern Sie sich jetzt Ihren Platz für {tour.title}!
                    </p>
                    <Link to="/contact">
                        <button className="btn btn-accent btn-lg" style={{ background: 'white', color: 'var(--color-primary)', border: 'none', fontSize: '1.25rem', padding: '1rem 3rem' }}>
                            Jetzt unverbindlich anfragen
                        </button>
                    </Link>
                </div>
            </section>

            {/* Völkerschlachtdenkmal Modal */}
            <VolkerschlachtdenkmalModal 
                isOpen={isVolkerschlachtModalOpen}
                onClose={() => setIsVolkerschlachtModalOpen(false)}
            />

            {/* City-Hochhaus (Uni-Riese) Modal */}
            <CityHochhausModal 
                isOpen={isCityHochhausModalOpen}
                onClose={() => setIsCityHochhausModalOpen(false)}
            />

            {/* Sachsentherme Modal */}
            <SachsenthermeModal 
                isOpen={isSachsenthermeModalOpen}
                onClose={() => setIsSachsenthermeModalOpen(false)}
            />

            {/* Auerbachskeller Modal */}
            <AuerbachskellerModal 
                isOpen={isAuerbachskellerModalOpen}
                onClose={() => setIsAuerbachskellerModalOpen(false)}
            />

            {/* Thomaskirche Modal */}
            <ThomaskirchModal 
                isOpen={isThomaskirchModalOpen}
                onClose={() => setIsThomaskirchModalOpen(false)}
            />

            <NikolaikircheModal 
                isOpen={isNikolaikircheModalOpen}
                onClose={() => setIsNikolaikircheModalOpen(false)}
            />
        </div>
    )
}
