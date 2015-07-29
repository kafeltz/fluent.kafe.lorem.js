var lorem = function()
{
	var tokens = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dignissim", "dis", "dolor", "donec", "dui", "duis", "efficitur", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "eu", "euismod", "ex", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "finibus", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "magnis", "malesuada", "massa", "mattis", "mauris", "maximus", "metus", "mi", "molestie", "mollis", "montes", "morbi", "nam", "nascetur", "natoque", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "parturient", "pellentesque", "penatibus", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "rhoncus", "ridiculus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociis", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];

	function get_random_token( tokens )
	{
		var random_index = Math.floor((Math.random() * 1000)) % tokens.length;

		return tokens[random_index];
	}

	function get_bundle_tokens( howmany, tokens )
	{
		var result = [];

		for(var i=0; i<howmany; i++)
		{
			result.push( get_random_token(tokens) );
		}

		return result;
	}

	var words = function( /* min, max */ ) {

		this.asString = function()
		{
			return "Output not implemented yet!";
		}

		this.asHtml = function()
		{
			return this;
		}

		/* decorate the gotten token */
		this.accented = function()
		{
			return this;
		}

	};

	var paragraphs = function() {

	};

	var list = function() {

	};

	var object = {
		words: words,
		paragraphs: paragraphs,
		list: list,
	};

	return object;
};

var x = new lorem();
console.log( x.words() );