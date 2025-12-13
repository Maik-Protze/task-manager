-- CreateTable
CREATE TABLE "CarRental" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "fuel" TEXT NOT NULL,
    "pricePerDay" REAL NOT NULL,
    "seats" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "features" TEXT,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "CarBooking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carId" INTEGER NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "totalPrice" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CarBooking_carId_fkey" FOREIGN KEY ("carId") REFERENCES "CarRental" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TravelAlert" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "safetyLevel" TEXT NOT NULL,
    "riskScore" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "warnings" TEXT,
    "lastUpdated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT
);

-- CreateTable
CREATE TABLE "Adventure" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "elevation" INTEGER,
    "duration" TEXT NOT NULL,
    "bestSeason" TEXT NOT NULL,
    "equipment" TEXT,
    "tips" TEXT,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "routeProfile" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TripPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "destination" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "budget" REAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "travelType" TEXT NOT NULL,
    "totalCost" REAL NOT NULL,
    "itinerary" TEXT NOT NULL,
    "activities" TEXT NOT NULL,
    "safetyLevel" TEXT NOT NULL,
    "weather" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DestinationData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "avgDailyCost" REAL NOT NULL,
    "safetyLevel" TEXT NOT NULL,
    "bestMonths" TEXT NOT NULL,
    "activities" TEXT NOT NULL,
    "transport" TEXT NOT NULL,
    "hotelPriceRange" TEXT NOT NULL,
    "touristLevel" TEXT NOT NULL,
    "pros" TEXT NOT NULL,
    "cons" TEXT NOT NULL,
    "imageUrl" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "TravelAlert_country_key" ON "TravelAlert"("country");

-- CreateIndex
CREATE UNIQUE INDEX "DestinationData_country_key" ON "DestinationData"("country");
