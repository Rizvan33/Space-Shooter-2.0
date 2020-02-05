class Super_missile {

	constructor(x, y, nombre_missile, image) {
		this.x = x;
		this.y = y;
		this.nombre_missile = nombre_missile;
		this.image = image;
		this.game = true;
		this.width = 8;
		this.heigth = 22;

	}

	update() {

		// si il utilise un missile il en perd 1
		if (this.game === false) {
			this.game = true;
			this.nombre_missile += -1;

		}

	}

	draw(contexte) {

		for (let i = 0; i < this.nombre_missile; i++) {
			contexte.drawImage(this.image, this.x - i * 30, this.y, this.width, this.heigth);
		}
	}



}
