import { Box, Card, Flex, Heading, Paragraph, Reset } from "./lib";

const jobs = [
  {
    title: "Figma Witch",
    description: "Designing the next big thing",
  },
  {
    title: "React Wizard",
    description: "Building the next big thing",
  },
  {
    title: "Node Sorcerer",
    description: "Running the next big thing",
  },
  {
    title: "Python Warlock",
    description: "Scripting the next big thing",
  },
  {
    title: "Vue Enchanter",
    description: "Animating the next big thing",
  },
  {
    title: "Angular Necromancer",
    description: "Killing the next big thing",
  },
  {
    title: "Svelte Alchemist",
    description: "Transmuting the next big thing",
  },
  {
    title: "TypeScript Bard",
    description: "Singing the next big thing",
  },
  {
    title: "JavaScript Druid",
    description: "Growing the next big thing",
  },
  {
    title: "HTML/CSS Paladin",
    description: "Protecting the next big thing",
  },
  {
    title: "Java Cleric",
    description: "Healing the next big thing",
  },
  {
    title: "C# Monk",
    description: "Meditating the next big thing",
  },
  {
    title: "Ruby Barbarian",
    description: "Raging the next big thing",
  },
  {
    title: "PHP Rogue",
    description: "Sneaking the next big thing",
  },
  {
    title: "Rust Ranger",
    description: "Tracking the next big thing",
  },
  {
    title: "Go Wizard",
    description: "Casting the next big thing",
  },
  {
    title: "Swift Bard",
    description: "Singing the next big thing",
  },
  {
    title: "Kotlin Paladin",
    description: "Protecting the next big thing",
  },
  {
    title: "Perl Cleric",
    description: "Healing the next big thing",
  },
  {
    title: "Scala Monk",
    description: "Meditating the next big thing",
  },
  {
    title: "Haskell Barbarian",
    description: "Raging the next big thing",
  },
  {
    title: "Lua Rogue",
    description: "Sneaking the next big thing",
  },
  {
    title: "Elixir Ranger",
    description: "Tracking the next big thing",
  },
];

export const Jobs = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <Reset />

      <Box
        bg="background-primary-strongest"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box maxWidth={"1000px"} marginBottom="space-180">
          <Box width="100%" marginTop="space-140" marginBottom="space-180">
            <Heading>Awesome job positions</Heading>
          </Box>
          <Flex wrap align="start" justify="space-between" gap="space-80">
            {jobs.map((j) => (
              <Box width={"300px"}>
                <Card withPadding canHover onClick={onClick} inverted>
                  <Heading inverted level={3}>
                    {j.title}
                  </Heading>
                  <Paragraph inverted>{j.description}</Paragraph>
                </Card>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
};
