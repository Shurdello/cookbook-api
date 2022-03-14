console.log('dasf');

/*
const outcl = document.querySelector('.sss');
const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
let ukuono = [];
let cena = [];
fetchData();

function fetchData() {
    fetch(url).then(function(rep) {
        return rep.json();
    }).then(function(data) {
        console.log(data);
        let dalabu = data.map(function(el) {
            console.log(el.name);
            el.price;
            return el.name + " - " + el.price;
        })
        console.log(dalabu);
        outcl.innerHTML = dalabu;
    })
}

const dugme = document.querySelector('.navbut');
const recept = document.querySelector('.clanak');
const prikaz = document.querySelector('.sss');
const url = 'https://api.jsonbin.io/b/622cd716a703bb674929d6d9';
let izborSupa = [];
let supeSastojci = [];

fetchData();

function fetchData() {
    fetch(url).then(function(rep) {
        return rep.json();
    }).then(function(data) {
        console.log(data);
        for (let i = 0; i < data.cookbook.soup.length; i++) {
            supeImena += " " + data.cookbook.soup[i].name;
            supeSastojci += " " + data.cookbook.soup[i].ingredients;
            let supe = data.cookbook.soup.map(function(el) {
                return el.name + " " + " " + el.ingredients;
            })
            prikaz.innerHTML = data.cookbook.soup[2].preparation;
        }
    })
}

let supiske = document.querySelector('.soup');
let supe = [];
dugme.addEventListener('click', () => {
    fetchData();
    function fetchData() {
        fetch(url).then(function(rep) {
            return rep.json();
        }).then(function(data) {
            console.log(data);
            for (let i = 0; i < data.cookbook.soup.length; i++) {
                supe += " " + data.cookbook.soup[i].name;
                console.log(supe);
                recept.innerHTML = supe;
            }
            

        })
    }
});
*/
const overlaj = document.getElementById('overlay');
const sveSupe = document.querySelector('.soups');
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
  });
  

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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
            
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
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
            prikaz.innerHTML = sastojci + "\n" + preparacija + "\n" + servis;
        })
});

prikaz.addEventListener('click', function() {
    off();
    prikaz.classList.toggle('hidden');
    console.log('jebatga');
});