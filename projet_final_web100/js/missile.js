class Missile {

	constructor(x, y, speed, image, width, heigth) {
		this.x = x;
		this.y = y;
		this.speed = speed * 2;
		this.image = image;
		this.life = 0;
		this.width = width;
		this.heigth = heigth;
		this.game = true;
	}

	update(world, missile) {

		missile.move();
		missile.temps_de_vie(world, missile);
		missile.supprime_missile(world, missile);

	}

	move() {
		this.y -= this.speed; // afin que le missile avance verticalement
	}

	temps_de_vie() {
		this.life += 30;

	}

	supprime_missile(world, missile) {
		if (this.life > 300 || this.game === false) {
			world.missile.delete(missile);
		}
	}



	draw(contexte) {
		contexte.drawImage(this.image, this.x, this.y, this.width, this.heigth);

	}

}
