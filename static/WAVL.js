/**
 * TO-DO
 * 1. Add the teams playing, the duty team, the division, the date, the time, and the venue to the bottom of the second page, for easier collating
 * 2. Make sure the live version has the spreadsheet download working correctly.
 * 3. ?
 * 4. ?
 */


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
        let submit_row = [,,,,,,,,,,,,,,,,,,]
        // Ignore "commented" out rows.
        if ((temp_row[0][0] == "!" && temp_row[0][1] == "!") || temp_row.length < 2){
            console.log(temp_row);
        } else {
            // Do some data manipulation to ensure it's how we want it.
            submit_row[0] = temp_row[0];
            submit_row[1] = "";
            submit_row[2] = "";
            submit_row[3] = "";
            submit_row[4] = temp_row[0];
            submit_row[5] = temp_row[1];
            submit_row[6] = temp_row[2];
            submit_row[7] = temp_row[3];
            submit_row[8] = temp_row[4];
            submit_row[9] = [temp_row[5], temp_row[6], temp_row[7]]
            submit_row[10] = temp_row[8].padStart(2, "0");
            submit_row[11] = temp_row[9].padStart(2, "0");
            submit_row[12] = temp_row[10].padStart(2, "0");
            submit_row[13] = temp_row[11].padStart(2, "0");
            submit_row[14] = temp_row[12].padStart(2, "0");
            submit_row[15] = [submit_row[12],submit_row[11], submit_row[10], submit_row[0], submit_row[5], submit_row[13]].join(" ")
            submit_row[16] = [submit_row[12],submit_row[11], submit_row[10], submit_row[0], submit_row[13], submit_row[5]].join(" ")
            submit_row[17] = temp_row[13].split("^^");
            submit_row[18] = temp_row[14].split("^^");

            for(let j = 0; j < submit_row[17].length; j++) { submit_row[17][j] = submit_row[17][j].split("||"); }
            if (submit_row[17].length < 3){submit_row[17] = [[" "," "]]}

            for(let j = 0; j < submit_row[18].length; j++) { submit_row[18][j] = submit_row[18][j].split("||"); }
            if (submit_row[18].length < 3){submit_row[18] = [[" "," "]]}

            return_array.push(submit_row);
            console.log(rows[i]);
            console.log(submit_row);
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
                    }).catch(error => catch_error(error))
                }).catch(error => catch_error(error))
            }).catch(error => catch_error(error))
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
    console.log(player_data)
    // Update Keys and Dict.
    // probably should add an IF later than SL Finals and still in current year or some shit
    SL_Only_Players = [];
    for (i = 1; i < player_data.length; i++) {
        let team_id = player_data[i][2].split(" ")[0];
        if (["1","2","3",'4','5','6','7','8','9','101','102','103','104','105','106','107','108','109'].includes(team_id)){
            while (player_data[i][1].length > 3){
                player_data[i] = [player_data[i][0]+","+player_data[i][1],player_data[i][2],player_data[i][3], player_data[i][4], player_data[i][5], player_data[i][6]]
            }
            let name = player_data[i][0];
            let games_played = player_data[i][5]
            
            name = name.replaceAll("*","");
            name = name.replaceAll("^","");
            name = name.replaceAll('"',"");
            name = name.replaceAll("\\","");
            name = name.replaceAll("(DP)","");
            name = name.replaceAll("(dp)","");

            if (games_played >= 5){
                //SL_Only_Players.push([name, player_data[i][2].split(" ").slice(1).join(" ")])
                SL_Only_Players.push(name)
            }
        }
    }
    
    for (i = 1; i < player_data.length; i++) {
        
        while (player_data[i][1].length > 3){
            player_data[i] = [player_data[i][0]+","+player_data[i][1],player_data[i][2],player_data[i][3], player_data[i][4], player_data[i][5], player_data[i][6]]
        }

        let name = player_data[i][0];
        let team_id = player_data[i][2].split(" ")[0];
        let games_played = player_data[i][5]
        // if name has (DP) do not add to dict.
	if (DO_NOT_PRINT.includes(name)){
		console.log(name)
	} else {
	        if (name.toLowerCase().includes("(dp)") || name.toLowerCase().includes("*") || name.toLowerCase().includes("^") || name.toLowerCase().includes('"') || name.toLowerCase().includes("\\")){
	            console.log(name);
	
	            if (name.toLowerCase().includes("*") || name.toLowerCase().includes("^") || (name.toLowerCase().includes('"'))) {
	                name = name.replaceAll("*","");
	                name = name.replaceAll("^","");
	                name = name.replaceAll('"',"");
	                name = name.replaceAll("\\","");
	
	                if (!(Object.keys(dict).includes(team_id))) {
	                    dict[team_id] = [[split_name(name.trim()), games_played]]
	                } else {
	                    dict[team_id].push([split_name(name.trim()), games_played])
	                }
	            }
	
	            // If SLM / SLW / SLrM / SLrW, add (dp) for FINALS / AFTER SL Finals
	            if (["1","2","3",'4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','26','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','123','126'].includes(team_id) && name.toLowerCase().includes("(dp)") ){
	                name = name.replaceAll("(DP)","");
	                name = name.replaceAll("(dp)","");
	                if (!(Object.keys(dict).includes(team_id))) {
	                    dict[team_id] = [[split_name(name.trim()), games_played]]
	                } else {
	                    dict[team_id].push([split_name(name.trim()), games_played])
	                }
	            }
	
	        } else {
	            if (["1","2","3",'4','5','6','7','8','9','101','102','103','104','105','106','107','108','109'].includes(team_id)){
	                // If SL
	                if (!(Object.keys(dict).includes(team_id))) {
	                    dict[team_id] = [[split_name(name.trim()), games_played]]
	                } else {
	                    dict[team_id].push([split_name(name.trim()), games_played])
	                }
	            } else {
	                // if NOT SL
	                //console.log(SL_Only_Players);
	                if (SL_Only_Players.includes(name)){
	                    console.log(player_data[i]);
	                } else {
	                    if (!(Object.keys(dict).includes(team_id))) {
	                        dict[team_id] = [[split_name(name.trim()), games_played]]
	                    } else {
	                        dict[team_id].push([split_name(name.trim()), games_played])
	                    }
	                }
	            }
	        }
	}
    }

    for (i = 0; i < upd_fixtures.length; i++) {
        let fixture_date = upd_fixtures[i][12]+"-"+upd_fixtures[i][11]+"-"+upd_fixtures[i][10]
        let fixture_division = upd_fixtures[i][9]
        let team_a = upd_fixtures[i][6].split(" ")[0];
        let team_b = upd_fixtures[i][7].split(" ")[0];
        upd_fixtures[i][17] = [["",""]];
        upd_fixtures[i][18] = [["",""]];

        if (SL_FINALS_DATES.includes(fixture_date) && (fixture_division[0] == "State League Men" || fixture_division[0] == "State League Women")){
            if (Object.keys(dict).includes(team_a)) {
                team_a_list = [];
                for (j = 0; j < dict[team_a].length; j++) {
                    if (dict[team_a][j][1] >= 5) {team_a_list.push(dict[team_a][j])}
                }
                upd_fixtures[i][17] = team_a_list;
            }
            if (Object.keys(dict).includes(team_b)) {
                team_b_list = [];
                for (j = 0; j < dict[team_b].length; j++) {
                    if (dict[team_b][j][1] >= 5) {team_b_list.push(dict[team_b][j])}
                }
                upd_fixtures[i][18] = team_b_list;
            }
        } else {
            if (Object.keys(dict).includes(team_a)) {upd_fixtures[i][17] = dict[team_a];}
            if (Object.keys(dict).includes(team_b)) {upd_fixtures[i][18] = dict[team_b];}
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
                    }).catch(error => catch_error(error))
                }).catch(error => catch_error(error))
            }).catch(error => catch_error(error))
        }).catch(error => catch_error(error))
    }).catch((e) => {
        console.log(e)
        console.log(e.response.status)
        if (e.response.status == 500){
            window.alert("Error with BracketPal. Trying a slower method...")
            document.getElementById("Button4").style.backgroundColor = "#FFA500";
            var fixtures = [];
            // If we get this dumb error, try running it again but requesting EACH team on EACH date.
            if (document.getElementById("Checkbox99").checked) {       
                for (var j = -6; j <= 0; j++) {
                    var looping_date = $("#DatePicker2").datepicker("getDate");
                    looping_date.setTime(looping_date.getTime() + (j * (24*60*60*1000)));
                    var mon = looping_date.getMonth() + 1;
                    var date_time = looping_date.getFullYear().toString().split(-2) + "-" +
                                        mon.toString().padStart(2, '0') + "-" +
                                        looping_date.getDate().toString().padStart(2, '0');
                    for (var i = 0; i < leagues.length; i++) {
                        var indiv = individual_fixture(leagues[i][2], date_time);
                        fixtures.push(indiv);
                    }
                }
            } else {
                for (var i = 0; i < leagues.length; i++) {
                    var indiv = individual_fixture(leagues[i][2], dates[2]);
                    fixtures.push(indiv);
                }
            }

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
                            }).catch(error => catch_error(error))
                        }).catch(error => catch_error(error))
                    }).catch(error => catch_error(error))
                }).catch(error => catch_error(error))
            }).catch(error => catch_error(error))
        } else {
            catch_error(error);
        }
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
 * Axios request to get fixture.
 * @param {String} id           id of team
 * @param {String} start_date   First date in range
 * @returns 
 */
