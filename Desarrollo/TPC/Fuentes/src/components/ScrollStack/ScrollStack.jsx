import { ScrollArea, Stack } from "@mantine/core"
import classes from './ScrollStack.module.css';

const ScrollStack = ({ children }) => (
  <ScrollArea h={'420'} classNames={classes} >
    <Stack gap='lg' className={classes.stack}>
      {children}
    </Stack>
  </ScrollArea>
)

export default ScrollStack