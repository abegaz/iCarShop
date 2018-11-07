const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-car-form');
// create element and render cafe

/*function renderCafe(doc){
    let li = document.createElement('li');
    let vin = document.createElement('span');
    let make = document.createElement('span');
    let model = document.createElement('span');
    let year = document.createElement('span');
    let body = document.createElement('span');
    let price = document.createElement('span');
    let mileage = document.createElement('span');
    let interior_color = document.createElement('span');
    let exterior_color = document.createElement('span');
    let used = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    vin.textContent = doc.data().vin;
    make.textContent = doc.data().make;
    model.textContent = doc.data().model;
    year.textContent = doc.data().year;
    body.textContent = doc.data().body_type;
    price.textContent = doc.data().price;
    mileage.textContent = doc.data().mileage;
    interior_color.textContent = doc.data().interior_color;
    exterior_color.textContent = doc.data().exterior_color;
    used.textContent = doc.data().condition;
    cross.textContent = 'X';

    li.appendChild(vin);
    li.appendChild(make);
    li.appendChild(model);
    li.appendChild(year);
    li.appendChild(body);
    li.appendChild(price);
    li.appendChild(mileage);
    li.appendChild(interior_color);
    li.appendChild(exterior_color);
    li.appendChild(used);
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
}*/

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
        body: form.body_type.value,
        price: form.price.value,
        mileage: form.mileage.value,
        interior_color: form.interior_color.value,
        exterior_color: form.exterior_color.value,
        used: form.condition.value


    })
    // emptying fields after an entry
    form.vin.value = '';
    form.make.value = '';
    form.model.value = '';
    form.year.value = '';
    form.body_type.value = '';
    form.price.value = '';
    form.mileage.value = '';
    form.interior_color.value = '';
    form.exterior_color.value = '';
    form.condition.value = '';

} )