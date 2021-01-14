let choseTravelPlanetContainer = document.querySelector(".choseTravelPlanetContainer");
let choseTravelPlanet = document.querySelector(".choseTravelPlanet");
let cursor1 = document.querySelector(".cursor1");
let planets = document.querySelector(".planets");
let planet = document.querySelectorAll(".planet");
let mainFormH3 = document.querySelector(".mainFormH3");
let chosenPlanet = document.querySelector(".chosenPlanet");
let chosenShortName = document.querySelector(".chosenShortName");

choseTravelPlanetContainer.addEventListener("click", function() {
    cursor1.style.transform = "rotate(-180deg)";
    cursor1.style.transition = "color .3s,rotate .3s,transform .2s linear";

    choseTravelPlanetContainer.style.backgroundColor = "inherit";
    choseTravelPlanetContainer.style.borderColor = "rgb(173, 235, 50)";

    planets.style.display = "block";
});

planets.addEventListener("click", function(event) {
    let getPlanet = event.target.querySelector("li");
    let getShortName = event.target.querySelector(".shortName");

    choseTravelPlanet.textContent = getPlanet.textContent;
    chosenShortName.textContent = getShortName.textContent;
})

let choseDateContainer = document.querySelector(".choseDateContainer");
let choseDate = document.querySelector(".choseDate");
let dates = document.querySelector(".dates");
let datesContainer = document.querySelector(".datesContainer");
let cursor2 = document.querySelector(".cursor2");
let number = document.querySelectorAll(".number");

choseDateContainer.addEventListener("click", function() {
    cursor2.style.transform = "rotate(-180deg)";
    cursor2.style.transition = "color .3s,rotate .3s,transform .2s linear";

    choseDateContainer.style.backgroundColor = "inherit";
    choseDateContainer.style.borderColor = "rgb(173, 235, 50)";
    
    datesContainer.style.display = "block";
});

dates.addEventListener("click", function(event) {
    choseDateContainer.style.borderColor = "gray";
    choseDate.textContent = `${event.target.textContent} Апр 20S7`;
})

let savedInformation = document.querySelector(".saveInformation");
let mainScreen = document.querySelector(".mainScreen");
let nav = document.querySelector("nav");
let cabin = document.querySelector(".cabin");
let whitherPlanet = document.querySelector(".whitherPlanet");
let travelDateInformation = document.querySelector(".travelDateInformation");
let whitherPlanetShortName = document.querySelector(".whitherPlanetShortName");

savedInformation.onclick = function(event) {
    event.preventDefault();
    if (choseTravelPlanet.textContent === "Выберите планету" || choseDate.textContent === "Выберите дату") {
        choseTravelPlanetContainer.style.backgroundColor = "rgba(255,63,63,.4)";
        choseDateContainer.style.backgroundColor = "rgba(255,63,63,.4)";
    } else {
        mainScreen.style.display = "none";
        nav.style.display = "flex";
        cabin.style.display = "block";
    
        whitherPlanet.textContent = choseTravelPlanet.textContent;
        travelDateInformation.textContent = choseDate.textContent;
        whitherPlanetShortName.textContent = chosenShortName.textContent;
    }
}

let cryochamber = document.querySelector(".cryochamber");
let cryochamberImg = cryochamber.querySelector("img");
let CryochamberImgCon = cryochamber.querySelector(".imgCon");
let aboutCryochamberCabin = cryochamber.querySelector(".aboutCryochamberCabin");
let businessClass = document.querySelector(".businessClass");
let businessClassImg = businessClass.querySelector("img");
let BusinessImgCon = businessClass.querySelector(".imgCon");
let aboutBusinessCabin = businessClass.querySelector(".aboutBusinessCabin");
let luxury = document.querySelector(".luxury");
let luxaryImg = luxury.querySelector("img");
let LuxaryImgCon = luxury.querySelector(".imgCon");
let aboutLuxuryCabin = luxury.querySelector(".aboutLuxuryCabin");
let choseCabinTypeContainer = document.querySelector(".choseCabinTypeContainer");
let cabinTypeInformation = document.querySelector(".cabinTypeInformation");

