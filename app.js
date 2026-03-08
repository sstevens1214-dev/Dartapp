console.log("APP.JS LOADED");

/* ============================================================
   GLOBAL
============================================================ */

let currentMode = "501";
let currentPlayer = "p1";

/* ============================================================
   501 DATA + STATE
============================================================ */

const checkoutTable = {
        170: "T20   T20   Bull",
    167: "T20   T19   Bull",
    164: "T20   T18   Bull",
    161: "T20   T17   Bull",

    160: "T20   T20   D20",
    159: null, // bogey
    158: "T20   T20   D19",
    157: "T20   T19   D20",
    156: "T20   T20   D18",
    155: "T20   T19   D19",
    154: "T20   T18   D20",
    153: "T20   T19   D18",
    152: "T20   T20   D16",
    151: "T20   T17   D20",
    150: "T20   T18   D18",

    149: "T20   T19   D16",
    148: "T20   T20   D14",
    147: "T20   T17   D18",
    146: "T20   T18   D16",
    145: "T20   T15   D20",
    144: "T20   T20   D12",
    143: "T20   T17   D16",
    142: "T20   T14   D20",
    141: "T20   T19   D12",
    140: "T20   T20   D10",
   
    139: "T20   T19   D11",
    138: "T20   T18   D12",
    137: "T20   T19   D10",
    136: "T20   T20   D8",
    135: "T20   T17   D12",
    134: "T20   T14   D16",
    133: "T20   T19   D8",
    132: "Bull  Bull  D16",
    131: "T20   T13   D16",
    130: "T20   T20   D5",

    129: "T19   T16   D12",
    128: "T18   T14   D16",
    127: "T20   T17   D8",
    126: "T19   T19   D6",
    125: "25    T20   D20",
    124: "T20   T16   D8",
    123: "T19   T16   D9",
    122: "T18   T20   D4",
    121: "T20   T11   D14",
    120: "T20   20    D20",

    119: "T19   T12   D13",
    118: "T20   18    D20",
    117: "T20   17    D20",
    116: "T20   16    D20",
    115: "T19   18    D20",
    114: "T20   14    D20",
    113: "T20   13    D20",
    112: "T20   12    D20",
    111: "T20   11    D20",
    110: "T20   10    D20",

    109: "T20   9     D20",
    108: "T20   16    D16",
    107: "T19   18    D16",
    106: "T20   10    D18",
    105: "T20   13    D16",
    104: "T18   18    D16",
    103: "T20   3     D20",
    102: "T20   10    D16",
    101: "T17   18    D16",
    100: "T20         D20",

    99:  "T19   10    D16",
    98:  "T20         D19",
    97:  "T19         D20",
    96:  "T20         D18",
    95:  "T19         D19",
    94:  "T18         D20",
    93:  "T19         D18",
    92:  "T20         D16",
    91:  "T17   18    D20",
    90:  "T20         D15",

    89:  "T19         D16",
    88:  "T20         D14",
    87:  "T17   20    D18",
    86:  "T18         D16",
    85:  "T15   20    D20",
    84:  "T20         D12",
    83:  "T17         D16",
    82:  "Bull        D16",
    81:  "T19         D12",
    80:  "T20         D10",

    79:  "T19         D11",
    78:  "T18         D12",
    77:  "T19         D10",
    76:  "T20         D8",
    75:  "T17         D12",
    74:  "T14         D16",
    73:  "T19         D8",
    72:  "T16         D12",
    71:  "T13         D16",
    70:  "T18         D8",

    69:  "T19         D6",
    68:  "T20         D4",
    67:  "T17         D8",
    66:  "T10         D18",
    65:  "25          D20",
    64:  "T16         D8",
    63:  "T13         D12",
    62:  "T10         D16",
    61:  "T15         D8",
    60:  "20          D20",

    59:  "19          D20",
    58:  "18          D20",
    57:  "17          D20",
    56:  "16          D20",
    55:  "15          D20",
    54:  "14          D20",
    53:  "13          D20",
    52:  "12          D20",
    51:  "11          D20",
    50:  "Bull",

        49:  "17          D16",
    48:  "16          D16",
    47:  "15          D16",
    46:  "14          D16",
    45:  "13          D16",
    44:  "12          D16",
    43:  "11          D16",
    42:  "10          D16",
    41:  "9           D16",
    40:  "D20",

    39:  "7           D16",
    38:  "D19",
    37:  "5           D16",
    36:  "D18",
    35:  "3           D16",
    34:  "D17",
    33:  "1           D16",
    32:  "D16",
    31:  "15          D8",
    30:  "D15",

    29:  "13          D8",
    28:  "D14",
    27:  "11          D8",
    26:  "D13",
    25:  "9           D8",
    24:  "D12",
    23:  "7           D8",
    22:  "D11",
    21:  "5           D8",
    20:  "D10",

    19:  "3           D8",
    18:  "D9",
    17:  "1           D8",
    16:  "D8",
    15:  "7           D4",
    14:  "D7",
    13:  "5           D4",
    12:  "D6",
    11:  "3           D4",
    10:  "D5",

    9:   "1           D4",
    8:   "D4",
    7:   "3           D2",
    6:   "D3",
    5:   "1           D2",
    4:   "D2",
    3:   "1           D1",
    2:   "D1"

};

