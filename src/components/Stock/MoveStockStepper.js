import React, { Fragment, useState, useEffect } from "react";

//redux imports
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, transferStock } from "../../actions/transferStockActions";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
  },
  StepperRoot: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuButtons: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const ChooseDestination = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="flex-start">
      <Grid item xs={6}>
        <Grid container justify="center">
          <Grid item>
            <Typography vareint="h5">Move Stock From (PickUp)</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Divider orientation="vertical" />
      </Grid>
      <Grid item item xs={5}>
        <Typography vareint="h5">Move Stock To (Destination)</Typography>
      </Grid>
    </Grid>
  );
};
const ChoosePickup = () => {
  return <h1>Choose Pickup</h1>;
};
const AddQonatities = () => {
  return <h1>Add Qonatities</h1>;
};
const CreateJob = () => {
  return <h1>Create Job</h1>;
};

const getSteps = () => {
  return [
    "Choose Destination",
    "Choose Pickup",
    "Add Qonatities",
    "Create Job",
  ];
};

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <ChooseDestination />;
    case 1:
      return <ChoosePickup />;
    case 2:
      return <AddQonatities />;
    case 3:
      return <CreateJob />;
    default:
      return "Unknown stepIndex";
  }
};

const MoveStockStepper = ({ handleDrawerClose }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.transferStock);

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <div>
      {/* 
      <Grid container>
        <Grid item>
          <IconButton
            variant="contained"
            color="secondary"
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            <ArrowBackIosOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.title}>
          <Typography variant="h6">Move Stock</Typography>
        </Grid>
        <Grid item>
          <IconButton color="inherit" onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
       */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleDrawerClose}>Done</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>
              {getStepContent(activeStep)}
            </div>
            <div className={classes.menuButtons}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                margin="dense"
                disabled={activeStep === 0}
                onClick={handleReset}
                className={classes.backButton}
              >
                Add More
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="small"
                margin="dense"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Create Job" : "Done"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoveStockStepper;
