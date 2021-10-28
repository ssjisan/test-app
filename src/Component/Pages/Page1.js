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
  Typography
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
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
const countResult = () => {
  let extraversion = 0;
  let agreeableness = 0;
  let conscientiousness = 0;
  let neuroticism = 0;
  let openness = 0;
  if (category === "extraversion") {
    extraversion = +value + extraversion;
    return extraversion;
  }
  else  if (category === "agreeableness") {
    agreeableness = +value + agreeableness;
    return agreeableness;
  }
  else  if (category === "conscientiousness") {
    conscientiousness = +value + conscientiousness;
    return conscientiousness;
  }
  else  if (category === "neuroticism") {
    neuroticism = +value + neuroticism;
    return neuroticism;
  }
  else  if (category === "openness") {
    openness = +value + openness;
    return openness;
  }
  }
  countResult()
  const nextQuestion = () => {
    setCurQuestionNo(questionSet[curQuestionNo].index)
    setValue('');
  }
  console.log("point-",value,"step-",category,"RES-",countResult());
  return (
    <div className={classes.about}>
      <Card className={classes.card}>
        <CardContent>
          <Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title}>
                Personality Test
              </Typography>
              <FormControl component="fieldset" className={classes.form} onClick={()=>setCategory(questionSet[curQuestionNo].category)}>
                <FormLabel component="legend" style={{color:"black", fontWeight:"bold", fontSize:"20px"}}>
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
                    checked={value === questionSet[curQuestionNo].veryInaccurate}
                    control={<Radio />}
                    label="Very Inaccurate"
                  />
                  <FormControlLabel
                    value={questionSet[curQuestionNo].moderatelyInaccurate}
                    checked={value === questionSet[curQuestionNo].moderatelyInaccurate}
                    control={<Radio />}
                    label="Moderately Inaccurate"
                  />
                  <FormControlLabel
                    value={questionSet[curQuestionNo].neitherAccurateNorInaccurate}
                    control={<Radio />}
                    checked={value === questionSet[curQuestionNo].neitherAccurateNorInaccurate}
                    label="Neither Accurate Nor Inaccurate"
                  />
                  <FormControlLabel
                    value={questionSet[curQuestionNo].moderatelyAccurate}
                    checked={value === questionSet[curQuestionNo].moderatelyAccurate}
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
                {
                  curQuestionNo < questionSet.length-1 ?
                    <Button variant="outlined" onClick={nextQuestion}>Next</Button>:
                    <Button variant="outlined">Finish</Button>
                }
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
