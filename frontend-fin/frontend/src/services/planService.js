
import api from './api';

const planService = {
    getAllPlans: async () => {
        try {
            const response = await api.get('/plans'); // Adjust endpoint as needed
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },
    // Add other plan-related API calls here if needed (e.g., getPlanById)
};

export default planService;
