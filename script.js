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
"10th Missouri Cavalry",
"Blocher's Battery"
]

};

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

const veteran =
regiment==="19th Iowa Infantry";

return [

{
date:"December 3, 1862",
location:"Springfield, Missouri",
title:"Moving Out",
text:"Without much warning, you hear that you are to move south to Arkansas.",

context:"After receiving requests for reinforcements from Gen. James Blunt, Gen. Francis Herron ordered his division to march from Springfield, Missouri, towards Fayetteville.",

marker:{left:"60%",top:"30%"},

choices:[
"Gather up as many of your belongings as you can.",
"Fall in as fast as you can."
]
},

{
date:"December 5, 1862",
location:"Missouri-Arkansas Border",
title:"Cold and Tired",
text:"You've been on the march for miles; so many miles that you've lost count.  The column is drifting, with some men wandering off in search of better food. You figure you should do the same.  You look for a house that might welcome a Union soldier.",

context:"Soldiers would often try to stop in the homes of civilians to get a home-cooked meal. Usually, soldiers would pay the family a few dollars for food and lodging.",

marker:{left:"35%",top:"68%"},

choices:[
"Stop at a friendly-looking house",
"Keep it moving. You'll sleep on the ground if you have to."
]
},

{
date:"December 6, 1862",
location:"Fayetteville",
title:"The Still of the Night",
text:"You've been on the march for three days.  You've traveled 112 miles. You sleep for an hour before you're marching again. A cavalry man approaches yoy, saying he needs help decoding an intercepted message.",

context:"Many of the soldiers in Herron's army got little or no sleep throughout their march.",

marker:{left:"30%",top:"74%"},

choices:[
"Help him decode the message.",
]
},

{
date:"December 7, 1862",
location:"Illinois River",
title:"Arrival",
text:"You're exhausted. You ford the river, dodging Confederate shells all the way. You know you only have a few moments before you'll be sent up the ridge.",

context:"Accounts from the Battle of Prairie Grove say that some men were so exhausted from the march that they passed out from exhaustion on the field.",

marker:{left:"29%",top:"79%"},

choices:[
"Get ready.",
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
date:"December 7, 1862",
location:"Cane Hill",
title:"Orders to Move",
text:
regiment==="1st Indian Home Guard"
?
"Many soldiers reflect on protecting their homes and communities as orders arrive to move toward Prairie Grove."
:
"Veteran soldiers quickly prepare to move north toward the developing situation near Prairie Grove.",

context:"Union units near Cane Hill were called upon to move quickly toward the battlefield.",

marker:{left:"15%",top:"82%"},

choices:[
"Keep pace with the regiment",
"Watch the ridges for movement"
]
},

{
date:"Late Morning",
location:"Road North",
title:"A Rapid March",
text:"The pace quickens. Couriers move between commands while units press northward.",

context:"Communication depended on mounted couriers carrying orders between commanders.",

marker:{left:"40%",top:"65%"},

choices:[
"Stay with your company",
"Listen for news from ahead"
]
},

{
date:"Noon",
location:"Prairie Grove Road",
title:"Approaching the Battlefield",
text:"Artillery reports become easier to hear. The march continues with little time to rest.",

context:"Many soldiers understood the battle only through sounds carried on the wind.",

marker:{left:"62%",top:"48%"},

choices:[
"Focus on the march",
"Study the landscape ahead"
]
},

{
date:"Afternoon",
location:"Prairie Grove",
title:"Arrival",
text:"The regiment reaches the vicinity of Prairie Grove after a determined movement from Cane Hill.",

context:"Speed of movement often influenced where regiments arrived and when they could be committed.",

marker:{left:"82%",top:"30%"},

choices:[
"Remain with your regiment",
"Wait for new instructions"
]
}
];

}

/* Morrow Route */

return [

{
date:"December 7, 1862",
location:"Morrow",
title:"Breaking Camp",
text:
regiment==="Blocher's Battery"
?
"Battery crews spend the morning preparing horses, limbers, guns, and ammunition wagons for movement."
:
regiment==="10th Missouri Cavalry"
?
"Mounted troopers move between units carrying information and observing activity along the roads."
:
regiment==="34th Arkansas Infantry"
?
"Many soldiers know the countryside well and wonder what lies ahead for their home state."
:
"Veteran soldiers quietly begin another difficult winter march.",

context:"Confederate forces moved through the region attempting to concentrate before the battle.",

marker:{left:"82%",top:"20%"},

choices:[
"Listen for news from ahead",
"Focus on the miles ahead"
]
},

{
date:"Midday",
location:"Country Roads",
title:"On the March",
text:"Hours pass as columns continue across the Arkansas countryside.",

context:"Road conditions often determined how quickly entire armies could move.",

marker:{left:"68%",top:"38%"},

choices:[
"Keep step with the column",
"Observe the countryside"
]
},

{
date:"Afternoon",
location:"Approaching Prairie Grove",
title:"Reports from the Front",
text:"Word travels through the marching columns that fighting may already have begun.",

context:"Information was frequently delayed, incomplete, or inaccurate during Civil War campaigns.",

marker:{left:"52%",top:"55%"},

choices:[
"Stay with your comrades",
"Watch the road ahead"
]
},

{
date:"Late Afternoon",
location:"Prairie Grove",
title:"Journey Complete",
text:"After a demanding march, the regiment reaches the area around Prairie Grove.",

context:"Many soldiers arrived tired from travel before facing the realities of battle.",

marker:{left:"30%",top:"72%"},

choices:[
"Await new orders",
"Take in the scene around you"
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

        btn.onclick = () => { launchMiniGame(); };

        choices.appendChild(btn);

    });

}

function launchMiniGame() {

    const gameIndex = current % miniGames.length;

    sessionStorage.setItem("side", side);
    sessionStorage.setItem("regiment", regiment);
    sessionStorage.setItem("scene", String(current + 1));

    window.location.href = miniGames[gameIndex];
}

function checkForReturn() {

    const savedSide = sessionStorage.getItem("side");
    const savedRegiment = sessionStorage.getItem("regiment");
    const savedScene = sessionStorage.getItem("scene");

    // Consume the return state so reloads and "Select Another Regiment" work.
    sessionStorage.removeItem("side");
    sessionStorage.removeItem("regiment");
    sessionStorage.removeItem("scene");

    const savedSceneNumber = Number(savedScene);

    if (
        !Object.prototype.hasOwnProperty.call(regimentGroups, savedSide) ||
        !regimentGroups[savedSide].includes(savedRegiment) ||
        !Number.isInteger(savedSceneNumber) ||
        savedSceneNumber < 1
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
        ending();
    } else {
        renderScene();
    }
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
.textContent="Journey Complete";

document.getElementById("sceneTitle")
.textContent="Arrival at Prairie Grove";

document.getElementById("sceneText")
.textContent=
"Your journey to Prairie Grove is complete. Like most Civil War soldiers, much of your experience involved marching, waiting, uncertainty, and following orders. The roads leading to Prairie Grove shaped the battle just as surely as the fighting itself.";

document.getElementById("contextText")
.textContent=
"Campaigns were won and lost through movement, logistics, communication, and endurance long before shots were fired.";

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


