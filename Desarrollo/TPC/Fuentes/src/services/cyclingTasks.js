import pb from "./pb";

export const getTasks = async () => {
  console.log("Function getTasks called");

  // Check if authStore and model are defined
  if (!pb || !pb.authStore || !pb.authStore.model) {
    console.error("pb, pb.authStore, or pb.authStore.model is undefined");
    return null;
  }

  // Log the entire model for debugging
  console.log("authStore model:", pb.authStore.model);

  // Check if acciones is defined
  if (!pb.authStore.model.accionesData) {
    console.error("acciones is undefined");
    return null;
  }

  // Log acciones for debugging
  console.log("acciones:", pb.authStore.model.accionesData);

  // Destructure tasks from acciones
  const { tasks } = pb.authStore.model.accionesData;
  console.log("tasks:", tasks);

  return tasks;
};