// bogey numbers (impossible finishes)
const impossibleFinishes = new Set([169, 168, 166, 165, 163, 162, 159]);

let startScore501 = 501;
let legsToWinMatch = 3;

let players501 = {
    p1: {
        name: "Player 1",
        score: startScore501,
        legs: 0,
        dartsThisLeg: 0,
        totalPoints: 0,
        totalDarts: 0,
        checkoutAttempts: 0,
        checkoutHits: 0,
        history: [] // store visit scores as strings
    },
    p2: {
        name: "Player 2",
        score: startScore501,
        legs: 0,
        dartsThisLeg: 0,
        totalPoints: 0,
        totalDarts: 0,
        checkoutAttempts: 0,
        checkoutHits: 0,
        history: []
    }
};

let undoStack = [];

/* ============================================================
   START GAME (MODE SWITCH)
============================================================ */

function startGame() {
    const modeSelect = document.getElementById("game-mode");
    if (modeSelect) currentMode = modeSelect.value;

    // Hide both game areas
    document.getElementById("game-area-501")?.classList.add("hidden");
    document.getElementById("golf-area")?.classList.add("hidden");

    // Hide 501 input panel explicitly
    document.querySelector(".pdc501-input-panel")?.classList.add("hidden");

    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.innerText = "";

    if (currentMode === "501") {
        start501();
    } else {
        document.getElementById("golf-area")?.classList.remove("hidden");
        if (statusEl) statusEl.innerText = "Enter golf player names and click Start Golf.";
    }
}


/* ============================================================
   501 INIT
============================================================ */

function readStartScore() {
    const sel = document.getElementById("start-score");
    const customInput = document.getElementById("custom-start-score");
    if (!sel) return 501;

    const val = sel.value;
    if (val === "custom" && customInput) {
        const n = Number(customInput.value);
        return Number.isInteger(n) && n > 0 ? n : 501;
    }
    const n = Number(val);
    return Number.isInteger(n) && n > 0 ? n : 501;
}

function readLegsToWin() {
    const input = document.getElementById("legs-to-win");
    if (!input) return 3;
    const n = Number(input.value);
    return Number.isInteger(n) && n > 0 ? n : 3;
}

function start501() {
    document.getElementById("game-area-501")?.classList.remove("hidden");

    // Show the 501 input panel
    document.querySelector(".pdc501-input-panel")?.classList.remove("hidden");

    const p1NameInput = document.getElementById("p1-name-input");
    const p2NameInput = document.getElementById("p2-name-input");

    players501.p1.name = p1NameInput?.value?.trim() || "Player 1";
    players501.p2.name = p2NameInput?.value?.trim() || "Player 2";

    startScore501 = readStartScore();
    legsToWinMatch = readLegsToWin();

    resetMatch501();
    currentPlayer = "p1";
    update501UI();
    highlightActivePlayer();
    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.innerText = `${players501[currentPlayer].name}'s throw`;
}

/* ============================================================
   501 SUBMIT / KEYPAD
============================================================ */

function submitScore() {
    if (currentMode === "501") submitScore501();
}

function attach501KeypadListeners() {
    const kpButtons = document.querySelectorAll(".pdc501-keypad .kp");
    kpButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const digit = btn.dataset.digit;
            if (!digit) return;
            const input = document.getElementById("score-input");
            if (!input) return;
            const current = input.value.toString();
            if (current.length >= 3) return; // max 3 digits
            input.value = current + digit;
        });
    });

    const clearBtn = document.getElementById("kp-clear");
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            const input = document.getElementById("score-input");
            if (input) input.value = "";
        });
    }

    const undoBtn = document.getElementById("kp-undo");
    if (undoBtn) {
        undoBtn.addEventListener("click", () => undo501());
    }

    const enterBtn = document.getElementById("kp-enter");
    if (enterBtn) {
        enterBtn.addEventListener("click", () => submitScore());
    }

    const startSel = document.getElementById("start-score");
    const customInput = document.getElementById("custom-start-score");
    if (startSel && customInput) {
        startSel.addEventListener("change", () => {
            if (startSel.value === "custom") {
                customInput.classList.remove("hidden");
            } else {
                customInput.classList.add("hidden");
            }
        });
    }
}

