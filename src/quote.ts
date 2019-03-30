export interface Quote {
	id: any;
	text: string;
	source: string;
}

export default Quote;

export const BuiltinQuotes: Array<Quote> = [
	{
		id: 1,
		text:
			"Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
		source: 'Confucius',
	},
	{
		id: 2,
		text: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
		source: 'Gandhi',
	},
	{
		id: 3,
		text:
			"La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
		source: 'Albert Einstein',
	},
	{
		id: 4,
		text: "Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.",
		source: 'Confucius',
	},
	{
		id: 5,
		text: 'La nature fait les hommes semblables, la vie les rend différents.',
		source: 'Confucius',
	},
	{
		id: 6,
		text: "Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l'avenir.",
		source: 'Jean Jaurès',
	},
	{
		id: 7,
		text:
			"L'honnêteté, la sincérité, la simplicité, l'humilité, la générosité, l'absence de vanité, la capacité à servir les autres - qualités à la portée de toutes les âmes- sont les véritables fondations de notre vie spirituelle.",
		source: "Nelson Mandela",
	},
	{
		id: 8,
		text: "Lorsque l'on se cogne la tête contre un pot et que cela sonne creux, ça n'est pas forcément le pot qui est vide.",
		source: 'Confucius',
	},
	{
		id: 9,
		text:
			"Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.",
		source: "Abbé Pierre",
	},
	{
		id: 10,
		text: "Ne demandez jamais quelle est l'origine d'un homme ; interrogez plutôt sa vie et vous saurez ce qu'il est.",
		source: 'Abd El-Kader',
	},
	{
		id: 11,
		text: "La valeur d'un homme tient dans sa capacité à donner et non dans sa capacité à recevoir.",
		source: 'Albert Einstein',
	},
	{
		id: 12,
		text:
			"La valeur d'un homme ne se mesure pas à son argent, son statut ou ses possessions. La valeur d'un homme réside dans sa personnalité, sa sagesse, sa créativité, son courage, son indépendance et sa maturité.",
		source: 'Mark W. B. Brinton',
	},
];
