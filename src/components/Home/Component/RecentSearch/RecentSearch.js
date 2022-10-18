import React from "react";
import "./RecentSearch.css";
import * as Icon from 'react-bootstrap-icons'
import { Container, Button } from "react-bootstrap";

const popsearchs = [
  { name: "software developer" },
  { name: "human resources" },
  { name: "software tester" },
  { name: "digital marketing" },
  { name: "sales executive" },
  { name: "data analyst" },
  { name: "software developer freshers" },
  { name: "software tester" },
];
function RecentSearch() {
  return (
    <>
      <Container className="mt-5">
        <div className="text-center text-light mb-3">
          <h4>Popular Search</h4>
        </div>
        <div className="banner__popsearch">
          <div className='banner__popsearch__grid'>
            {popsearchs.map((popsearch) => (
              <Button
                className="banner__popbutton mx-3 my-2 py-2"
                size="sm"
                variant="secondary"
                key={popsearch.name}
              >
                <Icon.Search className='mx-2' /> {popsearch.name}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default RecentSearch;
