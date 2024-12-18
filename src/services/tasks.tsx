const url = import.meta.env.SERVER_URL + "/tasks";

export async function create(payload: { title: string; reward: number }) {
  return await fetch(url + "/create", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function findAll() {
  return await fetch(url + "/findAll");
}

export async function findOne(id: string) {
  return await fetch(url + `/findOne/${id}`);
}
