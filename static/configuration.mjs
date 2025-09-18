const FINALS_DATES = ["2022-09-04", "2022-09-11", "2022-09-18", "2023-08-27", "2023-09-03", "2023-09-10", "2024-08-25", "2024-09-01", "2024-09-08"];

const SL_FINALS_DATES = ["2023-07-14", "2023-07-16", "2023-07-22", "2024-07-19", "2024-07-21", "2024-07-27"]

const AVSL_FINAL_DATES = ["2025-11-02"]

const AVSL_SEMI_DATES = ["2025-10-26"]

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
    "C2": 20,
    "C3": 30,
    "C4": 40,
    "C5": 50,
    "": 99,
    "President": 100
}

// This is used to convert the "(Pool x)" into "- x"
const DIV_GRADING_DATES = ["2025-04-06", "2025-04-13", "2025-04-20", "2025-04-27", "2025-05-04", "2025-05-11"]
const DIV_GRADING_DIVS = ["D2M", "D2W", "D3M"]

const DO_NOT_PRINT = ["David Poulivaati"]

// This is used to get a list of all players. eg: https://vwa.bracketpal.com/leaders/season/27
const SEASON_ID = "27";

const __CONFIG__ = {
    "venues": {
        
        "Adelaide 36ers Arena": {
            "name": "Adelaide 36ers Arena",
            "top": "",
            "mid": "",
            "bot": "36ers Arena",
            "city": "Findon",
            "alias": ["36ers", "Adelaide 36ers Arena"]
        },
        "Iona College, Lindum QLD": {
            "name": "Iona College, Lindum QLD",
            "top": "",
            "mid": "",
            "bot": "Iona College",
            "city": "Lindum",
            "alias": ["Iona College, Lindum QLD", "IONA"]
        },
        "Melbourne Sports and Aquatic Centre": {
            "name": "Melbourne Sports and Aquatic Centre",
            "top": "",
            "mid": "",
            "bot": "M S A C",
            "city": "Albert Park",
            "alias": ["Melbourne Sports and Aquatic Centre", "MSAC"]
        },
        "Netball Central, NSW": {
            "name": "Netball Central, NSW",
            "top": "",
            "mid": "",
            "bot": "Netball Central",
            "city": "Sydney Olympic Park",
            "alias": ["Netball Central, NSW", "NC"]
        },
        "Radford College": {
            "name": "Radford College",
            "top": "",
            "mid": "",
            "bot": "Radford College",
            "city": "Bruce",
            "alias": ["Radford College", "Radfo"]
        },
        "Reynella East College": {
            "name": "Reynella East College",
            "top": "",
            "mid": "",
            "bot": "Reynella East College",
            "city": "Reynella East",
            "alias": ["Reynella East College", "Reyne"]
        },
        "Shoalhaven Indoor Sports Centre": {
            "name": "Shoalhaven Indoor Sports Centre",
            "top": "",
            "mid": "",
            "bot": "Shoalhaven",
            "city": "Bomaderry",
            "alias": ["Shoalhaven Indoor Sports Centre", "SISC"]
        },
        "South Pine Indoor Sports Centre": {
            "name": "South Pine Indoor Sports Centre",
            "top": "",
            "mid": "",
            "bot": "South Pine",
            "city": "Brendale",
            "alias": ["South Pine Indoor Sports Centre", "SPine"]
        },
        "State Netball Arena - Parkville": {
            "name": "State Netball Arena - Parkville",
            "top": "",
            "mid": "",
            "bot": "State Netball Arena",
            "city": "Parkville",
            "alias": ["State Netball Arena - Parkville", "SNA"]
        },
        
        
        
        
        
        "Albany Leisure Centre": {
            "name": "Albany Leisure Centre",
            "top": "Albany",
            "mid": "Leisure",
            "bot": "Centre",
            "alias": ["ALAC", "Albany Leisure Centre", "Albany Leisure & Aquatic Centre", "Albany Leisure and Aquatic Centre"]
        },
        "Aquinas": {
            "name": "Aquinas",
            "top": "",
            "mid": "Aquinas",
            "bot": "College",
            "alias": ["Aquinas College", "Aquinas Col.", "Aquin"]
        },
        "Ashdale Secondary College": {
            "name": "Ashdale Secondary College",
            "top": "Ashdale",
            "mid": "Secondary",
            "bot": "College",
            "alias": ["ASH", "Ashdale College"]
        },
        "Ballajura": {
            "name": "Ballajura",
            "top": "",
            "mid": "",
            "bot": "Ballajura",
            "alias": ["Ballajura Indoor Spo"]
        },
        "Baldivis": {
            "name": "Baldivis",
            "top": "",
            "mid": "",
            "bot": "Baldivis",
            "alias": ["Baldivis", "Baldivis Indoor Sports Complex", "BISC"]
        },
        "Belmont Oasis": {
            "name": "Belmont Oasis",
            "top": "",
            "mid": "",
            "bot": "Belmont Oasis",
            "alias": ["Belmont Oasis", "Belmot", "BELM"]
        },
        "Bendat": {
            "name": "Bendat",
            "top": "",
            "mid": "",
            "bot": "Bendat",
            "city": "Floreat",
            "alias": ["Bendat Basketball Centre", "BEND", "Benda"]
        },
        "Bunbury PCYC": {
            "name": "Bunbury PCYC",
            "top": "",
            "mid": "",
            "bot": "Bunbury PCYC",
            "alias": ["Bunbury PCYC", "PCYC"]
        },
        "Cannington Leisureplex": {
            "name": "Cannington Leisureplex",
            "top": "",
            "mid": "Cannington",
            "bot": "Liesureplex",
            "alias": ["Cannington", "CANN"]
        },
        "Cockburn": {
            "name": "Cockburn",
            "top": "",
            "mid": "",
            "bot": "Cockburn",
            "alias": ["Cockburn ARC", "CARC"]
        },
        "Curtin Stadium": {
            "name": "Curtin Stadium",
            "top": "",
            "mid": "Curtin",
            "bot": "Stadium",
            "alias": ["Curtin"]
        },
        "Cyril Jackson Recreation Centre": {
            "name": "Cyril Jackson Recreation Centre",
            "top": "Cyril Jackson",
            "mid": "Recreation",
            "bot": "Centre",
            "alias": ["Cyril Jackson", "CJRC"]
        },
        "ECU Mt. Lawley": {
            "name": "ECU Mt. Lawley",
            "top": "",
            "mid": "ECU",
            "bot": "Mt. Lawley",
            "alias": ["ECU", "ECU Mount Lawley", "ECU Mt Lawley"]
        },
        "Geographe Leisure Centre": {
            "name": "Geographe Leisure Centre",
            "top": "Geographe",
            "mid": "Leisure",
            "bot": "Centre",
            "alias": ["Geographe", "Geographe Leisure", "Geographe Lei. Centr", "Geographe Lei. Cntr", "Geographe L. Ctr", "Geographe Lei.", "GEO"]
        },
        "Gold Netball Centre": {
            "name": "Gold Netball Centre",
            "top": "Gold",
            "mid": "Netball",
            "bot": "Centre",
            "alias": ["Gold Netball", "GOLD"]
        },
        "Guildford Grammar School": {
            "name": "Guildford Grammar School",
            "top": "",
            "mid": "Guildford",
            "bot": "Grammar",
            "alias": ["GGS", "Guildford", "Guildford Grammar", "Guildford Grammar School"]
        },
        "Greenwood College": {
            "name": "Greenwood College",
            "top": "",
            "mid": "Greenwood",
            "bot": "College",
            "alias": []
        },
        "Hale": {
            "name": "Hale",
            "top": "",
            "mid": "",
            "bot": "Hale",
            "alias": ["Hale School"]
        },
        "Halls Head Recreation Centre": {
            "name": "Halls Head Recreation Centre",
            "top": "Halls Head",
            "mid": "Recreation",
            "bot": "Centre",
            "alias": ["Halls Head Rec Centr", "Halls Head Rec", "HALLS"]
        },
        "Hartfield Park": {
            "name": "Hartfield Park",
            "top": "",
            "mid": "Hartfield",
            "bot": "Park",
            "alias": ["Hartfield", "Hartfield Rec Cntr"]
        },
        "HBF Stadium Claremont": {
            "name": "HBF Stadium Claremont",
            "top": "",
            "mid": "HBF",
            "bot": "Stadium",
            "alias": ["HBF Stad. Claremont", "HBF", "HBF Stadium", "HBF Stad.", "HBF Sta. Claremont", "HBF Stadium Claremont"]
        },
        "HBF Arena Joondalup": {
            "name": "HBF Arena Joondalup",
            "top": "",
            "mid": "HBF",
            "bot": "Arena",
            "alias": ["HBF Arena", "HBF Joondalup", "JOON"]
        },
        "Herb Graham Leisure Centre": {
            "name": "Herb Graham Leisure Centre",
            "top": "Herb Graham",
            "mid": "Leisure",
            "bot": "Centre",
            "alias": ["Herb Graham", "HERB"]
        },
        "John Wollaston": {
            "name": "John Wollaston",
            "top": "",
            "mid": "John",
            "bot": "Wollaston",
            "alias": ["John Wollaston ACS C", "John Wollaston ACS", "JOHN"]
        },
        "Karratha Leisureplex": {
            "name": "Karratha Leisureplex",
            "top": "",
            "mid": "Karratha",
            "bot": "Leisureplex",
            "alias": ["KL", "Karratha", "Karratha Leisureplex"]
        },
        "Kingsway": {
            "name": "Kingsway",
            "top": "",
            "mid": "",
            "bot": "Kingsway",
            "alias": ["Kingsway Indoor Stad", "Kingsway Indoor", "KING", "Kingsway Stadium"]
        },
        "Kwinana Recquatic": {
            "name": "Kwinana Recquatic",
            "top": "",
            "mid": "Kwinana",
            "bot": "Recquatic",
            "alias": ["Kwinana Recquatic", "Kwinana", "KWIN"]
        },
        "Leschenault Leisure Centre": {
            "name": "Leschenault Leisure Centre",
            "top": "",
            "mid": "Leschanault",
            "bot": "Leisure",
            "alias": ["Leschanault", "Leschanault Lei.", "LLC", "Leschenault Leisure"]
        },
        "Loftus": {
            "name": "Loftus",
            "top": "",
            "mid": "",
            "bot": "Loftus",
            "alias": ["Loft", "Loftus Recreation Centre"]
        },
        "Lords": {
            "name": "Lords",
            "top": "",
            "mid": "",
            "bot": "Lords",
            "alias": ["LORDS", "Lords Recreation Centre"]
        },
        "Lumen Christi": {
            "name": "Lumen Christi",
            "top": "Lumen",
            "mid": "Christi",
            "bot": "College",
            "alias": ["Lumen Christi College", "Lumen Christi", "LUMEN", "Lumen"]
        },
        "Mandurah ARC": {
            "name": "Mandurah ARC",
            "top": "",
            "mid": "Mandurah",
            "bot": "ARC",
            "alias": ["MARC"]
        },
        "MBC": {
            "name": "MBC",
            "top": "",
            "mid": "",
            "bot": "MBC",
            "alias": ["Mandurah Baptist College", "Mandurah Baptist Col", "Mandurah Baptist"]
        },
        "Melville LeisureFit": {
            "name": "Melville LeisureFit",
            "top": "",
            "mid": "Melville",
            "bot": "LeisureFit",
            "alias": ["Melville Leisure", "MLF"]
        },
        "Methodist Ladies College": {
            "name": "Methodist Ladies College",
            "top": "Methodist",
            "mid": "Ladies",
            "bot": "College",
            "alias": ["MLC", "Methodist L. Col", "Mthodist Ladies Co"]
        },
        "Murdoch Active": {
            "name": "Murdoch Active",
            "top": "",
            "mid": "Murdoch",
            "bot": "Active",
            "alias": []
        },
        "Naturaliste Community Centre": {
            "name": "Naturaliste Community Centre",
            "top": "Naturaliste",
            "mid": "Community",
            "bot": "Centre",
            "alias": ["NCC"]
        },
        "Newman College": {
            "name": "Newman College",
            "top": "",
            "mid": "Newman",
            "bot": "College",
            "alias": ["Newman"]
        },
        "Penrhos College": {
            "name": "Penrhos College",
            "top": "",
            "mid": "Penrhos",
            "bot": "College",
            "alias": ["Penrhos"]
        },
        "Rossmoyne": {
            "name": "Rossmoyne",
            "top": "",
            "mid": "",
            "bot": "Rossmoyne",
            "alias": ["Rossmoyne SHS", "ROSSY"]
        },
        "Sacred Heart": {
            "name": "Sacred Heart",
            "top": "",
            "mid": "Sacred Heart",
            "bot": "College",
            "alias": ["Sacred Heart College", "SHC"]
        },
        "Santa Maria": {
            "name": "Santa Maria",
            "top": "",
            "mid": "Santa",
            "bot": "Maria",
            "alias": ["Santa Maria College", "Santa Maria Col."]
        },
        "Southern River": {
            "name": "Southern River",
            "top": "",
            "mid": "Southern",
            "bot": "River",
            "alias": ["Southern River College", "Southern River Colle", "Southern River Col.", "SRC"]
        },
        "South West Sports Centre": {
            "name": "South West Sports Centre",
            "top": "",
            "mid": "South West",
            "bot": "Sports Centre",
            "alias": ["SW Sports", "SWSC"]
        },
        "Swan Active Midland": {
            "name": "Swan Active Midland",
            "top": "Swan",
            "mid": "Active",
            "bot": "Midland",
            "alias": ["Swan Active Midland", "Swan Active", "SAM", "Active Midland"]
        },
        "St Mary's": {
            "name": "St Mary's",
            "top": "",
            "mid": "",
            "bot": "St Mary's",
            "alias": []
        },
        "St James' Anglican School": {
            "name": "St James' Anglican School",
            "top": "St James'",
            "mid": "Anglican",
            "bot": "School",
            "alias": ["SJAS", "St James", "St James' Anglican School", "Saint James"]
        },
        "The Rise": {
            "name": "The Rise",
            "top": "",
            "mid": "",
            "bot": "The Rise",
            "alias": ["RISE"]
        },
        "Trinity College": {
            "name": "Trinity College",
            "top": "",
            "mid": "",
            "bot": "Trinity",
            "alias": ["Trinity", "Trinity Col.", "TRIN"]
        },
        "UWA Recreation Centre": {
            "name": "UWA Recreation Centre",
            "top": "UWA",
            "mid": "Recreation",
            "bot": "Centre",
            "alias": ["UWA", "UWA Rec. Centre", "UWA Rec Centre", "UWA Sport"]
        },
        "UWA Sport Science": {
            "name": "UWA Sport Science",
            "top": "UWA",
            "mid": "Sport",
            "bot": "Science",
            "alias": []
        },
        "Wesley College": {
            "name": "Wesley College",
            "top": "",
            "mid": "Wesley",
            "bot": "College",
            "alias": ["Wesley"]
        },
        "Warwick": {
            "name": "Warwick",
            "top": "",
            "mid": "",
            "bot": "Warwick",
            "alias": ["Warwick Stadium", "Warwick Stad.", "WARW"]
        },
        "TBC": {
            "name": "TBC",
            "top": "",
            "mid": "",
            "bot": "",
            "alias": ["To Be Confirmed"]
        },
        "Home Round": {
            "name": "Home Round",
            "top": "",
            "mid": "",
            "bot": "",
            "alias": []
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
        
        "2025 WAVL Season": {
            "name": "2025 WAVL Season",
            "fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/232730/wavl/documents/schedule?layout=datetime",
            //"players_url_2": "https://volleyball.exposureevents.com/232730/wavl/documents/players",
            "players_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/232730/wavl/documents/players",
            "printPlayers": "true",
            "scoresheet": {
                "default": "12-sub"
            },
            "backup_players" : {
                "base_url" : "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/232730/wavl/teamroster?divisionteamid=",
                "id_array" : [4145014, 4145015, 4145016, 4145017, 4145018, 4145019, 4145020, 4145021, 4145022, 4145023, 4145024, 4145025, 4145026, 4145027, 4145028, 4145029, 4145030, 4145031, 4145032, 4145033, 4145034, 4145035, 4145036, 4145037, 4145038, 4145039, 4145040, 4145041, 4145042, 4145043, 4145044, 4145045, 4145046, 4145047, 4145048, 4145049, 4145050, 4145051, 4145052, 4145053, 4145054, 4145055, 4145056, 4145057, 4145058, 4145059, 4145060, 4145061, 4145062, 4145063, 4145064, 4145065, 4145066, 4145067, 4145068, 4145069, 4145070, 4145071, 4145072, 4145073, 4145074, 4145075, 4145076, 4145077, 4145078, 4145079, 4145080, 4145081, 4145082, 4145083, 4145084, 4155000, 4244964, 4244965, 4245241, 4245242, 4245243, 4245244, 4245245, 4245246, 4245247, 4245248, 4245249, 4245250, 4245251, 4245252, 4245253, 4245254, 4245255, 4245256, 4245257, 4245258, 4245259, 4245260, 4245261, 4245262, 4245263, 4245264, 4245265, 4245266, 4245267, 4245268, 4245269, 4245270, 4245271, 4245272, 4245273, 4245274, 4245275, 4245276, 4245277, 4245278, 4245279, 4245280, 4245281, 4245282, 4245283, 4245284, 4245285, 4245286, 4245287, 4245288, 4245289, 4245290, 4245291, 4245292, 4245293, 4245294, 4245295, 4245296, 4245297, 4245298, 4245299, 4245300, 4245301, 4245302, 4245303, 4245304, 4245305, 4245306, 4245307, 4245308, 4245309, 4245310, 4245311, 4245312, 4245313, 4245314, 4245315, 4245316, 4245317, 4245318, 4245319, 4245320, 4245321, 4245322, 4245323, 4245324, 4245325, 4245326, 4245327, 4245328, 4245329, 4245330, 4245331]
            }
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
                "base_url" : "https://volleyball.exposureevents.com/242327/wavjl/documents/player",
                "id_array" : [""]
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
                "base_url" : "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/232730/wavl/teamroster?divisionteamid=",
                "id_array" : []
            }
        },
        "2025 AVSL Season": {
            "name": "2025 AVSL Season",
            "fixture_url": "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/253383/2025-mahindra-australian-volleyball-super-league/documents/schedule?layout=datetime",
            "players_url": "https://volleyball.exposureevents.com/253383/2025-mahindra-australian-volleyball-super-league/documents/players",
            "printPlayers": "true",
            "scoresheet": {
                "default": "avsl"
            },
            "backup_players" : {
                "base_url" : "https://volleyball.exposureevents.com/253383/2025-mahindra-australian-volleyball-super-league/documents/players",
                "id_array" : [""]
            }
        }/*,
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
    "Balcatta": "Ari Zuvela",
    "Baldivis": "Kali Langley",
    "Bunbury": "Alex Moir",
    "Busselton": "David Boyle",
    "Chequers": "Dylan Wood",
    "Chequers Blue": "Dylan Wood",
    "Chequers White": "Dylan Wood",
    "Chequers Yellow": "Dylan Wood",
    "ECU": "Dylan Wood",
    "Fremantle": "Hussain Alattas / Elijah Gravestock",
    "Horizon": "Phyo Min Nathan",
    "Mandurah": "Charlie Grigio",
    "Murdoch": "Justine Ross",
    "Murdoch University": "Justine Ross",
    "Murdoch Loki": "Justine Ross",
    "Murdoch Sylvie": "Justine Ross",
    "Murdoch Thor": "Justine Ross",
    "Murdoch Valkyrie": "Justine Ross",
    "Murdoch Knights": "Vikranth Ghandi",
    "Northern Stars": "Chapmann Chan",
    "Northern Stars Black": "Chapmann Chan",
    "Northern Stars Blue": "Chapmann Chan",
    "Northern Stars White": "Chapmann Chan",
    "Northshore": "Jo-Han Bay",
    "Northshore Rockets": "Jo-Han Bay",
    "North Shore Rockets": "Jo-Han Bay",
    "Perth Scorpions": "James Benjamin",
    "Reds": "Anthony Meo",
    "Reds Black": "Anthony Meo",
    "Reds Junior": "Logan Vanderweide",
    "Rossmoyne": "Carol Hodgen",
    "Southern Cross": "David Hedge",
    "Southern Cross Green": "David Hedge",
    "Southern Cross White": "David Hedge",
    "Southern Cross Masters": "Toma Stanca",
    "UWA": "Nick Bew"
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

