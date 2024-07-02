import { ScrollArea, Stack } from "@mantine/core"
import classes from './ScrollStack.module.css';

const ScrollStack = ({ h = 420, children }) => (
  <ScrollArea h={h} classNames={classes} >
    <Stack gap='lg' className={classes.stack}>
      {children}
    </Stack>
  </ScrollArea>
)

export default ScrollStack