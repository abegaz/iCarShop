const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');
// create element and render cafe

function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'X';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    cafeList.appendChild(li);
// deleting data
cross.addEventListener('click', (e) =>{
    //stops continous propagation of the event (optional but prevents errors)
    e.stopPropagation();
    //grabs attribute tied to UI element (which is also connected to Firebase ID)
    let id = e.target.parentElement.getAttribute('data-id');
    //queries firestore and deletes that id
    db.collection('cafes').doc(id).delete();

})
}


//where method is used for searching 
// db.collection('cafes').where().get().then((
// ex: where('city', '==' , 'manchester'), is case sensitive

// orderBy('name').
// used to order alphabetically, is also case sensitive, capital letters will precide lower case
// can be combined with where method
// needs an index to be added to firebase database, can be automatically done through console in browser


// OLD GET DATA METHOD (not realtime)
// db.collection('cafes').get().then((snapshot)=> {
//    snapshot.docs.forEach(doc => {
//        renderCafe(doc);
//
//   })


//})

// saving data
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value


    })
    // emptying fields after an entry
    form.name.value = '';
    form.city.value = '';

} )

// new get method, realtime listener
db.collection('cafes').onSnapshot(snapshot => {
    // detects changes in the database
    let changes = snapshot.docChanges();
    // outputs changes to console for tracking
    console.log(changes);
    //cycles through changes and either passes them to db or to doc
    changes.forEach(change =>{
        //console log 
        console.log(change.doc.data());
        // reloads for additions
        if(change.type == 'added'){
            renderCafe(change.doc);
        // updates DB and removes id
        } else if (change.type == 'removed'){
            let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
            cafeList.removeChild(li);
        }

    })

})
// example of updating a document field
//  db.collection('cafes').doc('INSERT ID OF OBJECT TO BE UPDATED').update({city: 'New York'}) 