choseCabinTypeContainer.addEventListener("click", function(event) {
    if (event.target.textContent === "Криокамера эконом" || event.target === cryochamberImg || event.target === cryochamber) {
        BusinessImgCon.style.borderColor = "transparent";
        LuxaryImgCon.style.borderColor = "transparent";

        CryochamberImgCon.style.borderColor = "white";

        cabinTypeInformation.style.backgroundColor = "inherit";
        cabinTypeInformation.textContent = aboutCryochamberCabin.textContent;
    }
    if (event.target.textContent === "Каюта бизнес-класса" || event.target === businessClassImg || event.target === businessClass) {
        CryochamberImgCon.style.borderColor = "transparent";
        LuxaryImgCon.style.borderColor = "transparent";

        BusinessImgCon.style.borderColor = "white";

        cabinTypeInformation.style.backgroundColor = "inherit";
        cabinTypeInformation.textContent = aboutBusinessCabin.textContent;
    }
    if (event.target.textContent === "Панорамная палуба люкс" || event.target === luxaryImg || event.target === luxury) {
        CryochamberImgCon.style.borderColor = "transparent";
        BusinessImgCon.style.borderColor = "transparent";

        LuxaryImgCon.style.borderColor = "white";

        cabinTypeInformation.style.backgroundColor = "inherit";
        cabinTypeInformation.textContent = aboutLuxuryCabin.textContent;
    }
})

$('.cabin').on('mousemove', (event) => {
    const x = event.pageX / $(window).width();
    const y = event.pageY / $(window).height();

    $('.leftRocket').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
    $('.rightRocket').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
});

let goToTravelTypeContainer = document.querySelector(".goToTravelTypeContainer");

goToTravelTypeContainer.addEventListener("click", function() {
    cabin.style.display = "none";
    travelType.style.display = "block";
})

let choseTravelTypeContainer = document.querySelector(".choseTravelTypeContainer");
let travelType = document.querySelector(".travelType");
let ISS = document.querySelector(".ISS");
let ISSImg = ISS.querySelector("img");
let ISSImgCon = ISS.querySelector(".imgCon");
let aboutISSTravel = document.querySelector(".aboutISSTravel");
let direct = document.querySelector(".direct");
let directImg = direct.querySelector("img");
let directImgCon = direct.querySelector(".imgCon");
let aboutDirectTravel = document.querySelector(".aboutDirectTravel");
let excursion = document.querySelector(".excursion");
let excursionImg = excursion.querySelector("img");
let excursionImgCon = excursion.querySelector(".imgCon");
let aboutExcursionTravel = document.querySelector(".aboutExcursionTravel");
let travelTypeInformation = document.querySelector(".travelTypeInformation");

choseTravelTypeContainer.addEventListener("click", function(event) {
    if (event.target.textContent === "Стыковка на МКС" || event.target === ISSImg || event.target === ISS) {
        directImgCon.style.borderColor = "transparent";
        excursionImgCon.style.borderColor = "transparent";

        ISSImgCon.style.borderColor = "white";

        travelTypeInformation.style.backgroundColor = "inherit";
        travelTypeInformation.style.width = "30px";
        travelTypeInformation.textContent = aboutISSTravel.textContent;
    }
    if (event.target.textContent === "Прямой" || event.target === directImg || event.target === direct) {
        ISSImgCon.style.borderColor = "transparent";
        excursionImgCon.style.borderColor = "transparent";

        directImgCon.style.borderColor = "white";

        travelTypeInformation.style.backgroundColor = "inherit";
        travelTypeInformation.style.width = "30px";
        travelTypeInformation.textContent = aboutDirectTravel.textContent;
    }
    if (event.target.textContent === "Экскурсия по орбите Земли" || event.target === excursionImg || event.target === excursion) {
        ISSImgCon.style.borderColor = "transparent";
        directImgCon.style.borderColor = "transparent";

        excursionImgCon.style.borderColor = "white";

        travelTypeInformation.style.backgroundColor = "inherit";
        travelTypeInformation.style.width = "110px";
        travelTypeInformation.textContent = aboutExcursionTravel.textContent;
    }
})

$('.travelType').on('mousemove', (event) => {
    const x = event.pageX / $(window).width();
    const y = event.pageY / $(window).height();

    $('.stars').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
    $('.upiter').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
});

let goToFoodTypeContainer = document.querySelector(".goToFoodTypeContainer");

goToFoodTypeContainer.addEventListener("click", function() {
    travelType.style.display = "none";
    food.style.display = "block";
})

let choseFoodTypeContainer = document.querySelector(".choseFoodTypeContainer");
let food = document.querySelector(".food");
let foodInTube = document.querySelector(".foodInTube");
let foodInTubeImg = foodInTube.querySelector("img");
let foodInTubeImgCon = foodInTube.querySelector(".imgCon");
let aboutTubeFood = document.querySelector(".aboutTubeFood");
let soylentFood = document.querySelector(".soylentFood");
let soylentFoodImg = soylentFood.querySelector("img");
let soylentFoodImgCon = soylentFood.querySelector(".imgCon");
let aboutSoylentFood = document.querySelector(".aboutSoylentFood");
let marsorollsFood = document.querySelector(".marsorollsFood");
let marsorollsFoodImg = marsorollsFood.querySelector("img");
let marsorollsFoodImgCon = marsorollsFood.querySelector(".imgCon");
let aboutMarsorollsFood = document.querySelector(".aboutMarsorollsFood");
let foodInformation = document.querySelector(".foodInformation");

