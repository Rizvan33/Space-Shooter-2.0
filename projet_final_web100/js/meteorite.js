class Meteorites {

	constructor(x, y, speed, image, niveau, width, heigth, vie) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.niveau = niveau;
		this.width = width;
		this.heigth = heigth;
		this.vie = vie;
		this.game = true;


	}

	update(world, meteorite) {

		meteorite.move(meteorite);
		meteorite.collision_vaisseau_meteorite(world);
		meteorite.collision_missiles_meteorite(world);
		meteorite.supprime_meteorite(world, meteorite);

	}

	move(meteorite) {
		if (this.niveau > 0) {
			meteorite.deplacement_vertical();
		}
		if (this.niveau > 3) {
			meteorite.deplacement_horizontal();
		}
		if (this.niveau > 5) {
			meteorite.diagonal_haut_gauche_bas_droite();
		}
		if (this.niveau > 8) {
			meteorite.diagonal_haut_droite_bas_gauche();
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

	diminue_vie(world) {
		if (this.game === false) {
			this.vie += -1;
			//world.score += 1;
			world.player.score += 1;
			this.game = true;
		}
	}

	supprime_meteorite(world, meteorite) {
		meteorite.diminue_vie(world)
		if (this.vie === 0) {
			world.meteorites.delete(meteorite);
		}
	}



	collision_vaisseau_meteorite(world) {
		// collision vaisseau avec l'enemie
		if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.heigth && this.heigth + this.y > world.player.y) {
			world.player.game = false;

		}
	}

	collision_missiles_meteorite(world) {
		// collision meteorite avec les differents missiles
		world.missile.forEach(function (valeur, clef, set) {

			if (valeur.x < this.x + this.width && valeur.x + valeur.width > this.x && valeur.y < this.y + this.heigth && valeur.heigth + valeur.y > this.y) {
				this.game = false;
				valeur.game = false;
			}
		}.bind(this));
	}

	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.heigth);

	}

}