function submitScore501() {
    const input = document.getElementById("score-input");
    if (!input) return;

    const score = Number(input.value);
    const statusEl = document.getElementById("status");

    if (!Number.isInteger(score) || score < 0 || score > 180) {
        if (statusEl) statusEl.innerText = "Invalid score!";
        return;
    }

    // save state for undo
    undoStack.push(JSON.parse(JSON.stringify({
        players501,
        currentPlayer
    })));

    const p = players501[currentPlayer];
    const prevScore = p.score;
    const newScore = prevScore - score;

    // bust if below 0 or leave 1
    if (newScore < 0 || newScore === 1) {
        p.history.push(`B${score}`);
        if (statusEl) statusEl.innerText = `${p.name} busts!`;
        switchPlayer501();
        update501UI();
        input.value = "";
        return;
    }

    // track darts + scoring
    p.dartsThisLeg += 3;
    p.totalDarts += 3;
    p.totalPoints += score;

    // checkout attempt tracking (simple: if they were on <=170 before this visit)
    if (prevScore <= 170 && prevScore > 1 && !impossibleFinishes.has(prevScore)) {
        p.checkoutAttempts++;
    }

    if (newScore === 0) {
        // leg won
        p.score = 0;
        p.legs++;
        p.checkoutHits++;
        p.history.push(`C${score}`);
        if (statusEl) statusEl.innerText = `${p.name} wins the leg!`;

        handleLegWin501(currentPlayer);
        resetLeg501();
    } else {
        // normal scoring
        p.score = newScore;
        p.history.push(`${score}`);
        switchPlayer501();
    }

    update501UI();
    input.value = "";
}

/* ============================================================
   501 UNDO
============================================================ */

function undo501() {
    if (currentMode !== "501") return;
    const statusEl = document.getElementById("status");

    if (undoStack.length === 0) {
        if (statusEl) statusEl.innerText = "Nothing to undo";
        return;
    }

    const prev = undoStack.pop();
    players501 = prev.players501;
    currentPlayer = prev.currentPlayer;

    update501UI();
    highlightActivePlayer();
    if (statusEl) statusEl.innerText = "Undo applied";
}

/* ============================================================
   501 LEG / MATCH FLOW
============================================================ */

function handleLegWin501(playerId) {
    const p = players501[playerId];

    if (p.legs >= legsToWinMatch) {
        alert(`${p.name} wins the match!`);
        resetMatch501();
        return;
    }
}

function resetLeg501() {
    players501.p1.score = startScore501;
    players501.p2.score = startScore501;

    players501.p1.dartsThisLeg = 0;
    players501.p2.dartsThisLeg = 0;

    players501.p1.history = [];
    players501.p2.history = [];

    undoStack = [];
}

function resetMatch501() {
    players501.p1.score = startScore501;
    players501.p2.score = startScore501;

    players501.p1.legs = 0;
    players501.p2.legs = 0;

    players501.p1.dartsThisLeg = 0;
    players501.p2.dartsThisLeg = 0;

    players501.p1.totalPoints = 0;
    players501.p2.totalPoints = 0;

    players501.p1.totalDarts = 0;
    players501.p2.totalDarts = 0;

    players501.p1.checkoutAttempts = 0;
    players501.p2.checkoutAttempts = 0;

    players501.p1.checkoutHits = 0;
    players501.p2.checkoutHits = 0;

    players501.p1.history = [];
    players501.p2.history = [];

    undoStack = [];
}

/* ============================================================
   501 UI UPDATE
============================================================ */

function switchPlayer501() {
    currentPlayer = currentPlayer === "p1" ? "p2" : "p1";
    highlightActivePlayer();
    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.innerText = `${players501[currentPlayer].name}'s throw`;
}

function update501UI() {
    updatePlayer501("p1");
    updatePlayer501("p2");
    updateHistory501();
}

