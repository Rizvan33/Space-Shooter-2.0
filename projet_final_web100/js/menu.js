function initializeConfoguration() {
	let configuration = {}
	configuration.mode_jeu = "classique";
	configuration.menu = 0;
	configuration.vaisseau = view("../images/joueur/playerShip1_blue.png");
	configuration.laser = view("../images/lasers/laserBlue14.png");
	configuration.temp_total = 1;
	configuration.width_missile = 5;
	configuration.heigth_missile = 15;
	return configuration;
}

function menus(configuration) {
	// Jouer


	let canvas = document.getElementById('game_area');
	let context = canvas.getContext('2d');

	context.clearRect(0, 0, 600, 600);
	dessine_contour(context);
	context.strokeStyle = "gray";
	context.strokeStyle = "white";
	context.fillStyle = "white";
	context.font = "30px Arial";

	context.fillText("Lost In Space ", 200, 100);
	context.strokeRect(150, 50, 290, 80);

	context.fillText("Jouer ", 250, 500);
	context.strokeRect(200, 450, 180, 80);

	context.fillText("Mode ", 250, 380);
	context.strokeRect(200, 330, 180, 80);

	context.fillText("Boutique ", 230, 260);
	context.strokeRect(200, 210, 180, 80);


	canvas.onmousedown = function (event) {
		if (configuration.menu === 0) {

			if (200 < event.offsetX && event.offsetX < 380 && 450 < event.offsetY && event.offsetY < 530) {
				configuration.mode_jeu = "classique";
				lost_in_space(configuration);
			}

			if (200 < event.offsetX && event.offsetX < 380 && 330 < event.offsetY && event.offsetY < 410) {
				configuration.menu = 1;
				mode(configuration);
			}


		}
	};
	canvas.onmouseup = function (event) {

		if (configuration.menu === 0) {
			if (200 < event.offsetX && event.offsetX < 380 && 210 < event.offsetY && event.offsetY < 290) {
				configuration.menu = 2;
				boutiques(configuration);
			}
		}
	};



}

function boutiques(configuration) {
	// Jouer
	let canvas = document.getElementById('game_area');
	let context = canvas.getContext('2d');


	canvas.onmousedown = function (event) {
		if (configuration.menu === 2) {
			context.clearRect(0, 0, 600, 600);
			dessine_contour(context);
			context.strokeStyle = "gray";
			context.strokeStyle = "white";
			context.fillStyle = "white";
			context.font = "30px Arial";

			context.fillText("Boutique", 250, 100);
			context.strokeRect(200, 50, 220, 80);


			context.fillText("Vaisseau ", 250, 480);
			context.strokeRect(200, 430, 220, 80);

			context.fillText("Laser ", 270, 360);
			context.strokeRect(200, 310, 220, 80);

			if (200 < event.offsetX && event.offsetX < 420 && 50 < event.offsetY && event.offsetY < 130) {
				configuration.menu = 0;
				menus(configuration);
			}
			if (200 < event.offsetX && event.offsetX < 420 && 310 < event.offsetY && event.offsetY < 390) {
				configuration.menu = 5;
				laser(configuration);
			}

			if (200 < event.offsetX && event.offsetX < 420 && 430 < event.offsetY && event.offsetY < 510) {
				configuration.menu = 6;
				vaisseau(configuration);
			}


		}
	};



}



