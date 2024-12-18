const url = import.meta.env.SERVER_URL + "/users";

export async function create(payload: { initData: string }) {
  return await fetch(url + "/create", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function findAll() {
  return await fetch(url + "/findAll");
}

export async function findOne(initData: string) {
  return await fetch(url + `/findOne/${initData}`);
}

export async function findStats(initData: string) {
  return await fetch(url + `/findStats/${initData}`);
}

export async function findAllUsersCount() {
  return await (url + "/findAllUsersCount");
}

export async function update(referralCode: string) {
  return await fetch(url + `/update/${referralCode}`, {
    method: "PATCH",
  });
}

export async function updateUserTask(initData: string, taskId: number) {
  return await fetch(url + `/updateUserTask/${initData}/${taskId}`, {
    method: "PATCH",
  });
}
