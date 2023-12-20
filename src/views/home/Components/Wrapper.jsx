import { Box } from '@chakra-ui/layout';
import React from 'react';

const Wrapper = ({ children, ...props }) => {
  return (
    <Box px={[2, 2, 8, 3, '150px']} {...props}>
      {children}
    </Box>
  );
};

export default Wrapper;
