import { getRandomElementFromArray } from './array';

export function generateRandomBackgroundTailwindClass(): string {
	const backgroundClasses = [
		'bg-gradient-to-b from-blue-500 to-purple-500',
		'bg-gradient-to-b from-red-500 to-orange-500',
		'bg-gradient-to-b from-green-500 to-lime-500',
		'bg-gradient-to-b from-yellow-500 to-amber-500',
		'bg-gradient-to-b from-pink-500 to-rose-500',
		'bg-gradient-to-b from-indigo-500 to-purple-500',
		'bg-gradient-to-b from-cyan-500 to-blue-500',
		'bg-gradient-to-b from-teal-500 to-green-500',
		'bg-gradient-to-b from-orange-500 to-red-500',
		'bg-gradient-to-b from-fuchsia-500 to-pink-500',
		'bg-gradient-to-b from-violet-500 to-purple-500'
	];

	return getRandomElementFromArray(backgroundClasses);
}
