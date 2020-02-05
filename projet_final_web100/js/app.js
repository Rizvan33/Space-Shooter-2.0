document.forms["inscription"].addEventListener("submit", function (e) {
	var erreur;
	var inputs = this;
	
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
			break;
		}
	}
	if (inputs["mdp"].value != document.getElementById("mdp2").value) {
		erreur = "Les deux mot de passe ne correspondent pas";
	}
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Formulaire envoyé !');
	}
});
