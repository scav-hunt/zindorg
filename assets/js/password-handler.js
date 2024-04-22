/**
 * has dropdown/button linked to yml file that only pops up when
 * exact correct password is entered (javascript corrects to allcaps
 * and no whitespace)
 */

    function submitPromoCode(passwords) {
        console.log(passwords);
        //format is ["password": PWD, "slug": SLUG]
        let pwdInput = document.getElementById("passwordInput");
        let input = pwdInput.value;
        console.log(input);
        let clean = input.toUpperCase();
        console.log(clean);
        clean = clean.replace(/\s/g, '');
        console.log(clean);
        for (pwd in passwords) {
            if (clean == pwd.password) {
                console.log("match!");
            }
        }
    }

// window.onload = function () {
//     let pwdInput = document.getElementById("passwordInput");

//     pwdInput.addEventListener('input change keyup', inputChanged());

//     window.onkeyup = inputChanged();

//     function inputChanged() {
//         let input = pwdInput.value;
//         console.log(input);

//         if (input != "") {
//             let clean = input.toUpperCase();
//             clean.replaceAll(' ','');
//             console.log(clean);
//         }
//         //take input and internally capitalize and remove spaces
//     }
// }