import React from 'react'
import styled from 'styled-components'
import {Card, Row, Col} from 'react-bootstrap'

const Container = styled.div`
    background-color: #F5F5F5;
`

const Language = styled.div`
    display: flex;
`

const LanguageContent = styled.div`
    padding: 0 5px 0 5px;
`

const Explanation = styled.div`
    margin-top: 7px;
`

export default function FrontProject({frontProject}) {
    return (
    <>
        <Container>
        <h2 className="display-4 pb-5 text-center pt-5">{frontProject.heading}</h2>
        <Row md={3} className="g-4 pb-5">
            {frontProject.projects.map((project, idx) => (
                <Col>
                <Card>
                    <Card.Img variant="top" src={project.img} />
                    <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                    <Language>languages : {project.language.map(lang=> <LanguageContent>{lang}</LanguageContent>)} </Language>
                    <Explanation>{project.explanation}</Explanation>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>  
        </Container>
    </>
    )
}
