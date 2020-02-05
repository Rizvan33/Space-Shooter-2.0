class Boss {

	constructor(x, y, speed, image, nombre_vie) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.game = true;
		this.nombre_vie = nombre_vie;
		this.width = 100;
		this.heigth = 100;

	}

	update(world, boss) {
		boss.direction_horizontal();
		boss.direction_vertical();
		boss.collision_vaisseau_boss(world);
		boss.collision_missiles_boss(world);
		boss.supprime_boss(world, boss);
		boss.deplacement_horizontal();



	}

	deplacement_horizontal() {
		this.x += this.speed;
	}

	direction_horizontal() {
		if (this.x > 600 || this.x < 0) {

			this.speed = -this.speed; // afin de faire changer le sens des enemies lorsqu ils touchent les limites du canvas a gauche et a droite

			this.y += 15; // afin de faire descendre legerement les enemies vers le vaisseau

		}

	}

	direction_vertical() {
		if (this.y > 600 || this.y < 0) {

			this.speed = -this.speed; // afin de faire changer le sens des enemies lorsqu il touche les limites du canvas en haut et en bas

			this.speed += 0.1 * this.speed; // on augmente la vitesse de 10% lorsqu il touche en haut ou en bas

		}

	}

	collision_vaisseau_boss(world) {
		// collision vaisseau avec l'enemie
		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.heigth && this.heigth + this.y > world.player.y) {
			world.player.game = false;
			world.player.x = 500;
			world.player.y = 500;

		}
	}


	collision_missiles_boss(world) {
		// collision enemie avec les differents missiles
		world.missile.forEach(function (valeur, clef, set) {

			if (valeur.x < this.x + this.width && valeur.x + valeur.width > this.x && valeur.y < this.y + this.heigth && valeur.heigth + valeur.y > this.y) {

				this.game = false;
				valeur.game = false; //missiles
			}
		}.bind(this));
	}



	supprime_boss(world, boss) {
		// enleve point de vie au boss
		if (this.game === false) {

			this.nombre_vie += -1;
			if (this.nombre_vie === 0) {
				world.boss.delete(boss);
				//world.score += 100;
				world.player.score += 100;
			}
			this.game = true;
		}

	}



	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.heigth);
		contexte.fillStyle = "white";
		contexte.fillRect(200, 10, 250, 15);
		contexte.fillStyle = "red";
		contexte.fillRect(200, 10, this.nombre_vie * 5, 15);

	}

}
