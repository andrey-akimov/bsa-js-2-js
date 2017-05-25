"use strict";

class Fighter{
	constructor(name = "Great warrior", power = 10, health = 100){
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage){
		this.health -= damage;
		console.log(`${this.name}'s health: ${this.health}`);
	}

	hit(enemy, point){
		let damage = point * this.power;
		enemy.setDamage(damage);
	}
}

class ImprovedFighter extends Fighter{
	doubleHit(enemy, point){
		let doublePoint = point * 2;
		super.hit(enemy, doublePoint);
	}
}

let fight = (fighter, improvedFighter, ...point) => {
	console.log("Let's get ready to rumble!");

	while(true){
		let randomPoint = point[Math.floor(Math.random() * point.length)];
		fighter.hit(improvedFighter, randomPoint);

		if(improvedFighter.health <= 0){
			console.log(`${improvedFighter.name} is dead :( and ${fighter.name} won!`);
			break;
		}

		// Сhance to critycal strike is 25%.
		if(Math.random() < .25){
			improvedFighter.doubleHit(fighter, randomPoint);
			console.log(`*** ${improvedFighter.name} slammed DOUBLE HIT! ***`);
		} else {
			improvedFighter.hit(fighter, randomPoint);
		}

		if(fighter.health <= 0){
			console.log(`${fighter.name} is dead :( and ${improvedFighter.name} won!`);
			break;
		}
	}
}

// These fighters are the same. So the work of the doubleHit() function is more understandable.
let fighter = new Fighter("Zeus", 50, 10000);
let improvedFighter = new ImprovedFighter("Thor", 50, 10000);
fight(fighter, improvedFighter, 25, 13, 45);