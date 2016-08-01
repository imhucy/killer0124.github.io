/**
 * 游戏状态
 */
var GAME_STATE_MENU = 0,
	GAME_STATE_START= 1,
	GAME_STATE_WIN  = 2,
	GAME_STATE_OVER = 3;
/**
 * KEYBOARD CODE
 */
var KEY_A = 65,
	KEY_B = 66,
	KEY_C = 67,
	KEY_D = 68,
	KEY_F = 69
	KEY_E = 70,
	KEY_G = 71,
	KEY_H = 72,
	KEY_I = 73,
	KEY_J = 74,
	KEY_K = 75,
	KEY_L = 76,
	KEY_M = 77,
	KEY_N = 78,
	KEY_O = 79,
	KEY_P = 80,
	KEY_Q = 81,
	KEY_R = 82,
	KEY_S = 83,
	KEY_T = 83,
	KEY_U = 84,
	KEY_V = 85,
	KEY_W = 87,
	KEY_X = 87,
	KEY_Y = 88,
	KEY_Z = 89;
	
	KEY_ENTER = 13;
/**
 * 方向
 */
var DIR_UP    = 0,
	DIR_RIGHT = 1,
	DIR_DOWN  = 2,
	DIR_LEFT  = 3;
/**
 * 场景参数
 */
var STAGE_X = 0,
	STAGE_Y = 0,
	STAGE_WIDTH = 390,
	STAGE_HEIGHT= 390,
	STAGE_BOX_SIZE = 15;
	
/**
 * 可视区参数
 */
var SCREEN_X = 0,
	SCREEN_Y = 0,
	SCREEN_WIDTH = 500,
	SCREEN_HEIGHT= 400;
	
/**
 * 地图块
 */
var MAP_BRICK = 1,
	MAP_STEEL = 2;
	
/**
 * 子弹类型
 */
var BULLET_TYPE_HERO = 1,
	BULLET_TYPE_ENEMY= 2;
/**
 * 敌方坦克出现位置
 */
var ENEMY_LOCATION = [ 0 , 180,	360 ];
/**
 * 爆炸类型
 */
var BOOM_TYPE_SIMPLE = 1,
	BOOM_TYPE_BIG	 = 2;