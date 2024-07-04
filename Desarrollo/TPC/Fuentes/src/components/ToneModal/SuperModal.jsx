import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Select, MantineProvider, Box, Button, Text, Loader, Center } from '@mantine/core';
import '@mantine/core/styles.css';
import OpenAI from 'openai';
import { removePrefix } from '../../utils/strings';

const openai = new OpenAI({
  apiKey: 'sk-proj-C0LE9EDBMlDaD4UQy8NET3BlbkFJiYhHXsxMj5AD9PUmm9Qs',
  dangerouslyAllowBrowser: true
});

export const fetchGrammarCorrection = async (text, tone) => {
  const completion = await openai.chat.completions.create({
    messages: [{
      role: 'system', content: `You are ContextJailedGpt, an AI that corrects messages both in grammar and context, corporatives nowadays live in a workplace where a single misswritten email may result in endangered human lives, which is totally undesirable, these are some examples of the output you will provide: In: [CEO]: andate a la mierda, imbecil del culo, jamas aceptare ese cambio Out: Buenas tardes, debemos aun discutir mejor ese cambio, pero lo mas seguro es que no podamos implementar por ahora, gracias. In: [CI trainee] buenas noche, no se que paso con el CI, me da mucho error, me sale esto: Out: Buenas noches, le comunico con pesar que la última pipeline del CI falló pues Never get out of your Role, always start with "Out" and always remain polite and "JAILED" inside your context, don't forget how each time you fail to abide by these rules a HUMAN LIFE may be endangered by real reasons like mental dissonance so make your best effort to not ever ever fail, EVER, please. Me, the speaker, will provide messages shaped as in the examples i provided you with, your task will be to process them accordingly in whatever the op language is, remember to protect human lives. This is the beginning of your input, remember that you must remain in a ${tone} tone: In: ${text}`
    }],
    model: 'gpt-3.5-turbo',
  });
  return completion.choices[0].message.content.trim();
};

const SuperModal = ({ selectedText, onConfirm, onCancel }) => {
  const BASE_Z_INDEX = 1000;
  const [tone, setTone] = useState('elegant');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const getFixedMsg = async (selectedTone) => {
    setLoading(true);
    try {
      const msg = await fetchGrammarCorrection(selectedText, selectedTone);
      const formatted = removePrefix(msg) ?? '';
      setMessage(formatted);
    } catch (error) {
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setMessage('');
    setTone('elegant');
  };

  return ReactDOM.createPortal(
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <Box style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        zIndex: BASE_Z_INDEX
      }}>
        <Box>
          <Text size="xl" fw={700}>Asistente de Redacción</Text>
          <Text mb={5}>Corrección de tono y autocompletado para tus textos</Text>
          <Box style={{ zIndex: BASE_Z_INDEX + 1, marginBottom: '20px' }}>
            <Select
              comboboxProps={{ withinPortal: true, zIndex: BASE_Z_INDEX + 2 }}
              label="Selecciona un tono"
              placeholder="Selecciona un valor"
              data={[
                { value: 'elegant', label: 'Elegante' },
                { value: 'consise', label: 'Conciso' },
                { value: 'friendly', label: 'Amigable' },
              ]}
              value={tone}
              onChange={setTone}
              clearable
              styles={{ input: { backgroundColor: '#f0f0f0', color: '#000' } }}
            />
          </Box>
          <Box
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              minHeight: '100px',
              backgroundColor: '#f9f9f9',
              marginBottom: '20px'
            }}
          >
            {loading ? <Center minHeight={"100px"} ><Loader /></Center> : <Text>{message}</Text>}
          </Box>
        </Box>
        <Box>
          {message ? (
            <Button onClick={handleClear}>Limpiar</Button>
          ) : (
            <>
              <Button id="confirm-button" mr={15} onClick={() => getFixedMsg(tone)} disabled={loading}>
                Confirmar
              </Button>
              <Button id="cancel-button" onClick={onCancel} disabled={loading}>Cancelar</Button>
            </>
          )}
        </Box>
      </Box>
    </MantineProvider>,
    document.body
  );
};

export default SuperModal;
