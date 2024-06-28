import { Box, Input, Reset, Button, Paragraph, Flex, Heading } from "./lib";
import { useState } from "react";
import { Login } from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  return (
    <Box bg="background-primary-strong" height="100vh">
      <Flex vertical align="center">
        <Box width="500px">
          <Heading>Text</Heading>
          <Paragraph>
            <Paragraph inline bold>
              Lorem
            </Paragraph>{" "}
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur, ligula eget tincidunt facilisis, nunc ex ultricies
            purus, nec eleifend purus felis quis metus. Nullam nec eros nec
            ligula fermentum consectetur. Donec id risus ac erat ultricies
            ultricies. Suspendisse potenti. Nulla facilisi. Nulla facilisi.
            Nulla facilisi.
          </Paragraph>
          <Flex vertical>
            <Reset />
            <Input label="Email" />
            <Box>
              <Button>Button</Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
