import { Col, Container, Row, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../services/githubService";
import ProjectCard from "../components/ProjectCard";
import { AnimatePresence } from "framer-motion";
import DisappearText from "../components/DisappearText";


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    "Explore my Projects!",
    "Witness my growth as a Full Stack Engineer!"
  ];

  useEffect(() => {
    const loadProjects = async() => {
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

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(textChangeInterval);
  }, []);

  return (
    <Container className="mt-4">
      <Row className="w-100 text-center mt-5 mb-3">
        <Col>
        <AnimatePresence
        mode="wait">
          <DisappearText key={textArray[textIndex]}
          text={textArray[textIndex]} />
          </AnimatePresence>
          </Col>
      </Row>
      { loading ? (
        <div className="d-flex justify-content-center">
           <Spinner animation= "border" />
        </div>
      ) : (
        <Row>
          { projects.map((repo) => {
            const imageUrl = `https://github.com/tgilly93/${repo.name}/blob/main/images/${repo.name}_thumb.png?raw=true`;

            return (
              <Col key={repo.id} md={4} >
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
