import React , { useState } from "react";

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

function First() {
    return (
        <>
             <h1>Sahanbcs</h1>
      <Example />
      <Container className="p-3">
        <div>
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <ExampleToast>
            We now have Toasts
            <span role="img" aria-label="tada">
              🎉
            </span>
          </ExampleToast>
        </div>
      </Container>
      <div>
        <p className="d-inline-flex gap-1">
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Link with href
          </a>
          <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
        </>
    );
}



function Example() {
    return (
      <div>
        <h1>
          Example heading
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </h1>
      </div>
    );
  }
  
  const ExampleToast = ({ children }: { children: any }) => {
    const [show, toggleShow] = useState(true);
  
    return (
      <>
        {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
          <Toast.Header>
            <strong className="mr-auto">React-Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </>
    );
  };
  

export default First;