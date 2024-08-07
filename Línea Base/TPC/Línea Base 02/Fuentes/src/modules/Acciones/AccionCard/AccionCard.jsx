import { ActionIcon, Group, Card, Text, Menu } from "@mantine/core";
import { useState, useEffect } from "react";

import { useDisclosure } from "@mantine/hooks";

import {
  IconEdit,
  IconTrash,
  IconDots,
  IconPlayerPlay,
  IconPlayerStop,
} from "@tabler/icons-react";

import AccionEditor from "../AccionEditor";

const AccionCard = ({ accion, onEdit, onDelete }) => {
  const [modalOpened, { open: modalOpen, close: modalClose }] = useDisclosure();
  const [active, setActive] = useState(false);

  useEffect(() => {
    chrome.storage.local.get([`notification_active_${accion.id}`], (result) => {
      if (result[`notification_active_${accion.id}`]) {
        setActive(true);
      }
    });
  }, [accion.id]);

  const startNotification = (task) => {
    chrome.runtime.sendMessage(
      {
        type: "scheduleNotification",
        task: task,
      },
      (response) => {
        if (response.status === "Notification scheduled") {
          setActive(true);
          chrome.storage.local.set({
            [`notification_active_${task.id}`]: true,
          });
        }
      },
    );
  };

  const stopNotification = (taskId) => {
    chrome.runtime.sendMessage(
      {
        type: "stopNotification",
        taskId: taskId,
      },
      (response) => {
        if (response.status === "Notification stopped") {
          setActive(false);
          chrome.storage.local.remove(`notification_active_${taskId}`);
        }
      },
    );
  };

  return (
    <>
      <Card>
        <Group position="apart" align="center" style={{ width: "100%" }}>
          <div style={{ flex: 1 }}>
            <Text sise="md" fw={700}>
              {accion.title}
            </Text>
            <Text size="sm" fw={500}>
              {accion.action.properties.message}
            </Text>
            <Text size="xs" c="dimmed">
              Cada {accion.interval.minutes} Minutos, {accion.interval.hours}{" "}
              Horas, {accion.interval.days} Días
            </Text>
          </div>
          <ActionIcon variant="transparent" color="green" aria-label="Iniciar">
            {active ? (
              <IconPlayerStop
                size={20}
                onClick={() => {
                  stopNotification(accion.id);
                  setActive(false);
                }}
              />
            ) : (
              <IconPlayerPlay
                size={20}
                onClick={() => {
                  startNotification(accion);
                  setActive(true);
                }}
              />
            )}
          </ActionIcon>
          <Menu position="bottom-end">
            <Menu.Target>
              <ActionIcon
                aria-label="Opciones"
                title="Opciones"
                variant="transparent"
                color="default"
                style={{ width: 2 }}
              >
                <IconDots size={20} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconEdit size={15} />}
                onClick={modalOpen}
              >
                Editar
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash size={15} />}
                onClick={onDelete}
              >
                Eliminar
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card>
      <AccionEditor
        opened={modalOpened}
        onClose={modalClose}
        accion={accion}
        onSend={(newAccion) => {
          onEdit(newAccion);
          modalClose();
        }}
        sendLabel="Actualizar"
      />
    </>
  );
};

export default AccionCard;
