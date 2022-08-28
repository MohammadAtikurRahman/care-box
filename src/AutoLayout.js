import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import App from './App';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';




function AutoLayout() {
  return (
   
     <Card className='ccard'>              
            <Container className='ccontainer'>
                <Row>
                    <Col> 
                            <div style={{marginLeft: '40px'}}>
                                <App />
                            </div> 
                    </Col>
                    <Col>
                        <div className='move'>
                            <h2>List of Videos</h2>
                            <Button /> 
                        </div>
                        
                    </Col>
                </Row>
                
                </Container>

        
    </Card>
   
  
  );
}

export default AutoLayout;