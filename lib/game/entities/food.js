ig.module(
	'game.entities.food'
)
.requires(
	'impact.entity',
	'impact.sound'
)
.defines(function(){
	EntityFood = ig.Entity.extend({
		speed: 100,
		size: {x: 4, y : 4},
		animSheet: new ig.AnimationSheet( 'media/tiles.png', 4, 4),
		collectSFX: new ig.Sound( 'media/sounds/food.ogg' ),
		
		moveIntention: null,
		lastMove: null,
		destination: null,

		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function(x, y, settings){
			this.parent(x, y, settings);

			//give player the appearance s/he has
			this.addAnim('default', 0.1, [0, 1]);
		},
		check: function( other ) {
			other.food = other.food - 1;
			this.kill();
			this.collectSFX.play();
			console.log("food: " + other.food);

			// console.log(ig.game.player.food);
			// console.log(ig.game.getEntitiesByType(EntityPlayer)[0].food);
		},
		update: function(){

			this.parent();
		}
	});
});