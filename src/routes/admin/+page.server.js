export async function load() {}

export const actions = {
  login: async ({ request }) => {
    let data = await request.formData();
    let email = data.get("email");
    let password = data.get("password");
  },
};
