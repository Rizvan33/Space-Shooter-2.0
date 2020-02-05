class Vie {

	constructor(x, y, nombre_vie, image) {
		this.x = x;
		this.y = y;
		this.image = image;
		this.nombre_vie = nombre_vie;
		this.width = 25;
		this.height = 25;


	}

	is_empty_enemies(world) {
		if (world.enemies.size === 0) {

			world.nombre_enemies += 5;
			world.enemies = initializeEnemies(world);
			world.player.x = 300;
			world.player.y = 550;
			world.niveau += 1;

			world.missile = new Set();


			/*if (world.niveau % 3 === 0) {
				world.super_missile.nombre_missile += 1;
			}

			/*if (world.niveau < 8) {
				world.vitesse_enemies += 1;
			}


*/
			if (world.niveau % 10 === 0) {
				world.boss.add(new Boss(50, 50, 3, view("../images/enemies/enemyBlue4.png"), 50));
			}


		}

	}

	player_meurt(world) {
		if (world.player.game === false) {

			world.player.x = 300;
			world.player.y = 550;
			this.nombre_vie += -1;
			world.player.game = true;
			world.missile = new Set();
			world.meteorites = new Set();


			// pour que quand on meurt on fait reapparaitre les enemies dans de nouvelles coordonne pour pas mourrir directement successivement
			// if pour fin de partie evite erreur sur liste vide
			if (world.enemies.size !== 0) {
				world.enemies.forEach(function (valeur, clef, set) {
					let j = Math.floor((60) * Math.random());
					let k = Math.floor((42) * Math.random());
					valeur.x = j * 10;
					valeur.y = k * 10;


				});

			}


		}
	}

	mode_survivant(world) {
		if (world.mode_jeu === "survivant") {

			if (world.time % 700 === 0) {

				let enemies2 = initializeEnemies(world);
				world.player.score += enemies2.size();
				for (let item of enemies2) {
					world.enemies.add(item);
				}
			}
		}
	}

	update(world) {

		world.vie.is_empty_enemies(world);
		world.vie.player_meurt(world);
		world.vie.mode_survivant(world);


	}



	draw(contexte) {
		for (let i = 0; i < this.nombre_vie; i++) {
			contexte.drawImage(this.image, this.x - i * 30, this.y, this.width, this.height);
		}

	}

}