function updatePlayer501(id) {
    const p = players501[id];

    const nameInput = document.getElementById(`${id}-name-input`);
    if (nameInput) {
        p.name = nameInput.value.trim() || (id === "p1" ? "Player 1" : "Player 2");
    }

    const scoreEl = document.getElementById(`${id}-score`);
    if (scoreEl) scoreEl.innerText = p.score;

    const legsEl = document.getElementById(`${id}-legs`);
    if (legsEl) legsEl.innerText = p.legs;

    const legAvgEl = document.getElementById(`${id}-leg-avg`);
    if (legAvgEl) {
        const scoredThisLeg = startScore501 - p.score;
        const avg = p.dartsThisLeg > 0 ? (scoredThisLeg / p.dartsThisLeg) * 3 : 0;
        legAvgEl.innerText = avg.toFixed(2);
    }

    const setAvgEl = document.getElementById(`${id}-set-avg`);
    if (setAvgEl) {
        const avg = p.totalDarts > 0 ? (p.totalPoints / p.totalDarts) * 3 : 0;
        setAvgEl.innerText = avg.toFixed(2);
    }

    const coEl = document.getElementById(`${id}-co`);
    if (coEl) {
        const pct = p.checkoutAttempts > 0 ? (p.checkoutHits / p.checkoutAttempts) * 100 : 0;
        coEl.innerText = `${pct.toFixed(0)}%`;
    }

    const checkoutEl = document.getElementById(`${id}-checkout`);
    if (checkoutEl) {
        const s = p.score;
        if (s <= 170 && s > 1 && !impossibleFinishes.has(s)) {
            if (checkoutTable[s]) {
                checkoutEl.innerText = checkoutTable[s];
            } else if (s === 50) {
                checkoutEl.innerText = "Bull";
            } else if (s <= 40 && s % 2 === 0) {
                checkoutEl.innerText = `D${s / 2}`;
            } else {
                checkoutEl.innerText = "Checkout available";
            }
        } else if (impossibleFinishes.has(s)) {
            checkoutEl.innerText = "Impossible finish";
        } else {
            checkoutEl.innerText = "No checkout";
        }
    }
}

function updateHistory501() {
    renderHistoryGrid("p1");
    renderHistoryGrid("p2");
}

function renderHistoryGrid(id) {
    const grid = document.getElementById(`${id}-history-grid`);
    if (!grid) return;

    const history = players501[id].history;
    const lastSix = history.slice(-6); // only last 6 entries
    grid.innerHTML = "";

    lastSix.forEach(entry => {
        const cell = document.createElement("div");
        cell.className = "pdc501-history-cell";
        cell.textContent = entry;
        grid.appendChild(cell);
    });
}

function highlightActivePlayer() {
    const p1Panel = document.getElementById("p1-panel");
    const p2Panel = document.getElementById("p2-panel");
    const p1Throw = document.getElementById("p1-throw-indicator");
    const p2Throw = document.getElementById("p2-throw-indicator");

    if (p1Panel && p2Panel) {
        p1Panel.classList.remove("active-player");
        p2Panel.classList.remove("active-player");
        if (currentPlayer === "p1") p1Panel.classList.add("active-player");
        else p2Panel.classList.add("active-player");
    }

    if (p1Throw && p2Throw) {
        p1Throw.classList.add("hidden");
        p2Throw.classList.add("hidden");
        if (currentPlayer === "p1") p1Throw.classList.remove("hidden");
        else p2Throw.classList.remove("hidden");
    }
}

/* ============================================================
   GOLF MODE (your existing logic, unchanged)
============================================================ */

let golfPlayers = [];
let golfCourse = [];
let golfCurrentHole = 1;
let golfCurrentPlayerIndex = 0;
let golfStarterIndex = 0;
let golfInProgress = false;

function startGolf() {
    golfPlayers = [];
    for (let i = 1; i <= 8; i++) {
        const name = document.getElementById(`golf-name-${i}`)?.value.trim();
        if (name) {
            golfPlayers.push({
                name,
                scores: new Array(18).fill(null)
            });
        }
    }

    if (golfPlayers.length === 0) {
        alert("Enter at least one player name for golf.");
        return;
    }

    golfCourse = [];
    for (let h = 1; h <= 18; h++) {
        golfCourse.push({
            hole: h,
            number: h,
            isBullHole: false,
            par: 4
        });
    }

    const bullCount = 3 + Math.floor(Math.random() * 3);
    const indices = [...Array(18).keys()];
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    for (let i = 0; i < bullCount; i++) {
        const idx = indices[i];
        golfCourse[idx].isBullHole = true;
        golfCourse[idx].par = 5;
    }

    golfCurrentHole = 1;
    golfStarterIndex = 0;
    golfCurrentPlayerIndex = 0;
    golfInProgress = true;

    buildGolfScoreHeader();
    updateGolfScoreboard();
    updateGolfTargetDisplay();

    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.innerText = "Golf started.";
}

