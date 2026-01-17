import { create } from "zustand";
import { fetchData, fetchSingleDocument } from "../firebase";

export const usePersonalStore = create((set) => ({
  personalData: [],
  setPersonalData: (personalData) => set({ personalData }),
  fetchPersonal: async () => {
    const data = await fetchData();

    if (!data)
      return { success: "false", message: "Unable to fetch personal data" };

    set({ personalData: data.personal.data });

    return { success: true, message: "Personal Data fetched successfully" };
  },
}));

export const useProjectsStore = create((set) => ({
  projectsData: [],
  setProjectsData: (projectsData) => set({ projectsData }),
  fetchProjects: async () => {
    const data = await fetchSingleDocument("data", "projects");

    if (!data)
      return { success: "false", message: "Unable to fetch projects data" };

    set({ projectsData: data.projects });

    return { success: true, message: "Projects Data fetched successfully" };
    //   const personal = data.personal.data;
    //   const projects = data.projects;
  },
}));
