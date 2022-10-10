import { useToast } from "@chakra-ui/react";

export const useToastCustom = () => {
  const toast = useToast();

  const showSuccess = (title: string, description: string) =>
    toast({
      title,
      description,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

  return {
    showSuccess,
  };
};
