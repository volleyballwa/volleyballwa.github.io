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
function select_all_events(checked = true) {
    console.log("select_all_events");
    const cbs = document.querySelectorAll('input[name="EVENTS_teams"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
    document.getElementById("Checkbox33").setAttribute("onClick", "javascript: deselect_all_events();");

}

/**
 * Sets all WAVL teams to be deselected.
 * @param {*} checked 
 */
function deselect_all_events(checked = false) {
    console.log("deselect_all_events");
    const cbs = document.querySelectorAll('input[name="EVENTS_teams"]');
    cbs.forEach((cb) => {
        cb.checked = checked;
    });
    document.getElementById("Checkbox33").setAttribute("onClick", "javascript: select_all_events();");
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
    var events = []
    
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

    // Get all selected events
    document.getElementsByName("EVENTS_teams").forEach((checkbox) => {
        if (document.getElementById(checkbox.id).checked) {
            events.push(document.getElementById(checkbox.id).title)
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
    
    //let events = [__CONFIG__.events["2024 WAVL Season"], __CONFIG__.events["2024 WAVjL Season"], __CONFIG__.events["2024 VWA Schools Cup"]]
    //let events = [__CONFIG__.events["2025 WAVL Season"], __CONFIG__.events["2025 WAVjL Season"]]//, __CONFIG__.events["2024 VWA Schools Cup"]]


    // If a CSV file has been uploaded, do that.
    if (document.getElementById("csvUpload").value != "") {
        let uploaded_fixtures = [];

        // Check file type
        console.log(document.getElementById("csvUpload").value.split(".").slice(-1)[0])
        const reader = new FileReader();
        
        if (document.getElementById("csvUpload").value.split(".").slice(-1)[0].toUpperCase() == "XLSX" || document.getElementById("csvUpload").value.split(".").slice(-1)[0].toUpperCase() == "XLS") {
            console.log("XLSX / XLS")
            try{
                reader.readAsBinaryString(document.getElementById("csvUpload").files[0]);
                reader.onload = function(e) {
            
                    var data = e.target.result;
                    var workbook = XLSX.read(data, {
                        type : 'binary'
                    });
                    var result = {};
                    workbook.SheetNames.forEach(function(sheetName) {
                        var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                        if (roa.length > 0) {
                            result[sheetName] = roa;
                        }
                    });
                    console.log(result)
                    uploaded_fixtures = jsonToArray(result);
                    modifyPdf(uploaded_fixtures, dates[2], 0, 0).then(value => {
                        Promise.all(value).then(value_3 => {
                            mergePDFDocuments(value_3).then(value_2 => {
                                let filename = "Scoresheets " + dates[2].toString() + ".pdf"
                                
                                //download(value_2, filename, "application/pdf");
                                
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
                    }
            }catch(e){
                console.error(e);
            }

        } else {
            console.log("CSV")
            // Parse CSV Upload
            reader.readAsText(document.getElementById("csvUpload").files[0])
            reader.onload = function (e) {
                const text = e.target.result;
                uploaded_fixtures = csvToArray(text);
                
                // Call modifyPdf
                modifyPdf(uploaded_fixtures, dates[2], 0, 0).then(value => {
                    Promise.all(value).then(value_3 => {
                        mergePDFDocuments(value_3).then(value_2 => {
                            let filename = "Scoresheets " + dates[2].toString() + ".pdf"
                            
                            //download(value_2, filename, "application/pdf");
                            
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
        }
    } else {
        console.log(events)
        pdf_init(venues, wavl, wavjl, dates, events);
    }
    
}


function jsonToArray(result){
    console.log(result)
    let coach_translation = {
                                "Head Coach": "HC",
                                "Other": "TS",
                                "Manager": "M",
                                "Assistant Coach": "AC",
                                "Trainer": "T",
                                "Team Staff": "TS",
                                
                                "HEAD COACH": "HC",
                                "OTHER": "TS",
                                "MANAGER": "M",
                                "ASSISTANT COACH": "AC",
                                "TRAINER": "T",
                                "TEAM STAFF": "TS"
                            }

    let all_coach_lists = {}

    for (let i = 0; i < result["Coach Lists"].length; i++){
        if (result["Coach Lists"][i].Team != ''){
            console.log(result["Coach Lists"][i])
            let added = 0
            let full_coach_list = [];
            let team_staff_object = {"HC": " ","TS": 1,"M": 1,"AC": 1,"T": 1}
            for (let j = 1; j < 5; j++){
                let test_name = result["Coach Lists"][i]["Coach_"+j.toString()+"_FullName"]
                let test_role = result["Coach Lists"][i]["Coach_"+j.toString()+"_Role"]
                let coach_status = ''
                
                if(typeof test_name == 'undefined'){
                    test_name = ''
                }
                if(typeof test_role == 'undefined'){
                    test_role = ''
                }

                if (test_role == '' && test_name != ''){
                    coach_status = 'OTHER'
                } else {
                    coach_status = test_role
                }

                if (coach_status != '') {
                    let new_coach_status = coach_translation[coach_status]
                    let final_coach_status = new_coach_status

                    if (final_coach_status != "C") {
                        final_coach_status = new_coach_status + team_staff_object[new_coach_status].toString().trim()
                        team_staff_object[new_coach_status] = team_staff_object[new_coach_status] + 1
                    }                
                    full_coach_list.push([split_name(test_name.toUpperCase().trim()),final_coach_status.trim()])
                    added = 1
                }
            }
            all_coach_lists[result["Coach Lists"][i].Team] = full_coach_list
            if (added == 0) {
                all_coach_lists[result["Coach Lists"][i].Team] = [[["", ""], ""]]
            }
        }
    }
    console.log(all_coach_lists)

    // Process names first

    let all_team_lists = {}
    //[[fn, sn], num]
    for (let i = 0; i < result["Team Lists"].length; i++){
        
        if (result["Team Lists"][i].Team != ''){
            console.log(result["Team Lists"][i])
            let added = 0
            let full_team_list = [];
            for (let j = 1; j < 16; j++){
                let test_name = result["Team Lists"][i]["Player_"+j.toString()+"_FullName"]
                let test_numb = result["Team Lists"][i]["Player_"+j.toString()+"_Number"]

                if(typeof test_name == 'undefined'){
                    test_name = ''
                }
                if(typeof test_numb == 'undefined'){
                    test_numb = ''
                }

                full_team_list.push([split_name(test_name.toUpperCase().trim()), test_numb.toString()])
                added = 1

            }
            console.log(full_team_list)
            all_team_lists[result["Team Lists"][i].Team] = full_team_list
            if (added == 0) {
                all_team_lists[result["Team Lists"][i].Team] = [[["", ""], ""]]
            }
        }
    }

    console.log(all_team_lists)

    let final_fixtures = []

    for (let i = 0; i < result.Fixtures.length; i++){
        //let temp_row = rows[i].split(delimiter);
        //let temp_row = []
        let submit_row = [,,,,,,,,,,,,,,,,,,,,,]
        // Ignore "commented" out rows.
        //if ((temp_row[0][0] == "!" && temp_row[0][1] == "!") || temp_row.length < 2){
        //    console.log(temp_row);
        //} else {
        // Do some data manipulation to ensure it's how we want it.
        let check = [
            "Venue",
            "Court",
            "Team A",
            "Team B",
            "Duty Team",
            "Division",
            "Day (dd)",
            "Month (number)",
            "Year (yyyy)",
            "Time (hours)",
            "Time (minutes)",
            "Team A",
            "Team B",
            "Scoresheet Type"
        ]
        for (let k = 0; k<check.length; k++){
            if(typeof result.Fixtures[i][check[k]] == 'undefined'){
                result.Fixtures[i][check[k]] = ""
            }
        }
        
        submit_row[0] = result.Fixtures[i]["Venue"];
        submit_row[1] = "";
        submit_row[2] = "";
        submit_row[3] = "";
        submit_row[4] = result.Fixtures[i]["Venue"];
        submit_row[5] = result.Fixtures[i]["Court"].toString();
        submit_row[6] = result.Fixtures[i]["Team A"];
        submit_row[7] = result.Fixtures[i]["Team B"];
        submit_row[8] = result.Fixtures[i]["Duty Team"]//.toString();
        submit_row[9] = [String(result.Fixtures[i]["Division"]), "xx", "Manual Upload"];
        submit_row[10] = result.Fixtures[i]["Day (dd)"].toString().padStart(2, "0");
        submit_row[11] = result.Fixtures[i]["Month (number)"].toString().padStart(2, "0");
        submit_row[12] = result.Fixtures[i]["Year (yyyy)"].toString().padStart(4, "0");
        submit_row[13] = result.Fixtures[i]["Time (hours)"].toString().padStart(2, "0");
        submit_row[14] = result.Fixtures[i]["Time (minutes)"].toString().padStart(2, "0");
        submit_row[15] = [submit_row[12],submit_row[11], submit_row[10], submit_row[0], submit_row[5], submit_row[13]].join(" ")
        submit_row[16] = [submit_row[12],submit_row[11], submit_row[10], submit_row[0], submit_row[13], submit_row[5]].join(" ")
        submit_row[17] = all_team_lists[result.Fixtures[i]["Team A"]]
        submit_row[18] = all_team_lists[result.Fixtures[i]["Team B"]]
        
        if(result.Fixtures[i]["Scoresheet Type"] == "VWA Junior League") {submit_row[19] = "junior"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "AVSL - Rounds") {submit_row[19] = "avsl"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "AVSL - Finals") {submit_row[19] = "avsl_finals"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "VWA 12 Sub") {submit_row[19] = "12-sub"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "PSA - Senior School") {submit_row[19] = "psa_S"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "PSA - Middle School") {submit_row[19] = "psa_M"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "EVA") {submit_row[19] = "EVA"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "VA - Timed") {submit_row[19] = "VA_T"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "VA - Bo5") {submit_row[19] = "VA_5"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "VA - Bo3") {submit_row[19] = "VA_3"}
        else if(result.Fixtures[i]["Scoresheet Type"] == "VWA Beach High School") {submit_row[19] = "vwa_hs_beach"}

        submit_row[20] = all_coach_lists[result.Fixtures[i]["Team A"]]
        submit_row[21] = all_coach_lists[result.Fixtures[i]["Team B"]]
        //else if(result.Fixtures[i]["Scoresheet Type"] == "VA - Repercharge") {submit_row[19] = "VA_R"}
        
        if(typeof submit_row[17] == 'undefined'){submit_row[17] = [[["",""], ""]]}
        if(typeof submit_row[18] == 'undefined'){submit_row[18] = [[["",""], ""]]}
        if(typeof submit_row[20] == 'undefined'){submit_row[20] = [[["",""], ""]]}
        if(typeof submit_row[21] == 'undefined'){submit_row[21] = [[["",""], ""]]}
        
        //for(let j = 0; j < submit_row[17].length; j++) { submit_row[17][j] = submit_row[17][j].split("||"); }
        //if (submit_row[17].length < 3){submit_row[17] = [[" "," "]]}

        //for(let j = 0; j < submit_row[18].length; j++) { submit_row[18][j] = submit_row[18][j].split("||"); }
        //if (submit_row[18].length < 3){submit_row[18] = [[" "," "]]}
        
        
        
        

        final_fixtures.push(submit_row);
        console.log(result.Fixtures[i]);
        console.log(submit_row);
        //}
    }
    return final_fixtures
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
async function getPlayerList(event) {
    axios;
    const head = event.players_url
    console.log("get_event_player_list -" + head)
    return await axios.get(head);
    
    //const head = "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/220866/wavl/documents/players"
    ///const head = "https://volleyball.exposureevents.com/220866/wavl/documents/players"
    /*const head = 'https://cors-anywhere-og-v5kf.onrender.com/vwa.bracketpal.com/leaders/season/';
    var url = head + SEASON_ID + "?csv=1";
    console.log("get_player_list: " + url);*/
    ///console.log("get_player_list: " + head)
    /*var headers = {
        "Referer": "https://volleyball.exposureevents.com/220866/wavl/documents",
        "Sec-Fetch-Mode": "navigate",
        "Host": "volleyball.exposureevents.com",
        "Sec-Fetch-Dest": "document"
    }*/
    ///return await axios.get(head);
    
}

async function parsePlayerList(players_list, upd_fixtures) {
    let successful_player_lists = [];
    let missed_urls = [];
    let all_team_lists = {};
    let team_staff_object = {};
    let all_coach_lists = {};

    let team_object = {}

    let coach_translation = {
        "Head Coach": "HC",
        "Other": "TS",
        "Manager": "M",
        "Assistant Coach": "AC",
        "Trainer": "T",
        "Team Staff": "TS",
        
        "HEAD COACH": "HC",
        "OTHER": "TS",
        "MANAGER": "M",
        "ASSISTANT COACH": "AC",
        "TRAINER": "T",
        "TEAM STAFF": "TS"
    }
    /*
    team_object = {
        unique_name <"div x Balcatta"> : {
            division: "div x",
            team_name: "Balcatta",
            player_list: [
                            [player_name, player_number],
                            [player_name, player_number]
                        ],
            coach_list: [
                            [coach_name, coach_position],
                            [coach_name, coach_position]
                        ],
            team_staff_count:
                {"HC": " ","TS": 1,"M": 1,"AC": 1,"T": 1}
        }
    
    }


    */

    let missed_events = [];
    let completely_missed_events = []
    let promise_array = [];
    let alert_string = "Unable to retreive player list for:\r\n  "
    console.log(players_list)
    for (let i = 0; i < players_list.length; i++) {
        console.log(i)
        promise_array.push(new Promise((resolve, reject) => {
            if (players_list[i].status == "fulfilled") {
                console.log("resolve(players_list[i].value)")
                resolve(players_list[i].value)
            } else {
                let ev_name = getEventNameFromURL(players_list[i].reason.response.request.responseURL, "player")
                console.log(ev_name)
                console.log("Athletes_"+players_list[i])
                console.log("Athletes_"+players_list[i].value)
                if (document.getElementById("Athletes_"+ev_name).value != "") {
                    console.log("Can Read Data")
                    const reader = new FileReader();
                    
                    // Parse HTML Upload
                    reader.readAsText(document.getElementById("Athletes_"+ev_name).files[0])

                    reader.onload = function (e) {
                        const text = e.target.result;
                        console.log(text)
                        resolve({"request": {"responseText": text}})
                    }

                    reader.onerror = () => {
                        reject("Something bad happened here")
                    }
                } else {
                    alert_string = alert_string + ev_name + "\r\n"
                    reject("No Player List")
                }
            }
        }))

    }



    /*for (let i = 0; i < players_list.length; i++) {
        if (players_list[i].status == "fulfilled") {
            // Do Nothing For now
            console.log(players_list[i].value)
            successful_player_lists.push(players_list[i].value)
        } else {
            console.log(players_list[i])
            let faulty_url = players_list[i].reason.response.request.responseURL
            console.log(faulty_url)
            let ev_name = getEventNameFromURL(faulty_url, "player")
            //if (ev_name == "2025 WAVL Season") {
            //    // window.alert("Unable to retreive player list for:\r\n  " + ev_name + "\r\nContinuing for this event without player names.")
            //    let temp_do_nothing = ""
            //} else if (__CONFIG__.events[ev_name].printPlayers == "true") {
            //    window.alert("Unable to retreive player list for:\r\n  " + ev_name + "\r\nContinuing for this event without player names.")
            //}
            missed_urls.push(faulty_url)
            console.log(ev_name);
            missed_events.push(ev_name)
        }
    }
    
    console.log("PLAYERS_LIST")
    console.log(successful_player_lists)
    let alert_string = "Unable to retreive player list for:\r\n  "

    for (let i = 0; i < missed_events.length; i++) {
        console.log("Findable String")
        console.log(missed_events[i])
        if (document.getElementById("Athletes_"+missed_events[i]).value != "") {
            console.log("Can Read Data")
            const reader = new FileReader();
            
            // Parse CSV Upload
            reader.readAsText(document.getElementById("Athletes_"+missed_events[i]).files[0])

            reader.onload = function (e) {
                const text = e.target.result;
                console.log(text)
                successful_player_lists.push({"request": {"responseText": text}})
            }
            await reader;
        } else {
            alert_string = alert_string + missed_events[i] + "\r\n"
        }
    }
    */
    if (alert_string.length > 50) {
        window.alert(alert_string + "Continuing for these events without player names.")
    }

    var new_method = true

    //try {
    //    
    //} catch (error) {
    //    
    //}

    await successful_player_lists;

    console.log(promise_array)
    
    await Promise.allSettled(promise_array).then(successful_player_lists => {
        //console.log(promise_array)
        //for (let i = 0; i < promise_array.length; i++) {
        //    console.log(promise_array[i])
        //}
    //})
        console.log(successful_player_lists)
        if (true == true){
            /*if (ev_name = "2025 WAVL Season") {
                var player_lists_slow = [];
                var slow_id_list = __CONFIG__.events["2025 WAVL Season"]["backup_players"]["id_array"];
                var slow_head = __CONFIG__.events["2025 WAVL Season"]["backup_players"]["base_url"];
                //console.log(slow_id_list)
                //console.log(slow_head)
                for (var j = 0; j < slow_id_list.length; j++) {
                    var slow_object = {"players_url": slow_head+slow_id_list[j].toString()}
                    //console.log(slow_object)
                    var player_List_slow = getPlayerList(slow_object);
                    //console.log(player_List_slow)
                    player_lists_slow.push(player_List_slow)
                }
                //console.log(1)
                //console.log(player_lists_slow)
                await Promise.allSettled(player_lists_slow).then(player_lists_slow => {
                    //console.log(player_lists_slow)
                    for(let k = 0; k < player_lists_slow.length; k++){
                        //console.log(player_lists_slow[k])
                        let current_team = player_lists_slow[k].value.data.Results;
                        //console.log(current_team)
                        for (let x = 0; x < current_team.length; x++){
                            //console.log(current_team[x])
                            let current_player = current_team[x].Name.trim().replace("\uFFFD","").replaceAll("*","");
                            let team_name = current_team[x].TeamName.trim().toUpperCase()
                            if (!(Object.keys(all_team_lists).includes(team_name))) {
                                all_team_lists[team_name] = [[split_name(current_player.trim()),5]]
                            } else {
                                all_team_lists[team_name].push([split_name(current_player.trim()),5])
                            }
                        }
                    }
                    player_lists_slow = []
                })
            }*/

            for(let k = 0; k < successful_player_lists.length; k++){
                //console.log(successful_player_lists[k].value)
                new_method = true
                try {
                    current_team = successful_player_lists[k].value.data.Results
                    //console.log(current_team)

                } catch (error) {
                    try {
                        current_team = successful_player_lists[k].value.request.responseText
                        //console.log(current_team)
                        new_method = false
                    } catch (error) {
                        new_method = "bypass"
                    }
                }
                //console.log(new_method)
                //if (successful_player_lists[k].data.Results) {
                if (new_method == true) {
                    let current_team = successful_player_lists[k].value.data.Results;
                    //console.log("if")
                    //console.log(current_team)
                    
                    for (let x = 0; x < current_team.length; x++){
                        //console.log(current_team[x])
                        let current_player = current_team[x].Name.trim().replace("\uFFFD","").replaceAll("*","");
                        let _team_name = current_team[x].TeamName.trim().toUpperCase()
                        let _Number = current_team[x].Number
                        let _position = current_team[x].Position
                        let _div = ""
                        let divID = parseInt(successful_player_lists[k].value.request.responseURL.split("=")[1])

                        for (var zz = 0; zz < Object.keys(__CONFIG__.events).length; zz++) {
                            if (_div == "") {
                                let __event = __CONFIG__.events[Object.keys(__CONFIG__.events)[zz]]
                                let __backup_players = __event["backup_players"]["new_id_array"]
                                //console.log(__backup_players)
                                //let index = Object.keys(__CONFIG__.events[events_[i]]["backup_players"]["new_id_array"])[j]
                                //slow_id_list.concat(__CONFIG__.events[events_[i]]["backup_players"]["new_id_array"][index]) 
                                for (var yy = 0; yy < Object.keys(__backup_players).length; yy++) {
                                    if (_div == "") {
                                        let _index = Object.keys(__backup_players)[yy]
                                        if (__backup_players[_index].includes(divID)) {
                                            _div = _index
                                        }
                                    }
                                }
                            }
                        }

                        let unique_team = _div.toUpperCase() + " " + _team_name.toUpperCase()
                        
                        if (!(Object.keys(team_object).includes(unique_team))) {
                            team_object[unique_team] = {
                                "division": _div,
                                "team_name": _team_name,
                                "player_list": [],
                                "coach_list": [],
                                "team_staff_count": {"HC": " ","TS": 1,"M": 1,"AC": 1,"T": 1}
                            }
                        }

                        //console.log(current_player)
                        //console.log(_Number)
                        //console.log(_position)
                        //console.log(_position == "null")
                        
                        team_object[unique_team]["player_list"].push([split_name(current_player.trim()), _Number])
                        if (_position != "null" && _position != ""){
                            let new_coach_status = ""
                            if (Object.keys(coach_translation).includes(_position)){
                                new_coach_status = coach_translation[_position]
                            } else {
                                new_coach_status = "TS"
                            }

                            if (new_coach_status != "HC") {
                                let temp_status = new_coach_status
                                new_coach_status = new_coach_status + team_object[unique_team]["team_staff_count"][new_coach_status].toString()
                                team_object[unique_team]["team_staff_count"][temp_status] = team_object[unique_team]["team_staff_count"][temp_status] + 1
                            }

                            team_object[unique_team]["coach_list"].push([split_name(current_player.trim()), new_coach_status])
                        }

                        
                        
                    }
                } else if (new_method == false){
                    let parser = new DOMParser();
                    let htmlDoc = parser.parseFromString(successful_player_lists[k].value.request.responseText, 'text/html');
                    //console.log(htmlDoc)
                    //let AVSL_check = htmlDoc.getElementsByClassName("title")[0].textContent.trim()
                    //isAVSL = false
                    //if (AVSL_check == "2025 Mahindra Australian Volleyball Super League") {
                    //    isAVSL = true
                    //}
                    
                    let upload_type = ""

                    if (htmlDoc.getElementsByClassName("eventreports-rosters").length > 0) {upload_type = "roster"}
                    if (htmlDoc.getElementsByClassName("eventreports-players").length > 0) {upload_type = "athletes"}
                    
                    if (upload_type == "") {upload_type = "error"}

                    if (upload_type == "athletes") {

                        let all_tables = htmlDoc.getElementsByClassName("team")
                        let numFix = all_tables.length;
                        //console.log(numFix)
                        for (let i = 0; i < numFix; i = i + 1) {
                            let division = all_tables[i].getElementsByTagName("h3")[0].textContent.toUpperCase()
                            //console.log(division)
                            let all_divs = all_tables[i].getElementsByClassName("roster")
                            for (let x = 0; x < all_divs.length; x++) {
                                let all_rows = all_divs[x].getElementsByTagName("tr")
                                for (let j = 1; j < all_rows.length; j = j + 1) {
                                    let all_td = all_rows[j].getElementsByTagName("td")
                                    //console.log(all_td)
                                    //console.log(all_td[1])
                                    let current_player = all_td[1].innerText
                                    current_player = current_player.replace("\uFFFD","")
                                    current_player = current_player.replaceAll("*","");
                                    let team_name = all_td[2].innerText.toUpperCase()
                                    let unique_team = division.toUpperCase() + " " + team_name.toUpperCase()
                                    let _Number = all_td[0].innerText
                                    let _position = "null"
                                    try {
                                        _position = all_rows[j].getElementsByClassName("position")[0].textContent
                                        //console.log(coach_status)
                                    } catch (error) {
                                        _position = "null"
                                    }

                                    //if (isAVSL) {
                                    //    team_name = all_td[2].innerText+"_"+division
                                    //}

                                    if (!(Object.keys(team_object).includes(unique_team))) {
                                        team_object[unique_team] = {
                                            "division": division,
                                            "team_name": team_name,
                                            "player_list": [],
                                            "coach_list": [],
                                            "team_staff_count": {"HC": " ","TS": 1,"M": 1,"AC": 1,"T": 1}
                                        }
                                    }

                                    //console.log(current_player)
                                    //console.log(_Number)
                                    //console.log(_position)
                                    //console.log(_position == "null")
                                    
                                    team_object[unique_team]["player_list"].push([split_name(current_player.trim()), _Number])
                                    
                                    if (_position != "null" && _position != ""){
                                        let new_coach_status = ""
                                        if (Object.keys(coach_translation).includes(_position)){
                                            new_coach_status = coach_translation[_position]
                                        } else {
                                            new_coach_status = "TS"
                                        }

                                        if (new_coach_status != "HC") {
                                            let temp_status = new_coach_status
                                            new_coach_status = new_coach_status + team_object[unique_team]["team_staff_count"][new_coach_status].toString()
                                            team_object[unique_team]["team_staff_count"][temp_status] = team_object[unique_team]["team_staff_count"][temp_status] + 1
                                        }

                                        team_object[unique_team]["coach_list"].push([split_name(current_player.trim()), new_coach_status])
                                    }

                                    /*
                                    if (!(Object.keys(team_staff_object).includes(team_name))) {
                                        team_staff_object[team_name] = {"HC": " ","TS": 1,"M": 1,"AC": 1,"T": 1}
                                    }
                                    
                                    if (player_number != "") {
                                        if (!(Object.keys(all_team_lists).includes(team_name))) {
                                            all_team_lists[team_name] = [[split_name(player_name.trim()),player_number]]
                                        } else {
                                            all_team_lists[team_name].push([split_name(player_name.trim()),player_number])
                                        }
                                    }
                                    if (coach_status != "") {
                                        console.log(coach_status)
                                        if (!(Object.keys(all_coach_lists).includes(team_name))) {
                                            let new_coach_status = coach_translation[coach_status]
                                            let final_coach_status = new_coach_status
                                            //console.log(final_coach_status)
                                            //console.log(team_staff_object)
                                            console.log(team_staff_object[team_name])
                                            if (final_coach_status != "C") {
                                                final_coach_status = new_coach_status + team_staff_object[team_name][new_coach_status].toString().trim()
                                                team_staff_object[team_name][new_coach_status] = team_staff_object[team_name][new_coach_status] + 1
                                            }
                                            console.log(final_coach_status)
                                            
                                            all_coach_lists[team_name] = [[split_name(player_name.trim()),final_coach_status.trim()]]
                                        } else {

                                            let new_coach_status = coach_translation[coach_status]
                                            let final_coach_status = new_coach_status
                                            console.log(final_coach_status)
                                            if (final_coach_status != "C") {
                                                console.log(final_coach_status)
                                                console.log(team_staff_object[team_name][new_coach_status])
                                                final_coach_status = new_coach_status + team_staff_object[team_name][new_coach_status].toString().trim()
                                                team_staff_object[team_name][new_coach_status] = team_staff_object[team_name][new_coach_status] + 1
                                            }
                                            console.log(final_coach_status)
                                            all_coach_lists[team_name].push([split_name(player_name.trim()),final_coach_status.trim()])
                                        }
                                    }
                                    */
                                    
                                }
                            }
                        }
                    } else if (upload_type == "roster") {
                        let all_tables = htmlDoc.getElementsByClassName("team")
                        let numFix = all_tables.length;
                        //console.log(numFix)
                        for (let i = 0; i < numFix; i = i + 1) {
                            let _team_name = all_tables[i].getElementsByTagName("h2")[0].textContent.trim().toUpperCase()
                            let _div = all_tables[i].getElementsByTagName("i")[0].textContent.split(")")[0].trim().replace("(","").toUpperCase()
                            let all_people = all_tables[i].getElementsByClassName("roster")
                            let unique_team = _div.toUpperCase() + " " + _team_name.toUpperCase()
                            for (let x = 0; x < all_people.length; x++) {
                                // Players
                                if (all_people[x].className == "roster") {
                                    let all_rows = all_people[x].getElementsByTagName("tr")
                                    for (let j = 1; j < all_rows.length; j = j + 1) {
                                        let all_td = all_rows[j].getElementsByTagName("td")
                                        //console.log(all_td)
                                        //console.log(all_td[1])
                                        let current_player = all_td[1].innerText
                                        current_player = current_player.replace("\uFFFD","")
                                        current_player = current_player.replaceAll("*","");
                                        //let team_name = all_td[2].innerText
                                        //let unique_team = division + " " + team_name
                                        let _Number = all_td[0].innerText
                                        let _position = "null"
                                        try {
                                            _position = all_rows[j].getElementsByClassName("position")[0].textContent
                                            //console.log(coach_status)
                                        } catch (error) {
                                            _position = "null"
                                        }

                                        //if (isAVSL) {
                                        //    team_name = all_td[2].innerText+"_"+division
                                        //}

                                        if (!(Object.keys(team_object).includes(unique_team))) {
                                            team_object[unique_team] = {
                                                "division": _div,
                                                "team_name": _team_name,
                                                "player_list": [],
                                                "coach_list": [],
                                                "team_staff_count": {"HC": " ","TS": 1,"M": 1,"AC": 1,"T": 1}
                                            }
                                        }

                                        //console.log(current_player)
                                        //console.log(_Number)
                                        //console.log(_position)
                                        //console.log(_position == "null")
                                        
                                        team_object[unique_team]["player_list"].push([split_name(current_player.trim()), _Number])
                                        
                                        if (_position != "null" && _position != ""){
                                            let new_coach_status = ""
                                            if (Object.keys(coach_translation).includes(_position)){
                                                new_coach_status = coach_translation[_position]
                                            } else {
                                                new_coach_status = "TS"
                                            }

                                            if (new_coach_status != "HC") {
                                                let temp_status = new_coach_status
                                                new_coach_status = new_coach_status + team_object[unique_team]["team_staff_count"][new_coach_status].toString()
                                                team_object[unique_team]["team_staff_count"][temp_status] = team_object[unique_team]["team_staff_count"][temp_status] + 1
                                            }

                                            team_object[unique_team]["coach_list"].push([split_name(current_player.trim()), new_coach_status])
                                        }
                                    }

                                } else if (all_people[x].className == "roster coach-roster"){
                                    // Coaches

                                    let all_rows = all_people[x].getElementsByTagName("tr")
                                    for (let j = 1; j < all_rows.length; j = j + 1) {
                                        let all_td = all_rows[j].getElementsByTagName("td")
                                        let current_player = all_td[0].innerText
                                        current_player = current_player.replace("\uFFFD","")
                                        current_player = current_player.replaceAll("*","");
                                        let _position = "null"
                                        try {
                                            _position = all_td[1]
                                        } catch (error) {
                                            _position = "null"
                                        }

                                        if (!(Object.keys(team_object).includes(unique_team))) {
                                            team_object[unique_team] = {
                                                "division": _div,
                                                "team_name": _team_name,
                                                "player_list": [],
                                                "coach_list": [],
                                                "team_staff_count": {"HC": " ","TS": 1,"M": 1,"AC": 1,"T": 1}
                                            }
                                        }
                                        if (_position != "null" && _position != ""){
                                            let new_coach_status = ""
                                            //console.log(_position)
                                            if (Object.keys(coach_translation).includes(_position)){
                                                new_coach_status = coach_translation[_position]
                                            } else {
                                                new_coach_status = "TS"
                                            }

                                            if (new_coach_status != "HC") {
                                                let temp_status = new_coach_status
                                                new_coach_status = new_coach_status + team_object[unique_team]["team_staff_count"][new_coach_status].toString()
                                                team_object[unique_team]["team_staff_count"][temp_status] = team_object[unique_team]["team_staff_count"][temp_status] + 1
                                            }

                                            team_object[unique_team]["coach_list"].push([split_name(current_player.trim()), new_coach_status])
                                        }
                                    }

                                }
                            }
                        }
                    }
                }

            }

            console.log(team_object)
            //console.log(all_coach_lists)
            console.log(upd_fixtures)
            console.log("HELP ME_1 VERSION 1")
            for (i = 0; i < upd_fixtures.length; i++) {
                let fixture_date = upd_fixtures[i][12]+"-"+upd_fixtures[i][11]+"-"+upd_fixtures[i][10]
                let fixture_division = upd_fixtures[i][9]
                console.log(fixture_division)
                let team_a = upd_fixtures[i][6].toUpperCase()//.split(" ")[0];
                let team_b = upd_fixtures[i][7].toUpperCase()//.split(" ")[0];
                //console.log(team_a)
                //console.log(team_b)
                let team_a_unique = fixture_division[0].toUpperCase() + " " + team_a
                let team_b_unique = fixture_division[0].toUpperCase() + " " + team_b
                //console.log(team_a_unique)
                //console.log(team_b_unique)
                //if (upd_fixtures[i][9][2] == "2025 AVSL Season") {
                //    team_a = team_a + "_" + upd_fixtures[i][9][0]
                //    team_b = team_b + "_" + upd_fixtures[i][9][0]
                //}

                //console.log(all_coach_lists[team_a])
                //console.log(all_coach_lists[team_b])

                console.log(all_team_lists[team_a])
                console.log(all_team_lists[team_b])
                upd_fixtures[i][17] = [["",""]];
                upd_fixtures[i][18] = [["",""]];
                
                // for AVSL, sort by number
                /*if (upd_fixtures[i][9][2] == "2025 AVSL Season") {
                    if (Object.keys(all_team_lists).includes(team_a)) {
                        upd_fixtures[i][17] = all_team_lists[team_a].sort(function (a, b) {
                            if (isNaN(parseInt(a[1])) || isNaN(parseInt(b[1]))) {
                            if (isNaN(parseInt(a[1])) && isNaN(parseInt(b[1]))) {
                                if (a[0][1] > b[0][1]){return 1} else {return -1}
                            } else {if (isNaN(parseInt(a[1]))) {return 1} else {return -1}}
                            } else {
                            if (parseInt(a[1]) > parseInt(b[1])){ return 1
                            } else if (parseInt(a[1]) < parseInt(b[1])){ return -1
                            } else if (parseInt(a[1]) === parseInt(b[1])){if (a[0][1] > b[0][1]){return 1}
                                return -1
                        }}})
                    }
                    if (Object.keys(all_team_lists).includes(team_b)) {
                        upd_fixtures[i][18] = all_team_lists[team_b].sort(function (a, b) {
                            if (isNaN(parseInt(a[1])) || isNaN(parseInt(b[1]))) {
                            if (isNaN(parseInt(a[1])) && isNaN(parseInt(b[1]))) {
                                if (a[0][1] > b[0][1]){return 1} else {return -1}
                            } else {if (isNaN(parseInt(a[1]))) {return 1} else {return -1}}
                            } else {
                            if (parseInt(a[1]) > parseInt(b[1])){ return 1
                            } else if (parseInt(a[1]) < parseInt(b[1])){ return -1
                            } else if (parseInt(a[1]) === parseInt(b[1])){if (a[0][1] > b[0][1]){return 1}
                                return -1
                        }}})
                    }

                } else {*/
                if (upd_fixtures[i][9][2] == "2025 AVSL Season") {
                    if (Object.keys(team_object).includes(team_a_unique)) {
                        console.log(team_object[team_a_unique]["player_list"])
                        upd_fixtures[i][17] = team_object[team_a_unique]["player_list"].sort(function (a, b) {
                            if (isNaN(parseInt(a[1])) || isNaN(parseInt(b[1]))) {
                            if (isNaN(parseInt(a[1])) && isNaN(parseInt(b[1]))) {
                                if (a[0][1] > b[0][1]){return 1} else {return -1}
                            } else {if (isNaN(parseInt(a[1]))) {return 1} else {return -1}}
                            } else {
                            if (parseInt(a[1]) > parseInt(b[1])){ return 1
                            } else if (parseInt(a[1]) < parseInt(b[1])){ return -1
                            } else if (parseInt(a[1]) === parseInt(b[1])){if (a[0][1] > b[0][1]){return 1}
                                return -1
                        }}})
                    }
                    if (Object.keys(team_object).includes(team_b_unique)) {
                        console.log(team_object[team_b_unique]["player_list"])
                        upd_fixtures[i][18] = team_object[team_b_unique]["player_list"].sort(function (a, b) {
                            if (isNaN(parseInt(a[1])) || isNaN(parseInt(b[1]))) {
                            if (isNaN(parseInt(a[1])) && isNaN(parseInt(b[1]))) {
                                if (a[0][1] > b[0][1]){return 1} else {return -1}
                            } else {if (isNaN(parseInt(a[1]))) {return 1} else {return -1}}
                            } else {
                            if (parseInt(a[1]) > parseInt(b[1])){ return 1
                            } else if (parseInt(a[1]) < parseInt(b[1])){ return -1
                            } else if (parseInt(a[1]) === parseInt(b[1])){if (a[0][1] > b[0][1]){return 1}
                                return -1
                        }}})
                    }

                } else {
                    if (Object.keys(team_object).includes(team_a_unique)) {
                        console.log(team_object[team_a_unique]["player_list"])
                        upd_fixtures[i][17] = team_object[team_a_unique]["player_list"].sort(function (a, b) {
                            if (a[0][1] > b[0][1]){ return 1
                                } else if (a[0][1] < b[0][1]){ return -1
                            } else if (a[0][1] === b[0][1]){if (a[0][0] > b[0][0]){return 1}
                                return -1
                            }})
                    }

                    if (Object.keys(team_object).includes(team_b_unique)) {
                        console.log(team_object[team_b_unique]["player_list"])
                        upd_fixtures[i][18] = team_object[team_b_unique]["player_list"].sort(function (a, b) {
                            if (a[0][1] > b[0][1]){ return 1
                                } else if (a[0][1] < b[0][1]){ return -1
                            } else if (a[0][1] === b[0][1]){if (a[0][0] > b[0][0]){return 1}
                                return -1
                            }})
                    }
                }


                if (Object.keys(team_object).includes(team_a_unique)) {
                    let temp = upd_fixtures[i][20]

                    let input_list = team_object[team_a_unique]["coach_list"]
                    input_list.push([['', ''], ''])
                    input_list.push([['', ''], ''])
                    input_list.push([['', ''], ''])
                    input_list.push([['', ''], ''])
                    input_list.push([['', ''], ''])

                    // do some sorting

                    for (let m = 0; m < 5; m++) {
                        console.log(temp[m].length)
                        if (temp[m][0][0] == "" ) {
                            temp[m] = input_list[m]
                            
                        }
                    }

                    upd_fixtures[i][20] = temp.sort(function(a,b) {
                        if (AVSL_COACH_SORTING[a[1]] < AVSL_COACH_SORTING[b[1]]) {return -1} 
                        else if (AVSL_COACH_SORTING[a[1]] > AVSL_COACH_SORTING[b[1]]) {return 1}
                        else {return 0}
                    })
                }

                if (Object.keys(team_object).includes(team_b_unique)) {
                    let temp = upd_fixtures[i][21]

                    let input_list = team_object[team_b_unique]["coach_list"]
                    input_list.push([['', ''], ''])
                    input_list.push([['', ''], ''])
                    input_list.push([['', ''], ''])
                    input_list.push([['', ''], ''])
                    input_list.push([['', ''], ''])

                    // do some sorting

                    for (let m = 0; m < 5; m++) {
                        console.log(temp[m].length)
                        if (temp[m][0][0] == "" ) {
                            temp[m] = input_list[m]
                        }
                    }
                    upd_fixtures[i][21] = temp.sort(function(a,b) {
                        if (AVSL_COACH_SORTING[a[1]] < AVSL_COACH_SORTING[b[1]]) {return -1} 
                        else if (AVSL_COACH_SORTING[a[1]] > AVSL_COACH_SORTING[b[1]]) {return 1}
                        else {return 0}
                    })
                }
            }

            //return await upd_fixtures;
            //return upd_fixtures

        } else {

            for (let j = 0; j < successful_player_lists.length; j++) {
                let parser = new DOMParser();
                let htmlDoc = parser.parseFromString(successful_player_lists[j].value.request.responseText, 'text/html');

                let all_tables = htmlDoc.getElementsByClassName("team")
                let numFix = all_tables.length;

                for (let i = 0; i < numFix; i = i + 1) {
                    let division = all_tables[i].getElementsByTagName("h3")[0].textContent
                    let all_divs = all_tables[i].getElementsByClassName("roster")
                    for (let k = 0; k < all_divs.length; k++) {
                        let all_rows = all_divs[k].getElementsByTagName("tr")
                        for (let j = 1; j < all_rows.length; j = j + 1) {
                            let all_td = all_rows[j].getElementsByTagName("td")
                            let player_name = all_td[1].innerText
                            player_name = player_name.replace("\uFFFD","")
                            player_name = player_name.replaceAll("*","");
                            let team_name = all_td[2].innerText
                            if (!(Object.keys(all_team_lists).includes(team_name))) {
                                all_team_lists[team_name] = [[split_name(player_name.trim()),5]]
                            } else {
                                all_team_lists[team_name].push([split_name(player_name.trim()),5])
                            }
                        }
                    }
                }
            }
            successful_player_lists = []

            console.log(all_team_lists)
            console.log(upd_fixtures)
            console.log("HELP ME_2")
            for (i = 0; i < upd_fixtures.length; i++) {
                let fixture_date = upd_fixtures[i][12]+"-"+upd_fixtures[i][11]+"-"+upd_fixtures[i][10]
                let fixture_division = upd_fixtures[i][9]
                let team_a = upd_fixtures[i][6].toUpperCase()//.split(" ")[0];
                let team_b = upd_fixtures[i][7].toUpperCase()//.split(" ")[0];
                console.log(team_a)
                console.log(team_b)
                upd_fixtures[i][17] = [["",""]];
                upd_fixtures[i][18] = [["",""]];

                if (Object.keys(all_team_lists).includes(team_a)) {
                    upd_fixtures[i][17] = all_team_lists[team_a].sort(function (a, b) {
                        if (a[0][1] > b[0][1]){ return 1
                            } else if (a[0][1] < b[0][1]){ return -1
                        } else if (a[0][1] === b[0][1]){if (a[0][0] > b[0][0]){return 1}
                            return -1
                        }})
                }
                if (Object.keys(all_team_lists).includes(team_b)) {
                    upd_fixtures[i][18] = all_team_lists[team_b].sort(function (a, b) {
                        if (a[0][1] > b[0][1]){ return 1
                            } else if (a[0][1] < b[0][1]){ return -1
                        } else if (a[0][1] === b[0][1]){if (a[0][0] > b[0][0]){return 1}
                            return -1
                        }})
                }
            }

            //return await upd_fixtures;
            //return upd_fixtures
        }
    })
    return await upd_fixtures
    /*
    console.log(all_team_lists)
    console.log(upd_fixtures)
    console.log("HELP ME")
    for (i = 0; i < upd_fixtures.length; i++) {
        let fixture_date = upd_fixtures[i][12]+"-"+upd_fixtures[i][11]+"-"+upd_fixtures[i][10]
        let fixture_division = upd_fixtures[i][9]
        let team_a = upd_fixtures[i][6].toUpperCase()//.split(" ")[0];
        let team_b = upd_fixtures[i][7].toUpperCase()//.split(" ")[0];
        console.log(team_a)
        console.log(team_b)
        upd_fixtures[i][17] = [["",""]];
        upd_fixtures[i][18] = [["",""]];

        if (Object.keys(all_team_lists).includes(team_a)) {
            upd_fixtures[i][17] = all_team_lists[team_a].sort(function (a, b) {
                if (a[0][1] > b[0][1]){ return 1
                    } else if (a[0][1] < b[0][1]){ return -1
                } else if (a[0][1] === b[0][1]){if (a[0][0] > b[0][0]){return 1}
                    return -1
                }})
        }
        if (Object.keys(all_team_lists).includes(team_b)) {
            upd_fixtures[i][18] = all_team_lists[team_b].sort(function (a, b) {
                if (a[0][1] > b[0][1]){ return 1
                    } else if (a[0][1] < b[0][1]){ return -1
                } else if (a[0][1] === b[0][1]){if (a[0][0] > b[0][0]){return 1}
                    return -1
                }})
        }
    }

    return await upd_fixtures;
    */
}

/**
 * Parses the Season Leaders webpage, sorts all players into their teams alphabetically, then updates the fixtures.
 * @param {Array} players_list 
 * @param {Fixture} upd_fixtures 
 * @returns Updated Fixture with Team Lists
 */
function parsePlayerList_old(players_list, upd_fixtures) {
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
            /*if (!(Object.keys(dict).includes(team_id))) {
                dict[team_id] = [[split_name(name.trim()), games_played]]
            } else {
                dict[team_id].push([split_name(name.trim()), games_played])
            }*/
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
function pdf_init(venues, wavl, wavjl, dates, events_) {
    console.log("pdf_init");
    // Get config data from selected teams, and add to an array
    var leagues = [];
    var fixtures = [];
    /*
    console.log(wavjl);
    for (var i = 0; i < wavl.length; i++) {
        leagues.push([__CONFIG__.wavl[wavl[i]].long, __CONFIG__.wavl[wavl[i]].short, __CONFIG__.wavl[wavl[i]].id])
    }
    for (var i = 0; i < wavjl.length; i++) {
        leagues.push([__CONFIG__.jl[wavjl[i]].long, __CONFIG__.jl[wavjl[i]].short, __CONFIG__.jl[wavjl[i]].id])
    }
    */
    for (var i = 0; i < events_.length; i++) {
        console.log("abcd")
        console.log(__CONFIG__.events)
        console.log(events_)
        console.log(events_[i])
        console.log(__CONFIG__.events[events_[i]])
        var indiv_event = get_single_fixture(__CONFIG__.events[events_[i]])
        console.log(indiv_event)
        fixtures.push(indiv_event)
    }
    //var indiv_wavl = get_single_fixture(dates[0], dates[1], "WAVL");
    //fixtures.push(indiv_wavl);
    //var indiv_wavjl = get_single_fixture(dates[0], dates[1], "WAVjL");
    //fixtures.push(indiv_wavjl);
    console.log(0)
    console.log(fixtures)
    Promise.allSettled(fixtures).then(fix_val => {
        var team_list = []
        var player_lists = []
        var upd_fixtures = html_to_fixture(venues, leagues, dates, fix_val);
        for (var i = 0; i < events_.length; i++) {
            if (__CONFIG__.events[events_[i]]["printPlayers"] == "true") {
                //var slow_id_list = __CONFIG__.events[events_[i]]["backup_players"]["id_array"];
                var slow_id_list = [];
                for (var j = 0; j < Object.keys(__CONFIG__.events[events_[i]]["backup_players"]["new_id_array"]).length; j++) {
                    let index = Object.keys(__CONFIG__.events[events_[i]]["backup_players"]["new_id_array"])[j]
                    console.log(index)
                    slow_id_list = slow_id_list.concat(__CONFIG__.events[events_[i]]["backup_players"]["new_id_array"][index])   
                }
                console.log(slow_id_list)
                var slow_head = __CONFIG__.events[events_[i]]["backup_players"]["base_url"];
                for (var j = 0; j < slow_id_list.length; j++) {
                    console.log(slow_id_list[j])
                    var slow_object = {"players_url": slow_head+slow_id_list[j].toString()}
                    var player_List = getPlayerList(slow_object);
                    player_lists.push(player_List)
                }
                if (slow_id_list.length < 1) {
                    var player_List = getPlayerList(__CONFIG__.events[events_[i]]);
                    player_lists.push(player_List)
                }
            }
        }
        console.log(1)
        Promise.allSettled(player_lists).then(players_list => {
            console.log(players_list)
            parsePlayerList(players_list, upd_fixtures).then(value_4 => {
                Promise.all(value_4).then(finalised_fixtures => {
                    console.log("FINALISED_FIXTURES_HERE")
                    console.log(finalised_fixtures)
                    console.log("*|*|*|*|*|*")
                    modifyPdf(finalised_fixtures, dates[2], 0, 0).then(value => {
                        Promise.all(value).then(value_3 => {
                            mergePDFDocuments(value_3).then(value_2 => {
                                let filename = "Scoresheets " + dates[2].toString() + ".pdf"
                                
                                //download(value_2, filename, "application/pdf");
                                
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
        }).catch(error => catch_error(error))
    }).catch(error => catch_error(error))
}

/**
 * Axios request to get fixture.
 * @param {String} start_date   First date in range
 * @param {String} end_date     Second date in range
 * @returns 
 */
//async function get_single_fixture(start_date, end_date, league) {
async function get_single_fixture(event) {
    //console.log(start_date);
    //console.log(end_date);
    axios;
    //const head = 'https://cors-anywhere-og-v5kf.onrender.com/vwa.bracketpal.com/dailyform/range?start_date=';
    //var url = head + start_date.toString() + "&end_date=" + end_date.toString();
    //console.log("get_single_fixture: " + url);
    //return await axios.get(url);
    console.log(event)
    const head = event.fixture_url
    console.log(head)
    console.log("get_single_fixture -" + head)
    return await axios.get(head);
    /*
    if (league == "WAVL") {
        const head = "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/220866/wavl/documents/schedule?layout=datetime"
        console.log("get_single_fixture -" + head)
        return await axios.get(head);
    } else if (league == "WAVjL") {
        const head = "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/220963/wavjl/documents/schedule?layout=datetime"
        console.log("get_single_fixture -" + head)
        return await axios.get(head);
    }
    */
    //console.log("get_single_fixture -" + head)
    //return await axios.get(head);

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
 * Axios request to get fixture.
 * @param {String} id           id of team
 * @param {String} start_date   First date in range
 * @returns 
 */
async function individual_fixture(id, start_date) {
    axios;
    //const head = 'https://cors-anywhere-og-v5kf.onrender.com/vwa.bracketpal.com/dailyform/';
    //var url = head + id.toString() + "/" + start_date.toString();
    const head = "https://cors-anywhere-og-v5kf.onrender.com/volleyball.exposureevents.com/220866/wavl/documents/schedule?layout=datetime"
    console.log("get_single_fixture: " + head);
    return await axios.get(head);
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

// [zero_venue_split, _venue_0, _venue_1, _venue_2, _venue_full, _court, _team_a, _team_b, _duty, _division, _date_dd, _date_mm, _date_yyyy, _time_hr, _time_min, _sorting, _time_sorting, [_a_List], [b_List]], eventName
// [     0              1          2          3          4         5        6         7     8         9        10         11         12        13          14       15          16            17         18         19
/**
 * Read values from the Fixtures and update a PDF.
 * @param {Fixture[]} fix 
 * @param {String} dates 
 * @returns Array of PDF's (Base64Doc)
 */
async function modifyPdf(fix, dates, doc, run) {
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
    var WAVLurl = "https://volleyballwa.github.io/static/scoresheets/def.pdf";
    var JLurl = "https://volleyballwa.github.io/static/scoresheets/def_jl.pdf";
    var newWAVLurl = "https://volleyballwa.github.io/static/scoresheets/new_def.pdf";
    var extraWAVLurl = "https://volleyballwa.github.io/static/scoresheets/extra_def.pdf";
    var AVSLurl = "https://volleyballwa.github.io/static/scoresheets/AVSL.pdf";
    var AVSL_final_url = "https://volleyballwa.github.io/static/scoresheets/AVSLfinalsNew.pdf";
    var EVAurl = "https://volleyballwa.github.io/static/scoresheets/Blank_EVA_Scoresheet.pdf";
    var PSAMurl = "https://volleyballwa.github.io/static/scoresheets/PSA_MS.pdf";
    var PSASurl = "https://volleyballwa.github.io/static/scoresheets/PSA_SS.pdf";
    var vwaHSburl = "https://volleyballwa.github.io/static/scoresheets/vwa_hs_beach.pdf";

    var vaTimedurl = "https://volleyballwa.github.io/static/scoresheets/new_def.pdf";
    var vaBo3url = "https://volleyballwa.github.io/static/scoresheets/new_def.pdf";
    var vaBo5url = "https://volleyballwa.github.io/static/scoresheets/new_def.pdf";

    const WAVLexistingPdfBytes = await fetch(WAVLurl).then(res => res.arrayBuffer());
    const JLexistingPdfBytes = await fetch(JLurl).then(resp => resp.arrayBuffer());
    const newWAVLexistingPdfBytes = await fetch(newWAVLurl).then(res => res.arrayBuffer());
    const extraWAVLexistingPdfBytes = await fetch(extraWAVLurl).then(res => res.arrayBuffer());
    const AVSLexistingPdfBytes = await fetch(AVSLurl).then(res => res.arrayBuffer());
    const AVSL_finalexistingPdfBytes = await fetch(AVSL_final_url).then(res => res.arrayBuffer());
    const EVAexistingPdfBytes = await fetch(EVAurl).then(res => res.arrayBuffer());
    const PSAMexistingPdfBytes = await fetch(PSAMurl).then(res => res.arrayBuffer());
    const PSASexistingPdfBytes = await fetch(PSASurl).then(res => res.arrayBuffer());
    const vwaHSbexistingPdfBytes = await fetch(vwaHSburl).then(res => res.arrayBuffer());

    const vaTimedexistingPdfBytes = await fetch(vaTimedurl).then(res => res.arrayBuffer());
    const vaBo3existingPdfBytes = await fetch(vaBo3url).then(res => res.arrayBuffer());
    const vaBo5existingPdfBytes = await fetch(vaBo5url).then(res => res.arrayBuffer());

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

    /*
    if (run == 0) {
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
    }
    */

    //var mergedPdf = await PDFLib.PDFDocument.create();
    //var merged64 = await mergedPdf.saveAsBase64()
    var merged64 = 0;

    for (var i = 0; i < fixtures.length; i++) {
        scoresheet_type = fixtures[i][19]

        if (document.getElementById("scoresheet_type").value != "Default") {
            if (document.getElementById("scoresheet_type").value == "Bo3") {
                scoresheet_type = "VA_3"
            } else if (document.getElementById("scoresheet_type").value == "Bo5") {
                scoresheet_type = "VA_5"
            } else if (document.getElementById("scoresheet_type").value == "Timed") {
                scoresheet_type = "VA_T"
            }
        }

        // Load WAVL and Junior League scoresheets
        var WAVLurl = "https://volleyballwa.github.io/static/scoresheets/def.pdf";
        var JLurl = "https://volleyballwa.github.io/static/scoresheets/def_jl.pdf";
        var newWAVLurl = "https://volleyballwa.github.io/static/scoresheets/new_def.pdf";
        var extraWAVLurl = "https://volleyballwa.github.io/static/scoresheets/extra_def.pdf";
        var AVSLurl = "https://volleyballwa.github.io/static/scoresheets/AVSL.pdf";
        var AVSL_final_url = "https://volleyballwa.github.io/static/scoresheets/AVSLfinalsNew.pdf";
        var EVAurl = "https://volleyballwa.github.io/static/scoresheets/Blank_EVA_Scoresheet.pdf";
        var PSAMurl = "https://volleyballwa.github.io/static/scoresheets/PSA_MS.pdf";
        var PSASurl = "https://volleyballwa.github.io/static/scoresheets/PSA_SS.pdf";
        var vwaHSburl = "https://volleyballwa.github.io/static/scoresheets/vwa_hs_beach.pdf";
        
        var vaTimedurl = "https://volleyballwa.github.io/static/scoresheets/def.pdf";
        var vaBo3url = "https://volleyballwa.github.io/static/scoresheets/def.pdf";
        var vaBo5url = "https://volleyballwa.github.io/static/scoresheets/def.pdf";

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

        var curr_merged_pdf = await merged64;
        
        var JLpdfDoc = await PDFLib.PDFDocument.load(JLexistingPdfBytes);
        var JLhelveticaFont = await JLpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var JLhelveticaBold = await JLpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var JLpages = await JLpdfDoc.getPages();
        var JLfirstPage = await JLpages[0];

        var AVSLpdfDoc = await PDFLib.PDFDocument.load(AVSLexistingPdfBytes);
        var AVSLhelveticaFont = await AVSLpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var AVSLhelveticaBold = await AVSLpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var AVSLpages = await AVSLpdfDoc.getPages();
        var AVSLfirstPage = await AVSLpages[0];

        var AVSL_finalpdfDoc = await PDFLib.PDFDocument.load(AVSL_finalexistingPdfBytes);
        var AVSL_finalhelveticaFont = await AVSL_finalpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var AVSL_finalhelveticaBold = await AVSL_finalpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var AVSL_finalpages = await AVSL_finalpdfDoc.getPages();
        var AVSL_finalfirstPage = await AVSL_finalpages[0];

        var EVApdfDoc = await PDFLib.PDFDocument.load(EVAexistingPdfBytes);
        var EVAhelveticaFont = await EVApdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var EVAhelveticaBold = await EVApdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var EVApages = await EVApdfDoc.getPages();
        var EVAfirstPage = await EVApages[0];

        var PSAMpdfDoc = await PDFLib.PDFDocument.load(PSAMexistingPdfBytes);
        var PSAMhelveticaFont = await PSAMpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var PSAMhelveticaBold = await PSAMpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var PSAMpages = await PSAMpdfDoc.getPages();
        var PSAMfirstPage = await PSAMpages[0];

        var PSASpdfDoc = await PDFLib.PDFDocument.load(PSASexistingPdfBytes);
        var PSAShelveticaFont = await PSASpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var PSAShelveticaBold = await PSASpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var PSASpages = await PSASpdfDoc.getPages();
        var PSASfirstPage = await PSASpages[0];

        var vwaHSbpdfDoc = await PDFLib.PDFDocument.load(vwaHSbexistingPdfBytes);
        var vwaHSbhelveticaFont = await vwaHSbpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var vwaHSbhelveticaBold = await vwaHSbpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var vwaHSbpages = await vwaHSbpdfDoc.getPages();
        var vwaHSbfirstPage = await vwaHSbpages[0];

        var vaTimedpdfDoc = await PDFLib.PDFDocument.load(vaTimedexistingPdfBytes);
        var vaTimedhelveticaFont = await vaTimedpdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var vaTimedhelveticaBold = await vaTimedpdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var vaTimedpages = await vaTimedpdfDoc.getPages();
        var vaTimedfirstPage = await vaTimedpages[0];

        var vaBo3pdfDoc = await PDFLib.PDFDocument.load(vaBo3existingPdfBytes);
        var vaBo3helveticaFont = await vaBo3pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var vaBo3helveticaBold = await vaBo3pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var vaBo3pages = await vaBo3pdfDoc.getPages();
        var vaBo3firstPage = await vaBo3pages[0];

        var vaBo5pdfDoc = await PDFLib.PDFDocument.load(vaBo5existingPdfBytes);
        var vaBo5helveticaFont = await vaBo5pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        var vaBo5helveticaBold = await vaBo5pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        var vaBo5pages = await vaBo5pdfDoc.getPages();
        var vaBo5firstPage = await vaBo5pages[0];



        // If manually added, add venue details to __venues__
        if (fixtures[i][9][2] == "Manual Upload"){
            console.log(__venues__)
            if (fixtures[i][0] in Object.keys(__venues__)){
                console.log(__venues__[fixtures[i][0]])
            } else {
                __venues__[fixtures[i][0]] = fixtures[i][0]
            }
        }


        // If WAVL Game (Divisions or State League)
        // use OLD scoresheet for divisions (for now)
        //if (fixtures[i][9][0].includes("Division") || fixtures[i][9][0].includes("State")) {
        if (scoresheet_type == "12-sub") {
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

                if (fixtures[i][6].length > 22 || fixtures[i][7].length > 22) {
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
                    a_pres = [['', ''], ''];
                } else {
                    a_pres = [[__PRESIDENTS__[fixtures[i][6].substring(fixtures[i][6].indexOf(' ') + 1)], ''], '']
                }

                if (b_pres == __PRESIDENTS__["a"]){
                    b_pres = [['', ''], ''];
                } else {
                    b_pres = [[__PRESIDENTS__[fixtures[i][7].substring(fixtures[i][7].indexOf(' ') + 1)], ''], '']
                }

                if (measureText(a_pres.toUpperCase(), 10) >= 90 || measureText(b_pres.toUpperCase(), 10) >= 90 ) {
                    await extraWAVLfirstPage.drawText(a_pres, {
                        x: parseInt((328 - measureText(a_pres, 8)).toString()),
                        y: 462,
                        size: 8,
                        font: extraWAVLhelveticaFont
                    })
                    await extraWAVLfirstPage.drawText(b_pres, {
                        x: parseInt((523 - measureText(b_pres, 8)).toString()),
                        y: 462,
                        size: 8,
                        font: extraWAVLhelveticaFont
                    })
                } else {
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
                }

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
                if (fixtures[i][6].length > 22 || fixtures[i][7].length > 22) {
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
                /*console.log(fixtures[i][17][0])
                console.log(fixtures[i][17].length)
                console.log(fixtures[i][17][0])
                console.log(fixtures[i][17][0]!=['',''])
                console.log(fixtures[i][17][0][0]!='')
                console.log("abc" != ['',''])
                */
                if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                    for (var k = 0; k < fixtures[i][17].length; k++) {
                        if (k < Math.ceil(fixtures[i][17].length / 2)) {
                            // first name, first column
                            //console.log("---")
                            //console.log(fixtures[i][17][k][0].toUpperCase() + ": " + measureText(fixtures[i][17][k][0].toUpperCase(),6))
                            //console.log(k)
                            //console.log(i)
                            //console.log(fixtures[i])
                            //console.log(fixtures[i][17])
                            //console.log(fixtures[i][17][k])
                            //console.log(fixtures[i][17][k][0])
                            //console.log(fixtures[i][17][k][0][0])
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
                if (fixtures[i][18].length >= 1  && fixtures[i][18][0] != "" && fixtures[i][18][0][0] != "") {
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
                            if (measureText(fixtures[i][18][k][0][1].toUpperCase(), 6) >= 32) {
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

                if (measureText(a_pres.toUpperCase(), 10) >= 90 || measureText(b_pres.toUpperCase(), 10) >= 90 ) {
                    await newWAVLfirstPage.drawText(a_pres, {
                        x: parseInt((328 - measureText(a_pres, 8)).toString()),
                        y: 462,
                        size: 8,
                        font: newWAVLhelveticaFont
                    })
                    await newWAVLfirstPage.drawText(b_pres, {
                        x: parseInt((523 - measureText(b_pres, 8)).toString()),
                        y: 462,
                        size: 8,
                        font: newWAVLhelveticaFont
                    })
                } else {
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
                }

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
        } else if (scoresheet_type == "junior") {
            // Junior League
            
            // Team A Players
            //console.log(fixtures[i][9][2])
            //console.log(__CONFIG__.events[fixtures[i][9][2]])
            //console.log(__CONFIG__.events[fixtures[i][9][2]]["printPlayers"])

            if (__CONFIG__.events[fixtures[i][9][2]]["printPlayers"] == "true") {
                if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                    for (var k = 0; k < fixtures[i][17].length; k++) {
                        if (k < Math.ceil(fixtures[i][17].length / 2)) {
                            // first name, first column
                            console.log("---")
                            //console.log(fixtures[i][17][k][0].toUpperCase() + ": " + measureText(fixtures[i][17][k][0].toUpperCase(),6))
                            console.log(k)
                            console.log(i)
                            console.log(fixtures[i])
                            console.log(fixtures[i][17])
                            console.log(fixtures[i][17][k])
                            console.log(fixtures[i][17][k][0])
                            console.log(fixtures[i][17][k][0][0])
                            if (measureText(fixtures[i][17][k][0][0].toUpperCase(), 6) >= 32) {
                                await JLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                    x: 102.25,
                                    y: 445-((15.50*k)),
                                    size: 5,
                                    font: JLhelveticaFont
                                })
                            } else {
                                await JLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                    x: 102.25,
                                    y: 445-((15.50*k)),
                                    size: 6,
                                    font: JLhelveticaFont
                                })
                            }

                            // surname, first column
                            //console.log(fixtures[i][17][k][1].toUpperCase() + ": " + measureText(fixtures[i][17][k][1].toUpperCase(),6))
                            //console.log(fixtures[i][17][k][0][1])
                            if (measureText(fixtures[i][17][k][0][1].toUpperCase(), 6) >= 32) {
                                await JLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                    x: 102.25,
                                    y: 445-((15.50*k+7.0)),
                                    size: 5,
                                    font: JLhelveticaFont
                                })
                            } else {
                                await JLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                    x: 102.25,
                                    y: 445-((15.50*k+7.0)),
                                    size: 6,
                                    font: JLhelveticaFont
                                })
                            }
                        } else {
                            // first name, second column
                            //console.log(fixtures[i][17][k][0].toUpperCase() + ": " + measureText(fixtures[i][17][k][0].toUpperCase(),6))
                            if (measureText(fixtures[i][17][k][0][0].toUpperCase(), 6) >= 32) {
                                await JLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                    x: 260,
                                    y: 445-((15.50*(k-Math.ceil(fixtures[i][17].length / 2)))),
                                    size: 5,
                                    font: JLhelveticaFont
                                })
                            } else {
                                await JLfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase(), {
                                    x: 260,
                                    y: 445-((15.50*(k-Math.ceil(fixtures[i][17].length / 2)))),
                                    size: 6,
                                    font: JLhelveticaFont
                                })
                            }

                            // surname, second column
                            //console.log(fixtures[i][17][k][1].toUpperCase() + ": " + measureText(fixtures[i][17][k][1].toUpperCase(),6))
                            if (measureText(fixtures[i][17][k][0][1].toUpperCase(), 6) >= 32){
                                await JLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                    x: 260,
                                    y: 445-((15.50*(k-Math.ceil(fixtures[i][17].length / 2))+7.0)),
                                    size: 5,
                                    font: JLhelveticaFont
                                })
                            } else {
                                await JLfirstPage.drawText(fixtures[i][17][k][0][1].toUpperCase(), {
                                    x: 260,
                                    y: 445-((15.50*(k-Math.ceil(fixtures[i][17].length / 2))+7.0)),
                                    size: 6,
                                    font: JLhelveticaFont
                                })
                            }
                        }
                        
                    }
                    
                    // Team A, Second column numbers
                    if (fixtures[i][17].length > 1) {
                        let line_y_a = 452 -(15.50*Math.ceil(fixtures[i][17].length /2));

                        //console.log(line_y_a);
                        await JLfirstPage.drawLine({
                            start: { x: 230, y: 452 },
                            end: { x: 230, y: line_y_a },
                            thickness: 0.5,
                            color: rgb(0,0,0),
                            opacity: 1
                        })
                        
                        await JLfirstPage.drawLine({
                            start: { x: 255, y: 452 },
                            end: { x: 255, y: line_y_a },
                            thickness: 0.5,
                            color: rgb(0,0,0),
                            opacity: 1
                        })
                    }
                }

                // Team B Players
                if (fixtures[i][18].length >= 1 && fixtures[i][18][0] != '' && fixtures[i][18][0][0] != '') {
                    for (var k = 0; k < fixtures[i][18].length; k++) {
                        if (k < Math.ceil(fixtures[i][18].length / 2)) {
                            // first name, first column
                            //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                            if (measureText(fixtures[i][18][k][0][0].toUpperCase(), 6) >= 32) {
                                await JLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                    x: 525,
                                    y: 445-((15.50*k)),
                                    size: 5,
                                    font: JLhelveticaFont
                                })
                            } else {
                                await JLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                    x: 525,
                                    y: 445-((15.50*k)),
                                    size: 6,
                                    font: JLhelveticaFont
                                })
                            }

                            // surname, first column
                            //console.log(fixtures[i][18][k][1].toUpperCase() + ": " + measureText(fixtures[i][18][k][1].toUpperCase(),6))
                            if (measureText(fixtures[i][18][k][0][1].toUpperCase(), 6) >= 32) {
                                await JLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                    x: 525,
                                    y: 445-((15.50*k+7.0)),
                                    size: 5,
                                    font: JLhelveticaFont
                                })
                            } else {
                                await JLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                    x: 525,
                                    y: 445-((15.50*k+7.0)),
                                    size: 6,
                                    font: JLhelveticaFont
                                })
                            }
                        } else {
                            // first name, second column
                            //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                            if (measureText(fixtures[i][18][k][0][0].toUpperCase(), 6) >= 32) {
                                await JLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                    x: 665,
                                    y: 445-((15.50*(k-Math.ceil(fixtures[i][18].length / 2)))),
                                    size: 5,
                                    font: JLhelveticaFont
                                })
                            } else {
                                await JLfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase(), {
                                    x: 665,
                                    y: 445-((15.50*(k-Math.ceil(fixtures[i][18].length / 2)))),
                                    size: 6,
                                    font: JLhelveticaFont
                                })
                            }

                            // surname, second column
                            //console.log(fixtures[i][18][k][1].toUpperCase() + ": " + measureText(fixtures[i][18][k][1].toUpperCase(),6))
                            if (measureText(fixtures[i][18][k][0][1].toUpperCase(), 6) >= 32) {
                                await JLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                    x: 665,
                                    y: 445-((15.50*(k-Math.ceil(fixtures[i][18].length / 2))+7.0)),
                                    size: 5,
                                    font: JLhelveticaFont
                                })
                            } else {
                                await JLfirstPage.drawText(fixtures[i][18][k][0][1].toUpperCase(), {
                                    x: 665,
                                    y: 445-((15.50*(k-Math.ceil(fixtures[i][18].length / 2))+7.0)),
                                    size: 6,
                                    font: JLhelveticaFont
                                })
                            }
                        }
                    }
                    
                    if (fixtures[i][18].length > 1) {
                        // Team B, second column numbers
                        let line_y_b = 452 -(15.50*Math.ceil(fixtures[i][18].length /2));
                        //console.log(line_y_b);

                        await JLfirstPage.drawLine({
                            start: { x: 635, y: 452 },
                            end: { x: 635, y: line_y_b },
                            thickness: 0.5,
                            color: rgb(0,0,0),
                            opacity: 1
                        })
                        
                        await JLfirstPage.drawLine({
                            start: { x: 660, y: 452  },
                            end: { x: 660, y: line_y_b },
                            thickness: 0.5,
                            color: rgb(0,0,0),
                            opacity: 1
                        })
                    }
                }
            }

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
                let dt = parseInt(fixtures[i][10]).toString() + "/" + parseInt(fixtures[i][11]).toString() + "/" + parseInt(fixtures[i][12]).toString()
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
                x: parseInt((721 - measureText(fixtures[i][9][0], 13)).toString()),
                y: 504,
                size: 13,
                font: JLhelveticaFont
            })

            // Division (Short)
            /*
            await JLfirstPage.drawText(fixtures[i][9][1], {
                x: parseInt((721 - measureText(fixtures[i][9][1], 13)).toString()),
                y: 504,
                size: 13,
                font: JLhelveticaFont
            })
            */

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
        } else if (scoresheet_type == "avsl") {
            if (AVSL_FINAL_DATES.includes(fixtures[i][12]+"-"+fixtures[i][11]+"-"+fixtures[i][10])){
                // City
                console.log(fixtures[i][4])
                console.log(__CONFIG__.venues[fixtures[i][4]])
                let city = ''
                try {
                    city = __CONFIG__.venues[fixtures[i][4]].city
                } catch (error) {
                    city = ''
                }
                
                await AVSL_finalfirstPage.drawText(city, {
                    x: 65,
                    y: 809,
                    size: 14,
                    font: AVSL_finalhelveticaBold
                })
                // Team Tricodes
                let team_a_tri = AVSL_TRICODE[fixtures[i][6]]
                let team_b_tri = AVSL_TRICODE[fixtures[i][7]]
                
                if(typeof team_a_tri == 'undefined'){team_a_tri = ''}
                if(typeof team_b_tri == 'undefined'){team_b_tri = ''}

                await AVSL_finalfirstPage.drawText(team_a_tri, {
                    x: 1000,
                    y: 399,
                    size: 14,
                    font: AVSL_finalhelveticaBold
                })

                await AVSL_finalfirstPage.drawText(team_b_tri, {
                    x: 1102,
                    y: 399,
                    size: 14,
                    font: AVSL_finalhelveticaBold
                })
                
                // Pool
                let pool = "Pool"
                let temp_date = fixtures[i][12].toString()+"-"+fixtures[i][11].toString()+"-"+fixtures[i][10].toString()
                if (AVSL_FINAL_DATES.includes(temp_date)) {
                    pool = "Final"
                } else if (AVSL_SEMI_DATES.includes(temp_date)) {
                    pool = "Qual."
                }
                
                await AVSL_finalfirstPage.drawText(pool, {
                    x: 281,
                    y: 770.5,
                    size: 13,
                    font: AVSL_finalhelveticaBold
                })

                // Gender
                if (fixtures[i][9][1] == "W") {
                    await AVSL_finalfirstPage.drawLine({
                        start: { x: 176, y: 767.2 },
                        end: { x: 193, y: 784 },
                        thickness: 1,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    await AVSL_finalfirstPage.drawLine({
                        start: { x: 176, y: 784 },
                        end: { x: 193, y: 767.2 },
                        thickness: 1,
                        color: rgb(0, 0, 0),
                        opacity: 1
                    })
                } else if (fixtures[i][9][1] == "M") {
                    await AVSL_finalfirstPage.drawLine({
                        start: { x: 108.5, y: 767.2 },
                        end: { x: 125.3, y: 784 },
                        thickness: 1,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    await AVSL_finalfirstPage.drawLine({
                        start: { x: 108.5, y: 784 },
                        end: { x: 125.3, y: 767.2 },
                        thickness: 1,
                        color: rgb(0, 0, 0),
                        opacity: 1
                    })
                } 


                //var time = fixtures[i][13].toString() + ":" + fixtures[i][14].toString()
                var hh = fixtures[i][13].toString()[0] + "  " + fixtures[i][13].toString()[1]
                var mm = fixtures[i][14].toString()[0] + "  " + fixtures[i][14].toString()[1]
                // Time (hh:mm)
                await AVSL_finalfirstPage.drawText(hh, {
                    x: 602,
                    y: 809,
                    size: 15,
                    font: AVSL_finalhelveticaBold
                })

                await AVSL_finalfirstPage.drawText(mm, {
                    x: 635,
                    y: 809,
                    size: 15,
                    font: AVSL_finalhelveticaBold
                })
                
                // Team Names
                await AVSL_finalfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((461 - measureText(fixtures[i][6], 10)).toString()),
                    y: 777,
                    size: 10,
                    font: AVSL_finalhelveticaBold
                })
                await AVSL_finalfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((618 - measureText(fixtures[i][7], 10)).toString()),
                    y: 777,
                    size: 10,
                    font: AVSL_finalhelveticaBold
                })

                // Venue
                await AVSL_finalfirstPage.drawText(fixtures[i][3], {
                    x: 65,
                    y: 793,
                    size: 14,
                    font: AVSL_finalhelveticaBold
                })
                
                var ddmmyy = fixtures[i][10].toString()[0] + "  " + fixtures[i][10].toString()[1] + "  " + fixtures[i][11].toString()[0] + "  " + fixtures[i][11].toString()[1] + "  " + fixtures[i][12].slice(2,4).toString()[0] + "  " + fixtures[i][12].slice(2,4).toString()[1]

                await AVSL_finalfirstPage.drawText(ddmmyy, {
                    x: 450,
                    y: 809,
                    size: 15,
                    font: AVSL_finalhelveticaBold
                })

                // Team A List
                if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                    for (var k = 0; k < Math.min(fixtures[i][17].length, 12); k++) {
                        let name_formatted = fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase()
                        if (measureText(name_formatted, 6) >= 49) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 6,
                                font: AVSL_finalhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 43) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 7,
                                font: AVSL_finalhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 32) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 8,
                                font: AVSL_finalhelveticaFont
                            })
                        } else {
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 10,
                                font: AVSL_finalhelveticaFont
                            })
                        }
                        // draw number
                        let player_number = fixtures[i][17][k][1]
                        if (player_number.length == 1) {
                            player_number = " " + player_number
                        }
                        await AVSL_finalfirstPage.drawText(player_number, {
                            x: 957,
                            y: 368-((14*k)),
                            size: 10,
                            font: AVSL_finalhelveticaFont
                        })
                    }

                }

                // Team B List
                if (fixtures[i][18].length >= 1 && fixtures[i][18][0] != '' && fixtures[i][18][0][0] != '') {
                    for (var k = 0; k < Math.min(fixtures[i][18].length, 12); k++) {
                        let name_formatted = fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase()
                        if (measureText(name_formatted, 6) >= 49) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 6,
                                font: AVSL_finalhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 43) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 7,
                                font: AVSL_finalhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 32) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 8,
                                font: AVSL_finalhelveticaFont
                            })
                        } else {
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 10,
                                font: AVSL_finalhelveticaFont
                            })
                        }
                        
                        // draw number
                        let player_number = fixtures[i][18][k][1]
                        if (player_number.length == 1) {
                            player_number = " " + player_number
                        }
                        await AVSL_finalfirstPage.drawText(player_number, {
                            x: 1079,
                            y: 368-((14*k)),
                            size: 10,
                            font: AVSL_finalhelveticaFont
                        })
                    }
                }

                // Team A Coaches
                for (var k = 0; k < Math.min(fixtures[i][20].length, 5); k++) {
                    let name_formatted = fixtures[i][20][k][0][0].toUpperCase() + " " + fixtures[i][20][k][0][1].toUpperCase()
                    if (measureText(name_formatted, 6) >= 49) {
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 6,
                            font: AVSL_finalhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 43) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 7,
                            font: AVSL_finalhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 32) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 8,
                            font: AVSL_finalhelveticaFont
                        })
                    } else {
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 10,
                            font: AVSL_finalhelveticaFont
                        })
                    }
                    // draw number
                    let player_number = fixtures[i][20][k][1]
                    let player_extra = ""
                    if (player_number.length == 1) {
                        player_number = " " + player_number
                    }
                    if (player_number == "HC"){player_number = ""}
                    if (player_number[0] == "M") {
                        player_extra = player_number.slice(1)
                        player_number = " M"
                    } else if (player_number[0] == "T" && player_number[1] != "S") {
                        player_extra = player_number.slice(1)
                        player_number = " T"
                    } 
                    if (player_number.length > 2) {
                        player_extra = player_number.slice(2)
                        player_number = player_number.slice(0,2)
                    }
                    await AVSL_finalfirstPage.drawText(player_number, {
                        x: 956.5,
                        y: 142-((14*k)),
                        size: 8,
                        font: AVSL_finalhelveticaFont
                    })
                    await AVSL_finalfirstPage.drawText(player_extra, {
                        x: 966.5,
                        y: 148-((14*k)),
                        size: 5,
                        font: AVSL_finalhelveticaFont
                    })
                    console.log(player_extra)

                }

                // Team B Coaches
                for (var k = 0; k < Math.min(fixtures[i][21].length, 5); k++) {
                    let name_formatted = fixtures[i][21][k][0][0].toUpperCase() + " " + fixtures[i][21][k][0][1].toUpperCase()
                    if (measureText(name_formatted, 6) >= 49) {
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 6,
                            font: AVSL_finalhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 43) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 7,
                            font: AVSL_finalhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 32) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 8,
                            font: AVSL_finalhelveticaFont
                        })
                    } else {
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 10,
                            font: AVSL_finalhelveticaFont
                        })
                    }
                    // draw number
                    let player_number = fixtures[i][21][k][1]
                    let player_extra = ""
                    if (player_number.length == 1) {
                        player_number = " " + player_number
                    }
                    if (player_number == "HC"){player_number = ""}
                    if (player_number[0] == "M") {
                        player_extra = player_number.slice(1)
                        player_number = " M"
                    } else if (player_number[0] == "T" && player_number[1] != "S") {
                        player_extra = player_number.slice(1)
                        player_number = " T"
                    } 
                    if (player_number.length > 2) {
                        player_extra = player_number.slice(2)
                        player_number = player_number.slice(0,2)
                    }
                    await AVSL_finalfirstPage.drawText(player_number, {
                        x: 1078.5,
                        y: 142-((14*k)),
                        size: 8,
                        font: AVSL_finalhelveticaFont
                    })
                    await AVSL_finalfirstPage.drawText(player_extra, {
                        x: 1088.5,
                        y: 148-((14*k)),
                        size: 5,
                        font: AVSL_finalhelveticaFont
                    })
                    console.log(player_extra)
                }


                var saved = await AVSL_finalpdfDoc.saveAsBase64();
            } else {
                // City
                console.log(fixtures[i][4])
                console.log(__CONFIG__.venues[fixtures[i][4]])
                let city = ''
                try {
                    city = __CONFIG__.venues[fixtures[i][4]].city
                } catch (error) {
                    city = ''
                }
                
                await AVSLfirstPage.drawText(city, {
                    x: 65,
                    y: 809,
                    size: 14,
                    font: AVSLhelveticaBold
                })
                // Team Tricodes
                let team_a_tri = AVSL_TRICODE[fixtures[i][6]]
                let team_b_tri = AVSL_TRICODE[fixtures[i][7]]

                if(typeof team_a_tri == 'undefined'){team_a_tri = ''}
                if(typeof team_b_tri == 'undefined'){team_b_tri = ''}
                
                await AVSLfirstPage.drawText(team_a_tri, {
                    x: 1000,
                    y: 399,
                    size: 14,
                    font: AVSLhelveticaBold
                })

                await AVSLfirstPage.drawText(team_b_tri, {
                    x: 1102,
                    y: 399,
                    size: 14,
                    font: AVSLhelveticaBold
                })
                
                // Pool
                let pool = "Pool"
                let temp_date = fixtures[i][12].toString()+"-"+fixtures[i][11].toString()+"-"+fixtures[i][10].toString()
                if (AVSL_FINAL_DATES.includes(temp_date)) {
                    pool = "Final"
                } else if (AVSL_SEMI_DATES.includes(temp_date)) {
                    pool = "Qual."
                }
                
                await AVSLfirstPage.drawText(pool, {
                    x: 281,
                    y: 770.5,
                    size: 13,
                    font: AVSLhelveticaBold
                })

                // Gender
                if (fixtures[i][9][1] == "W") {
                    await AVSLfirstPage.drawLine({
                        start: { x: 176, y: 767.2 },
                        end: { x: 193, y: 784 },
                        thickness: 1,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    await AVSLfirstPage.drawLine({
                        start: { x: 176, y: 784 },
                        end: { x: 193, y: 767.2 },
                        thickness: 1,
                        color: rgb(0, 0, 0),
                        opacity: 1
                    })
                } else if (fixtures[i][9][1] == "M") {
                    await AVSLfirstPage.drawLine({
                        start: { x: 108.5, y: 767.2 },
                        end: { x: 125.3, y: 784 },
                        thickness: 1,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    await AVSLfirstPage.drawLine({
                        start: { x: 108.5, y: 784 },
                        end: { x: 125.3, y: 767.2 },
                        thickness: 1,
                        color: rgb(0, 0, 0),
                        opacity: 1
                    })
                } 


                //var time = fixtures[i][13].toString() + ":" + fixtures[i][14].toString()
                var hh = fixtures[i][13].toString()[0] + "  " + fixtures[i][13].toString()[1]
                var mm = fixtures[i][14].toString()[0] + "  " + fixtures[i][14].toString()[1]
                // Time (hh:mm)
                await AVSLfirstPage.drawText(hh, {
                    x: 602,
                    y: 809,
                    size: 15,
                    font: AVSLhelveticaBold
                })

                await AVSLfirstPage.drawText(mm, {
                    x: 635,
                    y: 809,
                    size: 15,
                    font: AVSLhelveticaBold
                })
                
                // Team Names
                await AVSLfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((461 - measureText(fixtures[i][6], 10)).toString()),
                    y: 777,
                    size: 10,
                    font: AVSLhelveticaBold
                })
                await AVSLfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((618 - measureText(fixtures[i][7], 10)).toString()),
                    y: 777,
                    size: 10,
                    font: AVSLhelveticaBold
                })

                // Venue
                await AVSLfirstPage.drawText(fixtures[i][3], {
                    x: 65,
                    y: 793,
                    size: 14,
                    font: AVSLhelveticaBold
                })
                
                var ddmmyy = fixtures[i][10].toString()[0] + "  " + fixtures[i][10].toString()[1] + "  " + fixtures[i][11].toString()[0] + "  " + fixtures[i][11].toString()[1] + "  " + fixtures[i][12].slice(2,4).toString()[0] + "  " + fixtures[i][12].slice(2,4).toString()[1]

                await AVSLfirstPage.drawText(ddmmyy, {
                    x: 450,
                    y: 809,
                    size: 15,
                    font: AVSLhelveticaBold
                })

                // Team A List
                if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                    for (var k = 0; k < Math.min(fixtures[i][17].length, 12); k++) {
                        let name_formatted = fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase()
                        if (measureText(name_formatted, 6) >= 49) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSLfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 6,
                                font: AVSLhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 43) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSLfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 7,
                                font: AVSLhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 32) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSLfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 8,
                                font: AVSLhelveticaFont
                            })
                        } else {
                            await AVSLfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 10,
                                font: AVSLhelveticaFont
                            })
                        }
                        // draw number
                        let player_number = fixtures[i][17][k][1]
                        if (player_number.length == 1) {
                            player_number = " " + player_number
                        }
                        await AVSLfirstPage.drawText(player_number, {
                            x: 957,
                            y: 368-((14*k)),
                            size: 10,
                            font: AVSLhelveticaFont
                        })
                    }

                }

                // Team B List
                if (fixtures[i][18].length >= 1 && fixtures[i][18][0] != '' && fixtures[i][18][0][0] != '') {
                    for (var k = 0; k < Math.min(fixtures[i][18].length, 12); k++) {
                        let name_formatted = fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase()
                        if (measureText(name_formatted, 6) >= 49) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSLfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 6,
                                font: AVSLhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 43) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSLfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 7,
                                font: AVSLhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 32) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSLfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 8,
                                font: AVSLhelveticaFont
                            })
                        } else {
                            await AVSLfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 10,
                                font: AVSLhelveticaFont
                            })
                        }
                        
                        // draw number
                        let player_number = fixtures[i][18][k][1]
                        if (player_number.length == 1) {
                            player_number = " " + player_number
                        }
                        await AVSLfirstPage.drawText(player_number, {
                            x: 1079,
                            y: 368-((14*k)),
                            size: 10,
                            font: AVSLhelveticaFont
                        })
                    }
                }

                // Team A Coaches
                for (var k = 0; k < Math.min(fixtures[i][20].length, 5); k++) {
                    let name_formatted = fixtures[i][20][k][0][0].toUpperCase() + " " + fixtures[i][20][k][0][1].toUpperCase()
                    if (measureText(name_formatted, 6) >= 49) {
                        await AVSLfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 6,
                            font: AVSLhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 43) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSLfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 7,
                            font: AVSLhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 32) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSLfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 8,
                            font: AVSLhelveticaFont
                        })
                    } else {
                        await AVSLfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 10,
                            font: AVSLhelveticaFont
                        })
                    }
                    // draw number
                    let player_number = fixtures[i][20][k][1]
                    let player_extra = ""
                    if (player_number.length == 1) {
                        player_number = " " + player_number
                    }
                    if (player_number == "HC"){player_number = ""}
                    if (player_number[0] == "M") {
                        player_extra = player_number.slice(1)
                        player_number = " M"
                    } else if (player_number[0] == "T" && player_number[1] != "S") {
                        player_extra = player_number.slice(1)
                        player_number = " T"
                    } 
                    if (player_number.length > 2) {
                        player_extra = player_number.slice(2)
                        player_number = player_number.slice(0,2)
                    }
                    await AVSLfirstPage.drawText(player_number, {
                        x: 956.5,
                        y: 142-((14*k)),
                        size: 8,
                        font: AVSLhelveticaFont
                    })
                    await AVSLfirstPage.drawText(player_extra, {
                        x: 966.5,
                        y: 148-((14*k)),
                        size: 5,
                        font: AVSLhelveticaFont
                    })
                    console.log(player_extra)

                }

                // Team B Coaches
                for (var k = 0; k < Math.min(fixtures[i][21].length, 5); k++) {
                    let name_formatted = fixtures[i][21][k][0][0].toUpperCase() + " " + fixtures[i][21][k][0][1].toUpperCase()
                    if (measureText(name_formatted, 6) >= 49) {
                        await AVSLfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 6,
                            font: AVSLhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 43) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSLfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 7,
                            font: AVSLhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 32) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSLfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 8,
                            font: AVSLhelveticaFont
                        })
                    } else {
                        await AVSLfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 10,
                            font: AVSLhelveticaFont
                        })
                    }
                    // draw number
                    let player_number = fixtures[i][21][k][1]
                    let player_extra = ""
                    if (player_number.length == 1) {
                        player_number = " " + player_number
                    }
                    if (player_number == "HC"){player_number = ""}
                    if (player_number[0] == "M") {
                        player_extra = player_number.slice(1)
                        player_number = " M"
                    } else if (player_number[0] == "T" && player_number[1] != "S") {
                        player_extra = player_number.slice(1)
                        player_number = " T"
                    } 
                    if (player_number.length > 2) {
                        player_extra = player_number.slice(2)
                        player_number = player_number.slice(0,2)
                    }
                    await AVSLfirstPage.drawText(player_number, {
                        x: 1078.5,
                        y: 142-((14*k)),
                        size: 8,
                        font: AVSLhelveticaFont
                    })
                    await AVSLfirstPage.drawText(player_extra, {
                        x: 1088.5,
                        y: 148-((14*k)),
                        size: 5,
                        font: AVSLhelveticaFont
                    })
                    console.log(player_extra)
                }


                var saved = await AVSLpdfDoc.saveAsBase64();
            }
            
            
        } else if (scoresheet_type == "avsl_finals"){
            // City
                console.log(fixtures[i][4])
                console.log(__CONFIG__.venues[fixtures[i][4]])
                let city = ''
                try {
                    city = __CONFIG__.venues[fixtures[i][4]].city
                } catch (error) {
                    city = ''
                }
                
                await AVSL_finalfirstPage.drawText(city, {
                    x: 65,
                    y: 809,
                    size: 14,
                    font: AVSL_finalhelveticaBold
                })
                // Team Tricodes
                let team_a_tri = AVSL_TRICODE[fixtures[i][6]]
                let team_b_tri = AVSL_TRICODE[fixtures[i][7]]
                
                if(typeof team_a_tri == 'undefined'){team_a_tri = ''}
                if(typeof team_b_tri == 'undefined'){team_b_tri = ''}

                await AVSL_finalfirstPage.drawText(team_a_tri, {
                    x: 1000,
                    y: 399,
                    size: 14,
                    font: AVSL_finalhelveticaBold
                })

                await AVSL_finalfirstPage.drawText(team_b_tri, {
                    x: 1102,
                    y: 399,
                    size: 14,
                    font: AVSL_finalhelveticaBold
                })
                
                // Pool
                let pool = "Pool"
                let temp_date = fixtures[i][12].toString()+"-"+fixtures[i][11].toString()+"-"+fixtures[i][10].toString()
                if (AVSL_FINAL_DATES.includes(temp_date)) {
                    pool = "Final"
                } else if (AVSL_SEMI_DATES.includes(temp_date)) {
                    pool = "Qual."
                }
                
                await AVSL_finalfirstPage.drawText(pool, {
                    x: 281,
                    y: 770.5,
                    size: 13,
                    font: AVSL_finalhelveticaBold
                })

                // Gender
                if (fixtures[i][9][1] == "W") {
                    await AVSL_finalfirstPage.drawLine({
                        start: { x: 176, y: 767.2 },
                        end: { x: 193, y: 784 },
                        thickness: 1,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    await AVSL_finalfirstPage.drawLine({
                        start: { x: 176, y: 784 },
                        end: { x: 193, y: 767.2 },
                        thickness: 1,
                        color: rgb(0, 0, 0),
                        opacity: 1
                    })
                } else if (fixtures[i][9][1] == "M") {
                    await AVSL_finalfirstPage.drawLine({
                        start: { x: 108.5, y: 767.2 },
                        end: { x: 125.3, y: 784 },
                        thickness: 1,
                        color: rgb(0,0,0),
                        opacity: 1
                    })
                    await AVSL_finalfirstPage.drawLine({
                        start: { x: 108.5, y: 784 },
                        end: { x: 125.3, y: 767.2 },
                        thickness: 1,
                        color: rgb(0, 0, 0),
                        opacity: 1
                    })
                } 


                //var time = fixtures[i][13].toString() + ":" + fixtures[i][14].toString()
                var hh = fixtures[i][13].toString()[0] + "  " + fixtures[i][13].toString()[1]
                var mm = fixtures[i][14].toString()[0] + "  " + fixtures[i][14].toString()[1]
                // Time (hh:mm)
                await AVSL_finalfirstPage.drawText(hh, {
                    x: 602,
                    y: 809,
                    size: 15,
                    font: AVSL_finalhelveticaBold
                })

                await AVSL_finalfirstPage.drawText(mm, {
                    x: 635,
                    y: 809,
                    size: 15,
                    font: AVSL_finalhelveticaBold
                })
                
                // Team Names
                await AVSL_finalfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((461 - measureText(fixtures[i][6], 10)).toString()),
                    y: 777,
                    size: 10,
                    font: AVSL_finalhelveticaBold
                })
                await AVSL_finalfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((618 - measureText(fixtures[i][7], 10)).toString()),
                    y: 777,
                    size: 10,
                    font: AVSL_finalhelveticaBold
                })

                // Venue
                await AVSL_finalfirstPage.drawText(fixtures[i][3], {
                    x: 65,
                    y: 793,
                    size: 14,
                    font: AVSL_finalhelveticaBold
                })
                
                var ddmmyy = fixtures[i][10].toString()[0] + "  " + fixtures[i][10].toString()[1] + "  " + fixtures[i][11].toString()[0] + "  " + fixtures[i][11].toString()[1] + "  " + fixtures[i][12].slice(2,4).toString()[0] + "  " + fixtures[i][12].slice(2,4).toString()[1]

                await AVSL_finalfirstPage.drawText(ddmmyy, {
                    x: 450,
                    y: 809,
                    size: 15,
                    font: AVSL_finalhelveticaBold
                })

                // Team A List
                console.log(fixtures[i][17])
                console.log(fixtures[i][17][0])
                console.log(fixtures[i][17][0][0])
                if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                    for (var k = 0; k < Math.min(fixtures[i][17].length, 12); k++) {
                        let name_formatted = fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase()
                        if (measureText(name_formatted, 6) >= 49) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 6,
                                font: AVSL_finalhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 43) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 7,
                                font: AVSL_finalhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 32) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 8,
                                font: AVSL_finalhelveticaFont
                            })
                        } else {
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 972,
                                y: 368-((14*k)),
                                size: 10,
                                font: AVSL_finalhelveticaFont
                            })
                        }
                        // draw number
                        let player_number = fixtures[i][17][k][1]
                        if (player_number.length == 1) {
                            player_number = " " + player_number
                        }
                        await AVSL_finalfirstPage.drawText(player_number, {
                            x: 957,
                            y: 368-((14*k)),
                            size: 10,
                            font: AVSL_finalhelveticaFont
                        })
                    }

                }

                // Team B List
                if (fixtures[i][18].length >= 1 && fixtures[i][18][0] != '' && fixtures[i][18][0][0] != '') {
                    for (var k = 0; k < Math.min(fixtures[i][18].length, 12); k++) {
                        let name_formatted = fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase()
                        if (measureText(name_formatted, 6) >= 49) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 6,
                                font: AVSL_finalhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 43) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 7,
                                font: AVSL_finalhelveticaFont
                            })
                        } else if (measureText(name_formatted, 6) >= 32) {
                            console.log(name_formatted)
                            console.log(measureText(name_formatted, 6))
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 8,
                                font: AVSL_finalhelveticaFont
                            })
                        } else {
                            await AVSL_finalfirstPage.drawText(name_formatted, {
                                x: 1094,
                                y: 368-((14*k)),
                                size: 10,
                                font: AVSL_finalhelveticaFont
                            })
                        }
                        
                        // draw number
                        let player_number = fixtures[i][18][k][1]
                        if (player_number.length == 1) {
                            player_number = " " + player_number
                        }
                        await AVSL_finalfirstPage.drawText(player_number, {
                            x: 1079,
                            y: 368-((14*k)),
                            size: 10,
                            font: AVSL_finalhelveticaFont
                        })
                    }
                }

                // Team A Coaches
                for (var k = 0; k < Math.min(fixtures[i][20].length, 5); k++) {
                    let name_formatted = fixtures[i][20][k][0][0].toUpperCase() + " " + fixtures[i][20][k][0][1].toUpperCase()
                    if (measureText(name_formatted, 6) >= 49) {
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 6,
                            font: AVSL_finalhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 43) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 7,
                            font: AVSL_finalhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 32) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 8,
                            font: AVSL_finalhelveticaFont
                        })
                    } else {
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 972,
                            y: 142-((14*k)),
                            size: 10,
                            font: AVSL_finalhelveticaFont
                        })
                    }
                    // draw number
                    let player_number = fixtures[i][20][k][1]
                    let player_extra = ""
                    if (player_number.length == 1) {
                        player_number = " " + player_number
                    }
                    if (player_number == "HC"){player_number = ""}
                    if (player_number[0] == "M") {
                        player_extra = player_number.slice(1)
                        player_number = " M"
                    } else if (player_number[0] == "T" && player_number[1] != "S") {
                        player_extra = player_number.slice(1)
                        player_number = " T"
                    } 
                    if (player_number.length > 2) {
                        player_extra = player_number.slice(2)
                        player_number = player_number.slice(0,2)
                    }
                    await AVSL_finalfirstPage.drawText(player_number, {
                        x: 956.5,
                        y: 142-((14*k)),
                        size: 8,
                        font: AVSL_finalhelveticaFont
                    })
                    await AVSL_finalfirstPage.drawText(player_extra, {
                        x: 966.5,
                        y: 148-((14*k)),
                        size: 5,
                        font: AVSL_finalhelveticaFont
                    })
                    console.log(player_extra)

                }

                // Team B Coaches
                for (var k = 0; k < Math.min(fixtures[i][21].length, 5); k++) {
                    let name_formatted = fixtures[i][21][k][0][0].toUpperCase() + " " + fixtures[i][21][k][0][1].toUpperCase()
                    if (measureText(name_formatted, 6) >= 49) {
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 6,
                            font: AVSL_finalhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 43) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 7,
                            font: AVSL_finalhelveticaFont
                        })
                    } else if (measureText(name_formatted, 6) >= 32) {
                        console.log(name_formatted)
                        console.log(measureText(name_formatted, 6))
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 8,
                            font: AVSL_finalhelveticaFont
                        })
                    } else {
                        await AVSL_finalfirstPage.drawText(name_formatted, {
                            x: 1094,
                            y: 142-((14*k)),
                            size: 10,
                            font: AVSL_finalhelveticaFont
                        })
                    }
                    // draw number
                    let player_number = fixtures[i][21][k][1]
                    let player_extra = ""
                    if (player_number.length == 1) {
                        player_number = " " + player_number
                    }
                    if (player_number == "HC"){player_number = ""}
                    if (player_number[0] == "M") {
                        player_extra = player_number.slice(1)
                        player_number = " M"
                    } else if (player_number[0] == "T" && player_number[1] != "S") {
                        player_extra = player_number.slice(1)
                        player_number = " T"
                    } 
                    if (player_number.length > 2) {
                        player_extra = player_number.slice(2)
                        player_number = player_number.slice(0,2)
                    }
                    await AVSL_finalfirstPage.drawText(player_number, {
                        x: 1078.5,
                        y: 142-((14*k)),
                        size: 8,
                        font: AVSL_finalhelveticaFont
                    })
                    await AVSL_finalfirstPage.drawText(player_extra, {
                        x: 1088.5,
                        y: 148-((14*k)),
                        size: 5,
                        font: AVSL_finalhelveticaFont
                    })
                    console.log(player_extra)
                }


                var saved = await AVSL_finalpdfDoc.saveAsBase64();
        } else if (scoresheet_type == "EVA"){
            console.log(fixtures[i])
            console.log(fixtures[i][17])
            if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                // Team A Players
                if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                    for (var k = 0; k < fixtures[i][17].length; k++) {
                        // first name, first column
                        //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                        if (measureText(fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase(), 8) >= 50) {
                            await EVAfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase(), {
                                x: 452,
                                y: 400-(19.5*k),
                                size: 8,
                                font: EVAhelveticaFont
                            })
                        } else {
                            await EVAfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase(), {
                                x: 452,
                                y: 400-(19.5*k),
                                size: 8,
                                font: EVAhelveticaFont
                            })
                        }
                    }
                }
            }

            // Team B Players
            if (fixtures[i][18].length >= 1 && fixtures[i][18][0] != '' && fixtures[i][18][0][0] != '') {
                for (var k = 0; k < fixtures[i][18].length; k++) {
                    // first name, first column
                    //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                    if (measureText(fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase(), 8) >= 50) {
                        await EVAfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase(), {
                            x: 650,
                            y: 402-(19.5*k),
                            size: 8,
                            font: EVAhelveticaFont
                        })
                    } else {
                        await EVAfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase(), {
                            x: 650,
                            y: 402-(19.5*k),
                            size: 8,
                            font: EVAhelveticaFont
                        })
                    }
                }
            }
            
            // Court number
            await EVAfirstPage.drawText(fixtures[i][5], {
                x: 630,
                y: 504,
                size: 14,
                font: EVAhelveticaFont
            })

            try {
                // Time (hh:mm)
                let time = parseInt(fixtures[i][13]).toString() + ":" + fixtures[i][14];
                if (parseInt(fixtures[i][13]).toString().length == 1) {
                    time = " " + time;
                }
                await EVAfirstPage.drawText(time, {
                    x: 532,
                    y: 504,
                    size: 14,
                    font: EVAhelveticaFont
                })
            } catch (e) {
                console.log(e)
            }

            try {
                // Date (dd/mm/yyyy)
                let dt = parseInt(fixtures[i][10]).toString().padStart(2,"0")  + "/" + parseInt(fixtures[i][11]).toString().padStart(2,"0")  + "/" + parseInt(fixtures[i][12]).toString()
                await EVAfirstPage.drawText(dt, {
                    x: 710,
                    y: 504,
                    size: 14,
                    font: EVAhelveticaFont
                })
            } catch (e) {
                console.log(e)
            }
            
            // Division (Long)
            
            await EVAfirstPage.drawText(fixtures[i][9][0], {
                x: 452,
                y: 504,
                size: 14,
                font: EVAhelveticaFont
            })


            // Team Names
            if (fixtures[i][6].length > 25 || fixtures[i][7].length > 25) {
                // Reduce text size if too long.
                await EVAfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((520 - measureText(fixtures[i][6], 10)).toString()),
                    y: 440,
                    size: 10,
                    font: EVAhelveticaFont
                })
                await EVAfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((721 - measureText(fixtures[i][7], 10)).toString()),
                    y: 440,
                    size: 10,
                    font: EVAhelveticaFont
                })
            } else {
                EVAfirstPage.TextAlignment = 1;
                await EVAfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((520 - measureText(fixtures[i][6], 14)).toString()),
                    y: 440,
                    size: 14,
                    font: EVAhelveticaFont
                })
                await EVAfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((721 - measureText(fixtures[i][7], 14)).toString()),
                    y: 440,
                    size: 14,
                    font: EVAhelveticaFont
                })
            }
            
            
            
            var saved = await EVApdfDoc.saveAsBase64();

        } else if (scoresheet_type == "psa_S"){
            PSASfirstPage.TextAlignment = 1;
            await PSASfirstPage.drawText(fixtures[i][6].toString(), {
                x: parseInt((165 - measureText(fixtures[i][6], 14)).toString()),
                y: 398,
                size: 14,
                font: PSAShelveticaFont
            })
            await PSASfirstPage.drawText(fixtures[i][7].toString(), {
                x: parseInt((610 - measureText(fixtures[i][7], 14)).toString()),
                y: 398,
                size: 14,
                font: PSAShelveticaFont
            })
            
            // Court number
            await PSASfirstPage.drawText(fixtures[i][5], {
                x: 532,
                y: 433,
                size: 14,
                font: PSAShelveticaFont
            })

            // Venue
            await PSASfirstPage.drawText(fixtures[i][0], {
                x: 50,
                y: 433,
                size: 13,
                font: PSAShelveticaFont
            })

            try {
                // Time (hh:mm)
                let time = parseInt(fixtures[i][13]).toString() + ":" + fixtures[i][14];
                if (parseInt(fixtures[i][13]).toString().length == 1) {
                    time = " " + time;
                }
                await PSASfirstPage.drawText(time, {
                    x: 360,
                    y: 433,
                    size: 14,
                    font: PSAShelveticaFont
                })
            } catch (e) {
                console.log(e)
            }

            try {
                // Date (dd/mm/yyyy)
                let dt = parseInt(fixtures[i][10]).toString().padStart(2,"0") + "/" + parseInt(fixtures[i][11]).toString().padStart(2,"0") + "/" + parseInt(fixtures[i][12]).toString()
                await PSASfirstPage.drawText(dt, {
                    x: 200,
                    y: 433,
                    size: 14,
                    font: PSAShelveticaFont
                })
            } catch (e) {
                console.log(e)
            }
            
            // Division (Long)
            
            await PSASfirstPage.drawText(fixtures[i][9][0], {
                x: 700,
                y: 433,
                size: 14,
                font: PSAShelveticaFont
            })

            var saved = await PSASpdfDoc.saveAsBase64();
        } else if (scoresheet_type == "psa_M"){
            PSAMfirstPage.TextAlignment = 1;
            await PSAMfirstPage.drawText(fixtures[i][6].toString(), {
                x: parseInt((165 - measureText(fixtures[i][6], 14)).toString()),
                y: 398,
                size: 14,
                font: PSAMhelveticaFont
            })
            await PSAMfirstPage.drawText(fixtures[i][7].toString(), {
                x: parseInt((610 - measureText(fixtures[i][7], 14)).toString()),
                y: 398,
                size: 14,
                font: PSAMhelveticaFont
            })
            
            // Court number
            await PSAMfirstPage.drawText(fixtures[i][5], {
                x: 532,
                y: 433,
                size: 14,
                font: PSAMhelveticaFont
            })

            // Venue
            await PSAMfirstPage.drawText(fixtures[i][0], {
                x: 50,
                y: 433,
                size: 13,
                font: PSAMhelveticaFont
            })

            try {
                // Time (hh:mm)
                let time = parseInt(fixtures[i][13]).toString() + ":" + fixtures[i][14];
                if (parseInt(fixtures[i][13]).toString().length == 1) {
                    time = " " + time;
                }
                await PSAMfirstPage.drawText(time, {
                    x: 360,
                    y: 433,
                    size: 14,
                    font: PSAMhelveticaFont
                })
            } catch (e) {
                console.log(e)
            }

            try {
                // Date (dd/mm/yyyy)
                let dt = parseInt(fixtures[i][10]).toString().padStart(2,"0") + "/" + parseInt(fixtures[i][11]).toString().padStart(2,"0") + "/" + parseInt(fixtures[i][12]).toString()
                await PSAMfirstPage.drawText(dt, {
                    x: 200,
                    y: 433,
                    size: 14,
                    font: PSAMhelveticaFont
                })
            } catch (e) {
                console.log(e)
            }
            
            // Division (Long)
            
            await PSAMfirstPage.drawText(fixtures[i][9][0], {
                x: 700,
                y: 433,
                size: 14,
                font: PSAMhelveticaFont
            })
            var saved = await PSAMpdfDoc.saveAsBase64();
        } else if (scoresheet_type == "vwa_hs_beach"){
            // Team A Players
                if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                    for (var k = 0; k < fixtures[i][18].length; k++) {
                        // first name, first column
                        //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                        if (measureText(fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase(), 8) >= 50) {
                            await vwaHSbfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase(), {
                                x: 100,
                                y: 372-(15*k),
                                size: 8,
                                font: EVAhelveticaFont
                            })
                        } else {
                            await vwaHSbfirstPage.drawText(fixtures[i][17][k][0][0].toUpperCase() + " " + fixtures[i][17][k][0][1].toUpperCase(), {
                                x: 100,
                                y: 372-(15*k),
                                size: 8,
                                font: EVAhelveticaFont
                            })
                        }
                    }
                }

            // Team B Players
            if (fixtures[i][18].length >= 1 && fixtures[i][18][0] != '' && fixtures[i][18][0][0] != '') {
                for (var k = 0; k < fixtures[i][18].length; k++) {
                    // first name, first column
                    //console.log(fixtures[i][18][k][0].toUpperCase() + ": " + measureText(fixtures[i][18][k][0].toUpperCase(),6))
                    if (measureText(fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase(), 8) >= 50) {
                        await vwaHSbfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase(), {
                            x: 500,
                            y: 372-(15*k),
                            size: 8,
                            font: EVAhelveticaFont
                        })
                    } else {
                        await vwaHSbfirstPage.drawText(fixtures[i][18][k][0][0].toUpperCase() + " " + fixtures[i][18][k][0][1].toUpperCase(), {
                            x: 500,
                            y: 372-(15*k),
                            size: 8,
                            font: EVAhelveticaFont
                        })
                    }
                }
            }
            

            // Venue (full)
            /*
            await vwaHSbfirstPage.drawText(fixtures[i][4], {
                x: parseInt((190 - measureText(fixtures[i][4], 13)).toString()),
                y: 504,
                size: 13,
                font: vwaHSbhelveticaFont
            })
                */

            // Court number
            await vwaHSbfirstPage.drawText(fixtures[i][5], {
                x: parseInt((442 - measureText(fixtures[i][5], 13)).toString()),
                y: 452,
                size: 13,
                font: vwaHSbhelveticaFont
            })

            try {
                // Time (hh:mm)
                let time = parseInt(fixtures[i][13]).toString() + ":" + fixtures[i][14];
                if (parseInt(fixtures[i][13]).toString().length == 1) {
                    time = " " + time;
                }
                await vwaHSbfirstPage.drawText(time, {
                    x: 310,
                    y: 452,
                    size: 13,
                    font: vwaHSbhelveticaFont
                })
            } catch (e) {
                console.log(e)
            }

            try {
                // Date (dd/mm/yyyy)
                let dt = parseInt(fixtures[i][10]).toString() + "/" + parseInt(fixtures[i][11]).toString() + "/" + parseInt(fixtures[i][12]).toString()
                await vwaHSbfirstPage.drawText(dt, {
                    x: 190,
                    y: 452,
                    size: 13,
                    font: vwaHSbhelveticaFont
                })
            } catch (e) {
                console.log(e)
            }
            
            // Division (Long)
            
            await vwaHSbfirstPage.drawText(fixtures[i][9][0], {
                x: parseInt((550 - measureText(fixtures[i][9][0], 13)).toString()),
                y: 452,
                size: 13,
                font: vwaHSbhelveticaFont
            })

            // Division (Short)
            /*
            await vwaHSbfirstPage.drawText(fixtures[i][9][1], {
                x: parseInt((721 - measureText(fixtures[i][9][1], 13)).toString()),
                y: 504,
                size: 13,
                font: vwaHSbhelveticaFont
            })
            */

            // Team Names
            if (fixtures[i][6].length > 25 || fixtures[i][7].length > 25) {
                // Reduce text size if too long.
                await vwaHSbfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((250 - measureText(fixtures[i][6], 10)).toString()),
                    y: 425,
                    size: 10,
                    font: vwaHSbhelveticaFont
                })
                await vwaHSbfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((660 - measureText(fixtures[i][7], 10)).toString()),
                    y: 425,
                    size: 10,
                    font: vwaHSbhelveticaFont
                })
            } else {
                vwaHSbpdfDoc.TextAlignment = 1;
                await vwaHSbfirstPage.drawText(fixtures[i][6], {
                    x: parseInt((250 - measureText(fixtures[i][6], 14)).toString()),
                    y: 425,
                    size: 14,
                    font: vwaHSbhelveticaFont
                })
                await vwaHSbfirstPage.drawText(fixtures[i][7], {
                    x: parseInt((660 - measureText(fixtures[i][7], 14)).toString()),
                    y: 425,
                    size: 14,
                    font: vwaHSbhelveticaFont
                })
            }
            var saved = await vwaHSbpdfDoc.saveAsBase64();
        } else if (scoresheet_type == "VA_T" || scoresheet_type == "VA_5" || scoresheet_type == "VA_3") {
            let currFirstPage = vaTimedfirstPage
            let currDoc = vaTimedpdfDoc

            if (scoresheet_type == "VA_T") {
                currFirstPage = vaTimedfirstPage
                currDoc = vaTimedpdfDoc
            } else if (scoresheet_type == "VA_3") {
                currFirstPage = vaBo3firstPage
                currDoc = vaBo3pdfDoc
            } else if (scoresheet_type == "VA_5") {
                currFirstPage = vaBo5firstPage
                currDoc = vaBo5pdfDoc
            }

            
            // Do something here to convert names to initial . surname



            if (fixtures[i][6].length > 22 || fixtures[i][7].length > 22) {
                // Team A Team List
                await currFirstPage.drawText(fixtures[i][6], {
                    x: 285,
                    y: 744.5, //739
                    size: 9,
                    font: newWAVLhelveticaFont
                })

                // Team B Team List
                await currFirstPage.drawText(fixtures[i][7], {
                    x: 450,
                    y: 744.5,
                    size: 9,
                    font: newWAVLhelveticaFont
                })

            } else {
                // Team A Team List
                await currFirstPage.drawText(fixtures[i][6], {
                    x: 285,
                    y: 743.5, //739
                    size: 12,
                    font: newWAVLhelveticaFont
                })

                // Team B Team List
                await currFirstPage.drawText(fixtures[i][7], {
                    x: 450,
                    y: 743.5,
                    size: 12,
                    font: newWAVLhelveticaFont
                })
            }

            // Team A Players
            /*console.log(fixtures[i][17][0])
            console.log(fixtures[i][17].length)
            console.log(fixtures[i][17][0])
            console.log(fixtures[i][17][0]!=['',''])
            console.log(fixtures[i][17][0][0]!='')
            console.log("abc" != ['',''])
            */
            if (fixtures[i][17].length >= 1 && fixtures[i][17][0] != '' && fixtures[i][17][0][0] != '') {
                for (var k = 0; k < fixtures[i][17].length; k++) {
                    // first name, first column
                    //console.log("---")
                    //console.log(fixtures[i][17][k][0].toUpperCase() + ": " + measureText(fixtures[i][17][k][0].toUpperCase(),6))
                    //console.log(k)
                    //console.log(i)
                    //console.log(fixtures[i])
                    //console.log(fixtures[i][17])
                    //console.log(fixtures[i][17][k])
                    //console.log(fixtures[i][17][k][0])
                    //console.log(fixtures[i][17][k][0][0])

                    let draw_player_name = fixtures[i][17][k][0][0][0].toUpperCase() + ". " + fixtures[i][17][k][0][1].toUpperCase()

                    await currFirstPage.drawText(draw_player_name, {
                        x: 277.25,
                        y: 711.5-((15.75*k)),
                        size: 11,
                        font: newWAVLhelveticaFont
                    })
                    
                    // draw number
                    let player_number = fixtures[i][17][k][1]
                    if (player_number.length == 1) {
                        player_number = " " + player_number
                    }
                    await currFirstPage.drawText(player_number, {
                        x: 260,
                        y: 711.5-((15.75*k)),
                        size: 11,
                        font: newWAVLhelveticaFont
                    })
                }
            }

            // Team B Players
            if (fixtures[i][18].length >= 1  && fixtures[i][18][0] != "" && fixtures[i][18][0][0] != "") {
                for (var k = 0; k < fixtures[i][18].length; k++) {
                    
                    let draw_player_name = fixtures[i][18][k][0][0][0].toUpperCase() + ". " + fixtures[i][18][k][0][1].toUpperCase()

                    await currFirstPage.drawText(draw_player_name, {
                        x: 439.5,
                        y: 711.5-((15.75*k)),
                        size: 11,
                        font: newWAVLhelveticaFont
                    })
                    
                    // draw number
                    let player_number = fixtures[i][18][k][1]
                    if (player_number.length == 1) {
                        player_number = " " + player_number
                    }
                    await currFirstPage.drawText(player_number, {
                        x: 423,
                        y: 711.5-((15.75*k)),
                        size: 11,
                        font: newWAVLhelveticaFont
                    })
                }
            }

            // Venue 0
            await currFirstPage.drawText(__venues__[fixtures[i][0]], {
                x: parseInt((275 - measureText(__venues__[fixtures[i][0]], 10)).toString()),
                y: 767.5,
                size: 10,
                font: newWAVLhelveticaFont
            })

            try {
                // Court Number
                await currFirstPage.drawText(fixtures[i][5], {
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
                    await currFirstPage.drawText(time, {
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

            await currFirstPage.drawText(ddmmyy, {
                x: parseInt((547 - measureBold(ddmmyy, 13)).toString()),
                y: 767.5,
                size: 13,
                font: newWAVLhelveticaBold
            })

            // Division (short)
            await currFirstPage.drawText(fixtures[i][9][1], {
                x: parseInt((529 - measureBold(fixtures[i][9][1], 13)).toString()),
                y: 784.5,
                size: 13,
                font: newWAVLhelveticaBold
            })

            // Duty team
            await currFirstPage.drawText(fixtures[i][8], {
                x: parseInt((332 - measureText(fixtures[i][8], 14)).toString()),
                y: 784.5,
                size: 14,
                font: newWAVLhelveticaFont
            })

            // Club President

            for (var k = 0; k < Math.min(fixtures[i][20].length, 5); k++) {
                let name_formatted = ""
                try {
                    name_formatted = fixtures[i][20][k][0][0][0].toUpperCase() + ". " + fixtures[i][20][k][0][1].toUpperCase()
                } catch (error) {
                    name_formatted = ""
                }
                await currFirstPage.drawText(name_formatted, {
                    x: 260,
                    y: 524-((15.75*k)),
                    size: 11,
                    font: newWAVLhelveticaFont
                })
            }

            for (var k = 0; k < Math.min(fixtures[i][21].length, 5); k++) {
                let name_formatted = ""
                try {
                    name_formatted = fixtures[i][21][k][0][0][0].toUpperCase() + ". " + fixtures[i][21][k][0][1].toUpperCase()
                } catch (error) {
                    name_formatted = ""
                }
                await currFirstPage.drawText(name_formatted, {
                    x: 455,
                    y: 524-((15.75*k)),
                    size: 11,
                    font: newWAVLhelveticaFont
                })
            }

            // Team Names
            if (fixtures[i][6].length > 22 || fixtures[i][7].length > 22) {
                // Reduce text size if too long.
                await currFirstPage.drawText(fixtures[i][6], {
                    x: parseInt((262 - measureText(fixtures[i][6], 10)).toString()),
                    y: 804.5,
                    size: 10,
                    font: newWAVLhelveticaBold
                })
                await currFirstPage.drawText(fixtures[i][7], {
                    x: parseInt((480 - measureText(fixtures[i][7], 10)).toString()),
                    y: 804.5,
                    size: 10,
                    font: newWAVLhelveticaBold
                })
            } else {
                newWAVLpdfDoc.TextAlignment = 1;
                await currFirstPage.drawText(fixtures[i][6], {
                    x: parseInt((262 - measureText(fixtures[i][6], 14)).toString()),
                    y: 804.5,
                    size: 14,
                    font: newWAVLhelveticaBold
                })
                await currFirstPage.drawText(fixtures[i][7], {
                    x: parseInt((480 - measureText(fixtures[i][7], 14)).toString()),
                    y: 804.5,
                    size: 14,
                    font: newWAVLhelveticaBold
                })
            }
        
            var saved = await currDoc.saveAsBase64();



        
        } else {
            window.alert("Invalid Scoresheet Type - " + scoresheet_type)
            console.log("** ERROR **")
            console.log(fixtures[i])
            //var saved = await 
            if (scoresheet_type == "psa_S"){var saved = await PSASpdfDoc.saveAsBase64();}
            else if (scoresheet_type == "psa_M"){var saved = await PSAMpdfDoc.saveAsBase64();}
            //else if (scoresheet_type == "VA_T"){}
            //else if (scoresheet_type == "VA_5"){}
            //else if (scoresheet_type == "VA_3"){}
        }
        

        await saved;
        await curr_merged_pdf;

        var final = false
        var curr_venue = fixtures[i][0]
        var next_venue = fixtures[i][0]

        if (fixtures[i][9][2] == '2025 WAVjL Season') {
            curr_venue = "Junior League"
        }

        if (fixtures[i][19] == "VA_T" || fixtures[i][19] == "VA_3" || fixtures[i][19] == "VA_5") {
            curr_venue = fixtures[i][0] + "_" + fixtures[i][5]
        }

        if (i == fixtures.length - 1) {
            final = true;
            next_venue = "__Final__";
        } else {
            final = false;
            if (fixtures[i+1][9][2] == '2025 WAVjL Season') {
                next_venue = "Junior League"
            } else {
                if (fixtures[i][19] == "VA_T" || fixtures[i][19] == "VA_3" || fixtures[i][19] == "VA_5") {
                    next_venue = fixtures[i+1][0] + "_" + fixtures[i+1][5]
                } else {
                    next_venue = fixtures[i+1][0]
                }
            }
            
        }

        if (curr_venue != next_venue){
            final = true
        }

        console.log(curr_venue)
        console.log(next_venue)
        console.log(fixtures[i])
        console.log(final)
        console.log(i)
        console.log(fixtures.length)
        //console.log(dates)
        //console.log(saved_doc)
        //merged64 = mergePDFDocuments_v2(saved_doc[0], saved_doc[1], final, dates, curr_venue, fixtures, i)
        merged64 = mergePDFDocuments_v3(await saved, await curr_merged_pdf, final, dates, curr_venue)

        /*
        Promise.all([saved, curr_merged_pdf]).then(saved_doc => {
            console.log("--")
            /*
            if (run == 0) {
                console.log("mergePDFDocuments");
                var mergedPdf = await PDFLib.PDFDocument.create();
                for (var i = 0; i < documents.length; i++) {
                    var docone = await PDFLib.PDFDocument.load(await saved);
                    var copiedPagesone = await mergedPdf.copyPages(docone, docone.getPageIndices());
                    for (var j = 0; j < docone.getPageIndices().length; j++) {
                        mergedPdf.addPage(await copiedPagesone[j]);
                    }
                }
                var mergedPdf = await mergedPdf.save();
            }
            

            //var mergedPdf = await PDFLib.PDFDocument.create();
            var final = false
            var curr_venue = fixtures[i][0]
            var next_venue = fixtures[i][0]

            if (fixtures[i][9][2] == '2025 WAVjL Season') {
                curr_venue = "Junior League"
            }

            if (i == fixtures.length - 1) {
                final = true;
                next_venue = "__Final__";
            } else {
                final = false;
                if (fixtures[i+1][9][2] == '2025 WAVjL Season') {
                    next_venue = "Junior League"
                } else {
                    next_venue = fixtures[i+1][0]
                }
                
            }

            if (curr_venue != next_venue){
                final = true
            }

            console.log(curr_venue)
            console.log(next_venue)
            console.log(fixtures[i])
            console.log(final)
            console.log(i)
            console.log(fixtures.length)
            //console.log(dates)
            //console.log(saved_doc)
            //merged64 = mergePDFDocuments_v2(saved_doc[0], saved_doc[1], final, dates, curr_venue, fixtures, i)
            merged64 = mergePDFDocuments_v3(saved_doc[0], saved_doc[1], final, dates, curr_venue)
        })*/

        //total[i] = saved;
    }

    // If CSV is to be downloaded (it is no longer to be downloaded)
    if (false) {
    //if (document.getElementById("Checkbox99").checked) {
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
        var excel_url = "https://og1764.github.io/static/scoresheets/Ref_Template.xlsx";
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

        /*
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
        }*/
    }

    
    return await [merged64]
    //return await total;
}


/**
 * Merge modified PDF's into one single PDF.
 * @param {*} documents 
 * @returns 
 */
async function mergePDFDocuments(documents) {
    console.log("mergePDFDocuments");
    return await documents[0]
    var mergedPdf = await PDFLib.PDFDocument.load(await documents[0])
    var saved = await mergedPdf.save();
    return await saved;
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



async function mergePDFDocuments_v3(to_append, running_document, final, dates, venue) {
    if (running_document == 0) {
        var docone = await PDFLib.PDFDocument.load(await to_append);
        running_document = await docone.saveAsBase64();
    } else {
        var mergedPdf = await PDFLib.PDFDocument.load(await running_document);
        var docone = await PDFLib.PDFDocument.load(await to_append);
        var copiedPagesone = await mergedPdf.copyPages(docone, docone.getPageIndices());
        for (var j = 0; j < docone.getPageIndices().length; j++) {
            mergedPdf.addPage(await copiedPagesone[j]);
        }
        running_document = await mergedPdf.saveAsBase64();
    }

    if (final) {
        var temp = await PDFLib.PDFDocument.load(await running_document)
        var saved_dl = await temp.save()
        let filename = "Scoresheets " + dates.toString() + " " + venue + ".pdf"
        //let filename = "Scoresheets.pdf"
        download(saved_dl, filename, "application/pdf");
        running_document = 0
    }
    return await running_document;

}



/**
 * Merge modified PDF's into one single PDF.
 * @param {*} documents 
 * @returns 
 */
async function mergePDFDocuments_v2(to_append, main_doc, final, dates, venue, last_appended) {
    console.log("mergePDFDocuments_v2");
    var saved;
    if (main_doc == 0) {
        console.log("main == 0")
        if (final) {
            console.log("main == 0 and final")
            console.log(last_appended)
            var docone = await PDFLib.PDFDocument.load(await to_append);
            var saved_dl = await docone.save()
            let filename = "Scoresheets " + dates.toString() + " " + venue + ".pdf"
            //let filename = "Scoresheets.pdf"
            download(saved_dl, filename, "application/pdf");
            //var mergedPdf_new = await PDFLib.PDFDocument.create();
            //saved = await mergedPdf_new.saveAsBase64();
            saved = 0;
        } else {
            var docone = await PDFLib.PDFDocument.load(await to_append);
            saved = await docone.saveAsBase64();
        }
    } else {
        console.log("main != 0")
        var mergedPdf = await PDFLib.PDFDocument.load(await main_doc);
        var docone = await PDFLib.PDFDocument.load(await to_append);
        var copiedPagesone = await mergedPdf.copyPages(docone, docone.getPageIndices());
        for (var j = 0; j < docone.getPageIndices().length; j++) {
            mergedPdf.addPage(await copiedPagesone[j]);
        }
        saved = await mergedPdf.saveAsBase64();
        if (final){
            console.log("final = true")
            var temp = await PDFLib.PDFDocument.load(await saved)
            var saved_dl = await temp.save()
            let filename = "Scoresheets " + dates.toString() + " " + venue + ".pdf"
            //let filename = "Scoresheets.pdf"
            console.log(last_appended)
            await download(saved_dl, filename, "application/pdf");
            //var mergedPdf_new = await PDFLib.PDFDocument.create();
            //saved = await mergedPdf_new.saveAsBase64();
            saved = 0
        } else {
            //var saved = await mergedPdf.saveAsBase64();
            let do_nothing = 0;
        }
    }
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


function getEventNameFromURL(url, url_type) {
    let all_event_keys = Object.keys(__CONFIG__.events)
    for (let y = 0; y < all_event_keys.length; y++){
        if (url_type == "fixture") {
            if (__CONFIG__.events[all_event_keys[y]].fixture_url == url) {
                return all_event_keys[y]
            }
        } else if (url_type == "player") {
            if (__CONFIG__.events[all_event_keys[y]].players_url == url) {
                return all_event_keys[y]
            }
        }
        
    }
}

/**
 * Parse HTML and return an array of Fixtures
 * @param {*} venues 
 * @param {*} leagues 
 * @param {*} date 
 * @param {*} all_html 
 * @returns Fixture[]
 */
function html_to_fixture(venues, leagues, in_date, all_html_prom) {

    let all_html = [];
    let missed_urls = []
    for (let i = 0; i < all_html_prom.length; i++) {
        if (all_html_prom[i].status == "fulfilled") {
            // Do Nothing For now
            //console.log(all_html[i].value)
            all_html.push(all_html_prom[i].value)
        } else {
            console.log("abcd")
            console.log(all_html_prom[i])
            let faulty_url = all_html_prom[i].reason.response.request.responseURL
            console.log(faulty_url)
            let ev_name = getEventNameFromURL(faulty_url, "fixture")
            window.alert("Unable to retreive fixtures for:\r\n  " + ev_name + "\r\nSkipping this event.")
            missed_urls.push(faulty_url)
        }
    }

    console.log("html_to_fixture");
    let fixtures_list = [];
    let alerted = [];
    let temporary = add_aliases(venues);
    let alias_layer = temporary[1];
    let venue_usage = temporary[0];
    let all_venues = add_aliases(Object.keys(__CONFIG__.venues));
    const NamesArr = leagues.flat();
    console.log(all_html);
    let start_date = in_date[0];
    let end_date = in_date[1];
    for (let x = 0; x < all_html.length; x++) {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(all_html[x].request.responseText, 'text/html');
        console.log(all_html[x])
        let htmlUrl = all_html[x].request.responseURL;
        let event_Name = getEventNameFromURL(htmlUrl, "fixture");
        // ----------------------------------
        
        //let all_tables = document.getElementsByTagName("table")

        // NOTE -- CHANGE document TO htmlDoc

        let all_tables = htmlDoc.getElementsByClassName("division-schedule")
        let numFix = all_tables.length;
        //htmlDoc.getElements

        //console.log(all_tables)
        console.log(numFix)
        let month_lookup = {
            "January":"01",
            "Febuary":"02",
            "March":"03",
            "April":"04",
            "May":"05",
            "June":"06",
            "July":"07",
            "August":"08",
            "September":"09",
            "October":"10",
            "November":"11",
            "December":"12"
        }

        let venue_lookup = {}

        let tmp = htmlDoc.getElementsByClassName("division-schedule-venue")[0]
        let rows = tmp.getElementsByTagName("td")

        for (let i = 0; i < rows.length; i = i + 1) {
            let key = rows[i].innerText.split(" - ")[0].trim()
            let value = rows[i].innerText.split(" - ")[1].trim()
            venue_lookup[key] = value
        }

        for (let i = 0; i < numFix; i = i + 1) {
            let date = all_tables[i].getElementsByTagName("h3")//.textContent
            //console.log(date[0].innerText)
            let actual_date = date[0].innerText
            
            let yyyy = actual_date.slice(-4)
            let dd = actual_date.split(",")[1].slice(-2).replace(" ","0")
            let raw_month = actual_date.split(",")[1].slice(0,-2).trim()
            let month = month_lookup[raw_month]
            //console.log(yyyy)
            //console.log(dd)
            //console.log(month)
            let test_date = yyyy+"-"+month+"-"+dd;
            console.log(test_date)

            if (test_date >= start_date & test_date < end_date) { // if date is correct
                let all_games = all_tables[i].getElementsByClassName("game")
                for (let j = 0; j < all_games.length; j++){
                    let current = all_games[j]
                    let all_curr_game = current.getElementsByTagName("td")
                    let time = all_curr_game[0].innerText.trim()
                    let ven = all_curr_game[1].innerText.trim()
                    let _court = all_curr_game[2].innerText.trim()
                    let div = all_curr_game[3].innerText.split(" (")[0].trim()
                    let full_div = all_curr_game[3].innerText.trim()
                    //let div_pool = all_curr_game[3].innerText.split("(Pool ")[1].trim().slice(0,1).trim()
                    let div_pool = " "
                    try{
                        div_pool = all_curr_game[3].innerText.split("(Pool ")[1].trim().slice(0,1).trim()
                    } catch (e) {
                        div_pool = "Ch" // for Championship
                    }
                    let _team_b = all_curr_game[4].innerText.trim()
                    let _team_a = all_curr_game[5].innerText.trim()
                    let _duty = all_curr_game[6].innerText.trim()
                    let time_hr = time.split(":")[0].trim()
                    let time_min = time.split(":")[1].split(" ")[0].trim()
                    let time_am_pm = time.split(":")[1].split(" ")[1].trim()
                    if (time_am_pm == "PM" & time_hr != "12") {
                        time_hr = parseInt(time_hr) + 12
                        time_hr = time_hr.toString().trim()
                    }
                    
                    if (_duty == "L1 (Championship)" || _duty == "L2 (Championship)" || _duty == "L3 (Championship)" || _duty == "L4 (Championship)" || _duty == "L5 (Championship)" || _duty == "L6 (Championship)") {
                        _duty = "Previous Loser"
                    }

                    if (_duty == "L1 (Consolations)" || _duty == "L2 (Consolations)" || _duty == "L3 (Consolations)" || _duty == "L4 (Consolations)" || _duty == "L5 (Consolations)" || _duty == "L6 (Consolations)") {
                        _duty = "Previous Loser"
                    }
                    
                    console.log(time)
                    console.log(venue_lookup)
                    console.log(ven)
                    console.log(_court)
                    console.log(div)
                    console.log(_team_a)
                    console.log(_team_b)
                    console.log(_duty)
                    console.log(time_hr)
                    console.log(time_min)
                    
                    let _date_dd = dd.padStart(2, "0");
                    let _date_mm = month.padStart(2, "0");
                    let _date_yyyy = yyyy;
                    
                    
                    let _time_hr = " ";
                    let _time_min = " ";
                    
                    try {
                        _time_hr = time_hr.padStart(2, "0");
                        _time_min = time_min.padStart(2, "0");
                    } catch (e) {
                        console.log(e);
                        _time_hr = " ";
                        _time_min = " ";
                    }
                    
                    let zero_venue_split = venue_lookup[ven]
                    if (venue_usage.includes(zero_venue_split)) {
                        console.log(venue_lookup)
                        let venue_realname = alias_layer[zero_venue_split];
                        console.log("*******************")
                        console.log(venue_realname)
                        console.log("*******************")
                        try {
                            console.log(venues)
                            console.log(leagues)
                            console.log(alias_layer)
                            console.log(ven)
                            console.log(zero_venue_split)
                            console.log(venue_realname)
                            const _venue_0 = __CONFIG__.venues[venue_realname].top;
                            const _venue_1 = __CONFIG__.venues[venue_realname].mid;
                            const _venue_2 = __CONFIG__.venues[venue_realname].bot;
                            console.log(div)
                            div_long = div
                            div_short = div.match(/\b[a-zA-Z]?\d*\/?/g).join('').replaceAll("  ", " ")
                            if (DIV_GRADING_DATES.includes(test_date) & DIV_GRADING_DIVS.includes(div_short)){
                                div_addition = " - " + div_pool
                            } else {
                                div_addition = ""
                            }
                            console.log("*******************")
                            console.log(div)
                            console.log(div_long)
                            console.log(div_short+div_addition)
                            console.log("*******************")
                            if (div.includes("Division") || div.includes("State")) {
                                /*_division = [
                                    __CONFIG__.wavl[div].long,
                                    __CONFIG__.wavl[div].short,
                                    __CONFIG__.wavl[div].id
                                ];*/
                                _division = [
                                    div,
                                    div.match(/\b[a-zA-Z]?\d*\/?/g).join('').replaceAll("  ", " ") + div_addition,
                                    event_Name,
                                    full_div
                                ]
                            } else {
                                div = div.replace("Year ", "")
                                console.log(div);
                                /*_division = [
                                    __CONFIG__.jl[div].long,
                                    __CONFIG__.jl[div].short,
                                    __CONFIG__.jl[div].id
                                ];*/
                                _division = [
                                    div.replace("South ", "S").replace("North ", "N").replace("Central ", "C").replace("Metro ", "M").replace("South", "S").replace("North", "N").replace("Central", "C").replace("Metro", "M"),
                                    div.match(/\b\s?[a-zA-Z]?\s?\d*[\/-]?/g).join('').replaceAll("  ", " "),
                                    event_Name,
                                    full_div
                                ]
                            }
                            
                            let team_a_coaches = [[['', ''], ''],[['', ''], ''],[['', ''], ''],[['', ''], ''],[['', ''], '']]
                            let team_b_coaches = [[['', ''], ''],[['', ''], ''],[['', ''], ''],[['', ''], ''],[['', ''], '']]

                            if (div.includes("Division") || div.includes("State")) {
                                let a_pres = __PRESIDENTS__[_team_a.substring(_team_a.indexOf(' ') + 1)];
                                let b_pres = __PRESIDENTS__[_team_b.substring(_team_b.indexOf(' ') + 1)];

                                if (a_pres == __PRESIDENTS__["a"]){
                                    a_pres = " ";
                                }

                                if (b_pres == __PRESIDENTS__["a"]){
                                    b_pres = " ";
                                }

                                team_a_coaches[4] = a_pres
                                team_b_coaches[4] = b_pres
                            }

                            let fixture_scoresheet_type = __CONFIG__.events[event_Name].scoresheet["default"]
                            //console.log(__CONFIG__.events[event_Name].scoresheet.length)
                            console.log(__CONFIG__.events[event_Name].scoresheet)
                            // Determine what scoresheet to use

                            if (event_Name == "Test - 2025 AVSC") {
                                if (_division[3].toLowerCase().includes("honours")) {
                                    fixture_scoresheet_type = __CONFIG__.events[event_Name].scoresheet["honours"]
                                    
                                    if (_division[3].toLowerCase().includes("pool")) {
                                        if (_division[3].toLowerCase().includes("pool m")) {
                                            fixture_scoresheet_type = __CONFIG__.events[event_Name].scoresheet["honours"]
                                        }
                                    fixture_scoresheet_type = __CONFIG__.events[event_Name].scoresheet["repecharge"]
                                    }
                                }
                                if (_division[3].toLowerCase().includes("repecharges")) {
                                    fixture_scoresheet_type = __CONFIG__.events[event_Name].scoresheet["repecharge"]
                                }
                                if (_division[3].toLowerCase().includes("division")) {
                                    fixture_scoresheet_type = __CONFIG__.events[event_Name].scoresheet["default"]
                                    
                                    if (_division[3].toLowerCase().includes("pool m")) {
                                        fixture_scoresheet_type = __CONFIG__.events[event_Name].scoresheet["repecharge"]
                                    }
                                }


                            } else {

                            

                                if (Object.keys(__CONFIG__.events[event_Name].scoresheet).length > 1) {
                                    let scoresheet_keys = Object.keys(__CONFIG__.events[event_Name].scoresheet)
                                    console.log(scoresheet_keys)
                                    var index = scoresheet_keys.indexOf("default");
                                    if (index !== -1) {
                                        scoresheet_keys.splice(index, 1);
                                    }
                                    console.log(scoresheet_keys)
                                    for (let z = 0; z < scoresheet_keys.length; z++) {
                                        if (_division[0].toLowerCase().includes(scoresheet_keys[z].toLowerCase())) {
                                            fixture_scoresheet_type = __CONFIG__.events[event_Name].scoresheet[scoresheet_keys[z]]
                                        }
                                    }
                                }
                            }

                            let _venue_full = __CONFIG__.venues[venue_realname].name;
                            let _sorting = _date_yyyy + " " + _date_mm + " " + _date_dd + " " + _venue_full + " " + _court + " " + _time_hr
                            let _time_sorting = _date_yyyy + " " + _date_mm + " " + _date_dd + " " + _venue_full + " " + _time_hr + " " + _court;
                            
                            let push_fix = true

                            if (document.getElementById("timeslots").value != "All") {
                                let time_slot = _time_hr + _time_min

                                if (time_slot == document.getElementById("timeslots").value) {
                                    push_fix = push_fix && true
                                } else {
                                    push_fix = false
                                }
                            } 

                            if (document.getElementById("courts").value != "All") {
                                let court_num = _court.match(/\d+\.?\d*/g)[0]
                                console.log(court_num)
                                if (court_num == document.getElementById("courts").value) {
                                    push_fix = push_fix && true
                                } else {
                                    push_fix = false
                                }
                            } 

                            if (push_fix) {
                                fixtures_list.push([zero_venue_split, _venue_0, _venue_1, _venue_2, _venue_full, _court,
                                                    _team_a, _team_b, _duty, _division, _date_dd, _date_mm, _date_yyyy, _time_hr, _time_min,
                                                    _sorting, _time_sorting, [],
                                                    [], fixture_scoresheet_type, team_a_coaches, team_b_coaches
                                                    ])
                            }
                            } catch (e) {
                                console.log(e)
                                window.alert("Missing Venue - " + zero_venue_split)
                                console.log("Missing Venue - " + zero_venue_split)
                            }
                        } else {
                            //window.alert("Missing Venue - " + zero_venue_split)
                            console.log("Deselected / Missing Venue - " + zero_venue_split)
                        }
                    } 
                    
            }
        }
    }
    console.log(fixtures_list);
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
    var events_keys = Object.keys(__CONFIG__.events)

    events_keys.splice(events_keys.indexOf("Manual Upload"),1)
    //var jl_keys = Object.keys(__CONFIG__.jl)

    for (var i = 0; i < Math.max(venue_keys.length, events_keys.length/*, jl_keys.length*/); i++) {
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        //var cell7 = row.insertCell(7);
        //var cell8 = row.insertCell(8);
        //var cell9 = row.insertCell(9);

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

        // Events
        cell3.classList.add("cell1")
        cell3.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'

        try {
            var events = __CONFIG__.events[events_keys[i]];
            cell4.classList.add("cell2")
            cell4.innerHTML = '<div id="events_' + i.toString() + '" style="display:inline-block;width:16px;height:20px;z-index:58;">' +
                '<input type="checkbox" id="checkevents_' + i.toString() + '" name="EVENTS_teams" value="on" checked="" style="display:inline-block;opacity:0;" title="' + events.name + '">' +
                '<label for="checkevents_' + i.toString() + '"></label>' +
                '</div>'

            cell5.classList.add("cell9")
            
            /*
            cell5.innerHTML = '<div id="wb_Text32">' +
                '<span style="color:#000000;font-family:Arial;font-size:16px;">' + events.name + '</span>' +
                '</div>'
            */
            
            cell5.innerHTML = '<table id="Table2">'+
                '<tbody><tr><td id="Row1"><div id="wb_TextNew"><span style="color:#000000;font-family:Arial;font-size:16px;z-index:60;">' + events.name + '</span></div></td>'+
                '<td id="Row2"><div id="fileUpload"><input type="file" label="Athletes .html" id="Athletes_'+events.name+'" name="filename" style="display:inline-block;" accept=".html, .htm"></div></td></tr></tbody></table>'    

                
            /*
            
            <div id="fileUpload"><input type="file" id="Athletes_'+events.name+'" name="filename" style="display:inline-block;" accept=".html"></div>
            
            
            cell7.classList.add("cell2")
            cell7.innerHTML = '<div id="event_file_' + i.toString() + '" style="display:inline-block;width:16px;height:20px;z-index:60;">' +
                '<input type="checkbox" id="event_file_' + i.toString() + '" name="WAVjL_teams" value="on" checked="" style="display:inline-block;opacity:0;" title="' + events.name + '">' +
                '<label for="event_file_' + i.toString() + '"></label>' +
                '</div>'

            cell8.classList.add("cell9")
            cell8.innerHTML = '<div id="wb_Text49">' +
                '<span style="color:#000000;font-family:Arial;font-size:16px;">' + events.name + '</span>' +
                '</div>'*/

        } catch (e) {
            cell4.classList.add("cell10")
            cell4.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'
            cell5.classList.add("cell11")
            cell5.innerHTML = '<p style="font-size:8px;line-height:9.5px;">&nbsp;</p>'
        }

        // Junior League Division
        /*
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
        */
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