async function individual_fixture(id, start_date) {
    axios;
    const head = 'https://cors-anywhere-og-v5kf.onrender.com/vwa.bracketpal.com/dailyform/';
    var url = head + id.toString() + "/" + start_date.toString();
    console.log("get_single_fixture: " + url);
    return await axios.get(url);
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
    var WAVLurl = "https://volleyballwa.github.io/static/def.pdf";
    var JLurl = "https://volleyballwa.github.io/static/def_jl.pdf";
    var newWAVLurl = "https://volleyballwa.github.io/static/new_def.pdf";
    var extraWAVLurl = "https://volleyballwa.github.io/static/extra_def.pdf";
    //var newWAVLurl = "https://og1764.github.io/static/new_def.pdf";
    //var extraWAVLurl = "https://og1764.github.io/static/extra_def.pdf";

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
        var WAVLurl = "https://volleyballwa.github.io/static/def.pdf";
        var JLurl = "https://volleyballwa.github.io/static/def_jl.pdf";
        var newWAVLurl = "https://volleyballwa.github.io/static/new_def.pdf";
        var extraWAVLurl = "https://volleyballwa.github.io/static/extra_def.pdf";

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
        var newWAVLbackpage = await newWAVLpages[1];

        var extraWAVLpdfDoc = await PDFLib.PDFDocument.load(extraWAVLexistingPdfBytes);
        var extraWAVLhelveticaFont = await extraWAVLpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var extraWAVLhelveticaBold = await extraWAVLpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var extraWAVLpages = await extraWAVLpdfDoc.getPages();
        var extraWAVLfirstPage = await extraWAVLpages[0];
        var extraWAVLbackPage = await extraWAVLpages[1];


        //var JLexistingPdfBytes = await fetch(JLurl).then(resp => resp.arrayBuffer());

        var JLpdfDoc = await PDFLib.PDFDocument.load(JLexistingPdfBytes);
        var JLhelveticaFont = await JLpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var JLhelveticaBold = await JLpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var JLpages = await JLpdfDoc.getPages();
        var JLfirstPage = await JLpages[0];

        if (fixtures[i][9][0].includes("Division") || fixtures[i][9][0].includes("State")) {
            // If we need to use the scoresheet with more names
            if (fixtures[i][17].length > 18 || fixtures[i][18].length > 18){
                if ((SL_FINALS_DATES.includes(fixtures[i][12]+"-"+fixtures[i][11]+"-"+fixtures[i][10]) && (fixtures[i][9][0] == "State League Men" || fixtures[i][9][0] == "State League Women")) || FINALS_DATES.includes(fixtures[i][12]+"-"+fixtures[i][11]+"-"+fixtures[i][10])){
                    // Rule out MVP Votes
                    await extraWAVLfirstPage.drawLine({
                        start: { x: 11, y: 316 },
                        end: { x: 166, y: 388 },
                        thickness: 3,
                        color: rgb(0,0,0),
                        opacity: 1
                    })

                    await extraWAVLfirstPage.drawLine({
                        start: { x: 11, y: 388 },
                        end: { x: 166, y: 316 },
                        thickness: 3,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                }

                if (fixtures[i][6].length > 24 || fixtures[i][7].length > 24) {
                    // Team A Team List
                    await extraWAVLfirstPage.drawText(fixtures[i][6], {
                        x: 285,
                        y: 744.5, //739
                        size: 9,
                        font: extraWAVLhelveticaFont
                    })

                    // Team B Team List
                    await extraWAVLfirstPage.drawText(fixtures[i][7], {
                        x: 450,
                        y: 744.5,
                        size: 9,
                        font: extraWAVLhelveticaFont
                    })

                } else {
                    // Team A Team List
                    await extraWAVLfirstPage.drawText(fixtures[i][6], {
                        x: 285,
                        y: 744, //739
                        size: 12,
                        font: extraWAVLhelveticaFont
                    })

                    // Team B Team List
                    await extraWAVLfirstPage.drawText(fixtures[i][7], {
                        x: 450,
                        y: 744,
                        size: 12,
                        font: extraWAVLhelveticaFont
                    })

                }

                // Team A Players
                for (var k = 0; k < fixtures[i][17].length; k++) {
                    if (k < Math.ceil(fixtures[i][17].length / 2)) {
                        // first name, first column
                        //console.log(fixtures[i][17][k][0].toUpperCase() + ": " + measureText(fixtures[i][17][k][0].toUpperCase(),6))
                        if (measureText(fixtures[i][17][k][0][0].toUpperCase(), 6) >= 32){
                            await extraWAVLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                x: 276,
                                y: 733.5-((12.8*k)),
                                size: 5,
                                font: extraWAVLhelveticaFont
                            })
                        } else {
                            await extraWAVLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                x: 276,
                                y: 733.5-((12.8*k)),
                                size: 6,
                                font: extraWAVLhelveticaFont
                            })
                        }

                        // surname, first column
                        //console.log(fixtures[i][17][k][1].toUpperCase() + ": " + measureText(fixtures[i][17][k][1].toUpperCase(),6))
                        if (measureText(fixtures[i][17][k][0][1].toUpperCase(), 6) >= 32) {
                            await extraWAVLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                x: 276,
                                y: 733.5-((12.8*k+6.0)),
                                size: 5,
                                font: extraWAVLhelveticaFont
                            })
                        } else {
                            await extraWAVLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                x: 276,
                                y: 733.5-((12.8*k+6.0)),
                                size: 6,
                                font: extraWAVLhelveticaFont
                            })
                        }
                    } else {
                        // first name, second column
                        //console.log(fixtures[i][17][k][0].toUpperCase() + ": " + measureText(fixtures[i][17][k][0].toUpperCase(),6))
                        if (measureText(fixtures[i][17][k][0][0].toUpperCase(), 6) >= 32){
                            await extraWAVLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                x: 355,
                                y: 733.5-((12.8*(k-Math.ceil(fixtures[i][17].length / 2)))),
                                size: 5,
                                font: extraWAVLhelveticaFont
                            })
                        } else {
                            await extraWAVLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                x: 355,
                                y: 733.5-((12.8*(k-Math.ceil(fixtures[i][17].length / 2)))),
                                size: 6,
                                font: extraWAVLhelveticaFont
                            })
                        }

                        // surname, second column
                        //console.log(fixtures[i][17][k][1].toUpperCase() + ": " + measureText(fixtures[i][17][k][1].toUpperCase(),6))
                        if (measureText(fixtures[i][17][k][0][1].toUpperCase(), 6) >= 32) {
                            await extraWAVLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                x: 355,
                                y: 733.5-((12.8*(k-Math.ceil(fixtures[i][17].length / 2))+6.0)),
                                size: 5,
                                font: extraWAVLhelveticaFont
                            })
                        } else {
                            await extraWAVLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                x: 355,
                                y: 733.5-((12.8*(k-Math.ceil(fixtures[i][17].length / 2))+6.0)),
                                size: 6,
                                font: extraWAVLhelveticaFont
                            })
                        }
                    }
                    
                }

                // Team A, Second column numbers
                if (fixtures[i][17].length > 1) {
                    let line_y_a = 739-(12.8*Math.ceil(fixtures[i][17].length /2));
                    //console.log(line_y_a);
                    await extraWAVLfirstPage.drawLine({
                        start: { x: 339, y: 738.6 },
                        end: { x: 339, y: line_y_a },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    
                    await extraWAVLfirstPage.drawLine({
                        start: { x: 354, y: 738.6 },
                        end: { x: 354, y: line_y_a },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                }

                // Team B Players
                for (var k = 0; k < fixtures[i][18].length; k++) {
                    if (k < Math.ceil(fixtures[i][18].length / 2)) {
                        // first name, first column
                        //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                        if (measureText(fixtures[i][18][k][0][0].toUpperCase(), 6) >= 32) {
                            await extraWAVLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                x: 440.5,
                                y: 733.5-((12.8*k)),
                                size: 5,
                                font: extraWAVLhelveticaFont
                            })
                        } else {
                            await extraWAVLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                x: 440.5,
                                y: 733.5-((12.8*k)),
                                size: 6,
                                font: extraWAVLhelveticaFont
                            })
                        }

                        // surname, first column
                        //console.log(fixtures[i][18][k][1].toUpperCase() + ": " + measureText(fixtures[i][18][k][1].toUpperCase(),6))
                        if (measureText(fixtures[i][18][k][0][1].toUpperCase(), 6) >= 32) {
                            await extraWAVLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                x: 440.5,
                                y: 733.5-((12.8*k+6.0)),
                                size: 5,
                                font: extraWAVLhelveticaFont
                            })
                        } else {
                            await extraWAVLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                x: 440.5,
                                y: 733.5-((12.8*k+6.0)),
                                size: 6,
                                font: extraWAVLhelveticaFont
                            })
                        }
                    } else {
                        // first name, second column
                        //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                        if (measureText(fixtures[i][18][k][0][0].toUpperCase(), 6) >= 32) {
                            await extraWAVLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                x: 519.5,
                                y: 733.5-((12.8*(k-Math.ceil(fixtures[i][18].length / 2)))),
                                size: 5,
                                font: extraWAVLhelveticaFont
                            })
                        } else {
                            await extraWAVLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                x: 519.5,
                                y: 733.5-((12.8*(k-Math.ceil(fixtures[i][18].length / 2)))),
                                size: 6,
                                font: extraWAVLhelveticaFont
                            })
                        }

                        // surname, second column
                        //console.log(fixtures[i][18][k][1].toUpperCase() + ": " + measureText(fixtures[i][18][k][1].toUpperCase(),6))
                        if (measureText(fixtures[i][18][k][0][1].toUpperCase(), 6) >= 32) {
                            await extraWAVLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                x: 519.5,
                                y: 733.5-((12.8*(k-Math.ceil(fixtures[i][18].length / 2))+6.0)),
                                size: 5,
                                font: extraWAVLhelveticaFont
                            })
                        } else {
                            await extraWAVLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                x: 519.5,
                                y: 733.5-((12.8*(k-Math.ceil(fixtures[i][18].length / 2))+6.0)),
                                size: 6,
                                font: extraWAVLhelveticaFont
                            })
                        }
                    }
                }
                
                if (fixtures[i][18].length > 1) {
                    // Team B, second column numbers
                    let line_y_b = 739-(12.8*Math.ceil(fixtures[i][18].length /2));
                    //console.log(line_y_b);

                    await extraWAVLfirstPage.drawLine({
                        start: { x: 518, y: 738.6 },
                        end: { x: 518, y: line_y_b },
                        thickness: 0.5,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    
                    await extraWAVLfirstPage.drawLine({
                        start: { x: 503, y: 738.6 },
                        end: { x: 503, y: line_y_b },
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
                await extraWAVLbackPage.drawText(__venues__[fixtures[i][0]], {
                    x: parseInt((275 - measureText(__venues__[fixtures[i][0]], 10)).toString()),
                    y: 781,
                    size: 10,
                    font: extraWAVLhelveticaFont
                })

                try {
                    // Court Number
                    await extraWAVLfirstPage.drawText(fixtures[i][5], {
                        x: parseInt((388 - measureBold(fixtures[i][5], 13).toString()).toString()),
                        y: 781,
                        size: 13,
                        font: extraWAVLhelveticaBold
                    })
                    await extraWAVLbackPage.drawText(fixtures[i][5], {
                        x: parseInt((388 - measureBold(fixtures[i][5], 13).toString()).toString()),
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
                        await extraWAVLbackPage.drawText(time, {
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
                await extraWAVLbackPage.drawText(ddmmyy, {
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
                await extraWAVLbackPage.drawText(fixtures[i][9][1], {
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
                await extraWAVLbackPage.drawText(fixtures[i][8], {
                    x: parseInt((332 - measureText(fixtures[i][8], 14)).toString()),
                    y: 797,
                    size: 14,
                    font: extraWAVLhelveticaFont
                })

                // Club President
                let a_pres = __PRESIDENTS__[fixtures[i][6].substring(fixtures[i][6].indexOf(' ') + 1)];
                let b_pres = __PRESIDENTS__[fixtures[i][7].substring(fixtures[i][7].indexOf(' ') + 1)];

                if (a_pres == __PRESIDENTS__["a"]){
                    a_pres = " ";
                }

                if (b_pres == __PRESIDENTS__["a"]){
                    b_pres = " ";
                }

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
                if (fixtures[i][6].length > 22 || fixtures[i][7].length > 22) {
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
                    await extraWAVLbackPage.drawText(fixtures[i][6], {
                        x: parseInt((262 - measureText(fixtures[i][6], 10)).toString()),
                        y: 813.5,
                        size: 10,
                        font: extraWAVLhelveticaBold
                    })
                    await extraWAVLbackPage.drawText(fixtures[i][7], {
                        x: parseInt((480 - measureText(fixtures[i][7], 10)).toString()),
                        y: 118133.5,
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
                    await extraWAVLbackPage.drawText(fixtures[i][6], {
                        x: parseInt((260 - measureText(fixtures[i][6], 14)).toString()),
                        y: 813.5,
                        size: 14,
                        font: extraWAVLhelveticaBold
                    })
                    await extraWAVLbackPage.drawText(fixtures[i][7], {
                        x: parseInt((480 - measureText(fixtures[i][7], 14)).toString()),
                        y: 813.5,
                        size: 14,
                        font: extraWAVLhelveticaBold
                    })
                }

                var saved = await extraWAVLpdfDoc.saveAsBase64();
                
            } else {
                if ((SL_FINALS_DATES.includes(fixtures[i][12]+"-"+fixtures[i][11]+"-"+fixtures[i][10]) && (fixtures[i][9][0] == "State League Men" || fixtures[i][9][0] == "State League Women")) || FINALS_DATES.includes(fixtures[i][12]+"-"+fixtures[i][11]+"-"+fixtures[i][10])){
                    // Rule out MVP Votes
                    await newWAVLfirstPage.drawLine({
                        start: { x: 11, y: 316 },
                        end: { x: 166, y: 388 },
                        thickness: 3,
                        color: rgb(0,0,0),
                        opacity: 1
                    })

                    await newWAVLfirstPage.drawLine({
                        start: { x: 11, y: 388 },
                        end: { x: 166, y: 316 },
                        thickness: 3,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                }
                if (fixtures[i][6].length > 24 || fixtures[i][7].length > 24) {
                    // Team A Team List
                    await newWAVLfirstPage.drawText(fixtures[i][6], {
                        x: 285,
                        y: 744.5, //739
                        size: 9,
                        font: newWAVLhelveticaFont
                    })

                    // Team B Team List
                    await newWAVLfirstPage.drawText(fixtures[i][7], {
                        x: 450,
                        y: 744.5,
                        size: 9,
                        font: newWAVLhelveticaFont
                    })

                } else {
                    // Team A Team List
                    await newWAVLfirstPage.drawText(fixtures[i][6], {
                        x: 285,
                        y: 743.5, //739
                        size: 12,
                        font: newWAVLhelveticaFont
                    })

                    // Team B Team List
                    await newWAVLfirstPage.drawText(fixtures[i][7], {
                        x: 450,
                        y: 743.5,
                        size: 12,
                        font: newWAVLhelveticaFont
                    })
                }

                // Team A Players
                if (fixtures[i][17].length >= 1) {
                    for (var k = 0; k < fixtures[i][17].length; k++) {
                        if (k < Math.ceil(fixtures[i][17].length / 2)) {
                            // first name, first column
                            //console.log(fixtures[i][17][k][0].toUpperCase() + ": " + measureText(fixtures[i][17][k][0].toUpperCase(),6))
                            if (measureText(fixtures[i][17][k][0][0].toUpperCase(), 6) >= 32) {
                                await newWAVLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                    x: 276.25,
                                    y: 716-((15.75*k)),
                                    size: 5,
                                    font: newWAVLhelveticaFont
                                })
                            } else {
                                await newWAVLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                    x: 276.25,
                                    y: 716-((15.75*k)),
                                    size: 6,
                                    font: newWAVLhelveticaFont
                                })
                            }

                            // surname, first column
                            //console.log(fixtures[i][17][k][1].toUpperCase() + ": " + measureText(fixtures[i][17][k][1].toUpperCase(),6))
                            if (measureText(fixtures[i][17][k][0][1].toUpperCase(), 6) >= 32) {
                                await newWAVLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                    x: 276.25,
                                    y: 716-((15.75*k+7.0)),
                                    size: 5,
                                    font: newWAVLhelveticaFont
                                })
                            } else {
                                await newWAVLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                    x: 276.25,
                                    y: 716-((15.75*k+7.0)),
                                    size: 6,
                                    font: newWAVLhelveticaFont
                                })
                            }
                        } else {
                            // first name, second column
                            //console.log(fixtures[i][17][k][0].toUpperCase() + ": " + measureText(fixtures[i][17][k][0].toUpperCase(),6))
                            if (measureText(fixtures[i][17][k][0][0].toUpperCase(), 6) >= 32) {
                                await newWAVLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                    x: 355,
                                    y: 716-((15.75*(k-Math.ceil(fixtures[i][17].length / 2)))),
                                    size: 5,
                                    font: newWAVLhelveticaFont
                                })
                            } else {
                                await newWAVLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                    x: 355,
                                    y: 716-((15.75*(k-Math.ceil(fixtures[i][17].length / 2)))),
                                    size: 6,
                                    font: newWAVLhelveticaFont
                                })
                            }

                            // surname, second column
                            //console.log(fixtures[i][17][k][1].toUpperCase() + ": " + measureText(fixtures[i][17][k][1].toUpperCase(),6))
                            if (measureText(fixtures[i][17][k][0][1].toUpperCase(), 6) >= 32){
                                await newWAVLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                    x: 355,
                                    y: 716-((15.75*(k-Math.ceil(fixtures[i][17].length / 2))+7.0)),
                                    size: 5,
                                    font: newWAVLhelveticaFont
                                })
                            } else {
                                await newWAVLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                    x: 355,
                                    y: 716-((15.75*(k-Math.ceil(fixtures[i][17].length / 2))+7.0)),
                                    size: 6,
                                    font: newWAVLhelveticaFont
                                })
                            }
                        }
                        
                    }
                    
                    // Team A, Second column numbers
                    if (fixtures[i][17].length > 1) {
                        let line_y_a = 717.5-(15.75*Math.ceil(fixtures[i][17].length /2) - 5);

                        //console.log(line_y_a);
                        await newWAVLfirstPage.drawLine({
                            start: { x: 339, y: 722 },
                            end: { x: 339, y: line_y_a },
                            thickness: 0.5,
                            color: rgb(0,0,0),
                            opacity: 1
                        })
                        
                        await newWAVLfirstPage.drawLine({
                            start: { x: 354, y: 722 },
                            end: { x: 354, y: line_y_a },
                            thickness: 0.5,
                            color: rgb(0,0,0),
                            opacity: 1
                        })
                    }
                }

                // Team B Players
                if (fixtures[i][18].length >= 1) {
                    for (var k = 0; k < fixtures[i][18].length; k++) {
                        if (k < Math.ceil(fixtures[i][18].length / 2)) {
                            // first name, first column
                            //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                            if (measureText(fixtures[i][18][k][0][0].toUpperCase(), 6) >= 32) {
                                await newWAVLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                    x: 439.5,
                                    y: 716-((15.75*k)),
                                    size: 5,
                                    font: newWAVLhelveticaFont
                                })
                            } else {
                                await newWAVLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                    x: 439.5,
                                    y: 716-((15.75*k)),
                                    size: 6,
                                    font: newWAVLhelveticaFont
                                })
                            }

                            // surname, first column
                            //console.log(fixtures[i][18][k][1].toUpperCase() + ": " + measureText(fixtures[i][18][k][1].toUpperCase(),6))
                            if (measureText(fixtures[i][18][k][1].toUpperCase(), 6) >= 32) {
                                await newWAVLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                    x: 439.5,
                                    y: 716-((15.75*k+7.0)),
                                    size: 5,
                                    font: newWAVLhelveticaFont
                                })
                            } else {
                                await newWAVLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                    x: 439.5,
                                    y: 716-((15.75*k+7.0)),
                                    size: 6,
                                    font: newWAVLhelveticaFont
                                })
                            }
                        } else {
                            // first name, second column
                            //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                            if (measureText(fixtures[i][18][k][0][0].toUpperCase(), 6) >= 32) {
                                await newWAVLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                    x: 519,
                                    y: 716-((15.75*(k-Math.ceil(fixtures[i][18].length / 2)))),
                                    size: 5,
                                    font: newWAVLhelveticaFont
                                })
                            } else {
                                await newWAVLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                    x: 519,
                                    y: 716-((15.75*(k-Math.ceil(fixtures[i][18].length / 2)))),
                                    size: 6,
                                    font: newWAVLhelveticaFont
                                })
                            }

                            // surname, second column
                            //console.log(fixtures[i][18][k][1].toUpperCase() + ": " + measureText(fixtures[i][18][k][1].toUpperCase(),6))
                            if (measureText(fixtures[i][18][k][0][1].toUpperCase(), 6) >= 32) {
                                await newWAVLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                    x: 519,
                                    y: 716-((15.75*(k-Math.ceil(fixtures[i][18].length / 2))+7.0)),
                                    size: 5,
                                    font: newWAVLhelveticaFont
                                })
                            } else {
                                await newWAVLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                    x: 519,
                                    y: 716-((15.75*(k-Math.ceil(fixtures[i][18].length / 2))+7.0)),
                                    size: 6,
                                    font: newWAVLhelveticaFont
                                })
                            }
                        }
                    }
                    
                    if (fixtures[i][18].length > 1) {
                        // Team B, second column numbers
                        let line_y_b = 717.5-(15.75*Math.ceil(fixtures[i][18].length /2) - 5);
                        //console.log(line_y_b);

                        await newWAVLfirstPage.drawLine({
                            start: { x: 518, y: 722 },
                            end: { x: 518, y: line_y_b },
                            thickness: 0.5,
                            color: rgb(0,0,0),
                            opacity: 1
                        })
                        
                        await newWAVLfirstPage.drawLine({
                            start: { x: 503, y: 722  },
                            end: { x: 503, y: line_y_b },
                            thickness: 0.5,
                            color: rgb(0,0,0),
                            opacity: 1
                        })
                    }
                }

                // Venue 0
                await newWAVLfirstPage.drawText(__venues__[fixtures[i][0]], {
                    x: parseInt((275 - measureText(__venues__[fixtures[i][0]], 10)).toString()),
                    y: 767.5,
                    size: 10,
                    font: newWAVLhelveticaFont
                })
                await newWAVLbackpage.drawText(__venues__[fixtures[i][0]], {
                    x: parseInt((275 - measureText(__venues__[fixtures[i][0]], 10)).toString()),
                    y: 767.5,
                    size: 10,
                    font: newWAVLhelveticaFont
                })

                try {
                    // Court Number
                    await newWAVLfirstPage.drawText(fixtures[i][5], {
                        x: parseInt((388.5 - measureBold(fixtures[i][5], 13).toString()).toString()),
                        y: 767.5,
                        size: 13,
                        font: newWAVLhelveticaBold
                    })
                    await newWAVLbackpage.drawText(fixtures[i][5], {
                        x: parseInt((388.5 - measureBold(fixtures[i][5], 13).toString()).toString()),
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
                        await newWAVLbackpage.drawText(time, {
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
                await newWAVLbackpage.drawText(ddmmyy, {
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
                await newWAVLbackpage.drawText(fixtures[i][9][1], {
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
                await newWAVLbackpage.drawText(fixtures[i][8], {
                    x: parseInt((332 - measureText(fixtures[i][8], 14)).toString()),
                    y: 784.5,
                    size: 14,
                    font: newWAVLhelveticaFont
                })

                // Club President
                let a_pres = __PRESIDENTS__[fixtures[i][6].substring(fixtures[i][6].indexOf(' ') + 1)];
                let b_pres = __PRESIDENTS__[fixtures[i][7].substring(fixtures[i][7].indexOf(' ') + 1)];

                if (a_pres == __PRESIDENTS__["a"]){
                    a_pres = " ";
                }

                if (b_pres == __PRESIDENTS__["a"]){
                    b_pres = " ";
                }

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
                if (fixtures[i][6].length > 22 || fixtures[i][7].length > 22) {
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
                    await newWAVLbackpage.drawText(fixtures[i][6], {
                        x: parseInt((262 - measureText(fixtures[i][6], 10)).toString()),
                        y: 804.5,
                        size: 10,
                        font: newWAVLhelveticaBold
                    })
                    await newWAVLbackpage.drawText(fixtures[i][7], {
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
                    await newWAVLbackpage.drawText(fixtures[i][6], {
                        x: parseInt((262 - measureText(fixtures[i][6], 14)).toString()),
                        y: 804.5,
                        size: 14,
                        font: newWAVLhelveticaBold
                    })
                    await newWAVLbackpage.drawText(fixtures[i][7], {
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
                let time = parseInt(fixtures[i][13]).toString() + ":" + fixtures[i][14];
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
        let prev_date = ""
        for (var i = 0; i < fixtures.length; i++) {
            // Don't include junior league games in spreadsheet
            if (fixtures[i][9][0][0] == "D" || fixtures[i][9][0][0] == "S"){
                let date = fixtures[i][10] + "." + fixtures[i][11] + "." + fixtures[i][12];
                let full_time = fixtures[i][13] + ":" + fixtures[i][14];
                let crt = fixtures[i][5];
                
                if (date != prev_date) {
                    prev_date = date
                } else {
                    date = "";
                }

                if (!(crt)) {
                    crt = "";
                } else {
                    crt = crt.trim();
                }
                
                // Add data to CSV
                csv.push([date, fixtures[i][4], full_time, fixtures[i][9][1], crt, fixtures[i][6], fixtures[i][7], fixtures[i][8], "", "", "", "", "", "", ""]);
            }
        }

        //const ExcelJS = require('exceljs');
        var excel_url = "https://volleyballwa.github.io/static/Ref_Template.xlsx";
        const default_bytes = await fetch(excel_url).then(res => res.arrayBuffer());
        const workbook = new ExcelJS.Workbook();
        //const excelReader = new FileReader();
        workbook.xlsx.load(default_bytes)
            .then(function() {
            const sheet = workbook.getWorksheet('Referee Spreadsheet');

            for (var i = 0; i < csv.length; i++) {
                let row = sheet.getRow(i+1);
                for (var j = 0; j < csv[i].length; j++){
                    row.getCell(j+1).value = csv[i][j]
                    row.commit()
                }
                //sheet.insertRow(i,csv[i])
            }

            sheet.addConditionalFormatting({
                ref: '$A$1:$O$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['AND(NOT($A2=$A1), LEN($A1)>1)'],
                        style: {border: {top: {style: 'thin'}}}
                    }
                ]
            })

            sheet.addConditionalFormatting({
                ref: '$A$1:$O$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['AND(NOT($B2=$B1), LEN($B2)<1)'],
                        style: {border: {bottom: {style: 'thin'}}}
                    }
                ]
            })

            sheet.addConditionalFormatting({
                ref: '$B$1:$O$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['NOT($B2=$B1)'],
                        style: {border: {bottom: {style: 'dotted'}}}
                    }
                ]
            })

            sheet.addConditionalFormatting({
                ref: '$H$2:$H$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['NOT($H2="Duty Team")'],
                        style: {font: {'italic': true}}
                    }
                ]
            })

	    sheet.addConditionalFormatting({
                ref: '$E$2:$E$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['NOT($H2="Court")'],
                        style: {alignment: { vertical: 'middle', horizontal: 'center' }}
                    }
                ]
            })

	    // Maybe experiment with having these in the config file, and looping over them?
	    sheet.addConditionalFormatting({
                ref: '$B$2:$B$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['OR($B2="Loftus")'],
                        style: {fill: {type: 'pattern', pattern:'solid', fgColor:{argb:'00B0F0'}, bgColor:{argb:'00B0F0'}}}
                    }
                ]
            })

	    sheet.addConditionalFormatting({
                ref: '$B$2:$B$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['OR($B2="Cockburn")'],
                        style: {fill: {type: 'pattern', pattern:'solid', fgColor:{argb:'AFAFAF'}, bgColor:{argb:'AFAFAF'}}}
                    }
                ]
            })

	    sheet.addConditionalFormatting({
                ref: '$B$2:$B$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['OR($B2="Warwick")'],
                        style: {fill: {type: 'pattern', pattern:'solid', fgColor:{argb:'00B050'}, bgColor:{argb:'00B050'}}}
                    }
                ]
            })

	    sheet.addConditionalFormatting({
                ref: '$B$2:$B$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['OR($B2="Kingsway", $B2="The Rise", $B2="Bendat")'],
                        style: {fill: {type: 'pattern', pattern:'solid', fgColor:{argb:'FFC000'}, bgColor:{argb:'FFC000'}}}
                    }
                ]
            })

	    sheet.addConditionalFormatting({
                ref: '$B$2:$B$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['OR($B2="Curtin Stadium")'],
                        style: {fill: {type: 'pattern', pattern:'solid', fgColor:{argb:'0CFFFF'}, bgColor:{argb:'0CFFFF'}}}
                    }
                ]
            })

	    sheet.addConditionalFormatting({
                ref: '$B$2:$B$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['OR($B2="Aquinas")'],
                        style: {fill: {type: 'pattern', pattern:'solid', fgColor:{argb:'FF18FF'}, bgColor:{argb:'FF18FF'}}}
                    }
                ]
            })

	    sheet.addConditionalFormatting({
                ref: '$B$2:$B$199',
                rules: [
                    {
                        type: 'expression',
                        formulae: ['OR($B2="Melville Leisure Centre", $B2="Melville LeisureFit")'],
                        style: {fill: {type: 'pattern', pattern:'solid', fgColor:{argb:'00FF00'}, bgColor:{argb:'00FF00'}}}
                    }
                ]
            })

            /*sheet.columns.forEach(column => {
                const lengths = column.values.map(v => v.toString().length);
                const maxLength = Math.max(...lengths.filter(v => typeof v === 'number'));
                column.width = Math.max(5, maxLength+1);
              }); */

            workbook.xlsx.writeBuffer( {
                base64: true
            })
            .then( function (xls64) {
                // build anchor tag and attach file (works in chrome)
                var a = document.createElement("a");
                var data = new Blob([xls64], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

                var url = URL.createObjectURL(data);
                a.href = url;
                let filename = "Runsheet" + dates + ".xlsx";
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                setTimeout(function() {
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                    },
                    0);
            })
            .catch(function(error) {
                console.log(error.message);
            });
        })
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
    let fixtures_list = [];
    let alerted = [];
    let temporary = add_aliases(venues);
    let alias_layer = temporary[1];
    let venue_usage = temporary[0];
    let all_venues = add_aliases(Object.keys(__CONFIG__.venues));
    const NamesArr = leagues.flat();

    for (let x = 0; x < all_html.length; x++) {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(all_html[x].request.responseText, 'text/html');
        let all_tables = htmlDoc.getElementsByTagName("table")
        let numFix = all_tables.length;
		

        for (let y = 0; y < numFix; y = y + 3) {
            let meta = y + 1;
            let data = y + 2;

            let meta_table = all_tables[0].getElementsByTagName("table")[0];
            let data_table = all_tables[1];

            if (numFix > 2) {
                meta_table = all_tables[meta];
                data_table = all_tables[data];
            }

            let dt = meta_table.rows.item(1).cells.item(0).innerText;
            let match_division = meta_table.rows.item(1).cells.item(2).innerText;

            if (!(NamesArr.includes(match_division))) {
                // If division is not selected, then break the for loop. No need to continue parsing data.
                console.log(match_division);
                console.log(NamesArr);
                continue;
            }

            if ((!(dt === date)) && (!(document.getElementById("Checkbox99").checked))) {
                // Ensure you aren't picking dates from the future
                console.log("BREAK DUE TO DATE DIFFERENCE");
                console.log(dt);
                continue;
            }

            try {
                let rowLength = data_table.rows.length;
                for (let i = 1; i < rowLength; i++) {
                    let cells = data_table.rows.item(i).cells;
                    if (cells.length > 4) {
                        let venue = cells.item(1).innerText;

                        let venue_split = venue.split(/\d/);
                        let zero_venue_split = venue_split[0].trim().replaceAll(" Ctr", "&");
                        zero_venue_split = zero_venue_split.replaceAll(" Ct", "");
                        zero_venue_split = zero_venue_split.replaceAll("&", " Ctr");
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
                            try {
                                /*if (Number.isInteger(parseInt(venue_split[0].slice(-2).trim()))) {
                                    _court = parseInt(venue_split[0].slice(-2).trim()).toString();
                                } else {
                                    _court = cells.item(1).innerText.split("Ct")[1].trim();
                                }*/
                                _court = cells.item(1).innerText.split(/^[^0-9]+/)[1].trim()
                            } catch (e) {
                                _court = "";
                                console.log("Why");
                                console.log(cells.item(2))
                                console.log(cells.item(1))
                                console.log(cells.item(0))
                            }

                            if (_court == null) {
                                _court = "";
                            }
                            const _team_a = cells.item(2).innerText;
                            const _team_b = cells.item(5).innerText;

                            // Try Catch exists for junior league and home rounds.
                            if (match_division[0] == "D" || match_division[0] == "S") {
                                try {
                                    _duty = cells.item(7).innerText.slice(5);
                                } catch (e) {
                                    console.log(e);
				    console.log(_team_a);
				    console.log(_team_b);
				    console.log("~~~");
                                    _duty = " ";
                                }
                            }

                            // Update duty if using Previous Loser.
                            if (FINALS_DATES.includes(dt) && _duty.length < 4) {
                                _duty = "Previous Loser";
                            }

                            if (SL_FINALS_DATES.includes(dt) && _duty.length < 4 && match_division.includes("State") && !(match_division.includes("Reserve"))) {
                                _duty = "Previous Loser";
                            }

                            if (match_division.includes("Division") || match_division.includes("State")) {
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
                                _sorting, _time_sorting, [],
                                []
                            ])
                        } else {
                            // Venue either not in list OR is a bye.
                            try {
                                if (Number.isInteger(parseInt(zero_venue_split.substring(0, 2).trim()))) {
                                    console.log("BYE: " + zero_venue_split);
                                } else {
                                    console.log("UNUSED VENUE\n***")
				                    console.log(venue)
				                    console.log(venue_split)
                                    console.log(zero_venue_split)
                                    console.log("***")
                                }
                            } catch (e) {
                                console.log("UNUSED VENUE\n***")
                                console.log(zero_venue_split)
                                console.log("***")
                            }
                        }

                        if (!(all_venues[0].includes(zero_venue_split))) {
                            if (!(alerted.includes(zero_venue_split))) {
                                window.alert("Venue " + zero_venue_split + " not configured. Contact Oliver Guazzelli on 0466 185 411 to resolve.")
                                alerted.push(zero_venue_split);
                            }
                        }
                    } else {
                        console.log("BYE: " + cells[1])
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

function catch_error(error){
    console.log(error)
    window.alert("The webpage has encountered the following error.\nPlease contact Oliver Guazzelli on 0466 185 411 to resolve.\n\n" + error.stack);
    window.clearInterval(dots);
    document.getElementById("Button4").value = "Generate Scoresheets";
    document.getElementById("Button4").style.backgroundColor = "#8b0000";
    document.getElementById("Button4").style.color = "#FFFFFF"
    document.getElementById("Button4").disabled = false;
    document.getElementById("csvUpload").disabled = false;
    document.getElementById("csvUpload").value = "";
}

generate_Table()
