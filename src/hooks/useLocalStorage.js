import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
	// Prefer persisted form data when it exists so refreshes preserve the inputs.
	const [storedValue, setStoredValue] = useState(() => {
		const valueFromStorage = localStorage.getItem(key);

		return valueFromStorage ?? initialValue;
	});

	// Keep localStorage synchronized with the latest state for this field.
	useEffect(() => {
		localStorage.setItem(key, storedValue);
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}
