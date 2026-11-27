/* =================================== */
/* REGIMENTS */
/* =================================== */

const regimentGroups = {

Union:[
"20th Wisconsin Infantry",
"19th Iowa Infantry",
"10th Kansas Infantry",
"1st Indian Home Guard"
],

Confederate:[
"34th Arkansas Infantry",
"22nd Arkansas Infantry",
"28th Arkansas Infantry",
"Hawthorn's Brigade"
]

};

let awaitingTravel = false;
let side = "";
let regiment = "";
let current = 0;
let scenes = [];

const miniGames = [
    "https://pgbsp.github.io/haversack-challenge/",
    "https://pgbsp.github.io/prairie-grove-civilian-loyalties/",
    "https://pgbsp.github.io/pg-spycraft/",
    "https://pgbsp.github.io/springfield-rifle/"
];

/* =================================== */
/* SIDE SELECTION */
/* =================================== */

function chooseSide(selected){

    if (!Object.prototype.hasOwnProperty.call(regimentGroups, selected)) {
        return;
    }

    side = selected;

    const container =
        document.getElementById("regiments");

    container.innerHTML = "";

    regimentGroups[selected]
    .forEach(reg => {

        const btn =
            document.createElement("button");

        btn.textContent = reg;

        btn.onclick =
            () => startExperience(reg);

        container.appendChild(btn);
    });
}

/* =================================== */
/* STORY FACTORY */
/* =================================== */

