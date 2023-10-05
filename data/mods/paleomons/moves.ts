export const Moves: {[moveid: string]: MoveData} = {
	bloodstream: {
		num: 202,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Blood Stream",
		shortDesc: "User recovers 50% of the damage dealt.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	stormsurge: {
		num: 874,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		name: "Storm Surge",
		shortDesc: "Lowers the user's SpA by 1.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spa: -1,
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Water",
		contestType: "Beautiful",
	},
};