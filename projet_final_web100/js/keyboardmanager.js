"use strict";

class KeyboardManager {
	constructor() {
		this.keyCodes = {
			"LEFT": 37,
			"UP": 38,
			"RIGHT": 39,
			"DOWN": 40,
			"SPACE": 32,
			"ENTRE": 13

		};
		this.x1 = false;
		this.x2 = false;
		this.y1 = false;
		this.y2 = false;
		this.missile = false;
		this.enter = false;

	}

	update(world) {



		window.addEventListener('keydown', function (event) {
			var e = event.keyCode;

			if (e == this.keyCodes.RIGHT) {
				this.x2 = true;

			}
			if (e == this.keyCodes.UP) {
				this.y1 = true;

			}
			if (e == this.keyCodes.LEFT) {
				this.x1 = true;

			}
			if (e == this.keyCodes.DOWN) {
				this.y2 = true;

			}
			if (e == this.keyCodes.SPACE) {
				this.missile = true;

			}

			if (e == this.keyCodes.ENTRE) {
				this.enter = true;
				world.super_missile.game = false;
			}

		}.bind(this));

		window.addEventListener('keyup', function (event) {
			var e = event.keyCode;

			if (e == this.keyCodes.RIGHT) {

				this.x2 = false;
			}
			if (e == this.keyCodes.UP) {

				this.y1 = false;
			}
			if (e == this.keyCodes.LEFT) {

				this.x1 = false;
			}
			if (e == this.keyCodes.DOWN) {

				this.y2 = false;
			}
			if (e == this.keyCodes.SPACE) {

				this.missile = false;
			}
			if (e == this.keyCodes.ENTRE) {

				this.enter = false;
			}



		}.bind(this));


		window.addEventListener('click', function (event) {


			let canvas = document.getElementById('game_area');
			let drag = false;

			canvas.onmousedown = function (event) {
				drag = true;
				world.player.x = event.offsetX;
				world.player.y = event.offsetY;
			};
			canvas.onmousemove = function (event) {
				if (drag) {
					world.player.x = event.offsetX;
					world.player.y = event.offsetY;
				}
			};
			canvas.onmouseup = function () {
				drag = false;
			};


		}.bind(this));

	}
	

}
