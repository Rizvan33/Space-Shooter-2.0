function lost_in_space(configuration) {
	let world = initializeWorld(configuration);
	window.setInterval(function () {

		if (condition_arret(world, configuration)) {
			gameLoop(world);
		} else {
			fin_partie(world)
		}
	}, 1000.0 / 60.0);
}

function condition_arret(world, configuration) {
	if (configuration.mode_jeu === "classique" || configuration.mode_jeu === "survivant") {
		if (world.vie.nombre_vie > 0) {
			return true;
		} else {
			return false;
		}
	}
	if (configuration.mode_jeu === "contre_la_montre") {
		if (world.vie.nombre_vie > 0 && world.temp_total > 0) {
			return true;
		} else {
			return false;
		}
	}

}

function initializeWorld(configuration) {

	let world = {};
	world.time = 0;
	world.width_missile = configuration.width_missile;
	world.heigth_missile = configuration.heigth_missile;
	world.image_missile = configuration.laser;
	world.player = new Player(300, 550, 400, true, configuration.vaisseau);
	world.super_missile = new Super_missile(568, 530, 3, view("../images/lasers/laserGreen06.png"));
	world.key = new KeyboardManager()
	world.key.update(world);
	world.niveau = 1;
	world.nombre_enemies = 5;
	world.vitesse_enemies = 2;
	world.enemies = new Set();
	world.meteorites = new Set();
	world.enemies = initializeEnemies(world);
	world.missile = new Set();
	world.vie = new Vie(560, 560, 3, view("../images/autre/vie.png"), true);
	world.bonus = new Set();
	world.boss = new Set();
	world.lastUpdate = Date.now();
	world.temp_total = configuration.temp_total;

	world.mode_jeu = configuration.mode_jeu;

	return world;

}

function initializeEnemies(world) {

	for (var i = 0; i < world.nombre_enemies; i++) {
		// pour cree aleatoirement les enemies
		let j = Math.floor((42) * Math.random());
		let k = Math.floor((58) * Math.random());

		if (0 <= i && i < 5) {
			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("../images/enemies/ufoGreen.png"), 1, 1));

		} else if (5 <= i && i < 8) {

			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("../images/enemies/ufoGreen.png"), 2, 1));
		} else if (8 <= i && i < 11) {

			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("../images/enemies/ufoBlue.png"), 3, 2));

		} else if (11 <= i && i < 14) {

			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("../images/enemies/ufoBlue.png"), 4, 2));
		} else if (14 <= i && i < 17) {

			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("../images/enemies/ufoRed.png"), 5, 3));

		} else if (17 <= i && i < 20) {

			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("../images/enemies/ufoRed.png"), 6, 3));
		} else if (20 <= i && i < 23) {

			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("../images/enemies/ufoYellow.png"), 7, 4));

		} else if (23 <= i && i < 26) {

			world.enemies.add(new Enemie(k * 10, j * 10, -world.vitesse_enemies, view("../images/enemies/ufoYellow.png"), 8, 4));
		} else {

			world.enemies.add(new Enemie(k * 10, j * 10, world.vitesse_enemies, view("../images/enemies/enemyBlack5.png"), 9, 5));

		}

	}
	return world.enemies;
}

function coordonneAleatoire(x) {
	return Math.floor((x) * Math.random());
}


function lien_nom_bonus() {
	let bonus = Math.floor(3 * Math.random());
	if (bonus == 0) {
		return ["../images/bonus/star_gold.png", "score"];
	} else if (bonus == 1) {
		return ["../images/bonus/powerupRed_shield.png", "vie"];
	} else {
		return ["../images/bonus/powerupGreen_bolt.png", "super_missile"];
	}

}


function view(path) {
	let image = new Image();
	image.src = path;
	return image;
}

function dessine_contour(contexte) {

	contexte.strokeStyle = "white";
	contexte.fillStyle = "white";
	contexte.font = "30px Arial";
	contexte.strokeRect(0, 0, 600, 600)

}

function dessine_texte_niveau(contexte, world) {

	contexte.strokeStyle = "gray";
	contexte.fillStyle = "white";
	contexte.font = "30px Arial";
	contexte.fillText("Niveau " + world.niveau.toString(), 20, 580);

}

function dessine_texte_score(contexte, world) {

	contexte.strokeStyle = "gray";
	contexte.fillStyle = "white";
	contexte.font = "30px Arial";
	contexte.fillText("Score " + world.player.score.toString(), 20, 30);

}

function dessine_texte_temps(contexte, world) {
	contexte.strokeStyle = "gray";
	contexte.fillStyle = "white";
	contexte.font = "30px Arial";
	contexte.fillText("Temps " + Math.floor(world.temp_total).toString(), 400, 30);
}


function dessine_texte_vaissea_restant(contexte, world) {
	contexte.strokeStyle = "gray";
	contexte.fillStyle = "white";
	contexte.font = "30px Arial";
	contexte.fillText("Vaiseaux " + ("- " + world.enemies.size).toString(), 20, 65);
}


function fin_partie(world) {
	let contexte = document.getElementById('game_area').getContext('2d');
	// nettoie le canvas
	contexte.strokeStyle = "gray";
	contexte.fillStyle = "white";
	contexte.clearRect(0, 0, 600, 600);
	contexte.fillText("GAME OVER", 200, 200);
	contexte.fillText("Niveau " + world.niveau.toString(), 230, 300);
	contexte.fillText("Score " + world.player.score.toString(), 230, 400);
}





















