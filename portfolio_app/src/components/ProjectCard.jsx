import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ project, imageUrl }) => {
    return (
        <Card className="mb-3">
            <Card.Img variant="top" src={ imageUrl } alt={`${project.name} thumb`} />
            <Card.Body>
                <Card.Title>{ project.name }</Card.Title>
                <Card.Text>{ project.description || "No description available" }</Card.Text>
                <Card.Text>
                    <small className="text-muted">⭐ { project.stargazers_count } | { project.forks_count }</small>
                </Card.Text>
                { project.homepage && (
                    <Button
                    variant="success"
                    href={ project.homepage } 
                    target="_blank"
                    className="me-2">
                        View Live!
                        </Button>
                )}
                <Button
                variant="primary"
                href={ project.html_url } 
                target="_blank"
                >
                    View on Github
                    </Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;