var chart = c3.generate({
	data: {
		columns: [
			['Escape Characters', 92]
		],
		type: 'gauge',
		onclick: function(d, i) {
			console.log("onclick", d, i);
		},
		onmouseover: function(d, i) {
			console.log("onmouseover", d, i);
		},
		onmouseout: function(d, i) {
			console.log("onmouseout", d, i);
		}
	},
	gauge: {},
	color: {
		pattern: ['00F900', '#5CFA00', '#B9FB00', '#FDE200', '#FE8600', '#FF2800'], // the six color levels for the percentage values.
		threshold: {
			values: [16, 33, 50, 66, 83, 100]
		}
	},
	size: {
		height: 180
	},
	legend: {
		show: false
	}
});
