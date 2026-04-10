const FINALS_DATES = ["2022-09-04", "2022-09-11", "2022-09-18", "2023-08-27", "2023-09-03", "2023-09-10", "2024-08-25", "2024-09-01", "2024-09-08","2026-08-30", "2026-09-06", "2026-09-13"];

const SL_FINALS_DATES = ["2023-07-14", "2023-07-16", "2023-07-22", "2024-07-19", "2024-07-21", "2024-07-27", "2026-08-22"]

const AVSL_FINAL_DATES = ["2025-11-02"]

const AVSL_SEMI_DATES = ["2025-10-26"]

const AVSL_FINALS_DATES = ["2025-11-02","2025-10-26"]

const AVSL_TRICODE = {
    "Adelaide Storm" : "S  T  M",
    "Canberra Heat" : "H  E  A",
    "Melbourne Vipers" : "V   I   P",
    "NSW Phoenix" : "P  H  O",
    "Perth Steel" : "S  T  L",
    "Queensland Pirates" : "P   I   R"
}

const AVSL_COACH_SORTING = {
    "HC": 1,
    "AC1": 10,
    "AC2": 20,
    "C2": 21,
    "AC3": 30,
    "C3": 31,
    "AC4": 40,
    "C4": 41,
    "C5": 51,
    //"M": 60,
    "M1": 61,
    "M2": 62,
    "M3": 63,
    "M4": 64,
    "T1": 71,
    "T2": 72,
    "T3": 73,
    "T4": 74,
    "TS1": 81,
    "TS2": 82,
    "TS3": 83,
    "TS4": 84,
    "Other": 95,
    "": 99,
    "President": 100
}

