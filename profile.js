//const favoriteColorBtn = document.querySelector("#color");
//const favoritePlaceBtn = document.querySelector("#place");
//const favoriteRitualBtn = document.querySelector("#ritual)");

//function color (event){
   // event.preventDefault();
   // alert('Blue');
//}
    //favoriteColorBtn.addEventListener('click', color;

    //function place (event){
     //   event.preventDefault();
        //alert('Napa Valley')
   // }

   // favoritePlaceBtn.addEventListener('click', place);

    //function ritual (event){
        //event.preventDefault();
       // alert('Drink water right away when I wake up');
   // }

    //favoriteRitualBtn.addEventListener('click', ritual);

    const profileBtns = document.querySelectorAll("button");

profileBtns.forEach(btn) => {
    btn.addEventListner("click", (event) => {
        let favorite = "";
        switch (event.target.id) {
            case "color":
                favorite = "Blue";
                break; 
                case "place":
                    favorite = "Napa Valley";
                    break;
                    case "ritual":
                        favorite = "Drinking water right after I wake up";
                        break;
        }
        alert(`My Favorite ${event.target.id} is ${favorite}`);
    })
}





