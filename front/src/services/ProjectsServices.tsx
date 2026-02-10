export const getProjects = async () => {
    return [
        { id: 1, name: "Project Alpha", description: "First project" },
        { id: 2, name: "Project Beta", description: "Second project" },
        { id: 3, name: "Project Gamma", description: "Third project" },
    ];
};

export const getProjectById = async (id: number) => {
    return {id, name: `Project ${id}`};
}
