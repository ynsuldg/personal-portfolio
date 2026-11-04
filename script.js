const menuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");
const logoLink = document.querySelector(".logo");
const headerMenuToggle = document.querySelector(".header-menu-toggle");
const headerUtilities = document.querySelector(".nav-utilities");

logoLink.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth"
    });
});

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    if (isOpen) {
        setLanguageMenuOpen(false);
    }
    navLinks.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

function setLanguageMenuOpen(isOpen) {
    if (isOpen) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    }
    headerUtilities.classList.toggle("is-open", isOpen);
    headerMenuToggle.classList.toggle("is-open", isOpen);
    headerMenuToggle.setAttribute("aria-expanded", String(isOpen));
}

headerMenuToggle.addEventListener("click", () => {
    setLanguageMenuOpen(
        headerMenuToggle.getAttribute("aria-expanded") !== "true"
    );
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        setLanguageMenuOpen(false);
    }
});

document.addEventListener("click", (event) => {
    if (
        headerMenuToggle.getAttribute("aria-expanded") === "true" &&
        !headerUtilities.contains(event.target) &&
        !headerMenuToggle.contains(event.target)
    ) {
        setLanguageMenuOpen(false);
    }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

const translations = {
    sv: {
        "Yunus Uludag | Java Developer Student": "Yunus Uludag | Studerande till Javautvecklare",

        "About me": "Om mig",
        "Education": "Utbildning",
        "Skills": "Kompetenser",
        "Projects": "Projekt",
        "Experience": "Erfarenhet",
        "FAQ": "Vanliga frågor",
        "Cover letter": "Personligt brev",
        "Contact": "Kontakt",

        portfolioLastUpdated: "Senast uppdaterad: 4 november 2026",

        "Java Developer Student": "Studerande till Javautvecklare",
        "Hi, my name is": "Hej, jag heter",

        "I am looking for an internship (LIA) starting November 9, 2026 (week 46), where I can apply my knowledge, contribute to development projects and continue growing as a developer.":
            "Jag söker en LIA-plats med start den 9 november 2026 (vecka 46), där jag kan omsätta mina kunskaper i praktiken, bidra i utvecklingsprojekt och fortsätta växa som utvecklare.",

        "View projects": "Se projekt",
        "Contact me": "Kontakta mig",
        "Profile": "Profil",

        "I am 33 years old, based in Stockholm and studying to become a Java developer. I am looking for opportunities to further develop my practical skills in programming and software development.":
            "Jag är 33 år, bosatt i Stockholm och studerar till Javautvecklare. Jag söker möjlighet att praktiskt utvecklas vidare inom programmering och systemutveckling.",

        "I am curious, committed and eager to learn more by working on real projects and in team environments.":
            "Jag är nyfiken, engagerad och vill lära mig mer genom att arbeta i verkliga projekt och teammiljöer.",

        "2025 08 25 – 2027 06 04 (Ongoing)":
            "2025 08 25 – 2027 06 04 (Pågående)",

        "Java Developer": "Javautvecklare",
        "Java Programming": "Java-programmering",
        "Database Development": "Utveckling mot databaser",
        "Java Tools and Build Environments": "Javaverktyg och byggmiljöer",
        "Enterprise Java Development": "Komplex Java-programmering",
        "Web Services and Integrations": "Web services och integrationer",
        "Web Application Development": "Utveckling av webbapplikationer",
        "Agile Development": "Agil utveckling",
        "LIA Internship": "LIA-praktik",
        "Degree Project": "Examensarbete",

        "Security Guard Training": "Totalvaktutbildning",
        "Expandable Baton": "Expanderbar batong",
        "PYT (160 hours)": "PYT (160 timmar)",

        "Automotive Technology": "Fordonsteknik",
        "STFG (Upper Secondary School)": "STFG (Gymnasium)",
        "Passenger Vehicle Technology": "Personbilsteknik",
        "Individual Electives": "Individuellt val",
        "Forklift Operator Certificate A, B and D": "Truckförarbevis A, B och D",
        "MIG / MAG & TIG Welding": "MIG / MAG & TIG-svetsning",

        "Development": "Utveckling",
        "Development Tools": "Utvecklingsverktyg",
        "Testing": "Testning",
        "Playwright / End-to-End Testing": "Playwright / End-to-End-testning",
        "DevOps & Deployment": "DevOps & Driftsättning",

        "Private Projects": "Privata projekt",
        "School Projects": "Skolprojekt",

        "Football Club Platform": "Football Club Platform",

        footballClubPlatformLastUpdated: "Senast uppdaterad: 26 oktober 2026",

        "Full-stack football tournament platform where clubs organise tournaments from registration to final: categories with age-based game formats, groups by skill level, venues, referees, group and playoff fixtures, results and automatic standings.":
            "Fullstackplattform för fotbollsturneringar där klubbar arrangerar turneringar från anmälan till final: kategorier med åldersbaserade spelformer, grupper efter nivå, spelplatser, domare, grupp- och slutspelsmatcher, resultat och automatiska tabeller.",

        "Built with secure account-free team links for squads and match line-ups, automatic playoff progression, formation-based line-ups and substitutions, two-factor authentication, email notifications, multilingual support, light/dark themes, automated tests, CI/CD and Docker. Paid access for tournament organisers and payment for team registrations are planned for a later launch.":
            "Utvecklad med säkra laglänkar utan konto för trupper och matchuppställningar, automatisk slutspelsprogression, formationsbaserade laguppställningar och byten, tvåfaktorsautentisering, e-postnotiser, flerspråksstöd, ljust och mörkt tema, automatiserade tester, CI/CD och Docker. Betalning för att arrangera turneringar och för laganmälningar planeras till en senare lansering.",

        "Smart Price Tracker": "Smart Price Tracker",

        smartPriceTrackerLastUpdated: "Senast uppdaterad: 19 augusti 2026",

        "Full-stack price-tracking application where users can monitor product URLs, set target prices, review price history and receive configurable email notifications when prices change or reach their targets.":
            "Fullstackapplikation för prisbevakning där användare kan bevaka produktlänkar, ange målpriser, följa prishistorik och få konfigurerbara e-postnotiser när priser förändras eller når sina mål.",

        "Built as an independently developed production-style service with secure account management, Google OAuth 2.0, two-factor authentication, subscription-ready Stripe integration, RabbitMQ-based notification processing, automated tests, CI/CD and an always-on Docker deployment on Render. The public Premium subscription is planned for a later launch.":
            "Utvecklad självständigt som en produktionsliknande tjänst med säker kontohantering, Google OAuth 2.0, tvåfaktorsautentisering, prenumerationsförberedd Stripe-integration, RabbitMQ-baserad notifikationshantering, automatiserade tester, CI/CD och en ständigt aktiv Docker-driftsättning på Render. Den publika Premium-prenumerationen planeras för en senare lansering.",

        "Paused": "Pausad",
        "Not deployed": "Ej driftsatt",

        "Group Work": "Grupparbete",

        "Individual Work": "Individuellt arbete",

        "Group Work + Individual Extension":
            "Grupparbete + individuellt vidarearbete",

        "Project": "Projekt",

        "Lab Assignment": "Laboration",

        "In development": "Under utveckling",

        "Private": "Privat",

        "Course 7: Agile Development":
            "Kurs 7: Agil utveckling, 20 yhp",

        "Course 6: Web Application Development":
            "Kurs 6: Utveckling av webbapplikationer, 45 yhp",

        "Course 5: Web Services and Integrations":
            "Kurs 5: Web services och integrationer, 30 yhp",

        "Course 4: Enterprise Java Development":
            "Kurs 4: Komplex Java-programmering, 40 yhp",

        "Course 3: Java Tools and Build Environments":
            "Kurs 3: Javaverktyg och byggmiljöer, 30 yhp",

        "Course 2: Database Development":
            "Kurs 2: Utveckling mot databaser, 35 yhp",

        "Course 1: Java Programming":
            "Kurs 1: Java-programmering, 60 yhp",

        "Agile Webshop – React Frontend":
            "Agil webshop – React-frontend",

        "Completed in a team of three, this webshop combines a React and TypeScript frontend with Spring Boot microservices through an API gateway. Features include JWT authentication, a searchable product catalog, category filters, a shopping cart and role-based product administration. The frontend and backend services were deployed on Render using Docker images.":
            "Webshop färdigställd i en grupp om tre personer, med en frontend i React och TypeScript som ansluter till mikrotjänster i Spring Boot via en API-gateway. Funktionerna omfattar JWT-autentisering, sökbar produktkatalog, kategorifilter, kundvagn och rollbaserad produktadministration. Frontend och backendtjänsterna driftsattes på Render med Docker-images.",

        "My contributions included product views and creation, category filtering, gateway endpoints, MSW integration tests and backend documentation. We worked in Scrum sprints with Trello, pull requests, code reviews and Docker-based CI/CD. I also maintained an individual log for each sprint, documenting my contributions, challenges and reflections on our agile workflow.":
            "Mina bidrag omfattade produktvyer och skapande av produkter, kategorifiltrering, gateway-endpoints, integrationstester med MSW och backenddokumentation. Vi arbetade i Scrum-sprintar med Trello, pull requests, kodgranskning och Docker-baserad CI/CD. Jag förde även en individuell loggbok för varje sprint där jag dokumenterade mina bidrag, utmaningar och reflektioner kring vårt agila arbetssätt.",

        "As an independent extension, I added a Stripe payment microservice with test Checkout, verified webhooks and order status updates. I also implemented account creation and deletion flows, a demo password reset flow and service status pages with links to the frontend, along with updated README files and Javadoc.":
            "Som en individuell vidareutveckling lade jag till en mikrotjänst för Stripe-betalningar med Checkout i testmiljö, verifierade webhooks och uppdatering av orderstatus. Jag implementerade även flöden för att skapa och radera konton, ett demo-flöde för lösenordsåterställning och statusvyer med länkar till frontend samt uppdaterade README-filer och Javadoc.",

        "GitHub repositories": "GitHub-repon",

        "Live services": "Driftsatta tjänster",

        "This is a school project created for educational and demonstration purposes. Payments are processed only in Stripe's test environment.":
            "Detta är ett skolprojekt för utbildnings- och demonstrationssyfte. Betalningar hanteras endast i Stripes testmiljö.",

        "For a test purchase, use Stripe's test card number":
            "Använd Stripes testkortsnummer vid ett testköp",

        ". The remaining fields can contain test values, for example 12/34, 123 and Name Lastname. Read more in the":
            ". Övriga fält kan fyllas med testvärden, exempelvis 12/34, 123 och Name Lastname. Läs mer i repots",

        "repository README": "README-fil",

        "The README file is only available in Swedish.":
            "README-filen är endast tillgänglig på svenska.",

        "The services run on Render's free tier and may therefore take a little while to wake up. Open the services above and wait until their status pages confirm that startup is complete before testing the application.":
            "Tjänsterna körs på Renders kostnadsfria nivå och kan därför ta en liten stund att starta. Öppna tjänsterna ovan och invänta att statussidorna bekräftar att uppstarten är klar innan applikationen testas.",

        "Email delivery is unavailable on the free tier, so email confirmations are not sent.":
            "E-postutskick fungerar inte på gratisnivån och därför skickas inga mejlbekräftelser.",

        "Flows for creating and deleting accounts are now available, along with a demo password reset flow.":
            "Det finns nu flöden för att skapa och radera konto samt ett demo-flöde för lösenordsåterställning.",

        "Full-stack task board developed with React, TypeScript and Tailwind CSS. The application displays tasks in Todo, Doing and Done columns, supports real-time search and provides a separate form for creating new tasks.":
            "Fullstackapplikation för uppgiftshantering utvecklad med React, TypeScript och Tailwind CSS. Applikationen visar uppgifter i kolumnerna Todo, Doing och Done, har realtidssökning och erbjuder ett separat formulär för att skapa nya uppgifter.",

        "Tasks are loaded and created through a Node.js and Express REST API, with persistent storage in Neon PostgreSQL. React Router provides separate views for the task board and form, while Vitest and React Testing Library are used for component testing.":
            "Tasks hämtas och skapas via ett REST API byggt med Node.js och Express, med beständig lagring i Neon PostgreSQL. React Router ger separata vyer för task board och formulär, medan Vitest och React Testing Library används för komponenttestning.",

        "Responsive Webshop":
            "Responsiv webshop",

        "Responsive webshop developed with semantic HTML, CSS and JavaScript. The website includes a product catalog, featured products, a shopping cart, accessible forms and media content, with layouts adapted for desktop, tablet and mobile devices.":
            "Responsiv webshop utvecklad med semantisk HTML, CSS och JavaScript. Webbplatsen innehåller en produktkatalog, utvalda produkter, en varukorg, tillgängliga formulär och medieinnehåll samt layouter anpassade för dator, surfplatta och mobil.",

        "Product data is loaded asynchronously from a JSON file using the Fetch API and rendered dynamically. The project also focuses on accessibility through descriptive alternative text, keyboard-visible focus indicators and WCAG-compliant color contrast.":
            "Produktdata hämtas asynkront från en JSON-fil med Fetch API och renderas dynamiskt. Projektet fokuserar även på tillgänglighet genom beskrivande alternativtexter, tydliga fokusmarkeringar för tangentbordsnavigering och färgkontraster som följer WCAG.",

        "Microservices Webshop":
            "Webshop med mikrotjänster",

        "Backend for a webshop built with a microservices architecture. The system consists of an Auth Server, Product Service, Order Service and Email Service. Communication is handled through REST and RabbitMQ, JWT is used for authentication, and PostgreSQL is used for data storage.":
            "Backend till en webshop byggd med mikrotjänstarkitektur. Systemet består av Auth-server, Product-service, Order-service och Email-service. Kommunikation sker via REST och RabbitMQ, JWT används för autentisering och PostgreSQL används för lagring.",

        "My main responsibility was the Order Service, where I worked with order logic, communication with the Product Service, JWT forwarding and RabbitMQ integration.":
            "Mitt huvudansvar var Order-service där jag arbetade med orderlogik, kommunikation mot Product-service, JWT-vidarebefordran och RabbitMQ-integration.",

        "Google Gemini AI Integration":
            "Google Gemini AI-integration",

        "Web application developed with Spring Boot and integrated with Google Gemini through a REST API. Users can ask questions through a web interface and receive AI-generated responses in real time.":
            "Webbapplikation utvecklad med Spring Boot och integrerad mot Google Gemini via ett REST API. Användaren kan ställa frågor genom ett webbgränssnitt och få AI-genererade svar i realtid.",

        "The solution uses Thymeleaf for the frontend, PostgreSQL for data storage and Spring Data JPA for database access. Each question and answer is stored in the database and displayed in a history view. The Gemini integration was implemented manually using HTTP requests and JSON data to gain a deeper understanding of API communication and external services.":
            "Lösningen använder Thymeleaf för frontend, PostgreSQL för datalagring och Spring Data JPA för databasåtkomst. Varje fråga och svar sparas i databasen och visas i en historikvy. Integrationen mot Gemini implementerades manuellt med HTTP-anrop och JSON-data för att ge en djupare förståelse för API-kommunikation och externa tjänster.",

        "Two-Factor Authentication with an Authenticator App":
            "Tvåfaktorsautentisering med Authenticator-app",

        "A standalone project where I built a secure login flow with Spring Boot and Spring Security. Users can register, choose whether to enable two-factor authentication, and then sign in using a password and a time-based code from Microsoft Authenticator or Google Authenticator.":
            "Separat projekt där jag byggde ett säkert inloggningsflöde med Spring Boot och Spring Security. Användaren kan registrera sig, välja om tvåfaktorsautentisering ska aktiveras och därefter logga in med lösenord samt en tidsbaserad kod från Microsoft Authenticator eller Google Authenticator.",

        "The project generates a secret key that is stored in PostgreSQL and embedded in a QR code that can be scanned by an authenticator app. Protected pages require both a successful login and a verified MFA code.":
            "Projektet genererar en hemlig nyckel som sparas i PostgreSQL och bäddas in i en QR-kod som kan skannas av en authenticator-app. Skyddade sidor kräver både lyckad inloggning och verifierad MFA-kod.",

        "Secure Webshop": "Säker webshop",

        "Secure webshop built with Spring Boot. The system includes registration, login, product catalog, shopping cart, order management, profile page, GDPR-compliant cookie handling and administrator functions. Order confirmations are sent through a separate Message Service responsible for email delivery.":
            "Säker webshop med Spring Boot. Systemet innehåller registrering, inloggning, produktkatalog, kundvagn, orderhantering, profilsida, GDPR-anpassad cookiehantering och administratörsfunktioner. Orderbekräftelser skickas via en separat Message Service som ansvarar för e-postutskick.",

        "My main responsibility was the product area, where I worked with the Product entity, ProductRepository, ProductService, the product page, an admin function for creating products, and tests using both an H2 database and a mocked repository.":
            "Mitt huvudansvar var produktdelen där jag arbetade med Product-entity, ProductRepository, ProductService, produktsidan, adminfunktion för att skapa produkter samt tester mot både H2-databas och mockat repository.",

        "Real-Time Chat with Jakarta EE and WebSocket":
            "Realtidschatt med Jakarta EE och WebSocket",

        "Developed a web application with Jakarta EE where users can register accounts, log in and communicate in real time. The application uses JSF as the presentation layer, CDI for dependency injection, JPA for database management and PostgreSQL for storing user data.":
            "Utvecklade en webbapplikation med Jakarta EE där användare kan registrera konton, logga in och kommunicera i realtid. Applikationen använder JSF som presentationslager, CDI för dependency injection, JPA för databashantering och PostgreSQL för lagring av användaruppgifter.",

        "Implemented user registration, authentication and session management, and developed a separate WebSocket server that enables real-time communication between connected clients.":
            "Implementerade användarregistrering, autentisering och sessionshantering samt utvecklade en separat WebSocket-server som möjliggör realtidskommunikation genom att skicka meddelanden mellan anslutna klienter i realtid.",

        "JavaTools – CRUD System with Spring Boot":
            "JavaTools – CRUD-system med Spring Boot",

        "Team-developed web application built with Spring Boot for managing the Drink, Food, Pizza and Spirit resources. The application follows the MVC architecture and provides full CRUD functionality with Thymeleaf as the presentation layer and PostgreSQL (Neon) as the database. I containerized the application with Docker and was responsible for deployment on Render.":
            "Grupputvecklad webbapplikation byggd med Spring Boot för hantering av resurserna Drink, Food, Pizza och Spirit. Applikationen följer MVC-arkitektur och erbjuder full CRUD-funktionalitet med Thymeleaf som presentationslager och PostgreSQL (Neon) som databas. Jag Dockeriserade applikationen och ansvarade för driftsättning på Render.",

        "My main responsibility was developing the Drink module, where I implemented controller, service, repository and validation logic as well as custom exceptions.":
            "Mitt huvudansvar var utvecklingen av Drink-modulen där jag implementerade controller, service-, repository- och valideringslogik samt egna exceptions.",

        "As an individual extension, I implemented a Jenkins-based build process with Maven Wrapper, Logback-based logging and integration tests with Spring Boot, MockMvc and H2 to automate the build, testing and quality assurance process.":
            "Som individuellt vidarearbete implementerade jag en Jenkins-baserad byggprocess med Maven Wrapper, Logback-baserad loggning samt integrationstester med Spring Boot, MockMvc och H2 för att automatisera bygg-, test- och kvalitetssäkringsprocessen.",

        "ATM System – Spring Boot Application with Unit Testing and End-to-End Testing":
            "ATM System – Spring Boot-applikation med Unit Testing och End-to-End-testning",

        "Individual project developed with Spring Boot using a layered architecture (Controller, Service and Component) to simulate basic ATM functions such as deposits, withdrawals and balance management. The application uses Thymeleaf for presentation and implements custom error handling through custom exceptions for different business rules.":
            "Individuellt projekt utvecklat med Spring Boot enligt lagerbaserad arkitektur (Controller, Service och Component) för simulering av grundläggande bankomatsfunktioner såsom insättning, uttag och saldohantering. Applikationen använder Thymeleaf för presentation och implementerar anpassad felhantering genom egna exceptions för olika affärsregler.",

        "I implemented business logic for transaction validation, balance management and withdrawal limits. The project was complemented with extensive testing using JUnit 5 for unit tests, Mockito for isolated testing of the service layer and Playwright for end-to-end testing of the web interface. The tests verify both normal user flows and error handling to ensure that the application works correctly throughout the stack.":
            "Jag implementerade affärslogik för validering av transaktioner, saldohantering och begränsningar för uttag. Projektet kompletterades med omfattande testning där JUnit 5 användes för enhetstester, Mockito för isolerad testning av service-lagret samt Playwright för end-to-end-testning av webbgränssnittet. Tester verifierar både normala användarflöden och felhantering för att säkerställa att applikationen fungerar korrekt genom hela stacken.",

        "Group Project – Spring Boot MVC Application with Thymeleaf":
            "Gruppprojekt – Spring Boot MVC-applikation med Thymeleaf",

        "Team-developed web project built with Spring Boot and Thymeleaf according to the MVC architecture (Model–View–Controller). The application consists of several functional modules for managing and presenting users, people, appointments, ratings, tags, comments, tasks and queues through separate controllers, models and views.":
            "Grupputvecklat webbprojekt byggt med Spring Boot och Thymeleaf enligt MVC-arkitekturen (Model–View–Controller). Applikationen består av flera funktionella moduler för hantering och presentation av användare, personer, bokningar, betyg, taggar, kommentarer, uppgifter och köhantering genom separata controllers, modeller och vyer.",

        "I participated in developing backend logic and the web interface by implementing Spring MVC controllers, creating domain models and building dynamic Thymeleaf views. The project provided practical experience with routing, data transfer between controller and view, the use of model objects and structuring a Java-based web application according to established design principles.":
            "Jag deltog i utvecklingen av backend-logik och webbgränssnitt genom att implementera Spring MVC-controllers, skapa domänmodeller samt bygga dynamiska Thymeleaf-vyer. Projektet gav praktisk erfarenhet av routing, dataöverföring mellan controller och vy, användning av modellobjekt samt strukturering av en Java-baserad webbapplikation enligt etablerade designprinciper.",

        "Chat Application with Java and Spring Boot":
            "Chattapplikation med Java och Spring Boot",

        "Developed a client-server chat application where multiple users can connect simultaneously, register accounts, log in and send messages in real time. Communication between client and server takes place via Java Sockets, and the server handles multiple clients in parallel using multithreading.":
            "Utvecklade en klient-serverbaserad chattapplikation där flera användare kan ansluta samtidigt, registrera konton, logga in och skicka meddelanden i realtid. Kommunikation mellan klient och server sker via Java Sockets och servern hanterar flera klienter parallellt med hjälp av multitrådning.",

        "Implemented storage of users and message history with Spring Boot, Spring Data JPA and MySQL. The project follows a layered architecture with separate service, repository and domain layers and includes unit tests written with JUnit and Mockito.":
            "Implementerade lagring av användare och meddelandehistorik med Spring Boot, Spring Data JPA och MySQL. Projektet följer en lagerarkitektur med separata service-, repository- och domänlager samt innehåller enhetstester skrivna med JUnit och Mockito.",

        "Database Access with JDBC":
            "Databasåtkomst med JDBC",

        "Lab project focused on Java Database Connectivity (JDBC) and relational databases. Implemented a database connection to MySQL and functionality for storing and retrieving data using SQL queries.":
            "Laborationsprojekt med fokus på Java Database Connectivity (JDBC) och relationsdatabaser. Implementerade databasanslutning mot MySQL samt funktionalitet för att lagra och hämta data från databasen med hjälp av SQL-frågor.",

        "The project uses the DAO pattern to separate database logic from application logic and includes management of database connections, PreparedStatements and mapping between database tables and Java objects.":
            "Projektet använder DAO-mönstret för att separera databaslogik från applikationslogik och inkluderar hantering av databasanslutningar, PreparedStatements och mappning mellan databastabeller och Java-objekt.",

        "Database Modelling and SQL":
            "Databasmodellering och SQL",

        "Lab project focused on relational databases and SQL. Worked on creating databases and tables, defining primary and foreign keys and performing CRUD operations for data management.":
            "Laborationsprojekt med fokus på relationsdatabaser och SQL. Arbetade med att skapa databaser och tabeller, definiera primär- och främmande nycklar samt utföra CRUD-operationer för hantering av data.",

        "The project also included database normalization according to First Normal Form (1NF), modelling relationships between tables and using JOIN queries to retrieve related information from multiple tables.":
            "Projektet omfattade även databasnormalisering enligt första normalformen (1NF), modellering av relationer mellan tabeller samt användning av JOIN-frågor för att hämta relaterad information från flera tabeller.",

        "MongoDB and NoSQL Databases":
            "MongoDB och NoSQL-databaser",

        "Lab project focused on document-based databases and MongoDB. Implemented a DAO layer in Java to manage storing and retrieving data from a MongoDB database in the cloud (MongoDB Atlas).":
            "Laborationsprojekt med fokus på dokumentbaserade databaser och MongoDB. Implementerade ett DAO-lager i Java för att hantera lagring och hämtning av data från en MongoDB-databas i molnet (MongoDB Atlas).",

        "The project included CRUD operations, filtering, updating and deleting documents, as well as using the MongoDB Java Driver for communication between the application and database.":
            "Projektet omfattade CRUD-operationer, filtrering, uppdatering och borttagning av dokument samt användning av MongoDB Java Driver för kommunikation mellan applikation och databas.",

        "Text-Based Adventure Game":
            "Textbaserat äventyrsspel",

        "Individual extension of a text-based adventure game in Java based on a provided starter project. The game is built on object-oriented principles where the player explores different environments, fights enemies, collects items and develops their character.":
            "Individuell vidareutveckling av ett textbaserat äventyrsspel i Java utifrån ett tillhandahållet grundprojekt. Spelet bygger på objektorienterade principer där spelaren utforskar olika miljöer, bekämpar fiender, samlar föremål och utvecklar sin karaktär.",

        "Implemented new game areas, enemies and game mechanics as well as file-based storage of statistics using the DAO pattern, a leaderboard, the Builder Pattern for creating players and the Singleton Pattern for application configuration.":
            "Implementerade nya spelområden, fiender och spelmekaniker samt filbaserad lagring av statistik med DAO-mönstret, topplista, Builder Pattern för skapande av spelare och Singleton Pattern för applikationskonfiguration.",

        "Console-Based Webshop":
            "Konsolbaserad webshop",

        "Developed a console-based webshop in Java where users can create, search for and view products. The application uses object-oriented design with inheritance, abstract classes and polymorphism to handle different product types.":
            "Utvecklade en konsolbaserad webshop i Java där användaren kan skapa, söka och visa produkter. Applikationen använder objektorienterad design med arv, abstrakta klasser och polymorfism för att hantera olika produkttyper.",

        "Implemented file-based storage through serialization to save and load products between runs, as well as support for both console-based and dialog-based user interfaces through a common interface.":
            "Implementerade filbaserad lagring genom serialisering för att spara och läsa in produkter mellan körningar samt stöd för både konsolbaserat och dialogbaserat användargränssnitt via ett gemensamt interface.",

        "Basic Java – Methods and Arrays":
            "Grundläggande Java – Metoder och arrayer",

        "One of the first lab assignments in the program, focused on fundamental Java programming. The assignment involved working with methods, arrays, loops, parameters and return values to build an understanding of the language's fundamental constructs.":
            "En av de första laborationerna under utbildningen med fokus på grundläggande Java-programmering. Uppgiften omfattade arbete med metoder, arrayer, loopar, parametrar och returvärden för att bygga upp förståelse för språkets grundläggande konstruktioner.",

        "Implemented functions for printing arrays, finding the largest value and methods with parameters and return values. The project laid the foundation for later work with object-oriented programming.":
            "Implementerade funktioner för utskrift av arrayer, sökning efter största värde samt metoder med parametrar och returvärden. Projektet lade grunden för senare arbete med objektorienterad programmering.",

        "Open website": "Öppna webbplatsen",
        "View on GitHub": "Visa på GitHub",

        "Work Experience": "Arbetslivserfarenhet",
        "Role:": "Tjänst:",
        "Responsibilities:": "Uppgifter:",

        "Static security duties during both day and night shifts at a shopping center.":
            "Stationär tjänst dag och natt på ett köpcentrum.",

        "Locking and unlocking premises, responding to fire alarms, staff assistance, reporting, handling unusual incidents and crime prevention.":
            "Låsning, upplåsning, brandlarmsåtgärd, personalservice, rapportering, åtgärd av andra avvikande påträffanden samt brottsförebyggning.",

        "Static security duties during daytime at a larger site in Södertälje, primarily involving visitor reception, goods reception and vaccination reception during the peak period of Covid-19 vaccination.":
            "Stationär tjänst dagtid på ett större objekt i Södertälje, främst inom besöksmottagning, godsmottagning och vaccinationsmottagning under hög säsong för Covid-19 vaccination.",

        "Delivery checks and traffic guidance, access control, speed monitoring within the area, reporting, handling unusual incidents and crime prevention.":
            "Leveranskontroll och dirigering, behörighetskontroll, hastighetskontroll inom området, rapportering, åtgärd av andra avvikande påträffanden samt brottsförebyggning.",

        "Patrolling, alarm response and disturbance call-outs. Night shifts only.":
            "Rondering, larmutryckning samt störningsjour. Endast nattetid.",

        "Responding to intrusion alarms (motion detectors, magnetic contacts and glass-break detectors), camera alarms, fire alarms and panic alarms, as well as reporting and crime prevention.":
            "Åtgärd av inbrottslarm (rörelsedetektor, magnetkontakt, glaskrossdetektor), kameralarm, brandlarm, överfallslarm, rapportering samt brottsförebyggning m.m.",

        "Static security duties during both day and night shifts at sites such as Ica Maxi, retail areas and events.":
            "Stationär tjänst dag och natt på objekt som Ica Maxi, handelsplatser samt evenemang.",

        "Locking and unlocking premises and crime prevention.":
            "Låsning, upplåsning samt brottsförebyggning.",

        "Frequently asked questions": "Vanliga frågor",

        "When does your internship start?": "När börjar din LIA?",
        "My internship starts on November 9, 2026, in week 46.":
            "Min LIA börjar den 9 november 2026, vecka 46.",

        "How long is the internship period?": "Hur lång är praktikperioden?",
        "It runs continuously until week 22 of 2027, giving the company and me almost seven months of uninterrupted collaboration.":
            "Den pågår sammanhängande till vecka 22 år 2027, vilket ger företaget och mig nästan sju månaders samarbete utan avbrott.",

        "Are you only interested in Java?": "Är du endast intresserad av Java?",
        "No. Java is my main focus, but I am open to other programming languages, technologies and areas of software development.":
            "Nej. Java är mitt huvudsakliga fokus, men jag är öppen för andra programmeringsspråk, tekniker och områden inom systemutveckling.",

        "What can you contribute during the internship?": "Vad kan du bidra med under praktiken?",
        "I contribute practical programming experience, problem-solving, responsibility and collaboration, along with a strong motivation to learn and contribute to real projects.":
            "Jag bidrar med praktisk erfarenhet av programmering, problemlösning, ansvarstagande och samarbete samt en stark motivation att lära mig och bidra i verkliga projekt.",

        "How do you use AI in development?": "Hur använder du AI i utvecklingsarbetet?",
        "I use AI as a development tool for learning, research, problem-solving and efficiency. I review and verify its suggestions and remain responsible for understanding the code, its quality, security and the final result.":
            "Jag använder AI som ett utvecklingsverktyg för lärande, informationssökning, problemlösning och effektivitet. Jag granskar och verifierar förslagen och ansvarar själv för att förstå koden, dess kvalitet, säkerhet och slutresultat.",

        "Hello,": "Hej,",

        "My name is Yunus Uludag and I am studying to become a Java developer. I am currently looking for an internship (LIA) from week 46 of 2026 (November 9) to week 22 of 2027, where I can develop my practical skills and contribute to real projects and teams.":
            "Jag heter Yunus Uludag och studerar till Javautvecklare. Jag söker nu en LIA-plats från vecka 46 år 2026 (9 november) till vecka 22 år 2027, där jag kan utveckla mina praktiska kunskaper och bidra i verkliga projekt och team.",

        "One advantage of our internship period is that it runs continuously for almost seven months rather than being divided into two separate periods. This gives the company continuity while allowing me to become part of the team and contribute to ongoing projects.":
            "En fördel med vår LIA-period är att den pågår sammanhängande i nästan sju månader i stället för att delas upp i två separata perioder. Det ger företaget kontinuitet och mig tid att bli en del av teamet och bidra i pågående projekt.",

        "During my studies, I have worked extensively with practical programming and gained experience with Java, databases, Git and object-oriented programming. I am motivated by new projects that give me the opportunity to build on my knowledge.":
            "Under utbildningen har jag arbetat mycket praktiskt med programmering och fått erfarenhet av bland annat Java, databaser, Git och objektorienterad programmering. Jag motiveras av nya projekt som ger mig möjlighet att bygga vidare på mina kunskaper.",

        "I spend much of my free time developing my own products, which gives me the opportunity to turn ideas into practical solutions and continuously strengthen my skills. Outside development, I spend most of my remaining free time at the gym.":
            "En stor del av min fritid ägnar jag åt att utveckla egna produkter, vilket ger mig möjlighet att omvandla idéer till praktiska lösningar och kontinuerligt stärka mina kunskaper. När jag inte utvecklar spenderar jag större delen av min övriga fritid på gymmet.",

        "I also have experience with AI-based development tools such as OpenAI Codex and Claude Code, which I use to support programming, problem-solving and development. This has given me a practical understanding of how AI can be used as an effective tool in the development process.":
            "Jag har även erfarenhet av AI-baserade utvecklingsverktyg som OpenAI Codex och Claude Code, som jag använder som stöd vid programmering, problemlösning och utveckling. Det har gett mig en praktisk förståelse för hur AI kan användas som ett effektivt verktyg i utvecklingsprocessen.",

        "I am committed, responsible and easy to collaborate with. I also have a good sense of humor and enjoy contributing to a positive atmosphere in the team. Although my focus so far has been Java, I am open to learning other programming languages and technologies.":
            "Som person är jag engagerad, ansvarstagande och lätt att samarbeta med. Jag har också nära till humor och bidrar gärna till en positiv stämning i teamet. Även om mitt fokus hittills har varit Java är jag öppen för att lära mig andra programmeringsspråk och tekniker.",

        "Another advantage is that I am self-driven and manage well on my own, so I almost never need supervision. If the opportunity exists, I am happy to take charge of a new project. I am equally comfortable working remotely or on site, and I offer almost seven months of work at no cost to the company.":
            "En annan fördel är att jag är självgående och klarar mig bra på egen hand, så jag behöver nästan aldrig handledning. Om möjligheten finns tar jag gärna hand om ett nytt projekt. Jag arbetar lika gärna på distans som på plats och erbjuder nästan sju månaders arbete utan kostnad för företaget.",

        "For me, an internship is an important step in completing my education and at the same time an opportunity to grow as a developer, expand my network and contribute my drive and interest in programming.":
            "För mig är LIA ett viktigt steg mot att slutföra min utbildning och samtidigt en möjlighet att växa som utvecklare, utöka mitt kontaktnät och bidra med mitt driv och intresse för programmering.",

        "I look forward to hearing from you and having the opportunity to learn more about your organization and develop together with your team.":
            "Jag ser fram emot att höra från er och få möjligheten att lära känna verksamheten och utvecklas tillsammans med er.",

        "Kind regards,": "Med vänliga hälsningar,",

        "Contact Information": "Kontaktinformation",

        "All rights reserved.": "Alla rättigheter förbehållna."
    }
};

/*
 * Statustaggar för projektkorten. Lägg till data-project-status="live",
 * "paused", "offline" eller "not-deployed" på en .project-live-status i HTML.
 */
const projectStatuses = {
    live: "Live",
    paused: "Paused",
    offline: "Offline",
    "not-deployed": "Not deployed"
};

document.querySelectorAll("[data-project-status]").forEach((tag) => {
    const status = tag.dataset.projectStatus;
    const label = projectStatuses[status];

    if (!label) {
        return;
    }

    const dot = document.createElement("span");
    dot.className = "project-live-dot";
    dot.setAttribute("aria-hidden", "true");

    tag.classList.add(status);
    tag.replaceChildren(dot, label);
});

/*
 * Länkknappar för projektkorten. Lägg till data-live-url och/eller
 * data-repo-url på en .project-actions i HTML. Webbplatsknappen är
 * inaktiverad när länken saknas eller kortets status inte är "live".
 */
function createProjectButton(label, variant, url) {
    const button = document.createElement(url ? "a" : "span");
    button.className = `btn ${variant}`;
    button.textContent = label;

    if (url) {
        button.href = url;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
    } else {
        button.classList.add("disabled");
        button.setAttribute("aria-disabled", "true");
    }

    return button;
}

document.querySelectorAll(".project-actions").forEach((actions) => {
    const {liveUrl, repoUrl} = actions.dataset;
    const status = actions
        .closest(".project-card")
        ?.querySelector("[data-project-status]")
        ?.dataset.projectStatus;
    const buttons = [];

    if (liveUrl !== undefined) {
        const isLive = liveUrl && (!status || status === "live");
        buttons.push(createProjectButton("Open website", "primary", isLive ? liveUrl : null));
    }

    if (repoUrl) {
        buttons.push(createProjectButton("View on GitHub", "secondary", repoUrl));
    }

    actions.replaceChildren(...buttons);
});

const languageButtons = document.querySelectorAll(".language-option");
const textNodes = [];

function normalizeText(value) {
    return value.replace(/\s+/g, " ").trim();
}

function collectTextNodes(root) {
    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                const parent = node.parentElement;

                /*
                 * Teknik-taggarna längst ner i projektkorten översätts inte.
                 */
                if (
                    !parent ||
                    ["SCRIPT", "STYLE"].includes(parent.tagName) ||
                    parent.closest(".tags")
                ) {
                    return NodeFilter.FILTER_REJECT;
                }

                return normalizeText(node.nodeValue)
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT;
            }
        }
    );

    let node;

    while ((node = walker.nextNode())) {
        textNodes.push({
            node,
            original: node.nodeValue,
            key: node.parentElement?.dataset.i18nKey
                || normalizeText(node.nodeValue)
        });
    }
}

