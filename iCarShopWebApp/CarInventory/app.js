const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');
const form2 = document.querySelector('#searchbar');
// create element and render cafe

function renderCafe(doc){
    let li = document.createElement('li');
    let make = document.createElement('span');
    let model = document.createElement('span');
    let year = document.createElement('span');
    let body = document.createElement('span');
    let price = document.createElement('span');
    let mileage = document.createElement('span');
    let interior_color = document.createElement('span');
    let exterior_color = document.createElement('span');
    let used = document.createElement('span');
    let vin = document.createElement('span');
    let stats = document.createElement('div');
    let img = show_image(doc.data().image, 75,75,'Photo');

    function show_image(image_source, width, height,alt) {
        let image = document.createElement('img');
        image.src = image_source;
        image.width = width;
        image.height = height;
        image.alt = alt;
        return image;
    }


    li.setAttribute('data-id', doc.id);
    make.textContent = "Make: " + doc.data().make;
    model.textContent = "Model: " + doc.data().model;
    year.textContent = "Year: " + doc.data().year;
    body.textContent = "Body type: " + doc.data().body;
    price.textContent = "Price: " + doc.data().price;
    mileage.textContent = "Mileage: " + doc.data().mileage;
    interior_color.textContent = "Int. Color: " + doc.data().interior_color;
    exterior_color.textContent = "Ext. Color: " + doc.data().exterior_color;
    used.textContent = "New/Used: " + doc.data().used;
    vin.textContent = "VIN: " + doc.data().vin;
    stats.className = "stats_section";


    stats.appendChild(make);
    stats.appendChild(model);
    stats.appendChild(year);
    stats.appendChild(body);
    stats.appendChild(price);
    stats.appendChild(mileage);
    stats.appendChild(interior_color);
    stats.appendChild(exterior_color);
    stats.appendChild(used);
    stats.appendChild(vin);
    li.appendChild(img);
    li.appendChild(stats);

    cafeList.appendChild(li);
// deleting data
/*cross.addEventListener('click', (e) =>{
    //stops continous propagation of the event (optional but prevents errors)
    e.stopPropagation();
    //grabs attribute tied to UI element (which is also connected to Firebase ID)
    let id = e.target.parentElement.getAttribute('data-id');
    //queries firestore and deletes that id
    db.collection('vehicles').doc(id).delete();

})*/
}

// getting data
//where method is used for searching 
// db.collection('cafes').where().get().then((
// ex: where('city', '==' , 'manchester'), is case sensitive
window.onload = load();

function load() 
{
    document.getElementById("cafe-list").innerHTML = "";
    if (form.make.value != '' ||
    form.model.value != '' ||
    form.year.value != '' ||
    form.body.value != '' ||
    form.price.value != '' ||
    form.mileage.value != '' ||
    form.interior_color.value != '' ||
    form.exterior_color.value != '' ||
    form.used.value != '')
    {
        var searchArray = [];
        if (form.make.value != '')
        {
            searchArray.push(['make',form.make.value]);
        }
        if (form.model.value != '')
        {
            searchArray.push(['model',form.model.value]);
        }
        if (form.year.value != '')
        {
            searchArray.push(['year',form.year.value]);
        }
        if (form.body.value != '')
        {
            searchArray.push(['body',form.body.value]);
        }
        if (form.price.value != '')
        {
            searchArray.push(['price',form.price.value]);
        }
        if (form.mileage.value != '')
        {
            searchArray.push(['mileage',form.mileage.value]);
        }
        if (form.interior_color.value != '')
        {
            searchArray.push(['interior_color',form.interior_color.value]);
        }
        if (form.exterior_color.value != '')
        {
            searchArray.push(['exterior_color',form.exterior_color.value]);
        }
        if (form.used.value != '')
        {
            searchArray.push(['used',form.used.value]);
        }   

        if (searchArray.length == 1)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }
        if (searchArray.length == 2)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).where(searchArray[1][0],'==', searchArray[1][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }
        if (searchArray.length == 3)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).where(searchArray[1][0],'==', searchArray[1][1]).where(searchArray[2][0],'==', searchArray[2][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }
        if (searchArray.length == 4)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).where(searchArray[1][0],'==', searchArray[1][1]).where(searchArray[2][0],'==', searchArray[2][1]).where(searchArray[3][0],'==', searchArray[3][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }
        if (searchArray.length == 5)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).where(searchArray[1][0],'==', searchArray[1][1]).where(searchArray[2][0],'==', searchArray[2][1]).where(searchArray[3][0],'==', searchArray[3][1]).where(searchArray[4][0],'==', searchArray[4][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }
        if (searchArray.length == 6)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).where(searchArray[1][0],'==', searchArray[1][1]).where(searchArray[2][0],'==', searchArray[2][1]).where(searchArray[3][0],'==', searchArray[3][1]).where(searchArray[4][0],'==', searchArray[4][1]).where(searchArray[5][0],'==', searchArray[5][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }
        if (searchArray.length == 7)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).where(searchArray[1][0],'==', searchArray[1][1]).where(searchArray[2][0],'==', searchArray[2][1]).where(searchArray[3][0],'==', searchArray[3][1]).where(searchArray[4][0],'==', searchArray[4][1]).where(searchArray[5][0],'==', searchArray[5][1]).where(searchArray[6][0],'==', searchArray[6][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }
        if (searchArray.length == 8)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).where(searchArray[1][0],'==', searchArray[1][1]).where(searchArray[2][0],'==', searchArray[2][1]).where(searchArray[3][0],'==', searchArray[3][1]).where(searchArray[4][0],'==', searchArray[4][1]).where(searchArray[5][0],'==', searchArray[5][1]).where(searchArray[6][0],'==', searchArray[6][1]).where(searchArray[7][0],'==', searchArray[7][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }
        if (searchArray.length == 9)
        {
            db.collection('vehicles').where(searchArray[0][0],'==', searchArray[0][1]).where(searchArray[1][0],'==', searchArray[1][1]).where(searchArray[2][0],'==', searchArray[2][1]).where(searchArray[3][0],'==', searchArray[3][1]).where(searchArray[4][0],'==', searchArray[4][1]).where(searchArray[5][0],'==', searchArray[5][1]).where(searchArray[6][0],'==', searchArray[6][1]).where(searchArray[7][0],'==', searchArray[7][1]).where(searchArray[8][0],'==', searchArray[8][1]).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
        }

        

       
    }
    else
    {
      db.collection('vehicles').get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

    })

    })  
    }
}

// loading data
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    load();

})

form2.addEventListener('submit',(e) =>{
    e.preventDefault();
    document.getElementById("cafe-list").innerHTML = "";
    if (form2.content.value == "")
    {
        load();
    }
    else
    {
    db.collection('vehicles').where('vin','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('make','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('model','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('year','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('price','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('body','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('mileage','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('interior_color','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('exterior_color','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    db.collection('vehicles').where('used','==', form2.content.value).get().then((snapshot)=> {
        snapshot.docs.forEach(doc => {
        renderCafe(doc);

            })

            })
    }
})
