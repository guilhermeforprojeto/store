import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import Home from "./components/home";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
