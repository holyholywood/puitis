import { Box, Progress, useBoolean } from "@chakra-ui/react";
import React, { FC, useEffect, useMemo, useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const Loading = useMemo(() => {
    const LoadingComponents: FC = () => {
      if (isLoading)
        return (
          <Box maxW="lg" mx="auto">
            <Progress size="lg" isIndeterminate my="20" rounded="full" />
          </Box>
        );
      return null;
    };
    return LoadingComponents;
  }, [isLoading]);

  return {
    Loading: Loading,
    isLoading,
  };
};

export default useLoading;
