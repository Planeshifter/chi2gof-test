import chi2gof from '@stdlib/stats-chi2gof';

describe("chi2gof", () => {
	test("Returns a test results object", () => {
		const res = chi2gof([135017, 1533, 13450], [0.9, 0.01, 0.09]);
		expect(res).toBeInstanceOf(Object);
		expect(res.pValue).toBeGreaterThan( 0.0 );
		expect(res.pValue).toBeLessThan( 1.0 );
	});
});