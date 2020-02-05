class Bonus {

	constructor(x, y, speed, image, niveau, nom) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.image = image;
		this.width = 20;
		this.heigth = 20;
		this.game = true;
		this.niveau = niveau;
		this.nom = nom;

	}

	update(world, bonus) {

		bonus.move(bonus);
		bonus.collision_vaisseau_bonus(world);
		bonus.supprime_bonus(world, bonus);
		bonus.sortie_canvas(world, bonus);
	}

	move(bonus) {

		if (this.niveau == 0) {
			bonus.diagonal_haut_gauche_bas_droite();
		}
		if (this.niveau == 1) {
			bonus.diagonal_haut_droite_bas_gauche();
		}
		if (this.niveau == 2) {
			bonus.deplacement_vertical();
		}
		if (this.niveau == 3) {
			bonus.deplacement_horizontal();
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

	supprime_bonus(world, bonus) {
		if (this.game === false) {
			world.bonus.delete(bonus);
		}
	}

	collision_vaisseau_bonus(world, bonus) {

		if (this.nom === "score") {
			if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.heigth && this.heigth + this.y > world.player.y) {
				this.game = false;
				//world.score += 5;
				world.player.score += 5;
				world.bonus.delete(bonus);
			}
		}
		if (this.nom === "vie") {
			if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.heigth && this.heigth + this.y > world.player.y) {
				this.game = false;
				world.vie.nombre_vie += 1;
				world.bonus.delete(bonus);
			}
		}
		if (this.nom === "super_missile") {
			if (this.x < world.player.x + world.player.width && this.x + this.width > world.player.x && this.y < world.player.y + world.player.heigth && this.heigth + this.y > world.player.y) {
				this.game = false;
				world.super_missile.nombre_missile += 1;
				world.bonus.delete(bonus);
			}
		}

	}

	sortie_canvas(world, bonus) {
		if ((this.x > 600 - this.width) || (this.x < 0) || (this.y > 600 - this.heigth) || (this.y < 0)) {
			world.bonus.delete(bonus);
		}

	}



	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.heigth);

	}

}
