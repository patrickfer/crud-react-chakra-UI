import {
  Box, 
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "./components/ModalComp";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [ dataEdit, setDataEdit] = useState({});

const isMobile = useBreakpointValue({
  base: true,
  lg: false,
});

useEffect(() => {
  const db_costumer = localStorage.getItem("cad_cliente")
  ? JSON.parse(localStorage.getItem("cad_cliente"))
  : [];

  setData(db_costumer);
}, [setData]);

  const handleRemove = (email) => {
    const newArray = data.filter((item) => item.email !== email);

    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));
  };


return (
  <Flex
  h="100vh"
  align="center"
  justify="center"
  fontSize="20px"
  fontFamily="helvetica"
  > 
    <Box maxW={800} w="100vh" py={10} px={2}> 
      <Button colorScheme="blue" onClick={() => [setDataEdit({}), onOpen()]}>
        Novo Cadastro
      </Button>

      <Box overflowY="auto" height="100%">
        <Table mt="6">
          <Thead>
            <Tr>
              <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                Nome
              </Th>
              <Th maxW={isMobile ? 5 : 100} fontSize="20px">
                E-mail
              </Th>
              <Th p={0}></Th>
              <Th p={0}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ name, email }, index) => (
              <Tr key={index} cursor="pointer" _hover={{ bg: "gray.100" }}>
                <Td maxW={isMobile ? 5 : 100} fontSize="20px">{name}</Td>
                <Td maxW={isMobile ? 5 : 100} fontSize="20px">{email}</Td>
                <Td p={0}>
                  <EditIcon
                 _hover={{ transform: 'scale(1.1)' }}
                  fontSize={20}
                  onClick={() => [
                    setDataEdit({ name, email, index }),
                    onOpen(),
                  ]}
                  />
                </Td>
                <Td p={0}>
                  <DeleteIcon
                   _hover={{ transform: 'scale(1.1)' }}
                  fontSize={20}
                  onClick={() => handleRemove(email)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
    {isOpen && (
      <ModalComp
      isOpen={isOpen}
      onClose={onClose}
      data={data}
      setData={setData}
      dataEdit={dataEdit}
      setDataEdit={setDataEdit}
      />
    )}
    </Flex>
)
};

export default App;
