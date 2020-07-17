import React from 'react';

import { Box, Text, Code, Grid, Button, ButtonGroup } from '@chakra-ui/core';

export const UserLessUi = (_: {}) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid
        minH="100vh"
        p={3}
      >
        <Text>
          <Code fontSize="xl">System.out.println("JSP FTW");</Code>.
        </Text>
        <ButtonGroup spacing={4}>
          <Button variantColor="teal" variant="solid">
            Button
          </Button>
          <Button variantColor="teal" variant="outline">
            Button
          </Button>
          <Button variantColor="teal" variant="ghost">
            Button
          </Button>
          <Button variantColor="teal" variant="link">
            Button
          </Button>
        </ButtonGroup>
      </Grid>
    </Box>
  );
};

export default UserLessUi;
