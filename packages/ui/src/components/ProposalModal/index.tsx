import React, {
  useState,
} from 'react';
import {
  Typography,
  Modal,
  Backdrop,
  Fade,
  FormControl,
  InputLabel,
  Input,
  Button,
  Box,
} from "@material-ui/core";

import Aragon from "services/aragon";
import useStyles from "components/ProposalModal/styles"

function ProposalModal(props: any) {
  const classes = useStyles();
  const { open, handleClose } = props;
  const [stakingTarget, setStakingTarget] = useState<number>(0);
  
  const submitProposal = async () => {
    const aragon = await Aragon.getInstance();
    aragon.newVote(stakingTarget);
  }
  
  const onSubmit = (event: any) => {
    event.preventDefault();
    submitProposal();
  }
  
  const onChange = (event: any) => {
    const { value } = event.target;
    setStakingTarget(Number(value));
  }
  
  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <Typography variant="h2">
              New Proposal
            </Typography>
            <form onSubmit={onSubmit} className={classes.form}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="target-amout">Staking target amount</InputLabel>
                  <Input 
                    id="target-amout" 
                    type="number" 
                    onChange={onChange}
                  />
                  Staking Target: { stakingTarget }
                </FormControl>
                <FormControl>
                  <Button color="inherit" type="submit">
                    Submit proposal
                  </Button>
                </FormControl>
            </form>
          </Box>
        </Fade>
      </Modal>
  );
}

export default ProposalModal;