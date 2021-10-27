import React, { useState } from "react";
import useStyles from "./Style/HeaderStyle";
import Page1 from "./Pages/Page1";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page3 from "./Pages/Page3";
import Page2 from "./Pages/Page2";


export default function Header() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleClick = (data) => {
    setPage(data);
  };
  return (
    <>
      <div
        style={{
          height: "100px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className={classes.tabLink}
          style={{
            borderBottom:
              page === 1 ? "3px solid #35DCDC" : "3px solid #FFFFFF",
            color: page === 1 ? "black" : "black",
          }}
          onClick={() => handleClick(1)}
        >
          Home
        </div>
        <div
          className={classes.tabLink}
          style={{
            borderBottom:
              page === 2 ? "3px solid #35DCDC" : "3px solid #FFFFFF",
            color: page === 2 ? "black" : "black",
          }}
          onClick={() => handleClick(2)}
        >
          About Me
        </div>
        <div
          className={classes.tabLink}
          style={{
            borderBottom:
              page === 3 ? "3px solid #35DCDC" : "3px solid #FFFFFF",
            color: page === 3 ? "black" : "black",
          }}
          onClick={() => handleClick(3)}
        >
          Contact
        </div>
        <div
          className={classes.tabLink}
          style={{
            borderBottom:
              page === 4 ? "3px solid #35DCDC" : "3px solid #FFFFFF",
            color: page === 4 ? "black" : "black",
          }}
          onClick={() => handleClick(4)}
        >
          Projects
        </div>
        <div
          className={classes.tabLink}
          style={{
            borderBottom:
              page === 5 ? "3px solid #35DCDC" : "3px solid #FFFFFF",
            color: page === 5 ? "black" : "black",
          }}
          onClick={() => handleClick(5)}
        >
          Blogs
        </div>
      </div>
      <div>
        {page === 1 && <Page1 handleClick={handleClick} />}
        {page === 2 && <Page2 handleClick={handleClick} />}
        {page === 3 && <Page3 handleClick={handleClick} />}
        {page === 4 && <Page4 handleClick={handleClick} />}
        {page === 5 && <Page5 handleClick={handleClick} />}
      </div>
    </>
  );
}
