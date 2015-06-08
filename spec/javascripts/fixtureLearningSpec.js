describe('Learning about fixtures', function() {
	it('offers three crucial functions', function() {
		// readFixtures
		// setFixtures
		// loadFixtures

		expect(readFixtures).toBeDefined();
		expect(setFixtures).toBeDefined();
		expect(loadFixtures).toBeDefined();
	});

	it('can load fixtures from a file', function() {
		loadFixtures('fragment.html');
		expect($('.fragment')).toExist();
	});

	it('can read fixture without appending to the DOM', function() {
		var fixture = readFixtures('fragment.html');
		expect(fixture).toContain('li');
		expect($(fixture).find('li')).toHaveText("Add some data");
		expect($(fixture).find('li').text().match(/some/i)).toBeTruthy();
	});

	it('can also receive a fixture as a parameter', function() {
		setFixtures('<div class="sandbox">Hello there!!!</div>')
		expect($(".sandbox")).toExist();
	});

	it('offers a sandbox function for convenince', function() {
		expect(sandbox).toBeDefined();
		// var sb = sandbox();
		// console.log(sb.attr("id"));

		setFixtures(sandbox());
		expect($('#sandbox')).toExist();

		setFixtures(sandbox({ 'class': 'some-class' }));
		expect($(".some-class")).toExist();

		expect($("#sandbox")).toHaveClass("some-class");

	});
});