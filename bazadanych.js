const db = {
    editions: [1, 2, 3], 
    hosts: { 1: "PL", 2: "RU", 3: "SE"}, 
    cities: { 1: "Gdańsk", 2: "Jekaterynburg", 3: "Malmö" }, 
    
    results: [
        // Edition 1
        { edition: 1, ro: 7, countryId: "PL", artist: "Sobel", song: "Za kogo mnie masz?", manager: "Sajmonn", semiPlace: "-", semiPoints: "-", place: 13, points: 76, youtube: "https://www.youtube.com/watch?v=rPSXipbz1gI", spotify: "https://open.spotify.com/track/2uWl1FzqmmA3hGdjlHp8mR?si=61dc018f2d8d4031", mp3: "edycja1/polska1.mp3", artistLink: "-" },
        { edition: 1, ro: 10, countryId: "US", artist: "Haute & Freddy", song: "Femme Hysteria", manager: "Calypso", semiPlace: "-", semiPoints: "-", place: 2, points: 128, youtube: "https://youtu.be/ZA9FdL5PP-k?si=1vI6B2ztg33DP1Jh", spotify: "https://open.spotify.com/track/2g8y30PtQ3jO7fR4wKQaOU?si=621504fd632a44d7", mp3: "edycja1/Stany1.mp3", artistLink: "-" },
        { edition: 1, ro: 28, countryId: "AL", artist: "Auron Deva", song: "M’nxen", manager: "Dravee", semiPlace: "-", semiPoints: "-", place: 4, points: 118, youtube: "https://youtu.be/1kqQcI6b52Y?si=z-AMZPQErsSarFKr", spotify: "https://open.spotify.com/track/42vDkERbtngaPrhlQfzsi2?si=33ae9ae05ecb46df", mp3: "edycja1/albania1.mp3", artistLink: "-" },
        { edition: 1, ro: 6, countryId: "FR", artist: "Zélie", song: "Je ne serai jamais", manager: "Somebody", semiPlace: "-", semiPoints: "-", place: 15, points: 66, youtube: "https://www.youtube.com/watch?v=77FsRoi3yqU", spotify: "https://open.spotify.com/track/7vdBAYpq0yZlntJ3zcWWHK?si=e7778a5d9cb04cac", mp3: "edycja1/francja1.mp3", artistLink: "-" },
        { edition: 1, ro: 12, countryId: "JP", artist: "Mili", song: "World.execute(me)", manager: "Shigaś", semiPlace: "-", semiPoints: "-", place: 10, points: 83, youtube: "https://youtu.be/ESx_hy1n7HA?si=6vHEqjFfv0Bx9q7L", spotify: "https://open.spotify.com/track/2aozlm4HfRx8yRYL7RCoAH?si=2954cde8e2084cc9", mp3: "edycja1/japonia1.mp3", artistLink: "-" },
        { edition: 1, ro: 2, countryId: "NO", artist: "Dagny", song: "C’est La Vie", manager: "Gilu", semiPlace: "-", semiPoints: "-", place: 14, points: 69, youtube: "https://youtu.be/yoeuRSFajlw?si=PfSN6tcJaNh9kDS4", spotify: "https://open.spotify.com/track/5WgxC5BmjNiFABxKeBWLCI?si=af67fd6c5b3145d6", mp3: "edycja1/norwegia1.mp3", artistLink: "-" },
        { edition: 1, ro: 21, countryId: "AU", artist: "Peach PRC", song: "Miss Erotica", manager: "Oscypek", semiPlace: "-", semiPoints: "-", place: 16, points: 62, youtube: "https://youtu.be/p2lLT-SkNmY?si=U8nYHKDQJv4lybil", spotify: "https://open.spotify.com/track/7CT8T6TX4XE9Udyve4NvDa?si=01988eca47024725", mp3: "edycja1/australia1.mp3", artistLink: "-" },
        { edition: 1, ro: 29, countryId: "PT", artist: "Sara Megre", song: "Viajo no Tempo", manager: "Solarkis", semiPlace: "-", semiPoints: "-", place: 11, points: 83, youtube: "https://youtu.be/5AMag3WCvpw?si=gvM_tobJKHMKjfdZ", spotify: "https://open.spotify.com/track/0Y5cD7tjUbuxpxJdbYlsdH?si=f56e9a06569345c5", mp3: "edycja1/portugalia1.mp3", artistLink: "-" },
        { edition: 1, ro: 5, countryId: "CO", artist: "Jessie Reyez i Elyanna", song: "Illuminate", manager: "Urban", semiPlace: "-", semiPoints: "-", place: 5, points: 102, youtube: "https://youtu.be/im0FLUw7wtY?si=T7ksgtvzKRoIPgOH", spotify: "https://open.spotify.com/track/2xSEiQBQ39xfUgj2KmeRET?si=2e1dcdaafeb74f7a", mp3: "edycja1/kolumbia1.mp3", artistLink: "-" },
        { edition: 1, ro: 3, countryId: "HU", artist: "Marics Peti", song: "Megcsalok Veled Akárkit", manager: "Modern", semiPlace: "-", semiPoints: "-", place: 17, points: 61, youtube: "https://www.youtube.com/watch?v=f3vpslLPLk0", spotify: "https://open.spotify.com/track/0ZQ5xI0kFUJG4BbC0FGoU9?si=f291d8ed49404cf6", mp3: "edycja1/wegry1.mp3", artistLink: "-" },
        { edition: 1, ro: 8, countryId: "CV", artist: "Max Felix", song: "Havregryn", manager: "Micheł", semiPlace: "-", semiPoints: "-", place: 9, points: 85, youtube: "https://www.youtube.com/watch?is=JDqJckc-NAwSJgze&v=WaYXdx93BNY&feature=youtu.be", spotify: "https://open.spotify.com/track/6jHj10H8FNMF6UtaWnrGna?si=cf5527ec63f4439c", mp3: "edycja1/Republikazp1.mp3", artistLink: "-" },
        { edition: 1, ro: 24, countryId: "ID", artist: "Knuckle Bones", song: "Duka", manager: "Tomek", semiPlace: "-", semiPoints: "-", place: 3, points: 122, youtube: "https://www.youtube.com/watch?is=_U3oemYWGfJsg-pI&v=pZSSbm7njHo&feature=youtu.be", spotify: "https://open.spotify.com/track/7yZXpYh4VgfIoBSmhd9YoG?si=b5d15fed91cb4968", mp3: "edycja1/indonezja1.mp3", artistLink: "-" },
        { edition: 1, ro: 20, countryId: "BG", artist: "Rushi", song: "Valk", manager: "Riku", semiPlace: "-", semiPoints: "-", place: 7, points: 96, youtube: "https://youtu.be/cyzijHZD5fU?si=RJS3IAOU0JFlRZIG", spotify: "https://open.spotify.com/track/2EzjzqYpKsDUa3ojeiGIMW?si=a73fc0ec47a6429b", mp3: "edycja1/bulgaria1.mp3", artistLink: "-" },
        { edition: 1, ro: 22, countryId: "BR", artist: "Nadia Lobkov", song: "Signs", manager: "Heks", semiPlace: "-", semiPoints: "-", place: 27, points: 18, youtube: "https://www.youtube.com/watch?v=HQYKGo4pW9g", spotify: "https://open.spotify.com/track/6WxhpP44NXDebEpa8QpSni?si=9656297af8624afa", mp3: "edycja1/brazylia1.mp3", artistLink: "-" },
        { edition: 1, ro: 16, countryId: "ST", artist: "Calema i Sara Correia", song: "Respirar", manager: "Laxero", semiPlace: "-", semiPoints: "-", place: 29, points: 14, youtube: "https://youtu.be/g4VqkkUqx4c?si=qETyAkVCFg2JGITE", spotify: "https://open.spotify.com/track/3Fwap1UvFz66uQUPfUqvZq?si=b5e3f6129e074deb", mp3: "edycja1/wyspyswietegotomaszaiksiazeca1.mp3", artistLink: "-" },
        { edition: 1, ro: 19, countryId: "AT", artist: "Glazed Curtans", song: "Show Me How It’s Done", manager: "Miczel", semiPlace: "-", semiPoints: "-", place: 20, points: 47, youtube: "https://www.youtube.com/watch?v=MHZNElVQbMg", spotify: "https://open.spotify.com/track/02fkXhxwlLFShptZoepXnT?si=ff85c0637f6144d2", mp3: "edycja1/austria1.mp3", artistLink: "-" },
        { edition: 1, ro: 26, countryId: "SI", artist: "Pia Nina", song: "Glasovi", manager: "Misza", semiPlace: "-", semiPoints: "-", place: 22, points: 40, youtube: "https://www.youtube.com/watch?v=etcOtMqT2XY", spotify: "https://open.spotify.com/track/0LkuoV9ULWsvGcO9IFCEI4?si=ba81114055174f91", mp3: "edycja1/slowenia1.mp3", artistLink: "-" },
        { edition: 1, ro: 27, countryId: "GR", artist: "Turboflow3000 i Kalliopi Mitropoulou", song: "Ola pseftika", manager: "Ant", semiPlace: "-", semiPoints: "-", place: 18, points: 54, youtube: "https://www.youtube.com/watch?v=feXTMeDc1Z4", spotify: "https://open.spotify.com/track/4DSjqZmPCxG0xW1N2xBkfs?si=b5ed4947b6254c42", mp3: "edycja1/grecja1.mp3", artistLink: "-" },
        { edition: 1, ro: 30, countryId: "UA", artist: "Strxw", song: "Infected", manager: "Lynn", semiPlace: "-", semiPoints: "-", place: 6, points: 98, youtube: "https://www.youtube.com/watch?v=tV2V-81L1HM", spotify: "https://open.spotify.com/track/6K2nYhuSDuJawpEBuIbVPT?si=b671f65640704f5d", mp3: "edycja1/ukraina1.mp3", artistLink: "-" },
        { edition: 1, ro: 13, countryId: "LT", artist: "Free Finga", song: "Liūdna", manager: "Kornik", semiPlace: "-", semiPoints: "-", place: 25, points: 33, youtube: "https://youtu.be/ToS3A1rJ4TE?si=3JRwyU8MHeeuuKC2", spotify: "https://open.spotify.com/track/65YpznM0TjseCOC9zJyLc2?si=f7a2649dffd04b9d", mp3: "edycja1/litwa1.mp3", artistLink: "-" },
        { edition: 1, ro: 23, countryId: "MT", artist: "Martina Cutajar", song: "Crying on the Dancefloor", manager: "Fox", semiPlace: "-", semiPoints: "-", place: 19, points: 50, youtube: "https://www.youtube.com/watch?v=QYfW1SkF_Ys", spotify: "https://open.spotify.com/track/2Lf5NCXoKvu4Tic6MfUsI4?si=b2f4454c91524e1a", mp3: "edycja1/malta1.mp3", artistLink: "-" },
        { edition: 1, ro: 17, countryId: "SK", artist: "Mark Dann, Giovanni Ricci", song: "Let Me Die", manager: "Vroblo", semiPlace: "-", semiPoints: "-", place: 8, points: 94, youtube: "https://www.youtube.com/watch?v=Nvr43yC0MJo", spotify: "https://open.spotify.com/track/5u4uE1cuvoieudzvQmprdb?si=9724e46f60a44518", mp3: "edycja1/slowacja1.mp3", artistLink: "-" },
        { edition: 1, ro: 18, countryId: "MK", artist: "Lune i Morpheuz", song: "Wegen dir", manager: "Jaruś", semiPlace: "-", semiPoints: "-", place: 30, points: 0, youtube: "https://www.youtube.com/watch?v=JhtvUSv_bLM", spotify: "https://open.spotify.com/track/49xD1utJYBqOFuGwyfWYDy?si=f622787e79fb4e61", mp3: "edycja1/macedonia1.mp3", artistLink: "-" },
        { edition: 1, ro: 25, countryId: "RU", artist: "Bearwolf", song: "Feniks", manager: "Pablitek", semiPlace: "-", semiPoints: "-", place: 1, points: 136, youtube: "https://youtu.be/eV7Spwn37Vc", spotify: "https://open.spotify.com/track/6mDSdHphOriAwkIZy8q9Oz?si=7c96f420f1ea484f", mp3: "edycja1/rosja1.mp3", artistLink: "-" },
        { edition: 1, ro: 4, countryId: "NG", artist: "Kemi Amos", song: "Run", manager: "Ziemniorek", semiPlace: "-", semiPoints: "-", place: 28, points: 17, youtube: "https://www.youtube.com/watch?v=40pQil7QQL4", spotify: "https://open.spotify.com/track/4tXf75rj58dE6VfeQmtFVf?si=014037f33fed4444", mp3: "edycja1/nigeria1.mp3", artistLink: "-" },
        { edition: 1, ro: 14, countryId: "HR", artist: "Selestia", song: "Zvjezdana Prašina", manager: "Grzesia", semiPlace: "-", semiPoints: "-", place: 23, points: 38, youtube: "https://www.youtube.com/watch?is=K6H1faFN2Ep_sAQ7&v=8dV27R4ZttA&feature=youtu.be", spotify: "https://open.spotify.com/track/5IwTHMzQ964m5n5pqiduz3?si=0c8bc9809115430d", mp3: "edycja1/chorwacja1.mp3", artistLink: "-" },
        { edition: 1, ro: 15, countryId: "TG", artist: "Le Belladone, Zéa Calla, Sloan Lucas i Fyore", song: "B*tch", manager: "Toniak", semiPlace: "-", semiPoints: "-", place: 26, points: 19, youtube: "https://m.youtube.com/watch?v=NscggbQYb20", spotify: "https://open.spotify.com/track/3LlBBlSBmtKwFkvTifFQwo?si=6d4656667d324df6", mp3: "edycja1/togo1.mp3", artistLink: "-" },
        { edition: 1, ro: 9, countryId: "NZ", artist: "Balu Brigada", song: "Backseat", manager: "Slimitch", semiPlace: "-", semiPoints: "-", place: 21, points: 45, youtube: "https://youtu.be/Jvv3cC6CamE?si=tA1aijVlAJnROhxY", spotify: "https://open.spotify.com/track/7yT4NJt5rgmVoMJMGPULcj?si=de21cecab00d42c8", mp3: "edycja1/nowazelandia1.mp3", artistLink: "-" },
        { edition: 1, ro: 11, countryId: "GB", artist: "Findlay", song: "Electric Bones", manager: "B00B", semiPlace: "-", semiPoints: "-", place: 24, points: 36, youtube: "https://youtu.be/caUDfimqRR8?si=-CMHN9Qhpynlbn1O", spotify: "https://open.spotify.com/track/2P7s3YjIeYTpzfFG5sZzFG?si=83f6908ee8bb43e3", mp3: "edycja1/brytania1.mp3", artistLink: "-" },
        { edition: 1, ro: 1, countryId: "DK", artist: "Alice Ai", song: "Loser", manager: "Dangap", semiPlace: "-", semiPoints: "-", place: 12, points: 82, youtube: "https://youtu.be/KOuduBgV56M?si=JayKQ5S974wNvKeM", spotify: "https://open.spotify.com/track/13DwYsbgcHUiElgaSppD5r?si=2bd4836dfb944958", mp3: "edycja1/dania1.mp3", artistLink: "-" },
        
        // Edition 2
        { edition: 2, semi: "AQ", semiRo: "-", ro: 19, countryId: "JO", artist: "Ziyad Al-Samman", song: "My Sweet", manager: "Riku", semiPlace: "-", semiPoints: "-", place: 7, points: 133, youtube: "https://www.youtube.com/watch?v=oez-77Tq1js", spotify: "https://open.spotify.com/track/2SFUdPztbGEEfPNQpVcYSz?si=03549760038d4624", mp3: "edycja2/JO2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 12, ro: 9, countryId: "SE", artist: "Girl Scout", song: "Crumbs", manager: "Micheł", semiPlace: 1, semiPoints: 189, place: 1, points: 215, youtube: "https://youtu.be/tNSXjlTsOPE?si=YqD_gm9x4oZjunXz", spotify: "https://open.spotify.com/track/1Mw9VXiZUa0WfbJyc8tKae?si=08f6d6e1b3b44929", mp3: "edycja2/UZ2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 6, ro: 3, countryId: "CG", artist: "Zaho de Sagazan", song: "Aspiration", manager: "Mort", semiPlace: 9, semiPoints: 92, place: 20, points: 68, youtube: "https://www.youtube.com/watch?v=t7o0yCOCSBU", spotify: "https://open.spotify.com/track/1blgJMWytwChDZK16qWCfl?si=c7291f4534ed4a28", mp3: "edycja2/CG2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 4, ro: 18, countryId: "SK", artist: "Meowlau", song: "Duša v koši", manager: "Ziemniorek", semiPlace: 9, semiPoints: 98, place: 10, points: 122, youtube: "https://youtu.be/0HZmHSzE52E?is=je9eoUikItvkZdcJ", spotify: "https://open.spotify.com/track/307dgzOEKdi2YNwVW5xQX5?si=NFVgDAmERBGeaT_VGhILGA&utm_source=copy-link", mp3: "edycja2/SK2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 5, ro: "-", countryId: "PL", artist: "Kasia Babis", song: "Love Witch", manager: "Shigaś", semiPlace: 13, semiPoints: 71, place: "-", points: "-", youtube: "https://youtu.be/3yvpf6lMRYM", spotify: "https://open.spotify.com/track/3khAJu84JG3Rn3XnWUs8H9", mp3: "edycja2/PL2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 5, ro: 4, countryId: "CV", artist: "Komsolu", song: "Tubaron Azul", manager: "Hubert", semiPlace: 10, semiPoints: 85, place: 18, points: 85, youtube: "https://youtu.be/YV5o4SouhLM?si=K4T4ZoyP1CkH-Z7f", spotify: "https://open.spotify.com/track/3P3CVE7cp7hIFTNFvrwghL?si=fa2df29742714124", mp3: "edycja2/CV2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 8, ro: "-", countryId: "AR", artist: "Karen Méndez, DJ Tronky", song: "Mi Rival", manager: "Max", semiPlace: 15, semiPoints: 40, place: "-", points: "-", youtube: "https://youtu.be/WVhPKujlFq0?is=-v3SX_prYYz4poH1", spotify: "https://open.spotify.com/track/0WBAURWkTHieS0qQkNQMrr?si=ea23c575e5b14f2f", mp3: "edycja2/AR2.mp3", artistLink: "-" },
        { edition: 2, semi: "AQ", semiRo: "-", ro: 22, countryId: "AL", artist: "No. Sygnl", song: "Your Turn", manager: "Lynn", semiPlace: "-", semiPoints: "-", place: 19, points: 73, youtube: "https://www.youtube.com/watch?v=ZiStAfOZOcw", spotify: "https://open.spotify.com/track/14rx03yHQzd9jnnzhzYQM0?si=12afa4fd405945ac", mp3: "edycja2/AL2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 10, ro: 21, countryId: "BZ", artist: "Maya J'an", song: "Cul-de-sac", manager: "Laxero", semiPlace: 6, semiPoints: 107, place: 15, points: 98, youtube: "https://youtu.be/ANSHFUkpY2k?si=PygrYo-cxQPR863c", spotify: "https://open.spotify.com/track/3oKp6fXFbkl9cySo4EGSc1?si=b65d7f689be64011", mp3: "edycja2/BZ2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 10, ro: 1, countryId: "ES", artist: "LVL1", song: "Fvn!", manager: "Ant", semiPlace: 10, semiPoints: 89, place: 21, points: 63, youtube: "https://youtu.be/FWKoOiQ1NVM?is=PvLTmV_hxxZ53Cc4", spotify: "https://open.spotify.com/track/2irPnUxnpZdd1J0rurJgxW?si=ryt4OA-XS1y9LG8FRoGu3w&utm_source=copy-link", mp3: "edycja2/ES2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 1, ro: 11, countryId: "DK", artist: "Hugorm, Hampenberg", song: "Hold om mit hoved (Remix)", manager: "Dangap", semiPlace: 1, semiPoints: 167, place: 2, points: 194, youtube: "https://youtu.be/_Rxc8MPmvDw?si=ornV6jB3XeQe9YB8", spotify: "https://open.spotify.com/track/146R4DWHiFVFCiC7uLhRSB?si=10adc5d3d7524db0", mp3: "edycja2/DK2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 3, ro: 15, countryId: "SA", artist: "Shargeeya", song: "Shargeeya!", manager: "Vroblo", semiPlace: 4, semiPoints: 134, place: 12, points: 114, youtube: "https://youtu.be/aUn01A_DvBA?is=fsAZgydvJb3U-cT6", spotify: "https://open.spotify.com/track/2SRGSFyInuOAIdJmzGOlWp?si=cad60f9736bf4336", mp3: "edycja2/SA2.mp3", artistLink: "-" },
        { edition: 2, semi: "AQ", semiRo: "-", ro: 2, countryId: "RU", artist: "Mia Boyka", song: "Eksponat", manager: "Pablitek", semiPlace: "-", semiPoints: "-", place: 24, points: 51, youtube: "https://youtu.be/ipDp8Ishe3s", spotify: "https://open.spotify.com/track/4Madyc0e7wYv1W8KllxuS8?si=d9db8ec039fe4a69", mp3: "edycja2/RU2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 6, ro: "-", countryId: "AU", artist: "Hillsong Young & Free", song: "Phenomena (Da Da)", manager: "Miczel", semiPlace: 12, semiPoints: 79, place: "-", points: "-", youtube: "https://youtu.be/6UQRYaKLQZo?si=ZO_UEEL7uAaijd_2", spotify: "https://open.spotify.com/track/077sZ9F14zJ5EHMviLwrmJ?si=XQkm0G8qSWmqGSQSXp2boQ&utm_source=copy-link", mp3: "edycja2/AU2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 1, ro: "-", countryId: "XK", artist: "Devault, Njomza", song: "Fire To Stone", manager: "Solarkis", semiPlace: 12, semiPoints: 70, place: "-", points: "-", youtube: "https://youtu.be/OG_sLMs5lqM?si=8tEsWTfNwiigybtN", spotify: "https://open.spotify.com/track/3b2okxOk6V2RSt6ZiuCUV4?si=fnVtEWzeTH6rKT1Zn5ikig&utm_source=copy-link", mp3: "edycja2/XK2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 9, ro: 12, countryId: "LU", artist: "Blame Emeraude", song: "Let Go", manager: "Fox", semiPlace: 4, semiPoints: 127, place: 13, points: 112, youtube: "https://youtu.be/C_3gGBZKq-s?si=RziQ10CDt-SCZP94", spotify: "https://open.spotify.com/track/4XQHnBZrSDPwBioEoya9XX?si=bf7007d45fea4c88", mp3: "edycja2/LU2.mp3", artistLink: "-" },
        { edition: 2, semi: "AQ", semiRo: "-", ro: 24, countryId: "ZA", artist: "Faker Streets", song: "Hold My Breath", manager: "Dravee", semiPlace: "-", semiPoints: "-", place: 8, points: 131, youtube: "https://youtu.be/LkfcuGHrK-o", spotify: "https://open.spotify.com/track/1nUsBVKbgO6hE8LfI3Ose6?si=b840cbc57c2948b9", mp3: "edycja2/ZA2.mp3", artistLink: "-" },
        { edition: 2, semi: "AQ", semiRo: "-", ro: 5, countryId: "PS", artist: "Amira Jazeera", song: "Still Thinkin’ Bout Me", manager: "Calypso", semiPlace: "-", semiPoints: "-", place: 25, points: 38, youtube: "https://www.youtube.com/watch?v=PJGPsevseEA", spotify: "https://open.spotify.com/track/5wdpdbNIb6PuioqVlh9tjq?si=qQ5b6NI2SJ2v88QjqIJG3Q&utm_source=copy-link", mp3: "edycja2/PS2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 15, ro: 13, countryId: "UA", artist: "Anna Nemchenko, Mikhail", song: "Cho s nami delayet lyubov'", manager: "Sajmonn", semiPlace: 2, semiPoints: 143, place: 5, points: 156, youtube: "https://www.youtube.com/watch?v=MK96j_4jSnc", spotify: "https://open.spotify.com/track/6sq5GHW1xQdI0i83IVLnIu", mp3: "edycja2/UA2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 11, ro: 6, countryId: "IT", artist: "Bambole di pezza", song: "Porno", manager: "Heks", semiPlace: 7, semiPoints: 104, place: 6, points: 144, youtube: "https://www.youtube.com/watch?v=hDhk9ndf3DU", spotify: "https://open.spotify.com/track/3jAwQ3Ww30wwFdKvFXKvVg?si=vGzrtMgGRpaTu2WR7vpyBA&utm_source=copy-link", mp3: "edycja2/IT2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 9, ro: "-", countryId: "GB", artist: "Editors", song: "Call It In", manager: "B00B", semiPlace: 14, semiPoints: 53, place: "-", points: "-", youtube: "https://youtu.be/IV_pGLNQ3q4?is=Bxns4cPOyzrpAkHi", spotify: "https://open.spotify.com/track/6g5oAr4QtYRYOdWUihyiK4?si=eM4HhtC0SiymV1Jcy7rWfA&utm_source=copy-link", mp3: "edycja2/GB2.mp3", artistLink: "-" },
        { edition: 2, semi: "AQ", semiRo: "-", ro: 26, countryId: "KR", artist: "Jeon Somi", song: "Escapade", manager: "Urban", semiPlace: "-", semiPoints: "-", place: 26, points: 34, youtube: "https://www.youtube.com/watch?v=scM9jdHOPAg", spotify: "https://open.spotify.com/track/1u1nd8ZoRPtiukdZkWKyFb?si=40095607256e4b20", mp3: "edycja2/KR2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 8, ro: "-", countryId: "KE", artist: "Njerae", song: "Decide", manager: "Grzesia", semiPlace: 14, semiPoints: 49, place: "-", points: "-", youtube: "https://youtu.be/C1R5odsGHEk?is=RSO8f6-eToOofTpM", spotify: "https://open.spotify.com/track/7raMW7tODAkNgfi7hbGyO1?si=WVoGxpoJQNqnF4jxchyCpw&utm_source=copy-link", mp3: "edycja2/KE2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 13, ro: 8, countryId: "TR", artist: "Derya Uluğ", song: "Şımarık", manager: "Jaruś", semiPlace: 2, semiPoints: 161, place: 4, points: 159, youtube: "https://www.youtube.com/watch?v=LdJUcKSSyjs", spotify: "https://open.spotify.com/track/1YLHRVAsWnNFCeLMfqz2dh?si=c9S0J0jHSRmX-LfPmZN_eA&utm_source=copy-link", mp3: "edycja2/TR2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 7, ro: 7, countryId: "CL", artist: "Sofia Isella", song: "The Chicken Is Naked and Afraid", manager: "Oscypek", semiPlace: 6, semiPoints: 114, place: 14, points: 107, youtube: "https://youtu.be/FHNdXyvFNlc?is=Q3dl-inqVN2uRHzU", spotify: "https://open.spotify.com/track/2Ms80o5izRuGsYs7PPhZN6?si=F_-CvJUpTUKtOBX1eh6yng&utm_source=copy-link", mp3: "edycja2/CL2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 3, ro: "-", countryId: "BR", artist: "Jenni Mosello", song: "Vou Gritar", manager: "Somebody", semiPlace: 13, semiPoints: 61, place: "-", points: "-", youtube: "https://youtu.be/UaAFsQum6YU?si=k63lGfUHUVtW5_zt", spotify: "https://open.spotify.com/track/5wpREs9xxOh6LcFg4KCHYo", mp3: "edycja2/BR2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 2, ro: "-", countryId: "HU", artist: "Pinkers", song: "KFK", manager: "Modern", semiPlace: 11, semiPoints: 72, place: "-", points: "-", youtube: "https://www.youtube.com/watch?v=27JsCXO27YI", spotify: "https://open.spotify.com/track/4aVmFyUHTCCkguks4YymBI?si=zxtWuR95TMyYFCs89m0AIQ&utm_source=copy-link", mp3: "edycja2/HU2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 4, ro: 14, countryId: "NO", artist: "Kristina Moe Hals", song: "Sirens", manager: "Alaan", semiPlace: 3, semiPoints: 139, place: 3, points: 176, youtube: "https://www.youtube.com/watch?v=mungKBKBiKg", spotify: "https://open.spotify.com/track/4mPmG1qvK98PXeNhLVFMVB?si=47f4f84265264ed4", mp3: "edycja2/NO2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 13, ro: 20, countryId: "CA", artist: "Alexis Munroe", song: "Razorblades", manager: "Alexis", semiPlace: 8, semiPoints: 101, place: 22, points: 63, youtube: "https://www.youtube.com/watch?v=X-gs4UfjEUU", spotify: "https://open.spotify.com/track/5dB1zErkBeoVQ6I900n23s?si=d2017281d9a3411e", mp3: "edycja2/CA2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 11, ro: 10, countryId: "ET", artist: "Blén", song: "Tèkètèlègn", manager: "Toniak", semiPlace: 7, semiPoints: 109, place: 16, points: 94, youtube: "https://m.youtube.com/watch?v=8f8uh_F1q8E", spotify: "https://open.spotify.com/track/0CXXbfX58IADCz6vZwFwUy", mp3: "edycja2/ET2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 12, ro: "-", countryId: "IR", artist: "Wet Leg", song: "Mangetout", manager: "Native", semiPlace: 11, semiPoints: 88, place: "-", points: "-", youtube: "https://youtu.be/lbc6CcZTp5E?is=evJTSCnclMhN3fJF", spotify: "https://open.spotify.com/track/5UW4tA4j23YL6kDfRw3rWT?si=krc5rgLcRbasiygZtJxKFQ&utm_source=copy-link", mp3: "edycja2/IR2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 2, ro: "-", countryId: "BD", artist: "Fairooz Nazifa", song: "Resuscitate", manager: "Vacu", semiPlace: 16, semiPoints: 37, place: "-", points: "-", youtube: "https://www.youtube.com/watch?v=uTfi5MTJ1o0", spotify: "https://open.spotify.com/track/2FzJzpxoxK88WLeMr5gtdj?si=eba8b6d5ba714d3a", mp3: "edycja2/BD2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 14, ro: 16, countryId: "IE", artist: "Chalk", song: "Pain", manager: "Kornik", semiPlace: 5, semiPoints: 120, place: 17, points: 92, youtube: "https://youtu.be/xDA4S5Xr21c?si=-OJGxgGhkKkPZuJM", spotify: "https://open.spotify.com/track/1nvvS29FuUjex61pTTRgjV?si=_j2kvAClQx-VDHEvRYX9OA&utm_source=copy-link", mp3: "edycja2/IE2.mp3", artistLink: "-" },
        { edition: 2, semi: 2, semiRo: 7, ro: "-", countryId: "US", artist: "Foster the People", song: "Lotus Eater", manager: "Slimitch", semiPlace: 15, semiPoints: 42, place: "-", points: "-", youtube: "https://youtu.be/vCF9bm-vTqE?is=nEGNAnHWx0GKy4Hm", spotify: "https://open.spotify.com/track/6ReKt5x6FVUXTMdWNC6GAQ?si=-JVhGFq3Qj6gFAhHklEI9w&utm_source=copy-link", mp3: "edycja2/US2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 15, ro: 25, countryId: "FR", artist: "Ema", song: "Papillons", manager: "Gilu", semiPlace: 8, semiPoints: 108, place: 23, points: 63, youtube: "https://youtu.be/qCV8gmGSMkw", spotify: "https://open.spotify.com/track/54GTl6q8VYEtd9FxvHcFqN?si=-B9MUqW3TduB6P4d5xdGSQ&utm_source=copy-link", mp3: "edycja2/FR2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 14, ro: 17, countryId: "CH", artist: "Serena Belle", song: "Sisyphean", manager: "Misza", semiPlace: 5, semiPoints: 131, place: 9, points: 126, youtube: "https://youtu.be/P-iRhfBI1GM?is=NcsMQkq8lwLcY5MN", spotify: "https://open.spotify.com/track/4Qh3dCxXOesmpZMcQoCvh7?si=rGvBSaXrRjO71T1jHHVjQQ&utm_source=copy-link", mp3: "edycja2/CH2.mp3", artistLink: "-" },
        { edition: 2, semi: 1, semiRo: 16, ro: 23, countryId: "SO", artist: "Hassan Maikal, Asla Jo", song: "Ota musta kii", manager: "Jelegor", semiPlace: 3, semiPoints: 145, place: 11, points: 117, youtube: "https://youtu.be/80-Jcyo5pVY?is=Pjesn4OTSeGPxNkP", spotify: "https://open.spotify.com/track/7b2EXARgqqX9xq3SdwKp9W?si=5fc694c2320e4e8e", mp3: "edycja2/SO2.mp3", artistLink: "-" },

        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "SE", artist: "-", song: "-", manager: "Michel", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "SY", artist: "-", song: "-", manager: "Dravee", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "UA", artist: "-", song: "-", manager: "Sajmonn", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "NO", artist: "-", song: "-", manager: "Dotek", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "ES", artist: "-", song: "-", manager: "Pablitek", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "US", artist: "-", song: "-", manager: "Oscypek", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "DE", artist: "-", song: "-", manager: "Royal", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
         { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "CN", artist: "-", song: "-", manager: "Shigaś", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
         { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "PL", artist: "-", song: "-", manager: "Jarek", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "AT", artist: "-", song: "-", manager: "Solarkis", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "UZ", artist: "-", song: "-", manager: "Grzesia", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "LY", artist: "-", song: "-", manager: "Laxero", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "TR", artist: "-", song: "-", manager: "Native", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "CA", artist: "-", song: "-", manager: "Kornik", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "IT", artist: "-", song: "-", manager: "Kidos", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "FI", artist: "-", song: "-", manager: "Fox", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "FR", artist: "-", song: "-", manager: "Vacu", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "DK", artist: "-", song: "-", manager: "Frost", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "BE", artist: "-", song: "-", manager: "Misza", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "GT", artist: "-", song: "-", manager: "Toniak", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "HU", artist: "-", song: "-", manager: "Modern", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "GB", artist: "-", song: "-", manager: "Hubert", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "VN", artist: "-", song: "-", manager: "Ant", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "BY", artist: "-", song: "-", manager: "Vroblo", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "CL", artist: "-", song: "-", manager: "Lynn", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "ZM", artist: "-", song: "-", manager: "Jelegor", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
         { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "TM", artist: "-", song: "-", manager: "Ziemniorek", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
         { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "AU", artist: "-", song: "-", manager: "B00B", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "CM", artist: "-", song: "-", manager: "Alexis", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "IE", artist: "-", song: "-", manager: "Slimitch", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
        { edition: 3, semi: "AQ", semiRo: "-", ro: "-", countryId: "EE", artist: "-", song: "-", manager: "Heks", semiPlace: "-", semiPoints: "-", place: "-", points: "-", youtube: "-", spotify: "-", mp3: "-", artistLink: "-" },
    ],
    
    countries: {
        "DZ": { name: "Algieria", code: "dz" }, "AO": { name: "Angola", code: "ao" }, "BJ": { name: "Benin", code: "bj" },
        "BW": { name: "Botswana", code: "bw" }, "BF": { name: "Burkina Faso", code: "bf" }, "BI": { name: "Burundi", code: "bi" },
        "TD": { name: "Czad", code: "td" }, "CD": { name: "Demokratyczna Republika Konga", code: "cd" }, "DJ": { name: "Dżibuti", code: "dj" },
        "EG": { name: "Egipt", code: "eg" }, "ER": { name: "Erytrea", code: "er" }, "SZ": { name: "Eswatini", code: "sz" },
        "ET": { name: "Etiopia", code: "et" }, "GA": { name: "Gabon", code: "ga" }, "GM": { name: "Gambia", code: "gm" },
        "GH": { name: "Ghana", code: "gh" }, "GN": { name: "Gwinea", code: "gn" }, "GW": { name: "Gwinea Bissau", code: "gw" },
        "GQ": { name: "Gwinea Równikowa", code: "gq" }, "CM": { name: "Kamerun", code: "cm" }, "KE": { name: "Kenia", code: "ke" },
        "KM": { name: "Komory", code: "km" }, "CG": { name: "Kongo", code: "cg" }, "LS": { name: "Lesotho", code: "ls" },
        "LR": { name: "Liberia", code: "lr" }, "LY": { name: "Libia", code: "ly" }, "MG": { name: "Madagaskar", code: "mg" },
        "MW": { name: "Malawi", code: "mw" }, "ML": { name: "Mali", code: "ml" }, "MA": { name: "Maroko", code: "ma" },
        "MR": { name: "Mauretania", code: "mr" }, "MU": { name: "Mauritius", code: "mu" }, "MZ": { name: "Mozambik", code: "mz" },
        "NA": { name: "Namibia", code: "na" }, "NE": { name: "Niger", code: "ne" }, "NG": { name: "Nigeria", code: "ng" },
        "ZA": { name: "Republika Południowej Afryki", code: "za" }, "CF": { name: "Republika Środkowoafrykańska", code: "cf" },
        "CV": { name: "Republika Zielonego Przylądka", code: "cv" }, "RW": { name: "Rwanda", code: "rw" }, "SN": { name: "Senegal", code: "sn" },
        "SC": { name: "Seszele", code: "sc" }, "SL": { name: "Sierra Leone", code: "sl" }, "SO": { name: "Somalia", code: "so" },
        "SD": { name: "Sudan", code: "sd" }, "SS": { name: "Sudan Południowy", code: "ss" }, "TZ": { name: "Tanzania", code: "tz" },
        "TG": { name: "Togo", code: "tg" }, "TN": { name: "Tunezja", code: "tn" }, "UG": { name: "Uganda", code: "ug" },
        "CI": { name: "Wybrzeże Kości Słoniowej", code: "ci" }, "ST": { name: "Wyspy Świętego Tomasza i Książęca", code: "st" },
        "ZM": { name: "Zambia", code: "zm" }, "ZW": { name: "Zimbabwe", code: "zw" },
        
        "AG": { name: "Antigua i Barbuda", code: "ag" }, "BS": { name: "Bahamy", code: "bs" }, "BB": { name: "Barbados", code: "bb" },
        "BZ": { name: "Belize", code: "bz" }, "DM": { name: "Dominika", code: "dm" }, "DO": { name: "Dominikana", code: "do" },
        "GD": { name: "Grenada", code: "gd" }, "GT": { name: "Gwatemala", code: "gt" }, "HT": { name: "Haiti", code: "ht" },
        "HN": { name: "Honduras", code: "hn" }, "JM": { name: "Jamajka", code: "jm" }, "CA": { name: "Kanada", code: "ca" },
        "CR": { name: "Kostaryka", code: "cr" }, "CU": { name: "Kuba", code: "cu" }, "MX": { name: "Meksyk", code: "mx" },
        "NI": { name: "Nikaragua", code: "ni" }, "PA": { name: "Panama", code: "pa" }, "KN": { name: "Saint Kitts i Nevis", code: "kn" },
        "LC": { name: "Saint Lucia", code: "lc" }, "VC": { name: "Saint Vincent i Grenadyny", code: "vc" }, "SV": { name: "Salwador", code: "sv" },
        "US": { name: "Stany Zjednoczone", code: "us" },
        
        "AR": { name: "Argentyna", code: "ar" }, "BO": { name: "Boliwia", code: "bo" }, "BR": { name: "Brazylia", code: "br" },
        "CL": { name: "Chile", code: "cl" }, "EC": { name: "Ekwador", code: "ec" }, "GY": { name: "Gujana", code: "gy" },
        "CO": { name: "Kolumbia", code: "co" }, "PY": { name: "Paragwaj", code: "py" }, "PE": { name: "Peru", code: "pe" },
        "SR": { name: "Surinam", code: "sr" }, "TT": { name: "Trynidad i Tobago", code: "tt" }, "UY": { name: "Urugwaj", code: "uy" },
        "VE": { name: "Wenezuela", code: "ve" },
        
        "AU": { name: "Australia", code: "au" }, "FJ": { name: "Fidżi", code: "fj" }, "KI": { name: "Kiribati", code: "ki" },
        "FM": { name: "Mikronezja", code: "fm" }, "NR": { name: "Nauru", code: "nr" }, "NZ": { name: "Nowa Zelandia", code: "nz" },
        "PW": { name: "Palau", code: "pw" }, "PG": { name: "Papua Nowa Gwinea", code: "pg" }, "WS": { name: "Samoa", code: "ws" },
        "TO": { name: "Tonga", code: "to" }, "TV": { name: "Tuvalu", code: "tv" }, "VU": { name: "Vanuatu", code: "vu" },
        "MH": { name: "Wyspy Marshalla", code: "mh" }, "SB": { name: "Wyspy Salomona", code: "sb" },
        
        "AF": { name: "Afganistan", code: "af" }, "SA": { name: "Arabia Saudyjska", code: "sa" }, "AM": { name: "Armenia", code: "am" },
        "AZ": { name: "Azerbejdżan", code: "az" }, "BH": { name: "Bahrajn", code: "bh" }, "BD": { name: "Bangladesz", code: "bd" },
        "BT": { name: "Bhutan", code: "bt" }, "BN": { name: "Brunei", code: "bn" }, "CN": { name: "Chiny", code: "cn" },
        "CY": { name: "Cypr", code: "cy" }, "PH": { name: "Filipiny", code: "ph" }, "GE": { name: "Gruzja", code: "ge" },
        "IN": { name: "Indie", code: "in" }, "ID": { name: "Indonezja", code: "id" }, "IQ": { name: "Irak", code: "iq" },
        "IR": { name: "Iran", code: "ir" }, "IL": { name: "Izrael", code: "il" }, "JP": { name: "Japonia", code: "jp" },
        "YE": { name: "Jemen", code: "ye" }, "JO": { name: "Jordania", code: "jo" }, "KH": { name: "Kambodża", code: "kh" },
        "QA": { name: "Katar", code: "qa" }, "KZ": { name: "Kazachstan", code: "kz" }, "KG": { name: "Kirgistan", code: "kg" },
        "KR": { name: "Korea Południowa", code: "kr" }, "KP": { name: "Korea Północna", code: "kp" }, "KW": { name: "Kuwejt", code: "kw" },
        "LA": { name: "Laos", code: "la" }, "LB": { name: "Liban", code: "lb" }, "MV": { name: "Malediwy", code: "mv" },
        "MY": { name: "Malezja", code: "my" }, "MM": { name: "Mjanma", code: "mm" }, "MN": { name: "Mongolia", code: "mn" },
        "NP": { name: "Nepal", code: "np" }, "OM": { name: "Oman", code: "om" }, "PK": { name: "Pakistan", code: "pk" },
        "PS": { name: "Palestyna", code: "ps" }, "RU": { name: "Rosja", code: "ru" }, "SG": { name: "Singapur", code: "sg" },
        "LK": { name: "Sri Lanka", code: "lk" }, "SY": { name: "Syria", code: "sy" }, "TJ": { name: "Tadżykistan", code: "tj" },
        "TH": { name: "Tajlandia", code: "th" }, "TL": { name: "Timor Wschodni", code: "tl" }, "TR": { name: "Turcja", code: "tr" },
        "TM": { name: "Turkmenistan", code: "tm" }, "UZ": { name: "Uzbekistan", code: "uz" }, "VN": { name: "Wietnam", code: "vn" },
        "AE": { name: "Zjednoczone Emiraty Arabskie", code: "ae" }, "TW": { name: "Tajwan", code: "tw" }, "HK": { name: "Hong Kong", code: "hk" },
        "MO": { name: "Makau", code: "mo" },
        
        "AL": { name: "Albania", code: "al" }, "AD": { name: "Andora", code: "ad" }, "AT": { name: "Austria", code: "at" },
        "BE": { name: "Belgia", code: "be" }, "BY": { name: "Białoruś", code: "by" }, "BA": { name: "Bośnia i Hercegowina", code: "ba" },
        "BG": { name: "Bułgaria", code: "bg" }, "HR": { name: "Chorwacja", code: "hr" }, "ME": { name: "Czarnogóra", code: "me" },
        "CZ": { name: "Czechy", code: "cz" }, "DK": { name: "Dania", code: "dk" }, "EE": { name: "Estonia", code: "ee" },
        "FI": { name: "Finlandia", code: "fi" }, "FR": { name: "Francja", code: "fr" }, "GR": { name: "Grecja", code: "gr" },
        "ES": { name: "Hiszpania", code: "es" }, "NL": { name: "Holandia", code: "nl" }, "IE": { name: "Irlandia", code: "ie" },
        "IS": { name: "Islandia", code: "is" }, "XK": { name: "Kosowo", code: "xk" }, "LI": { name: "Liechtenstein", code: "li" },
        "LT": { name: "Litwa", code: "lt" }, "LU": { name: "Luksemburg", code: "lu" }, "LV": { name: "Łotwa", code: "lv" },
        "MK": { name: "Macedonia Północna", code: "mk" }, "MT": { name: "Malta", code: "mt" }, "MD": { name: "Mołdawia", code: "md" },
        "MC": { name: "Monako", code: "mc" }, "DE": { name: "Niemcy", code: "de" }, "NO": { name: "Norwegia", code: "no" },
        "PL": { name: "Polska", code: "pl" }, "PT": { name: "Portugalia", code: "pt" }, "RO": { name: "Rumunia", code: "ro" }, 
        "SM": { name: "San Marino", code: "sm" }, "RS": { name: "Serbia", code: "rs" }, "SK": { name: "Słowacja", code: "sk" },
        "SI": { name: "Słowenia", code: "si" }, "CH": { name: "Szwajcaria", code: "ch" }, "SE": { name: "Szwecja", code: "se" }, 
        "UA": { name: "Ukraina", code: "ua" }, "HU": { name: "Węgry", code: "hu" }, "GB": { name: "Wielka Brytania", code: "gb" }, 
        "IT": { name: "Włochy", code: "it" }
    },

    preselections: {
        1: {
            "Japonia": {
                manager: "Shigaś",
                name: "NipponFes 01",
                stages: [
                    { name: "NipponFes 01 - Pierwszy półfinał", items: [
                        { a: "Mili", t: "world.execute(me);", res: "161 pkt", place: 1 },
                        { a: "Phantom Siita", t: "Hanabami", res: "156 pkt", place: 2 },
                        { a: "MariMari", t: "Pop Shuvit!", res: "147 pkt", place: 3 },
                        { a: "Taku Inoue, Taku Takahashi", t: "Unstoppable Generation", res: "134 pkt", place: 4 },
                        { a: "Vaundy", t: "Chainsaw Blood", res: "131 pkt", place: "last" },
                        { a: "Polkadot Stingray", t: "Sakasama", res: "116 pkt", place: "last" },
                        { a: "Hanabie.", t: "Iconic", res: "86 pkt", place: "last" },
                        { a: "Sasalasa", t: "Nevermore", res: "58 pkt", place: "last" }
                    ]},
                    { name: "NipponFes 01 - Drugi półfinał", items: [
                        { a: "Myera", t: "UpBoomBoom", res: "87 pkt", place: 1 },
                        { a: "Atarashii Gakko!", t: "Tokyo Calling", res: "76 pkt", place: 2 },
                        { a: "Tokyo Babel", t: "Faust", res: "73 pkt", place: 3 },
                        { a: "Avantgardey", t: "OKP Cipher", res: "72 pkt", place: 4 },
                        { a: "Creepy Nuts", t: "Chxxai", res: "69 pkt", place: "last"},
                        { a: "Chanmina", t: "Flip Flap", res: "55 pkt", place: "last" },
                        { a: "Queen Bee", t: "Headless Angel", res: "53 pkt", place: "last" },
                        { a: "Reol, Lisa", t: "Dead Center", res: "31 pkt", place: "last"  }
                    ]},
                    { name: "NipponFes 01 - Finałowy Duel 01", items: [
                        { a: "MariMari", t: "Pop Shuvit!", res: "7 głosów (54%)" },
                        { a: "Taku Inoue, Taku Takahashi", t: "Unstoppable Generation", res: "6 głosów (46%)" }
                    ]},
                    { name: "NipponFes 01 - Finałowy Duel 02", items: [
                        { a: "Mili", t: "world.execute(me);", res: "10 głosów (71%)" },
                        { a: "Avantgardey", t: "OKP Cipher", res: "4 głosy (29%)" }
                    ]},
                    { name: "NipponFes 01 - Finałowy Duel 03", items: [
                        { a: "Phantom Siita", t: "Hanabami", res: "8 głosów (89%)" },
                        { a: "Tokyo Babel", t: "Faust", res: "1 głos (11%)" }
                    ]},
                    { name: "NipponFes 01 - Finałowy Duel 04", items: [
                        { a: "Myera", t: "UpBoomBoom", res: "6 głosów (75%)" },
                        { a: "Atarashii Gakko!", t: "Tokyo Calling", res: "2 głosy (25%)" }
                    ]},
                    { name: "NipponFes 01 - Finałowy Duel 05", items: [
                        { a: "MariMari", t: "Pop Shuvit!", res: "9 głosów (69%)" },
                        { a: "Phantom Siita", t: "Hanabami", res: "4 głosy (31%)" }
                    ]},
                    { name: "NipponFes 01 - Finałowy Duel 06", items: [
                        { a: "Mili", t: "world.execute(me);", res: "7 głosów (54%)" },
                        { a: "Myera", t: "UpBoomBoom", res: "6 głosów (46%)" }
                    ]},
                    { name: "NipponFes 01 - Finałowy Duel 07", items: [
                        { a: "Mili", t: "world.execute(me);", res: "10 głosów (53%)" },
                        { a: "MariMari", t: "Pop Shuvit!", res: "9 głosów (47%)" }
                    ]}
                ]
            },
            "Słowacja": {
                manager: "Vroblo",
                name: "Veľký Vlnový Festival na Liptovskej Mare",
                stages: [
                    { name: "Finał", items: [
                        { a: "Mark Dann, Giovanni Ricci", t: "Let Me Die", res: "36 pkt", place: 1 },
                        { a: "LUVVER", t: "LULLABIES", res: "24 pkt", place: 2 },
                        { a: "Lina Mayer", t: "Ona", res: "22 pkt", place: 3 },
                        { a: "Whithe, Blanch", t: "On the Edge", res: "21 pkt", place: 4 },
                        { a: "Petrofski, Mishino", t: "Vlak", res: "9 pkt", place: "last" }
                    ]}
                ]
            },
            "Bułgaria": {
                manager: "Riku",
                name: "Festival na Pesenta",
                stages: [
                    { name: "Duel 1", items: [
                        { a: "Tsar Pluh", t: "Bog za den", res: "8 głosów (57%)" },
                        { a: "Gery Nikol, Bilyanish", t: "Eleganten Simulant", res: "6 głosów (43%)" }
                    ]},
                    { name: "Duel 2", items: [
                        { a: "Rushi", t: "Bez bagazh", res: "8 głosów (53%)" },
                        { a: "VICK", t: "Split", res: "7 głosów (47%)" }
                    ]},
                    { name: "Duel 3", items: [
                        { a: "Rushi", t: "Valk", res: "6 głosów (60%)" },
                        { a: "YVA, Zhaklin", t: "Gambit", res: "4 głosy (40%)" }
                    ]},
                    { name: "Finałowy Duel", items: [
                        { a: "Rushi", t: "Valk", res: "9 głosów (60%)" },
                        { a: "Tsar Pluh", t: "Bog za den", res: "4 głosy (27%)" },
                        { a: "Rushi", t: "Bez bagazh", res: "2 głosy (13%)" }
                    ]}
                ]
            }
        },
        2: {
            "Luksemburg": {
                manager: "Fox",
                name: "Luxembourg Decides 1",
                stages: [
                    { name: "Finał", items: [
                        { a: "Tuys", t: "Crystal Glass (Looking At Somebody)" },
                        { a: "ÆM", t: "Written In The Stars" },
                        { a: "Pleasing", t: "Bleak" },
                        { a: "Ninon", t: "Porcelain Baby" },
                        { a: "Marcy", t: "Until She Minds" },
                        { a: "Ptolemea", t: "Kali" },
                        { a: "Blame Emeraude", t: "Let Go" },
                        { a: "Tyra", t: "You Don't Own Me" }
                    ]}
                ]
            },
            "Ukraina": {
                manager: "Sajmonn",
                name: "Vidlunnya Ukrayiny",
                stages: [
                    { name: "Duel 01", items: [
                        { a: "Anna Nemchenko, Mikhail", t: "Cho s nami delayet lyubov'" },
                        { a: "Electrobirds", t: "Lystivky" }
                    ]}
                ]
            }
        }
    }
};