function buildGolfScoreHeader() {
    const head = document.getElementById("golf-score-head");
    if (!head) return;
    head.innerHTML = "";

    const tr1 = document.createElement("tr");

    let th = document.createElement("th");
    th.textContent = "Player";
    tr1.appendChild(th);

    for (let h = 1; h <= 9; h++) {
        th = document.createElement("th");
        th.textContent = h;
        tr1.appendChild(th);
    }

    th = document.createElement("th");
    th.textContent = "";
    th.style.width = "20px";
    tr1.appendChild(th);

    for (let h = 10; h <= 18; h++) {
        th = document.createElement("th");
        th.textContent = h;
        tr1.appendChild(th);
    }

    ["F9", "B9", "Total", "+/-"].forEach(label => {
        th = document.createElement("th");
        th.textContent = label;
        tr1.appendChild(th);
    });

    head.appendChild(tr1);

    const tr2 = document.createElement("tr");

    let td = document.createElement("td");
    td.textContent = "Par";
    td.style.fontWeight = "bold";
    tr2.appendChild(td);

    for (let h = 0; h < 9; h++) {
        td = document.createElement("td");
        td.textContent = golfCourse[h].par;
        td.style.opacity = "0.7";
        tr2.appendChild(td);
    }

    td = document.createElement("td");
    td.textContent = "";
    tr2.appendChild(td);

    for (let h = 9; h < 18; h++) {
        td = document.createElement("td");
        td.textContent = golfCourse[h].par;
        td.style.opacity = "0.7";
        tr2.appendChild(td);
    }

    td = document.createElement("td");
    td.textContent = golfCourse.slice(0, 9).reduce((s, h) => s + h.par, 0);
    td.style.fontWeight = "bold";
    tr2.appendChild(td);

    td = document.createElement("td");
    td.textContent = golfCourse.slice(9, 18).reduce((s, h) => s + h.par, 0);
    td.style.fontWeight = "bold";
    tr2.appendChild(td);

    td = document.createElement("td");
    td.textContent = golfCourse.reduce((s, h) => s + h.par, 0);
    td.style.fontWeight = "bold";
    tr2.appendChild(td);

    td = document.createElement("td");
    td.textContent = "";
    tr2.appendChild(td);

    head.appendChild(tr2);
}

function updateGolfScoreboard() {
    const body = document.getElementById("golf-score-body");
    if (!body) return;
    body.innerHTML = "";

    golfPlayers.forEach(player => {
        const tr = document.createElement("tr");

        let td = document.createElement("td");
        td.textContent = player.name;
        tr.appendChild(td);

        for (let i = 0; i < 9; i++) {
            td = document.createElement("td");
            td.textContent = player.scores[i] ?? "";
            tr.appendChild(td);
        }

        td = document.createElement("td");
        td.textContent = "";
        tr.appendChild(td);

        for (let i = 9; i < 18; i++) {
            td = document.createElement("td");
            td.textContent = player.scores[i] ?? "";
            tr.appendChild(td);
        }

        const f9 = player.scores.slice(0, 9).reduce((s, v) => s + (v || 0), 0);
        const b9 = player.scores.slice(9, 18).reduce((s, v) => s + (v || 0), 0);
        const total = f9 + b9;

        td = document.createElement("td");
        td.textContent = f9;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = b9;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = total;
        tr.appendChild(td);

        let parSoFar = 0;
        for (let i = 0; i < 18; i++) {
            if (player.scores[i] != null) parSoFar += golfCourse[i].par;
        }
        const diff = total - parSoFar;

        td = document.createElement("td");
        if (parSoFar === 0) td.textContent = "";
        else if (diff === 0) td.textContent = "E";
        else if (diff > 0) td.textContent = `+${diff}`;
        else td.textContent = diff.toString();

        tr.appendChild(td);

        body.appendChild(tr);
    });
}

function updateGolfHoleInfo() {
    const box = document.getElementById("golf-hole-info");
    if (!box || !golfCourse.length) return;

    const hole = golfCourse[golfCurrentHole - 1];

    if (hole.isBullHole) {
        box.innerHTML = `
            <strong>Bull Hole Scoring</strong><br>
            Inner Bull = 1 stroke<br>
            Outer Bull = Par (${hole.par})<br>
            Treble (any) = 2 strokes<br>
            Double (any) = 3 strokes<br>
            Single Inner = Par + 1 (${hole.par + 1})<br>
            Single Outer = Par + 2 (${hole.par + 2})<br>
            Miss / Other = Par + 3 (${hole.par + 3})
        `;
    } else {
        box.innerHTML = `
            <strong>Hole Scoring (Target ${hole.number})</strong><br>
            Treble ${hole.number} = 1 stroke<br>
            Double ${hole.number} = 2 strokes<br>
            Single Inner = 4 strokes<br>
            Single Outer = 5 strokes<br>
            Miss / Other = 7 strokes
        `;
    }
}

