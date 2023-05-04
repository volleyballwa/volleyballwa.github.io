/**
 * Sets all venue checkboxes to be selected.
 * @param {*} checked 
 */
function select_all_venue(checked = true) {
    console.log("select_all_venues");
    const cbs = document.querySelectorAll('input[name="Venues"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
    document.getElementById("Checkbox32").setAttribute("onClick", "javascript: deselect_all_venue();");

}

/**
 * Sets all venue checkboxes to be deselected.
 * @param {*} checked 
 */
function deselect_all_venue(checked = false) {
    console.log("deselect_all_venues");
    const cbs = document.querySelectorAll('input[name="Venues"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
    document.getElementById("Checkbox32").setAttribute("onClick", "javascript: select_all_venue();");
}

/**
 * Sets all WAVL teams to be selected.
 * @param {*} checked 
 */
function select_all_wavl(checked = true) {
    console.log("select_all_wavl");
    const cbs = document.querySelectorAll('input[name="WAVL_teams"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
    document.getElementById("Checkbox33").setAttribute("onClick", "javascript: deselect_all_wavl();");

}

/**
 * Sets all WAVL teams to be deselected.
 * @param {*} checked 
 */
function deselect_all_wavl(checked = false) {
    console.log("deselect_all_wavl");
    const cbs = document.querySelectorAll('input[name="WAVL_teams"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
    document.getElementById("Checkbox33").setAttribute("onClick", "javascript: select_all_wavl();");
}

/**
 * Sets all WAVjL teams to be selected.
 * @param {*} checked 
 */
function select_all_wavjl(checked = true) {
    console.log("select_all_wavjl");
    const cbs = document.querySelectorAll('input[name="WAVjL_teams"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
    document.getElementById("Checkbox34").setAttribute("onClick", "javascript: deselect_all_wavjl();");

}

/**
 * Sets all WAVjL teams to be deselected.
 * @param {*} checked 
 */
function deselect_all_wavjl(checked = false) {
    console.log("deselect_all_wavjl");
    const cbs = document.querySelectorAll('input[name="WAVjL_teams"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
    document.getElementById("Checkbox34").setAttribute("onClick", "javascript: select_all_wavjl();");
}

/**
 * NOT USED
 * 
 * Enable all WAVL buttons

function enable_button() {
    document.getElementById("WAVL").disabled = false;
}
*/

/**
 * Initialises loading dots.
 */
var dots = window.setInterval(function() {
    var wait = document.getElementById("Button4");
    if (wait.value.length < 16)
        wait.value += ".";
    else if (wait.value.length < 17)
        wait.value = "Please Wait";
}, 1000);

function csvToArray(str, delimiter = ",") {
    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    
    console.log(rows);
    let return_array = [];

    for (let i = 0; i < rows.length; i++){
        let temp_row = rows[i].split(delimiter);
        // Ignore "commented" out rows.
        if ((temp_row[0][0] == "!" && temp_row[0][1] == "!") || temp_row.length < 2){
            console.log(temp_row);
        } else {
            // Do some data manipulation to ensure it's how we want it.
            temp_row[9] = temp_row[9].split("||");
            temp_row[10] = temp_row[10].padStart(2, "0");
            temp_row[11] = temp_row[11].padStart(2, "0");
            temp_row[13] = temp_row[13].padStart(2, "0");
            temp_row[14] = temp_row[14].padStart(2, "0");
            
            // Manually do sorting so it's not entered incorrectly
            temp_row[15] = [temp_row[12],temp_row[11], temp_row[10], temp_row[0], temp_row[5], temp_row[13]].join(" ")
            temp_row[16] = [temp_row[12],temp_row[11], temp_row[10], temp_row[0], temp_row[13], temp_row[5]].join(" ")

            // Parse names (if any are there)
            temp_row[17] = temp_row[17].split("^^");
            for(let j = 0; j < temp_row[17].length; j++) { temp_row[17][j] = temp_row[17][j].split("||"); }
            if (temp_row[17].length < 3){temp_row[17] = [[" "," "]]}
            
            temp_row[18] = temp_row[18].split("^^");
            for(let j = 0; j < temp_row[18].length; j++) { temp_row[18][j] = temp_row[18][j].split("||"); }
            if (temp_row[18].length < 3){temp_row[18] = [[" "," "]]}

            return_array.push(temp_row);
            console.log(rows[i]);
        }
    }
    console.log(return_array);
    return return_array;
  }

/**
 * Gets values from webpage and calls pdf_init.
 */
function WAVL_ONLINE() {
    console.log("WAVL_ONLINE");
    var venues = []
    var wavjl = []
    var wavl = []
    
    // Get all selected venues.
    document.getElementsByName("Venues").forEach((checkbox) => {
        if (document.getElementById(checkbox.id).checked) {
            venues.push(document.getElementById(checkbox.id).title)
        }
    })

    // Get all selected WAVL teams
    document.getElementsByName("WAVL_teams").forEach((checkbox) => {
        if (document.getElementById(checkbox.id).checked) {
            wavl.push(document.getElementById(checkbox.id).title)
        }
    })

    // Get all selected WAVjL teams
    document.getElementsByName("WAVjL_teams").forEach((checkbox) => {
        if (document.getElementById(checkbox.id).checked) {
            wavjl.push(document.getElementById(checkbox.id).title)
        }
    })

    // Update webpage to disable button and display a "Please Wait".
    document.getElementById("Button4").value = "Please Wait";
    window.setInterval(dots)
    document.getElementById("Button4").style.backgroundColor = "gold";
    document.getElementById("Button4").style.color = "black";
    document.getElementById("Button4").disabled = true;
    document.getElementById("csvUpload").disabled = true;

    let dates = getDates()
    
    // If a CSV file has been uploaded, do that.
    if (document.getElementById("csvUpload").value != "") {
        let uploaded_fixtures = [];
        const reader = new FileReader();
        
        // Parse CSV Upload
        reader.readAsText(document.getElementById("csvUpload").files[0])
        reader.onload = function (e) {
            const text = e.target.result;
            uploaded_fixtures = csvToArray(text);
            
            // Call modifyPdf
            modifyPdf(uploaded_fixtures, dates[2]).then(value => {
                Promise.all(value).then(value_3 => {
                    mergePDFDocuments(value_3).then(value_2 => {
                        let filename = "Scoresheets " + dates[2].toString() + ".pdf"
                        
                        download(value_2, filename, "application/pdf");
                        
                        window.clearInterval(dots);
                        document.getElementById("Button4").value = "Generate Scoresheets";
                        document.getElementById("Button4").style.backgroundColor = "#3370B7";
                        document.getElementById("Button4").style.color = "#FFFFFF"
                        document.getElementById("Button4").disabled = false;
                        document.getElementById("csvUpload").disabled = false;
                        document.getElementById("csvUpload").value = "";
                    })
                })
            })
        };
    } else {
        pdf_init(venues, wavl, wavjl, dates);
    }
    
}

/**
 * Gets Start, End, and Selected date, and returns them in an array.
 * @returns String[] [start_date, end_date, initial_date]
 */
function getDates(){
    console.log("getDates");
    let initial_date = $("#DatePicker2").datepicker("option", "dateFormat", "yy-mm-dd").val();
    var temp_end_date = $("#DatePicker2").datepicker("getDate");
    
    temp_end_date.setTime(temp_end_date.getTime() + (1 * (24*60*60*1000)));
   
    var mon = temp_end_date.getMonth() + 1;
    var end_date = temp_end_date.getFullYear().toString().split(-2) + "-" +
                        mon.toString().padStart(2, '0') + "-" +
                        temp_end_date.getDate().toString().padStart(2, '0');
    
    var temp_start_date = $("#DatePicker2").datepicker("getDate");

    // If Checkbox is ticked, get all values for the past week.
    if (document.getElementById("Checkbox99").checked) {
        temp_start_date.setTime(temp_start_date.getTime() + (-6 * (24*60*60*1000)));
    }
    
    var month = temp_start_date.getMonth() + 1;
    var start_date = temp_start_date.getFullYear().toString().split(-2) + "-" +
                        month.toString().padStart(2, '0') + "-" +
                        temp_start_date.getDate().toString().padStart(2, '0');
    
    return [start_date, end_date, initial_date]
}

/**
 * Axios request to get csv of all players.
 * @returns CSV
 */
async function getPlayerList() {
    axios;
    const head = 'https://cors-anywhere-og-v5kf.onrender.com/vwa.bracketpal.com/leaders/season/';
    var url = head + SEASON_ID + "?csv=1";
    console.log("get_player_list: " + url);
    return await axios.get(url);
}

/**
 * Parses the Season Leaders webpage, sorts all players into their teams alphabetically, then updates the fixtures.
 * @param {Array} players_list 
 * @param {Fixture} upd_fixtures 
 * @returns Updated Fixture with Team Lists
 */
function parsePlayerList(players_list, upd_fixtures) {
    let dict = {};

    // Split the CSV into an Array
    let player_data = players_list[0].data.split("\n").map(function (line) {
        return line.split(",");
    });

    // Update Keys and Dict.
    for (i = 1; i < player_data.length; i++) {
        let name = player_data[i][0];
        let team_id = player_data[i][2].split(" ")[0];
        // if name has (DP) or "*" or "^", do not add to dict.
        if (name.toLowerCase().includes("(dp)") || name.toLowerCase().includes("*") || name.toLowerCase().includes("^")){
            console.log(name);
        } else {
            if (!(Object.keys(dict).includes(team_id))) {
                dict[team_id] = [split_name(name.trim())]
            } else {
                dict[team_id].push(split_name(name.trim()))
            }
        }
    }

    for (i = 0; i < upd_fixtures.length; i++) {
        let team_a = upd_fixtures[i][6].split(" ")[0];
        let team_b = upd_fixtures[i][7].split(" ")[0];
        if (Object.keys(dict).includes(team_a) && Object.keys(dict).includes(team_b)) {
            upd_fixtures[i][17] = dict[team_a];
            upd_fixtures[i][18] = dict[team_b];
        }
    }
    return upd_fixtures;
}

/**
 * "Parent" function that basically everything else flows through. 
 * @param {String[]}    venues      Array of selected venues
 * @param {String[]}    wavl        Array of selected WAVL divisions
 * @param {String[]}    wavjl       Array of selected WAVjL divisions
 * @param {String[]}    dates       Array of yy-mm-dd strings indicating start, end, and selected dates.
 */
function pdf_init(venues, wavl, wavjl, dates) {
    console.log("pdf_init");
    // Get config data from selected teams, and add to an array
    var leagues = [];
    var fixtures = [];
    console.log(wavjl);
    for (var i = 0; i < wavl.length; i++) {
        leagues.push([__CONFIG__.wavl[wavl[i]].long, __CONFIG__.wavl[wavl[i]].short, __CONFIG__.wavl[wavl[i]].id])
    }
    for (var i = 0; i < wavjl.length; i++) {
        leagues.push([__CONFIG__.jl[wavjl[i]].long, __CONFIG__.jl[wavjl[i]].short, __CONFIG__.jl[wavjl[i]].id])
    }

    var indiv = get_single_fixture(dates[0], dates[1]);
    fixtures.push(indiv);

    Promise.all(fixtures).then(fix_val => {
        var team_list = []

        var upd_fixtures = html_to_fixture(venues, leagues, dates[2], fix_val);
        var player_List = getPlayerList();
        Promise.all([player_List]).then(players_list => {
            let finalised_fixtures = parsePlayerList(players_list, upd_fixtures);
            modifyPdf(finalised_fixtures, dates[2]).then(value => {
                Promise.all(value).then(value_3 => {
                    mergePDFDocuments(value_3).then(value_2 => {
                        let filename = "Scoresheets " + dates[2].toString() + ".pdf"
                        
                        download(value_2, filename, "application/pdf");
                        
                        window.clearInterval(dots);
                        document.getElementById("Button4").value = "Generate Scoresheets";
                        document.getElementById("Button4").style.backgroundColor = "#3370B7";
                        document.getElementById("Button4").style.color = "#FFFFFF"
                        document.getElementById("Button4").disabled = false;
                        document.getElementById("csvUpload").disabled = false;
                        document.getElementById("csvUpload").value = "";
                    })
                })
            })
        })
    })
}

/**
 * Axios request to get fixture.
 * @param {String} start_date   First date in range
 * @param {String} end_date     Second date in range
 * @returns 
 */
async function get_single_fixture(start_date, end_date) {
    axios;
    const head = 'https://cors-anywhere-og-v5kf.onrender.com/vwa.bracketpal.com/dailyform/range?start_date=';
    var url = head + start_date.toString() + "&end_date=" + end_date.toString();
    console.log("get_single_fixture: " + url);
    return await axios.get(url);
}

/**
 * NOT USED
 * 
 * Axios request to get single team list.
 * @param {Integer} team_id Team ID
 * @returns 
 */
async function get_single_team_list_html(team_id) {
    axios;
    const head = 'https://cors-anywhere-og-v5kf.onrender.com/vwa.bracketpal.com/teaminfo/';
    var url = head + team_id.toString();
    // console.log("get_single_fixture: " + url);
    return await axios.get(url);
}

/**
 * NOT USED
 * 
 * Parse Team List HTML and add to relevant fixture. 
 * @param {HTML[]} player_names_html 
 * @param {Fixtures[]} fixtures 
 * @returns {Fixtures[]} Updated array of fixtures
 */
function addTeamList(player_names_html, fixtures) {
    console.log("addTeamList");
    let j = 0;

    // Loop over each match (hence i+2)
    for (i = 0; i < player_names_html.length; i = i + 2){

        // Ensure that the fixture lines up with the player names. 
        // No need to check as the order the fixtures were added is the same order that the player HTML was added
        while (fixtures[j][9][0][0] != "D" && fixtures[j][9][0][0] != "S") {j = j + 1};
        
        // Parse Team A
        var Aparser = new DOMParser();
	    var Adoc = Aparser.parseFromString(player_names_html[i].request.responseText, "text/html");
        let Aselector = '[class^="team_roster_player wfid_temp"]';
        var Aelements = Adoc.querySelectorAll(Aselector);
	    const Anames = [...Aelements];
        console.log(Anames);
        console.log(Aelements);
        let Aplayer_names = Anames.map((tmp => split_name(tmp.innerText.trim())));

        // Parse Team B
        var Bparser = new DOMParser();
	    var Bdoc = Bparser.parseFromString(player_names_html[i+1].request.responseText, "text/html");
        let Bselector = '[class^="team_roster_player wfid_temp"]';
        var Belements = Bdoc.querySelectorAll(Bselector);
	    const Bnames = [...Belements];
        console.log(Bnames);
        console.log(Belements);
        let Bplayer_names = Bnames.map((tmp => split_name(tmp.innerText.trim())));

        fixtures[j][17] = Aplayer_names;
        fixtures[j][18] = Bplayer_names;
        j = j + 1;
    }
    return fixtures;
}

/**
 * Sort fixtures based on sorting string
 * yyyy mm dd venue court hour
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function sorting(a, b) {
    // console.log("sorting");
    if (a[15] === b[15]) {
        return 0;
    } else {
        return (a[15] < b[15]) ? -1 : 1;
    }
}

/**
 * Sort fixtures based on TIME sorting string
 * yyyy mm dd venue hour court
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function time_sorting(a, b) {
    // console.log("time_sorting");
    if (a[16] === b[16]) {
        return 0;
    } else {
        return (a[16] < b[16]) ? -1 : 1;
    }
}

// [zero_venue_split, _venue_0, _venue_1, _venue_2, _venue_full, _court, _team_a, _team_b, _duty, _division, _date_dd, _date_mm, _date_yyyy, _time_hr, _time_min, _sorting, _time_sorting, [_a_List], [b_List]]
// [     0              1          2          3          4         5        6         7     8         9        10         11         12        13          14       15          16            17         18
/**
 * Read values from the Fixtures and update a PDF.
 * @param {Fixture[]} fix 
 * @param {String} dates 
 * @returns Array of PDF's (Base64Doc)
 */
async function modifyPdf(fix, dates) {
    console.log("modifyPdf");
    console.log(fix);
    const {
        PDFDocument,
        StandardFonts,
        rgb
    } = PDFLib;
    var fixtures = fix;
    var total = new Array(fixtures.length);

    fixtures.sort(sorting);
    var WAVLurl = "https://og1764.github.io/static/def.pdf";
    var JLurl = "https://og1764.github.io/static/def_jl.pdf";
    var newWAVLurl = "https://og1764.github.io/static/new_def.pdf";
    var extraWAVLurl = "https://og1764.github.io/static/extra_def.pdf";
    //var extraWAVLurl = "./static/extra_def.pdf"

    const WAVLexistingPdfBytes = await fetch(WAVLurl).then(res => res.arrayBuffer());
    const JLexistingPdfBytes = await fetch(JLurl).then(resp => resp.arrayBuffer());
    const newWAVLexistingPdfBytes = await fetch(newWAVLurl).then(res => res.arrayBuffer());
    const extraWAVLexistingPdfBytes = await fetch(extraWAVLurl).then(res => res.arrayBuffer());

    // Used for new venues - converts all aliases back to main name.
    var __venues__ = {};
    var ven_keys = Object.keys(__CONFIG__.venues);
    for (var i = 0; i < ven_keys.length; i++){
        __venues__[__CONFIG__.venues[ven_keys[i]].name] = __CONFIG__.venues[ven_keys[i]].name
        var tmp = __CONFIG__.venues[ven_keys[i]].alias
        for (var j = 0; j < tmp.length; j++){
            __venues__[__CONFIG__.venues[ven_keys[i]].alias[j]] = __CONFIG__.venues[ven_keys[i]].name
        }
    }

    for (var i = 0; i < fixtures.length; i++) {
        // Load WAVL and Junior League scoresheets
        var WAVLurl = "https://og1764.github.io/static/def.pdf";
        var JLurl = "https://og1764.github.io/static/def_jl.pdf";
        var newWAVLurl = "https://og1764.github.io/static/new_def.pdf";
        var extraWAVLurl = "https://og1764.github.io/static/extra_def.pdf";

        //var WAVLexistingPdfBytes = await fetch(WAVLurl).then(res => res.arrayBuffer());

        var WAVLpdfDoc = await PDFLib.PDFDocument.load(WAVLexistingPdfBytes);
        var WAVLhelveticaFont = await WAVLpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var WAVLhelveticaBold = await WAVLpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var WAVLpages = await WAVLpdfDoc.getPages();
        var WAVLfirstPage = await WAVLpages[0];

        var newWAVLpdfDoc = await PDFLib.PDFDocument.load(newWAVLexistingPdfBytes);
        var newWAVLhelveticaFont = await newWAVLpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var newWAVLhelveticaBold = await newWAVLpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var newWAVLpages = await newWAVLpdfDoc.getPages();
        var newWAVLfirstPage = await newWAVLpages[0];

        var extraWAVLpdfDoc = await PDFLib.PDFDocument.load(extraWAVLexistingPdfBytes);
        var extraWAVLhelveticaFont = await extraWAVLpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var extraWAVLhelveticaBold = await extraWAVLpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var extraWAVLpages = await extraWAVLpdfDoc.getPages();
        var extraWAVLfirstPage = await extraWAVLpages[0];


        //var JLexistingPdfBytes = await fetch(JLurl).then(resp => resp.arrayBuffer());

        var JLpdfDoc = await PDFLib.PDFDocument.load(JLexistingPdfBytes);
        var JLhelveticaFont = await JLpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var JLhelveticaBold = await JLpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var JLpages = await JLpdfDoc.getPages();
        var JLfirstPage = await JLpages[0];

        // If WAVL Game (Divisions or State League)
        // use OLD scoresheet for divisions (for now)
        if ( false ) {  //fixtures[i][9][0][0] == "D" || fixtures[i][9][0][0] == "S") {

            // Team A Team List
            await WAVLfirstPage.drawText(fixtures[i][6], {
                x: 471,
                y: 498,
                size: 12,
                font: WAVLhelveticaFont
            })

            // Team A Players
            for (var k = 0; k < fixtures[i][17].length; k++) {
                if (k < Math.ceil(fixtures[i][17].length / 2)) {
                    // first name, first column
                    await WAVLfirstPage.drawText(fixtures[i][17][k][0].toUpperCase(), {
                        x: 442,
                        y: 472-Math.floor((17*k)),
                        size: 6,
                        font: WAVLhelveticaFont
                    })

                    // surname, first column
                    await WAVLfirstPage.drawText(fixtures[i][17][k][1].toUpperCase(), {
                        x: 442,
                        y: 472-Math.floor((17*k+8.5)),
                        size: 6,
                        font: WAVLhelveticaFont
                    })
                } else {
                    // first name, second column
                    await WAVLfirstPage.drawText(fixtures[i][17][k][0].toUpperCase(), {
                        x: 541,
                        y: 472-Math.floor((17*(k-Math.ceil(fixtures[i][17].length / 2)))),
                        size: 6,
                        font: WAVLhelveticaFont
                    })

                    // surname, second column
                    await WAVLfirstPage.drawText(fixtures[i][17][k][1].toUpperCase(), {
                        x: 541,
                        y: 472-Math.floor((17*(k-Math.ceil(fixtures[i][17].length / 2))+8.5)),
                        size: 6,
                        font: WAVLhelveticaFont
                    })
                }
                
            }

            // Team A, Second column numbers
            if (fixtures[i][17].length > 6) {
                let line_y_a = 472-Math.floor(17*Math.ceil(fixtures[i][17].length /2)-6);
                if (fixtures[i][17].length > 18) {
                    line_y_a = 274;
                }
                await WAVLfirstPage.drawLine({
                    start: { x: 539, y: 478 },
                    end: { x: 539, y: line_y_a },
                    thickness: 0.5,
                    color: rgb(0,0,0),
                    opacity: 1
                })
                
                await WAVLfirstPage.drawLine({
                    start: { x: 519, y: 478 },
                    end: { x: 519, y: line_y_a },
                    thickness: 0.5,
                    color: rgb(0,0,0),
                    opacity: 1
                })
            }

            // Team B Team List
            await WAVLfirstPage.drawText(fixtures[i][7], {
                x: 672,
                y: 498,
                size: 12,
                font: WAVLhelveticaFont
            })

            // Team B Players
            for (var k = 0; k < fixtures[i][18].length; k++) {
                if (k < Math.ceil(fixtures[i][18].length / 2)) {
                    // first name, first column
                    await WAVLfirstPage.drawText(fixtures[i][18][k][0].toUpperCase(), {
                        x: 645,
                        y: 472-Math.floor((17*k)),
                        size: 6,
                        font: WAVLhelveticaFont
                    })

                    // surname, first column
                    await WAVLfirstPage.drawText(fixtures[i][18][k][1].toUpperCase(), {
                        x: 645,
                        y: 472-Math.floor((17*k+8.5)),
                        size: 6,
                        font: WAVLhelveticaFont
                    })
                } else {
                    // first name, second column
                    await WAVLfirstPage.drawText(fixtures[i][18][k][0].toUpperCase(), {
                        x: 745,
                        y: 472-Math.floor((17*(k-Math.ceil(fixtures[i][18].length / 2)))),
                        size: 6,
                        font: WAVLhelveticaFont
                    })

                    // surname, second column
                    await WAVLfirstPage.drawText(fixtures[i][18][k][1].toUpperCase(), {
                        x: 745,
                        y: 472-Math.floor((17*(k-Math.ceil(fixtures[i][18].length / 2))+8.5)),
                        size: 6,
                        font: WAVLhelveticaFont
                    })
                }
            }
            
            if (fixtures[i][17].length > 6) {
                // Team B, second column numbers
                let line_y_b = 472-Math.floor(17*Math.ceil(fixtures[i][18].length /2)-6);
                if (fixtures[i][18].length > 18) {
                    // If 2 rows or less remaining, just draw the lines to the bottom of the player list.
                    line_y_b = 274;
                }
                await WAVLfirstPage.drawLine({
                    start: { x: 743, y: 478 },
                    end: { x: 743, y: line_y_b },
                    thickness: 0.5,
                    color: rgb(0,0,0),
                    opacity: 1
                })
                
                await WAVLfirstPage.drawLine({
                    start: { x: 723, y: 478 },
                    end: { x: 723, y: line_y_b },
                    thickness: 0.5,
                    color: rgb(0,0,0),
                    opacity: 1
                })
            }

            // Venue 0
            await WAVLfirstPage.drawText(fixtures[i][1], {
                x: parseInt((310 - measureText(fixtures[i][1], 10)).toString()),
                y: 575,
                size: 10,
                font: WAVLhelveticaFont
            })
            // Venue 1
            await WAVLfirstPage.drawText(fixtures[i][2], {
                x: parseInt((310 - measureText(fixtures[i][2], 10)).toString()),
                y: 566,
                size: 10,
                font: WAVLhelveticaFont
            })
            // Venue 2
            await WAVLfirstPage.drawText(fixtures[i][3], {
                x: parseInt((310 - measureText(fixtures[i][3], 10)).toString()),
                y: 557,
                size: 10,
                font: WAVLhelveticaFont
            })

            try {
                // Court Number
                await WAVLfirstPage.drawText(fixtures[i][5], {
                    x: parseInt((400 - measureBold(fixtures[i][5], 13).toString()).toString()),
                    y: 557,
                    size: 13,
                    font: WAVLhelveticaBold
                })
            } catch (e) {
                console.log(e);
            }
            try {
                var hour = " ";
                if (fixtures[i][13].toString().toLowerCase().substring(0, 3) != "tbc" && fixtures[i][14].toString().toLowerCase().substring(0, 3) != "tbc") {
                    if (parseInt(fixtures[i][13]).toString().length == 1) {
                        hour = " " + parseInt(fixtures[i][13]).toString()
                    } else {
                        hour = parseInt(fixtures[i][13]).toString()
                    }

                    // Time (hour hh)
                    await WAVLfirstPage.drawText(hour, {
                        x: parseInt((492 - measureBold(hour, 13) - measureBold(hour, 13)).toString()),
                        y: 557,
                        size: 13,
                        font: WAVLhelveticaBold
                    })

                    // Time (minute mm)
                    await WAVLfirstPage.drawText(fixtures[i][14], {
                        x: 500,
                        y: 557,
                        size: 13,
                        font: WAVLhelveticaBold
                    })
                }
            } catch (e) {
                // catch - continue
                console.log(e);
            }

            // Add a leading space to the day if required.
            var dd = parseInt(fixtures[i][10]).toString();
            if (dd.length == 1) {
                dd = " " + parseInt(fixtures[i][10]).toString()
            }

            // Date (day dd)
            await WAVLfirstPage.drawText(dd, {
                x: parseInt((596 - measureBold(dd, 13) - measureBold(dd, 13)).toString()),
                y: 557,
                size: 13,
                font: WAVLhelveticaBold
            })

            // Date (month mm)
            await WAVLfirstPage.drawText(parseInt(fixtures[i][11]).toString(), {
                x: parseInt((613 - measureBold(fixtures[i][11], 13)).toString()),
                y: 557,
                size: 13,
                font: WAVLhelveticaBold
            })

            // Date (year yy)
            await WAVLfirstPage.drawText(fixtures[i][12].slice(2, 4), {
                x: 625,
                y: 557,
                size: 13,
                font: WAVLhelveticaBold
            })

            // Division (short)
            await WAVLfirstPage.drawText(fixtures[i][9][1], {
                x: parseInt((773 - measureBold(fixtures[i][9][1], 13)).toString()),
                y: 557.5,
                size: 13,
                font: WAVLhelveticaBold
            })

            // Duty team
            await WAVLfirstPage.drawText(fixtures[i][8], {
                x: parseInt((710 - measureText(fixtures[i][8], 14)).toString()),
                y: 528,
                size: 14,
                font: WAVLhelveticaFont
            })

            // Team Names
            if (fixtures[i][6].length > 18 || fixtures[i][7].length > 18) {
                // Reduce text size if too long.
                await WAVLfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((320 - measureText(fixtures[i][6], 10)).toString()),
                    y: 527,
                    size: 10,
                    font: WAVLhelveticaFont
                })
                await WAVLfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((460 - measureText(fixtures[i][7], 10)).toString()),
                    y: 527,
                    size: 10,
                    font: WAVLhelveticaFont
                })
            } else {
                WAVLpdfDoc.TextAlignment = 1;
                await WAVLfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((320 - measureText(fixtures[i][6], 14)).toString()),
                    y: 527,
                    size: 14,
                    font: WAVLhelveticaFont
                })
                await WAVLfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((460 - measureText(fixtures[i][7], 14)).toString()),
                    y: 527,
                    size: 14,
                    font: WAVLhelveticaFont
                })
            }
            var saved = await WAVLpdfDoc.saveAsBase64();
        } else if (fixtures[i][9][0][0] == "D" || fixtures[i][9][0][0] == "S") {
            if (fixtures[i][17].length > 18 || fixtures[i][18].length > 18){
                

                if (fixtures[i][6].length > 20 || fixtures[i][7].length > 20) {
                    // Team A Team List
                    await extraWAVLfirstPage.drawText(fixtures[i][6], {
                        x: 295,
                        y: 744, //739
                        size: 9,
                        font: extraWAVLhelveticaFont
                    })

                    // Team B Team List
                    await extraWAVLfirstPage.drawText(fixtures[i][7], {
                        x: 460,
                        y: 744,
                        size: 9,
                        font: extraWAVLhelveticaFont
                    })

                } else {
                    // Team A Team List
                    await extraWAVLfirstPage.drawText(fixtures[i][6], {
                        x: 295,
                        y: 744, //739
                        size: 12,
                        font: extraWAVLhelveticaFont
                    })

                    // Team B Team List
                    await extraWAVLfirstPage.drawText(fixtures[i][7], {
                        x: 460,
                        y: 744,
                        size: 12,
                        font: extraWAVLhelveticaFont
                    })

                }

                // Team A Players
                for (var k = 0; k < fixtures[i][17].length; k++) {
                    if (k < Math.ceil(fixtures[i][17].length / 2)) {
                        // first name, first column
                        await extraWAVLfirstPage.drawText(fixtures[i][17][k][0].toUpperCase(), {
                            x: 275.5,
                            y: 733.5-((12.8*k)),
                            size: 6,
                            font: extraWAVLhelveticaFont
                        })

                        // surname, first column
                        await extraWAVLfirstPage.drawText(fixtures[i][17][k][1].toUpperCase(), {
                            x: 275.5,
                            y: 733.5-((12.8*k+6.0)),
                            size: 6,
                            font: extraWAVLhelveticaFont
                        })
                    } else {
                        // first name, second column
                        await extraWAVLfirstPage.drawText(fixtures[i][17][k][0].toUpperCase(), {
                            x: 353,
                            y: 733.5-((12.8*(k-Math.ceil(fixtures[i][17].length / 2)))),
                            size: 6,
                            font: extraWAVLhelveticaFont
                        })

                        // surname, second column
                        await extraWAVLfirstPage.drawText(fixtures[i][17][k][1].toUpperCase(), {
                            x: 353,
                            y: 733.5-((12.8*(k-Math.ceil(fixtures[i][17].length / 2))+6.0)),
                            size: 6,
                            font: extraWAVLhelveticaFont
                        })
                    }
                    
                }

                // Team A, Second column numbers
                if (fixtures[i][17].length > 6) {
                    let line_y_a = 739-(12.8*Math.ceil(fixtures[i][17].length /2));
                    //console.log(line_y_a);
                    await extraWAVLfirstPage.drawLine({
                        start: { x: 336, y: 738.6 },
                        end: { x: 336, y: line_y_a },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    
                    await extraWAVLfirstPage.drawLine({
                        start: { x: 351, y: 738.6 },
                        end: { x: 351, y: line_y_a },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                }

                // Team B Players
                for (var k = 0; k < fixtures[i][18].length; k++) {
                    if (k < Math.ceil(fixtures[i][18].length / 2)) {
                        // first name, first column
                        await extraWAVLfirstPage.drawText(fixtures[i][18][k][0].toUpperCase(), {
                            x: 440,
                            y: 733.5-((12.8*k)),
                            size: 6,
                            font: extraWAVLhelveticaFont
                        })

                        // surname, first column
                        await extraWAVLfirstPage.drawText(fixtures[i][18][k][1].toUpperCase(), {
                            x: 440,
                            y: 733.5-((12.8*k+6.0)),
                            size: 6,
                            font: extraWAVLhelveticaFont
                        })
                    } else {
                        // first name, second column
                        await extraWAVLfirstPage.drawText(fixtures[i][18][k][0].toUpperCase(), {
                            x: 517,
                            y: 733.5-((12.8*(k-Math.ceil(fixtures[i][18].length / 2)))),
                            size: 6,
                            font: extraWAVLhelveticaFont
                        })

                        // surname, second column
                        await extraWAVLfirstPage.drawText(fixtures[i][18][k][1].toUpperCase(), {
                            x: 517,
                            y: 733.5-((12.8*(k-Math.ceil(fixtures[i][18].length / 2))+6.0)),
                            size: 6,
                            font: extraWAVLhelveticaFont
                        })
                    }
                }
                
                if (fixtures[i][18].length > 6) {
                    // Team B, second column numbers
                    let line_y_b = 739-(12.8*Math.ceil(fixtures[i][18].length /2));
                    //console.log(line_y_b);

                    await extraWAVLfirstPage.drawLine({
                        start: { x: 515, y: 738.6 },
                        end: { x: 515, y: line_y_b },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    
                    await extraWAVLfirstPage.drawLine({
                        start: { x: 500, y: 738.6 },
                        end: { x: 500, y: line_y_b },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                }

                // Venue 0
                await extraWAVLfirstPage.drawText(__venues__[fixtures[i][0]], {
                    x: parseInt((275 - measureText(__venues__[fixtures[i][0]], 10)).toString()),
                    y: 781,
                    size: 10,
                    font: extraWAVLhelveticaFont
                })

                try {
                    // Court Number
                    await extraWAVLfirstPage.drawText(fixtures[i][5], {
                        x: parseInt((387.5 - measureBold(fixtures[i][5], 13).toString()).toString()),
                        y: 781,
                        size: 13,
                        font: extraWAVLhelveticaBold
                    })
                } catch (e) {
                    console.log(e);
                }
                try {
                    var time = " ";
                    if (fixtures[i][13].toString().toLowerCase().substring(0, 3) != "tbc" && fixtures[i][14].toString().toLowerCase().substring(0, 3) != "tbc") {
                        time = fixtures[i][13].toString() + ":" + fixtures[i][14].toString()

                        // Time (hh:mm)
                        await extraWAVLfirstPage.drawText(time, {
                            x: parseInt((457 - measureBold(time, 13)).toString()),
                            y: 781,
                            size: 13,
                            font: extraWAVLhelveticaBold
                        })
                    }
                } catch (e) {
                    // catch - continue
                    console.log(e);
                }

                // Add a leading space to the day if required.
                var ddmmyy = fixtures[i][10].toString() + "/" + fixtures[i][11].toString() + "/" + fixtures[i][12].slice(2,4).toString()

                await extraWAVLfirstPage.drawText(ddmmyy, {
                    x: parseInt((546 - measureBold(ddmmyy, 13)).toString()),
                    y: 781,
                    size: 13,
                    font: extraWAVLhelveticaBold
                })

                // Division (short)
                await extraWAVLfirstPage.drawText(fixtures[i][9][1], {
                    x: parseInt((528 - measureBold(fixtures[i][9][1], 13)).toString()),
                    y: 797,
                    size: 13,
                    font: extraWAVLhelveticaBold
                })

                // Duty team
                await extraWAVLfirstPage.drawText(fixtures[i][8], {
                    x: parseInt((332 - measureText(fixtures[i][8], 14)).toString()),
                    y: 797,
                    size: 14,
                    font: extraWAVLhelveticaFont
                })

                // Club President
                console.log(fixtures[i][6].substring(fixtures[i][6].indexOf(' ') + 1));
                console.log(fixtures[i][7].substring(fixtures[i][7].indexOf(' ') + 1));
                let a_pres = __PRESIDENTS__[fixtures[i][6].substring(fixtures[i][6].indexOf(' ') + 1)];
                let b_pres = __PRESIDENTS__[fixtures[i][7].substring(fixtures[i][7].indexOf(' ') + 1)];
                console.log(a_pres);
                console.log(b_pres);
                await extraWAVLfirstPage.drawText(a_pres, {
                    x: parseInt((325 - measureText(a_pres, 10)).toString()),
                    y: 462,
                    size: 10,
                    font: extraWAVLhelveticaFont
                })
                await extraWAVLfirstPage.drawText(b_pres, {
                    x: parseInt((520 - measureText(b_pres, 10)).toString()),
                    y: 462,
                    size: 10,
                    font: extraWAVLhelveticaFont
                })

                // Team Names
                if (fixtures[i][6].length > 18 || fixtures[i][7].length > 18) {
                    // Reduce text size if too long.
                    await extraWAVLfirstPage.drawText(fixtures[i][6], {
                        x: parseInt((262 - measureText(fixtures[i][6], 10)).toString()),
                        y: 813.5,
                        size: 10,
                        font: extraWAVLhelveticaBold
                    })
                    await extraWAVLfirstPage.drawText(fixtures[i][7], {
                        x: parseInt((480 - measureText(fixtures[i][7], 10)).toString()),
                        y: 813.5,
                        size: 10,
                        font: extraWAVLhelveticaBold
                    })
                } else {
                    extraWAVLpdfDoc.TextAlignment = 1;
                    await extraWAVLfirstPage.drawText(fixtures[i][6], {
                        x: parseInt((260 - measureText(fixtures[i][6], 14)).toString()),
                        y: 813.5,
                        size: 14,
                        font: extraWAVLhelveticaBold
                    })
                    await extraWAVLfirstPage.drawText(fixtures[i][7], {
                        x: parseInt((480 - measureText(fixtures[i][7], 14)).toString()),
                        y: 813.5,
                        size: 14,
                        font: extraWAVLhelveticaBold
                    })
                }

                var saved = await extraWAVLpdfDoc.saveAsBase64();
                
            } else {

                if (fixtures[i][6].length > 20 || fixtures[i][7].length > 20) {
                    // Team A Team List
                    await newWAVLfirstPage.drawText(fixtures[i][6], {
                        x: 295,
                        y: 743.5, //739
                        size: 9,
                        font: newWAVLhelveticaFont
                    })

                    // Team B Team List
                    await newWAVLfirstPage.drawText(fixtures[i][7], {
                        x: 460,
                        y: 743.5,
                        size: 9,
                        font: newWAVLhelveticaFont
                    })

                } else {
                    // Team A Team List
                    await newWAVLfirstPage.drawText(fixtures[i][6], {
                        x: 295,
                        y: 743.5, //739
                        size: 12,
                        font: newWAVLhelveticaFont
                    })

                    // Team B Team List
                    await newWAVLfirstPage.drawText(fixtures[i][7], {
                        x: 460,
                        y: 743.5,
                        size: 12,
                        font: newWAVLhelveticaFont
                    })
                }

                // Team A Players
                for (var k = 0; k < fixtures[i][17].length; k++) {
                    if (k < Math.ceil(fixtures[i][17].length / 2)) {
                        // first name, first column
                        await newWAVLfirstPage.drawText(fixtures[i][17][k][0].toUpperCase(), {
                            x: 276,
                            y: 716-((15.75*k)),
                            size: 6,
                            font: newWAVLhelveticaFont
                        })

                        // surname, first column
                        await newWAVLfirstPage.drawText(fixtures[i][17][k][1].toUpperCase(), {
                            x: 276,
                            y: 716-((15.75*k+7.0)),
                            size: 6,
                            font: newWAVLhelveticaFont
                        })
                    } else {
                        // first name, second column
                        await newWAVLfirstPage.drawText(fixtures[i][17][k][0].toUpperCase(), {
                            x: 353,
                            y: 716-((15.75*(k-Math.ceil(fixtures[i][17].length / 2)))),
                            size: 6,
                            font: newWAVLhelveticaFont
                        })

                        // surname, second column
                        await newWAVLfirstPage.drawText(fixtures[i][17][k][1].toUpperCase(), {
                            x: 353,
                            y: 716-((15.75*(k-Math.ceil(fixtures[i][17].length / 2))+7.0)),
                            size: 6,
                            font: newWAVLhelveticaFont
                        })
                    }
                    
                }

                // Team A, Second column numbers
                if (fixtures[i][17].length > 6) {
                    let line_y_a = 717.5-(15.75*Math.ceil(fixtures[i][17].length /2) - 5);

                    //console.log(line_y_a);
                    await newWAVLfirstPage.drawLine({
                        start: { x: 336, y: 722 },
                        end: { x: 336, y: line_y_a },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    
                    await newWAVLfirstPage.drawLine({
                        start: { x: 351, y: 722 },
                        end: { x: 351, y: line_y_a },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                }

                // Team B Players
                for (var k = 0; k < fixtures[i][18].length; k++) {
                    if (k < Math.ceil(fixtures[i][18].length / 2)) {
                        // first name, first column
                        await newWAVLfirstPage.drawText(fixtures[i][18][k][0].toUpperCase(), {
                            x: 440,
                            y: 716-((15.75*k)),
                            size: 6,
                            font: newWAVLhelveticaFont
                        })

                        // surname, first column
                        await newWAVLfirstPage.drawText(fixtures[i][18][k][1].toUpperCase(), {
                            x: 440,
                            y: 716-((15.75*k+7.0)),
                            size: 6,
                            font: newWAVLhelveticaFont
                        })
                    } else {
                        // first name, second column
                        await newWAVLfirstPage.drawText(fixtures[i][18][k][0].toUpperCase(), {
                            x: 517,
                            y: 716-((15.75*(k-Math.ceil(fixtures[i][18].length / 2)))),
                            size: 6,
                            font: newWAVLhelveticaFont
                        })

                        // surname, second column
                        await newWAVLfirstPage.drawText(fixtures[i][18][k][1].toUpperCase(), {
                            x: 517,
                            y: 716-((15.75*(k-Math.ceil(fixtures[i][18].length / 2))+7.0)),
                            size: 6,
                            font: newWAVLhelveticaFont
                        })
                    }
                }
                
                if (fixtures[i][18].length > 6) {
                    // Team B, second column numbers
                    let line_y_b = 717.5-(15.75*Math.ceil(fixtures[i][18].length /2) - 5);
                    //console.log(line_y_b);

                    await newWAVLfirstPage.drawLine({
                        start: { x: 515, y: 722 },
                        end: { x: 515, y: line_y_b },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    
                    await newWAVLfirstPage.drawLine({
                        start: { x: 500, y: 722  },
                        end: { x: 500, y: line_y_b },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                }

                // Venue 0
                await newWAVLfirstPage.drawText(__venues__[fixtures[i][0]], {
                    x: parseInt((275 - measureText(__venues__[fixtures[i][0]], 10)).toString()),
                    y: 767.5,
                    size: 10,
                    font: newWAVLhelveticaFont
                })

                try {
                    // Court Number
                    await newWAVLfirstPage.drawText(fixtures[i][5], {
                        x: parseInt((387.5 - measureBold(fixtures[i][5], 13).toString()).toString()),
                        y: 767.5,
                        size: 13,
                        font: newWAVLhelveticaBold
                    })
                } catch (e) {
                    console.log(e);
                }
                try {
                    var time = " ";
                    if (fixtures[i][13].toString().toLowerCase().substring(0, 3) != "tbc" && fixtures[i][14].toString().toLowerCase().substring(0, 3) != "tbc") {
                        time = fixtures[i][13].toString() + ":" + fixtures[i][14].toString()

                        // Time (hh:mm)
                        await newWAVLfirstPage.drawText(time, {
                            x: parseInt((459 - measureBold(time, 13)).toString()),
                            y: 767.5,
                            size: 13,
                            font: newWAVLhelveticaBold
                        })
                    }
                } catch (e) {
                    // catch - continue
                    console.log(e);
                }

                // Add a leading space to the day if required.
                var ddmmyy = fixtures[i][10].toString() + "/" + fixtures[i][11].toString() + "/" + fixtures[i][12].slice(2,4).toString()

                await newWAVLfirstPage.drawText(ddmmyy, {
                    x: parseInt((547 - measureBold(ddmmyy, 13)).toString()),
                    y: 767.5,
                    size: 13,
                    font: newWAVLhelveticaBold
                })

                // Division (short)
                await newWAVLfirstPage.drawText(fixtures[i][9][1], {
                    x: parseInt((529 - measureBold(fixtures[i][9][1], 13)).toString()),
                    y: 784.5,
                    size: 13,
                    font: newWAVLhelveticaBold
                })

                // Duty team
                await newWAVLfirstPage.drawText(fixtures[i][8], {
                    x: parseInt((332 - measureText(fixtures[i][8], 14)).toString()),
                    y: 784.5,
                    size: 14,
                    font: newWAVLhelveticaFont
                })

                console.log(fixtures[i][6].substring(fixtures[i][6].indexOf(' ') + 1).replaceAll("*","").replace("(10)","").replace("(11)","").replace("(12)","").trim());
                console.log(fixtures[i][7].substring(fixtures[i][7].indexOf(' ') + 1).replaceAll("*","").replace("(10)","").replace("(11)","").replace("(12)","").trim());
                //let a_pres = __PRESIDENTS__[fixtures[i][6].substring(fixtures[i][6].indexOf(' ') + 1)];
                //let b_pres = __PRESIDENTS__[fixtures[i][7].substring(fixtures[i][7].indexOf(' ') + 1)];

                let a_pres = __PRESIDENTS__[fixtures[i][6].substring(fixtures[i][6].indexOf(' ') + 1).replaceAll("*","").replace("(10)","").replace("(11)","").replace("(12)","").trim()];
                let b_pres = __PRESIDENTS__[fixtures[i][7].substring(fixtures[i][7].indexOf(' ') + 1).replaceAll("*","").replace("(10)","").replace("(11)","").replace("(12)","").trim()];
                console.log(a_pres);
                console.log(b_pres);
                await newWAVLfirstPage.drawText(a_pres, {
                    x: parseInt((325 - measureText(a_pres, 10)).toString()),
                    y: 462,
                    size: 10,
                    font: newWAVLhelveticaFont
                })
                await newWAVLfirstPage.drawText(b_pres, {
                    x: parseInt((520 - measureText(b_pres, 10)).toString()),
                    y: 462,
                    size: 10,
                    font: newWAVLhelveticaFont
                })

                // Team Names
                if (fixtures[i][6].length > 20 || fixtures[i][7].length > 20) {
                    // Reduce text size if too long.
                    await newWAVLfirstPage.drawText(fixtures[i][6], {
                        x: parseInt((262 - measureText(fixtures[i][6], 10)).toString()),
                        y: 804.5,
                        size: 10,
                        font: newWAVLhelveticaBold
                    })
                    await newWAVLfirstPage.drawText(fixtures[i][7], {
                        x: parseInt((480 - measureText(fixtures[i][7], 10)).toString()),
                        y: 804.5,
                        size: 10,
                        font: newWAVLhelveticaBold
                    })
                } else {
                    newWAVLpdfDoc.TextAlignment = 1;
                    await newWAVLfirstPage.drawText(fixtures[i][6], {
                        x: parseInt((262 - measureText(fixtures[i][6], 14)).toString()),
                        y: 804.5,
                        size: 14,
                        font: newWAVLhelveticaBold
                    })
                    await newWAVLfirstPage.drawText(fixtures[i][7], {
                        x: parseInt((480 - measureText(fixtures[i][7], 14)).toString()),
                        y: 804.5,
                        size: 14,
                        font: newWAVLhelveticaBold
                    })
                }

                var saved = await newWAVLpdfDoc.saveAsBase64();
            }
        } else {
            // Junior League
            
            // Venue (full)
            await JLfirstPage.drawText(fixtures[i][4], {
                x: parseInt((190 - measureText(fixtures[i][4], 13)).toString()),
                y: 504,
                size: 13,
                font: JLhelveticaFont
            })

            // Court number
            await JLfirstPage.drawText(fixtures[i][5], {
                x: parseInt((562 - measureText(fixtures[i][5], 13)).toString()),
                y: 504,
                size: 13,
                font: JLhelveticaFont
            })

            try {
                // Time (hh:mm)
                let time = parseInt(fixtures[i][13]).toString() + ":" + fixtures[1][14];
                if (parseInt(fixtures[i][13]).toString().length == 1) {
                    time = " " + time;
                }
                await JLfirstPage.drawText(time, {
                    x: 442,
                    y: 504,
                    size: 13,
                    font: JLhelveticaFont
                })
            } catch (e) {
                console.log(e)
            }

            try {
                // Date (dd/mm/yyyy)
                let dt = parseInt(fixtures[i][10]).toString() + "/" + parseInt(fixtures[i][11]).toString() + "/" + fixtures[i][12]
                await JLfirstPage.drawText(dt, {
                    x: 315,
                    y: 504,
                    size: 13,
                    font: JLhelveticaFont
                })
            } catch (e) {
                console.log(e)
            }
            
            // Division (Long)
            await JLfirstPage.drawText(fixtures[i][9][0], {
                x: parseInt((720 - measureText(fixtures[i][9][0], 13)).toString()),
                y: 504,
                size: 13,
                font: JLhelveticaFont
            })

            // Team Names
            if (fixtures[i][6].length > 25 || fixtures[i][7].length > 25) {
                // Reduce text size if too long.
                await JLfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((250 - measureText(fixtures[i][6], 10)).toString()),
                    y: 472,
                    size: 10,
                    font: JLhelveticaFont
                })
                await JLfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((660 - measureText(fixtures[i][7], 10)).toString()),
                    y: 472,
                    size: 10,
                    font: JLhelveticaFont
                })
            } else {
                JLpdfDoc.TextAlignment = 1;
                await JLfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((250 - measureText(fixtures[i][6], 14)).toString()),
                    y: 472,
                    size: 14,
                    font: JLhelveticaFont
                })
                await JLfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((660 - measureText(fixtures[i][7], 14)).toString()),
                    y: 472,
                    size: 14,
                    font: JLhelveticaFont
                })
            }
            var saved = await JLpdfDoc.saveAsBase64();
        }
        total[i] = saved;
    }

    // If CSV is to be downloaded
    if (document.getElementById("Checkbox99").checked) {
        var csv = [
            ["Date", "Venue", "Time", "Div", "Court", "Team A", "Team B", "Duty Team", "Time", "Sets", "Referee 1st", "Qualifications", "Referee 2nd", "Qualifications", "Assessor"]
        ];
        fixtures.sort(time_sorting);
        for (var i = 0; i < fixtures.length; i++) {
            // Don't include junior league games in spreadsheet
            if (fixtures[i][9][0][0] == "D" || fixtures[i][9][0][0] == "S"){
                let date = fixtures[i][10] + "." + fixtures[i][11] + "." + fixtures[i][12];
                let full_time = fixtures[i][13] + ":" + fixtures[i][14];
                let crt = fixtures[i][5];
                
                if (!(crt)) {
                    crt = "";
                } else {
                    crt = crt.trim();
                }
                
                // Add data to CSV
                csv.push([date, fixtures[i][4], full_time, fixtures[i][9][1], crt, fixtures[i][6], fixtures[i][7], fixtures[i][8], "", "", "", "", "", "", ""]);
            }
        }

        try {
            // Download CSV
            let csvContent = "data:text/csv;charset=utf-8," + csv.map(e => e.join(",")).join("\n");
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            let filename = "Runsheet" + dates + ".csv";
            link.setAttribute("download", filename);
            document.body.appendChild(link); // Required for File Download

            link.click();
        } catch (e) {
            console.log(e)
        }
    }
    return await total;
}

/**
 * Merge modified PDF's into one single PDF.
 * @param {*} documents 
 * @returns 
 */
async function mergePDFDocuments(documents) {
    console.log("mergePDFDocuments");
    var mergedPdf = await PDFLib.PDFDocument.create();
    for (var i = 0; i < documents.length; i++) {
        var docone = await PDFLib.PDFDocument.load(await documents[i]);
        var copiedPagesone = await mergedPdf.copyPages(docone, docone.getPageIndices());
        for (var j = 0; j < docone.getPageIndices().length; j++) {
            mergedPdf.addPage(await copiedPagesone[j]);
        }
    }
    var saved = await mergedPdf.save();
    return await saved;
}

/**
 * NOT USED
 * 
 * Get a div from an ID
 * @param {*} id 
 * @returns 
 */
function div_from_id(id) {
    console.log("div_from_id");
    let wavl_keys = Object.keys(__CONFIG__.wavl);
    let jl_keys = Object.keys(__CONFIG__.jl);
    for (var i = 0; i < wavl_keys.length; i++) {
        if (__CONFIG__.wavl[wavl_keys[i]].id == id) {
            return [__CONFIG__.wavl[wavl_keys[i]].long, __CONFIG__.wavl[wavl_keys[i]].short, __CONFIG__.wavl[wavl_keys[i]].id]
        }
    }
    for (var i = 0; i < __CONFIG__.jl.length; i++) {
        if (__CONFIG__.jl[jl_keys[i]].id == id) {
            return [__CONFIG__.jl[jl_keys[i]].long, __CONFIG__.jl[jl_keys[i]].short, __CONFIG__.jl[jl_keys[i]].id]
        }
    }
    return false
}

/**
 * Add aliases to the venue array.
 * @param {*} venues 
 * @returns [resultant, alias_layer]
 */
function add_aliases(venues) {
    console.log("add_aliases");
    let resultant = [];
    var low_venues = [];
    let alias_layer = {};
    let all_venues = Object.keys(__CONFIG__.venues);

    for (var j = 0; j < venues.length; j++) {
        low_venues.push(venues[j].toLowerCase())
    }

    for (var i = 0; i < all_venues.length; i++) {
        if (low_venues.includes(__CONFIG__.venues[all_venues[i]].name.toLowerCase())) {
            resultant.push(__CONFIG__.venues[all_venues[i]].name);
            for (var k = 0; k < __CONFIG__.venues[all_venues[i]].alias.length; k++) {
                var _alias = __CONFIG__.venues[all_venues[i]].alias[k];
                resultant.push(_alias)
                alias_layer[_alias] = __CONFIG__.venues[[all_venues[i]]].name;
            }
            alias_layer[__CONFIG__.venues[[all_venues[i]]].name] = __CONFIG__.venues[[all_venues[i]]].name;
        }
    }
    return [resultant, alias_layer];
}

/**
 * Parse HTML and return an array of Fixtures
 * @param {*} venues 
 * @param {*} leagues 
 * @param {*} date 
 * @param {*} all_html 
 * @returns Fixture[]
 */
function html_to_fixture(venues, leagues, date, all_html) {
    console.log("html_to_fixture");
    let fixtures_list = []
    let temporary = add_aliases(venues);
    let alias_layer = temporary[1];
    let venue_usage = temporary[0];
    const NamesArr = leagues.flat();
    
    for (let x = 0; x < all_html.length; x++) {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(all_html[x].request.responseText, 'text/html');
        let all_tables = htmlDoc.getElementsByTagName("table")
        let numFix = all_tables.length;

        for (let y = 0; y < numFix; y = y + 3) {
            let meta = y + 1;
            let data = y + 2;
            
            let meta_table = all_tables[meta];
            let data_table = all_tables[data];

            let dt = meta_table.rows.item(1).cells.item(0).innerText;
            let match_division = meta_table.rows.item(1).cells.item(2).innerText;
            
            if (!(NamesArr.includes(match_division))) {
                // If division is not selected, then break the for loop. No need to continue parsing data.
                console.log(match_division);
                console.log(NamesArr);
                continue;
            }

            if ((!(dt === date)) && (!(document.getElementById("Checkbox99").checked))){
                // Ensure you aren't picking dates from the future
                console.log("BREAK DUE TO DATE DIFFERENCE");
                console.log(dt);
                continue;
            }

            try {
                let rowLength = data_table.rows.length;
                for (let i = 1; i < rowLength; i++) {
                    let cells = data_table.rows.item(i).cells;
                    let venue = cells.item(1).innerText;
                    let venue_split = venue.split(" Ct")
                    let zero_venue_split = venue_split[0].replaceAll(" Ct", "");
                    if (Number.isInteger(parseInt(zero_venue_split.slice(-2).trim()))) {
                        zero_venue_split = zero_venue_split.slice(0, -1).trim();
                    }
                    //console.log("*"+zero_venue_split+"*");
                    //console.log(venue_usage);
                    if (venue_usage.includes(zero_venue_split)) {
                        let _court = "";
                        let _duty = " ";
                        let _time_hr = " ";
                        let _time_min = " ";
                        let _division = [];
                        console.log(venue_split);
                        try {
                            if (Number.isInteger(parseInt(venue_split[0].slice(-2).trim()))) {
                                _court = parseInt(venue_split[0].slice(-2).trim()).toString();
                                console.log(parseInt(venue_split[0].slice(-2).trim()));
                            } else {
                                _court = cells.item(1).innerText.split("Ct")[1].trim();
                            }
                        } catch (e) {
                            _court = "";
                            console.log("Why");
                        }

                        if (_court == null) {
                            _court = "";
                        }
                        console.log(_court);
                        const _team_a = cells.item(2).innerText;
                        const _team_b = cells.item(5).innerText;

                        // Try Catch exists for junior league and home rounds.
                        if (match_division[0] == "D" || match_division[0] == "S") {
                            try {
                                _duty = cells.item(7).innerText.slice(5);
                            } catch (e) {
                                console.log(e);
                                _duty = " ";
                            }
                        }

                        // Update duty if using Previous Loser.
                        if (FINALS_DATES.includes(dt) && _duty.length < 4) {
                            _duty = "Previous Loser";
                        }

                        if (match_division[0] == "D" || match_division[0] == "S") {
                            _division = [
                                __CONFIG__.wavl[match_division].long,
                                __CONFIG__.wavl[match_division].short,
                                __CONFIG__.wavl[match_division].id
                            ];
                        } else {
                            _division = [
                                __CONFIG__.jl[match_division].long,
                                __CONFIG__.jl[match_division].short,
                                __CONFIG__.jl[match_division].id
                            ];
                        }

                        let _date = dt.split('-');
                        let _date_dd = _date[2].padStart(2, "0");
                        let _date_mm = _date[1].padStart(2, "0");
                        let _date_yyyy = _date[0];
                        
                        // Check if time exists. Some home rounds (Busselton) don't put times on Bracketpal.
                        try {
                            let time = cells.item(0).innerText.split(":")
                            _time_hr = time[0].padStart(2, "0");
                            _time_min = time[1].padStart(2, "0");
                        } catch (e) {
                            console.log(e);
                            _time_hr = " ";
                            _time_min = " ";
                        }

                        let venue_realname = alias_layer[zero_venue_split];

                        const _venue_0 = __CONFIG__.venues[venue_realname].top;
                        const _venue_1 = __CONFIG__.venues[venue_realname].mid;
                        const _venue_2 = __CONFIG__.venues[venue_realname].bot;

                        let _venue_full = __CONFIG__.venues[venue_realname].name;
                        let _sorting = _date_yyyy + " " + _date_mm + " " + _date_dd + " " + _venue_full + " " + _court + " " + _time_hr
                        let _time_sorting = _date_yyyy + " " + _date_mm + " " + _date_dd + " " + _venue_full + " " + _time_hr + " " + _court;

                        fixtures_list.push([zero_venue_split, _venue_0, _venue_1, _venue_2, _venue_full, _court,
                            _team_a, _team_b, _duty, _division, _date_dd, _date_mm, _date_yyyy, _time_hr, _time_min, 
                            _sorting, _time_sorting, [], []
                        ])
                    } else {
                        // Venue either not in list OR is a bye.
                        try {
                            if (Number.isInteger(parseInt(zero_venue_split.substring(0, 2).trim()))) {
                                console.log("BYE: " + zero_venue_split);
                            } else {
                                console.log("UNUSED VENUE\n***")
                                console.log(zero_venue_split)
                                console.log("***")
                            }
                        } catch (e) {
                            console.log("UNUSED VENUE\n***")
                            console.log(zero_venue_split)
                            console.log("***")
                        }
                    }
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    return fixtures_list
}

/**
 * Find the centre most space, and split a name into two based on that space.
 * @param {String} name 
 * @returns 
 */
function split_name(name){
    // console.log("split_name");
    let myArray = name.split(" ");
    let comparator = 99999;
    let front = "";
    let back = "";

    for (let i = 0; i < myArray.length-1; i++) {
        let fr = myArray.slice(0, i+1).join(" ");
        let bk = myArray.slice(i+1).join(" ");
        let diff = Math.abs(fr.length - bk.length);

        if (diff < comparator){
            front = fr;
            back = bk;
            comparator = diff;
        }
    }
    return [front, back];
}

/**
 * Find offset for centre of string
 * @param   {String}    string 
 * @param   {Integer}   fontSize Default = 10
 * @returns {Integer}   Width of text
 */
function measureText(string, fontSize = 10) {
    // console.log("measureText");
    const widths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1546875, 0.278125, 0.4, 0.721875, 0.5609375, 0.9609375, 0.7203125, 0.240625, 0.4, 0.4, 0.48125, 0.640625, 0.278125, 0.4, 0.278125, 0.4015625, 0.5609375, 0.55625, 0.5609375, 0.5609375, 0.640625, 0.5609375, 0.5609375, 0.5609375, 0.5609375, 0.5609375, 0.278125, 0.278125, 0.640625, 0.640625, 0.640625, 0.5609375, 1.1203125, 0.88125, 0.7203125, 0.8, 0.7234375, 0.7203125, 0.640625, 0.8, 0.7234375, 0.278125, 0.5, 0.8, 0.640625, 0.88125, 0.7234375, 0.8, 0.7203125, 0.8, 0.8, 0.7203125, 0.640625, 0.7234375, 0.8015625, 1.121875, 0.8015625, 0.8015625, 0.721875, 0.3203125, 0.48125, 0.3203125, 0.48125, 0.721875, 0.334375, 0.5609375, 0.640625, 0.5609375, 0.5609375, 0.5609375, 0.48125, 0.5609375, 0.5609375, 0.240625, 0.321875, 0.5609375, 0.240625, 0.88125, 0.5609375, 0.5609375, 0.640625, 0.5609375, 0.4, 0.5609375, 0.4015625, 0.5609375, 0.6421875, 0.88125, 0.6421875, 0.6421875, 0.6421875, 0.4, 0.2609375, 0.48125, 0.640625]
    const avg = 0.5823026315789476
    try {
        var tmp = string
            .split('')
            .map(c => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
            .reduce((cur, acc) => acc + cur) * fontSize
        return tmp / 2;
    } catch {
        return 0
    }
}

/**
 * Find offset for centre of Bold string.
 * @param   {String}    string 
 * @param   {Integer}   fontSize Default = 10
 * @returns {Integer}   Width of text
 */
function measureBold(string, fontSize = 10) {
    // console.log("measureBold");
    const widths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1265625, 0.334375, 0.409375, 0.6421875, 0.5609375, 0.88125, 0.8, 0.18125, 0.4, 0.4, 0.5, 0.721875, 0.25, 0.4, 0.25, 0.4015625, 0.5609375, 0.5, 0.5609375, 0.5, 0.5609375, 0.5, 0.5609375, 0.5609375, 0.5609375, 0.5609375, 0.278125, 0.3203125, 0.721875, 0.721875, 0.721875, 0.48125, 0.9609375, 0.88125, 0.8015625, 0.7203125, 0.88125, 0.721875, 0.721875, 0.8, 0.88125, 0.4, 0.5625, 0.88125, 0.721875, 1.0421875, 0.88125, 0.8, 0.721875, 0.8, 0.88125, 0.5609375, 0.640625, 0.88125, 0.88125, 1.040625, 0.88125, 0.8, 0.8015625, 0.4, 0.4015625, 0.334375, 0.6421875, 0.6421875, 0.334375, 0.5609375, 0.6421875, 0.48125, 0.5609375, 0.48125, 0.5609375, 0.5609375, 0.6421875, 0.3203125, 0.4390625, 0.6421875, 0.3203125, 0.9625, 0.6421875, 0.5609375, 0.6421875, 0.5609375, 0.48125, 0.4, 0.4015625, 0.6421875, 0.6421875, 0.88125, 0.6421875, 0.6421875, 0.5625, 0.48125, 0.2015625, 0.48125, 0.721875]
    const avg = 0.5999835526315791
    try {
        var tmp = string
            .split('')
            .map(c => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
            .reduce((cur, acc) => acc + cur) * fontSize
        return tmp / 2;
    } catch {
        return 0
    }
}

/**
 * Generate HTML table dynamically based on contents of __CONFIG__
 */
function generate_Table() {
    console.log("generate_Table");
    var table = document.getElementById("Table1")
    var venue_keys = Object.keys(__CONFIG__.venues);
    var wavl_keys = Object.keys(__CONFIG__.wavl)
    var jl_keys = Object.keys(__CONFIG__.jl)

    for (var i = 0; i < Math.max(venue_keys.length, wavl_keys.length, jl_keys.length); i++) {
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
        var cell8 = row.insertCell(8);
        var cell9 = row.insertCell(9);

        // venue
        cell0.classList.add("cell12");
        cell0.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'

        try {
            var venue = __CONFIG__.venues[venue_keys[i]];
            cell1.classList.add("cell2")
            cell1.innerHTML = '<div id="venue_' + i.toString() + '" style="display:inline-block;width:16px;height:20px;z-index:56;">' +
                '<input type="checkbox" id="checkvenue_' + i.toString() + '" name="Venues" value="on" checked="" style="display:inline-block;opacity:0;" title="' + venue.name + '">' +
                '<label for="checkvenue_' + i.toString() + '"></label>' +
                '</div>'

            cell2.classList.add("cell9")
            cell2.innerHTML = '<div id="wb_Text8">' +
                '<span style="color:#000000;font-family:Arial;font-size:16px;">' + venue.name + '</span>' +
                '</div>'
        } catch (e) {
            cell1.classList.add("cell10")
            cell1.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'
            cell2.classList.add("cell11")
            cell2.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'
        }

        // WAVL Division
        cell3.classList.add("cell1")
        cell3.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'

        try {
            var wavl = __CONFIG__.wavl[wavl_keys[i]];
            cell4.classList.add("cell2")
            cell4.innerHTML = '<div id="wavl_' + i.toString() + '" style="display:inline-block;width:16px;height:20px;z-index:58;">' +
                '<input type="checkbox" id="checkwavl_' + i.toString() + '" name="WAVL_teams" value="on" checked="" style="display:inline-block;opacity:0;" title="' + wavl.long + '">' +
                '<label for="checkwavl_' + i.toString() + '"></label>' +
                '</div>'

            cell5.classList.add("cell9")
            cell5.innerHTML = '<div id="wb_Text32">' +
                '<span style="color:#000000;font-family:Arial;font-size:16px;">' + wavl.long + '</span>' +
                '</div>'
        } catch (e) {
            cell4.classList.add("cell10")
            cell4.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'
            cell5.classList.add("cell11")
            cell5.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'
        }

        // Junior League Division
        cell6.classList.add("cell1")
        cell6.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'

        try {
            var jl = __CONFIG__.jl[jl_keys[i]];
            cell7.classList.add("cell2")
            cell7.innerHTML = '<div id="wavjl_' + i.toString() + '" style="display:inline-block;width:16px;height:20px;z-index:60;">' +
                '<input type="checkbox" id="checkwavjl_' + i.toString() + '" name="WAVjL_teams" value="on" checked="" style="display:inline-block;opacity:0;" title="' + jl.long + '">' +
                '<label for="checkwavjl_' + i.toString() + '"></label>' +
                '</div>'

            cell8.classList.add("cell9")
            cell8.innerHTML = '<div id="wb_Text49">' +
                '<span style="color:#000000;font-family:Arial;font-size:16px;">' + jl.long + '</span>' +
                '</div>'
        } catch (e) {
            cell7.classList.add("cell10")
            cell7.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'
            cell8.classList.add("cell11")
            cell8.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'

        }
    }
    var fin_row = table.insertRow(-1);
    var fin_cell = fin_row.insertCell(0);
    fin_cell.classList.add("cell99")
}

generate_Table()
