import {
  Badge,
  Box,
  Button,
  Callout,
  Card,
  Flex,
  Heading,
  List,
  ListItem,
  Paragraph,
  Reset,
  Stack,
} from "./lib";

export const JobPost = () => {
  return (
    <>
      <Reset />

      <Box
        bg="background-primary-strongest"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          maxWidth={"1000px"}
          marginBottom="space-180"
          width="100%"
          marginTop="space-140"
        >
          <Box width="100%" marginBottom="space-180">
            <Heading>Figma Witch</Heading>
          </Box>
          <Flex justify="space-between" gap="space-140">
            <Box width="100%">
              <Flex
                wrap
                align="start"
                justify="space-between"
                gap="space-80"
                vertical
              >
                <Stack gap={"space-70"}>
                  <Badge text={"Full-time"} />
                  <Badge text={"Senior"} />
                  <Badge text={"Designer"} />
                  <Badge text={"Figma"} />
                </Stack>
                <Box>
                  <Paragraph bold>Core Responsibilities:</Paragraph>
                  <List ordered>
                    <ListItem>
                      <Paragraph>Design system review</Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Design system implementation</Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>Design system maintenance</Paragraph>
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Paragraph bold>Job profile:</Paragraph>
                  <Paragraph>
                    We are looking for a talented designer to join our team. You
                    need to be a witch and build Figma potions for our clients.
                  </Paragraph>
                </Box>
                <Box>
                  <Paragraph bold>Key Qualifications:</Paragraph>
                  <List>
                    <ListItem>
                      <Paragraph>Witchcraft level 50</Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>
                        Experience with Figma and potion brewing
                      </Paragraph>
                    </ListItem>
                    <ListItem>
                      <Paragraph>
                        Good communication skills with the afterlife
                      </Paragraph>
                    </ListItem>
                  </List>
                </Box>
              </Flex>
              <Callout variant="warning" title={"Deadline"} text={"ASAP"} />
            </Box>

            <Box width="300px">
              <Card inverted withPadding>
                <Heading level={4} inverted>
                  Your dream job
                </Heading>
                <Paragraph inverted small>
                  You will be working on the next big thing.
                </Paragraph>
                <Paragraph inverted small>
                  You will be creating the next big thing.
                </Paragraph>
                <Paragraph inverted small>
                  You will be the next big thing.
                </Paragraph>
                <Flex noMarginBottom justify="center">
                  <Button>Apply now</Button>
                </Flex>
              </Card>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
