const FINALS_DATES = ["2022-09-04", "2022-09-11", "2022-09-18", "2023-08-27", "2023-09-03", "2023-09-10"];

const SL_FINALS_DATES = ["2023-07-14", "2023-07-16", "2023-07-22"]

const DO_NOT_PRINT = ["David Poulivaati"]

// This is used to get a list of all players. eg: https://vwa.bracketpal.com/leaders/season/27
const SEASON_ID = "27";

const __CONFIG__ = {
    "venues": {
        "Aquinas": {
            "name": "Aquinas",
            "top": "",
            "mid": "Aquinas",
            "bot": "College",
            "alias": ["Aquinas College", "Aquinas Col."]
        },
        "Ballajura": {
            "name": "Ballajura",
            "top": "",
            "mid": "",
            "bot": "Ballajura",
            "alias": ["Ballajura Indoor Spo"]
        },
        "Bendat": {
            "name": "Bendat",
            "top": "",
            "mid": "",
            "bot": "Bendat",
            "alias": []
        },
        "Cockburn": {
            "name": "Cockburn",
            "top": "",
            "mid": "",
            "bot": "Cockburn",
            "alias": ["Cockburn ARC"]
        },
        "Curtin Stadium": {
            "name": "Curtin Stadium",
            "top": "",
            "mid": "Curtin",
            "bot": "Stadium",
            "alias": ["Curtin"]
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
            "alias": ["Geographe", "Geographe Leisure", "Geographe Lei. Centr", "Geographe Lei. Cntr", "Geographe L. Ctr", "Geographe Lei."]
        },
        "Gold Netball Centre": {
            "name": "Gold Netball Centre",
            "top": "Gold",
            "mid": "Netball",
            "bot": "Centre",
            "alias": ["Gold Netball"]
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
            "alias": ["Halls Head Rec Centr", "Halls Head Rec"]
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
            "alias": ["HBF Stad. Claremont", "HBF", "HBF Stadium", "HBF Stad.", "HBF Sta. Claremont"]
        },
        "John Wollaston": {
            "name": "John Wollaston",
            "top": "",
            "mid": "John",
            "bot": "Wollaston",
            "alias": ["John Wollaston ACS C", "John Wollaston ACS"]
        },
        "Kingsway": {
            "name": "Kingsway",
            "top": "",
            "mid": "",
            "bot": "Kingsway",
            "alias": ["Kingsway Indoor Stad", "Kingsway Indoor"]
        },
        "Leschanault Leisure": {
            "name": "Leschanault Leisure",
            "top": "",
            "mid": "Leschanault",
            "bot": "Leisure",
            "alias": ["Leschanault", "Leschanault Lei."]
        },
        "Loftus": {
            "name": "Loftus",
            "top": "",
            "mid": "",
            "bot": "Loftus",
            "alias": []
        },
        "Lords": {
            "name": "Lords",
            "top": "",
            "mid": "",
            "bot": "Lords",
            "alias": []
        },
        "Mandurah ARC": {
            "name": "Mandurah ARC",
            "top": "",
            "mid": "Mandurah",
            "bot": "ARC",
            "alias": []
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
            "alias": ["Melville Leisure"]
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
            "alias": ["Rossmoyne SHS"]
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
            "mid": "Santa",
            "bot": "Maria",
            "alias": ["Southern River College", "Southern River Colle", "Southern River Col."]
        },
        "St Mary's": {
            "name": "St Mary's",
            "top": "",
            "mid": "",
            "bot": "St Mary's",
            "alias": []
        },
        "The Rise": {
            "name": "The Rise",
            "top": "",
            "mid": "",
            "bot": "The Rise",
            "alias": []
        },
        "Trinity College": {
            "name": "Trinity College",
            "top": "",
            "mid": "",
            "bot": "Trinity",
            "alias": ["Trinity", "Trinity Col."]
        },
        "UWA Recreation Centre": {
            "name": "UWA Recreation Centre",
            "top": "UWA",
            "mid": "Recreation",
            "bot": "Centre",
            "alias": ["UWA", "UWA Rec. Centre", "UWA Rec Centre"]
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
            "alias": ["Warwick Stadium", "Warwick Stad."]
        },
        "TBC": {
            "name": "TBC",
            "top": "",
            "mid": "",
            "bot": "",
            "alias": []
        },
        "Home Round": {
            "name": "Home Round",
            "top": "",
            "mid": "",
            "bot": "",
            "alias": []
        }
    },
    "wavl": {
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
        "State League Reserve Women": {
            "id": 135,
            "long": "State League Reserve Women",
            "short": "SLR Women"
        },
        "State League Reserve Men": {
            "id": 133,
            "long": "State League Reserve Men",
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
    "jl": {
        "7/8 Female North": {
            "id": 148,
            "long": "7/8 Female North",
            "short": "7/8 F N"
        },
        "7/8 Female South Pool 1": {
            "id": 149,
            "long": "7/8 Female South Pool 1",
            "short": "7/8 F S 1"
        },
        "7/8 Female South Pool 2": {
            "id": 150,
            "long": "7/8 Female South Pool 2",
            "short": "7/8 F S 2"
        },
        "7/8 Male North": {
            "id": 146,
            "long": "7/8 Male North",
            "short": "7/8 M N"
        },
        "7/8 Male South": {
            "id": 147,
            "long": "7/8 Male South",
            "short": "7/8 M S"
        },
        "9 Female": {
            "id": 139,
            "long": "9 Female",
            "short": "9 F"
        },
        "9 Male": {
            "id": 138,
            "long": "9 Male",
            "short": "9 M"
        },
        "10 Female North": {
            "id": 151,
            "long": "10 Female North",
            "short": "10 F N"
        },
        "10 Female South": {
            "id": 152,
            "long": "10 Female South",
            "short": "10 F S"
        },
        /*"10 Female South Pool 2": {
            "id": 153,
            "long": "10 Female South Pool 2",
            "short": "10 F S 2"
        },*/
        "10 Male North": {
            "id": 140,
            "long": "10 Male North",
            "short": "10 M N"
        },
        "10 Male South": {
            "id": 141,
            "long": "10 Male South",
            "short": "10 M S"
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
        "11/12 Male North": {
            "id": 142,
            "long": "11/12 Male North",
            "short": "11/12 M N"
        },
        "11/12 Male South": {
            "id": 143,
            "long": "11/12 Male South",
            "short": "11/12 M S"
        }
    }
}

const __PRESIDENTS__ = {
    "Apex": "Eugene Lee",
    "Balcatta": "Ari Zuvela",
    "Baldivis": "Denzil Fernandes",
    "Bunbury": "Tony Thornhill",
    "Busselton": "David Boyle",
    "Chequers": "Dylan Wood",
    "Chequers White": "Dylan Wood",
    "Chequers Yellow": "Dylan Wood",
    "ECU": "Dylan Wood",
    "Fremantle": "Matthew Andrews",
    "Mandurah": "Charlie Grigio",
    "Murdoch": "Justine Ross",
    "Murdoch Loki": "Justine Ross",
    "Murdoch Sylvie": "Justine Ross",
    "Murdoch Thor": "Justine Ross",
    "Murdoch Valkyrie": "Justine Ross",
    "Northern Stars": "Chapmann Chan",
    "Northern Stars Black": "Chapmann Chan",
    "Northern Stars Blue": "Chapmann Chan",
    "Northern Stars White": "Chapmann Chan",
    "Northshore": "Jo-Han Bay",
    "Northshore Rockets": "Jo-Han Bay",
    "Perth Scorpions": "Shaun Barnett",
    "Reds": "Anthony Meo",
    "Reds Junior": "Logan Vanderweide",
    "Rossmoyne": "Matthew Waddington",
    "Southern Cross": "Codi Versteeg / Remi Cousin",
    "Southern Cross Masters": "Toma Stanca",
    "UWA": "Nick Bew",
    // "United": "Tani Bernados",
    "VIRSA": "Paramdeep Gill"
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
    '11 UWA': ['11', 'UWA', '1299', 'State League Reserve Men', ' '],
    '12 Northern Stars': ['12', 'Northern Stars', '1300', 'State League Reserve Men', ' '],
    '13 Southern Cross': ['13', 'Southern Cross', '1301', 'State League Reserve Men', ' '],
    '14 Reds': ['14', 'Reds', '1302', 'State League Reserve Men', ' '],
    '15 Balcatta': ['15', 'Balcatta', '1303', 'State League Reserve Men', ' '],
    '16 Rossmoyne': ['16', 'Rossmoyne', '1304', 'State League Reserve Men', 'Layne van Smaalen'],
    '17 ECU': ['17', 'ECU', '1305', 'State League Reserve Men', ' '],
    '18 Busselton': ['18', 'Busselton', '1306', 'State League Reserve Men', ' '],
    '19 Fremantle': ['19', 'Fremantle', '1307', 'State League Reserve Men', ' '],
    '26 Apex': ['26', 'Apex', '1308', 'State League Reserve Men', 'Peter Woodthorpe'],

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
    '111 UWA': ['111', 'UWA', '1315', 'State League Reserve Women', ' '],
    '113 Southern Cross': ['113', 'Southern Cross', '1317', 'State League Reserve Women', ' '],
    '114 Reds': ['114', 'Reds', '1318', 'State League Reserve Women', ' '],
    '115 Balcatta': ['115', 'Balcatta', '1319', 'State League Reserve Women', ' '],
    '116 Rossmoyne': ['116', 'Rossmoyne', '1320', 'State League Reserve Women', ' '],
    '117 ECU': ['117', 'ECU', '1321', 'State League Reserve Women', ' '],
    '118 Busselton': ['118', 'Busselton', '1322', 'State League Reserve Women', ' '],
    '119 Fremantle': ['119', 'Fremantle', '1323', 'State League Reserve Women', ' '],
    '123 United': ['123', 'United', '1316', 'State League Reserve Women', ' '],
    '126 Apex': ['126', 'Apex', '1324', 'State League Reserve Women', ' '],

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

