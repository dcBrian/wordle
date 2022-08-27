export async function api(method: string, resource: string, data?: Record<string, unknown>) {
	const response = await fetch(`${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});

	if (response.status === 200) {
		return await response.json();
	}

	return [];
}
