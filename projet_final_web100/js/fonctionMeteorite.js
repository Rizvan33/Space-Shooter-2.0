function lien_meteorite() {
	let meteorite = Math.floor(4 * Math.random());
	if (meteorite == 0) {
		return "../images/meteorite/meteorBrown_small1.png";
	} else if (meteorite == 1) {
		return "../images/meteorite/meteorBrown_med3.png";
	} else if (meteorite == 2) {
		return "../images/meteorite/meteorBrown_big3.png";
	} else {
		return "../images/meteorite/meteorBrown_big4.png";
	}

}



function taille_meteorite() {
	let meteorite = Math.floor(4 * Math.random());
	if (meteorite == 0) {
		return 20;
	} else if (meteorite == 1) {
		return 30;
	} else if (meteorite == 2) {
		return 40;
	} else {
		return 50;
	}

}

function nbVie(size) {
	return size / 10;
}


function coordonneMeteorire(world, x, y) {
	if (world.niveau > 0) {
		return [x * 10, 1];
	}
	if (world.niveau > 3) {
		return [1, y * 10];
	}
	if (world.niveau > 5) {
		return [1, y * 10];
	}
	if (world.niveau > 8) {
		return [600, y * 10];
	}
}

function newMeteorite(world) {
	let coordonne = coordonneMeteorire(world, coordonneAleatoire(42), coordonneAleatoire(42));
	let lien = lien_meteorite();
	let size = taille_meteorite();
	let nb_vie = nbVie(size);
	return new Meteorites(coordonne[0], coordonne[1], world.vitesse_enemies, view(lien), world.niveau, size, size, nb_vie);
}