function updateGolfTargetDisplay() {
    if (!golfCourse.length) return;

    const holeInfo = golfCourse[golfCurrentHole - 1];
    const holeTitle = document.getElementById("golf-hole-title");
    const parTitle = document.getElementById("golf-par-title");
    const turnTitle = document.getElementById("golf-turn-title");

    if (holeTitle) {
        holeTitle.textContent = `Hole ${golfCurrentHole} of 18 (Number ${holeInfo.number})`;
    }
    if (parTitle) {
        parTitle.textContent = `Par ${holeInfo.par}`;
    }
    if (turnTitle && golfPlayers[golfCurrentPlayerIndex]) {
        turnTitle.textContent = `${golfPlayers[golfCurrentPlayerIndex].name} to throw`;
    }

    const group = document.getElementById("golf-target-group");
    const bullGroup = document.getElementById("golf-bull-group");

    if (bullGroup) {
        bullGroup.style.display = holeInfo.isBullHole ? "block" : "none";
    }

    if (group) {
        const wedges = group.querySelectorAll(".wedge");
        wedges.forEach(w => {
            const num = parseInt(w.dataset.number, 10);
            w.style.opacity = (num === holeInfo.number) ? "1" : "0.35";
        });
    }

    updateGolfHoleInfo();
    updateSegmentLabels();
    highlightActiveSegment();
}

function handleGolfClick(e) {
    if (!golfInProgress) return;
    if (golfCurrentHole > 18) return;

    const holeInfo = golfCourse[golfCurrentHole - 1];
    const target = e.target;

    const ring = target.dataset ? target.dataset.ring : null;
    const num = target.dataset && target.dataset.number ? parseInt(target.dataset.number, 10) : null;

    let stroke = null;

    if (holeInfo.isBullHole) {
        if (ring === "inner-bull") stroke = 1;
        else if (ring === "outer-bull") stroke = holeInfo.par;
        else if (ring === "treble") stroke = 2;
        else if (ring === "double") stroke = 3;
        else if (ring === "single-inner") stroke = holeInfo.par + 1;
        else if (ring === "single-outer") stroke = holeInfo.par + 2;
        else stroke = holeInfo.par + 3;
    } else {
        if (num === holeInfo.number) {
            if (ring === "treble") stroke = 1;
            else if (ring === "double") stroke = 2;
            else if (ring === "single-inner") stroke = 4;
            else if (ring === "single-outer") stroke = 5;
            else stroke = 7;
        } else {
            stroke = 7;
        }
    }

    recordGolfStroke(stroke);
}

function highlightActiveSegment() {
    if (!golfCourse.length) return;

    const hole = golfCourse[golfCurrentHole - 1];
    const targetNumber = hole.number;

    document.querySelectorAll(".golf-active-segment").forEach(el => {
        el.classList.remove("golf-active-segment");
    });
    document.querySelectorAll(".golf-active-number").forEach(el => {
        el.classList.remove("golf-active-number");
    });

    const wedges = document.querySelectorAll(`#golf-target-group .wedge[data-number="${targetNumber}"]`);
    wedges.forEach(w => w.classList.add("golf-active-segment"));

    const numbers = document.querySelectorAll(`#golf-number-ring text`);
    numbers.forEach(n => {
        if (parseInt(n.textContent) === targetNumber) {
            n.classList.add("golf-active-number");
        }
    });
}

function recordGolfStroke(stroke) {
    const player = golfPlayers[golfCurrentPlayerIndex];
    player.scores[golfCurrentHole - 1] = stroke;

    const allDone = golfPlayers.every(p => p.scores[golfCurrentHole - 1] != null);

    if (allDone) {
        let bestIndex = 0;
        let bestScore = golfPlayers[0].scores[golfCurrentHole - 1];
        let tie = false;

        for (let i = 1; i < golfPlayers.length; i++) {
            const s = golfPlayers[i].scores[golfCurrentHole - 1];
            if (s < bestScore) {
                bestScore = s;
                bestIndex = i;
                tie = false;
            } else if (s === bestScore) {
                tie = true;
            }
        }

        if (!tie) golfStarterIndex = bestIndex;

        golfCurrentHole++;

        if (golfCurrentHole > 18) {
            endGolfGame();
            return;
        }

        golfCurrentPlayerIndex = golfStarterIndex;
    } else {
        golfCurrentPlayerIndex = (golfCurrentPlayerIndex + 1) % golfPlayers.length;
    }

    updateGolfScoreboard();
    updateGolfTargetDisplay();
}

