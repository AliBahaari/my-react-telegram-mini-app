const url = import.meta.env.VITE_SERVER_URL + "/tasks";

export async function create(payload: { title: string; reward: number }) {
  const result = await fetch(url + "/create", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return await result.json();
}

export async function findAll() {
  const result = await fetch(url + "/findAll");
  return await result.json();
}

export async function findOne(id: string) {
  const result = await fetch(url + `/findOne/${id}`);
  return await result.json();
}
