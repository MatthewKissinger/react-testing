import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from "./App";

describe("App renders test", () => {
    test("Should show Magnificent Monkeys", () => {
        render(<App />)

        expect(screen.getByText(/magnificent monkeys/i)).toBeDefined();
    })
})


