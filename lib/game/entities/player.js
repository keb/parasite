ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'

)
.defines(function(){
	EntityPlayer = ig.Entity.extend({
		speed: 75,
		food: null,
		size: {x: 4, y : 4},
		animSheet: new ig.AnimationSheet( 'media/white.png', 4, 4),
		
		moveIntention: null,
		lastMove: null,
		destination: null,

		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.PASSIVE,

		init: function(x, y, settings){
			this.accel = 75;
			this.parent(x, y, settings);

			//give player the appearance s/he has
			this.addAnim('default', 1, [0]);

			//set speed as max velocity
			this.maxVel.x = this.maxVel.y = this.speed;
		},
		update: function(){
			this.parent();
			//move left right up down
			this.vel.x = 0;
            this.vel.y = 0;

			if( ig.input.state('left') ){
				this.vel.x = -this.accel;
			}

			if( ig.input.state('right') ){
				this.vel.x = this.accel;
			}

			if( ig.input.state('up') ){
				this.vel.y = -this.accel;
			}
			if( ig.input.state('down') ){
				this.vel.y = this.accel;
			}	
		}
	});
});


			// this.parent();
			// //move left right up down
			// if( ig.input.state('left') ){
			// 	this.vel.x = -this.accel;
			// }
			// else if(ig.input.state('left') && ig.input.state('up')){
			// 	this.vel.x = -this.accel;
			// 	this.vel.y = -this.accel;
			// }
			// else if(ig.input.state('left') && ig.input.state('down')){
			// 	this.vel.x = -this.accel;
			// 	this.vel.y = this.accel;
			// }

			// else if( ig.input.state('right') ){
			// 	this.vel.x = this.accel;
			// }
			// else if(ig.input.state('right') && ig.input.state('up')){
			// 	this.vel.x = this.accel;
			// 	this.vel.y = -this.accel;
			// }
			// else if(ig.input.state('right') && ig.input.state('down')){
			// 	this.vel.x = this.accel;
			// 	this.vel.y = this.accel;
			// }

			// else if( ig.input.state('up') ){
			// 	this.vel.y = -this.accel;
			// }
			// else if( ig.input.state('down') ){
			// 	this.vel.y = this.accel;
			// }
			// else {
   //          	this.vel.x = 0;
   //          	this.vel.y = 0;
   //      	}