function endGolfGame() {
    golfInProgress = false;
    updateGolfScoreboard();

    const totalPar = golfCourse.reduce((sum, h) => sum + h.par, 0);
    let message = "Golf Finished!\n\nPar: " + totalPar + "\n\n";

    golfPlayers.forEach(p => {
        const total = p.scores.reduce((s, v) => s + (v || 0), 0);
        const diff = total - totalPar;
        const diffText = diff === 0 ? "E" : (diff > 0 ? `+${diff}` : diff.toString());
        message += `${p.name}: ${total} (${diffText})\n`;
    });

    alert(message);
}

/* ============================================================
   PDC-STYLE BOARD RENDERER + SEGMENT LABELS (GOLF)
============================================================ */

function toRad(a) {
    return (a * Math.PI) / 180;
}

function ringPath(innerR, outerR, startDeg, endDeg) {
    const x1o = outerR * Math.cos(toRad(startDeg));
    const y1o = outerR * Math.sin(toRad(startDeg));

    const x2o = outerR * Math.cos(toRad(endDeg));
    const y2o = outerR * Math.sin(toRad(endDeg));

    const x1i = innerR * Math.cos(toRad(startDeg));
    const y1i = innerR * Math.sin(toRad(startDeg));

    const x2i = innerR * Math.cos(toRad(endDeg));
    const y2i = innerR * Math.sin(toRad(endDeg));

    return `
        M ${x1o},${y1o}
        A ${outerR} ${outerR} 0 0 1 ${x2o},${y2o}
        L ${x2i},${y2i}
        A ${innerR} ${innerR} 0 0 0 ${x1i},${y1i}
        Z
    `;
}

function updateSegmentLabels() {
    if (!golfCourse.length) return;

    const hole = golfCourse[golfCurrentHole - 1];
    const wedges = document.querySelectorAll("#golf-target-group .wedge");

    wedges.forEach(w => {
        w.querySelectorAll("text").forEach(t => t.remove());
    });

    wedges.forEach(w => {
        const num = parseInt(w.dataset.number, 10);
        const paths = w.querySelectorAll("path");

        paths.forEach(path => {
            const ring = path.dataset.ring;
            let value = "";

            if (hole.isBullHole) {
                if (ring === "inner-bull") value = 1;
                else if (ring === "outer-bull") value = hole.par;
                else if (ring === "treble") value = 2;
                else if (ring === "double") value = 3;
                else if (ring === "single-inner") value = hole.par + 1;
                else if (ring === "single-outer") value = hole.par + 2;
                else value = hole.par + 3;
            } else {
                if (num === hole.number) {
                    if (ring === "treble") value = 1;
                    else if (ring === "double") value = 2;
                    else if (ring === "single-inner") value = 4;
                    else if (ring === "single-outer") value = 5;
                    else value = 7;
                } else {
                    value = 7;
                }
            }

            const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
            label.textContent = value;
            label.setAttribute("fill", "#fff");
            label.setAttribute("font-size", "10");
            label.setAttribute("text-anchor", "middle");

            const bbox = path.getBBox();
            label.setAttribute("x", bbox.x + bbox.width / 2);
            label.setAttribute("y", bbox.y + bbox.height / 2 + 3);

            w.appendChild(label);
        });
    });
}

