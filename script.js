
const overlaj = document.getElementById('overlay');
const entreeButton = document.querySelector('.main');
const sveSupe = document.querySelector('.soups');
const allAppetizers = document.querySelector('.appetizer');
const mainCourse = document.querySelector('.entree');
const supe = document.querySelector('.soup');
let prikaz = document.querySelector('.prikazSupe');
const url = 'https://api.jsonserve.com/4QA0Ty';

const fennel = document.getElementById('fennel');
const barli = document.getElementById('barley');
const carrota = document.getElementById('carrot');
const lobster = document.getElementById('lobster');
const alsace = document.getElementById('alsace');
const onion = document.getElementById('onion');
const orange = document.getElementById('orange');
const bean = document.getElementById('bean');
const broc = document.getElementById('broc');
const cauli = document.getElementById('cauli');
const corn = document.getElementById('corn');
const appetit = document.querySelector('.appetizer');

const appetizers = document.querySelector('.appetizers');
const duck = document.getElementById('duck');
const liver = document.getElementById('liver');
const snails = document.getElementById('snails');
const stuffedOnion = document.getElementById('stuff-onion');
const shrimp = document.getElementById('shrimp');
const blinis = document.getElementById('blinis');
const hamRolls = document.getElementById('ham-roll');
const celery = document.getElementById('celery');
const tartarSalmon = document.getElementById('tarsal');
const spinachTart = document.getElementById('spitart');
const phylo = document.getElementById('phylo');

const entree = document.querySelector('entree');
const coq = document.getElementById('coq');
const westfalisher =  document.getElementById('westf');
const flamande = document.getElementById('flamande');
const roulade = document.getElementById('roulade');
const koenig = document.getElementById('koenig');
const turkey = document.getElementById('turkey');
const cellEscalope = document.getElementById('celescalope');
const entrecote = document.getElementById('entrecote');
const marnier = document.getElementById('marnier');
const beefburg = document.getElementById('beefburg');
const butterFish = document.getElementById('butterfish');

const desserts = document.querySelector('.desserts');
const hazel = document.getElementById('hazel');
const carcake = document.getElementById('carcake');
const flan = document.getElementById('flan');
const chipolata = document.getElementById('chipolata');
const crumble = document.getElementById('crumble');
const babaurum = document.getElementById('babaurum');
const buisc = document.getElementById('buisc');
const hemd = document.getElementById('hemd');
const chorulade =  document.getElementById('chorulade');
const bbpie = document.getElementById('bbpie');




function clearAll() {
    sveSupe.style.display = "none";
    prikaz.style.display = "none";
}

// OVERLAY
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }


  supe.addEventListener('click', function() {
      prikaz.classList.add('hidden');
      off()
      sveSupe.style.display = "block";
      appetizers.style.display = 'none';
      mainCourse.style.display = 'none';
  });
  
  allAppetizers.addEventListener('click', function() {
    prikaz.classList.add('hidden');
    off()
    console.log('appetizer works');
    appetizers.style.display = 'block';
    sveSupe.style.display = 'none';
    mainCourse.style.display = 'none';
});

entreeButton.addEventListener('click', function() {
    prikaz.classList.add('hidden');
    off();
    console.log('entree works');
    mainCourse.style.display = 'block';
    sveSupe.style.display = 'none';
    appetizers.style.display = 'none';
})

// SOUPS

fennel.addEventListener('click', function() {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[0].ingredients);
            const sastojci = data.cookbook.soup[0].ingredients;
            const preparacija = data.cookbook.soup[0].preparation;
            const servis = data.cookbook.soup[0].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
            
        })
})


barli.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[1].ingredients);
            const sastojci = data.cookbook.soup[1].ingredients;
            const preparacija = data.cookbook.soup[1].preparation;
            const servis = data.cookbook.soup[1].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

carrota.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[2].ingredients);
            const sastojci = data.cookbook.soup[2].ingredients;
            const preparacija = data.cookbook.soup[2].preparation;
            const servis = data.cookbook.soup[2].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

lobster.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[3].ingredients);
            const sastojci = data.cookbook.soup[3].ingredients;
            const preparacija = data.cookbook.soup[3].preparation;
            const servis = data.cookbook.soup[3].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

alsace.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[4].ingredients);
            const sastojci = data.cookbook.soup[4].ingredients;
            const preparacija = data.cookbook.soup[4].preparation;
            const servis = data.cookbook.soup[4].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

onion.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[5].ingredients);
            const sastojci = data.cookbook.soup[5].ingredients;
            const preparacija = data.cookbook.soup[5].preparation;
            const servis = data.cookbook.soup[5].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

orange.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[7].ingredients);
            const sastojci = data.cookbook.soup[7].ingredients;
            const preparacija = data.cookbook.soup[7].preparation;
            const servis = data.cookbook.soup[7].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

bean.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[6].ingredients);
            const sastojci = data.cookbook.soup[6].ingredients;
            const preparacija = data.cookbook.soup[6].preparation;
            const servis = data.cookbook.soup[6].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

broc.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[8].ingredients);
            const sastojci = data.cookbook.soup[8].ingredients;
            const preparacija = data.cookbook.soup[8].preparation;
            const servis = data.cookbook.soup[8].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

cauli.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[9].ingredients);
            const sastojci = data.cookbook.soup[9].ingredients;
            const preparacija = data.cookbook.soup[9].preparation;
            const servis = data.cookbook.soup[9].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

corn.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.soup[10].ingredients);
            const sastojci = data.cookbook.soup[10].ingredients;
            const preparacija = data.cookbook.soup[10].preparation;
            const servis = data.cookbook.soup[10].servings;
            document.querySelector(".soups").style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

