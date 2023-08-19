import { describe, it, expect } from 'vitest';
import { capitalizeFirstLetter } from "./tools.ts";

describe('capitalizeFirstLetter()', () => {
	it("capitalizes first letter correctly", () => {
		expect(capitalizeFirstLetter('testing')).toBe('Testing');
	});
});