choseFoodTypeContainer.addEventListener("click", function(event) {
    if (event.target.textContent === "Еда в тюбике" || event.target === foodInTubeImg || event.target === foodInTube) {
        soylentFoodImgCon.style.borderColor = "transparent";
        marsorollsFoodImgCon.style.borderColor = "transparent";

        foodInTubeImgCon.style.borderColor = "white";

        foodInformation.style.backgroundColor = "inherit";
        foodInformation.textContent = aboutTubeFood.textContent;
    }
    if (event.target.textContent === "Сойлент" || event.target === soylentFoodImg || event.target === soylentFood) {
        foodInTubeImgCon.style.borderColor = "transparent";
        marsorollsFoodImgCon.style.borderColor = "transparent";

        soylentFoodImgCon.style.borderColor = "white";

        foodInformation.style.backgroundColor = "inherit";
        foodInformation.textContent = aboutSoylentFood.textContent;
    }
    if (event.target.textContent === "Марсороллы" || event.target === marsorollsFoodImg || event.target === marsorollsFood) {
        soylentFoodImgCon.style.borderColor = "transparent";
        foodInTubeImgCon.style.borderColor = "transparent";

        marsorollsFoodImgCon.style.borderColor = "white";

        foodInformation.style.backgroundColor = "inherit";
        foodInformation.textContent = aboutMarsorollsFood.textContent;
    }
})

$('.food').on('mousemove', (event) => {
    const x = event.pageX / $(window).width();
    const y = event.pageY / $(window).height();

    $('.toothpaste').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
    $('.apple').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
});

let goToBaggage = document.querySelector(".goToBaggage");
let baggage = document.querySelector(".baggage");

goToBaggage.addEventListener("click", function() {
    food.style.display = "none";
    baggage.style.display = "block";
})

let choseBaggageTypeContainer = document.querySelector(".choseBaggageTypeContainer");
let nanosack = document.querySelector(".nanosack");
let nanosackImg = nanosack.querySelector("img");
let nanosackImgCon = nanosack.querySelector(".imgCon");
let aboutNanosack = document.querySelector(".aboutNanosack");
let roboticBaggage = document.querySelector(".roboticBaggage");
let roboticBaggageImg = roboticBaggage.querySelector("img");
let roboticBaggageImgCon = roboticBaggage.querySelector(".imgCon");
let aboutRoboticBaggage = document.querySelector(".aboutRoboticBaggage");
let luggageShuttle = document.querySelector(".luggageShuttle");
let luggageShuttleImg = luggageShuttle.querySelector("img");
let luggageShuttleImgCon = luggageShuttle.querySelector(".imgCon");
let aboutLuggageShuttle = document.querySelector(".aboutLuggageShuttle");
let baggageInformation = document.querySelector(".baggageInformation");

choseBaggageTypeContainer.addEventListener("click", function(event) {
    if (event.target.textContent === "Нанорюкзак с собой" || event.target === nanosackImg || event.target === nanosack) {
        roboticBaggageImgCon.style.borderColor = "transparent";
        luggageShuttleImgCon.style.borderColor = "transparent";

        nanosackImgCon.style.borderColor = "white";

        baggageInformation.style.backgroundColor = "inherit";
        baggageInformation.textContent = aboutNanosack.textContent;
    }
    if (event.target.textContent === "Робобагаж" || event.target === roboticBaggageImg || event.target === roboticBaggage) {
        nanosackImgCon.style.borderColor = "transparent";
        luggageShuttleImgCon.style.borderColor = "transparent";

        roboticBaggageImgCon.style.borderColor = "white";

        baggageInformation.style.backgroundColor = "inherit";
        baggageInformation.textContent = aboutRoboticBaggage.textContent;
    }
    if (event.target.textContent === "Прицепной багажный шатл" || event.target === luggageShuttleImg || event.target === luggageShuttle) {
        nanosackImgCon.style.borderColor = "transparent";
        roboticBaggageImgCon.style.borderColor = "transparent";

        luggageShuttleImgCon.style.borderColor = "white";

        baggageInformation.style.backgroundColor = "inherit";
        baggageInformation.textContent = aboutLuggageShuttle.textContent;
    }
})

$('.baggage').on('mousemove', (event) => {
    const x = event.pageX / $(window).width();
    const y = event.pageY / $(window).height();

    $('.paste').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
    $('.sock').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
});