function vaisseau(configuration) {
	let canvas = document.getElementById('game_area');
	let context = canvas.getContext('2d');
	context.clearRect(0, 0, 600, 600);
	dessine_contour(context);

	context.strokeStyle = "gray";
	context.strokeStyle = "white";
	context.fillStyle = "white";
	context.font = "30px Arial";

	context.fillText("Boutique", 250, 100);
	context.strokeRect(200, 50, 220, 80);




	canvas.onclick = function (event) {
		let x = event.offsetX;
		let y = event.offsetY;
		let chemin = "../images/joueur";



		if (configuration.menu === 6) {
			context.drawImage(view(chemin + "/playerShip1_blue.png"), 100, 200, 30, 30);
			context.strokeRect(80, 180, 70, 70);

			context.drawImage(view(chemin + "/playerShip1_green.png"), 225, 200, 30, 30);
			context.strokeRect(205, 180, 70, 70);

			context.drawImage(view(chemin + "/playerShip1_orange.png"), 350, 200, 30, 30);
			context.strokeRect(330, 180, 70, 70);

			context.drawImage(view(chemin + "/playerShip1_red.png"), 475, 200, 30, 30);
			context.strokeRect(455, 180, 70, 70);

			context.drawImage(view(chemin + "/playerShip2_blue.png"), 100, 325, 30, 30);
			context.strokeRect(80, 305, 70, 70);

			context.drawImage(view(chemin + "/playerShip2_green.png"), 225, 325, 30, 30);
			context.strokeRect(205, 305, 70, 70);

			context.drawImage(view(chemin + "/playerShip2_orange.png"), 350, 325, 30, 30);
			context.strokeRect(330, 305, 70, 70);

			context.drawImage(view(chemin + "/playerShip2_red.png"), 475, 325, 30, 30);
			context.strokeRect(455, 305, 70, 70);


			context.drawImage(view(chemin + "/playerShip3_blue.png"), 100, 450, 30, 30);
			context.strokeRect(80, 430, 70, 70);

			context.drawImage(view(chemin + "/playerShip3_green.png"), 225, 450, 30, 30);
			context.strokeRect(205, 430, 70, 70);

			context.drawImage(view(chemin + "/playerShip3_orange.png"), 350, 450, 30, 30);
			context.strokeRect(330, 430, 70, 70);

			context.drawImage(view(chemin + "/playerShip3_red.png"), 475, 450, 30, 30);
			context.strokeRect(455, 430, 70, 70);

			context.strokeRect(265, 530, 70, 70);
			if (200 < event.offsetX && event.offsetX < 420 && 50 < event.offsetY && event.offsetY < 130) {
				configuration.menu = 0;
				menus(configuration);
			}
			if (80 < x && x < 150 && 180 < y && y < 250) {
				configuration.vaisseau = view(chemin + "/playerShip1_blue.png");
			}

			if (205 < x && x < 275 && 180 < y && y < 250) {
				configuration.vaisseau = view(chemin + "/playerShip1_green.png");
			}

			if (330 < x && x < 400 && 180 < y && y < 250) {
				configuration.vaisseau = view(chemin + "/playerShip1_orange.png");
			}

			if (455 < x && x < 525 && 180 < y && y < 250) {
				configuration.vaisseau = view(chemin + "/playerShip1_red.png");
			}

			if (80 < x && x < 150 && 305 < y && y < 375) {
				configuration.vaisseau = view(chemin + "/playerShip2_blue.png");
			}

			if (205 < x && x < 275 && 305 < y && y < 375) {
				configuration.vaisseau = view(chemin + "/playerShip2_green.png");
			}

			if (330 < x && x < 400 && 305 < y && y < 375) {
				configuration.vaisseau = view(chemin + "/playerShip2_orange.png");
			}

			if (455 < x && x < 525 && 305 < y && y < 375) {
				configuration.vaisseau = view(chemin + "/playerShip2_red.png");
			}

			if (80 < x && x < 150 && 430 < y && y < 500) {
				configuration.vaisseau = view(chemin + "/playerShip3_blue.png");
			}

			if (205 < x && x < 275 && 430 < y && y < 500) {
				configuration.vaisseau = view(chemin + "/playerShip3_green.png");
			}

			if (330 < x && x < 400 && 430 < y && y < 500) {
				configuration.vaisseau = view(chemin + "/playerShip3_orange.png");
			}

			if (455 < x && x < 525 && 430 < y && y < 500) {
				configuration.vaisseau = view(chemin + "/playerShip3_red.png");
			}
			if ((80 < x && x < 150 && 180 < y && y < 250) || (205 < x && x < 275 && 180 < y && y < 250) ||
				(330 < x && x < 400 && 180 < y && y < 250) || (455 < x && x < 525 && 180 < y && y < 250) ||
				(80 < x && x < 150 && 305 < y && y < 375) || (205 < x && x < 275 && 305 < y && y < 375) ||
				(330 < x && x < 400 && 305 < y && y < 375) || (455 < x && x < 525 && 305 < y && y < 375) ||
				(80 < x && x < 150 && 430 < y && y < 500) || (205 < x && x < 275 && 430 < y && y < 500) ||
				(330 < x && x < 400 && 430 < y && y < 500) || (455 < x && x < 525 && 430 < y && y < 500)) {


				context.clearRect(270, 535, 60, 60);
				context.drawImage(configuration.vaisseau, 285, 550, 30, 30);

			}
		}
	};



}

