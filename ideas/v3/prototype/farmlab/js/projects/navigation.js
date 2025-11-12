// Projects Navigation

// Show/hide global back button
function updateBackButton() {
    const backBtn = document.getElementById('globalBackBtn');
    if (backBtn) {
        if (ProjectsState.previousPage) {
            backBtn.style.display = 'inline-block';
        } else {
            backBtn.style.display = 'none';
        }
    }
}

// Go back to previous page
function goBack() {
    if (ProjectsState.previousPage) {
        const prev = ProjectsState.previousPage;
        ProjectsState.previousPage = null; // Clear to avoid loops

        if (prev.type === 'projectsList') {
            showProjectsList();
        } else if (prev.type === 'projectDetail') {
            viewProject(prev.projectId);
        } else if (prev.type === 'cropDetail') {
            viewCrop(prev.projectId, prev.cropId);
        }
    } else {
        showProjectsList();
    }
    updateBackButton();
}

// Helper functions for navigation
function viewProjectWithoutHistory(projectId) {
    viewProject(projectId);
}

function viewCropWithoutHistory(projectId, cropId) {
    viewCrop(projectId, cropId);
}

function backToProject() {
    if (ProjectsState.currentProjectId) {
        viewProject(ProjectsState.currentProjectId);
    } else {
        showProjectsList();
    }
}
