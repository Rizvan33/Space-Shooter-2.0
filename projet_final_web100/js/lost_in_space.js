"use strict";

window.onload = function () {
	let configuration = initializeConfoguration();
	configuration.vaisseau = view("../images/joueur/playerShip1_blue.png");
	configuration.laser = view("../images/lasers/laserBlue14.png");
	menus(configuration);
}



function gameLoop(world) {
	// boucle principal de jeu

	update(world);
	draw(world);

}
// page de chargement a faire
function update(world) {

	//console.log(world.enemies)
	// met a jour temps pour le delta
	world.now = Date.now();
	//console.log(world.lastUpdate);
	world.delta = (world.now - world.lastUpdate) / 1000;
	world.lastUpdate = world.now;

	// met a jour les coordonnes des enemies
	world.enemies.forEach(enemie => enemie.update(world, enemie));

	// met a jour la liste missile sans oublier de reconvertir le set en array
	//world.missile = Array.from(world.missile);
	world.missile.forEach(missile => missile.update(world, missile));

	// met a jour les coordonnes du joueur
	world.player.update(world);

	//met a jour les points de vie 
	world.vie.update(world);

	//met a jour les meteorites
	world.meteorites.forEach(meteorite => meteorite.update(world, meteorite));

	// met a jour le nombre de super missile
	world.super_missile.update();

	world.boss.forEach((boss) => boss.update(world, boss));

	//met a jour les bonus
	world.bonus.forEach(bonus => bonus.update(world, bonus));


	/*------------------------------------------------------------------*/


}


function draw(world) {
	let contexte = document.getElementById('game_area').getContext('2d');
	// nettoie le canvas
	contexte.clearRect(0, 0, 600, 600);

	// dessine le joueur 
	world.player.draw(contexte);

	// dessine les enemies 
	world.enemies.forEach(enemie => enemie.draw(contexte));

	// dessine les missiles
	world.missile.forEach(missile => missile.draw(contexte));

	// dessine les meteorites
	world.meteorites.forEach(meteorite => meteorite.draw(contexte));

	// dessine les super missiles
	world.super_missile.draw(contexte);

	world.boss.forEach(bosse => bosse.draw(contexte));

	// dessine les vies
	world.vie.draw(contexte);

	// dessine les Bonus_score

	world.bonus.forEach(bonus => bonus.draw(contexte));

	/*------------------------------------------------------------------*/


	// dessine texte niveau
	dessine_texte_niveau(contexte, world);

	dessine_texte_score(contexte, world);

	dessine_texte_vaissea_restant(contexte, world);

	dessine_contour(contexte);

	if (world.mode_jeu === "contre_la_montre") {
		dessine_texte_temps(contexte, world);
	}





}
