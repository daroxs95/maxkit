import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Input,
  Paragraph,
  Reset,
  Stack,
} from "./lib";
import { useState } from "react";

export const Login = ({ onLogin }: { onLogin?: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordError = password ? password.length < 8 : false;
  return (
    <>
      <Reset />

      <Box
        bg="background-primary-strongest"
        height="100vh"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Card withPadding>
          <Flex vertical align="center">
            <Box width="500px">
              <Heading>Login</Heading>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (onLogin) onLogin();
                }}
              >
                <Flex vertical noMarginBottom>
                  <Flex vertical>
                    <Input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      label="Email"
                      type="email"
                      required
                    />
                    <Input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      label="Password"
                      type="password"
                      required
                      error={passwordError}
                      helperText={
                        passwordError
                          ? "Password must be at least 8 characters"
                          : ""
                      }
                    />
                    <a href={"#"}>
                      <Paragraph small>Forgot your password?</Paragraph>
                    </a>
                  </Flex>
                  <Stack noMarginBottom gap="space-70">
                    <Button type="submit">Login</Button>
                  </Stack>
                </Flex>
              </form>
            </Box>
          </Flex>
        </Card>
        <Box marginTop="space-80">
          <a href={"#"}>
            <Paragraph small>
              Need extra help logging in or need to register?
            </Paragraph>
          </a>
        </Box>
      </Box>
    </>
  );
};
