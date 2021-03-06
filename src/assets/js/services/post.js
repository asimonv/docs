async function jsonRequest(path, options = {}) {
  const result = await fetch(path, {
    ...options,
    headers: { ...options.headers, Accept: 'application/json' },
    credentials: 'include',
  });
  const json = await result.json();
  if (result.status !== 200) {
    throw Object.assign(new Error(), json);
  }

  return json;
}

export default {
  async post(data) {
    return jsonRequest(`/user/${data.userId}/posts/new`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },

  async get(userId) {
    return jsonRequest(`/user/${userId}/posts/new`);
  },
};
