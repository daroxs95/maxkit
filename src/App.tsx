import { Box, Input, Reset, Text, Button, Stack } from "./lib";

function App() {
  return (
    <Box display="flex" bg="background-primary-strong">
      <Stack vertical>
        <Reset />
        <Input label="Email" />
        <Text>Text</Text>
        <Button>Button</Button>
      </Stack>
    </Box>
  );
}

export default App;