function createStory(regiment){

if(
regiment==="20th Wisconsin Infantry" ||
regiment==="19th Iowa Infantry"
){

return [

{
date:"December 3, 1862",
location:"Springfield, Missouri",
title:"Moving Out",
text:"Without much warning, you hear that you are to move south to Arkansas.",

context:"After receiving requests for reinforcements from General James Blunt, General Francis Herron ordered his division to march from Springfield, Missouri, towards Fayetteville.",

marker:{left:"35%",top:"43%"},

nextStop:"Latta House",

choices:[
"Gather up as many of your belongings as you can",
"Fall in as fast as you can"
]
},

{
date:"December 5, 1862",
location:"Missouri-Arkansas Border",
title:"Cold and Tired",
text:"You've been on the march for miles; so many miles that you've lost count.  The column is drifting, with some men wandering off in search of better food. You figure you should do the same.  You look for a house that might welcome a Union soldier.",

context:"Soldiers would often try to stop in the homes of civilians to get a home-cooked meal. Usually, soldiers would pay the family a few dollars for food and lodging.",

marker:{left:"35%",top:"64%"},

nextStop:"Schoolhouse",

choices:[
"Stop at a friendly-looking house",
"Keep it moving. You'll sleep on the ground if you have to"
]
},

{
date:"December 6, 1862",
location:"Fayetteville",
title:"The Still of the Night",
text:"You've been on the march for three days.  You've traveled 112 miles. You sleep for an hour before you're marching again. A cavalry man approaches you, saying he needs help decoding an intercepted message.",

context:"Many of the soldiers in Herron's army got little or no sleep throughout their march.",

marker:{left:"25%",top:"78%"},

nextStop:"Church",

choices:[
"Help him decode the message",
]
},

{
date:"December 7, 1862",
location:"Illinois River",
title:"Arrival",
text:"You're exhausted. You ford the river, dodging Confederate shells all the way. You know you only have a few moments before you'll be sent up the ridge.",

context:"Accounts from the Battle of Prairie Grove say that some men were so exhausted from the march that they passed out from exhaustion on the field.",

marker:{left:"20%",top:"82%"},

nextStop:"Morrow House",

choices:[
"Get ready",
]
}
];

}

/* Cane Hill */

if(
regiment==="10th Kansas Infantry" ||
regiment==="1st Indian Home Guard"
){

return [

{
date:"December 6, 1862",
location:"Newburg",
title:"The Still of the Night",
text:
regiment==="1st Indian Home Guard"
?
"You're about to settle down for the night. You expect that you might be fighting soon, but you don't know when or where. You decide to make sure you have everything you need."
:
"You're settling down for the night. You expect that you might be fighting soon, but you don't know when or where. You decide to make sure you have everything you need.",

context:"Soldiers in General James Blunt's division knew the Confederate Army was moving towards them, and were getting close.",

marker:{left:"17%",top:"85%"},

nextStop:"Latta House",

choices:[
"Check your bag",
"You'll check in the morning"
]
},

{
date:"Late Morning",
location:"On the Road",
title:"Quickly",
text:"You're moving now. The pace of the whole division has quickened. You're all moving north. You're hungry. You wonder if you might be able to sneak away and find food in a house. You look for a house that seems friendly.",

context:"Soldiers would often try to stop in the homes of civilians to get a home-cooked meal. Usually, soldiers would pay the family a few dollars for food and lodging.",

marker:{left:"17%",top:"83%"},

nextStop:"Schoolhouse",

choices:[
"Stay with your company",
"Break off to find a house"
]
},

{
date:"Early Afternoon",
location:"Rhea's Mill",
title:"A Moment's Rest",
text:"You all stop for a moment at Rhea's Mill. Some men take naps, others brew coffee. You notice a Confederate scout in the back of the column, taken prisoner. He has a piece of paper in his pocket.",

context:"General Blunt wanted to strike the Confederates from their rear; but his cavalry commander took the wrong route, leading the division to Rhea's Mill instead.",

marker:{left:"17%",top:"80%"},

nextStop:"Church",

choices:[
"Grab the paper",
]
},

{
date:"Afternoon",
location:"Hilltop",
title:"To Battle",
text:"The sound of cannon fire grows louder and louder. You can see a large pillar of smoke rising above the terrain. Soon, the battle hoves into your view. You only have a minute before you'll be given instructions.",

context:"Blunt's division deployed all of their force within half an hour of arriving on the battlefield.",

marker:{left:"19%",top:"82%"},

nextStop:"Morrow House",

choices:[
"Get ready",
]
}
];

}

/* Morrow Route */

return [

{
date:"Morning: December 7, 1862",
location:"Morrow",
title:"Breaking Camp",
text:"It's early in the morning; still pitch black. You're told that you're moving out, and that you might be fighting very soon. You decide to make sure you have everything you need.",

context:"The Confederate Army, led by General Thomas Hindman, spent the night at the Morrow House on December 6, 1862. They began to move north at 4:00 AM on December 7, expecting to collide with Union forces led by General James Blunt.",

marker:{left:"25%",top:"90%"},

nextStop:"Latta House",

choices:[
"Check your bag"
]
},

{
date:"Dawn",
location:"Cove Creek Road",
title:"On the March",
text:"You've been marching on the double quick for several miles. You're tired and hungry. You wonder if you might be able to sneak away and find breakfast in a nearby house.",

context:"Soldiers would often try to stop in the homes of civilians to get a home-cooked meal. Usually, soldiers would pay the family a few dollars for food and lodging.",

marker:{left:"25%",top:"88%"},

nextStop:"Schoolhouse",

choices:[
"Stay with the column",
"Break away to find a house"
]
},

{
date:"Early Morning",
location:"Up the Road",
title:"Resting for a Moment",
text:"You and the men around you stop for a moment to rest. You notice that a Federal courier, taken prisoner, is inspecting a piece of paper. You walk over and take the paper.",

context:"Both armies had to rely on incomplete, unreliable, or dated information in trying to prepare for battle.",

marker:{left:"25%",top:"86%"},

nextStop:"Church",

choices:[
"Read the paper",
]
},

{
date:"10:00 AM",
location:"The Ridge",
title:"Noises by the River",
text:"You begin to hear the sounds of a force approaching at the Illinois River. The artillery opens up on them. You know it won't be long before the fighting begins. You decide to make sure you are ready.",

context:"The Confederate assumed a defensive position along the ridge by the Borden House, and waited for Federal forces to arrive.",

marker:{left:"25%",top:"84%"},

nextStop:"Morrow House",

choices:[
"Check your rifle",
]
}
];

}

/* =================================== */

function startExperience(selected){

    if (!side || !regimentGroups[side]?.includes(selected)) {
        return;
    }

    regiment = selected;
    current = 0;
    scenes = createStory(regiment);

    document.getElementById("startScreen")
        .classList.add("hidden");

    document.getElementById("app")
        .classList.remove("hidden");

    document.getElementById("unitSide")
        .textContent = side;

    document.getElementById("unitRegiment")
        .textContent = regiment;

    renderScene();
}

/* =================================== */

function renderRoute(){

    const route =
    document.getElementById("routeStops");

    route.innerHTML = "";

    scenes.forEach((scene,index)=>{

        const stop =
        document.createElement("div");

        stop.className =
        index===current
        ? "route-stop active"
        : "route-stop";

        stop.innerHTML =
        `
        <div class="stop-dot"></div>
        <div>${scene.location}</div>
        `;

        route.appendChild(stop);
    });

}

