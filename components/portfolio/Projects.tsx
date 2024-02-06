// ENTIRE FILE TO DELETE

import React from "react";
import { Project } from "types";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";//FILE TO DELETE

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      Projects
    </div>
  );
}

export default Projects;