function laser(configuration) {
	let canvas = document.getElementById('game_area');
	let context = canvas.getContext('2d');
	context.clearRect(0, 0, 600, 600);
	dessine_contour(context);
	context.strokeStyle = "gray";
	context.strokeStyle = "white";
	context.fillStyle = "white";
	context.font = "30px Arial";

	context.fillText("Boutique", 250, 100);
	context.strokeRect(200, 50, 220, 80);




	canvas.onclick = function (event) {
		let x = event.offsetX;
		let y = event.offsetY;
		let chemin = "../images/lasers";

		if (configuration.menu === 5) {
			context.drawImage(view(chemin + "/laserBlue08.png"), 100, 200, 30, 30);
			context.strokeRect(80, 180, 70, 70);

			context.drawImage(view(chemin + "/laserBlue11.png"), 225, 200, 30, 30);
			context.strokeRect(205, 180, 70, 70);

			context.drawImage(view(chemin + "/laserBlue14.png"), 360, 200, 10, 30);
			context.strokeRect(330, 180, 70, 70);

			context.drawImage(view(chemin + "/laserBlue16.png"), 485, 200, 10, 30);
			context.strokeRect(455, 180, 70, 70);

			context.drawImage(view(chemin + "/laserGreen01.png"), 100, 325, 30, 30);
			context.strokeRect(80, 305, 70, 70);

			context.drawImage(view(chemin + "/laserGreen06.png"), 235, 325, 10, 30);
			context.strokeRect(205, 305, 70, 70);

			context.drawImage(view(chemin + "/laserGreen10.png"), 360, 325, 10, 30);
			context.strokeRect(330, 305, 70, 70);

			context.drawImage(view(chemin + "/laserGreen14.png"), 475, 325, 30, 30);
			context.strokeRect(455, 305, 70, 70);


			context.drawImage(view(chemin + "/laserRed08.png"), 100, 450, 30, 30);
			context.strokeRect(80, 430, 70, 70);

			context.drawImage(view(chemin + "/laserRed11.png"), 225, 450, 30, 30);
			context.strokeRect(205, 430, 70, 70);

			context.drawImage(view(chemin + "/laserRed14.png"), 360, 450, 10, 30);
			context.strokeRect(330, 430, 70, 70);

			context.drawImage(view(chemin + "/laserRed16.png"), 485, 450, 10, 30);
			context.strokeRect(455, 430, 70, 70);

			context.strokeRect(265, 530, 70, 70);

			if (200 < event.offsetX && event.offsetX < 420 && 50 < event.offsetY && event.offsetY < 130) {
				configuration.menu = 0;
				menus(configuration);
			}
			if (80 < x && x < 150 && 180 < y && y < 250) {
				configuration.laser = view(chemin + "/laserBlue08.png");
			}

			if (205 < x && x < 275 && 180 < y && y < 250) {
				configuration.laser = view(chemin + "/laserBlue11.png");
			}

			if (330 < x && x < 400 && 180 < y && y < 250) {
				configuration.laser = view(chemin + "/laserBlue14.png");
			}

			if (455 < x && x < 525 && 180 < y && y < 250) {
				configuration.laser = view(chemin + "/laserBlue16.png");
			}

			if (80 < x && x < 150 && 305 < y && y < 375) {
				configuration.laser = view(chemin + "/laserGreen01.png");
			}

			if (205 < x && x < 275 && 305 < y && y < 375) {
				configuration.laser = view(chemin + "/laserGreen06.png");
			}

			if (330 < x && x < 400 && 305 < y && y < 375) {
				configuration.laser = view(chemin + "laserGreen10.png");
			}

			if (455 < x && x < 525 && 305 < y && y < 375) {
				configuration.laser = view(chemin + "/laserGreen14.png");
			}

			if (80 < x && x < 150 && 430 < y && y < 500) {
				configuration.laser = view(chemin + "/laserRed08.png");
			}

			if (205 < x && x < 275 && 430 < y && y < 500) {
				configuration.laser = view(chemin + "/laserRed11.png");
			}

			if (330 < x && x < 400 && 430 < y && y < 500) {
				configuration.laser = view(chemin + "/laserRed14.png");
			}

			if (455 < x && x < 525 && 430 < y && y < 500) {
				configuration.laser = view(chemin + "/laserRed16.png");
			}
			if ((80 < x && x < 150 && 180 < y && y < 250) || (205 < x && x < 275 && 180 < y && y < 250) ||
				(80 < x && x < 150 && 305 < y && y < 375) || (455 < x && x < 525 && 305 < y && y < 375) ||
				(80 < x && x < 150 && 430 < y && y < 500) || (205 < x && x < 275 && 430 < y && y < 500)
			) {


				context.clearRect(270, 535, 60, 60);

				configuration.width_missile = 15;
				configuration.heigth_missile = 20;
				context.drawImage(configuration.laser, 285, 550, 30, 30);

			}
			if (
				(330 < x && x < 400 && 180 < y && y < 250) || (455 < x && x < 525 && 180 < y && y < 250) ||
				(205 < x && x < 275 && 305 < y && y < 375) || (330 < x && x < 400 && 305 < y && y < 375) ||
				(330 < x && x < 400 && 430 < y && y < 500) || (455 < x && x < 525 && 430 < y && y < 500)) {


				context.clearRect(270, 535, 60, 60);

				configuration.width_missile = 5;
				configuration.heigth_missile = 15;
				context.drawImage(configuration.laser, 295, 550, 10, 30);

			}
		}
	};



}


