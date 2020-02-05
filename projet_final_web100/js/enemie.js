class Enemie {

	constructor(x, y, speed, image, niveau, vie) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.width = 25;
		this.heigth = 25;
		this.niveau = niveau;
		this.vie = vie;
		this.game = true;
	}

	update(world, enemie) {
		enemie.move(enemie);
		enemie.supprime_enemies(world, enemie);
		enemie.collision_vaisseau_enemies(world);
		enemie.collision_missiles_enemies(world);
		enemie.direction_horizontal();
		enemie.direction_vertical();

	}

	move(enemie) {
		if (this.niveau > 0) {
			enemie.deplacement_horizontal();
		}
		if (this.niveau > 3) {
			enemie.deplacement_vertical();
		}
		if (this.niveau > 5) {
			enemie.diagonal_haut_gauche_bas_droite();
		}
		if (this.niveau > 8) {
			enemie.diagonal_haut_droite_bas_gauche();
		}
	}

	diagonal_haut_gauche_bas_droite() {
		this.x += this.speed;
		this.y += this.speed;
	}

	diagonal_haut_droite_bas_gauche() {
		this.x -= this.speed;
		this.y += this.speed;
	}
	deplacement_vertical() {
		this.y += this.speed;
	}
	deplacement_horizontal() {
		this.x += this.speed;
	}

	supprime_enemie(world, enemie) {
		if (this.game === false) {
			this.vie += -1;
			//world.score += 1;
			world.player.score += 1;
			this.game = true;
		}
	}

	supprime_enemies(world, enemie) {
		enemie.supprime_horizontal();
		enemie.supprime_vertical();
		enemie.supprime_enemie(world, enemie)
		if (this.vie === 0) {
			world.enemies.delete(enemie);
		}

	}



	collision_vaisseau_enemies(world) {
		// collision vaisseau avec l'enemie
		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.heigth && this.heigth + this.y > world.player.y) {
			world.player.game = false;

		}
	}

	collision_missiles_enemies(world) {
		// collision enemie avec les differents missiles
		world.missile.forEach(function (valeur, clef, set) {

			if (valeur.x < this.x + this.width && valeur.x + valeur.width > this.x && valeur.y < this.y + this.heigth && valeur.heigth + valeur.y > this.y) {

				this.game = false;
				valeur.game = false; //missiles
			}
		}.bind(this));
	}

	direction_horizontal() {
		if (this.x > 600 || this.x < 0) {

			this.speed = -this.speed; // afin de faire changer le sens des enemies lorsqu ils touchent les limites du canvas a gauche et a droite

			this.y += 30; // afin de faire descendre legerement les enemies vers le vaisseau

		}

	}

	direction_vertical() {
		if (this.y > 600 || this.y < 0) {

			this.speed = -this.speed; // afin de faire changer le sens des enemies lorsqu il touche les limites du canvas en haut et en bas

		}

	}

	supprime_horizontal() {
		if (this.x > 650 || this.x < -50) {
			this.game = false;
		}

	}

	supprime_vertical() {
		if (this.y > 650 || this.y < -50) {
			this.game = false;
		}

	}


	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.heigth);


	}

}
