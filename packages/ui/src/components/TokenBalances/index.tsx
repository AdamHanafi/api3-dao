import React, { useState, useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import { API3Context } from "contexts";

import useStyles from "components/TokenBalances/styles";

function TokenBalances() {
  const api3Context = useContext(API3Context)
  const classes = useStyles();
  const [API3TokensSupply] = useState<number>(0)
  const [API3TokensStaked] = useState<number>(0);
  const tokenItem = (token: any, index: number) => { 
    return (
      <Box className={classes.box} key={index}>
        <Typography variant="subtitle1">
          { token.name }: { token.balance }
        </Typography>
      </Box>
    )
  }
  const TokensList = () => {
    return (
      <>
        <Box className={classes.box}>
          <Typography variant="subtitle1">
            API3 tokens supply: { api3Context.tokens[0] ? api3Context.tokens[0].totalSupply : 0 }
          </Typography>
        </Box>
        <Box className={classes.box}>
          <Typography variant="subtitle1">
            API3 staked tokens supply: { api3Context.tokens[1] ? api3Context.tokens[1].totalSupply : 0 }
          </Typography>
        </Box>
        {
          api3Context.tokens.map(tokenItem)
        }
      </>
    );
  }

  return <TokensList />
}

export default TokenBalances;
