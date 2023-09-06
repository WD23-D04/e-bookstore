import { describe, it, expect } from 'vitest';
import {capitalizeFirst } from "./tools.ts";

describe('capitalizeFirst()', () => {
	it("works in all cases", () => {
		expect(capitalizeFirst('testing')).toBe('Testing');
		expect(capitalizeFirst('  testing')).toBe('Testing');
	});
});
