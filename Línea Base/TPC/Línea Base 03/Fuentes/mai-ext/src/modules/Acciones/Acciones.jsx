import { useState, useEffect } from "react";
import {
  ActionIcon,
  Stack,
  ScrollArea,
  Affix,
  Center,
  Loader,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import AccionEditor from "./AccionEditor";
import AccionCard from "./AccionCard";
import useTasks from "../../store/useTasks";
import { updateUserTask } from "../../services/cyclingTasks";

const Acciones = () => {
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);
  const { tasks, isFetching, refetch } = useTasks();

  const [acciones, setAcciones] = useState([]);

  useEffect(() => {
    if (tasks) {
      setAcciones(tasks);
    }
  }, [tasks]);

  if (isFetching) {
    return (
      <Center h="100%">
        <Loader />
      </Center>
    );
  }

  const handleAddTask = (newAction) => {
    const updatedActions = [
      {
        id: acciones.length,
        ...newAction,
      },
      ...acciones,
    ];
    updateUserTask(updatedActions).then(() => {
      refetch();
      modalClose();
    });
  };

  const handleDeleteTask = (taskId) => {
    const newAcciones = acciones.filter(({ id }) => id !== taskId);
    setAcciones(newAcciones);
    updateUserTask(newAcciones).then(() => {
      refetch();
    });
  };

  const handleEditTask = (updatedTask) => {
    const newAcciones = acciones.map((a) =>
      a.id === updatedTask.id ? updatedTask : a,
    );
    setAcciones(newAcciones);
    updateUserTask(newAcciones).then(() => {
      refetch();
    });
  };

  return (
    <>
      <ScrollArea>
        <Stack py={20} px={20}>
          {acciones.map((task) => (
            <AccionCard
              key={task.id}
              accion={task}
              onDelete={() => handleDeleteTask(task.id)}
              onEdit={handleEditTask}
            />
          ))}
        </Stack>
      </ScrollArea>
      <Affix position={{ bottom: 20, right: 20 }}>
        <ActionIcon
          color="default"
          variant="default"
          title="Añadir accion"
          aria-label="Añadir accion"
          onClick={modalOpen}
        >
          <IconPlus size={15} />
        </ActionIcon>
      </Affix>
      <AccionEditor
        opened={modalOpened}
        onClose={modalClose}
        sendLabel="Añadir"
        onSend={handleAddTask}
      />
    </>
  );
};

export default Acciones;
