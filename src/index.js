
import 'jquery'; /* global $ */
import Split from 'split.js';

Split([
	'#render',
	'#panel-right',
], {
	sizes: [ 75, 25 ],
	minSize: [ 400, 100 ],
	expandToMin: true,
});