function renderScene(){

    const s = scenes[current];

    document.getElementById("sceneDate")
        .textContent = s.date;

    document.getElementById("sceneTitle")
        .textContent = s.title;

    document.getElementById("sceneText")
        .textContent = s.text;

    document.getElementById("contextText")
        .textContent = s.context;

    const marker =
        document.getElementById("marker");

    marker.style.left = s.marker.left;
    marker.style.top = s.marker.top;

    renderRoute();

    const choices =
        document.getElementById("choices");

    choices.innerHTML = "";

    s.choices.forEach(choice=>{

        const btn =
        document.createElement("button");

        btn.textContent = choice;

	btn.onclick = () => {
    launchMiniGame();
};

choices.appendChild(btn);

    });

}

function showTravelScreen() {

    const destination =
        scenes[current].nextStop || "the next stop";

    document.getElementById("sceneDate")
        .textContent = "Next Destination";

    document.getElementById("sceneTitle")
        .textContent =
        `Proceed to ${destination}`;

    document.getElementById("sceneText")
        .textContent =
        `Travel to ${destination}. When you arrive, press the button below to continue your story.`;

    document.getElementById("contextText")
        .textContent = "";

    const choices =
        document.getElementById("choices");

    choices.innerHTML = "";

    const btn =
        document.createElement("button");

    btn.textContent =
        `I Am At ${destination}`;

    btn.onclick = arriveAtNextStop;

    choices.appendChild(btn);

}

function arriveAtNextStop() {

    current++;

    if (current >= scenes.length) {

        ending();
        return;
    }

    renderScene();
}

function launchMiniGame() {

    const gameIndex = current % miniGames.length;

    sessionStorage.setItem("side", side);
    sessionStorage.setItem("regiment", regiment);
    sessionStorage.setItem("scene", String(current));
	sessionStorage.setItem("awaitingTravel", "true");

    window.location.href = miniGames[gameIndex];
}

function checkForReturn() {

    const savedSide = sessionStorage.getItem("side");
    const savedRegiment = sessionStorage.getItem("regiment");
    const savedScene = sessionStorage.getItem("scene");
	const awaitingTravel =
    	sessionStorage.getItem("awaitingTravel");

    // Consume the return state so reloads and "Select Another Regiment" work.
    sessionStorage.removeItem("side");
    sessionStorage.removeItem("regiment");
    sessionStorage.removeItem("scene");
    sessionStorage.removeItem("awaitingTravel");

    const savedSceneNumber = Number(savedScene);

    if (
        !Object.prototype.hasOwnProperty.call(regimentGroups, savedSide) ||
        !regimentGroups[savedSide].includes(savedRegiment) ||
        !Number.isInteger(savedSceneNumber) ||
        savedSceneNumber < 0
    ) {
        return;
    }

    side = savedSide;
    regiment = savedRegiment;
    scenes = createStory(regiment);

    if (savedSceneNumber > scenes.length) {
        return;
    }

    current = savedSceneNumber;

    document
        .getElementById("startScreen")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");

    document
        .getElementById("unitSide")
        .textContent = side;

    document
        .getElementById("unitRegiment")
        .textContent = regiment;

    if (current === scenes.length) {
        current = scenes.length - 1;
        renderScene();
        ending();
        return;
    }

    if (awaitingTravel === "true") {
        renderScene();
        showTravelScreen();
        return;
    }

    renderScene();
}

function launchBattle() {

    if (
        regiment === "19th Iowa Infantry" ||
        regiment === "20th Wisconsin Infantry"
    ) {

        window.location.href =
            "https://pgbsp.github.io/herron-dilemma/";
    }

    else if (
        regiment === "10th Kansas Infantry" ||
        regiment === "1st Indian Home Guard"
    ) {

        window.location.href =
            "https://pgbsp.github.io/blunt-dilemma/";
    }

    else {

        window.location.href =
            "https://pgbsp.github.io/hindman-dilemma/";
    }
}

/* =================================== */

function ending(){

document.getElementById("sceneDate")
.textContent="The End";

document.getElementById("sceneTitle")
.textContent="To Battle";

document.getElementById("sceneText")
.textContent=
"The battle has begun. You must now try to win it.";

document.getElementById("contextText")
.textContent=
"The Confederate Army started the battle with strong positioning and superior numbers, but lacked supplies and a well-trained force. Herron's division was well-supplied but exhausted from their march. Blunt's division spent much of the day trying to find the battlefield.";

document.getElementById("choices")
.innerHTML=
`
<button onclick="launchBattle()">
Continue to the Battle
</button>

<button onclick="location.reload()">
Select Another Regiment
</button>
`;

}

/* =================================== */
checkForReturn();