let goToPersonalInformationContainer = document.querySelector(".goToPersonalInformationContainer");
let personalInformation = document.querySelector(".personalInformation");

goToPersonalInformationContainer.addEventListener("click", function() {
    baggage.style.display = "none";
    personalInformation.style.display = "block";
})

let personalName = document.querySelector(".personalName");
let personalSurname = document.querySelector(".personalSurname");
let spaseSuitSizeContainer = document.querySelector(".spaseSuitSizeContainer");
let spaseSuitSize = document.querySelector(".spaseSuitSize");
let spaseSuitsSizing = document.querySelector(".spaseSuitsSizing");
let chosenSpaseSuitSize = document.querySelector(".chosenSpaseSuitSize");
let cursor4 = document.querySelector(".cursor4");

$('.personalInformation').on('mousemove', (event) => {
    const x = event.pageX / $(window).width();
    const y = event.pageY / $(window).height();

    $('.boots').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
    $('.blaster').css(
        'transform',
        'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
    );
});

spaseSuitSizeContainer.addEventListener("click", function() {
    cursor4.style.transform = "rotate(-180deg)";
    cursor4.style.transition = "color .3s,rotate .3s,transform .2s linear";

    spaseSuitsSizing.style.display = "block";

    let screenWidth =  screen.width;
    if (screenWidth < 320) {
        personalInformation.style.paddingBottom = "23.05%";
    }
    if (screenWidth == 320) {
        personalInformation.style.paddingBottom = "50%";
    }
})

spaseSuitsSizing.addEventListener("click", function(event) {
    chosenSpaseSuitSize.textContent = event.target.textContent;
})

let bookNow = document.querySelector(".bookNow");
let ticketForTravel = document.querySelector(".ticketForTravel");
let travelDate = document.querySelector(".travelDate");

bookNow.addEventListener("click", function() {
    nav.style.display = "none";
    personalInformation.style.display = "none";
    ticketForTravel.style.display = "block";

    travelDate.textContent = choseDate.textContent;
    document.body.style.backgroundImage = "url(https://s7.cpeople.ru/assets/images/final-screen/evr.jpg)";
})

let cabinTypeContainerInformation = document.querySelector(".cabinTypeContainerInformation");
let whence = document.querySelector(".whence");
let whither = document.querySelector(".whither");
let travelDateContainerInformation = document.querySelector(".travelDateContainerInformation");
let travelTypeContainerInformation = document.querySelector(".travelTypeContainerInformation");
let foodContainerInformation = document.querySelector(".foodContainerInformation");
let baggageContainerInformation = document.querySelector(".baggageContainerInformation");

nav.addEventListener("click", function(event) {
    cabin.style.display = "none";
    travelType.style.display = "none";
    food.style.display = "none";
    baggage.style.display = "none";
    nav.style.display = "none";
    if (event.target === whence || whither || travelDateContainerInformation) {
        mainScreen.style.display = "block";
    }
    if (event.target === cabinTypeContainerInformation || event.target.textContent === "Тип кабины") {
        nav.style.display = "flex";
        cabin.style.display = "block";
        mainScreen.style.display = "none";
    }
    if (event.target === travelTypeContainerInformation || event.target.textContent === "Тип перелёта") {
        nav.style.display = "flex";
        travelType.style.display = "block";
        mainScreen.style.display = "none";
    }
    if (event.target === foodContainerInformation || event.target.textContent === "Питание") {
        nav.style.display = "flex";
        food.style.display = "block";
        mainScreen.style.display = "none";
    }
    if (event.target === baggageContainerInformation || event.target.textContent === "Багаж") {
        nav.style.display = "flex";
        baggage.style.display = "block";
        mainScreen.style.display = "none";
    }
})

window.onclick = function(event) {
    if (event.target !== choseTravelPlanetContainer) {
        planets.style.display = "none";
        cursor1.style.transform = "rotate(1deg)";
        cursor1.style.transition = "color .3s,rotate .3s,transform .2s linear";
        choseTravelPlanetContainer.style.borderColor = "gray";
    }
    if (event.target !== choseDateContainer) {
        datesContainer.style.display = "none";
        cursor2.style.transform = "rotate(1deg)";
        cursor2.style.transition = "color .3s,rotate .3s,transform .2s linear";
        choseDateContainer.style.borderColor = "gray";
    }
    if (event.target !== spaseSuitSizeContainer) {
        spaseSuitsSizing.style.display = "none";
        cursor4.style.transform = "rotate(1deg)";
        cursor4.style.transition = "color .3s,rotate .3s,transform .2s linear";
        personalInformation.style.paddingBottom = "12%";
    }
}
