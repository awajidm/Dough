import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const ChooseDestination = () => {
  return <h1>Choose Destination</h1>;
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

const MoveStockStepper = () => {
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

  return (
    <div className={classes.root}>
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
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>
              {getStepContent(activeStep)}
            </div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Add More
              </Button>

              <Button
                variant="contained"
                color="secondary"
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