function mode(configuration) {
	let canvas = document.getElementById('game_area');
	let context = canvas.getContext('2d');

	context.clearRect(0, 0, 600, 600);
	dessine_contour(context);
	context.strokeStyle = "gray";
	context.strokeStyle = "white";
	context.fillStyle = "white";
	context.font = "30px Arial";

	context.fillText("Mode De Jeu ", 200, 100);
	context.strokeRect(150, 50, 290, 80);

	context.fillText("Classique ", 240, 500);
	context.strokeRect(200, 450, 230, 80);

	context.fillText("Contre la montre ", 205, 380);
	context.strokeRect(190, 330, 250, 80);

	context.fillText("Survivant ", 245, 260);
	context.strokeRect(200, 210, 230, 80);


	canvas.onmousedown = function (event) {
		if (configuration.menu === 1) {

			if (150 < event.offsetX && event.offsetX < 440 && 50 < event.offsetY && event.offsetY < 130) {
				configuration.menu = 0;
				menus(configuration);
			}
			if (200 < event.offsetX && event.offsetX < 380 && 450 < event.offsetY && event.offsetY < 530) {
				configuration.laser.mode_jeu = "classique";
				lost_in_space(configuration);

			}

			if (200 < event.offsetX && event.offsetX < 380 && 330 < event.offsetY && event.offsetY < 410) {
				configuration.menu = 4;
				configuration.mode_jeu = "contre_la_montre";
				contre_la_montre(configuration);

			}

			if (200 < event.offsetX && event.offsetX < 380 && 210 < event.offsetY && event.offsetY < 290) {
				configuration.mode_jeu = "survivant";
				lost_in_space(configuration);

			}
		}

	};



}

function contre_la_montre(configuration) {
	let canvas = document.getElementById('game_area');
	let context = canvas.getContext('2d');


	context.clearRect(0, 0, 600, 600);
	dessine_contour(context);
	context.strokeStyle = "gray";
	context.strokeStyle = "white";
	context.fillStyle = "white";
	context.font = "30px Arial";
	context.fillText(" Temps ", 250, 100);
	context.strokeRect(150, 50, 290, 80);
	context.fillText(" 60 Secondes ", 77, 250);
	context.strokeRect(60, 205, 230, 80);
	context.fillText("120 Secondes", 360, 250);
	context.strokeRect(340, 205, 230, 80);
	context.fillText("180 Secondes", 80, 380);
	context.strokeRect(60, 335, 230, 80);
	context.fillText(" 240 Secondes ", 360, 380);
	context.strokeRect(340, 330, 230, 80);
	context.fillText(" 300 Secondes", 80, 500);
	context.strokeRect(60, 455, 230, 80);
	context.fillText(" 360 Secondes ", 360, 500);
	context.strokeRect(340, 455, 230, 80);






	canvas.onmousedown = function (event) {
		let x = event.offsetX;
		let y = event.offsetY;
		if (configuration.menu === 4) {
			if (150 < event.offsetX && event.offsetX < 440 && 50 < event.offsetY && event.offsetY < 130) {
				configuration.menu = 0;
				menus(configuration);
			}
			if (60 < x && x < 290 && 205 < y && y < 285) {
				configuration.temp_total = 60;

			}

			if (340 < x && x < 570 && 205 < y && y < 285) {
				configuration.temp_total = 120;

			}

			if (60 < x && x < 290 && 335 < y && y < 415) {
				configuration.temp_total = 180;

			}

			if (340 < x && x < 570 && 330 < y && y < 410) {
				configuration.temp_total = 240;

			}

			if (60 < x && x < 290 && 455 < y && y < 535) {
				configuration.temp_total = 300;

			}

			if (340 < x && x < 570 && 455 < y && y < 535) {
				configuration.temp_total = 360;

			}


			if ((60 < x && x < 290 && 205 < y && y < 285) || (340 < x && x < 570 && 205 < y && y < 285) ||
				(60 < x && x < 290 && 335 < y && y < 415) || (340 < x && x < 570 && 330 < y && y < 410) ||
				(60 < x && x < 290 && 455 < y && y < 535) || (340 < x && x < 570 && 455 < y && y < 535)) {
				lost_in_space(configuration);
			}
		}
	};

}
