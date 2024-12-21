const url = import.meta.env.SERVER_URL + "/users";

export async function create(payload: { initData: string }) {
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

export async function findOne(initData: string) {
  const result = await fetch(url + `/findOne/${initData}`);
  return await result.json();
}

export async function findStats(initData: string) {
  const result = await fetch(url + `/findStats/${initData}`);
  return await result.json();
}

export async function findAllUsersCount() {
  const result = await fetch(url + "/findAllUsersCount");
  return await result.json();
}

export async function update(referralCode: string) {
  const result = await fetch(url + `/update/${referralCode}`, {
    method: "PATCH",
  });

  return await result.json();
}

export async function updateUserTask(initData: string, taskId: number) {
  const result = await fetch(url + `/updateUserTask/${initData}/${taskId}`, {
    method: "PATCH",
  });

  return await result.json();
}
