import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import allQuestion from "../../JSON/personalityTestQuestion.json";
import useStyles from "./Style/Page1style";

export default function Page1() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [questionSet, setQuestionSet] = useState(allQuestion);
  const [curQuestionNo, setCurQuestionNo] = useState(0);
  const [category, setCategory] = useState("");
  const [result, setResult] = useState();
  const [extraversion, setExtraversion] = useState(0);
  const [agreeableness, setAgreeableness] = useState(0);
  const [conscientiousness, setConscientiousness] = useState(0);
  const [neuroticism, setNeuroticism] = useState(0);
  const [openness, setOpenness] = useState(0);
  console.log("extraversion = ", extraversion);
  console.log("agreeableness = ", agreeableness);
  console.log("conscientiousness = ", conscientiousness);
  console.log("neuroticism = ", neuroticism);
  console.log("openness = ", openness);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const countResult = () => {
    switch (category) {
      case "extraversion":
        setExtraversion(+value + extraversion);
        break;
      case "agreeableness":
        setAgreeableness(+value + agreeableness);
        break;
      case "conscientiousness":
        setConscientiousness(+value + conscientiousness);
        break;
      case "neuroticism":
        setNeuroticism(+value + neuroticism);
        break;
      case "openness":
        setOpenness(+value + openness);
        break;
        deafault:;
    }
  };
  // countResult();
  const nextQuestion = () => {
    countResult();
    setCurQuestionNo(questionSet[curQuestionNo].index);
    setValue("");
  };
  const testResult = () => {
    
  };
  // console.log("point-", value, "step-", category, "RES-", countResult());
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title}>
                Personality Test
              </Typography>
              <FormControl
                component="fieldset"
                className={classes.form}
                onClick={() => setCategory(questionSet[curQuestionNo].category)}
              >
                <FormLabel
                  component="legend"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {questionSet[curQuestionNo].question}
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={questionSet[curQuestionNo].veryInaccurate}
                    checked={
                      value === questionSet[curQuestionNo].veryInaccurate
                    }
                    control={<Radio />}
                    label="Very Inaccurate"
                  />
                  <FormControlLabel
                    value={questionSet[curQuestionNo].moderatelyInaccurate}
                    checked={
                      value === questionSet[curQuestionNo].moderatelyInaccurate
                    }
                    control={<Radio />}
                    label="Moderately Inaccurate"
                  />
                  <FormControlLabel
                    value={
                      questionSet[curQuestionNo].neitherAccurateNorInaccurate
                    }
                    control={<Radio />}
                    checked={
                      value ===
                      questionSet[curQuestionNo].neitherAccurateNorInaccurate
                    }
                    label="Neither Accurate Nor Inaccurate"
                  />
                  <FormControlLabel
                    value={questionSet[curQuestionNo].moderatelyAccurate}
                    checked={
                      value === questionSet[curQuestionNo].moderatelyAccurate
                    }
                    control={<Radio />}
                    label="Moderately Accurate"
                  />
                  <FormControlLabel
                    value={questionSet[curQuestionNo].veryAccurate}
                    checked={value === questionSet[curQuestionNo].veryAccurate}
                    control={<Radio />}
                    label="Very Accurate"
                  />
                </RadioGroup>
                {curQuestionNo < questionSet.length - 1 ? (
                  <Button variant="outlined" onClick={nextQuestion}>
                    Next
                  </Button>
                ) : (
                  <Button variant="outlined" onClick={countResult}>
                    Finish
                  </Button>
                )}
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