// This is used to convert the "(Pool x)" into "- x"
// In 2026, the "grading dates" (ie, the dates that we want to show the Pool for Div 2) is the whole season (except finals)
const DIV_GRADING_DATES = ['2026-03-18', '2026-03-19', '2026-03-20', '2026-03-21', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-07', '2026-04-08', '2026-04-09', '2026-04-10', '2026-04-11', '2026-04-12', '2026-04-13', '2026-04-14', '2026-04-15', '2026-04-16', '2026-04-17', '2026-04-18', '2026-04-19', '2026-04-20', '2026-04-21', '2026-04-22', '2026-04-23', '2026-04-24', '2026-04-25', '2026-04-26', '2026-04-27', '2026-04-28', '2026-04-29', '2026-04-30', '2026-05-01', '2026-05-02', '2026-05-03', '2026-05-04', '2026-05-05', '2026-05-06', '2026-05-07', '2026-05-08', '2026-05-09', '2026-05-10', '2026-05-11', '2026-05-12', '2026-05-13', '2026-05-14', '2026-05-15', '2026-05-16', '2026-05-17', '2026-05-18', '2026-05-19', '2026-05-20', '2026-05-21', '2026-05-22', '2026-05-23', '2026-05-24', '2026-05-25', '2026-05-26', '2026-05-27', '2026-05-28', '2026-05-29', '2026-05-30', '2026-05-31', '2026-06-01', '2026-06-02', '2026-06-03', '2026-06-04', '2026-06-05', '2026-06-06', '2026-06-07', '2026-06-08', '2026-06-09', '2026-06-10', '2026-06-11', '2026-06-12', '2026-06-13', '2026-06-14', '2026-06-15', '2026-06-16', '2026-06-17', '2026-06-18', '2026-06-19', '2026-06-20', '2026-06-21', '2026-06-22', '2026-06-23', '2026-06-24', '2026-06-25', '2026-06-26', '2026-06-27', '2026-06-28', '2026-06-29', '2026-06-30', '2026-07-01', '2026-07-02', '2026-07-03', '2026-07-04', '2026-07-05', '2026-07-06', '2026-07-07', '2026-07-08', '2026-07-09', '2026-07-10', '2026-07-11', '2026-07-12', '2026-07-13', '2026-07-14', '2026-07-15', '2026-07-16', '2026-07-17', '2026-07-18', '2026-07-19', '2026-07-20', '2026-07-21', '2026-07-22', '2026-07-23', '2026-07-24', '2026-07-25', '2026-07-26', '2026-07-27', '2026-07-28', '2026-07-29', '2026-07-30', '2026-07-31', '2026-08-01', '2026-08-02', '2026-08-03', '2026-08-04', '2026-08-05', '2026-08-06', '2026-08-07', '2026-08-08', '2026-08-09', '2026-08-10', '2026-08-11', '2026-08-12', '2026-08-13', '2026-08-14', '2026-08-15', '2026-08-16', '2026-08-17', '2026-08-18', '2026-08-19', '2026-08-20', '2026-08-21', '2026-08-22', '2026-08-23', '2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28', '2026-08-29']
const DIV_GRADING_DIVS = ["D2M", "D2W"]

const DO_NOT_PRINT = ["David Poulivaati"]

// This is used to get a list of all players. eg: https://vwa.bracketpal.com/leaders/season/27
const SEASON_ID = "27";

const __CONFIG__ = {
    "venues": {
        "Albany Leisure Centre": {
            "name": "Albany Leisure Centre",
            "printName": "Albany Leisure Centre",
            "city": "",
            "alias": ["ALAC", "Albany Leisure Centre", "Albany Leisure & Aquatic Centre", "Albany Leisure and Aquatic Centre"]
        },
        "Aquinas": {
            "name": "Aquinas",
            "printName": "Aquinas",
            "city": "",
            "alias": ["Aquinas College", "Aquinas Col.", "Aquin"]
        },
        "Ashdale Secondary College": {
            "name": "Ashdale Secondary College",
            "printName": "Ashdale College",
            "city": "",
            "alias": ["ASH", "Ashdale College"]
        },
        "Ballajura": {
            "name": "Ballajura",
            "printName": "Ballajura",
            "city": "",
            "alias": ["Ballajura Indoor Spo"]
        },
        "Baldivis": {
            "name": "Baldivis",
            "printName": "Baldivis",
            "city": "",
            "alias": ["Baldivis", "Baldivis Indoor Sports Complex", "BISC"]
        },
        "Belmont Oasis": {
            "name": "Belmont Oasis",
            "printName": "Belmont Oasis",
            "city": "",
            "alias": ["Belmont Oasis", "Belmot", "BELM"]
        },
        "Bendat": {
            "name": "Bendat",
            "printName": "Bendat",
            "city": "Floreat",
            "alias": ["Bendat Basketball Centre", "BEND", "Benda"]
        },
        "Bunbury PCYC": {
            "name": "Bunbury PCYC",
            "printName": "Bunbury PCYC",
            "city": "",
            "alias": ["Bunbury PCYC", "PCYC"]
        },
        "Cannington Leisureplex": {
            "name": "Cannington Leisureplex",
            "printName": "Cannington Leisureplex",
            "city": "",
            "alias": ["Cannington", "CANN"]
        },
        "Cockburn": {
            "name": "Cockburn",
            "printName": "Cockburn",
            "city": "",
            "alias": ["Cockburn ARC", "CARC"]
        },
        "Curtin Stadium": {
            "name": "Curtin Stadium",
            "printName": "Curtin",
            "city": "",
            "alias": ["Curtin"]
        },
        "Cyril Jackson Recreation Centre": {
            "name": "Cyril Jackson Recreation Centre",
            "printName": "Cyril Jackson",
            "city": "",
            "alias": ["Cyril Jackson", "CJRC"]
        },
        "ECU Mt. Lawley": {
            "name": "ECU Mt. Lawley",
            "printName": "ECU Mt. Lawley",
            "city": "",
            "alias": ["ECU", "ECU Mount Lawley", "ECU Mt Lawley"]
        },
        "Geographe Leisure Centre": {
            "name": "Geographe Leisure Centre",
            "printName": "Geographe Leisure Centre",
            "city": "",
            "alias": ["Geographe", "Geographe Leisure", "Geographe Lei. Centr", "Geographe Lei. Cntr", "Geographe L. Ctr", "Geographe Lei.", "GEO"]
        },
        "Gold Netball Centre": {
            "name": "Gold Netball Centre",
            "printName": "Gold Netball Centre",
            "city": "",
            "alias": ["Gold Netball", "GOLD"]
        },
        "Guildford Grammar School": {
            "name": "Guildford Grammar School",
            "printName": "Guildford Grammar",
            "city": "",
            "alias": ["GGS", "Guildford", "Guildford Grammar", "Guildford Grammar School"]
        },
        "Greenwood College": {
            "name": "Greenwood College",
            "printName": "Greenwood College",
            "city": "",
            "alias": []
        },
        "Hale": {
            "name": "Hale",
            "printName": "Hale",
            "city": "",
            "alias": ["Hale School"]
        },
        "Halls Head Recreation Centre": {
            "name": "Halls Head Recreation Centre",
            "printName": "Halls Head",
            "city": "",
            "alias": ["Halls Head Rec Centr", "Halls Head Rec", "HALLS"]
        },
        "Hartfield Park": {
            "name": "Hartfield Park",
            "printName": "Hartfield Park",
            "city": "",
            "alias": ["Hartfield", "Hartfield Rec Cntr"]
        },
        "HBF Stadium Claremont": {
            "name": "HBF Stadium Claremont",
            "printName": "HBF Stadium",
            "city": "",
            "alias": ["HBF Stad. Claremont", "HBF", "HBF Stadium", "HBF Stad.", "HBF Sta. Claremont", "HBF Stadium Claremont"]
        },
        "HBF Arena Joondalup": {
            "name": "HBF Arena Joondalup",
            "printName": "HBF Arena",
            "city": "",
            "alias": ["HBF Arena", "HBF Joondalup", "JOON"]
        },
        "Herb Graham Leisure Centre": {
            "name": "Herb Graham Leisure Centre",
            "printName": "Herb Graham",
            "city": "",
            "alias": ["Herb Graham", "HERB"]
        },
        "John Wollaston": {
            "name": "John Wollaston",
            "printName": "John Wollaston",
            "city": "",
            "alias": ["John Wollaston ACS C", "John Wollaston ACS", "JOHN"]
        },
        "Karratha Leisureplex": {
            "name": "Karratha Leisureplex",
            "printName": "Karratha Leisureplex",
            "city": "",
            "alias": ["KL", "Karratha", "Karratha Leisureplex"]
        },
        "Kingsway": {
            "name": "Kingsway",
            "printName": "Kingsway",
            "city": "",
            "alias": ["Kingsway Indoor Stad", "Kingsway Indoor", "KING", "Kingsway Stadium"]
        },
        "Kwinana Recquatic": {
            "name": "Kwinana Recquatic",
            "printName": "Kwinana Recquatic",
            "city": "",
            "alias": ["Kwinana Recquatic", "Kwinana", "KWIN"]
        },
        "Leschenault Leisure Centre": {
            "name": "Leschenault Leisure Centre",
            "printName": "Leschenault Leisure Centre",
            "city": "",
            "alias": ["Leschanault", "Leschanault Lei.", "LLC", "Leschenault Leisure"]
        },
        "Loftus": {
            "name": "Loftus",
            "printName": "Loftus",
            "city": "",
            "alias": ["Loft", "Loftus Recreation Centre"]
        },
        "Lords": {
            "name": "Lords",
            "printName": "Lords",
            "city": "",
            "alias": ["LORDS", "Lords Recreation Centre"]
        },
        "Lumen Christi": {
            "name": "Lumen Christi",
            "printName": "Lumen Christi",
            "city": "",
            "alias": ["Lumen Christi College", "Lumen Christi", "LUMEN", "Lumen"]
        },
        "Mandurah ARC": {
            "name": "Mandurah ARC",
            "printName": "Mandurah ARC",
            "city": "",
            "alias": ["MARC"]
        },
        "MBC": {
            "name": "MBC",
            "printName": "MBC",
            "city": "",
            "alias": ["Mandurah Baptist College", "Mandurah Baptist Col", "Mandurah Baptist"]
        },
        "Melville LeisureFit": {
            "name": "Melville LeisureFit",
            "printName": "Melville LeisureFit",
            "city": "",
            "alias": ["Melville Leisure", "MLF"]
        },
        "Methodist Ladies College": {
            "name": "Methodist Ladies College",
            "printName": "MLC",
            "city": "",
            "alias": ["MLC", "Methodist L. Col", "Mthodist Ladies Co"]
        },
        "Murdoch Active": {
            "name": "Murdoch Active",
            "printName": "Murdoch Active",
            "city": "",
            "alias": []
        },
        "Naturaliste Community Centre": {
            "name": "Naturaliste Community Centre",
            "printName": "Naturaliste",
            "city": "",
            "alias": ["NCC"]
        },
        "Newman College": {
            "name": "Newman College",
            "printName": "Newman College",
            "city": "",
            "alias": ["Newman"]
        },
        "Penrhos College": {
            "name": "Penrhos College",
            "printName": "Penrhos College",
            "city": "",
            "alias": ["Penrhos"]
        },
        "Rossmoyne": {
            "name": "Rossmoyne",
            "printName": "Rossmoyne",
            "city": "",
            "alias": ["Rossmoyne SHS", "ROSSY"]
        },
        "Sacred Heart": {
            "name": "Sacred Heart",
            "printName": "Sacred Heart",
            "city": "",
            "alias": ["Sacred Heart College", "SHC"]
        },
        "Santa Maria": {
            "name": "Santa Maria",
            "printName": "Santa Maria",
            "city": "",
            "alias": ["Santa Maria College", "Santa Maria Col."]
        },
        "Southern River": {
            "name": "Southern River",
            "printName": "Southern River",
            "city": "",
            "alias": ["Southern River College", "Southern River Colle", "Southern River Col.", "SRC"]
        },
        "South West Sports Centre": {
            "name": "South West Sports Centre",
            "printName": "South West Sports Centre",
            "city": "",
            "alias": ["SW Sports", "SWSC"]
        },
        "Swan Active Midland": {
            "name": "Swan Active Midland",
            "printName": "Swan Active Midland",
            "city": "",
            "alias": ["Swan Active Midland", "Swan Active", "SAM", "Active Midland"]
        },
        "St Mary's": {
            "name": "St Mary's",
            "printName": "St Mary's",
            "city": "",
            "alias": []
        },
        "St James' Anglican School": {
            "name": "St James' Anglican School",
            "printName": "St James'",
            "city": "",
            "alias": ["SJAS", "St James", "St James' Anglican School", "Saint James"]
        },
        "The Rise": {
            "name": "The Rise",
            "printName": "The Rise",
            "city": "",
            "alias": ["RISE"]
        },
        "Trinity College": {
            "name": "Trinity College",
            "printName": "Trinity",
            "city": "",
            "alias": ["Trinity", "Trinity Col.", "TRIN"]
        },
        "UWA Recreation Centre": {
            "name": "UWA Recreation Centre",
            "printName": "UWA",
            "city": "",
            "alias": ["UWA", "UWA Rec. Centre", "UWA Rec Centre", "UWA Sport"]
        },
        "UWA Sport Science": {
            "name": "UWA Sport Science",
            "printName": "UWA Sport Science",
            "city": "",
            "alias": []
        },
        "Wesley College": {
            "name": "Wesley College",
            "printName": "Wesley",
            "city": "",
            "alias": ["Wesley"]
        },
        "Warwick": {
            "name": "Warwick",
            "printName": "Warwick",
            "city": "",
            "alias": ["Warwick Stadium", "Warwick Stad.", "WARW"]
        },
        "TBC": {
            "name": "TBC",
            "printName": "TBC",
            "city": "",
            "alias": ["To Be Confirmed"]
        },
        "Home Round": {
            "name": "Home Round",
            "printName": "Home Round",
            "city": "",
            "alias": []
        },
        "EBC": {
            "name": "EBC",
            "printName": "EBC",
            "city": "",
            "alias": ["Esperance Bowling Club Beach Courts", "EBC"]
        },
        "Carrara": {
            "name": "Carrara",
            "printName": "Carrara",
            "city": "",
            "alias": ["GCSLC", "Gold Coast Sports & Leisure Centre", "Gerflor", "Carrara"]
        },
        "AB Patterson": {
            "name": "AB Patterson",
            "printName": "AB Patterson",
            "city": "",
            "alias": ["ABP", "AB Patterson", "AB Patterson College"]
        },
        "Coomera": {
            "name": "Coomera",
            "printName": "Coomera",
            "city": "",
            "alias": ["CISC", "ACoomera Indoor Sport Centre"]
        },
        "Runaway Bay": {
            "name": "Runaway Bay",
            "printName": "Runaway Bay",
            "city": "",
            "alias": ["RBIS", "Runaway Bay", "Runaway Bay Indoor Stadium"]
        },

        "Adelaide 36ers Arena": {
            "name": "Adelaide 36ers Arena",
            "printName": "36ers Arena",
            "city": "Findon",
            "alias": ["36ers", "Adelaide 36ers Arena"]
        },
        "Iona College, Lindum QLD": {
            "name": "Iona College, Lindum QLD",
            "printName": "Iona College",
            "city": "Lindum",
            "alias": ["Iona College, Lindum QLD", "IONA"]
        },
        "Melbourne Sports and Aquatic Centre": {
            "name": "Melbourne Sports and Aquatic Centre",
            "printName": "M S A C",
            "city": "Albert Park",
            "alias": ["Melbourne Sports and Aquatic Centre", "MSAC"]
        },
        "Netball Central, NSW": {
            "name": "Netball Central, NSW",
            "printName": "Netball Central",
            "city": "Sydney Olympic Park",
            "alias": ["Netball Central, NSW", "NC"]
        },
        "Radford College": {
            "name": "Radford College",
            "printName": "Radford College",
            "city": "Bruce",
            "alias": ["Radford College", "Radfo"]
        },
        "Reynella East College": {
            "name": "Reynella East College",
            "printName": "Reynella East College",
            "city": "Reynella East",
            "alias": ["Reynella East College", "Reyne"]
        },
        "Shoalhaven Indoor Sports Centre": {
            "name": "Shoalhaven Indoor Sports Centre",
            "printName": "Shoalhaven",
            "city": "Bomaderry",
            "alias": ["Shoalhaven Indoor Sports Centre", "SISC"]
        },
        "South Pine Indoor Sports Centre": {
            "name": "South Pine Indoor Sports Centre",
            "printName": "South Pine",
            "city": "Brendale",
            "alias": ["South Pine Indoor Sports Centre", "SPine"]
        },
        "State Netball Arena - Parkville": {
            "name": "State Netball Arena - Parkville",
            "printName": "State Netball Arena",
            "city": "Parkville",
            "alias": ["State Netball Arena - Parkville", "SNA", "State Netball Arena"]
        }
    },
    "wavl__": {
        "State League Women": { // Updated
            "id": 134,
            "long": "State League Women",
            "short": "SL Women"
        },
        "State League Men": {
            "id": 132,
            "long": "State League Men",
            "short": "SL Men"
        },
        "State League Reserves Women": {
            "id": 135,
            "long": "State League Reserves Women",
            "short": "SLR Women"
        },
        "State League Reserves Men": {
            "id": 133,
            "long": "State League Reserves Men",
            "short": "SLR Men"
        },
        "Division 1 Women": {
            "id": 157,
            "long": "Division 1 Women",
            "short": "Div 1 W"
        },
        "Division 1 Men": {
            "id": 156,
            "long": "Division 1 Men",
            "short": "Div 1 M"
        },
        "Division 1 Reserves Women": {
            "id": 157,
            "long": "Division 1 Reserves Women",
            "short": "Div 1R W"
        },
        "Division 1 Reserves Men": {
            "id": 156,
            "long": "Division 1 Reserves Men",
            "short": "Div 1R M"
        },
        "Division 2 Women": {
            "id": 159,
            "long": "Division 2 Women",
            "short": "Div 2 W"
        },
        "Division 2 Men": {
            "id": 158,
            "long": "Division 2 Men",
            "short": "Div 2 M"
        },
        "Division 3 Women": {
            "id": 161,
            "long": "Division 3 Women",
            "short": "Div 3 W"
        },
        "Division 3 Men": {
            "id": 160,
            "long": "Division 3 Men",
            "short": "Div 3 M"
        },
        "Division 4 Men": {
            "id": 162,
            "long": "Division 4 Men",
            "short": "Div 4 M"
        },
        "Division 4 Women": {
            "id": 154,
            "long": "Division 4 Women",
            "short": "Div 4 W"
        },
        "Division 5 Men": {
            "id": 163,
            "long": "Division 5 Men",
            "short": "Div 5 M"
        },
        "Division 6 Men": {
            "id": 164,
            "long": "Division 6 Men",
            "short": "Div 6 M"
        },
        "Division 7 Men": {
            "id": 155,
            "long": "Division 7 Men",
            "short": "Div 7 M"
        },
        "Division 8 Men": {
            "id": 165,
            "long": "Division 8 Men",
            "short": "Div 8 M"
        }
    },
    "jl__": {
        "7/8 Male Central North": {
            "id": 148,
            "long": "7/8 Male Cent. Nth.",
            "short": "7/8 M CN"
        },
        "9/10 Male North": {
            "id": 146,
            "long": "9/10 Male Nth.",
            "short": "9/10 M N"
        },
        "11/12 Male North": {
            "id": 149,
            "long": "11/12 Male Nth.",
            "short": "11/12 M N"
        },
        "7/8 Female North": {
            "id": 150,
            "long": "7/8 Female Nth.",
            "short": "7/8 F N"
        },
        "9/10 Female North": {
            "id": 181,
            "long": "9/10 Female Nth.",
            "short": "9/10 F N"
        },
        "11/12 Female Central North": {
            "id": 147,
            "long": "11/12 Female Cent. Nth.",
            "short": "11/12 F CN"
        },
        "9/10 Male Central": {
            "id": 139,
            "long": "9/10 Male Cent.",
            "short": "9/10 M C"
        },
        "11/12 Male Central South Metro": {
            "id": 1329,
            "long": "11/12 Male Cent. Sth. Metro",
            "short": "11/12 M CSM"
        },
        "7/8 Female Central": {
            "id": 1,
            "long": "7/8 Female Cent.",
            "short": "7/8 F C"
        },
        "9/10 Female Central": {
            "id": 138,
            "long": "9/10 Female Cent.",
            "short": "9/10 F C"
        },
        "11/12 Female Central South Metro": {
            "id": 2,
            "long": "11/12 Female Cent. Sth. Metro",
            "short": "11/12 F CSM"
        },
        "7/8 Male South Metro": {
            "id": 140,
            "long": "7/8 Male Sth. Metro",
            "short": "7/8 M SM"
        },
        "9 Male South Metro": {
            "id": 3,
            "long": "9 Male Sth. Metro",
            "short": "9 M SM"
        },
        "7/8 Female South Metro": {
            "id": 151,
            "long": "7/8 Female Sth. Metro",
            "short": "7/8 F SM"
        },
        "9/10 Female South Metro": {
            "id": 152,
            "long": "9/10 Female Sth. Metro",
            "short": "9/10 F SM"
        },
        "9-12 Male South": {
            "id": 4,
            "long": "9-12 Male Sth.",
            "short": "9-12 M S"
        },
        /*"10 Female South Pool 2": {
            "id": 153,
            "long": "10 Female South Pool 2",
            "short": "10 F S 2"
        },*/
        
        "9-12 Female South": {
            "id": 141,
            "long": "9-12 Female Sth.",
            "short": "9-12 F S"
        }
        /*
        "10 Male": {
            "id": 5,
            "long": "10 Male",
            "short": "10 M"
        },
        "11/12 Female North": {
            "id": 144,
            "long": "11/12 Female North",
            "short": "11/12 F N"
        },
        "11/12 Female South": {
            "id": 145,
            "long": "11/12 Female South",
            "short": "11/12 F S"
        },
        "11/12 Female": {
            "id": 6,
            "long": "11/12 Female",
            "short": "11/12 F"
        },
        "11/12 Male North": {
            "id": 142,
            "long": "11/12 Male North",
            "short": "11/12 M N"
        },
        "11/12 Male South": {
            "id": 143,
            "long": "11/12 Male South",
            "short": "11/12 M S"
        },
        "11/12 Male": {
            "id": 7,
            "long": "11/12 Male",
            "short": "11/12 M"
        }*/
    },
    "events":{
        "Manual Upload" : {
            "name" : "Manual Upload",
            "printPlayers": "true",
            "backup_players" : {
                "base_url": "N/A",
                "id_array": [],
                "new_id_array": {"N/A": []}
            }
        },
        "2026 WAVL Season": {
            "name": "2026 WAVL Season",
            "fixture_url": "https://volleyball.exposureevents.com/259835/wavl/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/259835/wavl/documents/players",
            "printPlayers": "true",
            "scoresheet": {
                "default": "12-sub"
            },
            "backup_players" : {
                //"base_url" : "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/232730/wavl/teamroster?divisionteamid=",
                "base_url" : "https://volleyball.exposureevents.com/259835/wavl/teamroster?divisionteamid=",
                "id_array" : [4891069, 4891070, 4891071, 4891072, 4891073, 4891074, 4891075, 4891076, 4891077, 4891078, 4891089, 4891090, 4891091, 4891092, 4891093, 4891094, 4891095, 4891096, 4891097, 4891098, 4891099, 4891100, 4891101, 4891102, 4891103, 4891104, 4891105, 4891106, 4891107, 4891108, 4891079, 4891080, 4891081, 4891082, 4891083, 4891084, 4891085, 4891086, 4891087, 4891088, 4891110, 5003252, 4891113, 5003235, 4891117, 5003239, 4891114, 5003240, 5003241, 5003242, 4891115, 5003244, 5003246, 5003245, 4891111, 4891112, 5003248, 5003250, 5003249, 4891118, 5003247, 5015931, 4891109, 5003251, 4891116, 5003256, 5003253, 5003257, 5003254, 4891120, 4891124, 5019091, 5015958, 4891123, 5015959, 4891128, 4891126, 4891122, 4891119, 5015965, 5015966, 5015967, 5015962, 4891125, 5015960, 4891127, 5015961, 5015963, 5015964, 4891131, 4891135, 4891134, 4891130, 4891137, 4891136, 4891129, 4891133, 4891138, 4891132, 4891147, 4891144, 4891140, 4891143, 4891139, 4891146, 4891148, 4891145, 4891141, 4891150, 4891151, 4891154, 4891157, 4891156, 4891149, 4891153, 4891152, 4891158, 4891155, 4891163, 4891168, 4891166, 4891160, 4891161, 4891164, 4891159, 4891165, 4891162, 4891167, 4891178, 4891170, 4891176, 4891174, 4891173, 4891177, 5027401, 4891175, 4891171, 4891172, 4909521, 4891039, 4891040, 4891041, 4891042, 4891043, 4891044, 4891051, 4891052, 4891053, 4891054, 4891055, 4909606, 4891056, 4891057, 4891058, 4891059, 4891060, 4891061, 4891063, 4891064, 4909605, 4891065, 4891066, 4891067, 4891068, 4909522, 4891045, 4891046, 4891047, 4891048, 4891049, 4891050],
                "new_id_array": {
                    'Division 1 Men' :              [4891069, 4891070, 4891071, 4891072, 4891073, 4891074, 4891075, 4891076, 4891077, 4891078],
                    'Division 1 Reserves Men' :     [4891089, 4891090, 4891091, 4891092, 4891093, 4891094, 4891095, 4891096, 4891097, 4891098],
                    'Division 1 Reserves Women' :   [4891099, 4891100, 4891101, 4891102, 4891103, 4891104, 4891105, 4891106, 4891107, 4891108],
                    'Division 1 Women' :            [4891079, 4891080, 4891081, 4891082, 4891083, 4891084, 4891085, 4891086, 4891087, 4891088],
                    'Division 2 Men' :              [4891110, 5003252, 4891113, 5003235, 4891117, 5003239, 4891114, 5003240, 5003241, 5003242, 4891115, 5003244, 5003246, 5003245, 4891111, 4891112, 5003248, 5003250, 5003249, 4891118, 5003247, 5015931, 4891109, 5003251, 4891116, 5003256, 5003253, 5003257, 5003254],
                    'Division 2 Women' :            [4891120, 4891124, 5019091, 5015958, 4891123, 5015959, 4891128, 4891126, 4891122, 4891119, 5015965, 5015966, 5015967, 5015962, 4891125, 5015960, 4891127, 5015961, 5015963, 5015964],
                    'Division 3 Men' :              [4891131, 4891135, 4891134, 4891130, 4891137, 4891136, 4891129, 4891133, 4891138, 4891132],
                    'Division 3 Women' :            [4891147, 4891144, 4891140, 4891143, 4891139, 4891146, 4891148, 4891145, 4891141],
                    'Division 4 Men' :              [4891150, 4891151, 4891154, 4891157, 4891156, 4891149, 4891153, 4891152, 4891158, 4891155],
                    'Division 5 Men' :              [4891163, 4891168, 4891166, 4891160, 4891161, 4891164, 4891159, 4891165, 4891162, 4891167],
                    'Division 6 Men' :              [4891178, 4891170, 4891176, 4891174, 4891173, 4891177, 5027401, 4891175, 4891171, 4891172],
                    'State League Men' :            [4909521, 4891039, 4891040, 4891041, 4891042, 4891043, 4891044],
                    'State League Reserves Men' :   [4891051, 4891052, 4891053, 4891054, 4891055, 4909606, 4891056, 4891057, 4891058, 4891059],
                    'State League Reserves Women' : [4891060, 4891061, 4891063, 4891064, 4909605, 4891065, 4891066, 4891067, 4891068],
                    'State League Women' :          [4909522, 4891045, 4891046, 4891047, 4891048, 4891049, 4891050]
                },
                "Znew_id_array":{"N/A": []}


                
            
            }
            // New backup url - https://volleyball.exposureevents.com/232730/wavl/search?eventid=232730
            // 

        },
        "EVA Beach 2025/26": {
            "name": "EVA Beach 2025/26",
            //"fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/257723/eva-beach-2025-26/documents/schedule?layout=datetime",
            "fixture_url": "https://volleyball.exposureevents.com/257723/eva-beach-2025-26/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/257723/eva-beach-2025-26/documents/players?r=434",
            "printPlayers": "true",
            "scoresheet": {
                "default": "EVA"
            },
            "backup_players" : {
                "base_url": "N/A",
                "id_array": [],
                "new_id_array": {"N/A": []}
            }
        },
        /*"2025 WAVL Season": {
            "name": "2025 WAVL Season",
            //"fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/232730/wavl/documents/schedule?layout=datetime",
            "fixture_url": "https://volleyball.exposureevents.com/232730/wavl/documents/schedule?layout=datetime",
            //"players_url_2": "https://volleyball.exposureevents.com/232730/wavl/documents/players",
            //"players_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/232730/wavl/documents/players",
            "players_url": "https://volleyball.exposureevents.com/232730/wavl/documents/players",
            "printPlayers": "true",
            "scoresheet": {
                "default": "12-sub"
            },
            "backup_players" : {
                //"base_url" : "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/232730/wavl/teamroster?divisionteamid=",
                "base_url" : "https://volleyball.exposureevents.com/232730/wavl/teamroster?divisionteamid=",
                "id_array" : [4145014, 4145015, 4145016, 4145017, 4145018, 4145019, 4145020, 4145021, 4145022, 4145023, 4145024, 4145025, 4145026, 4145027, 4145028, 4145029, 4145030, 4145031, 4145032, 4145033, 4145034, 4145035, 4145036, 4145037, 4145038, 4145039, 4145040, 4145041, 4145042, 4145043, 4145044, 4145045, 4145046, 4145047, 4145048, 4145049, 4145050, 4145051, 4145052, 4145053, 4145054, 4145055, 4145056, 4145057, 4145058, 4145059, 4145060, 4145061, 4145062, 4145063, 4145064, 4145065, 4145066, 4145067, 4145068, 4145069, 4145070, 4145071, 4145072, 4145073, 4145074, 4145075, 4145076, 4145077, 4145078, 4145079, 4145080, 4145081, 4145082, 4145083, 4145084, 4155000, 4244964, 4244965, 4245241, 4245242, 4245243, 4245244, 4245245, 4245246, 4245247, 4245248, 4245249, 4245250, 4245251, 4245252, 4245253, 4245254, 4245255, 4245256, 4245257, 4245258, 4245259, 4245260, 4245261, 4245262, 4245263, 4245264, 4245265, 4245266, 4245267, 4245268, 4245269, 4245270, 4245271, 4245272, 4245273, 4245274, 4245275, 4245276, 4245277, 4245278, 4245279, 4245280, 4245281, 4245282, 4245283, 4245284, 4245285, 4245286, 4245287, 4245288, 4245289, 4245290, 4245291, 4245292, 4245293, 4245294, 4245295, 4245296, 4245297, 4245298, 4245299, 4245300, 4245301, 4245302, 4245303, 4245304, 4245305, 4245306, 4245307, 4245308, 4245309, 4245310, 4245311, 4245312, 4245313, 4245314, 4245315, 4245316, 4245317, 4245318, 4245319, 4245320, 4245321, 4245322, 4245323, 4245324, 4245325, 4245326, 4245327, 4245328, 4245329, 4245330, 4245331],
                "Znew_id_array": {
                    'Division 1 Men' :              [4145050,4145046,4145048,4145053,4145051,4145054,4145047,4145045,4145049,4145052],
                    'Division 1 Reserves Men' :     [4145066,4145068,4145071,4145072,4145070,4145074,4145073,4145069,4145067,4145065],
                    'Division 1 Reserves Women' :   [4145080,4145076,4145078,4145082,4145081,4145083,4145075,4145084,4145079,4145077],
                    'Division 1 Women' :            [4145060,4145056,4145058,4145064,4145061,4145063,4145057,4145059,4145062,4145055],
                    'Division 2 Men' :              [4244964,4244965,4245241,4245243,4245245,4245247,4245250,4245249,4245253,4245254,4245242,4245244,4245246,4245248,4245252,4245251,4245255,4245256],
                    'Division 2 Women' :            [4245309,4245311,4245314,4245315,4245317,4245316,4245318,4245304,4245305,4245306,4245307,4245308,4245310,4245313,4245312],
                    'Division 3 Men' :              [4245263,4245258,4245257,4245261,4245266,4245265,4245268,4245267,4245270,4245272,4245273,4245259,4245260,4245262,4245264,4245269,4245271],
                    'Division 3 Women' :            [4245319,4245320,4245321,4245322,4245323,4245326,4245324,4245325,4245327,4245328,4245329,4245331,4245330],
                    'Division 4 Men' :              [4245274,4245275,4245276,4245277,4245278,4245279,4245280,4245281,4245282,4245283,4245284],
                    'Division 5 Men' :              [4245285,4245286,4245288,4245287,4245289,4245290,4245291,4245292],
                    'Division 6 Men' :              [4245293,4245294,4245300,4245296,4245295,4245301,4245297,4245298,4245302,4245303,4245299],
                    'State League Men' :            [4145016,4145018,4145017,4145015,4145019,4145014],
                    'State League Reserves Men' :   [4145034,4145028,4145033,4145031,4145035,4145030,4145027,4145032,4145029,4145026],
                    'State League Reserves Women' : [4145043,4145038,4145042,4145040,4145044,4155000,4145037,4145041,4145039,4145036],
                    'State League Women' :          [4145022,4145024,4145021,4145025,4145023,4145020]
                },
                "new_id_array":{"N/A": []}


                
            
            }
            // New backup url - https://volleyball.exposureevents.com/232730/wavl/search?eventid=232730
            // 

        },
        "2025 WAVjL Season": {
            "name": "2025 WAVjL Season",
            "fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/242327/wavjl/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/242327/wavjl/documents/players",
            "printPlayers": "false",
            "scoresheet": {
                "default": "junior"
            },
            "backup_players" : {
                "base_url": "N/A",
                "id_array": [],
                "new_id_array": {"N/A": []}
            }
        },
        "2025 VWA Schools Cup": {
            "name": "2025 VWA Schools Cup",
            "fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/247628/wa-schools-cup-2025/documents/schedule?layout=datetime&r=321",
            //"fixture_url": "https://volleyball.exposureevents.com/227017/wa-schools-cup/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/247628/wa-schools-cup-2025/documents/players?r=434",
            "printPlayers": "true",
            "scoresheet": {
                "honours": "12-sub",
                "honors": "12-sub",
                "default": "junior"
            },
            "backup_players" : {
                "base_url": "N/A",
                "id_array": [],
                "new_id_array": {"N/A": []}
            }
        },*/
        /*"2025 AVSL Season": {
            "name": "2025 AVSL Season",
            //"fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/253383/2025-mahindra-australian-volleyball-super-league/documents/schedule?layout=datetime",
            "fixture_url": "https://volleyball.exposureevents.com/253383/2025-mahindra-australian-volleyball-super-league/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/253383/2025-mahindra-australian-volleyball-super-league/documents/players",
            "printPlayers": "true",
            "scoresheet": {
                "default": "avsl",
                "finals": "avsl_finals"
            },
            "backup_players" : {
                "base_url": "N/A",
                "id_array": [],
                "new_id_array": {"N/A": []}
            }
        },
        "Test - 2025 AVSC": {
            "name": "Test - 2025 AVSC",
            //"fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/253383/2025-mahindra-australian-volleyball-super-league/documents/schedule?layout=datetime",
            "fixture_url": "https://volleyball.exposureevents.com/247701/2025-australian-volleyball-schools-cup/documents/schedule?layout=datetime&r=141",
            "players_url": "https://volleyball.exposureevents.com/247701/2025-australian-volleyball-schools-cup/documents/players",
            "printPlayers": "true",
            "scoresheet": {
                "default": "VA_T",
                "honours": "VA_5",
                "repecharge": "VA_3"
            },
            "backup_players" : {
                "base_url": "N/A",
                "id_array": [],
                "new_id_array": {"N/A": []}
            }
        },*//*
        "Test - 2025 Australian Youth Volleyball Championship": {
            "name": "Test - 2025 Australian Youth Volleyball Championship",
            "fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/245701/2025-australian-youth-volleyball-championships/documents/schedule?layout=datetime&r=321",
            //"fixture_url": "https://volleyball.exposureevents.com/227017/wa-schools-cup/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/245701/2025-australian-youth-volleyball-championships/documents/players?r=434",
            "printPlayers": "true",
            "scoresheet": {
                "finals": "ayvc-5",
                "default": "ayvc-3"
            },
            "backup_players" : {
                "base_url" : "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/245701/2025-australian-youth-volleyball-championships/teamroster?divisionteamid=",
                "id_array" : []
            }
        }*/
        /*"2024 WAVL Season": {
            "name": "2024 WAVL Season",
            "fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/220866/wavl/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/220866/wavl/documents/players",
            "printPlayers": "true",
            "scoresheet": {
                "default": "12-sub"
            }
        },*/
        /*"2024 WAVjL Season": {
            "name": "2024 WAVjL Season",
            "fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/220963/wavjl/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/220963/wavjl/documents/players",
            "printPlayers": "false",
            "scoresheet": {
                "default": "junior"
            }
        },*/
        /*"2024 VWA Schools Cup": {
            "name": "2024 VWA Schools Cup",
            "fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/227017/wa-schools-cup/documents/schedule?layout=datetime&r=321",
            //"fixture_url": "https://volleyball.exposureevents.com/227017/wa-schools-cup/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/227017/wa-schools-cup/documents/players",
            "printPlayers": "true",
            "scoresheet": {
                "honours": "12-sub",
                "default": "junior"
            }
        }*/
    }
}

const __PRESIDENTS__ = {
    "Apex": "Hugo Tam",
    "Apex Wolves": "Hugo Tam",
    "Balcatta": "Ari Zuvela",
    "Balcatta Blue": "Ari Zuvela",
    "Balcatta Red": "Ari Zuvela",
    "Baldivis": "Tanya Harris",
    "Baldivis Green": "Tanya Harris",
    "Bunbury": "Tim Collins",
    "Busselton": "David Boyle",
    "Chequers": "Dylan Wood",
    "Chequers White": "Dylan Wood",
    "Chequers Blue": "Dylan Wood",
    "Chequers Yellow": "Dylan Wood",
    "Fremantle": "Nic Moody",
    "Horizon": "Phyo Min Nathan",
    "Horizon Purple": "Phyo Min Nathan",
    "Mandurah": "Charlie Grigio",
    "Murdoch": "Justine Ross",
    "Murdoch Ragnarok": "Justine Ross",
    "Murdoch Ragnaraok": "Justine Ross",
    "Murdoch Valhalla": "Justine Ross",
    "Northern Stars": "Chapmann Chan",
    "Northern Stars Black": "Chapmann Chan",
    "Northern Stars Blue": "Chapmann Chan",
    "North Shore Rockets": "Jo-Han Bay",
    "North Shore Rockets Blue": "Jo-Han Bay",
    "North Shore Rockets White": "Jo-Han Bay",
    "Perth Scorpions": "James Benjamin",
    "Perth Scorpions Black": "James Benjamin",
    "Perth Scorpions Red": "James Benjamin",
    "Reds": "Anthony Meo",
    "Reds Black": "Anthony Meo",
    "Reds White": "Anthony Meo",
    "Reds Junior": "Logan Vanderweide",
    "Reds Junior Black": "Logan Vanderweide",
    "Rossmoyne": "Carol Hodgen",
    "Rossmoyne Black": "Carol Hodgen",
    "Rossmoyne White": "Carol Hodgen",
    "Southern Cross": "David Hedge",
    "Southern Cross Green": "David Hedge",
    "Southern Cross White": "David Hedge",
    "Southern Cross Navy": "David Hedge",
    "Southern Cross Masters": "Nick Mackenzie",
    "Southern Cross Masters Green": "Nick Mackenzie",
    "Southern Cross Masters White": "Nick Mackenzie",
    "UWA": "Mackenzie Cullip",
    "UWA Gold": "Mackenzie Cullip",
    "UWA Navy": "Mackenzie Cullip"
    // "United": "Tani Bernados",
    // "VIRSA": "Paramdeep Gill"
}
const __TEAMS__ = {
    // Updated
    '1 UWA': ['1', 'UWA', '1293', 'State League Men', ' '],
    '2 Northern Stars': ['2', 'Northern Stars', '1294', 'State League Men', 'Peter Woodthorpe'],
    '4 Reds': ['4', 'Reds', '1295', 'State League Men', 'Anthony Meo'],
    '5 Balcatta': ['5', 'Balcatta', '1296', 'State League Men', 'Layne van Smaalen'],
    '6 Rossmoyne': ['6', 'Rossmoyne', '1297', 'State League Men', ' '],
    '7 ECU': ['7', 'ECU', '1298', 'State League Men', 'Dylan Wood'],

    // Updated
    '11 UWA': ['11', 'UWA', '1299', 'State League Reserves Men', ' '],
    '12 Northern Stars': ['12', 'Northern Stars', '1300', 'State League Reserves Men', ' '],
    '13 Southern Cross': ['13', 'Southern Cross', '1301', 'State League Reserves Men', ' '],
    '14 Reds': ['14', 'Reds', '1302', 'State League Reserves Men', ' '],
    '15 Balcatta': ['15', 'Balcatta', '1303', 'State League Reserves Men', ' '],
    '16 Rossmoyne': ['16', 'Rossmoyne', '1304', 'State League Reserves Men', 'Layne van Smaalen'],
    '17 ECU': ['17', 'ECU', '1305', 'State League Reserves Men', ' '],
    '18 Busselton': ['18', 'Busselton', '1306', 'State League Reserves Men', ' '],
    '19 Fremantle': ['19', 'Fremantle', '1307', 'State League Reserves Men', ' '],
    '26 Apex': ['26', 'Apex', '1308', 'State League Reserves Men', 'Peter Woodthorpe'],

    // Not Updated
    '21 Fremantle': ['21', 'Fremantle', '1033', 'Division 1 Men'],
    '23 UWA': ['23', 'UWA', '1035', 'Division 1 Men'],
    '24 ECU': ['24', 'ECU', '1036', 'Division 1 Men'],
    '25 Reds': ['25', 'Reds', '1037', 'Division 1 Men'],
    '26 Balcatta': ['26', 'Balcatta', '1038', 'Division 1 Men'],
    '28 Rossmoyne': ['28', 'Rossmoyne', '1040', 'Division 1 Men'],
    '30 Northern Stars': ['30', 'Northern Stars', '1042', 'Division 1 Men'],
    '31 Murdoch': ['31', 'Murdoch', '1039', 'Division 1 Men'],
    '33 VIRSA': ['33', 'VIRSA', '1034', 'Division 1 Men'],
    '34 United': ['34', 'United', '1041', 'Division 1 Men'],

    '42 Southern Cross': ['42', 'Southern Cross', '1054', 'Division 2 Men'],
    '43 UWA': ['43', 'UWA', '1055', 'Division 2 Men'],
    '44 ECU': ['44', 'ECU', '1056', 'Division 2 Men'],
    '45 Reds': ['45', 'Reds', '1057', 'Division 2 Men'],
    '46 Balcatta': ['46', 'Balcatta', '1058', 'Division 2 Men'],
    '47 Mandurah': ['47', 'Mandurah', '1059', 'Division 2 Men'],
    '49 Busselton': ['49', 'Busselton', '1061', 'Division 2 Men'],
    '50 Northern Stars': ['50', 'Northern Stars', '1062', 'Division 2 Men'],
    '52 Reds Junior': ['52', 'Reds Junior', '1060', 'Division 2 Men'],
    '54 United': ['54', 'United', '1053', 'Division 2 Men'],

    '61 Fremantle': ['61', 'Fremantle', '1091', 'Division 3 Men'],
    '62 Southern Cross': ['62', 'Southern Cross', '1092', 'Division 3 Men'],
    '63 UWA': ['63', 'UWA', '1093', 'Division 3 Men'],
    '64 ECU': ['64', 'ECU', '1094', 'Division 3 Men'],
    '65 Reds': ['65', 'Reds', '1095', 'Division 3 Men'],
    '66 Balcatta': ['66', 'Balcatta', '1096', 'Division 3 Men'],
    '68 Rossmoyne': ['68', 'Rossmoyne', '1098', 'Division 3 Men'],
    '70 Northern Stars': ['70', 'Northern Stars', '1100', 'Division 3 Men'],
    '71 Murdoch': ['71', 'Murdoch', '1097', 'Division 3 Men'],
    '72 Reds Junior': ['72', 'Reds Junior', '1099', 'Division 3 Men'],

    '81 Fremantle': ['81', 'Fremantle', '1260', 'Division 4 Men'],
    '82 Southern Cross': ['82', 'Southern Cross', '1261', 'Division 4 Men'],
    '83 UWA': ['83', 'UWA', '1262', 'Division 4 Men'],
    '84 ECU': ['84', 'ECU', '1263', 'Division 4 Men'],
    '85 Reds': ['85', 'Reds', '1264', 'Division 4 Men'],
    '86 Balcatta': ['86', 'Balcatta', '1265', 'Division 4 Men'],
    '87 Mandurah': ['87', 'Mandurah', '1266', 'Division 4 Men'],
    '88 Rossmoyne': ['88', 'Rossmoyne', '1267', 'Division 4 Men'],
    '91 Murdoch': ['91', 'Murdoch', '1269', 'Division 4 Men'],
    '92 Reds Junior': ['92', 'Reds Junior', '1268', 'Division 4 Men'],

    // Updated
    '101 UWA': ['101', 'UWA', '1309', 'State League Women', ' '],
    '103 Southern Cross': ['103', 'Southern Cross', '1310', 'State League Women', ' '],
    '104 Reds': ['104', 'Reds', '1311', 'State League Women', 'Anthony Meo'],
    '105 Balcatta': ['105', 'Balcatta', '1312', 'State League Women', ' '],
    '106 Rossmoyne': ['106', 'Rossmoyne', '1313', 'State League Women', 'Layne van Smaalen'],
    '107 ECU': ['107', 'ECU', '1314', 'State League Women', ' '],

    // Updated
    '111 UWA': ['111', 'UWA', '1315', 'State League Reserves Women', ' '],
    '113 Southern Cross': ['113', 'Southern Cross', '1317', 'State League Reserves Women', ' '],
    '114 Reds': ['114', 'Reds', '1318', 'State League Reserves Women', ' '],
    '115 Balcatta': ['115', 'Balcatta', '1319', 'State League Reserves Women', ' '],
    '116 Rossmoyne': ['116', 'Rossmoyne', '1320', 'State League Reserves Women', ' '],
    '117 ECU': ['117', 'ECU', '1321', 'State League Reserves Women', ' '],
    '118 Busselton': ['118', 'Busselton', '1322', 'State League Reserves Women', ' '],
    '119 Fremantle': ['119', 'Fremantle', '1323', 'State League Reserves Women', ' '],
    '123 United': ['123', 'United', '1316', 'State League Reserves Women', ' '],
    '126 Apex': ['126', 'Apex', '1324', 'State League Reserves Women', ' '],

    // Not Updated
    '121 Fremantle': ['121', 'Fremantle', '1043', 'Division 1 Women'],
    '122 Southern Cross': ['122', 'Southern Cross', '1044', 'Division 1 Women'],
    '123 UWA': ['123', 'UWA', '1045', 'Division 1 Women'],
    '124 ECU': ['124', 'ECU', '1046', 'Division 1 Women'],
    '125 Reds': ['125', 'Reds', '1047', 'Division 1 Women'],
    '126 Balcatta': ['126', 'Balcatta', '1048', 'Division 1 Women'],
    '127 Mandurah': ['127', 'Mandurah', '1049', 'Division 1 Women'],
    '128 Rossmoyne': ['128', 'Rossmoyne', '1050', 'Division 1 Women'],
    '132 Reds Junior': ['132', 'Reds Junior', '1051', 'Division 1 Women'],
    '134 United': ['134', 'United', '1052', 'Division 1 Women'],

    '141 Fremantle': ['141', 'Fremantle', '1063', 'Division 2 Women'],
    '143 UWA': ['143', 'UWA', '1065', 'Division 2 Women'],
    '144 ECU': ['144', 'ECU', '1066', 'Division 2 Women'],
    '145 Reds': ['145', 'Reds', '1067', 'Division 2 Women'],
    '146 Balcatta': ['146', 'Balcatta', '1068', 'Division 2 Women'],
    '148 Rossmoyne': ['148', 'Rossmoyne', '1070', 'Division 2 Women'],
    '150 Northern Stars': ['150', 'Northern Stars', '1072', 'Division 2 Women'],
    '151 Murdoch': ['151', 'Murdoch', '1069', 'Division 2 Women'],
    '152 Reds Junior': ['152', 'Reds Junior', '1071', 'Division 2 Women'],
    '154 United': ['154', 'United', '1064', 'Division 2 Women'],

    '161 Fremantle': ['161', 'Fremantle', '1073', 'Division 3 Women'],
    '162 Southern Cross': ['162', 'Southern Cross', '1074', 'Division 3 Women'],
    '163 UWA': ['163', 'UWA', '1075', 'Division 3 Women'],
    '164 ECU': ['164', 'ECU', '1076', 'Division 3 Women'],
    '165 Reds': ['165', 'Reds', '1077', 'Division 3 Women'],
    '166 Balcatta': ['166', 'Balcatta', '1078', 'Division 3 Women'],
    '167 Mandurah': ['167', 'Mandurah', '1079', 'Division 3 Women'],
    '168 Rossmoyne': ['168', 'Rossmoyne', '1080', 'Division 3 Women'],
    '170 Northern Stars': ['170', 'Northern Stars', '1082', 'Division 3 Women'],
    '171 Murdoch': ['171', 'Murdoch', '1081', 'Division 3 Women'],

    '181 ECU Blue': ['181', 'ECU Blue', '1083', 'Division 4 Women'],
    '182 Southern Cross': ['182', 'Southern Cross', '1084', 'Division 4 Women'],
    '183 UWA': ['183', 'UWA', '1085', 'Division 4 Women'],
    '184 ECU Red': ['184', 'ECU Red', '1086', 'Division 4 Women'],
    '185 Northern Stars Black': ['185', 'Northern Stars Black', '1087', 'Division 4 Women'],
    '186 Balcatta': ['186', 'Balcatta', '1088', 'Division 4 Women'],
    '187 Northern Stars Blue': ['187', 'Northern Stars Blue', '1089', 'Division 4 Women'],

    '201 ECU Blue': ['201', 'ECU Blue', '1281', 'Division 5 Men'],
    '202 Southern Cross': ['202', 'Southern Cross', '1282', 'Division 5 Men'],
    '203 UWA': ['203', 'UWA', '1283', 'Division 5 Men'],
    '204 ECU Red': ['204', 'ECU Red', '1284', 'Division 5 Men'],
    '205 Reds': ['205', 'Reds', '1285', 'Division 5 Men'],
    '206 Balcatta': ['206', 'Balcatta', '1286', 'Division 5 Men'],
    '208 Rossmoyne': ['208', 'Rossmoyne', '1288', 'Division 5 Men'],
    '209 ECU White': ['209', 'ECU White', '1289', 'Division 5 Men'],
    '210 Northern Stars': ['210', 'Northern Stars', '1290', 'Division 5 Men'],
    '211 Murdoch': ['211', 'Murdoch', '1287', 'Division 5 Men'],

    '221 Northern Stars Black': ['221', 'Northern Stars Black', '1270', 'Division 6 Men'],
    '222 Southern Cross Green': ['222', 'Southern Cross Green', '1271', 'Division 6 Men'],
    '223 UWA': ['223', 'UWA', '1272', 'Division 6 Men'],
    '224 ECU Red': ['224', 'ECU Red', '1273', 'Division 6 Men'],
    '225 ECU Blue': ['225', 'ECU Blue', '1274', 'Division 6 Men'],
    '226 Balcatta': ['226', 'Balcatta', '1275', 'Division 6 Men'],
    '227 ECU White': ['227', 'ECU White', '1276', 'Division 6 Men'],
    '228 Rossmoyne': ['228', 'Rossmoyne', '1277', 'Division 6 Men'],
    '229 Southern Cross White': ['229', 'Southern Cross White', '1278', 'Division 6 Men'],
    '230 Northern Stars Blue': ['230', 'Northern Stars Blue', '1279', 'Division 6 Men'],
    '231 Murdoch': ['231', 'Murdoch', '1280', 'Division 6 Men']
}

const __SCORESHEETS__ = {
    
}