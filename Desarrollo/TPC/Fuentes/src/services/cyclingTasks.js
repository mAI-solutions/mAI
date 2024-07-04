import pb from "./pb";

export const getTasks = async () => {
  if (!pb || !pb.authStore || !pb.authStore.model) {
    return null;
  }

  if (!pb.authStore.model.accionesData) {
    return null;
  }

  const tasks = pb.authStore.model.accionesData;

  return tasks;
};

export const updateUserTask = async (newActions) => {
  try {
    const userId = pb.authStore.model.id;
    const userRecord = await pb.collection("users").getOne(userId);

    userRecord["accionesData"] = newActions;

    const updatedRecord = await pb
      .collection("users")
      .update(userId, userRecord);

    return updatedRecord;
  } catch (error) {
    throw error;
  }
};
