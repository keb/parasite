ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.sound',
	'plugins.director.director',
	'plugins.scale',

	'game.levels.room1',
	'game.levels.room2',
	'game.levels.room3',
	'game.levels.room4',	
	'game.levels.room5',
	'game.levels.room6',
	'game.levels.room7',
	'game.levels.room8',
	'game.levels.room9',
	'game.levels.room10',
	'game.levels.room11',
	'game.levels.room12',
	'game.levels.room13',
	'game.levels.room14',
	'game.levels.room15',
	'game.levels.room16',
	'game.levels.room17',
	'game.levels.room18',
	'game.levels.room19',
	'game.levels.room20',
	'game.levels.room21'
)
.defines(function(){

MyGame = ig.Game.extend({
	player: null,
	endSFX: new ig.Sound( 'media/sounds/357.ogg' ),

	// Load a font
	font: new ig.Font( 'media/silk.font.png' ),
	
	
	init: function() {
		// Initialize your game here; bind keys etc.
		//music
		ig.music.add( 'media/music/bg_loop.ogg' );
		ig.music.add( 'media/music/bg_keploop.ogg' );
		ig.music.loop = true;
		ig.music.volume = 0.4;
		ig.music.play();
		//bind keys
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind( ig.KEY.UP_ARROW, 'up');
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind( ig.KEY.SPACE, 'start' );

		this.myDirector = new ig.Director(this, [LevelRoom1, LevelRoom2, LevelRoom3, LevelRoom4, 
												LevelRoom5, LevelRoom6, LevelRoom7, LevelRoom8, 
												LevelRoom9, LevelRoom10, LevelRoom11, LevelRoom12, 
												LevelRoom13, LevelRoom14, LevelRoom15, LevelRoom16,
												LevelRoom17, LevelRoom18, LevelRoom19, LevelRoom20, LevelRoom21]);
		this.currentLevel = 1;
		this.loadLevel( LevelRoom1 );
		this.player = this.getEntitiesByType(EntityPlayer)[0];
	},
	
	// loadLevel: function(data) {
	// 	var menuEntity;
	// 	this.parent(data);
	// 	menuEntity = this.getEntitiesByType(EntityMenu);

	// 	if(!menuEntity){
	// 		this.player.food = 
	// 	}
	// },

	update: function() {
		
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
		if(this.currentLevel != 21 && this.player.food == 0){
			this.player.food = null;
			console.log(this.player.size);
			this.myDirector.nextLevel();
			this.currentLevel++;
		}

		if(this.currentLevel % 2 == 0 && this.currentlevel != 20){
			if(ig.input.pressed( 'start' )){
				if(this.currentLevel == 12){
					ig.music.next();
				}
				ig.music.play();
				this.myDirector.nextLevel();
				this.player = this.getEntitiesByType(EntityPlayer)[0];
				this.currentLevel++;
			}

		}
	},

	draw: function() {
		this.parent();
		// Draw all entities and backgroundMaps
		var x = ig.system.width/2,
			y = ig.system.height/2;

		
		switch(this.currentLevel){
			case 2:
				ig.music.pause();
				this.font.draw( 'We\'d be Pine,\n a name needy\n and sweet', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 3:
				this.player.setScale( 1, 1 );
				break;
			case 4:
				ig.music.pause();
				this.font.draw( 'With arms and legs\n unconscious, we sleep\n with you', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 5:
				this.player.setScale( 2, 2 );
				break;
			case 6:
				ig.music.pause();
				this.font.draw( 'Could you be \nour mother?\nWarm and soft \nlike her,\nlove us with \nflesh or bone', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 7:
				this.player.setScale( 2, 2 );
				break;
			case 8:
				ig.music.pause();
				this.font.draw( 'Could you be \nour father?\nWe miss you \nafter so long,\ncan you not see \nour affection?', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 9:
				this.player.setScale( 4, 4 );
				break;
			case 10:
				ig.music.pause();
				this.font.draw( 'It is with tenderness \nyou are lacerated,\nwith tenderness \nwe have your body\n', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 11:
				this.player.setScale( 4, 4 );
				break;
			case 12:
				ig.music.pause();
				this.font.draw( 'It is with innocence \nwe consume,\nwith innocence\nour doom fills\n your veins\n', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 13:
				this.player.setScale( 5, 5 );
				break;
			case 14:
				this.font.draw( 'Mother,\nFather,', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 15:
				this.player.setScale( 5, 5 );
				break;
			case 16:
				this.font.draw( 'Why do I feel\n like a murderer?', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 17:
				this.player.setScale( 6, 6 );
				break;
			case 18:
				this.font.draw( 'Please\n open your eyes,', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 19:
				this.player.setScale( 7, 7 );
				break;
			case 20:
				this.font.draw( 'Your dead ones', x, y-100, ig.Font.ALIGN.CENTER );
				break;
			case 21:
				ig.music.stop();
				this.endSFX.play();
			default:
				//do nothing
		}

	}
});

StartScreen = ig.Game.extend({
	instructText: new ig.Font( 'media/ps.font.png' ),
	background: new ig.Image(' media/black.png' ),
	init: function() {
		ig.input.bind( ig.KEY.SPACE, 'start' );
	},
	update: function(){
		if(ig.input.pressed('start')){
			ig.system.setGame(MyGame)
		}
		this.parent();
	},
	draw: function(){
		this.parent();
		this.background.draw(0,0);
		var x = ig.system.width/2;
		var y = ig.system.height/2;
		this.instructText.draw( 'Parasite', x, y-100, ig.Font.ALIGN.CENTER );
	}
});

// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', StartScreen, 60, 360, 480, 1 );

});
