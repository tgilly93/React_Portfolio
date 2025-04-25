import { Col, Container, Row, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../services/githubService";
import ProjectCard from "../components/ProjectCard";
import RotatingText from "../components/RotatingText";

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
          <div style={{
             height: "3rem",
             overflow: "hidden",
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             }}
             >
            <RotatingText
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
        </Row>
      )}
    </Container>
  );
};

export default Projects;
