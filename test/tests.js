QUnit.test( "1,00", function( assert )
{
	assert.ok( _format(1) == "1,00", "Passed!" );

	assert.ok( _format(2.234) == "2,23", "Passed!" );

	assert.ok( _format(3.34) == "3,34", "Passed!" );
});

QUnit.test( "Not typeof number?", function( assert )
{
	assert.throws( function()
	{
		_format("1.00"); // string shall fail!
	}, "Pass!");

	assert.throws( function()
	{
		_format(); // undefined
	}, "Pass!");

});