prikaz.addEventListener('click', function() {
    off();
    prikaz.classList.toggle('hidden');
    console.log('works');
});


// APPETIZERS

duck.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[0].ingredients);
            const sastojci = data.cookbook.appetizers[0].ingredients;
            const preparacija = data.cookbook.appetizers[0].preparation;
            const servis = data.cookbook.appetizers[0].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

liver.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[1].ingredients);
            const sastojci = data.cookbook.appetizers[1].ingredients;
            const preparacija = data.cookbook.appetizers[1].preparation;
            const servis = data.cookbook.appetizers[1].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

snails.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[2].ingredients);
            const sastojci = data.cookbook.appetizers[2].ingredients;
            const preparacija = data.cookbook.appetizers[2].preparation;
            const servis = data.cookbook.appetizers[2].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

stuffedOnion.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[3].ingredients);
            const sastojci = data.cookbook.appetizers[3].ingredients;
            const preparacija = data.cookbook.appetizers[3].preparation;
            const servis = data.cookbook.appetizers[3].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

shrimp.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[4].ingredients);
            const sastojci = data.cookbook.appetizers[4].ingredients;
            const preparacija = data.cookbook.appetizers[4].preparation;
            const servis = data.cookbook.appetizers[4].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

blinis.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[4].ingredients);
            const sastojci = data.cookbook.appetizers[4].ingredients;
            const preparacija = data.cookbook.appetizers[4].preparation;
            const servis = data.cookbook.appetizers[4].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

hamRolls.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[5].ingredients);
            const sastojci = data.cookbook.appetizers[5].ingredients;
            const preparacija = data.cookbook.appetizers[5].preparation;
            const servis = data.cookbook.appetizers[5].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

celery.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[6].ingredients);
            const sastojci = data.cookbook.appetizers[6].ingredients;
            const preparacija = data.cookbook.appetizers[6].preparation;
            const servis = data.cookbook.appetizers[6].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

tartarSalmon.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[7].ingredients);
            const sastojci = data.cookbook.appetizers[7].ingredients;
            const preparacija = data.cookbook.appetizers[7].preparation;
            const servis = data.cookbook.appetizers[7].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

spinachTart.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[8].ingredients);
            const sastojci = data.cookbook.appetizers[8].ingredients;
            const preparacija = data.cookbook.appetizers[8].preparation;
            const servis = data.cookbook.appetizers[8].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

phylo.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.appetizers[9].ingredients);
            const sastojci = data.cookbook.appetizers[9].ingredients;
            const preparacija = data.cookbook.appetizers[9].preparation;
            const servis = data.cookbook.appetizers[9].servings;
            appetizers.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

// MAIN COURSE

coq.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[0].ingredients);
            const sastojci = data.cookbook.mainCourse[0].ingredients;
            const preparacija = data.cookbook.mainCourse[0].preparation;
            const servis = data.cookbook.mainCourse[0].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

westfalisher.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[1].ingredients);
            const sastojci = data.cookbook.mainCourse[1].ingredients;
            const preparacija = data.cookbook.mainCourse[1].preparation;
            const servis = data.cookbook.mainCourse[1].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

flamande.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[2].ingredients);
            const sastojci = data.cookbook.mainCourse[2].ingredients;
            const preparacija = data.cookbook.mainCourse[2].preparation;
            const servis = data.cookbook.mainCourse[2].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

roulade.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[3].ingredients);
            const sastojci = data.cookbook.mainCourse[3].ingredients;
            const preparacija = data.cookbook.mainCourse[3].preparation;
            const servis = data.cookbook.mainCourse[3].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

koenig.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[4].ingredients);
            const sastojci = data.cookbook.mainCourse[4].ingredients;
            const preparacija = data.cookbook.mainCourse[4].preparation;
            const servis = data.cookbook.mainCourse[4].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

turkey.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[5].ingredients);
            const sastojci = data.cookbook.mainCourse[5].ingredients;
            const preparacija = data.cookbook.mainCourse[5].preparation;
            const servis = data.cookbook.mainCourse[5].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

cellEscalope.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[6].ingredients);
            const sastojci = data.cookbook.mainCourse[6].ingredients;
            const preparacija = data.cookbook.mainCourse[6].preparation;
            const servis = data.cookbook.mainCourse[6].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

entrecote.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[7].ingredients);
            const sastojci = data.cookbook.mainCourse[7].ingredients;
            const preparacija = data.cookbook.mainCourse[7].preparation;
            const servis = data.cookbook.mainCourse[7].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

marnier.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[8].ingredients);
            const sastojci = data.cookbook.mainCourse[8].ingredients;
            const preparacija = data.cookbook.mainCourse[8].preparation;
            const servis = data.cookbook.mainCourse[8].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

beefburg.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[9].ingredients);
            const sastojci = data.cookbook.mainCourse[9].ingredients;
            const preparacija = data.cookbook.mainCourse[9].preparation;
            const servis = data.cookbook.mainCourse[9].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

butterFish.addEventListener('click', function()  {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.cookbook.mainCourse[10].ingredients);
            const sastojci = data.cookbook.mainCourse[10].ingredients;
            const preparacija = data.cookbook.mainCourse[10].preparation;
            const servis = data.cookbook.mainCourse[10].servings;
            mainCourse.style.display = "none";
            on();
            prikaz.classList.toggle('hidden');
            prikaz.innerHTML = sastojci + " - " + preparacija + " - " + servis;
        })
});

