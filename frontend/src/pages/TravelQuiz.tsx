import React, { useState, useEffect } from 'react';

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    image?: string;
}

interface QuizCategory {
    id: string;
    name: string;
    icon: string;
    description: string;
    color: string;
    questions: Question[];
}

const quizCategories: QuizCategory[] = [
    {
        id: 'geography',
        name: 'Geografie & Länder',
        icon: '🌍',
        description: 'Teste dein Wissen über Länder, Hauptstädte und geografische Fakten',
        color: '#10B981',
        questions: [
            {
                id: 1,
                question: 'Welches ist das flächenmäßig größte Land der Welt?',
                options: ['USA', 'China', 'Russland', 'Kanada'],
                correctAnswer: 2,
                explanation: 'Russland ist mit etwa 17,1 Millionen km² das größte Land der Welt und erstreckt sich über 11 Zeitzonen.',
                image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=600',
            },
            {
                id: 2,
                question: 'Welche Stadt ist die Hauptstadt von Australien?',
                options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
                correctAnswer: 2,
                explanation: 'Canberra ist die Hauptstadt Australiens. Sydney ist zwar größer, aber Canberra wurde als Kompromiss zwischen Sydney und Melbourne gewählt.',
                image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',
            },
            {
                id: 3,
                question: 'Durch wie viele Länder fließt die Donau?',
                options: ['6', '8', '10', '12'],
                correctAnswer: 2,
                explanation: 'Die Donau fließt durch 10 Länder: Deutschland, Österreich, Slowakei, Ungarn, Kroatien, Serbien, Bulgarien, Rumänien, Moldawien und Ukraine.',
                image: 'https://images.unsplash.com/photo-1516550893885-985c836c68d6?w=600',
            },
            {
                id: 4,
                question: 'Welches Land hat die meisten Zeitzonen?',
                options: ['USA', 'Russland', 'Frankreich', 'Großbritannien'],
                correctAnswer: 2,
                explanation: 'Frankreich hat mit 12 Zeitzonen die meisten Zeitzonen der Welt, hauptsächlich aufgrund seiner Überseegebiete.',
                image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',
            },
            {
                id: 5,
                question: 'In welchem Kontinent liegt Ägypten hauptsächlich?',
                options: ['Asien', 'Afrika', 'Europa', 'Australien'],
                correctAnswer: 1,
                explanation: 'Ägypten liegt hauptsächlich in Nordostafrika, ein kleiner Teil (Sinai-Halbinsel) gehört jedoch zu Asien.',
                image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600',
            },
            {
                id: 6,
                question: 'Welches ist das bevölkerungsreichste Land der Welt?',
                options: ['USA', 'Indien', 'China', 'Indonesien'],
                correctAnswer: 1,
                explanation: 'Indien hat China 2023 als bevölkerungsreichstes Land überholt mit über 1,4 Milliarden Einwohnern.',
                image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600',
            },
            {
                id: 7,
                question: 'Was ist die kleinste Hauptstadt Europas?',
                options: ['Vaduz', 'Monaco', 'Valletta', 'San Marino'],
                correctAnswer: 2,
                explanation: 'Valletta, die Hauptstadt Maltas, ist mit nur 0,61 km² die kleinste Hauptstadt der EU.',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            },
            {
                id: 8,
                question: 'Welches Land wird auch "Land der aufgehenden Sonne" genannt?',
                options: ['China', 'Thailand', 'Japan', 'Vietnam'],
                correctAnswer: 2,
                explanation: 'Japan heißt auf Japanisch "Nihon" oder "Nippon", was "Ursprung der Sonne" bedeutet.',
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',
            },
            {
                id: 9,
                question: 'In welchem Land liegt die Stadt Marrakesch?',
                options: ['Tunesien', 'Algerien', 'Marokko', 'Libyen'],
                correctAnswer: 2,
                explanation: 'Marrakesch ist eine der vier Königsstädte Marokkos und bekannt für ihre Medina (Altstadt) und den berühmten Platz Djemaa el-Fna.',
                image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600',
            },
            {
                id: 10,
                question: 'Welcher Ozean ist der größte der Welt?',
                options: ['Atlantischer Ozean', 'Indischer Ozean', 'Pazifischer Ozean', 'Arktischer Ozean'],
                correctAnswer: 2,
                explanation: 'Der Pazifische Ozean ist mit etwa 166 Millionen km² der größte und tiefste Ozean der Erde.',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
            },
        ],
    },
    {
        id: 'culture',
        name: 'Kultur & Wahrzeichen',
        icon: '🏛️',
        description: 'Fragen zu berühmten Sehenswürdigkeiten und kulturellen Besonderheiten',
        color: '#8B5CF6',
        questions: [
            {
                id: 1,
                question: 'Welches Weltwunder der Antike existiert noch heute?',
                options: ['Koloss von Rhodos', 'Pyramiden von Gizeh', 'Hängende Gärten', 'Leuchtturm von Alexandria'],
                correctAnswer: 1,
                explanation: 'Die Pyramiden von Gizeh sind das einzige der sieben Weltwunder der Antike, das noch heute existiert.',
                image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600',
            },
            {
                id: 2,
                question: 'In welchem Museum hängt die Mona Lisa?',
                options: ['British Museum', 'Louvre', 'Uffizien', 'Prado'],
                correctAnswer: 1,
                explanation: 'Die Mona Lisa von Leonardo da Vinci hängt im Louvre in Paris und ist eines der meistbesuchten Kunstwerke der Welt.',
                image: 'https://images.unsplash.com/photo-1499426600726-1203e53cf10f?w=600',
            },
            {
                id: 3,
                question: 'Welches Land ist bekannt für seine Fjorde?',
                options: ['Schweden', 'Finnland', 'Norwegen', 'Island'],
                correctAnswer: 2,
                explanation: 'Norwegens Fjorde sind weltberühmt. Der Geirangerfjord und Nærøyfjord sind UNESCO-Welterbe.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
            },
            {
                id: 4,
                question: 'In welcher Stadt befindet sich die Blaue Moschee?',
                options: ['Kairo', 'Istanbul', 'Dubai', 'Riad'],
                correctAnswer: 1,
                explanation: 'Die Sultan-Ahmed-Moschee, bekannt als Blaue Moschee, steht in Istanbul und ist für ihre blauen Fliesen berühmt.',
                image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600',
            },
            {
                id: 5,
                question: 'Wo steht die Christusstatue Cristo Redentor?',
                options: ['Buenos Aires', 'Rio de Janeiro', 'Lima', 'Bogotá'],
                correctAnswer: 1,
                explanation: 'Die 30 Meter hohe Christusstatue steht auf dem Berg Corcovado in Rio de Janeiro und ist eines der neuen sieben Weltwunder.',
                image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600',
            },
            {
                id: 6,
                question: 'Welches Land ist für die Terrakotta-Armee bekannt?',
                options: ['Japan', 'Korea', 'China', 'Thailand'],
                correctAnswer: 2,
                explanation: 'Die Terrakotta-Armee wurde 1974 nahe Xian, China, entdeckt und besteht aus über 8.000 lebensgroßen Figuren.',
                image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',
            },
            {
                id: 7,
                question: 'In welcher Stadt steht der Schiefe Turm?',
                options: ['Florenz', 'Pisa', 'Venedig', 'Bologna'],
                correctAnswer: 1,
                explanation: 'Der Schiefe Turm von Pisa begann sich schon während des Baus zu neigen und hat einen Neigungswinkel von etwa 4 Grad.',
                image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600',
            },
            {
                id: 8,
                question: 'Welches Gebäude ist das höchste der Welt (2024)?',
                options: ['Shanghai Tower', 'One World Trade Center', 'Burj Khalifa', 'Taipei 101'],
                correctAnswer: 2,
                explanation: 'Der Burj Khalifa in Dubai ist mit 828 Metern das höchste Gebäude der Welt.',
                image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',
            },
            {
                id: 9,
                question: 'Welches Land ist für Angkor Wat bekannt?',
                options: ['Thailand', 'Vietnam', 'Kambodscha', 'Myanmar'],
                correctAnswer: 2,
                explanation: 'Angkor Wat in Kambodscha ist die größte religiöse Struktur der Welt und war ursprünglich ein hinduistischer Tempel.',
                image: 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?w=600',
            },
            {
                id: 10,
                question: 'Wo befindet sich die Akropolis?',
                options: ['Rom', 'Istanbul', 'Athen', 'Alexandria'],
                correctAnswer: 2,
                explanation: 'Die Akropolis in Athen ist ein antiker Burgberg mit dem berühmten Parthenon-Tempel aus dem 5. Jahrhundert v. Chr.',
                image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600',
            },
        ],
    },
    {
        id: 'travel',
        name: 'Reisetipps & Praktisches',
        icon: '✈️',
        description: 'Praktisches Wissen für unterwegs - von Währungen bis Zeitverschiebung',
        color: '#F59E0B',
        questions: [
            {
                id: 1,
                question: 'Welche Währung wird in Japan verwendet?',
                options: ['Yuan', 'Won', 'Yen', 'Baht'],
                correctAnswer: 2,
                explanation: 'Der Japanische Yen (¥) ist die Währung Japans. 1 Euro entspricht etwa 160 Yen.',
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',
            },
            {
                id: 2,
                question: 'Auf welcher Straßenseite fährt man in Großbritannien?',
                options: ['Rechts', 'Links', 'Beides erlaubt', 'In der Mitte'],
                correctAnswer: 1,
                explanation: 'In Großbritannien, Australien, Japan und etwa 75 weiteren Ländern herrscht Linksverkehr.',
                image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600',
            },
            {
                id: 3,
                question: 'Wie viele Stunden beträgt die Zeitverschiebung zwischen Berlin und New York?',
                options: ['4 Stunden', '5 Stunden', '6 Stunden', '7 Stunden'],
                correctAnswer: 2,
                explanation: 'New York liegt 6 Stunden hinter Berlin (Eastern Time Zone). Wenn es in Berlin 18:00 Uhr ist, ist es in New York 12:00 Uhr.',
                image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600',
            },
            {
                id: 4,
                question: 'Welches Dokument benötigen EU-Bürger für Reisen innerhalb der EU?',
                options: ['Reisepass', 'Visum', 'Personalausweis', 'Führerschein'],
                correctAnswer: 2,
                explanation: 'EU-Bürger können mit einem gültigen Personalausweis innerhalb der EU reisen. Ein Reisepass ist nicht erforderlich.',
                image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600',
            },
            {
                id: 5,
                question: 'Was ist ein Layover?',
                options: ['Direktflug', 'Zwischenstopp', 'Verspätung', 'Umbuchung'],
                correctAnswer: 1,
                explanation: 'Ein Layover ist ein Zwischenstopp bei einem Flug, bei dem man das Flugzeug wechselt.',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600',
            },
            {
                id: 6,
                question: 'In welchem Land gibt man typischerweise KEIN Trinkgeld?',
                options: ['USA', 'Deutschland', 'Japan', 'Italien'],
                correctAnswer: 2,
                explanation: 'In Japan ist Trinkgeld unüblich und kann sogar als beleidigend empfunden werden. Service ist im Preis inbegriffen.',
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',
            },
            {
                id: 7,
                question: 'Was bedeutet "All-Inclusive" bei einer Reise?',
                options: ['Nur Unterkunft', 'Unterkunft und Frühstück', 'Alle Mahlzeiten und Getränke', 'Nur Flug'],
                correctAnswer: 2,
                explanation: 'All-Inclusive bedeutet, dass Unterkunft, alle Mahlzeiten, Getränke und oft auch Aktivitäten im Preis enthalten sind.',
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600',
            },
            {
                id: 8,
                question: 'Welcher Steckertyp wird in den USA verwendet?',
                options: ['Typ A/B', 'Typ C', 'Typ G', 'Typ I'],
                correctAnswer: 0,
                explanation: 'In den USA werden Stecker vom Typ A (zweipolig) und B (dreipolig) mit 120V verwendet. Europäische Geräte benötigen einen Adapter.',
                image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600',
            },
            {
                id: 9,
                question: 'Was ist die beste Zeit für einen Flug, um Jetlag zu minimieren?',
                options: ['Früh morgens', 'Mittags', 'Abends', 'Nachts'],
                correctAnswer: 2,
                explanation: 'Abendflüge ermöglichen es, während des Fluges zu schlafen und erholt am Ziel anzukommen.',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600',
            },
            {
                id: 10,
                question: 'Welches Land hat die strengsten Zollvorschriften für Lebensmittel?',
                options: ['USA', 'Australien', 'Kanada', 'Großbritannien'],
                correctAnswer: 1,
                explanation: 'Australien hat sehr strenge Biosecurity-Gesetze. Lebensmittel müssen deklariert werden, andernfalls drohen hohe Strafen.',
                image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',
            },
        ],
    },
];

