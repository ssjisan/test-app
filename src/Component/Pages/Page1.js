import {
    Button, Card, CardContent, FormControl, FormControlLabel,
    FormLabel, Grid, Radio, RadioGroup, Typography
} from "@material-ui/core";
import React, { useState } from "react";
import allQuestion from "../../JSON/personalityTestQuestion.json";
import useStyles from "./Style/Page1style";

export default function Page1() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [count, setCount] = React.useState("");
  const [questionSet, setQuestionSet] = useState(allQuestion);
  console.log(questionSet);
  const handleChange = (event) => {
    setValue(event.target.value);
    switch (event.target.value) {
      case "veryInaccurate":
        setCount(1);
        break;
      case "moderatelyInaccurate":
        setCount(2);
        break;
      case "neitherAccurateNorInaccurate":
        setCount(3);
        break;
      case "moderatelyAccurate":
        setCount(4);
        break;
      case "veryAccurate":
        setCount(5);
        break;
      default:
        setCount(0);
        break;
    }
    console.log(value);
  };
  console.log(count);
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.title}>
                Personality Test
              </Typography>
                          {
                              questionSet.map((question, index) => <FormControl component="fieldset" className={classes.form}>
                              <FormLabel component="legend">Question {index+1}# {question.question} </FormLabel>
                              <RadioGroup
                                aria-label="gender"
                                name="gender1"
                                value={value}
                                onChange={handleChange}
                              >
                                <FormControlLabel
                                  value="veryInaccurate"
                                  control={<Radio />}
                                  label="Very Inaccurate"
                                />
                                <FormControlLabel
                                  value="moderatelyInaccurate"
                                  control={<Radio />}
                                  label="Moderately Inaccurate"
                                />
                                <FormControlLabel
                                  value="neitherAccurateNorInaccurate"
                                  control={<Radio />}
                                  label="Neither Accurate Nor Inaccurate"
                                />
                                <FormControlLabel
                                  value="moderatelyAccurate"
                                  control={<Radio />}
                                  label="Moderately Accurate"
                                />
                                <FormControlLabel
                                  value="veryAccurate"
                                  control={<Radio />}
                                  label="Very Accurate"
                                />
                                  </RadioGroup>
                                  <Button variant="outlined">{question.sign} Next {question.category}</Button>
                              </FormControl>
                                  
                              )
                          }
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
