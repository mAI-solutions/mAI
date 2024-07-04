import { useEffect } from "react";

import useRSS from "../store/useRSS";
import useTasks from "../store/useTasks";

const useAppStart = ({ loggedIn }) => {
  const { fetchPosts } = useRSS();
  const { fetchTasks } = useTasks();

  useEffect(() => {
    const onAppStart = async () => {
      fetchPosts();
      fetchTasks();
    };
    if (loggedIn) {
      onAppStart();
    }
  }, [loggedIn]);
};

export default useAppStart;
