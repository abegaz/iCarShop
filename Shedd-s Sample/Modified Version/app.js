const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');
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
    let pic = document.createElement('span');
    let cross = document.createElement('div');
    let stats = document.createElement('div')

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
    pic.textContent = "PICTURE HERE";
    pic.className = "photo";
    cross.textContent = "X";
    cross.className = "cross";
    stats.className = "stats_section";

    li.appendChild(pic);
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
    li.appendChild(stats);
    li.appendChild(cross);

    cafeList.appendChild(li);
// deleting data
cross.addEventListener('click', (e) =>{
    //stops continous propagation of the event (optional but prevents errors)
    e.stopPropagation();
    //grabs attribute tied to UI element (which is also connected to Firebase ID)
    let id = e.target.parentElement.getAttribute('data-id');
    //queries firestore and deletes that id
    db.collection('vehicles').doc(id).delete();

})
}

// getting data
//where method is used for searching 
// db.collection('cafes').where().get().then((
// ex: where('city', '==' , 'manchester'), is case sensitive
db.collection('vehicles').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);

    })


})

// saving data
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('vehicles').add({
        vin: form.vin.value,
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        body: form.body.value,
        price: form.price.value,
        mileage: form.mileage.value,
        interior_color: form.interior_color.value,
        exterior_color: form.exterior_color.value,
        used: form.used.value


    })
    // emptying fields after an entry
    form.vin.value = '';
    form.make.value = '';
    form.model.value = '';
    form.year.value = '';
    form.body.value = '';
    form.price.value = '';
    form.mileage.value = '';
    form.interior_color.value = '';
    form.exterior_color.value = '';
    form.used.value = '';

} )