const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-car-form');

db.collection('vehicles').get().then((snapshot)=> {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);

    })


})

// saving data
form.addEventListener('submit',(e) =>{
    e.preventDefault();

    var vin = form.vin.value;
    var make = form.make.value;
    var model = form.model.value;
    var year = form.year.value;
    var body_type = form.body_type.value;
    var price = form.price.value;
    var mileage = form.mileage.value;
    var int_color = form.interior_color.value;
    var ext_color = form.exterior_color.value;
    var condition = form.condition.value;

    var errorStr = ""

    if (vin == "")
    {
    	errorStr = errorStr + "Please enter a Vin Number.\n"
    }
    if (make == "")
    {
    	errorStr = errorStr + "Please enter a Make.\n"
    }
    if (model == "")
    {
    	errorStr = errorStr + "Please enter a Model.\n"
    }
    if (year == "")
    {
    	errorStr = errorStr + "Please enter a Year.\n"
    }
    if (isNaN(year))
    {
    	errorStr = errorStr + "The Year field must be a number."
    }
    if (body_type == "")
    {
    	errorStr = errorStr + "Please enter a Body Type.\n"
    }
    if (price == "")
    {
    	errorStr = errorStr + "Please enter a Price.\n"
    }
    if (isNaN(price))
    {
    	errorStr = errorStr + "The Price field must be a number."
    }
    if (mileage == "")
    {
    	errorStr = errorStr + "Please enter a Mileage.\n"
    }
    if (isNaN(mileage))
    {
    	errorStr = errorStr + "The Mileage field must be a number."
    }
    if (int_color == "")
    {
    	errorStr = errorStr + "Please enter an Interior Color.\n"
    }
    if (ext_color == "")
    {
    	errorStr = errorStr + "Please enter an Exterior Color.\n"
    }
    if (condition == "")
    {
    	errorStr = errorStr + "Please enter a Condition.\n"
    }
    if( document.getElementById("fileButton").files.length == 0 )
    {
    	errorStr = errorStr + "Please upload at least one file."
	}


    if (errorStr != "")
    {
    	alert(errorStr)
    }
    else
    {
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
}

} )
