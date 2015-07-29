var lorem = function()
{
	var tokens = ["a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dignissim", "dis", "dolor", "donec", "dui", "duis", "efficitur", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "eu", "euismod", "ex", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "finibus", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "magnis", "malesuada", "massa", "mattis", "mauris", "maximus", "metus", "mi", "molestie", "mollis", "montes", "morbi", "nam", "nascetur", "natoque", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "parturient", "pellentesque", "penatibus", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "rhoncus", "ridiculus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociis", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate"];

	function get_random_token()
	{
		var random_index = Math.floor((Math.random() * 1000)) % tokens.length;

		return tokens[random_index];
	}

	function get_bundle_tokens( howmany )
	{
		var result = [];

		for(var i=0; i<howmany; i++)
		{
			result.push( get_random_token() );
		}

		return result;
	}

	/* case insensitive */

// http://www.utf8-chartable.de/

	function randomly_decorate_token_with_accent( token )
	{
		var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

		// random 0 upto 9
		var random_index = Math.floor((Math.random() * 100) % vowels.length);

		var chosen_vowel = vowels[ random_index ];

		// ÀÁÂÄ
		var a_diatrics = ['\u00C0', '\u00C1', '\u00C2', '\u00C4', '\u00C3' ];

		// ÈÉÊË
		var e_diatrics = ['\u00C8', '\u00C9', '\u00CA', '\u00CB' ];

		var o_diatrics = [ '\u00D3', '\u00D4', '\u00D5', '\u00D6' ];
	}

	var words = function( howmany )
	{
		var tokens = [];

		var accented = false;

		if (howmany === undefined)
		{
			howmany = 1;
		}

		tokens = get_bundle_tokens( howmany );

		this.asString = function()
		{
			if (accented) {
				for(var i=0; i < tokens.length; i++) {
					tokens[i] = randomly_decorate_token_with_accent( tokens[i] );
				}
			}
			return tokens.join(" ");
		}

		this.asHtml = function()
		{
			return this;
		}

		/* decorate the gotten token */
		this.accented = function()
		{
			accented = true;

			return this;
		}

		return this;

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
console.log( x.words().asString() );


