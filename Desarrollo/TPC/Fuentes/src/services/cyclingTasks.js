import pb from "./pb";

export const getTasks = async () => {
  console.log("Function getTasks called");

  if (!pb || !pb.authStore || !pb.authStore.model) {
    console.error("pb, pb.authStore, or pb.authStore.model is undefined");
    return null;
  }

  console.log("authStore model:", pb.authStore.model);

  if (!pb.authStore.model.accionesData) {
    console.error("acciones is undefined");
    return null;
  }

  console.log("acciones:", pb.authStore.model.accionesData);

  const tasks = pb.authStore.model.accionesData;
  console.log("tasks:", tasks);

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

    console.log("User record updated:", updatedRecord);
    return updatedRecord;
  } catch (error) {
    console.error("Error updating user record:", error);
    throw error;
  }
};