export default function TravelQuiz() {
    const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [quizComplete, setQuizComplete] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCategorySelect = (category: QuizCategory) => {
        setSelectedCategory(category);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setQuizComplete(false);
    };

    const handleAnswer = (answerIndex: number) => {
        if (selectedAnswer !== null || !selectedCategory) return;
        setSelectedAnswer(answerIndex);
        setShowExplanation(true);

        if (answerIndex === selectedCategory.questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (!selectedCategory) return;

        if (currentQuestion < selectedCategory.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setQuizComplete(true);
        }
    };

    const resetQuiz = () => {
        setSelectedCategory(null);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setQuizComplete(false);
    };

    const getScoreMessage = () => {
        const percentage = (score / 10) * 100;
        if (percentage >= 90) return { emoji: '🏆', text: 'Hervorragend! Du bist ein wahrer Reise-Experte!' };
        if (percentage >= 70) return { emoji: '🌟', text: 'Sehr gut! Du kennst dich bestens aus!' };
        if (percentage >= 50) return { emoji: '👍', text: 'Gut gemacht! Du hast solides Reisewissen!' };
        return { emoji: '📚', text: 'Weiter üben! Jede Reise beginnt mit dem ersten Schritt.' };
    };

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section
                style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(139, 92, 246, 0.9)), url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600) center/cover',
                    padding: 'var(--spacing-3xl) 0',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: 'var(--spacing-md)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        🧠 Reise-Quiz
                    </h1>
                    <p style={{ fontSize: 'var(--font-size-xl)', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Teste dein Wissen und entdecke, wie gut du dich auf der Welt auskennst!
                    </p>
                </div>
            </section>

            <section className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)', maxWidth: '900px' }}>

                {/* Category Selection */}
                {!selectedCategory && (
                    <div>
                        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Wähle eine Kategorie</h2>
                        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                            {quizCategories.map((category) => (
                                <div
                                    key={category.id}
                                    onClick={() => handleCategorySelect(category)}
                                    style={{
                                        background: 'white',
                                        borderRadius: 'var(--radius-xl)',
                                        padding: 'var(--spacing-xl)',
                                        boxShadow: 'var(--shadow-md)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-lg)',
                                        borderLeft: `6px solid ${category.color}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateX(10px)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateX(0)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                    }}
                                >
                                    <div style={{
                                        fontSize: '3rem',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: `${category.color}20`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        {category.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginBottom: 'var(--spacing-xs)', color: category.color }}>{category.name}</h3>
                                        <p style={{ color: 'var(--color-text-medium)', marginBottom: 'var(--spacing-xs)' }}>
                                            {category.description}
                                        </p>
                                        <span className="badge badge-neutral">10 Fragen</span>
                                    </div>
                                    <div style={{ fontSize: '1.5rem', color: category.color }}>→</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Quiz in Progress */}
                {selectedCategory && !quizComplete && (
                    <div>
                        {/* Progress */}
                        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
                                <span style={{ color: selectedCategory.color, fontWeight: 600 }}>
                                    {selectedCategory.icon} {selectedCategory.name}
                                </span>
                                <span>Frage {currentQuestion + 1} von {selectedCategory.questions.length}</span>
                            </div>
                            <div style={{
                                height: '8px',
                                background: 'var(--color-bg-secondary)',
                                borderRadius: 'var(--radius-full)',
                                overflow: 'hidden',
                            }}>
                                <div style={{
                                    height: '100%',
                                    width: `${((currentQuestion + 1) / selectedCategory.questions.length) * 100}%`,
                                    background: `linear-gradient(90deg, ${selectedCategory.color}, ${selectedCategory.color}88)`,
                                    transition: 'width 0.3s ease',
                                }} />
                            </div>
                        </div>

                        {/* Question Card */}
                        <div style={{
                            background: 'white',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--shadow-lg)',
                            overflow: 'hidden',
                        }}>
                            {selectedCategory.questions[currentQuestion].image && (
                                <img
                                    src={selectedCategory.questions[currentQuestion].image}
                                    alt="Question"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                            )}

                            <div style={{ padding: 'var(--spacing-xl)' }}>
                                <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>
                                    {selectedCategory.questions[currentQuestion].question}
                                </h3>

                                <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                                    {selectedCategory.questions[currentQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswer(index)}
                                            disabled={selectedAnswer !== null}
                                            style={{
                                                padding: 'var(--spacing-md) var(--spacing-lg)',
                                                borderRadius: 'var(--radius-lg)',
                                                border: '2px solid',
                                                borderColor: selectedAnswer === null
                                                    ? 'var(--color-bg-secondary)'
                                                    : index === selectedCategory.questions[currentQuestion].correctAnswer
                                                        ? '#10B981'
                                                        : selectedAnswer === index
                                                            ? '#EF4444'
                                                            : 'var(--color-bg-secondary)',
                                                background: selectedAnswer === null
                                                    ? 'white'
                                                    : index === selectedCategory.questions[currentQuestion].correctAnswer
                                                        ? 'rgba(16, 185, 129, 0.1)'
                                                        : selectedAnswer === index
                                                            ? 'rgba(239, 68, 68, 0.1)'
                                                            : 'white',
                                                cursor: selectedAnswer === null ? 'pointer' : 'default',
                                                textAlign: 'left',
                                                fontWeight: 500,
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            {option}
                                            {selectedAnswer !== null && index === selectedCategory.questions[currentQuestion].correctAnswer && ' ✓'}
                                            {selectedAnswer === index && index !== selectedCategory.questions[currentQuestion].correctAnswer && ' ✗'}
                                        </button>
                                    ))}
                                </div>

                                {/* Explanation */}
                                {showExplanation && (
                                    <div style={{
                                        marginTop: 'var(--spacing-lg)',
                                        padding: 'var(--spacing-md)',
                                        background: 'var(--color-bg-secondary)',
                                        borderRadius: 'var(--radius-md)',
                                        borderLeft: `4px solid ${selectedCategory.color}`,
                                    }}>
                                        <p style={{ marginBottom: 0 }}>
                                            <strong>💡</strong> {selectedCategory.questions[currentQuestion].explanation}
                                        </p>
                                    </div>
                                )}

                                {/* Next Button */}
                                {selectedAnswer !== null && (
                                    <button
                                        onClick={nextQuestion}
                                        className="btn btn-primary"
                                        style={{ marginTop: 'var(--spacing-lg)', width: '100%' }}
                                    >
                                        {currentQuestion < selectedCategory.questions.length - 1 ? 'Nächste Frage →' : 'Ergebnis anzeigen'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Quiz Complete - Results */}
                {quizComplete && selectedCategory && (
                    <div style={{
                        background: 'white',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-lg)',
                        padding: 'var(--spacing-2xl)',
                        textAlign: 'center',
                    }}>
                        <div style={{ fontSize: '5rem', marginBottom: 'var(--spacing-lg)' }}>
                            {getScoreMessage().emoji}
                        </div>

                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                            {getScoreMessage().text}
                        </h2>

                        <div style={{
                            fontSize: 'var(--font-size-3xl)',
                            fontWeight: 700,
                            color: selectedCategory.color,
                            marginBottom: 'var(--spacing-lg)',
                        }}>
                            {score} / 10
                        </div>

                        <p style={{ color: 'var(--color-text-medium)', marginBottom: 'var(--spacing-xl)' }}>
                            Du hast {score} von 10 Fragen in der Kategorie "{selectedCategory.name}" richtig beantwortet.
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => handleCategorySelect(selectedCategory)}
                                className="btn"
                                style={{ background: selectedCategory.color, color: 'white' }}
                            >
                                🔄 Nochmal spielen
                            </button>
                            <button
                                onClick={resetQuiz}
                                className="btn btn-secondary"
                            >
                                📚 Andere Kategorie
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}
