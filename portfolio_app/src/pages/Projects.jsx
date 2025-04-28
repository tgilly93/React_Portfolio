import { Col, Container, Row, Spinner, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../services/githubService";
import ProjectCard from "../components/ProjectCard";
import RotatingDisappearText from "../components/RotatingDisappearText";
import "../styles/TextAnimation.css";
import { Link } from "react-router-dom";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const repos = await fetchRepositories();
      const sortedRepos = repos.sort((a, b) => {
        const dateA = new Date(a.pushed_at);
        const dateB = new Date(b.pushed_at);
        return dateB - dateA;
      });
      setProjects(sortedRepos);
      setLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <Container className="mt-4">
      <Row className="w-100 text-center mt-5 mb-3">
        <Col>
          <div className="rotating-text-container">
          <RotatingDisappearText
              textArray={[
                "Explore my Projects!",
                "Witness my growth as a Full Stack Engineer!",
              ]}
            />
          </div>
        </Col>
      </Row>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          {projects.map((repo) => {
            const imageUrl = `https://github.com/tgilly93/${repo.name}/blob/main/images/${repo.name}_thumb.png?raw=true`;

            return (
              <Col key={repo.id} md={4}>
                <ProjectCard project={repo} imageUrl={imageUrl} />
              </Col>
            );
          })}
          <div className="d-grid gap-2 d-md-flex justify-content-center mt-5">
                      <Link to="/Resume">
                        <Button variant="primary" size="lg" className="px-4 me-md-2 mb-4">
                          Continue Journey
                        </Button>
                      </Link>
                    </div>
        </Row>
      )}
    </Container>
  );
};

export default Projects;
