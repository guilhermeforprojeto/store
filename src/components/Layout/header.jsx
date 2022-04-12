import { Button, Flex } from "@chakra-ui/react";

export default function Header(props) {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      px="6"
      align="center"
      bg="gray.700"
    >
      <Flex align="center" ml="auto">
        <Button variant="outline" mr="18">
          Cart
        </Button>
        <Button variant="outline" mr="18">
          Logoff
        </Button>
      </Flex>
    </Flex>
  );
}

// export default function Header(props) {
//   return (
//     <div>
//       {props.title}
//       {props.children}
//       <button>Cart</button>
//     </div>
//   );
// }
