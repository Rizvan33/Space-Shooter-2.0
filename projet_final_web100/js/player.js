class Player {

	constructor(x, y, speed, game, image) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.game = game;
		this.image = image;
		this.width = 40;
		this.heigth = 40;
		this.score = 0;


	}

	update(world) {
		world.player.sortie_canvas(world);
		world.player.evenement(world);
		world.time += 1;

		if (world.time % 400 == 0) {

			world.meteorites.add(newMeteorite(world));
		}
		if (world.time % 800 == 0) {
			let tab = lien_nom_bonus();
			world.bonus.add(new Bonus(coordonneAleatoire(60) * 10, 0, world.vitesse_enemies, view(tab[0]), Math.floor((4) * Math.random()), tab[1]));
			world.time = 0;
		}
		if (world.mode_jeu === "contre_la_montre") {
			/* 60 images par secondes donc 1/60 soit 0.01666*/
			world.temp_total += -0.0166;
		}

	}

	evenement(world) {
		if (true == world.key.y1) {
			this.y -= this.speed * world.delta;
		}
		if (true == world.key.y2) {
			this.y += this.speed * world.delta;
		}
		if (true == world.key.x1) {
			this.x -= this.speed * world.delta;
		}
		if (true == world.key.x2) {
			this.x += this.speed * world.delta;
		}
		if (true == world.key.enter && world.super_missile.nombre_missile > 0) {
			for (let i = 0; i < 600; i = i + 20) {
				world.missile.add(new Missile(i, this.y - 50, world.player.speed / 60, view("../images/lasers/laserGreen06.png"), 5, 15));
			}
		}
		if (true == world.key.missile) {


			// 1 seul missile si niveau en dessous de 6
			if (world.niveau < 5) {

				if (world.width_missile === 5) {
					world.missile.add(new Missile(world.player.x + 18, world.player.y - 18, world.player.speed / 60, world.image_missile, world.width_missile, world.heigth_missile));
				} else {
					world.missile.add(new Missile(world.player.x + 12, world.player.y - 18, world.player.speed / 60, world.image_missile, world.width_missile, world.heigth_missile));
				}
			}
			// 2 missiles si au  dessus de niveau 6
			else {
				if (world.width_missile === 5) {
					world.missile.add(new Missile(world.player.x + 8, world.player.y - 18, world.player.speed / 60, world.image_missile, world.width_missile, world.heigth_missile)); // -30 pour affiche le missile centre
					world.missile.add(new Missile(world.player.x + 25, world.player.y - 18, world.player.speed / 60, world.image_missile, world.width_missile, world.heigth_missile)); // -30 pour affiche le missile centre
				} else {
					world.missile.add(new Missile(world.player.x + 5, world.player.y - 18, world.player.speed / 60, world.image_missile, world.width_missile, world.heigth_missile)); // -30 pour affiche le missile centre
					world.missile.add(new Missile(world.player.x + 22, world.player.y - 18, world.player.speed / 60, world.image_missile, world.width_missile, world.heigth_missile)); // -30 pour affiche le missile centre
				}
			}

		}



	}


	sortie_canvas(world) {
		//si le vaisseau veux sortir du canvas on l'empeche de sortir
		world.player.sortie_horizontal();
		world.player.sortie_vertical();

	}

	sortie_horizontal() {
		if (this.x > 600 - this.width) {
			this.x = 600 - this.width;
		}
		if (this.x < 0) {
			this.x = 0;
		}
	}

	sortie_vertical() {
		if (this.y > 600 - this.heigth) {
			this.y = 600 - this.heigth;
		}
		if (this.y < 0) {
			this.y = 0;
		}
	}


	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.heigth);


	}

}