function buildGolfBoard() {
    const group = document.getElementById("golf-target-group");
    const bullGroup = document.getElementById("golf-bull-group");
    const numberRing = document.getElementById("golf-number-ring");
    if (!group || !bullGroup || !numberRing) return;

    group.innerHTML = "";
    bullGroup.innerHTML = "";
    numberRing.innerHTML = "";

    const svgNS = "http://www.w3.org/2000/svg";

    const numbers = [
        20, 1, 18, 4, 13, 6, 10, 15, 2, 17,
        3, 19, 7, 16, 8, 11, 14, 9, 12, 5
    ];

    const R_DOUBLE_OUTER = 170;
    const R_DOUBLE_INNER = 160;
    const R_SINGLE_OUTER_OUTER = 160;
    const R_SINGLE_OUTER_INNER = 130;
    const R_TREBLE_OUTER = 130;
    const R_TREBLE_INNER = 120;
    const R_SINGLE_INNER_OUTER = 120;
    const R_SINGLE_INNER_INNER = 90;
    const R_OUTER_BULL = 25;
    const R_INNER_BULL = 12;

    const RED = "#c40000";
    const GREEN = "#0f8a2f";
    const BLACK = "#1a1a1a";
    const WIRE = "#ffffff";

    const TREBLE_PATTERN = {
        20:true, 1:false, 18:true, 4:false, 13:true, 6:false,
        10:true, 15:false, 2:true, 17:false, 3:true, 19:false,
        7:true, 16:false, 8:true, 11:false, 14:true, 9:false,
        12:true, 5:false
    };

    const DOUBLE_PATTERN = {
        20:false, 1:true, 18:false, 4:true, 13:false, 6:true,
        10:false, 15:true, 2:false, 17:true, 3:false, 19:true,
        7:false, 16:true, 8:false, 11:true, 14:false, 9:true,
        12:false, 5:true
    };

    for (let i = 0; i < 20; i++) {
        const num = numbers[i];
        const startAngle = i * 18 - 99;
        const endAngle = startAngle + 18;

        const wedgeGroup = document.createElementNS(svgNS, "g");
        wedgeGroup.classList.add("wedge");
        wedgeGroup.dataset.number = num;

        const rings = [
            { inner: R_SINGLE_INNER_INNER, outer: R_SINGLE_INNER_OUTER, fill: BLACK, ring: "single-inner" },
            { inner: R_TREBLE_INNER,      outer: R_TREBLE_OUTER,      fill: BLACK, ring: "treble" },
            { inner: R_SINGLE_OUTER_INNER, outer: R_SINGLE_OUTER_OUTER, fill: BLACK, ring: "single-outer" },
            { inner: R_DOUBLE_INNER,      outer: R_DOUBLE_OUTER,      fill: BLACK, ring: "double" }
        ];

        rings.forEach(r => {
            const path = document.createElementNS(svgNS, "path");
            path.setAttribute("d", ringPath(r.inner, r.outer, startAngle, endAngle));
            path.setAttribute("stroke", WIRE);
            path.setAttribute("stroke-width", "0.6");

            let fillColor = r.fill;

            if (r.ring === "treble") {
                fillColor = TREBLE_PATTERN[num] ? GREEN : RED;
            }

            if (r.ring === "double") {
                fillColor = DOUBLE_PATTERN[num] ? GREEN : RED;
            }

            path.setAttribute("fill", fillColor);
            path.dataset.ring = r.ring;
            path.dataset.number = num;

            wedgeGroup.appendChild(path);
        });

        group.appendChild(wedgeGroup);
    }

    const outerBull = document.createElementNS(svgNS, "circle");
    outerBull.setAttribute("cx", 0);
    outerBull.setAttribute("cy", 0);
    outerBull.setAttribute("r", R_OUTER_BULL);
    outerBull.setAttribute("fill", GREEN);
    outerBull.setAttribute("stroke", WIRE);
    outerBull.setAttribute("stroke-width", "1");
    outerBull.dataset.ring = "outer-bull";
    bullGroup.appendChild(outerBull);

    const innerBull = document.createElementNS(svgNS, "circle");
    innerBull.setAttribute("cx", 0);
    innerBull.setAttribute("cy", 0);
    innerBull.setAttribute("r", R_INNER_BULL);
    innerBull.setAttribute("fill", RED);
    innerBull.setAttribute("stroke", WIRE);
    innerBull.setAttribute("stroke-width", "1");
    innerBull.dataset.ring = "inner-bull";
    bullGroup.appendChild(innerBull);

    const NUMBER_RADIUS = 190;

    numbers.forEach((num, i) => {
        const angle = (i * 18 - 90) * Math.PI / 180;
        const x = NUMBER_RADIUS * Math.cos(angle);
        const y = NUMBER_RADIUS * Math.sin(angle);

        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", x);
        text.setAttribute("y", y + 6);
        text.setAttribute("fill", WIRE);
        text.setAttribute("font-size", "22");
        text.setAttribute("font-family", "Arial, sans-serif");
        text.setAttribute("text-anchor", "middle");
        text.textContent = num;

        numberRing.appendChild(text);
    });
}

/* ============================================================
   INIT + EVENT LISTENERS
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    buildGolfBoard();

    const golfBoard = document.getElementById("golf-board");
    if (golfBoard) {
        golfBoard.addEventListener("click", handleGolfClick);
    }

    attach501KeypadListeners();

    console.log("Dartboard ready, app initialised.");
});
