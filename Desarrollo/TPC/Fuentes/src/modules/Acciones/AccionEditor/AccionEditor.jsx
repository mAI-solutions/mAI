import { useState } from "react";

import {
  Stack,
  Group,
  TextInput,
  Modal,
  Button,
  Text,
  NumberInput,
  Textarea,
  NativeSelect,
} from "@mantine/core";

const AccionEditor = ({ accion, opened, onClose, onSend, sendLabel }) => {
  const [newAccion, setNewAccion] = useState(
    accion || {
      title: "",
      interval: {
        minutes: 30,
        hours: 0,
        days: 0,
      },
      action: {
        type: "notification",
        properties: {
          message: "",
        },
      },
    },
  );

  const handleInputChange =
    (field, nestedField = null) =>
      (event) => {
        if (nestedField) {
          setNewAccion({
            ...newAccion,
            [field]: {
              ...newAccion[field],
              [nestedField]: event.target.value,
            },
          });
        } else {
          setNewAccion({
            ...newAccion,
            [field]: event.target.value,
          });
        }
      };

  console.log(newAccion);

  return (
    <Modal opened={opened} onClose={onClose} centered withCloseButton={false}>
      <Stack>
        <TextInput
          label="Título"
          placeholder="Mi acción cíclica"
          value={newAccion.title}
          onChange={handleInputChange("title")}
        />
        <NativeSelect
          label="Tipo de acción"
          value={newAccion.action.type}
          onChange={(value) =>
            handleInputChange("action", "type")({ target: { value } })
          }
          data={["notification"]}
        />
        <Text>Cada</Text>
        <Group grow style={{ marginTop: -20 }}>
          <NumberInput
            label="Minutos"
            placeholder="30"
            value={newAccion.interval.minutes}
            onChange={(value) =>
              handleInputChange("interval", "minutes")({ target: { value } })
            }
          />
          <NumberInput
            label="Horas"
            placeholder="0"
            value={newAccion.interval.hours}
            onChange={(value) =>
              handleInputChange("interval", "hours")({ target: { value } })
            }
          />
          <NumberInput
            label="Días"
            placeholder="0"
            value={newAccion.interval.days}
            onChange={(value) =>
              handleInputChange("interval", "days")({ target: { value } })
            }
          />
        </Group>
        <Textarea
          value={newAccion.action.properties.message}
          label="Contenido"
          onChange={(value) => {
            setNewAccion({
              ...newAccion,
              action: {
                ...newAccion.action,
                properties: {
                  ...newAccion.action.properties,
                  message: value,
                },
              },
            });
          }}
        />
        <Group justify="space-between">
          <Button variant="default" aria-label="Cancelar" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant="filled"
            aria-label={sendLabel}
            onClick={() => {
              console.log(newAccion);
              onSend(newAccion);
            }}
          >
            {sendLabel}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default AccionEditor;
