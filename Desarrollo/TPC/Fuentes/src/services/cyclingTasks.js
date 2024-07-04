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

  const { tasks } = pb.authStore.model.accionesData;
  console.log("tasks:", tasks);

  return tasks;
};
