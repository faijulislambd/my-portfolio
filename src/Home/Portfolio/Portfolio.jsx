import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Title from "../../Components/Title/Title";
import { FaTimes } from "react-icons/fa";
import Container from "../../Components/Container";
import Row from "../../Components/Row";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState({});
  const [projectModal, setProjectModal] = useState(false);
  const closeModal = () => {
    setProjectModal(false);
  };

  useEffect(() => {
    fetch("./data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section className="py-16" id="portfolio">
      <Container>
        <Title className="mb-16">Portfolio</Title>
        <Row className="justify-center">
          {projects.length > 0 &&
            projects.map((project, index) => (
              <PortfolioCard
                project={project}
                key={index}
                setProjectModal={setProjectModal}
                setSelectedProject={setSelectedProject}
              ></PortfolioCard>
            ))}
        </Row>
      </Container>
      {/*Project Modal*/}
      <Transition appear show={projectModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[95%] md:max-w-[70%] transform rounded-2xl bg-white text-slate-600 p-0 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center relative p-6"
                  >
                    {selectedProject.name}
                    <button
                      onClick={closeModal}
                      className="btn btn-sm btn-circle btn-primary text-white absolute -top-2 -right-2"
                    >
                      <FaTimes></FaTimes>
                    </button>
                  </Dialog.Title>
                  <div className="px-6 pb-6">{selectedProject.name}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Portfolio;