function replacePreservingOuterWhitespace(original, replacement) {
    const leading = original.match(/^\s*/)?.[0] ?? "";
    const trailing = original.match(/\s*$/)?.[0] ?? "";

    return `${leading}${replacement}${trailing}`;
}

function setLanguage(lang) {
    const dictionary = translations[lang] || {};

    textNodes.forEach(({node, original, key}) => {
        let replacement =
            lang === "en"
                ? normalizeText(original)
                : dictionary[key] || key;

        /*
         * "Education" används både som huvudrubrik och som sektionsetikett.
         * Sektionsetiketten ska vara "Utbildningar" på svenska.
         */
        if (
            lang === "sv" &&
            key === "Education" &&
            node.parentElement?.classList.contains("section-label") &&
            node.parentElement?.parentElement?.id === "education"
        ) {
            replacement = "Utbildningar";
        }

        node.nodeValue =
            replacePreservingOuterWhitespace(
                original,
                replacement
            );
    });

    document.documentElement.lang = lang;

    document.title =
        lang === "en"
            ? "Yunus Uludag | Java Developer Student"
            : dictionary["Yunus Uludag | Java Developer Student"]
            || document.title;

    const menuLabels = {
        en: "Open menu",
        sv: "Öppna meny"
    };

    menuToggle.setAttribute(
        "aria-label",
        menuLabels[lang]
    );

    const languageLabels = {
        en: "Language selection",
        sv: "Språkval"
    };

    document
        .querySelector(".language-switcher")
        ?.setAttribute(
            "aria-label",
            languageLabels[lang]
        );

    languageButtons.forEach((button) => {
        const isActive =
            button.dataset.lang === lang;

        button.classList.toggle(
            "language-option-active",
            isActive
        );

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });

    document.querySelector(".header-language-code").textContent = lang.toUpperCase();

    localStorage.setItem(
        "portfolio-language",
        lang
    );
}

collectTextNodes(document.body);

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});

const projectResourceMenus = document.querySelectorAll(".project-resource-menu");

projectResourceMenus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
        if (!menu.open) {
            return;
        }

        projectResourceMenus.forEach((otherMenu) => {
            if (otherMenu !== menu) {
                otherMenu.open = false;
            }
        });
    });
});

document.addEventListener("click", (event) => {
    if (event.target.closest(".project-resource-menus")) {
        return;
    }

    projectResourceMenus.forEach((menu) => {
        menu.open = false;
    });
});

const savedLanguage =
    localStorage.getItem(
        "portfolio-language"
    );

setLanguage(
    ["sv", "en"].includes(savedLanguage)
        ? savedLanguage
        : "en"
);
