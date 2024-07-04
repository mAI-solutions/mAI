import { create } from "zustand";

import { getTasks } from "../services/cyclingTasks";

const useTasks = create((set) => ({
  tasks: null,
  isFetching: false,
  fetchTasks: async () => {
    set({ isFetching: true });
    const tasks = await getTasks();
    set({ tasks, isFetching: false });
  },
}));

export default useTasks;
