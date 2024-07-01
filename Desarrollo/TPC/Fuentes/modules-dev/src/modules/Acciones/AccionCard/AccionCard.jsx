import { Card, Text } from '@mantine/core';
import classes from './AccionCard.module.css';

const AccionCard = ({ accion }) => {
  const items = accion.stats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" color="dimmed">
        {stat.title}
      </Text>
      <Text fw={500} size="sm">
        {stat.value}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="lg" className={classes.card}>
      <Text fw={500}>
        {accion.name}
      </Text>
      <Card.Section className={classes.footer}>
        {items}
      </Card.Section>
    </Card>
  );
}

export default AccionCard;