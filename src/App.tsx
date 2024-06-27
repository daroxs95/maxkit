import { Box, Button, Reset, Text } from "./lib";

function App() {
  return (
    <>
      <Reset />
      <Box display="flex" bg="background-primary-strong">
        <Text>Text</Text>
        <Button>Button</Button>
      </Box>
    </>
  );
}

export default App;
