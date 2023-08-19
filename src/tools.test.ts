import { describe, it, expect } from 'vitest';
import { formatWord, sume } from "./tools.ts";

describe('formatWord()', () => {
	it("works on words", () => {
		expect(formatWord('testing')).toBe('Testing');
	});
	it("works if there are spaces right and left", () => {
		expect(formatWord('    testing    ')).toBe('Testing');
	});
	it("works if first character is already capitalized", () => {
		expect(formatWord('Robert')).toBe('Robert');
	});
	it("works on numerous words", () => {
		expect(formatWord('this is a test.')).toBe('This is a test.');
	});
	it("handles empty string correctly", () => {
		expect(formatWord('')).toBe('');
	});
});

describe('sume()', () => {
	it("it works with positive numbers", () => {
		expect(sume(3, 9)).toBe(12);
	});
	it("it works with negative numbers", () => {
		expect(sume(-3, -9)).toBe(-12);
	});
	it("it works with a negative and positive number", () => {
		expect(sume(-1, 8)).toBe(7);
	});
	it("works with zeros", () => {
		expect(sume(0, 0)).toBe(0);
	});
});