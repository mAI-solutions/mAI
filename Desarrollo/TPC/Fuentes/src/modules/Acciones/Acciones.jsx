import { useState } from "react";

import { ActionIcon, Stack, ScrollArea, Affix } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { IconPlus } from "@tabler/icons-react";

import AccionEditor from "./AccionEditor";
import AccionCard from "./AccionCard";
import useTasks from "../../store/useTasks";

const Acciones = () => {
  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);

  const { tasks, isFetching } = useTasks();

  if (isFetching) {
    return (
      <Center h="100%">
        <Loader />
      </Center>
    );
  }

  if (!tasks) {
    return;
  }

  const [acciones, setAcciones] = useState(tasks);

  return (
    <>
      <ScrollArea>
        <Stack py={20} px={20}>
          {tasks.map((task) => (
            <AccionCard
              key={task.id}
              accion={task}
              onDelete={() => {
                const newAcciones = acciones.filter(
                  ({ id }) => id !== accion.id,
                );
                setAcciones(newAcciones);
              }}
              onEdit={(newAccion) => {
                const newAcciones = acciones.map((a) => {
                  if (a.id === task.id) {
                    return newAccion;
                  }
                  return a;
                });
                setAcciones(newAcciones);
              }}
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
        onSend={(newAccion) => {
          setAcciones([
            {
              id: Math.random() * 1000000,
              ...newAccion,
            },
            ...acciones,
          ]);
          modalClose();
        }}
      />
    </>
  );
};

export default Acciones;
